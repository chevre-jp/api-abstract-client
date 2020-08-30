import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../../factory';

import { Service } from '../../service';

/**
 * 返金取引サービス
 */
export class RefundTransactionService extends Service {
    /**
     * 取引開始
     */
    public async start(
        params: factory.transaction.refund.IStartParamsWithoutDetail
    ): Promise<factory.transaction.refund.ITransaction> {
        return this.fetch({
            uri: `/transactions/${factory.transactionType.Refund}/start`,
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 取引確定
     */
    public async confirm(params: factory.transaction.refund.IConfirmParams): Promise<void> {
        await this.fetch({
            uri: (typeof params.transactionNumber === 'string')
                ? `/transactions/${factory.transactionType.Refund}/${(<any>params).transactionNumber}/confirm?transactionNumber=1`
                : `/transactions/${factory.transactionType.Refund}/${encodeURIComponent(String(params.id))}/confirm`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }

    /**
     * 取引中止
     */
    public async cancel(params: {
        id?: string;
        transactionNumber?: string;
    }): Promise<void> {
        await this.fetch({
            uri: (typeof params.transactionNumber === 'string')
                ? `/transactions/${factory.transactionType.Refund}/${params.transactionNumber}/cancel?transactionNumber=1`
                : `/transactions/${factory.transactionType.Refund}/${encodeURIComponent(String(params.id))}/cancel`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }
}
