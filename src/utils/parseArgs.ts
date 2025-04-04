import { Command } from 'commander';

export interface CliOptions {
    url: string;
    tor?: boolean;
    proxy?: string;
    doh?: boolean;
}

export const parseArgs = (): CliOptions => {
    const program = new Command();
    program
        .name('ghost-route')
        .description('Bypass website censorship using DNS-over-HTTPS, proxies, or Tor.')
        .argument('<url>', 'Target URL to access')
        .option('--tor', 'Use Tor for routing')
        .option('--proxy <url>', 'Use a specific HTTP/SOCKS proxy')
        .option('--doh', 'Use DNS-over-HTTPS resolution')
        .parse();

    const args = program.args;
    const opts = program.opts();

    return {
        url: args[0],
        tor: opts.tor,
        proxy: opts.proxy,
        doh: opts.doh,
    };
};
