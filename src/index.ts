// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import * as factory from './factory';

import { AuthClient } from './auth/authClient';

import { AccountTitleService } from './service/accountTitle';
import { CreativeWorkService } from './service/creativeWork';
import { EventService } from './service/event';
import { OfferService } from './service/offer';
import { PlaceService } from './service/place';
import { PriceSpecificationService } from './service/priceSpecification';
import { ProgramMembershipService } from './service/programMembership';
import { ReservationService } from './service/reservation';
import { ServiceTypeService } from './service/serviceType';
import { TaskService } from './service/task';
import { CancelReservationTransactionService } from './service/transaction/cancelReservation';
import { ReserveTransactionService } from './service/transaction/reserve';
import * as transporters from './transporters';

import { DistributionsService } from './service/distributions';
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
     * メンバーシッププログラムサービス
     */
    export class ProgramMembership extends ProgramMembershipService { }
    /**
     * 予約サービス
     */
    export class Reservation extends ReservationService { }
    /**
     * 興行区分サービス
     */
    export class ServiceType extends ServiceTypeService { }

    /**
     * オファーサービス
     */
    export class Offer extends OfferService { }

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
     * 配給サービス
     * @deprecated 東映ローカライズなので、そのうち廃止
     */
    export class Distributions extends DistributionsService { }

    /**
     * 科目サービス
     * @deprecated 東映ローカライズなので、そのうち廃止
     */
    export class Subject extends SubjectService { }
}
