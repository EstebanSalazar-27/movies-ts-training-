/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY:  number
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}