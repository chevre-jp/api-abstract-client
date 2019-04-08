import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

export type IMovieTheater = factory.place.movieTheater.IPlace;

/**
 * 場所サービス
 */
export class PlaceService extends Service {
    /**
     * 劇場作成
     */
    public async createMovieTheater(
        params: IMovieTheater
    ): Promise<IMovieTheater> {
        return this.fetch({
            uri: `/places/${factory.placeType.MovieTheater}`,
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * 劇場検索
     */
    public async searchMovieTheaters(
        params: factory.place.movieTheater.ISearchConditions
    ): Promise<{
        totalCount: number;
        data: factory.place.movieTheater.IPlaceWithoutScreeningRoom[];
    }> {
        return this.fetch({
            uri: `/places/${factory.placeType.MovieTheater}`,
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return {
                totalCount: Number(<string>response.headers.get('X-Total-Count')),
                data: await response.json()
            };
        });
    }

    /**
     * 劇場コードで劇場取得
     */
    public async findMovieTheaterByBranchCode(params: {
        branchCode: string;
    }): Promise<IMovieTheater> {
        return this.fetch({
            uri: `/places/${factory.placeType.MovieTheater}/${encodeURIComponent(String(params.branchCode))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 劇場更新
     */
    public async updateMovieTheater(params: IMovieTheater): Promise<void> {
        await this.fetch({
            uri: `/places/${factory.placeType.MovieTheater}/${encodeURIComponent(String(params.branchCode))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 劇場削除
     */
    public async deleteMovieTheater(params: {
        branchCode: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/places/${factory.placeType.MovieTheater}/${encodeURIComponent(String(params.branchCode))}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
