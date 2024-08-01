import { z } from "zod";

export default z.object({
  name: z.string().min(1, "A name must be provided."),
  description: z.string().min(1, "A description must be provided."),
  active: z.boolean(),
});
