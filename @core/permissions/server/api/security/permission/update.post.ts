import PermissionService from "~/@core/permissions/infra/services/PermissionService";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const permissionService = new PermissionService();
  return await permissionService.update(data);
});
