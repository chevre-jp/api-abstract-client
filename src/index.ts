// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
import * as factory from '@chevre/factory';

import { AuthClient } from './auth/authClient';

import { EventService } from './service/event';
import { PlaceService } from './service/place';
import { ReservationService } from './service/reservation';
import { ReserveTransactionService } from './service/transaction/reserve';
import * as transporters from './transporters';

export import factory = factory;
export import transporters = transporters;

/**
 * 認証クライアント抽象クラス
 */
export abstract class Auth extends AuthClient { }

export namespace service {
    /**
     * イベントサービス
     */
    export class Event extends EventService { }
    /**
     * 場所サービス
     */
    export class Place extends PlaceService { }
    /**
     * 予約サービス
     */
    export class Reservation extends ReservationService { }
    export namespace transaction {
        /**
         * 予約取引サービス
         */
        export class Reserve extends ReserveTransactionService { }
    }
}
