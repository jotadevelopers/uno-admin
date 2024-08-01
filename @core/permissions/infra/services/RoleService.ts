type Role = {
  id?: number;
  name: string;
  description: string;
  active: boolean;
  abilities?: any[];
};
export default class RoleService {
  async getAll(): Promise<Role[]> {
    let roles = [
      {
        id: 1,
        name: "Admin",
        description: "Role for administrator",
        active: true,
        abilities: [
          {
            id: 1,
            subject: "all",
            action: "manage",
            description: "For administrator",
            active: true,
          },
        ],
      },
    ];
    return roles;
  }

  async getById(id: number): Promise<Role | null> {
    let role = {
      id: 1,
      name: "Admin",
      description: "Role for administrator",
      active: true,
      abilities: [
        {
          id: 1,
          subject: "all",
          action: "manage",
          description: "For administrator",
          active: true,
        },
      ],
    };
    return role;
  }

  async create(data: Role): Promise<Role> {
     throw new Error("Method not implemented.");
  }

  async update(data: Role): Promise<Role> {
     throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<void> {
     throw new Error("Method not implemented.");
  }
}
