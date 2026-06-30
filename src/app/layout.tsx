import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import AnimatedCursor from '@/components/effects/AnimatedCursor';
import FloatingHireMe from '@/components/common/FloatingHireMe';
import BackToTop from '@/components/common/BackToTop';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fahad Sajid | Software Engineer | React & Next.js Full Stack Developer',
  description: 'Hi, I\'m Fahad Sajid. I specialize in building fast, scalable, and user-focused web applications using React.js, Next.js, and Node.js. Ready for opportunities in Saudi Arabia (Riyadh), UAE, and remote.',
  keywords: [
    'Fahad Sajid', 'Software Engineer', 'React Developer', 'Next.js Developer',
    'Full Stack Developer', 'Web Developer Pakistan', 'Saudi Arabia Tech Jobs', 
    'Node.js Engineer', 'Odoo ERP Developer', 'SabzLand'
  ],
  authors: [{ name: 'Fahad Sajid', url: 'https://github.com/fahad4920' }],
  creator: 'Fahad Sajid',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fahad-sajid.vercel.app',
    title: 'Fahad Sajid | Software Engineer Portfolio',
    description: 'Specializing in React.js, Next.js, Node.js, and modern full-stack web development. View my technical projects and credentials.',
    siteName: 'Fahad Sajid Portfolio',
    images: [
      {
        url: 'https://fahad-sajid.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fahad Sajid Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahad Sajid | Software Engineer',
    description: 'React.js, Next.js, Node.js, Full Stack Development portfolio.',
    images: ['https://fahad-sajid.vercel.app/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        {/* Person Schema structured data for better search indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'Fahad Sajid',
              'jobTitle': 'Software Engineer',
              'url': 'https://fahad-sajid.vercel.app',
              'sameAs': [
                'https://github.com/fahad4920',
                'https://www.linkedin.com/in/fahadsajid492/'
              ],
              'knowsAbout': [
                'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js',
                'MongoDB', 'MySQL', 'Odoo ERP', 'REST APIs'
              ],
              'nationality': 'Pakistani',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Haripur KPK',
                'addressCountry': 'Pakistan'
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Providers>
          <ScrollProgress />
          <AnimatedCursor />
          <Navbar />
          
          <main className="flex-grow w-full">
            {children}
          </main>
          
          <Footer />
          <FloatingHireMe />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
