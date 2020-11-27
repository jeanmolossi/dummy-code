import { all, debounce, put, takeLatest } from 'redux-saga/effects';
import { sendPostComment } from '../../../repositories/commentRepository';
import {
  getFeed,
  ExcludePostRepository,
} from '../../../repositories/postRepository';
import { RequestStatusEnum, UpdateRequestStatus } from '../app';
import { GetFeed, UpdateFeed } from './actions';
import {
  ExcludePostAction,
  GetFeedAction,
  SendCommentPostAction,
} from './types';

function* GetFeedSaga() {
  const { posts } = yield getFeed();

  yield put(UpdateFeed(posts));
}

function* SendCommentPost({ payload }: SendCommentPostAction) {
  const { comment, commentAuthorId, postId } = payload;

  yield put(UpdateRequestStatus('PENDING', 'Comentando...'));

  const { status } = yield sendPostComment(postId, {
    comment,
    commentAuthorId,
  });

  const message =
    status === RequestStatusEnum.REJECT
      ? 'Não foi possível deixar seu comentário, ocorreu algo de errado'
      : 'Comentário adicionado com sucesso! Valeu!';

  yield put(UpdateRequestStatus(status, message));
  yield put(GetFeed());
}

function* ExcludePost({ payload }: ExcludePostAction) {
  const { postId } = payload;

  yield put(UpdateRequestStatus('PENDING', 'Removendo post...'));

  const { status } = yield ExcludePostRepository(postId);

  yield put(
    UpdateRequestStatus(
      status,
      'Removemos seu post, ele não está mais disponível',
    ),
  );
}

export const postsSaga = all([
  takeLatest<SendCommentPostAction['type'], typeof SendCommentPost>(
    '@posts/SEND_COMMENT_POST',
    SendCommentPost,
  ),

  takeLatest<ExcludePostAction['type'], typeof ExcludePost>(
    '@posts/EXCLUDE_POST',
    ExcludePost,
  ),

  debounce<GetFeedAction['type'], typeof GetFeedSaga>(
    1000,
    '@posts/GET_FEED_ACTION',
    GetFeedSaga,
  ),
]);
