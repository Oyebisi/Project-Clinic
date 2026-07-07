import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Clinic | Academic Research Support',
  description: 'Project Clinic offers trusted research guidance, editing, formatting, data analysis, and presentation preparation for students.',
  metadataBase: new URL('https://projectclinic.example.com'),
  openGraph: {
    title: 'Project Clinic | Academic Research Support',
    description: 'Trusted academic research support services for students.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
