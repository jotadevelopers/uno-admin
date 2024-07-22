type User = {
  id?: string;
  name: string;
  email: string;
  active: boolean;
};
export default class UserService {
  async getAll(): Promise<User[]> {
    return [
      {
        id: "c14e795e-8491-48d6-b1e7-3f701ce1c52f",
        name: "Admin",
        email: "admin@uno.com",
        active: true,
      },
    ];
  }

  async create(data: User): Promise<User> {
    throw new Error("method not implemented.");
  }

  async update(data: User): Promise<User> {
    throw new Error("method not implemented.");
  }

  async delete(id: string): Promise<User> {
    throw new Error("method not implemented.");
  }
}
