"use client";

import { Eczar } from "next/font/google";
import { MdEventAvailable } from "react-icons/md";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, signupType } from "../../schemas/auth-schemas";

const EczarFont = Eczar({ subsets: ["latin"], weight: "700" });

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupType>({ resolver: zodResolver(signupSchema) });

  const onSubmit: SubmitHandler<signupType> = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-xs items-center border-2 border-solid border-zinc-50 space-y-3 p-4 rounded-md drop-shadow-sm">
        <Link href="/">
          <div className="flex drop-shadow-xl">
            <h1 className={`animate-swing-in-top-fwd ${EczarFont.className} text-yellow-title text-4xl drop-shadow-[3px_2px_rgba(197,22,255,1)]`}>
              Easy <br />
              <p className="pl-4">Event</p>
            </h1>
            <MdEventAvailable className="animate-swing-in-top-fwd-rotate rotate-12 text-yellow-title text-6xl drop-shadow-[3px_2px_rgba(197,22,255,1)]" />
          </div>
        </Link>

        <h1 className="font-semibold">Crie sua conta!</h1>

        <span className="flex flex-col">
          <label className="text-xs font-semibold" htmlFor="firstname">
            Primeiro nome
          </label>
          <input {...register("firstname")} className="p-2 w-64 rounded-lg text-zinc-950" type="text" required />
        </span>

        <span className="flex flex-col">
          <label className="text-xs font-semibold" htmlFor="lastname">
            Sobrenome
          </label>
          <input {...register("lastname")} className="p-2 w-64 rounded-lg text-zinc-950" type="text" required />
        </span>

        <span className="flex flex-col">
          <label className="text-xs font-semibold" htmlFor="email">
            E-mail
          </label>
          <input {...register("email")} className="p-2 w-64 rounded-lg text-zinc-950" type="email" required />
        </span>

        <span className="flex flex-col">
          <label className="text-xs font-semibold" htmlFor="password">
            Senha
          </label>
          <input {...register("password")} className="p-2 w-64 rounded-lg text-zinc-950" type="password" required />
        </span>

        <span className="font-semibold text-yellow-title text-sm animate-bounce text-center">{errors.firstname?.message || errors.lastname?.message || errors.email?.message || errors.password?.message}</span>

        <button className="text-sm hover:bg-dark-purple bg-roxo px-4 py-2 rounded-full font-bold drop-shadow-md">Criar conta</button>
        <p className="font-semibold">
          Já tem uma conta?{" "}
          <Link className="hover:underline text-yellow-title font-semibold" href="/login">
            Entrar
          </Link>
        </p>
      </form>
    </div>
  );
}
