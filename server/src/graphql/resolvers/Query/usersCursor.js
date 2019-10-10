import { uuidBase62, getAllUsers } from '../../../helpers';
import validator from 'validator';

export default async function usersCursor(
  root,
  { after, first },
  { ctx },
  info
) {
  if (first < 0) throw new Error("First can't be negative.");
  const users = await getAllUsers();
  const totalCount = users.length;
  let usersPage = [];
  let start = 0;

  if (after !== undefined) {
    ///todo: DRY
    const afterUuid = validator.isUUID(after)
      ? uuidBase62.base62ToUuid(after)
      : after;
    const index = users.findIndex(user => user.id === afterUuid);
    if (index === -1) throw new Error('After not found.');
    start = index + 1;
  }

  usersPage = first === undefined ? users : users.slice(start, start + first);
  const edges = usersPage.map(user => ({
    cursor: user.id,
    node: user
  }));
  const hasNextPage = start + first < totalCount;
  const pageInfo = hasNextPage
    ? { endCursor: usersPage[usersPage.length - 1].id, hasNextPage }
    : { hasNextPage };

  return {
    edges,
    pageInfo,
    totalCount
  };
}
