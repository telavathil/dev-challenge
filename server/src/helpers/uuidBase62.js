import uuidBase62 from 'uuid-base62';

const uuidToBase62 = uuid => uuidBase62.encode(uuid);
const base62ToUuid = base62 => uuidBase62.decode(base62);

export default { uuidToBase62, base62ToUuid };
