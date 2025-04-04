import { parseArgs } from './utils/parseArgs';
import { checkAccess } from './core/checkAccess';
import { resolveWithDoH } from './core/dohResolver';
import { fetchViaProxy } from './core/proxyClient';
import { fetchViaTor } from './core/torClient';
import { log } from './utils/logger';
import * as url from 'url';

(async () => {
    const { url: targetUrl, tor, proxy, doh } = parseArgs();

    log.info(`Checking access to ${targetUrl}`);
    const direct = await checkAccess(targetUrl);
    if (direct) return;

    const hostname = new URL(targetUrl).hostname;

    if (doh) {
        log.info('Attempting DNS-over-HTTPS resolution...');
        await resolveWithDoH(hostname);
    }

    if (proxy) {
        log.info(`Trying proxy ${proxy}...`);
        const success = await fetchViaProxy(targetUrl, proxy);
        if (success) return;
    }

    if (tor) {
        log.info('Trying Tor connection...');
        await fetchViaTor(targetUrl);
    }
})();
