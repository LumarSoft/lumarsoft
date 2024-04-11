import "./globals.css";
import { Navbar } from "@/shared/components/navbar/Navbar";
import { GeistSans } from "geist/font/sans";
import { WspBtn } from "@/shared/components/wspBtn/WspBtn";
import { cn } from "@/lib/utils";

<link rel="icon" href="/favicon.ico" sizes="any" />;

export const metadata = {
  title: "LumarSoft",
  description:
    "Lumarsoft es una consultora de desarrollo de software comprometida con la excelencia y la satisfacción del cliente. Ofrecemos soluciones personalizadas para tus necesidades de desarrollo. Actua ahora. Crea el futuro",
  keywords: [
    "Lumarsoft",
    "Lumar",
    "Software",
    "Desarrollo",
    "Consultora",
    "Consultora de Software",
    "Desarrollo de Software",
    "Desarrollo de Aplicaciones",
    "Desarrollo de Aplicaciones Web",
    "Desarrollo de Aplicaciones Móviles",
    "Desarrollo de Aplicaciones Empresariales",
    "Desarrollo de Aplicaciones a Medida",
    "Desarrollo de Software a Medida",
    "Desarrollo de Software Empresarial",
    "Desarrollo de Software Web",
    "Desarrollo de Software Móvil",
    "Desarrollo de Software Empresarial",
  ],
  author: "Lumarsoft",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${GeistSans.className} text-white overflow-x-hidden min-h-screen bg-black font-sans antialiased dark`
        )}
      >
        <Navbar />
        {children}
        <WspBtn />
      </body>
    </html>
  );
}
