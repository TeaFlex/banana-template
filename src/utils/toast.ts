import { MessageType, ShowMessageFunction, Toaster } from "@/interfaces/Toast";
import { MessageSeverity } from "primereact/api";
import { Toast } from "primereact/toast";

/**
 * Singleton storing global app `Toast` object instance. 
 */
export class AppToast {
    
    private static _instance: Toast | null = null;

    static initInstance(toast: Toast) {
        if(!this._instance)
            this._instance = toast;
    }

    static get instance() {
        return this._instance
    }
}

export const setSeverity = (message: MessageType, severity: MessageSeverity): MessageType => {
    const isArray = Array.isArray(message);
    return isArray? message.map(m => ({ ...m, severity })): {...message, severity };
};

/**
 * Shorthand using `AppToast` static instance to display toasts.
 */
export const toast: Toaster = {

    show: AppToast.instance?.show as ShowMessageFunction,

    showSuccess: (message: MessageType) => {
        AppToast.instance?.show(setSeverity(message, MessageSeverity.SUCCESS));
    },

    showError: (message: MessageType) => {
        AppToast.instance?.show(setSeverity(message, MessageSeverity.ERROR));
    },

    showWarn: (message: MessageType) => {
        AppToast.instance?.show(setSeverity(message, MessageSeverity.WARN));
    },

    showInfo: (message: MessageType) => {
        AppToast.instance?.show(setSeverity(message, MessageSeverity.INFO));
    },

    clear: AppToast.instance?.clear as () => void,
}