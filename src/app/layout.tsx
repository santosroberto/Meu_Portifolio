import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.role} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Desenvolvedor Full Stack que organiza o que vive em planilhas, anotações e grupos de mensagens — transformando em aplicações web simples, acessíveis e prontas para o dia a dia.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.role} | ${site.name}`,
    description:
      "Aplicações web completas que substituem planilhas e grupos de mensagens por sistemas simples e funcionais.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

const themeScript = `
(function () {
  var stored = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (stored === "dark" || (!stored && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: site.email,
  url: site.url,
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
