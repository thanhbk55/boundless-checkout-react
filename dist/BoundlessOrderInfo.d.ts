/// <reference types="react" />
import { BoundlessClient } from 'boundless-api-client';
export default function BoundlessOrderInfo({ api, ...restProps }: BoundlessOrderInfoProps): JSX.Element;
export interface BoundlessOrderInfoProps {
    orderId: string;
    api: BoundlessClient;
    showItems?: boolean;
    showStatus?: boolean;
    showPayButton?: boolean;
    onError?: (error: any) => void;
}
