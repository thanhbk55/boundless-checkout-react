/// <reference types="react" />
export default function ContactInformationForm(): JSX.Element;
export declare function ContactFormView({ setViewMode }: {
    setViewMode: (mode: TViewMode) => void;
}): JSX.Element;
export interface IContactInformationFormValues {
    email?: string;
    phone?: string;
    receive_marketing_info?: boolean;
}
export declare enum TViewMode {
    contact = "contact",
    login = "login"
}
