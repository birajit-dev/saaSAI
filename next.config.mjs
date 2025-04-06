/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "birdev.blr1.cdn.digitaloceanspaces.com",
        },
        {
            protocol: "https",
            hostname: "birdev.blr1.cdn.digitaloceanspaces.com",
        },
        {
            protocol: "https",
            hostname: "northeastherald.sfo3.digitaloceanspaces.com",
        },
        {
            protocol: "https",
            hostname: "i.ibb.co",
        },
        {
            protocol: "https",
            hostname: "img.freepik.com",
        },
        {
          protocol: "https",
          hostname: "kokthum.com",
      },
        {
          protocol: "http",
          hostname: "localhost",
      }
      ],
    },
  };

export default nextConfig;

  