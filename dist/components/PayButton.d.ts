/// <reference types="react" />
export default function PayButton({ orderId, onError }: {
    orderId: string;
    onError?: (err: any) => void;
}): JSX.Element;
