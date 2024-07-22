import bcrypt from "bcrypt";
import crypto from "crypto";
export default defineEventHandler(async (event) => {
  const { name, email, password } = await readBody(event);
  let user = await prisma.user.create({
    data: {
      name,
      email,
      password: bcrypt.hashSync(password, 8),
    },
  });
  return user;
});
