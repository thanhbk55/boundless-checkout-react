import { ICustomer } from 'boundless-api-client';
export declare const login: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    loggedInCustomer: ICustomer;
    authToken: string;
}, string>, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, resetUserState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<IUserState, import("redux").AnyAction>;
export default _default;
export interface IUserState {
    loggedInCustomer: ICustomer | null;
    authToken: string | null;
}
