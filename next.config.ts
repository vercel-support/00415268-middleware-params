import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: '/:path*',
        destination: 'https://00415268-middleware-params.preview.vercel-support.app/:path*', // new domain
        statusCode: 307,
        missing: [
          {
            'value': '00415268-middleware-params.preview.vercel-support.app', // old domain
            'type': 'host'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
