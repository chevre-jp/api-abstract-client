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
    ): Promise<factory.reservation.event.IReservation<factory.event.screeningEvent.IEvent>[]> {
        return this.fetch({
            uri: '/reservations/eventReservation/screeningEvent',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        });
    }
}