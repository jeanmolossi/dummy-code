import { UpdateRequestStatusAction, UpdateRequestStatusPayload } from './types';

export const RequestStatusEnum = {
  PENDING: 'PENDING',
  RESOLVE: 'RESOLVE',
  REJECT: 'REJECT',
} as const;

export function UpdateRequestStatus(
  status: UpdateRequestStatusPayload['status'],
  message: UpdateRequestStatusPayload['message'] = null,
): UpdateRequestStatusAction {
  return {
    type: '@app/UPDATE_REQUEST_STATUS',
    payload: {
      status,
      message,
    },
  };
}
