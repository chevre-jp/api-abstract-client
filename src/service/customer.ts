import { CREATED, NO_CONTENT, OK } from 'http-status';

import { ISearchResult, Service } from '../service';

export type ICustomer = any;

/**
 * 顧客サービス
 */
export class CustomerService extends Service {
    /**
     * 顧客作成
     */
    public async create(
        params: ICustomer
    ): Promise<ICustomer> {
        return this.fetch({
            uri: '/customers',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        })
            .then(async (response) => response.json());
    }

    /**
     * 顧客取得
     */
    public async findById(params: {
        id: string;
    }): Promise<ICustomer> {
        return this.fetch({
            uri: `/customers/${params.id}`,
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        })
            .then(async (response) => response.json());
    }

    /**
     * 顧客検索
     */
    public async search(
        params: any
    ): Promise<ISearchResult<ICustomer[]>> {
        return this.fetch({
            uri: '/customers',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        })
            .then(async (response) => {
                return {
                    data: await response.json()
                };
            });
    }

    /**
     * 顧客編集
     */
    public async update(params: {
        id: string;
        attributes: ICustomer;
    }): Promise<void> {
        await this.fetch({
            uri: `/customers/${params.id}`,
            method: 'PUT',
            body: params.attributes,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 顧客削除
     */
    public async deleteById(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/customers/${params.id}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
