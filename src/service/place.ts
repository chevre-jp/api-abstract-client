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
     * 劇場取得
     */
    public async findMovieTheaterById(params: {
        id: string;
    }): Promise<IMovieTheater> {
        return this.fetch({
            uri: `/places/${factory.placeType.MovieTheater}/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 劇場更新
     */
    public async updateMovieTheater(params: IMovieTheater): Promise<void> {
        await this.fetch({
            uri: `/places/${factory.placeType.MovieTheater}/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 劇場削除
     */
    public async deleteMovieTheater(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/places/${factory.placeType.MovieTheater}/${encodeURIComponent(String(params.id))}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * スクリーン検索
     */
    public async searchScreeningRooms(
        params: any
    ): Promise<{
        totalCount?: number;
        data: factory.place.screeningRoom.IPlace[];
    }> {
        return this.fetch({
            uri: `/places/${factory.placeType.ScreeningRoom}`,
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return {
                data: await response.json()
            };
        });
    }

    /**
     * スクリーン更新
     */
    public async updateScreeningRoom(params: factory.place.screeningRoom.IPlace): Promise<void> {
        await this.fetch({
            uri: `/places/${factory.placeType.ScreeningRoom}/${encodeURIComponent(String(params.branchCode))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 座席検索
     */
    public async searchSeats(
        params: any
    ): Promise<{
        totalCount?: number;
        data: factory.place.seat.IPlace[];
    }> {
        return this.fetch({
            uri: `/places/${factory.placeType.Seat}`,
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return {
                data: await response.json()
            };
        });
    }

    /**
     * 座席更新
     */
    public async updateSeat(params: factory.place.seat.IPlace): Promise<void> {
        await this.fetch({
            uri: `/places/${factory.placeType.Seat}/${encodeURIComponent(String(params.branchCode))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
