declare module 'next-pwa' {
  import { NextConfig } from 'next';

  interface PWAConfig {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    runtimeCaching?: Array<{
      urlPattern: RegExp;
      handler: string;
      options: {
        cacheName: string;
        networkTimeoutSeconds?: number;
        expiration?: {
          maxEntries: number;
          maxAgeSeconds: number;
        };
        cacheableResponse?: {
          statuses: number[];
        };
      };
    }>;
  }

  function withPWA(pwaConfig: PWAConfig): (nextConfig: NextConfig) => NextConfig;

  export default withPWA;
}