import { CREATED } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

export interface ICreateParams {
    project: factory.project.IProject;
    typeOf: 'Authorization';
    code: string;
    object: any;
    validFrom: Date;
    expiresInSeconds: number;

}

/**
 * 承認サービス
 */
export class AuthorizationService extends Service {
    /**
     * 承認発行
     */
    public async create(params: ICreateParams[]): Promise<factory.authorization.IAuthorization[]> {

        return this.fetch({
            uri: '/authorizations',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }
}
