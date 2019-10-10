import { getAllUsers } from '../../../helpers';

export default async function users(root, { name }, { ctx }, info) {
  // todo: 3. can we accept a input variable into the graphql query to only show certain users? Maybe allowing
  //  filter by name to begin with.

  // todo: 5. getting this list of all users is slow.  Would be really cool if it could return all the users
  //  in a more performant way.  Keeping in mind that the underlaying JSON files may get updated.

  const users = await getAllUsers();
  const filterUsers = users.filter(user => user.name === name);
  return filterUsers.length !== 0 ? filterUsers : users;
}
