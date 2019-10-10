import fs from 'fs';
import util from 'util';
import getUser from './getUser';

const readDir = util.promisify(fs.readdir);

export default async function getAllUsers() {
  const files = await readDir('./data/users');
  return await Promise.all(
    files
      .filter(filename => filename.includes('.json'))
      .map(filename => getUser(filename.replace('.json', '')))
  );
}
