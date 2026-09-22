/**
 * Verified UTC (Uttarakhand Transport Corporation) Depots Directory.
 * Sourced directly from official state transport records (utconline.uk.gov.in).
 * UTC 24x7 Helpline: 8476007605
 */

const tel = (n) => n.replace(/[^0-9]/g, '');

export const DEPOTS = [
  { city: 'dehradun', region: 'Dehradun', stands: [
    { label: 'Dehradun ISBT (Haridwar Bypass)', numbers: ['8476000522', '0135-2623435'] },
    { label: 'Dehradun Hill Depot (Mussoorie Stand)', numbers: ['9045599109'] },
    { label: 'Dehradun Rural Depot', numbers: ['8476007565'] },
  ] },
  { city: 'haridwar', region: 'Haridwar', stands: [
    { label: 'Haridwar Central Bus Stand (Opposite Railway Station)', numbers: ['9045599115', '01334-227037'] },
  ] },
  { city: 'rishikesh', region: 'Rishikesh', stands: [
    { label: 'Rishikesh Central Bus Stand', numbers: ['9045599119', '0135-2430209'] },
  ] },
  { city: 'haldwani', region: 'Haldwani', stands: [
    { label: 'Haldwani Central Bus Stand', numbers: ['8476007579', '05946-250143'] },
  ] },
  { city: 'nainital', region: 'Nainital', stands: [
    { label: 'Tallital Bus Station', numbers: ['05942-235518'] },
  ] },
  { city: 'roorkee', region: 'Roorkee', stands: [
    { label: 'Roorkee General Bus Stand', numbers: ['9045599116', '01332-262432'] },
  ] },
  { city: 'kashipur', region: 'Kashipur', stands: [
    { label: 'Kashipur General Bus Stand', numbers: ['9045599125'] },
  ] },
  { city: 'rudrapur', region: 'Rudrapur', stands: [
    { label: 'Rudrapur General Bus Stand', numbers: ['9045599123'] },
  ] },
  { city: 'almora', region: 'Almora', stands: [
    { label: 'Almora Central Bus Stand', numbers: ['05962-230045'] },
  ] },
  { city: 'pithoragarh', region: 'Pithoragarh', stands: [
    { label: 'Pithoragarh General Bus Stand', numbers: ['05964-225345'] },
  ] },
];

export const depotSlug = (city) => `${city}-bus-station-contact-number`;
export { tel };
