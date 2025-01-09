/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb', // Sesuaikan dengan kebutuhan Anda
        }
    },
    images : {
        remotePatterns : [
            {
                protocol : "https",
                hostname : "dmtyhqqrprxbalrjfchf.supabase.co"
            }
        ]
    }
};

export default nextConfig;
