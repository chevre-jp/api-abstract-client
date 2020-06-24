import { CREATED } from 'http-status';

import { Service } from '../service';

/**
 * サービスアウトプット識別子サービス
 */
export class ServiceOutputIdentifierService extends Service {
    /**
     * 発行
     */
    public async publish(params: { project: { id: string } }): Promise<{
        identifier: string;
    }> {
        return this.fetch({
            uri: '/serviceOutputIdentifiers',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }
}
