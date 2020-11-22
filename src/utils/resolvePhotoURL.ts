import { User } from '../store/modules/user';

export function resolvePhotoURL(user: User): User {
  let { photoURL } = user;

  if (!photoURL) {
    photoURL = `${process.env.REACT_APP_LOCAL_URL}/files/man-avatar.png`;
  }

  const resolvedUser = {
    ...user,
    photoURL,
  };

  return resolvedUser;
}
