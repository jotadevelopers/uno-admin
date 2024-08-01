import RoleService from "~/@core/permissions/infra/services/RoleService";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);
  const roleService = new RoleService();
  await roleService.delete(id);
});
