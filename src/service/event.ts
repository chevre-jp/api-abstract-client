import * as factory from '@chevre/factory';
import { OK } from 'http-status';

import { Service } from '../service';

/**
 * イベントサービス
 */
export class EventService extends Service {
    /**
     * 上映イベントシリーズ検索
     */
    public async searchScreeningEventSeries(
        params: factory.event.screeningEventSeries.ISearchConditions
    ): Promise<factory.event.screeningEventSeries.IEvent[]> {
        return this.fetch({
            uri: '/events/screeningEventSeries',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        });
    }
    /**
     * 上映イベント検索
     */
    public async searchScreeningEvents(
        params: factory.event.screeningEvent.ISearchConditions
    ): Promise<factory.event.screeningEvent.IEvent[]> {
        return this.fetch({
            uri: '/events/screeningEvent',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        });
    }
    /**
     * 上映イベントに対する券種検索
     */
    public async searchScreeningEventTicketTyps(params: {
        eventId: string;
    }): Promise<factory.ticketType.ITicketType[]> {
        return this.fetch({
            uri: `/events/screeningEvent/${params.eventId}/ticketTypes`,
            method: 'GET',
            expectedStatusCodes: [OK]
        });
    }
    /**
     * 上映イベントに対するオファー検索
     */
    public async searchScreeningEventOffers(params: {
        eventId: string;
    }): Promise<any[]> {
        return this.fetch({
            uri: `/events/screeningEvent/${params.eventId}/offers`,
            method: 'GET',
            expectedStatusCodes: [OK]
        });
    }
}
