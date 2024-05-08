import { createContext, PropsWithChildren, useLayoutEffect, useRef } from "react";
import { Toast } from 'primereact/toast';
import { AppToast } from "@/utils/toast";
import { PrimeReactProvider } from "primereact/api";
import themes from "@/themes";
import { ConfirmDialog } from "primereact/confirmdialog";
import { twMerge } from "tailwind-merge";
import { usePassThrough } from "primereact/passthrough";
import Tailwind from "primereact/passthrough/tailwind";


interface UIContextValue {}

interface UIProviderProps extends PropsWithChildren {}

const initialValue: UIContextValue = {}

export const UIContext = createContext<UIContextValue>(initialValue);

export const UIProvider = (props: UIProviderProps) => {
    
    const _toast = useRef<Toast>(null);

    useLayoutEffect(() => {
        // Initializing the global toast instance.
        if(_toast.current)
            AppToast.initInstance(_toast.current);
    }, []);

    const AppTheme = usePassThrough(
        Tailwind,
        themes.main,
        {
            mergeProps: true,
            mergeSections: true,
            classNameMergeFunction: twMerge,
        },
    );

    return (
        // Set unstyled to `true` if you want to disable the default theme.
        <PrimeReactProvider 
            value={{ 
                unstyled: true, 
                pt: AppTheme,
            }}
        >
            <Toast ref={_toast}/>
            <ConfirmDialog />
            <UIContext.Provider value={initialValue}>
                {props.children}
            </UIContext.Provider>
        </PrimeReactProvider>
    )
}
