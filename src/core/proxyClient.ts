import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { SocksProxyAgent } from 'socks-proxy-agent';
import { log } from '../utils/logger';

export const fetchViaProxy = async (url: string, proxy: string): Promise<boolean> => {
    try {
        const isSocks = proxy.startsWith('socks');
        const agent = isSocks
            ? new SocksProxyAgent(proxy)
            : new HttpsProxyAgent(proxy);

        const res = await axios.get(url, {
            httpAgent: agent,
            httpsAgent: agent,
            timeout: 7000,
        });

        log.success(`Accessed ${url} via proxy (${proxy}) with status ${res.status}`);
        return true;
    } catch (error: any) {
        log.warn(`Proxy access failed (${proxy}): ${error.message}`);
        return false;
    }
};
