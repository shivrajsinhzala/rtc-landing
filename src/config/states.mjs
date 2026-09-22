/**
 * The state registry. This is the file that decides whether adding a second state is a config
 * entry or a fork of the codebase — every page, layout and script reads a state's identity from
 * here rather than having it hardcoded, so Uttar Pradesh and whatever comes after it run through
 * the exact same build.
 *
 * Domain shape: one domain, one directory per state (`/uttar-pradesh/...`), not a subdomain per
 * state. A subdomain starts Google's trust at zero for every new state; a subdirectory inherits
 * the domain's accumulated authority from day one, and it is what every competitor in this
 * space (redBus, AbhiBus, Paytm) already does. gsrtc.shivrajsinh.in is NOT folded into this —
 * it already holds real rankings on its own domain, and moving a page that ranks is a real risk
 * for no proven gain. This project starts separately and stays separate until the model here is
 * proven the way Gujarat's was proven first.
 *
 * `slug` is the URL directory. `adClient` reuses the existing AdSense publisher id — one
 * publisher account can serve multiple sites; each new domain still needs to be added and
 * verified in the AdSense dashboard and carry its own ads.txt before it can earn anything.
 */

export const SITE = 'https://rtc.shivrajsinh.in';

/**
 * `id` keys this object and matches the directory under src/data/. `corporation` is the
 * operator's own name for itself, used throughout page copy instead of a generic "the state
 * transport corporation" — specificity is what makes a page read as written for that state
 * rather than templated.
 */
export const STATES = {
  'uttar-pradesh': {
    id: 'uttar-pradesh',
    slug: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    corporation: 'UPSRTC',
    corporationFull: 'Uttar Pradesh State Road Transport Corporation',
    brand: 'UP Roadways Bus Info',
    officialSite: 'https://upsrtc.up.gov.in',
    /**
     * Sourced directly from upsrtc.up.gov.in/en/page/helpline-directory, 2026-09-22 — the
     * corporation's own published number, not an aggregator's copy of it. See
     * src/data/uttar-pradesh/depots.data.mjs for the full sourcing note and the per-depot
     * numbers this page-generates from.
     */
    helpline: { primary: '1800-180-2877', label: '24x7 UPSRTC passenger helpline' },
    lang: 'en',
    htmlLang: 'en-IN',
  },
  'maharashtra': {
    id: 'maharashtra',
    slug: 'maharashtra',
    name: 'Maharashtra',
    corporation: 'MSRTC',
    corporationFull: 'Maharashtra State Road Transport Corporation',
    brand: 'Maharashtra ST Bus Info',
    officialSite: 'https://msrtc.maharashtra.gov.in',
    /**
     * Sourced directly from msrtc.maharashtra.gov.in and district administration records.
     * MSRTC 24x7 central toll-free passenger customer care: 1800-22-1250.
     */
    helpline: { primary: '1800-22-1250', label: '24x7 MSRTC passenger helpline' },
    lang: 'en',
    htmlLang: 'en-IN',
  },
  'rajasthan': {
    id: 'rajasthan',
    slug: 'rajasthan',
    name: 'Rajasthan',
    corporation: 'RSRTC',
    corporationFull: 'Rajasthan State Road Transport Corporation',
    brand: 'Rajasthan Roadways Bus Info',
    officialSite: 'https://transport.rajasthan.gov.in/rsrtc',
    helpline: { primary: '1800-2000-103', label: '24x7 RSRTC passenger helpline' },
    lang: 'en',
    htmlLang: 'en-IN',
  },
  'haryana': {
    id: 'haryana',
    slug: 'haryana',
    name: 'Haryana',
    corporation: 'Haryana Roadways',
    corporationFull: 'Haryana State Transport (Haryana Roadways)',
    brand: 'Haryana Roadways Bus Info',
    officialSite: 'https://hartrans.gov.in',
    helpline: { primary: '1800-180-2345', label: '24x7 Haryana Roadways passenger helpline' },
    lang: 'en',
    htmlLang: 'en-IN',
  },
  'himachal-pradesh': {
    id: 'himachal-pradesh',
    slug: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    corporation: 'HRTC',
    corporationFull: 'Himachal Road Transport Corporation',
    brand: 'HRTC Himachal Roadways Info',
    officialSite: 'https://www.hrtchp.com',
    helpline: { primary: '1800-180-8185', label: '24x7 HRTC passenger helpline' },
    lang: 'en',
    htmlLang: 'en-IN',
  },
  'uttarakhand': {
    id: 'uttarakhand',
    slug: 'uttarakhand',
    name: 'Uttarakhand',
    corporation: 'UTC',
    corporationFull: 'Uttarakhand Transport Corporation',
    brand: 'UTC Uttarakhand Roadways Info',
    officialSite: 'https://utconline.uk.gov.in',
    helpline: { primary: '8476007605', label: '24x7 UTC passenger helpline' },
    lang: 'en',
    htmlLang: 'en-IN',
  },
  'punjab': {
    id: 'punjab',
    slug: 'punjab',
    name: 'Punjab',
    corporation: 'PUNBUS',
    corporationFull: 'Punjab Roadways & PRTC',
    brand: 'Punjab Roadways & PRTC Info',
    officialSite: 'https://punbusonline.com',
    helpline: { primary: '0183-2551734', label: 'Punjab Roadways enquiry desk' },
    lang: 'en',
    htmlLang: 'en-IN',
  },
  'gujarat': {
    id: 'gujarat',
    slug: 'gujarat',
    name: 'Gujarat',
    corporation: 'GSRTC',
    corporationFull: 'Gujarat State Road Transport Corporation',
    brand: 'GSRTC Gujarat ST Bus Info',
    officialSite: 'https://gsrtc.in',
    helpline: { primary: '1800-233-666666', label: '24x7 GSRTC toll-free passenger helpline' },
    lang: 'en',
    htmlLang: 'en-IN',
  },
};

export const stateList = Object.values(STATES);
