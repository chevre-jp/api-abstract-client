import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 勘定科目サービス
 */
export class AccountTitleService extends Service {
    /**
     * 科目作成
     */
    public async create(
        params: factory.accountTitle.IAccountTitle
    ): Promise<factory.accountTitle.IAccountTitle> {
        return this.fetch({
            uri: '/accountTitles',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * 科目検索
     */
    public async search(params: factory.accountTitle.ISearchConditions): Promise<{
        totalCount: number;
        data: factory.accountTitle.IAccountTitle[];
    }> {
        return this.fetch({
            uri: '/accountTitles',
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
     * コードで科目検索
     */
    public async findByIdentifier(params: {
        identifier: string;
    }): Promise<factory.accountTitle.IAccountTitle> {
        return this.fetch({
            uri: `/accountTitles/${params.identifier}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 科目更新
     */
    public async update(params: factory.accountTitle.IAccountTitle): Promise<void> {
        await this.fetch({
            uri: `/accountTitles/${params.identifier}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 科目削除
     * 不可逆的な物理削除です
     */
    public async deleteByIdentifier(params: {
        identifier: string;
    }): Promise<void> {
        await this.fetch({
            uri: `/accountTitles/${params.identifier}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
