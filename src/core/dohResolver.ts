import axios from 'axios';
import { log } from '../utils/logger';

export const resolveWithDoH = async (hostname: string): Promise<string | null> => {
    try {
        const url = `https://cloudflare-dns.com/dns-query?name=${hostname}&type=A`;
        const res = await axios.get(url, {
            headers: {
                Accept: 'application/dns-json',
            },
        });

        const answers = res.data.Answer;
        const ip = answers?.find((a: any) => a.type === 1)?.data;

        if (ip) {
            log.success(`Resolved ${hostname} via DoH: ${ip}`);
            return ip;
        } else {
            log.warn(`No A record found for ${hostname}`);
            return null;
        }
    } catch (error: any) {
        log.error(`DoH resolution failed: ${error.message}`);
        return null;
    }
};
