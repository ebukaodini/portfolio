import type React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// {
//   metadataBase: new URL('https://example.com'),
//   title: { default: 'My Site', template: '%s | My Site' },
//   description: 'Welcome to My Site',
//   alternates: {
//     canonical: 'https://example.com',
//     languages: {
//       'en-US': 'https://example.com/en-US',
//       'de-DE': 'https://example.com/de-DE'
//     }
//   },
//   openGraph: {
//     title: 'My Site',
//     description: 'Welcome to My Site',
//     url: 'https://example.com',
//     siteName: 'My Site',
//     images: [{ url: 'https://example.com/og.png' }]
//   },
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden">{children}</div>
      <Footer />
    </>
  );
}
