import axios from 'axios';
import { log } from '../utils/logger';

export const checkAccess = async (url: string): Promise<boolean> => {
    try {
        const res = await axios.get(url, { timeout: 5000 });
        log.success(`Direct access to ${url} succeeded with status ${res.status}`);
        return true;
    } catch (error: any) {
        log.warn(`Direct access to ${url} failed: ${error.message}`);
        return false;
    }
};
