import posthog from 'posthog-js'
import { browser } from '$app/environment';

export const prerender = true;

export const load = async () => {
    if (browser) {
        posthog.init(
            'phc_4XB2LcqTutCvDbtvimDaGsOt04nsZ4f23SdJZbDDdEZ',
            {
                api_host: 'https://eu.posthog.com'
            }
        )
    }
};