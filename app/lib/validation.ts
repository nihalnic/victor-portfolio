import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Write what you want to say."),
});

export const validateForm = (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    formSchema.parse(data);
    return { success: true, error: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }
    return { success: false, error: [] };
  }
};
