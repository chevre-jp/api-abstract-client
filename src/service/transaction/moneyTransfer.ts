import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../../factory';

import { Service } from '../../service';

/**
 * 通貨転送取引サービス
 */
export class MoneyTransferTransactionService extends Service {
    /**
     * 取引開始
     */
    public async start(
        params: factory.transaction.moneyTransfer.IStartParamsWithoutDetail
    ): Promise<factory.transaction.moneyTransfer.ITransaction> {
        return this.fetch({
            uri: `/transactions/${factory.transactionType.MoneyTransfer}/start`,
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 取引確定
     */
    public async confirm(params: {
        id?: string;
        transactionNumber?: string;
    }): Promise<void> {
        await this.fetch({
            uri: (typeof params.transactionNumber === 'string')
                ? `/transactions/${factory.transactionType.MoneyTransfer}/${params.transactionNumber}/confirm?transactionNumber=1`
                : `/transactions/${factory.transactionType.MoneyTransfer}/${encodeURIComponent(String(params.id))}/confirm`,
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
                ? `/transactions/${factory.transactionType.MoneyTransfer}/${params.transactionNumber}/cancel?transactionNumber=1`
                : `/transactions/${factory.transactionType.MoneyTransfer}/${encodeURIComponent(String(params.id))}/cancel`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }
}
