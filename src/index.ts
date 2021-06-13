// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import * as factory from './factory';

import { AuthClient } from './auth/authClient';

import { AccountService } from './service/account';
import { AccountActionService } from './service/accountAction';
import { AccountingReportService } from './service/accountingReport';
import { AccountTitleService } from './service/accountTitle';
import { DepositTransactionService } from './service/accountTransaction/deposit';
import { TransferTransactionService } from './service/accountTransaction/transfer';
import { WithdrawTransactionService } from './service/accountTransaction/withdraw';
import { ActionService } from './service/action';
import { AssetTransactionService } from './service/assetTransaction';
import { CancelReservationAssetTransactionService } from './service/assetTransaction/cancelReservation';
import { MoneyTransferAssetTransactionService } from './service/assetTransaction/moneyTransfer';
import { PayAssetTransactionService } from './service/assetTransaction/pay';
import { RefundAssetTransactionService } from './service/assetTransaction/refund';
import { RegisterServiceAssetTransactionService } from './service/assetTransaction/registerService';
import { ReserveAssetTransactionService } from './service/assetTransaction/reserve';
import { AuthorizationService } from './service/authorization';
import { CategoryCodeService } from './service/categoryCode';
import { CreativeWorkService } from './service/creativeWork';
import { CustomerService } from './service/customer';
import { EventService } from './service/event';
import { IAMService } from './service/iam';
import { MeService } from './service/me';
import { OfferService } from './service/offer';
import { OfferCatalogService } from './service/offerCatalog';
import { OrderService } from './service/order';
import { OwnershipInfoService } from './service/ownershipInfo';
import { PlaceService } from './service/place';
import { PriceSpecificationService } from './service/priceSpecification';
import { ProductService } from './service/product';
import { ProjectService } from './service/project';
import { ReservationService } from './service/reservation';
import { SalesReportService } from './service/salesReport';
import { SellerService } from './service/seller';
import { ServiceOutputService } from './service/serviceOutput';
import { TaskService } from './service/task';
import { TransactionNumberService } from './service/transactionNumber';
import { UserPoolService } from './service/userPool';

import * as transporters from './transporters';

export import factory = factory;
export import transporters = transporters;

/**
 * 認証クライアント抽象クラス
 */
export abstract class Auth extends AuthClient { }

export namespace service {
    /**
     * 口座サービス
     */
    export class Account extends AccountService { }
    /**
     * 口座アクションサービス
     */
    export class AccountAction extends AccountActionService { }
    /**
     * 経理レポートサービス
     */
    export class AccountingReport extends AccountingReportService { }
    /**
     * 勘定科目サービス
     */
    export class AccountTitle extends AccountTitleService { }
    /**
     * アクションサービス
     */
    export class Action extends ActionService { }
    /**
     * 承認サービス
     */
    export class Authorization extends AuthorizationService { }
    /**
     * カテゴリーコード`サービス
     */
    export class CategoryCode extends CategoryCodeService { }
    /**
     * コンテンツサービス
     */
    export class CreativeWork extends CreativeWorkService { }
    /**
     * 顧客サービス
     */
    export class Customer extends CustomerService { }
    /**
     * イベントサービス
     */
    export class Event extends EventService { }
    /**
     * IAMサービス
     */
    export class IAM extends IAMService { }
    /**
     * Meサービス
     */
    export class Me extends MeService { }
    /**
     * 注文サービス
     */
    export class Order extends OrderService { }
    /**
     * 所有権サービス
     */
    export class OwnershipInfo extends OwnershipInfoService { }
    /**
     * 場所サービス
     */
    export class Place extends PlaceService { }
    /**
     * 価格仕様サービス
     */
    export class PriceSpecification extends PriceSpecificationService { }
    /**
     * プロダクトサービス
     */
    export class Product extends ProductService { }
    /**
     * プロジェクトサービス
     */
    export class Project extends ProjectService { }
    /**
     * 予約サービス
     */
    export class Reservation extends ReservationService { }

    /**
     * オファーサービス
     */
    export class Offer extends OfferService { }

    /**
     * オファーカタログサービス
     */
    export class OfferCatalog extends OfferCatalogService { }
    /**
     * 売上レポートサービス
     */
    export class SalesReport extends SalesReportService { }
    /**
     * 販売者サービス
     */
    export class Seller extends SellerService { }

    /**
     * サービスアウトプットサービス
     */
    export class ServiceOutput extends ServiceOutputService { }

    /**
     * タスクサービス
     */
    export class Task extends TaskService { }

    export namespace accountTransaction {
        /**
         * 入金取引サービス
         */
        export class Deposit extends DepositTransactionService { }
        /**
         * 出金取引サービス
         */
        export class Withdraw extends WithdrawTransactionService { }
        /**
         * 転送取引サービス
         */
        export class Transfer extends TransferTransactionService { }
    }

    /**
     * 取引サービス
     */
    export class AssetTransaction extends AssetTransactionService { }

    export namespace assetTransaction {
        /**
         * 予約キャンセル取引サービス
         */
        export class CancelReservation extends CancelReservationAssetTransactionService { }
        /**
         * 通貨転送取引サービス
         */
        export class MoneyTransfer extends MoneyTransferAssetTransactionService { }
        /**
         * 決済取引サービス
         */
        export class Pay extends PayAssetTransactionService { }
        /**
         * 返金取引サービス
         */
        export class Refund extends RefundAssetTransactionService { }
        /**
         * サービス登録取引
         */
        export class RegisterService extends RegisterServiceAssetTransactionService { }
        /**
         * 予約取引サービス
         */
        export class Reserve extends ReserveAssetTransactionService { }
    }

    /**
     * 取引番号サービス
     */
    export class TransactionNumber extends TransactionNumberService { }

    /**
     * Cognitoユーザープールサービス
     */
    export class UserPool extends UserPoolService { }
}
