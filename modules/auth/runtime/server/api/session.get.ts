import * as jose from "jose";
const TOKEN_TYPE = "Bearer";
const extractToken = (authHeaderValue: string) => {
  const [, token] = authHeaderValue.split(`${TOKEN_TYPE} `);
  return token;
};
export default defineEventHandler(async (event) => {
  const authHeaderValue = getRequestHeader(event, "authorization");
  if (typeof authHeaderValue === "undefined") {
    throw createError({
      statusCode: 403,
      statusMessage:
        "Need to pass valid Bearer-authorization header to access this endpoint",
    });
  }
  const secret = new TextEncoder().encode(useRuntimeConfig().secret);
  const extractedToken = extractToken(authHeaderValue);
  try {
    return await jose.jwtVerify(extractedToken, secret);
  } catch (error) {
    console.error("Login failed. Here's the raw error:", error);
    throw createError({
      statusCode: 403,
      statusMessage: "You must be logged in to use this endpoint",
    });
  }
});
