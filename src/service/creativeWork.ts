import * as factory from '@chevre/factory';
import { CREATED, NO_CONTENT, OK } from 'http-status';

import { Service } from '../service';

/**
 * 作品サービス
 */
export class CreativeWorkService extends Service {
    public async createMovie(
        params: factory.creativeWork.movie.ICreativeWork
    ): Promise<factory.creativeWork.movie.ICreativeWork> {
        return this.fetch({
            uri: '/creativeWorks/movie',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }
    public async searchMovies(params: factory.creativeWork.movie.ISearchConditions): Promise<{
        totalCount: number;
        data: factory.creativeWork.movie.ICreativeWork[];
    }> {
        return this.fetch({
            uri: '/creativeWorks/movie',
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
    public async findMovieByIdentifier(params: {
        identifier: string;
    }): Promise<factory.creativeWork.movie.ICreativeWork> {
        return this.fetch({
            uri: `/creativeWorks/movie/${params.identifier}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
    public async updateMovie(params: factory.creativeWork.movie.ICreativeWork): Promise<void> {
        await this.fetch({
            uri: `/creativeWorks/movie/${params.identifier}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }
    public async deleteMovie(params: {
        identifier: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/creativeWorks/movie/${params.identifier}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
