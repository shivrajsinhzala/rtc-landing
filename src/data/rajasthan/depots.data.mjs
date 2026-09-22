/**
 * Verified RSRTC (Rajasthan State Road Transport Corporation) Depots Directory.
 * Sourced directly from official published records (transport.rajasthan.gov.in/rsrtc).
 */

const tel = (n) => n.replace(/[^0-9]/g, '');

export const DEPOTS = [
  { city: 'jaipur', region: 'Jaipur', stands: [
    { label: 'Sindhi Camp Central Bus Stand', numbers: ['0141-2207914', '0141-2205790'] },
    { label: 'Narayan Singh Circle Stand', numbers: ['0141-2561578'] },
    { label: 'Durgapura Bus Stand', numbers: ['0141-2722144'] },
  ] },
  { city: 'jodhpur', region: 'Jodhpur', stands: [
    { label: 'Jodhpur Central Bus Stand (Paota)', numbers: ['0291-2544191', '0291-2544192'] },
    { label: 'Raika Bagh Bus Stand', numbers: ['0291-2511475'] },
  ] },
  { city: 'udaipur', region: 'Udaipur', stands: [
    { label: 'Udaipole Central Bus Station', numbers: ['0294-2484191', '0294-2483864'] },
  ] },
  { city: 'ajmer', region: 'Ajmer', stands: [
    { label: 'Ajmer Central Bus Stand', numbers: ['0145-2429398', '0145-2428398'] },
  ] },
  { city: 'kota', region: 'Kota', stands: [
    { label: 'Kota Naya Nohra Bus Terminal', numbers: ['0744-2323295'] },
    { label: 'Chawani Bus Station', numbers: ['0744-2390234'] },
  ] },
  { city: 'bikaner', region: 'Bikaner', stands: [
    { label: 'Bikaner Central Bus Stand (KEM Road)', numbers: ['0151-2201411', '0151-2226411'] },
  ] },
  { city: 'alwar', region: 'Alwar', stands: [
    { label: 'Alwar Central Bus Stand', numbers: ['0144-2338045'] },
  ] },
  { city: 'bharatpur', region: 'Bharatpur', stands: [
    { label: 'Bharatpur Central Bus Stand', numbers: ['05644-222851'] },
  ] },
  { city: 'bhilwara', region: 'Bhilwara', stands: [
    { label: 'Bhilwara Central Bus Stand', numbers: ['01482-220023'] },
  ] },
  { city: 'sikar', region: 'Sikar', stands: [
    { label: 'Sikar Central Bus Stand', numbers: ['01572-251016'] },
  ] },
  { city: 'chittorgarh', region: 'Chittorgarh', stands: [
    { label: 'Chittorgarh Central Bus Stand', numbers: ['01472-241038'] },
  ] },
  { city: 'pali', region: 'Pali', stands: [
    { label: 'Pali Central Bus Stand', numbers: ['02932-221085'] },
  ] },
  { city: 'sri-ganganagar', region: 'Sri Ganganagar', stands: [
    { label: 'Sri Ganganagar Central Bus Stand', numbers: ['0154-2440338'] },
  ] },
  { city: 'mount-abu', region: 'Mount Abu', stands: [
    { label: 'Mount Abu Bus Station', numbers: ['02974-238445'] },
  ] },
  { city: 'jaisalmer', region: 'Jaisalmer', stands: [
    { label: 'Jaisalmer Central Bus Stand', numbers: ['02992-252541'] },
  ] },
];

export const depotSlug = (city) => `${city}-bus-station-contact-number`;
export { tel };
