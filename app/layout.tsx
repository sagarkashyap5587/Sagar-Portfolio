import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UI_TEXT } from "./page.constant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: UI_TEXT.META_TITLE,
  description: UI_TEXT.META_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sagar Portfolio',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#1976d2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-locator-target="vscode">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Enhanced PWA Service Worker Registration
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  const swUrl = '/sw.js';

                  navigator.serviceWorker.register(swUrl, { scope: '/' })
                    .then(function(registration) {
                      console.log('[PWA] SW registered: ', registration);

                      // Check for updates periodically
                      setInterval(() => {
                        registration.update();
                      }, 60 * 60 * 1000); // Check every hour

                      // Handle updates
                      registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                          newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                              // New content available, show update prompt
                              if (confirm('New version available! Reload to update?')) {
                                newWorker.postMessage({ type: 'SKIP_WAITING' });
                                window.location.reload();
                              }
                            }
                          });
                        }
                      });
                    })
                    .catch(function(registrationError) {
                      console.error('[PWA] SW registration failed: ', registrationError);
                    });
                });
              } else {
                console.warn('[PWA] Service Workers are not supported in this browser');
              }

              // PWA Install Prompt
              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;

                // Show install button or prompt
                const installButton = document.querySelector('[data-pwa-install]');
                if (installButton) {
                  installButton.style.display = 'block';
                  installButton.addEventListener('click', () => {
                    if (deferredPrompt) {
                      deferredPrompt.prompt();
                      deferredPrompt.userChoice.then((choiceResult) => {
                        console.log('[PWA] Install prompt result:', choiceResult.outcome);
                        deferredPrompt = null;
                      });
                    }
                  });
                }
              });

              // Handle app installed event
              window.addEventListener('appinstalled', () => {
                console.log('[PWA] App was installed successfully');
                const installButton = document.querySelector('[data-pwa-install]');
                if (installButton) {
                  installButton.style.display = 'none';
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
