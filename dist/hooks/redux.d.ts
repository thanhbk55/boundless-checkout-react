import { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../redux/store';
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    app: import("../redux/reducers/app").IAppState;
    xhr: import("../redux/reducers/xhr").IXHRState;
    user: import("../redux/reducers/user").IUserState;
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
