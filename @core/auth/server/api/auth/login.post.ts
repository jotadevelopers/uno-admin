import AuthService from "~/@core/auth/infra/service/AuthService";
import { userTokenGenerate } from "~/@core/auth/infra/util/token";

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event);
    const service = new AuthService();
    const user = await service.login(email, password);
    const token = await userTokenGenerate(user);
    return token;
  } catch (error: any) {
    throw createError({
      statusCode: 403,
      statusMessage: error.message,
    });
  }
});
