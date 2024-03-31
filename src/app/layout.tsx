import type { Metadata } from 'next';
import { Ruda, Rethink_Sans } from 'next/font/google';
import './globals.css';

const ruda = Ruda({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ruda',
});

const rethink_sans = Rethink_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rethink-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ruda.variable} ${rethink_sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
