import { CREATED, NO_CONTENT, OK } from 'http-status';

import * as factory from '../factory';
import { Service } from '../service';

/**
 * 科目サービス
 * @deprecated 東映ローカライズなので、いずれ廃止予定
 */
export class SubjectService extends Service {
    public async createSubject(
        params: {
            attributes: factory.subject.ISubjectAttributes;
        }
    ): Promise<factory.subject.ISubjectAttributes> {
        return this.fetch({
            uri: '/subjects',
            method: 'POST',
            body: params,
            expectedStatusCodes: [CREATED]
        }).then(async (response) => response.json());
    }
    public async searchAll(params: any): Promise<factory.subject.ISubject> {
        return this.fetch({
            uri: '/subjects/getSubjectList',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
    public async searchSubject(params: factory.subject.ISubjectSearchConditions): Promise<{
        data: factory.subject.ISubject[];
    }> {
        return this.fetch({
            uri: '/subjects',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => {
            return {
                data: await response.json()
            };
        });
    }
    public async findSubjectById(params: {
        id: string;
    }): Promise<factory.subject.ISubject> {
        return this.fetch({
            uri: `/subjects/${encodeURIComponent(String(params.id))}`,
            method: 'GET',
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }
    public async updateSubject(
        params: {
            id: string;
            attributes: factory.subject.ISubjectAttributes;
        }
    ): Promise<void> {
        await this.fetch({
            uri: `/subjects/${encodeURIComponent(String(params.id))}`,
            method: 'PUT',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
