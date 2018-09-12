import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * イベントサービス
 */
export class EventService extends Service {
    /**
     * 上映イベントシリーズ作成
     */
    public async createScreeningEventSeries(
        params: factory.event.screeningEventSeries.IAttributes
    ): Promise<factory.event.screeningEventSeries.IEvent> {
        return this.fetch({
            uri: '/events/screeningEventSeries',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }
    /**
     * 上映イベントシリーズ検索
     */
    public async searchScreeningEventSeries(
        params: factory.event.screeningEventSeries.ISearchConditions
    ): Promise<{
        totalCount: number;
        data: factory.event.screeningEventSeries.IEvent[];
    }> {
        return this.fetch({
            uri: '/events/screeningEventSeries',
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
     * IDで上映イベントシリーズ検索
     */
    public async findScreeningEventSeriesById(params: {
        id: string;
    }): Promise<factory.event.screeningEventSeries.IEvent> {
        return this.fetch({
            uri: `/events/screeningEventSeries/${params.id}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
    /**
     * 上映イベントシリーズ更新
     */
    public async updateScreeningEventSeries(params: {
        id: string;
        attributes: factory.event.screeningEventSeries.IAttributes;
    }): Promise<void> {
        await this.fetch({
            uri: `/events/screeningEventSeries/${params.id}`,
            method: 'PUT',
            body: params.attributes,
            expectedStatusCodes: [NO_CONTENT]
        });
    }
    /**
     * 上映イベントシリーズ削除
     */
    public async deleteScreeningEventSeries(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/events/screeningEventSeries/${params.id}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
    /**
     * 上映イベント作成
     */
    public async createScreeningEvent(
        params: factory.event.screeningEvent.IAttributes
    ): Promise<factory.event.screeningEvent.IEvent> {
        return this.fetch({
            uri: '/events/screeningEvent',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }
    /**
     * 上映イベント検索
     */
    public async searchScreeningEvents(
        params: factory.event.screeningEvent.ISearchConditions
    ): Promise<{
        totalCount: number;
        data: factory.event.screeningEvent.IEvent[];
    }> {
        return this.fetch({
            uri: '/events/screeningEvent',
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
     * IDで上映イベント検索
     */
    public async findScreeningEventById(params: {
        id: string;
    }): Promise<factory.event.screeningEvent.IEvent> {
        return this.fetch({
            uri: `/events/screeningEvent/${params.id}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
    /**
     * 上映イベント更新
     */
    public async updateScreeningEvent(params: {
        id: string;
        attributes: factory.event.screeningEvent.IAttributes;
    }): Promise<void> {
        await this.fetch({
            uri: `/events/screeningEvent/${params.id}`,
            method: 'PUT',
            body: params.attributes,
            expectedStatusCodes: [NO_CONTENT]
        });
    }
    /**
     * 上映イベント削除
     */
    public async deleteScreeningEvent(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/events/screeningEvent/${params.id}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
    /**
     * 上映イベントに対する券種検索
     */
    public async searchScreeningEventTicketTypes(params: {
        eventId: string;
    }): Promise<factory.ticketType.ITicketType[]> {
        return this.fetch({
            uri: `/events/screeningEvent/${params.eventId}/ticketTypes`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
    /**
     * 上映イベントに対するオファー検索
     */
    public async searchScreeningEventOffers(params: {
        eventId: string;
    }): Promise<factory.event.screeningEvent.IScreeningRoomSectionOffer[]> {
        return this.fetch({
            uri: `/events/screeningEvent/${params.eventId}/offers`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
}
