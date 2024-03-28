/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
    return [
      {
        source: '/admin/dashboard/jobs/api',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
