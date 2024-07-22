import { z } from "zod";

export default z.object({
  email: z.string().email("A valid email must be provided."),
  password: z.string().min(1, "A password must be provided."),
});
