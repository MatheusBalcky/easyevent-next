import { PropsWithChildren } from "react";

export const metadata = {
  title: "Fazer login",
};

export default function Layout({ children }: PropsWithChildren) {
  return <main>{children}</main>;
}
