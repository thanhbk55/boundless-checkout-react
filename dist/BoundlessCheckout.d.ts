import React, { Component, ReactNode } from 'react';
import '../styles/styles.scss';
import { TOnThankYouPage, TOnCheckoutInited } from './redux/reducers/app';
import { BoundlessClient } from 'boundless-api-client';
import { TClickedElement } from './lib/elementEvents';
export default class BoundlessCheckout extends Component<IBoundlessCheckoutProps, {}> {
    private el;
    private rootElRef;
    constructor(props: IBoundlessCheckoutProps);
    componentDidMount(): void;
    syncShowProp(): void;
    componentDidUpdate(prevProps: Readonly<IBoundlessCheckoutProps>): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal | null;
}
export interface IBoundlessCheckoutProps {
    api: BoundlessClient;
    show: boolean;
    onHide: (element: TClickedElement) => void;
    onThankYouPage: TOnThankYouPage;
    cartId?: string;
    basename?: string;
    logo?: string | ReactNode;
    onCheckoutInited?: TOnCheckoutInited;
}
