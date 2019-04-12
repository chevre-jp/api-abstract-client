import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * イベント+予約集計インターフェース
 */
export type IEventWithAggregateReservation<T extends factory.eventType> = factory.event.IEvent<T> & {
    saleTicketCount: number;
    preSaleTicketCount: number;
    freeTicketCount: number;
};

/**
 * イベントサービス
 */
export class EventService extends Service {
    /**
     * イベント作成
     */
    public async create<T extends factory.eventType>(
        params: factory.event.IAttributes<T> | factory.event.IAttributes<T>[]
    ): Promise<factory.event.IEvent<T>[]> {
        return this.fetch({
            uri: '/events',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * イベント検索
     */
    public async search<T extends factory.eventType>(
        params: factory.event.ISearchConditions<T>
    ): Promise<{
        totalCount: number;
        data: factory.event.IEvent<T>[];
    }> {
        return this.fetch({
            uri: '/events',
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
     * IDでイベント検索
     */
    public async findById<T extends factory.eventType>(params: {
        id: string;
    }): Promise<factory.event.IEvent<T>> {
        return this.fetch({
            uri: `/events/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * イベント更新
     */
    public async update<T extends factory.eventType>(params: {
        id: string;
        attributes: factory.event.IAttributes<T>;
    }): Promise<void> {
        await this.fetch({
            uri: `/events/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params.attributes,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * イベントに対するオファー検索
     */
    public async searchOffers(params: {
        id: string;
    }): Promise<factory.event.screeningEvent.IScreeningRoomSectionOffer[]> {
        return this.fetch({
            uri: `/events/${encodeURIComponent(String(params.id))}/offers`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * イベントに対するチケットオファー検索
     */
    public async searchTicketOffers(params: {
        id: string;
    }): Promise<factory.event.screeningEvent.ITicketOffer[]> {
        return this.fetch({
            uri: `/events/${encodeURIComponent(String(params.id))}/offers/ticket`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 予約集計つきのデータ検索
     */
    public async searchWithAggregateReservation<T extends factory.eventType>(
        params: factory.event.ISearchConditions<T>
    ): Promise<{
        totalCount: number;
        data: IEventWithAggregateReservation<T>[];
    }> {
        return this.fetch({
            uri: '/events/withAggregateReservation',
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
}
