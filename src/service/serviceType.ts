import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 興行区分サービス
 */
export class ServiceTypeService extends Service {
    public async create(
        params: factory.serviceType.IServiceType
    ): Promise<factory.serviceType.IServiceType> {
        return this.fetch({
            uri: '/serviceTypes',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    public async search(params: factory.serviceType.ISearchConditions): Promise<{
        totalCount: number;
        data: factory.serviceType.IServiceType[];
    }> {
        return this.fetch({
            uri: '/serviceTypes',
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

    public async findById(params: {
        id: string;
    }): Promise<factory.serviceType.IServiceType> {
        return this.fetch({
            uri: `/serviceTypes/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    public async update(params: factory.serviceType.IServiceType): Promise<void> {
        await this.fetch({
            uri: `/serviceTypes/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
