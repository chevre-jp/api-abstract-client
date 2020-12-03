import { OK } from 'http-status';

import * as factory from '../factory';
import { ISearchResult, Service } from '../service';

/**
 * 取引サービス
 */
export class TransactionService extends Service {
    /**
     * 取引検索
     */
    public async search<T extends factory.transactionType>(
        params: factory.transaction.ISearchConditions<T>
    ): Promise<ISearchResult<factory.transaction.ITransaction<T>[]>> {
        return this.fetch({
            uri: '/transactions',
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
}
