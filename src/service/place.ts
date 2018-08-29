import * as factory from '@chevre/factory';
import { OK } from 'http-status';

import { Service } from '../service';

/**
 * 場所サービス
 */
export class PlaceService extends Service {
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
            uri: '/places/movieTheater',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return {
                totalCount: Number(<string>response.headers.get('Total-Count')),
                data: await response.json()
            };
        });
    }
    /**
     * 劇場コードで劇場取得
     */
    public async findMovieTheaterByBranchCode(params: {
        branchCode: string;
    }): Promise<factory.place.movieTheater.IPlace> {
        return this.fetch({
            uri: `/places/movieTheater/${params.branchCode}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
