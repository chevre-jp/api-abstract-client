import { NO_CONTENT } from 'http-status';

import * as factory from '../factory';

import { Service } from '../service';

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
}
