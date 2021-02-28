import { BaseService } from './base';

class AuthServices extends BaseService {
  constructor(pathName: string) {
    super(pathName);
    this.pathname = pathName;
  }

  login = (values: any) => this.create(values);
  logout = (values: any) => this.create(values);
}

const loginServices = new AuthServices('/security/login');
const logoutServices = new AuthServices('/security/logout');
export {
  loginServices,
  logoutServices,
};
