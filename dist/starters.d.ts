import { ReactNode } from 'react';
import { Root } from 'react-dom/client';
import { IBoundlessCheckoutProps } from './BoundlessCheckout';
import { BoundlessOrderInfoProps } from './BoundlessOrderInfo';
export declare class StarterWrapper {
    protected el: HTMLElement;
    protected component: ReactNode;
    protected root?: Root;
    constructor(el: HTMLElement, component: ReactNode);
    start(): void;
    destroy(): void;
}
export declare function startCheckout(el: HTMLElement, props: Omit<IBoundlessCheckoutProps, 'show' | 'logo'> & {
    logoSrc?: string;
    logoText?: string;
}): StarterWrapper;
export declare function startOrderInfo(el: HTMLElement, props: BoundlessOrderInfoProps): StarterWrapper;
export declare function resetCheckoutState(): void;
