import * as factory from '@chevre/factory';
import { OK } from 'http-status';

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
                totalCount: Number(<string>response.headers.get('Total-Count')),
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
}
