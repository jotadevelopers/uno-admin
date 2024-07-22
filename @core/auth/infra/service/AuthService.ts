import bcrypt from "bcrypt";
type User = {
  id?: string;
  name: string;
  email: string;
  password?: string;
  active: boolean;
};
let _user: User = {
  name: "Admin",
  password: "$2b$08$XA8T1CZucF3hmvNxXba/6eiddyIrSbcJIH16GVfwgMCVDFZept9xe",
  email: "admin@uno.com",
  active: true,
};

export default class UserService {
  async login(email: string, password: string): Promise<User> {
    if (!bcrypt.compareSync(password, _user.password!)) {
      throw new Error("Invalid email or password.");
    }
    delete _user.password;
    return _user;
  }
  async register(): Promise<User> {
    throw new Error("method not implemented.");
  }
  async logout(): Promise<void> {
    throw new Error("method not implemented.");
  }
  async requestPassword(): Promise<boolean> {
    return true;
  }
}
