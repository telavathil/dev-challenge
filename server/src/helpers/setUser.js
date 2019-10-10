import fs from 'fs';
import util from 'util';
import uuidBase62 from './uuidBase62';
import validator from 'validator';
const writeFile = util.promisify(fs.writeFile);

export default async function setUser(user) {
  const uuid = validator.isUUID(user.id)
    ? user.id
    : uuidBase62.base62ToUuid(user.id);
  return writeFile(`./data/users/${uuid}.json`, JSON.stringify(user));
}
