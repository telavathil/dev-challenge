import fs from 'fs';
import util from 'util';
import _ from 'lodash';
import { getUser } from '../../helpers';

const readDir = util.promisify(fs.readdir);

let employeesByCompany = {};
(async () => {
  const files = await readDir('./data/users');
  const employees = await Promise.all(
    files
      .filter(filename => filename.includes('.json'))
      .map(filename => getUser(filename.replace('.json', '')))
  );
  employeesByCompany = _.groupBy(
    employees.map(item => _.pick(item, ['id', 'company'])),
    'company'
  );
})();

export default {
  employees: async ({ id }, args, { ctx }, info) => {
    if (employeesByCompany[id]) {
      const employees = employeesByCompany[id];
      return employees.map(employee => getUser(employee.id));
    }
    return [];
  }
};
