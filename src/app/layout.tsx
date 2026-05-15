import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rahul Choudhary — AI Engineer',
  description: 'AI Engineer focused on building intelligent systems powered by LLMs, RAG pipelines, and scalable backend architectures. Passionate about creating production-ready AI applications using modern technologies.',
  icons: {
    icon: '/Favicon.png',
  },
  openGraph: {
    title: 'Rahul Choudhary — AI Engineer',
    description: 'AI Engineer focused on building intelligent systems powered by LLMs, RAG pipelines, and scalable backend architectures. Passionate about creating production-ready AI applications using modern technologies.',
    images: ['/image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Choudhary — AI Engineer',
    description: 'AI Engineer focused on building intelligent systems powered by LLMs, RAG pipelines, and scalable backend architectures. Passionate about creating production-ready AI applications using modern technologies.',
    images: ['/image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="c690b6ce-058c-4ea6-ba59-1103bcd8d636"></script>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
