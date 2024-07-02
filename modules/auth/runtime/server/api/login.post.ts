import * as jose from "jose";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.email != "admin@uno.com" || body.password != "admin") {
    throw createError({
      statusCode: 403,
      statusMessage: "Invalid email or password.",
    });
  }
  const secret = new TextEncoder().encode(useRuntimeConfig().secret);
  const refreshTokens: Record<number, Record<string, any>> = {};
  const refreshToken =
    Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1;
  const alg = "HS256";
  const username = "admin";
  const user = {
    username,
    picture: "https://github.com/nuxt.png",
    name: "User " + username,
  };
  const accessToken = await new jose.SignJWT({
    ...user,
    roles: ["admin"],
  })
    .setProtectedHeader({ alg })
    .setExpirationTime("2h")
    .sign(secret);
  refreshTokens[refreshToken] = {
    accessToken,
    user,
  };
  return {
    token: accessToken,
    refreshToken,
  };
});
