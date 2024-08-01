import PermissionService from "~/@core/permissions/infra/services/PermissionService";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);
  const service = new PermissionService();
  await service.delete(id);
});
