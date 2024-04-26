// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your configurations go here
    reactStrictMode: true, // Enable React Strict Mode
    webpack: (config, { isServer }) => {
      // Additional webpack configurations
      if (isServer) {
        // Server-specific configurations
      } else {
        // Client-specific configurations
      }
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  