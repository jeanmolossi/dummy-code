import { UpdateRequestStatusAction, UpdateRequestStatusPayload } from './types';

export const RequestStatusEnum = {
  PENDING: 'PENDING',
  RESOLVE: 'RESOLVE',
  REJECT: 'REJECT',
} as const;

export function UpdateRequestStatus(
  payload: UpdateRequestStatusPayload,
): UpdateRequestStatusAction {
  return {
    type: '@app/UPDATE_REQUEST_STATUS',
    payload,
  };
}
