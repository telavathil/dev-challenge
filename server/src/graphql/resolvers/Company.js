import _ from 'lodash';
import { getAllUsers, getUser } from '../../helpers';

let employeesByCompany = {};
(async () => {
  const employees = await getAllUsers();
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
