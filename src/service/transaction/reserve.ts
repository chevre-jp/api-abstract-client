import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../../factory';
import { Service } from '../../service';

/**
 * 予約取引サービス
 */
export class ReserveTransactionService extends Service {
    /**
     * 取引を開始する
     */
    public async start(params: factory.transaction.reserve.IStartParamsWithoutDetail): Promise<factory.transaction.reserve.ITransaction> {
        return this.fetch({
            uri: '/transactions/reserve/start',
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 予約を追加する
     */
    public async addReservations(params: {
        id: string;
        object: factory.transaction.reserve.IObjectWithoutDetail;
    }): Promise<factory.transaction.reserve.ITransaction> {
        return this.fetch({
            uri: `/transactions/reserve/${encodeURIComponent(String(params.id))}/reservations`,
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 予約を追加する(レスポンスを受け取らない)
     */
    public async addReservationsWithNoResponse(params: {
        id: string;
        object: factory.transaction.reserve.IObjectWithoutDetail;
    }): Promise<void> {
        await this.fetch({
            uri: `/transactions/reserve/${encodeURIComponent(String(params.id))}/reservations`,
            method: 'POST',
            body: params,
            qs: { expectsNoContent: '1' },
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 取引確定
     */
    public async confirm(params: factory.transaction.reserve.IConfirmParams): Promise<void> {
        await this.fetch({
            uri: (typeof params.transactionNumber === 'string')
                ? `/transactions/reserve/${params.transactionNumber}/confirm?transactionNumber=1`
                : `/transactions/reserve/${encodeURIComponent(String(params.id))}/confirm`,
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
                ? `/transactions/reserve/${params.transactionNumber}/cancel?transactionNumber=1`
                : `/transactions/reserve/${encodeURIComponent(String(params.id))}/cancel`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }
}
