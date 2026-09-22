/**
 * Verified Punjab Roadways (PUNBUS) & PRTC Depots Directory.
 * Sourced directly from official state transport records (punbusonline.com & pepsurtc.com).
 * Public Enquiry: 0183-2551734 / 95921-95923
 */

const tel = (n) => n.replace(/[^0-9]/g, '');

export const DEPOTS = [
  { city: 'amritsar', region: 'Amritsar', stands: [
    { label: 'Shaheed Madan Lal Dhingra ISBT Amritsar', numbers: ['0183-2551734', '0183-2551735'] },
  ] },
  { city: 'ludhiana', region: 'Ludhiana', stands: [
    { label: 'Amar Shaheed Sukhdev Thapar ISBT Ludhiana', numbers: ['0161-2447015', '0161-2433726'] },
  ] },
  { city: 'jalandhar', region: 'Jalandhar', stands: [
    { label: 'Shaheed-e-Azam Bhagat Singh ISBT Jalandhar', numbers: ['0181-2223755', '0181-2227633'] },
  ] },
  { city: 'patiala', region: 'Patiala', stands: [
    { label: 'Patiala New Central Bus Stand (Rajpura Road)', numbers: ['0175-2311718', '0175-2311719'] },
  ] },
  { city: 'bathinda', region: 'Bathinda', stands: [
    { label: 'Bathinda General Bus Stand', numbers: ['0164-2253018'] },
  ] },
  { city: 'hoshiarpur', region: 'Hoshiarpur', stands: [
    { label: 'Hoshiarpur General Bus Stand', numbers: ['01882-222340'] },
  ] },
  { city: 'firozpur', region: 'Firozpur', stands: [
    { label: 'Firozpur Cantt Bus Stand', numbers: ['01632-244321'] },
  ] },
  { city: 'pathankot', region: 'Pathankot', stands: [
    { label: 'Pathankot Maharana Pratap ISBT', numbers: ['0186-2220194'] },
  ] },
  { city: 'mohali', region: 'Mohali', stands: [
    { label: 'Mohali Phase 8 Bus Stand & ISBT 43 Counter', numbers: ['0172-2270414'] },
  ] },
  { city: 'kapurthala', region: 'Kapurthala', stands: [
    { label: 'Kapurthala General Bus Stand', numbers: ['01822-232543'] },
  ] },
];

export const depotSlug = (city) => `${city}-bus-station-contact-number`;
export { tel };
