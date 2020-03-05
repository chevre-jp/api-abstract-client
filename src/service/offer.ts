import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { ISearchResult, Service } from '../service';

/**
 * オファーサービス
 */
export class OfferService extends Service {
    /**
     * 券種作成
     */
    public async createTicketType(
        params: factory.ticketType.ITicketType
    ): Promise<factory.ticketType.ITicketType> {
        return this.fetch({
            uri: '/ticketTypes',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * 券種検索
     */
    public async searchTicketTypes(
        params: factory.ticketType.ITicketTypeSearchConditions
    ): Promise<ISearchResult<factory.ticketType.ITicketType[]>> {
        return this.fetch({
            uri: '/ticketTypes',
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
     * IDで券種検索
     */
    public async findTicketTypeById(params: {
        id: string;
    }): Promise<factory.ticketType.ITicketType> {
        return this.fetch({
            uri: `/ticketTypes/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 券種更新
     */
    public async updateTicketType(params: factory.ticketType.ITicketType): Promise<void> {
        await this.fetch({
            uri: `/ticketTypes/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 券種削除
     */
    public async deleteTicketType(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/ticketTypes/${encodeURIComponent(String(params.id))}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * オファー作成
     */
    public async create(
        params: factory.offer.IOffer
    ): Promise<factory.offer.IOffer> {
        return this.fetch({
            uri: '/offers',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * オファー検索
     */
    public async search(
        params: factory.offer.ISearchConditions
    ): Promise<ISearchResult<factory.offer.IOffer[]>> {
        return this.fetch({
            uri: '/offers',
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

    public async findById(params: { id: string }): Promise<factory.offer.IOffer> {
        return this.fetch({
            uri: `/offers/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * オファー更新
     */
    public async updateOffer(params: factory.offer.IOffer): Promise<void> {
        await this.fetch({
            uri: `/offers/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * オファー削除
     */
    public async deleteOffer(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/offers/${encodeURIComponent(String(params.id))}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
