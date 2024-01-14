/// <reference types="vite/client" />

declare type absent = null | undefined;

declare type schrodinger<T> = T | absent; 