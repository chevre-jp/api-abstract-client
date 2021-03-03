import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';

import { ISearchResult, Service } from '../service';

export type IUseAction = factory.action.consume.use.reservation.IAction;

/**
 * 予約サービス
 */
export class ReservationService extends Service {
    /**
     * 予約検索
     */
    public async search<T extends factory.reservationType>(
        params: factory.reservation.ISearchConditions<T>
    ): Promise<ISearchResult<factory.reservation.IReservation<T>[]>> {
        return this.fetch({
            uri: '/reservations',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return {
                totalCount: (typeof response.headers.get('X-Total-Count') === 'string')
                    ? Number(<string>response.headers.get('X-Total-Count'))
                    : undefined,
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
     * 予約を使用する(入場する)
     */
    public async use(params: {
        agent?: any;
        instrument?: { token?: string };
        location?: { identifier?: string };
        object: { id: string };
    }): Promise<void | IUseAction> {
        return this.fetch({
            uri: `/reservations/eventReservation/screeningEvent/${encodeURIComponent(String(params.object.id))}/attended`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT, OK]
        })
            .then(async (response) => {
                if (response.status === OK) {
                    return <Promise<IUseAction>>response.json();
                } else {
                    return;
                }
            });
    }
}
