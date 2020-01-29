import { OK } from 'http-status';

// import * as factory from '../factory';
import { Service } from '../service';

/**
 * メンバーシッププログラムサービス
 */
export class ProgramMembershipService extends Service {
    /**
     * メンバーシッププログラム検索
     */
    public async search(
        params: any
    ): Promise<{
        totalCount: number;
        data: any[];
    }> {
        return this.fetch({
            uri: '/programMemberships',
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
}