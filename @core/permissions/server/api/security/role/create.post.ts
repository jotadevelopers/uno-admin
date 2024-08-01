import RoleService from "~/@core/permissions/infra/services/RoleService";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const roleService = new RoleService();
  return await roleService.create(data);
});
