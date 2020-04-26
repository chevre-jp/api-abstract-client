import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';

import { Service } from '../service';

/**
 * プロダクトサービス
 */
export class ProductService extends Service {
    /**
     * 作成
     */
    public async create(
        params: any
    ): Promise<any> {
        return this.fetch({
            uri: '/products',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * 検索
     */
    public async search(
        params: any
    ): Promise<{
        data: any[];
    }> {
        return this.fetch({
            uri: '/products',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return {
                data: await response.json()
            };
        });
    }

    public async findById(params: {
        id: string;
    }): Promise<any> {
        return this.fetch({
            uri: `/products/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    public async update(
        params: any
    ): Promise<void> {
        await this.fetch({
            uri: `/products/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    public async deleteById(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/products/${encodeURIComponent(String(params.id))}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    public async searchOffers(params: {
        id: string;
    }): Promise<factory.event.screeningEvent.ITicketOffer[]> {
        return this.fetch({
            uri: `/products/${encodeURIComponent(String(params.id))}/offers`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
