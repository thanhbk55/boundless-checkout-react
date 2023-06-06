/// <reference types="react" />
import { ICheckoutPaymentPageData } from 'boundless-api-client';
export default function PaymentMethodForm({ paymentPage }: {
    paymentPage: ICheckoutPaymentPageData;
}): JSX.Element;
export interface IPaymentMethodFormValues {
    payment_method_id: number;
}
