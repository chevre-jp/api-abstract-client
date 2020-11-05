import { CREATED, OK } from 'http-status';

import { Service } from '../service';

export interface IPublishIdentifierResult {
    identifier: string;
}

/**
 * サービスアウトプットサービス
 */
export class ServiceOutputService extends Service {
    /**
     * 識別子発行
     */
    public async publishIdentifier(params: [{ project: { id: string } }]): Promise<IPublishIdentifierResult[]> {
        return this.fetch({
            uri: '/serviceOutputs/identifier',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }

    /**
     * 検索
     */
    public async search(params: any): Promise<{
        data: any[];
    }> {
        return this.fetch({
            uri: '/serviceOutputs',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return {
                data: await response.json()
            };
        });
    }
}
