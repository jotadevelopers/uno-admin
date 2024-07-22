import { z } from "zod";

export default z.object({
  name: z.string().min(1, "You must provide a username."),
  email: z.string().email("Invalid email."),
  password: z.string().min(8, "Password must contain at least 8 characters."),
});
