import z from "zod";

export const loginValidation = z.object({
  email: z
    .string()
    .email()
    .trim()
    .min(5, { message: "Please enter an email" })
    .max(50, { message: "Heey! that's too long" }),
  password: z.string().min(5, { message: "Please enter a valid password" }),
});
