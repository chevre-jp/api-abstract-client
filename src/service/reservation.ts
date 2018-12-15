import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 予約サービス
 */
export class ReservationService extends Service {
    /**
     * 上映イベント予約検索
     */
    public async searchScreeningEventReservations(
        params: factory.reservation.event.ISearchConditions
    ): Promise<{
        totalCount: number;
        data: factory.reservation.event.IReservation<factory.event.screeningEvent.IEvent>[];
    }> {
        return this.fetch({
            uri: '/reservations/eventReservation/screeningEvent',
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
     * IDで上映イベント予約検索
     */
    public async findScreeningEventReservationById(params: {
        id: string;
    }): Promise<factory.reservation.event.IReservation<factory.event.screeningEvent.IEvent>> {
        return this.fetch({
            uri: `/reservations/eventReservation/screeningEvent/${params.id}`,
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
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
     * 発券する
     * @deprecated Use checkInScreeningEventReservation
     */
    public async checkInScreeningEvent(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/reservations/eventReservation/screeningEvent/${params.id}/checkedIn`,
            method: 'PUT',
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
            uri: `/reservations/eventReservation/screeningEvent/${params.id}/attended`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
