import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../../factory';

import { Service } from '../../service';

/**
 * 決済取引サービス
 */
export class PayTransactionService extends Service {
    /**
     * 決済方法認証
     */
    public async check(
        params: factory.action.check.paymentMethod.movieTicket.IAttributes
    ): Promise<factory.action.check.paymentMethod.movieTicket.IAction> {
        return this.fetch({
            uri: `/transactions/${factory.transactionType.Pay}/check`,
            method: 'POST',
            expectedStatusCodes: [CREATED],
            body: params
        })
            .then(async (response) => response.json());
    }

    /**
     * 取引開始
     */
    public async start(
        params: factory.transaction.pay.IStartParamsWithoutDetail
    ): Promise<factory.transaction.pay.ITransaction> {
        return this.fetch({
            uri: `/transactions/${factory.transactionType.Pay}/start`,
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 取引確定
     */
    public async confirm(params: factory.transaction.pay.IConfirmParams): Promise<void> {
        await this.fetch({
            uri: (typeof params.transactionNumber === 'string')
                ? `/transactions/${factory.transactionType.Pay}/${(<any>params).transactionNumber}/confirm?transactionNumber=1`
                : `/transactions/${factory.transactionType.Pay}/${encodeURIComponent(String(params.id))}/confirm`,
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
                ? `/transactions/${factory.transactionType.Pay}/${params.transactionNumber}/cancel?transactionNumber=1`
                : `/transactions/${factory.transactionType.Pay}/${encodeURIComponent(String(params.id))}/cancel`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }
}
