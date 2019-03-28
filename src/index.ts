// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import * as factory from './factory';

import { AuthClient } from './auth/authClient';

import { AccountTitleService } from './service/accountTitle';
import { CreativeWorkService } from './service/creativeWork';
import { EventService } from './service/event';
import { PlaceService } from './service/place';
import { PriceSpecificationService } from './service/priceSpecification';
import { ReservationService } from './service/reservation';
import { ServiceTypeService } from './service/serviceType';
import { TicketTypeService } from './service/ticketType';
import { CancelReservationTransactionService } from './service/transaction/cancelReservation';
import { ReserveTransactionService } from './service/transaction/reserve';
import * as transporters from './transporters';

import { BoxOfficeTypeService } from './service/boxOfficeType';
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
     * 予約サービス
     */
    export class Reservation extends ReservationService { }
    /**
     * 興行区分サービス
     */
    export class ServiceType extends ServiceTypeService { }
    /**
     * 券種サービス
     */
    export class TicketType extends TicketTypeService { }
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
     * 興行区分サービス
     * @deprecated 東映ローカライズなので、そのうち廃止
     */
    export class BoxOfficeType extends BoxOfficeTypeService { }
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
