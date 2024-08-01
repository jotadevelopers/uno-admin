import PermissionService from "~/@core/permissions/infra/services/PermissionService";

export default defineEventHandler(async (event) => {
  let permission = new PermissionService();
  return await permission.getAll();
});
