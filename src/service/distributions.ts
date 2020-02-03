import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 配給サービス
 * @deprecated 東映ローカライズなので、いずれ廃止予定
 */
export class DistributionsService extends Service {
    public async createDistribution(params: {
        id: string;
        name: string;
    }): Promise<factory.distributor.IDistributor> {
        return this.fetch({
            uri: '/distributions/add',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    public async searchDistribution(params: factory.distributor.ISearchConditions): Promise<{
        totalCount: number;
        data: factory.distributor.IDistributor[];
    }> {
        return this.fetch({
            uri: '/distributions/search',
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

    public async updateDistribution(params: {
        id: string;
        name: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/distributions/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: { name: params.name },
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    public async deleteDistribution(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/distributions/${encodeURIComponent(String(params.id))}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
