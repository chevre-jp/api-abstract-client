import { NO_CONTENT, OK } from 'http-status';

import * as factory from '../../factory';

import { Service } from '../../service';

/**
 * 決済取引サービス
 */
export class PaymentTransactionService extends Service {
    /**
     * 取引開始
     */
    public async start(params: {
        project: any;
        typeOf: 'Payment';
        transactionNumber?: string;
        agent: any;
        recipient?: any;
        object: {
            typeOf: string; // CreditCard,PaymentCard,Account,PaymentAgency...
            paymentMethod: {
                accountId: string;
                typeOf: string;
                name: string;
                paymentMethodId: string;
                totalPaymentDue: factory.monetaryAmount.IMonetaryAmount;
                // additionalProperty: IPropertyValue<string>[];
            };
            // amount: factory.monetaryAmount.IMonetaryAmount;
            description?: string;
            fromLocation: { // クレジットカード情報、口座情報
                typeOf: string; // PointAccount,PrepaidPaymentCard...
                identifier: string;
            };
        };
        expires: Date;
    }): Promise<factory.transaction.moneyTransfer.ITransaction> {
        return this.fetch({
            uri: `/transactions/Payment/start`,
            method: 'POST',
            body: params,
            expectedStatusCodes: [OK]
        }).then(async (response) => response.json());
    }

    /**
     * 取引確定
     */
    public async confirm(params: {
        id?: string;
        transactionNumber?: string;
    }): Promise<void> {
        await this.fetch({
            uri: (typeof params.transactionNumber === 'string')
                ? `/transactions/Payment/${params.transactionNumber}/confirm?transactionNumber=1`
                : `/transactions/Payment/${encodeURIComponent(String(params.id))}/confirm`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }

    /**
     * 取引中止
     */
    public async cancel(params: {
        id?: string;
        transactionNumber?: string;
    }): Promise<void> {
        await this.fetch({
            uri: (typeof params.transactionNumber === 'string')
                ? `/transactions/Payment/${params.transactionNumber}/cancel?transactionNumber=1`
                : `/transactions/Payment/${encodeURIComponent(String(params.id))}/cancel`,
            method: 'PUT',
            expectedStatusCodes: [NO_CONTENT],
            body: params
        });
    }
}
