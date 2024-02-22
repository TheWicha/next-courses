import path from "path";
import { getHashDigest } from "loader-utils";

const hashOnlyIdent = (context, _, exportName) => {
  return getHashDigest(
    Buffer.from(
      `filePath:${path
        .relative(context.rootContext, context.resourcePath)
        .replace(/\\\\+/g, "/")}` + `#className:${exportName}`
    ),
    "md4",
    "base64",
    6
  )
    .replace(/[^a-zA-Z0-9-_]/g, "_")
    .replace(/^(-?\d|--)/, "_$1");
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        pathname: "**",
      },
    ],
  },
  webpack(config, { dev }) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.filter((rule) => Array.isArray(rule.use));

    if (!dev) {
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes("css-loader") &&
            !moduleLoader.loader?.includes("postcss-loader") &&
            moduleLoader.options.modules
          ) {
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
          }
        });
      });
    }

    return config;
  },
};

export default nextConfig;
