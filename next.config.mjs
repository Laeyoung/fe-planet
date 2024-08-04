/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
      return [
        // {
        //     source: '/',
        //     destination: 'https://velog.io/@laeyoung/%ED%95%98-%EC%9D%BC%EC%A3%BC%EC%9D%BC%EC%A7%9C%EB%A6%AC-%EC%82%AC%EC%A0%84%EA%B3%BC%EC%A0%9C-%EC%A2%80-%EA%B7%B8%EB%A7%8C',
        //     permanent: true,
        // },
        {
          source: '/survey',
          destination: 'https://forms.gle/N7KPEo7GSDCDF99B6',
          permanent: true,
        },
      ];
    },
}

export default nextConfig;