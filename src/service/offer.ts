import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { ISearchResult, Service } from '../service';

/**
 * オファーサービス
 */
export class OfferService extends Service {
    /**
     * オファーカテゴリ検索
     */
    public async searchCategories(
        params: { project?: { ids?: string[] } }
    ): Promise<ISearchResult<factory.ticketType.ITicketTypeCategory[]>> {
        return this.fetch({
            uri: '/offerCategories',
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
     * 券種グループ作成
     */
    public async createTicketTypeGroup(
        params: factory.ticketType.ITicketTypeGroup
    ): Promise<factory.ticketType.ITicketTypeGroup> {
        return this.fetch({
            uri: '/ticketTypeGroups',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * 券種グループ検索
     */
    public async searchTicketTypeGroups(
        params: factory.ticketType.ITicketTypeGroupSearchConditions
    ): Promise<ISearchResult<factory.ticketType.ITicketTypeGroup[]>> {
        return this.fetch({
            uri: '/ticketTypeGroups',
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
     * IDで券種グループ検索
     */
    public async findTicketTypeGroupById(params: {
        id: string;
    }): Promise<factory.ticketType.ITicketTypeGroup> {
        return this.fetch({
            uri: `/ticketTypeGroups/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 券種グループ更新
     */
    public async updateTicketTypeGroup(params: factory.ticketType.ITicketTypeGroup): Promise<void> {
        await this.fetch({
            uri: `/ticketTypeGroups/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 券種グループ削除
     */
    public async deleteTicketTypeGroup(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/ticketTypeGroups/${encodeURIComponent(String(params.id))}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }

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
     * プロダクトオファー作成
     */
    public async createProductOffer(
        params: factory.offer.product.IOffer
    ): Promise<factory.offer.product.IOffer> {
        return this.fetch({
            uri: '/productOffers',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * プロダクトオファー検索
     */
    public async searchProductOffers(
        params: factory.offer.product.ISearchConditions
    ): Promise<ISearchResult<factory.offer.product.IOffer[]>> {
        return this.fetch({
            uri: '/productOffers',
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
     * プロダクトオファー更新
     */
    public async updateProductOffer(params: factory.offer.product.IOffer): Promise<void> {
        await this.fetch({
            uri: `/productOffers/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * プロダクトオファー削除
     */
    public async deleteProductOffer(params: {
        id: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/productOffers/${encodeURIComponent(String(params.id))}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
