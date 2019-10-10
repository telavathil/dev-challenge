import fs from 'fs';
import util from 'util';
import uuidBase62 from './uuidBase62';
import validator from 'validator';
const readFile = util.promisify(fs.readFile);

export default async function getUser(id) {
  const uuid = validator.isUUID(id) ? id : uuidBase62.base62ToUuid(id);
  const data = await readFile(`./data/users/${uuid}.json`, 'utf8');
  const parsedData = JSON.parse(data);
  return { ...parsedData, id: uuidBase62.uuidToBase62(parsedData.id) };
}
