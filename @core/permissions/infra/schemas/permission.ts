import { z } from "zod";

export default z.object({
  subject: z.string().min(1, "A subject must be provided."),
  action: z.string().min(1, "A action must be provided."),
  description: z.string().min(1, "A description must be provided."),
  active: z.boolean(),
});
