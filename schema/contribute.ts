import { z } from "zod";

export const contributeFormSchema = z.object({
  name: z.string().optional(),
  content: z
    .string()
    .min(15, "The content is too short! Please add a little more!"),
  credit: z.string().optional(),
});

export type ContributeForm = z.infer<typeof contributeFormSchema>;
