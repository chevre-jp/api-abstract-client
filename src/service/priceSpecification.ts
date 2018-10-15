import { OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 価格仕様サービス
 */
export class PriceSpecificationService extends Service {
    /**
     * 複合価格仕様検索
     */
    public async searchCompoundPriceSpecifications<T extends factory.priceSpecificationType>(
        params: factory.compoundPriceSpecification.ISearchConditions<T>
    ): Promise<{
        totalCount: number;
        data: factory.compoundPriceSpecification.IPriceSpecification<T>[];
    }> {
        return this.fetch({
            uri: '/priceSpecifications/compoundPriceSpecification',
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
}
