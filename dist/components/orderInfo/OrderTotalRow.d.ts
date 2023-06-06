/// <reference types="react" />
export default function OrderTotalRow({ price, qty, isSubTotal }: {
    price: string | number;
    qty: string | number;
    isSubTotal?: boolean;
}): JSX.Element;
