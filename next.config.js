/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx", "jsx", "js"],
};

module.exports = withMDX(nextConfig);
