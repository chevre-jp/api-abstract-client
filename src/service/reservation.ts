import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

export type IEventReservation = factory.reservation.IReservation<factory.reservationType.EventReservation>;

/**
 * 予約サービス
 */
export class ReservationService extends Service {
    /**
     * 予約検索
     */
    public async search<T extends factory.reservationType>(
        params: factory.reservation.ISearchConditions<T>
    ): Promise<{
        totalCount: number;
        data: factory.reservation.IReservation<T>[];
    }> {
        return this.fetch({
            uri: '/reservations',
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

    /**
     * ストリーミングダウンロード
     */
    public async download<T extends factory.reservationType>(params: factory.reservation.ISearchConditions<T> & {
        format: any;
    }): Promise<NodeJS.ReadableStream | ReadableStream> {
        return this.fetch({
            uri: `/reservations/download`,
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        })
            .then(async (response) => <NodeJS.ReadableStream | ReadableStream>response.body);
    }

    /**
     * IDで予約検索
     */
    public async findById<T extends factory.reservationType>(params: {
        id: string;
    }): Promise<factory.reservation.IReservation<T>> {
        return this.fetch({
            uri: `/reservations/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 予約部分更新
     */
    public async update(params: {
        id: string;
        update: any;
    }): Promise<void> {
        await this.fetch({
            uri: `/reservations/${encodeURIComponent(String(params.id))}`,
            method: 'PATCH',
            body: params.update,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 予約IDあるいは予約番号指定でチェックイン(発券)する
     */
    public async checkInScreeningEventReservations(params: {
        id?: string;
        reservationNumber?: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/reservations/eventReservation/screeningEvent/checkedIn`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 入場する
     */
    public async attendScreeningEvent(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/reservations/eventReservation/screeningEvent/${encodeURIComponent(String(params.id))}/attended`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
