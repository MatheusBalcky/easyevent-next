import { z, string } from "zod";

export const signupSchema = z.object({
  firstname: string()
    .min(3, { message: "Seu nome precisa ter no mínimo 3 caractéres!" })
    .regex(/^[A-Za-z]+$/, { message: "Nome inválido digite apenas letras!" }),
  lastname: string()
    .min(3, { message: "Seu sobrenome precisa ter no mínimo 3 caractéres!" })
    .regex(/^[A-Za-z]+$/, { message: "Sobrenome inválido digite apenas letras!" }),
  email: string().email({ message: "E-mail inválido!" }),
  password: string().min(6, { message: "A senha precisa ter no mínimo 6 caractéres!" }).max(26),
});

export const signinSchema = z.object({
  email: string().email({ message: "E-mail inválido!" }),
  password: string(),
});

export type signUpType = z.infer<typeof signupSchema>;

export type signinType = z.infer<typeof signinSchema>;
