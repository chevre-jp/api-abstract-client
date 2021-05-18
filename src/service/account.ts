import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';

import { ISearchResult, Service } from '../service';

export interface IOpenParams {
    /**
     * プロジェクト
     */
    project: {
        typeOf: 'Project';
        id: string;
    };
    /**
     * 口座種別
     */
    typeOf: string;
    /**
     * 口座タイプ
     */
    accountType: string;
    /**
     * 口座番号
     * Pecorinoサービス内(ひとつのPecorinoAPIエンドポイント)でユニークとなるように指定側で管理すること
     * 重複すればステータスコード409が返されます。
     */
    accountNumber: string;
    /**
     * 口座名義
     */
    name: string;
}

/**
 * 口座サービス
 */
export class AccountService extends Service {
    /**
     * 口座同期
     */
    public async syncAccount(params: factory.account.IAccount): Promise<void> {
        await this.fetch({
            uri: '/accounts/sync',
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 口座アクション同期
     */
    public async syncAccountAction(params: factory.account.action.moneyTransfer.IAction): Promise<void> {
        await this.fetch({
            uri: '/accountActions/sync',
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 口座を検索する
     */
    public async search(params: factory.account.ISearchConditions): Promise<ISearchResult<factory.account.IAccount[]>> {
        return this.fetch({
            uri: '/accounts',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        })
            .then(async (response) => {
                return {
                    data: await response.json()
                };
            });
    }

    /**
     * 口座の取引履歴を検索する
     */
    public async searchMoneyTransferActions(params: factory.account.action.moneyTransfer.ISearchConditions & {
        accountNumber: string;
    }): Promise<ISearchResult<factory.account.action.moneyTransfer.IAction[]>> {
        return this.fetch({
            uri: `/accounts/${params.accountNumber}/actions/moneyTransfer`,
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        })
            .then(async (response) => {
                return {
                    data: await response.json()
                };
            });
    }
}
