import { CREATED, OK } from 'http-status';

import * as factory from '../factory';
import { ISearchResult, Service } from '../service';

export type IOwnershipInfo = factory.ownershipInfo.IOwnershipInfo<factory.ownershipInfo.IGood>;

/**
 * 所有権サービス
 */
export class OwnershipInfoService extends Service {
    /**
     * 所有権発行
     */
    public async saveByIdentifier(params: IOwnershipInfo): Promise<IOwnershipInfo> {

        return this.fetch({
            uri: '/ownershipInfos/saveByIdentifier',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * 所有権検索
     */
    public async search(
        params: factory.ownershipInfo.ISearchConditions
    ): Promise<ISearchResult<IOwnershipInfo[]>> {

        return this.fetch({
            uri: '/ownershipInfos',
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
