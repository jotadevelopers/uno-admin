import UserService from "../../../infra/services/UserService";

export default defineEventHandler(async (event) => {
  const service = new UserService();
  return await service.getAll();
});
