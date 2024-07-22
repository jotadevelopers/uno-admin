import { extractUserToken } from "~/@core/auth/infra/util/token";
export default defineEventHandler(async (event) => {
  const authHeaderValue = getRequestHeader(event, "authorization");
  if (typeof authHeaderValue === "undefined") {
    throw createError({
      statusCode: 403,
      statusMessage:
        "Need to pass valid Bearer-authorization header to access this endpoint",
    });
  }
  try {
    return await extractUserToken(authHeaderValue);
  } catch (error) {
    console.error("Login failed. Here's the raw error:", error);
    throw createError({
      statusCode: 403,
      statusMessage: "You must be logged in to use this endpoint",
    });
  }
});
