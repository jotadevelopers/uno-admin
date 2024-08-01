import RoleService from "~/@core/permissions/infra/services/RoleService";

export default defineEventHandler(async (event) => {
  const roleService = new RoleService();
  return await roleService.getAll();
});
