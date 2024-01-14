import { UseMutationResult } from "@tanstack/react-query";
import { ConfirmDialogProps, confirmDialog } from "primereact/confirmdialog";

interface ConfirmMutationOptions<TV> extends ConfirmDialogProps {
    mutation: UseMutationResult<void, unknown, TV, unknown>;
    variables?: TV;
}

/**
 * Works the same as `confirmDialog` but for confirming mutations.
 * The given mutation will only be executed if the dialog is accepted.
 * @param options 
 */
export function confirmMutation<TV>(options: ConfirmMutationOptions<TV>) {
    const { mutation, variables, accept, ...rest } = options;

    if(variables !== undefined) {
        confirmDialog({
            header: "Confirmation",
            icon: "fa-solid fa-triangle-exclamation text-yellow-500",
            acceptClassName: 'p-button-danger',
            defaultFocus: 'reject',
            draggable: false,
            ...rest,
            accept: async () => {
                await mutation.mutateAsync(variables);
                accept && accept();
            },
        });
    }
}