/// <reference types="react" />
import { TViewMode } from './ContactInformationForm';
export default function LoginForm(): JSX.Element;
export declare function LoginFormView({ setViewMode }: {
    setViewMode: (mode: TViewMode) => void;
}): JSX.Element;
export interface ILoginFormValues {
    email: string;
    password: string;
}
