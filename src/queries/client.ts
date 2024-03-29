import { toast } from "@/utils/toast";
import { QueryClient, MutationCache, QueryCache } from "@tanstack/react-query";

import "@tanstack/react-query"
import { AxiosError } from "axios"
import { WriteRequestMeta, ReadRequestMeta } from '@/interfaces/RequestMeta';

declare module "@tanstack/react-query" {
    interface Register {
        defaultError: AxiosError;
        queryMeta: ReadRequestMeta;
        mutationMeta: WriteRequestMeta;
    }
}

const queryClient = new QueryClient({

    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 2,
            staleTime: 10 * 60 * 1000, // 10 min.
            gcTime: 15 * 60 * 1000, // 15 min.
        }
    },
    
    queryCache: new QueryCache({

        onError: (_error, { meta }) => {
            if (meta?.error) {
                toast.showError(meta.error);  
            }
        },
        onSuccess: async (_data, { meta }) => {
            if(meta?.success) {
                toast.showSuccess(meta.success);
            }
        }
    }),
    
    mutationCache: new MutationCache({

        onError: (_error, _variables, _context, { meta }) => {
            if(meta?.error) {
                toast.showError(meta.error);      
            }
        },
        onSuccess: async (_data, _variables, _context, { meta }) => {
            if(meta?.success) {
                toast.showSuccess(meta.success);
            }
        }
    }),

});

export default queryClient;