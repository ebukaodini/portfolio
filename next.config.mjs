/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  }, // Exclude admin routes from static export
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const routes = {};

    // Add all default routes except admin routes
    Object.keys(defaultPathMap).forEach((route) => {
      if (!route.startsWith("/admin")) {
        routes[route] = defaultPathMap[route];
      }
    });

    return routes;
  },
};

export default nextConfig;
