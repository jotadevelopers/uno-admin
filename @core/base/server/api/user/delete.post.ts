import UserService from "../../../infra/services/UserService";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);
  const service = new UserService();
  return await service.delete(id);
});
