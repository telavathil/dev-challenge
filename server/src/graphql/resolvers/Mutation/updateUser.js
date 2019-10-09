import { setUser, getUser } from '../../../helpers';

export default async function User(root, { user }, { ctx }, info) {
  // todo: 1 this throws a unfriendly (and potentially unsafe) error if a non-existnant user ID is entered.
  // how can we check for a non-existing user id and throw a more friendly error.

  // todo: 2 why is this update overwriting existing user data? Need to fix this so that just data input is
  // updated rather than overwritting all the data.
  try {
    const isUser = await getUser(user.id);
    await setUser({
      ...isUser,
      name: user.name,
      email: user.email
    });
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('user not found');
    } else {
      console.log(err.message);
    }
    return false;
  }
}
