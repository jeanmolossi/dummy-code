import { ActionReturnType } from '../rootTypes';

export interface AppState {
  requestStatus: 'PENDING' | 'RESOLVE' | 'REJECT' | null;
  requestMessage: string | null;
}

export type UpdateRequestStatusPayload = {
  status: 'PENDING' | 'RESOLVE' | 'REJECT' | null;
  message: string | null;
};

export type UpdateRequestStatusAction = ActionReturnType<
  '@app/UPDATE_REQUEST_STATUS',
  UpdateRequestStatusPayload
>;

export type AppActions = UpdateRequestStatusAction;
