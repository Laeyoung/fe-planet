/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
      return [
        {
            source: '/',
            destination: 'https://velog.io/@laeyoung/posts',
            permanent: true,
        },
        {
          source: '/survey',
          destination: 'https://forms.gle/N7KPEo7GSDCDF99B6',
          permanent: true,
        },
      ];
    },
}

export default nextConfig;