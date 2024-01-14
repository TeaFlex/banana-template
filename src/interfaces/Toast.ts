import { ToastMessage } from "primereact/toast";

export type MessageType = ToastMessage | ToastMessage[];
export type ShowMessageFunction = (message: MessageType) => void;

export interface Toaster {
    show: ShowMessageFunction;
    showWarn: ShowMessageFunction;
    showError: ShowMessageFunction;
    showInfo: ShowMessageFunction;
    showSuccess: ShowMessageFunction;
    clear: () => void;
}