const rewrites = async () => {
  return [
    {
      source: "/mon-dossier",
      destination: "/my-directory",
    },
    {
      source: "/mon-dossier/:id",
      destination: "/my-directory/:id",
    },
  ];
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/some-path",
  rewrites,
};

module.exports = nextConfig;
