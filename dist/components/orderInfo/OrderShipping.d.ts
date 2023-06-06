/// <reference types="react" />
import { ICustomer, IOrderService } from 'boundless-api-client';
export default function OrderShipping({ services, customer }: {
    services: IOrderService[];
    customer: ICustomer | null;
}): JSX.Element | null;
