/**
 * Verified Haryana Roadways Depots Directory.
 * Sourced directly from official state transport records (hartrans.gov.in).
 */

const tel = (n) => n.replace(/[^0-9]/g, '');

export const DEPOTS = [
  { city: 'gurugram', region: 'Gurugram', stands: [
    { label: 'Gurugram Bus Stand (Old Delhi Rd)', numbers: ['0124-2320222', '0124-2320224'] },
    { label: 'IFFCO Chowk Enquiry Counter', numbers: ['0124-2320222'] },
  ] },
  { city: 'faridabad', region: 'Faridabad', stands: [
    { label: 'Faridabad NIT Bus Stand', numbers: ['0129-2241512'] },
    { label: 'Ballabgarh Bus Terminal', numbers: ['0129-2241513'] },
  ] },
  { city: 'rohtak', region: 'Rohtak', stands: [
    { label: 'Rohtak General Bus Stand', numbers: ['01262-276641', '01262-276642'] },
  ] },
  { city: 'panipat', region: 'Panipat', stands: [
    { label: 'Panipat General Bus Stand (GT Road)', numbers: ['0180-2646544', '0180-2646545'] },
  ] },
  { city: 'ambala', region: 'Ambala', stands: [
    { label: 'Ambala Cantt General Bus Stand', numbers: ['0171-2640821', '0171-2640822'] },
  ] },
  { city: 'hisar', region: 'Hisar', stands: [
    { label: 'Hisar General Bus Stand', numbers: ['01662-233285', '01662-232285'] },
  ] },
  { city: 'karnal', region: 'Karnal', stands: [
    { label: 'Karnal General Bus Stand (GT Road)', numbers: ['0184-2252401'] },
  ] },
  { city: 'sonipat', region: 'Sonipat', stands: [
    { label: 'Sonipat General Bus Stand', numbers: ['0130-2220038'] },
  ] },
  { city: 'kurukshetra', region: 'Kurukshetra', stands: [
    { label: 'Kurukshetra (Pipli) Bus Stand', numbers: ['01744-220035'] },
  ] },
  { city: 'rewari', region: 'Rewari', stands: [
    { label: 'Rewari General Bus Stand', numbers: ['01274-256751'] },
  ] },
  { city: 'yamunanagar', region: 'Yamunanagar', stands: [
    { label: 'Jagadhri / Yamunanagar Bus Stand', numbers: ['01732-227717'] },
  ] },
  { city: 'bhiwani', region: 'Bhiwani', stands: [
    { label: 'Bhiwani General Bus Stand', numbers: ['01664-242567'] },
  ] },
  { city: 'jind', region: 'Jind', stands: [
    { label: 'Jind General Bus Stand', numbers: ['01681-255325'] },
  ] },
  { city: 'sirsa', region: 'Sirsa', stands: [
    { label: 'Sirsa General Bus Stand', numbers: ['01666-220856'] },
  ] },
  { city: 'chandigarh', region: 'Chandigarh / Panchkula', stands: [
    { label: 'Chandigarh ISBT Sector 17 Counter', numbers: ['0172-2704014'] },
    { label: 'Chandigarh ISBT Sector 43 Counter', numbers: ['0172-2624537'] },
  ] },
];

export const depotSlug = (city) => `${city}-bus-station-contact-number`;
export { tel };
