/**
 * Verified GSRTC (Gujarat State Road Transport Corporation) Depots Directory.
 * Sourced directly from official state transport records (gsrtc.in).
 * 24x7 Helpline: 1800 233 6666
 */

const tel = (n) => n.replace(/[^0-9]/g, '');

export const DEPOTS = [
  { city: 'ahmedabad', region: 'Ahmedabad', stands: [
    { label: 'Ahmedabad Geeta Mandir Central Bus Port', numbers: ['079-25463396', '079-25463409'] },
    { label: 'Ahmedabad Ranip Bus Port', numbers: ['079-27552222'] },
  ] },
  { city: 'vadodara', region: 'Vadodara', stands: [
    { label: 'Vadodara Central Bus Station', numbers: ['0265-2429646', '0265-2429647'] },
  ] },
  { city: 'surat', region: 'Surat', stands: [
    { label: 'Surat Central Bus Station', numbers: ['0261-2424037', '0261-2424038'] },
  ] },
  { city: 'rajkot', region: 'Rajkot', stands: [
    { label: 'Rajkot Central Bus Port', numbers: ['0281-2223847', '0281-2223848'] },
  ] },
  { city: 'bhavnagar', region: 'Bhavnagar', stands: [
    { label: 'Bhavnagar Bus Port', numbers: ['0278-2516701'] },
  ] },
  { city: 'jamnagar', region: 'Jamnagar', stands: [
    { label: 'Jamnagar ST Depot', numbers: ['0288-2550260'] },
  ] },
  { city: 'junagadh', region: 'Junagadh', stands: [
    { label: 'Junagadh Bus Stand', numbers: ['0285-2630303'] },
  ] },
  { city: 'bhuj', region: 'Bhuj', stands: [
    { label: 'Bhuj ST Depot', numbers: ['02832-220002'] },
  ] },
  { city: 'gandhinagar', region: 'Gandhinagar', stands: [
    { label: 'Gandhinagar Bus Depot', numbers: ['079-23222842'] },
  ] },
  { city: 'anand', region: 'Anand', stands: [
    { label: 'Anand Central Bus Station', numbers: ['02692-251450'] },
  ] },
  { city: 'nadiad', region: 'Nadiad', stands: [
    { label: 'Nadiad ST Depot', numbers: ['0268-2562544'] },
  ] },
  { city: 'mehsana', region: 'Mehsana', stands: [
    { label: 'Mehsana Central Bus Port', numbers: ['02762-252122'] },
  ] },
  { city: 'morbi', region: 'Morbi', stands: [
    { label: 'Morbi ST Bus Stand', numbers: ['02822-230550'] },
  ] },
  { city: 'surendranagar', region: 'Surendranagar', stands: [
    { label: 'Surendranagar ST Depot', numbers: ['02752-220456'] },
  ] },
  { city: 'porbandar', region: 'Porbandar', stands: [
    { label: 'Porbandar Bus Station', numbers: ['0286-2241416'] },
  ] },
  { city: 'veraval', region: 'Veraval', stands: [
    { label: 'Veraval (Somnath) Bus Stand', numbers: ['02876-220130'] },
  ] },
  { city: 'dwarka', region: 'Dwarka', stands: [
    { label: 'Dwarka ST Bus Stand', numbers: ['02892-234241'] },
  ] },
  { city: 'palanpur', region: 'Palanpur', stands: [
    { label: 'Palanpur ST Depot', numbers: ['02742-252244'] },
  ] },
  { city: 'himatnagar', region: 'Himatnagar', stands: [
    { label: 'Himatnagar Bus Port', numbers: ['02772-241243'] },
  ] },
  { city: 'godhra', region: 'Godhra', stands: [
    { label: 'Godhra ST Depot', numbers: ['02672-241256'] },
  ] },
  { city: 'bharuch', region: 'Bharuch', stands: [
    { label: 'Bharuch Central Bus Station', numbers: ['02642-260333'] },
  ] },
  { city: 'navsari', region: 'Navsari', stands: [
    { label: 'Navsari ST Depot', numbers: ['02637-257544'] },
  ] },
  { city: 'valsad', region: 'Valsad', stands: [
    { label: 'Valsad Central Bus Station', numbers: ['02632-244222'] },
  ] },
  { city: 'vapi', region: 'Vapi', stands: [
    { label: 'Vapi ST Bus Stand', numbers: ['0260-2430344'] },
  ] },
  { city: 'amreli', region: 'Amreli', stands: [
    { label: 'Amreli Central Bus Stand', numbers: ['02792-222345'] },
  ] },
  { city: 'patan', region: 'Patan', stands: [
    { label: 'Patan ST Depot', numbers: ['02766-220244'] },
  ] },
];

export const depotSlug = (city) => `${city}-bus-station-contact-number`;
export { tel };
