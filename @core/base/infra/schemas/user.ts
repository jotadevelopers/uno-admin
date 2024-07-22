import { z } from "zod";

export default z.object({
  name: z.string().min(1),
  email: z.string().email(),
  active: z.boolean(),
});
