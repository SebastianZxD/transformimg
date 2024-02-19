import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

// Font files can be colocated inside of `app`
const KodeMono = localFont({
  src: './KodeMono-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--font-kode-mono',
})

// const IBMPlex = IBM_Plex_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-ibm-plex'
// });

export const metadata: Metadata = {
  title: "TransformIMG",
  description: "AI-powered Image Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#E37144'}
    }}>
      <html lang="en">
        <body className={cn("font-kode-mono antialiased", KodeMono.className)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
