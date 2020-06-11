import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../../factory';
import { Service } from '../../service';

/**
 * サービス登録取引サービス
 */
export class RegisterServiceTransactionService extends Service {
    /**
     * 取引開始
     */
    public async start(
        params: factory.transaction.registerService.IStartParamsWithoutDetail
    ): Promise<factory.transaction.registerService.ITransaction> {
        return this.fetch({
            uri: `/transactions/${factory.transactionType.RegisterService}/start`,
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 取引確定
     */
    public async confirm(params: factory.transaction.registerService.IConfirmParams): Promise<void> {
        await this.fetch({
            uri: (typeof (<any>params).transactionNumber === 'string')
                ? `/transactions/${factory.transactionType.RegisterService}/${(<any>params).transactionNumber}/confirm?transactionNumber=1`
                : `/transactions/${factory.transactionType.RegisterService}/${encodeURIComponent(String(params.id))}/confirm`,
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
                ? `/transactions/${factory.transactionType.RegisterService}/${params.transactionNumber}/cancel?transactionNumber=1`
                : `/transactions/${factory.transactionType.RegisterService}/${encodeURIComponent(String(params.id))}/cancel`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }
}
