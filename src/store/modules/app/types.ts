import { ActionReturnType } from '../rootTypes';

export interface AppState {
  requestStatus: 'PENDING' | 'RESOLVE' | 'REJECT' | null;
}

export type UpdateRequestStatusPayload =
  | 'PENDING'
  | 'RESOLVE'
  | 'REJECT'
  | null;

export type UpdateRequestStatusAction = ActionReturnType<
  '@app/UPDATE_REQUEST_STATUS',
  UpdateRequestStatusPayload
>;

export type AppActions = UpdateRequestStatusAction;
