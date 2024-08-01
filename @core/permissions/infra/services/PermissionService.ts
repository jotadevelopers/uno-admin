type Permission = {
  id?: number;
  subject: string;
  action: string;
  description: string;
  active: boolean;
};
export default class PermissionService {
  async getAll(): Promise<Permission[]> {
    let permissions = [
      {
        id: 1,
        subject: "all",
        action: "manage",
        description: "For administrator",
        active: true,
      },
    ];
    return permissions;
  }
  async create(data: Permission): Promise<Permission> {
    throw new Error('Method not implemented.');
  }
  async update(data: Permission): Promise<Permission> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
