/** @type {import('next').NextConfig} */




const nextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
