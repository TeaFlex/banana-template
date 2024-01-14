import { MessageType } from "./Toast";

export interface RequestMeta extends Record<string, unknown> {
    success?: MessageType;
    error?: MessageType;
}

export interface ReadRequestMeta extends RequestMeta {

}

export interface WriteRequestMeta extends RequestMeta {

}