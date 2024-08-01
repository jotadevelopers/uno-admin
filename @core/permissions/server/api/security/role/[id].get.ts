import RoleService from "~/@core/permissions/infra/services/RoleService";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const roleService = new RoleService();
  const role = await roleService.getById(parseInt(id!));
  return role;
});
