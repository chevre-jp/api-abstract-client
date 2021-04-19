import { CREATED } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

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
}
