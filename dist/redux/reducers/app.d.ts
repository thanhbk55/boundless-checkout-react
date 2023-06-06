import { ICartItem, IOrder, ICheckoutPageSettings, ICheckoutStepper, TCheckoutStep, ICustomer, BoundlessClient, ICheckoutInitData, ICurrency, ILocaleSettings, ISystemTax, ITotal } from 'boundless-api-client';
import { ReactNode } from 'react';
import { TClickedElement } from '../../lib/elementEvents';
export declare const setBasicProps: import("@reduxjs/toolkit").ActionCreatorWithPayload<Required<Pick<IAppState, "onHide" | "onThankYouPage" | "api">> & {
    basename?: string | undefined;
    logo?: string | ReactNode;
    cartId?: string | undefined;
    onCheckoutInited?: TOnCheckoutInited | undefined;
}, string>, showCheckout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, hideCheckout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setCheckoutData: import("@reduxjs/toolkit").ActionCreatorWithPayload<Required<Pick<IAppState, "items" | "order" | "settings" | "currency" | "localeSettings" | "taxSettings" | "stepper" | "hasCouponCampaigns" | "needShipping" | "total">>, string>, addFilledStep: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    step: TCheckoutStep;
}, string>, setOrdersCustomer: import("@reduxjs/toolkit").ActionCreatorWithPayload<ICustomer, string>, setGlobalError: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, string>, setOrder: import("@reduxjs/toolkit").ActionCreatorWithPayload<IOrder, string>, setCheckoutInited: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    isInited: boolean;
}, string>, resetAppState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setTotal: import("@reduxjs/toolkit").ActionCreatorWithPayload<ITotal, string>, setApi: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    api: BoundlessClient;
}, string>, setIsInited: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>, setLocaleSettings: import("@reduxjs/toolkit").ActionCreatorWithPayload<ILocaleSettings, string>, setTaxSettings: import("@reduxjs/toolkit").ActionCreatorWithPayload<ISystemTax, string>;
declare const _default: import("redux").Reducer<IAppState, import("redux").AnyAction>;
export default _default;
export declare type TOnThankYouPage = ({ orderId, error }: {
    orderId: string;
    error?: string;
}) => void;
export declare type TOnCheckoutInited = (data: ICheckoutInitData) => void;
export interface IAppState {
    show: boolean;
    isInited: boolean;
    globalError: string | null;
    basename?: string;
    onHide?: (element: TClickedElement, error?: string) => void;
    onThankYouPage?: TOnThankYouPage;
    cartId?: string;
    api?: BoundlessClient;
    items?: ICartItem[];
    order?: IOrder;
    settings?: ICheckoutPageSettings;
    currency?: ICurrency;
    localeSettings?: ILocaleSettings;
    taxSettings?: ISystemTax;
    logo?: string | ReactNode;
    stepper?: ICheckoutStepper;
    hasCouponCampaigns?: boolean;
    needShipping?: boolean;
    onCheckoutInited?: TOnCheckoutInited;
    total?: ITotal;
}
