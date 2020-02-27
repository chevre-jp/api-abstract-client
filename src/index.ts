// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import * as factory from './factory';

import { AuthClient } from './auth/authClient';

import { AccountTitleService } from './service/accountTitle';
import { CategoryCodeService } from './service/categoryCode';
import { CreativeWorkService } from './service/creativeWork';
import { EventService } from './service/event';
import { OfferService } from './service/offer';
import { OfferCatalogService } from './service/offerCatalog';
import { PlaceService } from './service/place';
import { PriceSpecificationService } from './service/priceSpecification';
import { ProductService } from './service/product';
import { ProgramMembershipService } from './service/programMembership';
import { ReservationService } from './service/reservation';
import { TaskService } from './service/task';
import { CancelReservationTransactionService } from './service/transaction/cancelReservation';
import { ReserveTransactionService } from './service/transaction/reserve';
import * as transporters from './transporters';

import { SubjectService } from './service/subject';

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
     * タスクサービス
     */
    export class Task extends TaskService { }

    export namespace transaction {
        /**
         * 予約キャンセル取引サービス
         */
        export class CancelReservation extends CancelReservationTransactionService { }
        /**
         * 予約取引サービス
         */
        export class Reserve extends ReserveTransactionService { }
    }

    /**
     * 科目サービス
     * @deprecated 東映ローカライズなので、そのうち廃止
     */
    export class Subject extends SubjectService { }
}
