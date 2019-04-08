import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

export import IPriceSpecification = factory.priceSpecification.IPriceSpecification;

/**
 * 価格仕様サービス
 */
export class PriceSpecificationService extends Service {
    /**
     * 複合価格仕様検索
     */
    // public async searchCompoundPriceSpecifications<T extends factory.priceSpecificationType>(
    //     params: factory.compoundPriceSpecification.ISearchConditions<T>
    // ): Promise<{
    //     totalCount: number;
    //     data: factory.compoundPriceSpecification.IPriceSpecification<T>[];
    // }> {
    //     return this.fetch({
    //         uri: '/priceSpecifications/compoundPriceSpecification',
    //         method: 'GET',
    //         qs: params,
    //         expectedStatusCodes: [OK]
    //     }).then(async (response) => {
    //         return {
    //             totalCount: Number(<string>response.headers.get('X-Total-Count')),
    //             data: await response.json()
    //         };
    //     });
    // }

    public async create<T extends factory.priceSpecificationType>(
        params: IPriceSpecification<T>
    ): Promise<IPriceSpecification<T>> {
        return this.fetch({
            uri: '/priceSpecifications',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * 価格仕様検索
     */
    public async search<T extends factory.priceSpecificationType>(
        params: factory.priceSpecification.ISearchConditions<T>
    ): Promise<{
        totalCount: number;
        data: IPriceSpecification<T>[];
    }> {
        return this.fetch({
            uri: '/priceSpecifications',
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

    public async findById<T extends factory.priceSpecificationType>(params: {
        id: string;
    }): Promise<IPriceSpecification<T>> {
        return this.fetch({
            uri: `/priceSpecifications/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    public async update<T extends factory.priceSpecificationType>(
        params: IPriceSpecification<T>
    ): Promise<void> {
        await this.fetch({
            uri: `/priceSpecifications/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
