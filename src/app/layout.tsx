import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "../components/sections/Footer";
import Navigation from "../components/Navigation";
import CustomCursor from "../components/CustomCursor";
import { metadata as siteMetadata } from './metadata'
import { GoogleAnalytics } from '../lib/analytics'
import { getStructuredData } from '../lib/structured-data'
import Script from 'next/script'
import CookieConsent from '../components/CookieConsent'
import { PerformanceMonitor } from '../components/PerformanceMonitor'
import ErrorBoundary from '../components/ErrorBoundary'

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#D4AF37',
}

export const metadata: Metadata = {
  title: 'Clasico Barbershop | Luxury Grooming Experience',
  description: 'Experience the art of premium grooming at Clasico Barbershop. Where tradition meets innovation in a sophisticated atmosphere.',
  keywords: 'barbershop, luxury grooming, premium haircuts, beard trim, shaving, men\'s grooming',
  authors: [{ name: 'Clasico Barbershop' }],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Clasico Barbershop',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'Clasico Barbershop | Luxury Grooming Experience',
    description: 'Experience the art of premium grooming at Clasico Barbershop. Where tradition meets innovation in a sophisticated atmosphere.',
    url: 'https://clasicobarbershop.com',
    siteName: 'Clasico Barbershop',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clasico Barbershop',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clasico Barbershop | Luxury Grooming Experience',
    description: 'Experience the art of premium grooming at Clasico Barbershop.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Mobile-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Clasico Barbershop" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        
        {/* PWA icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
        />
      </head>
      <body className="min-h-screen bg-white text-primary antialiased font-sans selection:bg-accent/20 selection:text-accent">
        <CustomCursor />
        <Navigation />
        <ErrorBoundary>
          <main className="pt-20 sm:pt-24">
            {children}
          </main>
        </ErrorBoundary>
        <Footer />
        <GoogleAnalytics />
        <CookieConsent />
        <PerformanceMonitor />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
} 