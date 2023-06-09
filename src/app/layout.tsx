import "./globals.css";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Easy Event",
  description: "Crie e busque um evento de maneira simples e fácil!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${DmSans.className} bg-light-green text-white`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
