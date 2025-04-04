import axios from 'axios';
import { SocksProxyAgent } from 'socks-proxy-agent';
import { log } from '../utils/logger';

export const fetchViaTor = async (url: string): Promise<boolean> => {
    try {
        const torProxy = 'socks5h://127.0.0.1:9050';
        const agent = new SocksProxyAgent(torProxy);

        const res = await axios.get(url, {
            httpAgent: agent,
            httpsAgent: agent,
            timeout: 10000,
        });

        log.success(`Accessed ${url} via Tor (status ${res.status})`);
        return true;
    } catch (error: any) {
        log.warn(`Tor access failed: ${error.message}`);
        return false;
    }
};
