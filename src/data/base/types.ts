export const FETCH_STATUSES = {
    OK: 'ok',
    ERROR: 'error',
    LOADING: 'loading',
    UPDATING: 'updating'
};
  
export type FetchStatus =
    | typeof FETCH_STATUSES.OK
    | typeof FETCH_STATUSES.ERROR
    | typeof FETCH_STATUSES.LOADING
    | typeof FETCH_STATUSES.UPDATING;
  