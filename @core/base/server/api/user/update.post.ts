import UserService from "../../../infra/services/UserService";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const service = new UserService();
  return await service.update(data);
});
