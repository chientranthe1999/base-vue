declare global {
  declare type LocaleType = "vi" | "en";

  declare type Nullable<T> = T | null

  declare type AxiosHeaders =
    | "application/json"
    | "application/x-www-form-urlencoded"
    | "multipart/form-data";

  declare type AxiosMethod = "get" | "post" | "delete" | "put";

  declare type AxiosResponseType =
    | "arraybuffer"
    | "blob"
    | "document"
    | "json"
    | "text"
    | "stream";
}
export {}
