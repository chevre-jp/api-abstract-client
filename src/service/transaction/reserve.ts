import * as factory from '@chevre/factory';
import { NO_CONTENT, OK } from 'http-status';

import { Service } from '../../service';

/**
 * 予約取引サービス
 */
export class ReserveTransactionService extends Service {
    /**
     * 取引を開始する
     */
    public async start(
        params: factory.transaction.reserve.IStartParamsWithoutDetail
    ): Promise<factory.transaction.reserve.ITransaction> {
        return this.fetch({
            uri: '/transactions/reserve/start',
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
    /**
     * 取引確定
     */
    public async confirm(params: {
        transactionId: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/transactions/reserve/${params.transactionId}/confirm`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: {}
        });
    }
    /**
     * 取引中止
     */
    public async cancel(params: {
        transactionId: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/transactions/reserve/${params.transactionId}/cancel`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: {}
        });
    }
}
