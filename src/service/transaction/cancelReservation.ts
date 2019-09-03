import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../../factory';
import { Service } from '../../service';

/**
 * 予約キャンセル取引サービス
 */
export class CancelReservationTransactionService extends Service {
    /**
     * 取引を開始する
     */
    public async start(
        params: factory.transaction.cancelReservation.IStartParamsWithoutDetail
    ): Promise<factory.transaction.cancelReservation.ITransaction> {
        return this.fetch({
            uri: '/transactions/cancelReservation/start',
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 取引確定
     */
    public async confirm(params: factory.transaction.cancelReservation.IConfirmParams): Promise<void> {
        await this.fetch({
            uri: `/transactions/cancelReservation/${encodeURIComponent(String(params.id))}/confirm`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }

    /**
     * 取引中止
     */
    public async cancel(params: { id: string }): Promise<void> {
        await this.fetch({
            uri: `/transactions/cancelReservation/${encodeURIComponent(String(params.id))}/cancel`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }
}
