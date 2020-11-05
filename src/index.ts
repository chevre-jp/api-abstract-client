// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import * as factory from './factory';

import { AuthClient } from './auth/authClient';

import { AccountTitleService } from './service/accountTitle';
import { ActionService } from './service/action';
import { CategoryCodeService } from './service/categoryCode';
import { CreativeWorkService } from './service/creativeWork';
import { EventService } from './service/event';
import { OfferService } from './service/offer';
import { OfferCatalogService } from './service/offerCatalog';
import { PlaceService } from './service/place';
import { PriceSpecificationService } from './service/priceSpecification';
import { ProductService } from './service/product';
import { ProgramMembershipService } from './service/programMembership';
import { ProjectService } from './service/project';
import { ReservationService } from './service/reservation';
import { SellerService } from './service/seller';
import { ServiceOutputService } from './service/serviceOutput';
import { TaskService } from './service/task';
import { CancelReservationTransactionService } from './service/transaction/cancelReservation';
import { MoneyTransferTransactionService } from './service/transaction/moneyTransfer';
import { PayTransactionService } from './service/transaction/pay';
import { RefundTransactionService } from './service/transaction/refund';
import { RegisterServiceTransactionService } from './service/transaction/registerService';
import { ReserveTransactionService } from './service/transaction/reserve';
import { TransactionNumberService } from './service/transactionNumber';

import * as transporters from './transporters';

export import factory = factory;
export import transporters = transporters;

/**
 * 認証クライアント抽象クラス
 */
export abstract class Auth extends AuthClient { }

export namespace service {
    /**
     * 勘定科目サービス
     */
    export class AccountTitle extends AccountTitleService { }
    /**
     * アクションサービス
     */
    export class Action extends ActionService { }
    /**
     * カテゴリーコード`サービス
     */
    export class CategoryCode extends CategoryCodeService { }
    /**
     * 作品サービス
     */
    export class CreativeWork extends CreativeWorkService { }
    /**
     * イベントサービス
     */
    export class Event extends EventService { }
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
     * メンバーシッププログラムサービス
     */
    export class ProgramMembership extends ProgramMembershipService { }
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

    export namespace transaction {
        /**
         * 予約キャンセル取引サービス
         */
        export class CancelReservation extends CancelReservationTransactionService { }
        /**
         * 通貨転送取引サービス
         */
        export class MoneyTransfer extends MoneyTransferTransactionService { }
        /**
         * 決済取引サービス
         */
        export class Pay extends PayTransactionService { }
        /**
         * 返金取引サービス
         */
        export class Refund extends RefundTransactionService { }
        /**
         * サービス登録取引
         */
        export class RegisterService extends RegisterServiceTransactionService { }
        /**
         * 予約取引サービス
         */
        export class Reserve extends ReserveTransactionService { }
    }

    /**
     * 取引番号サービス
     */
    export class TransactionNumber extends TransactionNumberService { }
}
