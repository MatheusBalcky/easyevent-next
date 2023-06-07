import "./globals.css";

export const metadata = {
  title: "Easy Event",
  description: "Crie e busque um evento de maneira simples e fácil!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-light-green" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
