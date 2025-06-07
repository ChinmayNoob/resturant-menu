import type { Metadata } from "next";
import { Bitter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bitter = Bitter({
  variable: "--font-bitter",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urahara Kitchen - Where Every Bite Whispers a Tale",
  description: "Experience authentic flavors at Urahara Kitchen, Mumbai. From crispy French fries to loaded nachos, discover dishes that tell a story. Located in Delicious City, Mumbai.",
  keywords: ["restaurant", "Mumbai", "Indian food", "starters", "nachos", "French fries", "dining", "Urahara Kitchen"],
  authors: [{ name: "Urahara Kitchen" }],
  creator: "Urahara Kitchen",
  publisher: "Urahara Kitchen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resturant-menu-eta.vercel.app/',
    siteName: 'Urahara Kitchen',
    title: 'Urahara Kitchen - Where Every Bite Whispers a Tale',
    description: 'Experience authentic flavors at Urahara Kitchen, Mumbai. From crispy French fries to loaded nachos, discover dishes that tell a story.',
    images: [
      {
        url: '/home-page.png',
        width: 1200,
        height: 630,
        alt: 'Urahara Kitchen - Where Every Bite Whispers a Tale',
      },
      {
        url: '/resturant-menu.png',
        width: 1200,
        height: 630,
        alt: 'Urahara Kitchen Menu - Delicious Starters and More',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@UraharaKitchen',
    creator: '@Chinmay0408',
    title: 'Urahara Kitchen - Where Every Bite Whispers a Tale',
    description: 'Experience authentic flavors at Urahara Kitchen, Mumbai. From crispy French fries to loaded nachos, discover dishes that tell a story.',
    images: ['/home-page.png'],
  },
  alternates: {
    canonical: 'https://resturant-menu-eta.vercel.app/',
  },
  other: {
    'contact:phone_number': '+91 98260 00000',
    'contact:email': 'uraharakitchen@gmail.com',
    'business:contact_data:street_address': 'Main St, Delicious City',
    'business:contact_data:locality': 'Mumbai',
    'business:contact_data:region': 'Maharashtra',
    'business:contact_data:postal_code': '9578',
    'business:contact_data:country_name': 'India',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
