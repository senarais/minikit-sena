/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/.well-known/farcaster.json",
        destination:
          "https://api.farcaster.xyz/miniapps/hosted-manifest/01998e97-b7a4-3d79-dff3-34340874c587",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
