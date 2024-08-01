/** @type {import('next').NextConfig} */
import nextIntl from "next-intl/plugin";
const nextConfig = {};

const withNextIntl = nextIntl("./src/app/i18n.ts");

export default withNextIntl(nextConfig);
