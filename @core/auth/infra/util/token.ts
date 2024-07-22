import * as jose from "jose";
const TOKEN_TYPE = "Bearer";
const ALG = "HS256";
const userTokenGenerate = async (user: any) => {
  const secret = new TextEncoder().encode(useRuntimeConfig().appSecret);

  const refreshToken =
    Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1;

  const accessToken = await new jose.SignJWT(user)
    .setProtectedHeader({ alg: ALG })
    .setExpirationTime("2h")
    .sign(secret);
  return {
    token: accessToken,
    refreshToken,
  };
};

const extractUserToken = async (data: string) => {
  const secret = new TextEncoder().encode(useRuntimeConfig().appSecret);
  const [, token] = data.split(`${TOKEN_TYPE} `);
  const jwt = await jose.jwtVerify(token, secret);

  return {
    user: jwt.payload,
  };
};

export { userTokenGenerate, extractUserToken };
