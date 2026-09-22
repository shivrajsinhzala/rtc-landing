/**
 * One page per UPSRTC region, each carrying every station enquiry number the region has.
 *
 * Sourced entirely from the official government site, not an aggregator:
 *   upsrtc.up.gov.in/en/page/helpline-directory   — 119 station numbers, verified 2026-09-22
 *   upsrtc.up.gov.in/en/page/depot-amp;-bus-stations — the fuller depot list (no numbers), used
 *     only to confirm a region's principal city and to cross-check names, not to invent data.
 *
 * Grouped by region rather than one page per individual stop, for two reasons. First, most of
 * the 119 numbered entries are small towns with no independent search volume to test against —
 * unlike Gujarat, there is no Search Console history here yet to say which of them matters, so
 * grouping under the region's well-known city is the safe default until real query data exists
 * to split further. Second, several regions genuinely are one city with several bus stands
 * (Lucknow has four), which is exactly the shape src/data/depots.data.mjs already used for
 * Ahmedabad on the Gujarat site — this ports that pattern rather than inventing a new one.
 *
 * Same rule as Gujarat's depot pages: nothing here is invented. No addresses, no hours, no
 * platform numbers — only what the corporation itself publishes. A wrong number is worse than
 * no page.
 */

const tel = (n) => n.replace(/[^0-9]/g, '');

/**
 * `city` is the slug key and the name used in page copy — the region's principal / most
 * recognisable city, not always the official division name (UPSRTC's "Devipatan" division has
 * no city called Devipatan; its own headquarters and the name people actually search is Gonda).
 */
export const DEPOTS = [
  { city: 'agra', region: 'Agra', stands: [
    { label: 'Agra ISBT', numbers: ['0562-2603536', '9412803927'] },
    { label: 'Agra Fort (I.B.ST)', numbers: ['9412803927'] },
    { label: 'Idgah Bus Station', numbers: ['9456981069'] },
    { label: 'Bijaligarh Bus Stand', numbers: ['9411466318'] },
  ] },
  { city: 'ghaziabad', region: 'Ghaziabad', stands: [
    { label: 'Kaushambi Bus Station', numbers: ['0120-2988721', '9711120699'] },
    { label: 'Ghaziabad Old Bus Station', numbers: ['9711972860', '9758769891'] },
    { label: 'Hapur Bus Station', numbers: ['0122-2316613'] },
  ] },
  { city: 'meerut', region: 'Meerut', stands: [
    { label: 'Meerut Bus Station', numbers: ['9412703103', '0121-2420117'] },
    { label: 'Sohrabgate Bus Station', numbers: ['7895061806'] },
  ] },
  { city: 'saharanpur', region: 'Saharanpur', stands: [
    { label: 'Saharanpur Bus Station', numbers: ['01322-648131'] },
    { label: 'Muzaffarnagar Bus Station', numbers: ['9639017105'] },
  ] },
  { city: 'aligarh', region: 'Aligarh', stands: [
    { label: 'Aligarh Satellite Bus Station', numbers: ['7618466466'] },
    { label: 'Aligarh Masoodabad Bus Station', numbers: ['9412084553'] },
    { label: 'Budh Vihar Depot', numbers: ['0571-2405444'] },
  ] },
  { city: 'moradabad', region: 'Moradabad', stands: [
    { label: 'Moradabad-R Bus Station', numbers: ['0591-248000', '8726005894'] },
    { label: 'Katghar / Pitalnagri Bus Station', numbers: ['8726005895', '9412705035'] },
  ] },
  { city: 'bareilly', region: 'Bareilly', stands: [
    { label: 'Bareilly Old Bus Station', numbers: ['6389149018'] },
    { label: 'Bareilly Satellite Bus Station', numbers: ['6389149100'] },
  ] },
  { city: 'hardoi', region: 'Hardoi', stands: [
    { label: 'Hardoi Bus Station', numbers: ['05852-235444'] },
    { label: 'Sitapur Bus Station', numbers: ['05862-243254'] },
    { label: 'Lakhimpur Bus Station', numbers: ['05872-272623'] },
  ] },
  { city: 'etawah', region: 'Etawah', stands: [
    { label: 'Etawah Bus Station', numbers: ['05688-255494'] },
    { label: 'Mainpuri Bus Station', numbers: ['05672-234228'] },
    { label: 'Firozabad Bus Station', numbers: ['9410679001'] },
  ] },
  { city: 'kanpur', region: 'Kanpur', stands: [
    { label: 'Jhakarkati Bus Station', numbers: ['8726005906'] },
    { label: 'Chunniganj / Fazalganj Bus Station', numbers: ['8726005905'] },
    { label: 'Unnao Bus Station', numbers: ['8726005908'] },
  ] },
  { city: 'jhansi', region: 'Jhansi', stands: [
    { label: 'Jhansi Bus Station', numbers: ['8858478833'] },
    { label: 'Orai Bus Station', numbers: ['051622-52278', '82999098064'] },
  ] },
  { city: 'chitrakoot', region: 'Chitrakoot', alsoKnownAs: 'Banda', stands: [
    { label: 'Banda Bus Station', numbers: ['5192297299'] },
    { label: 'Mahoba Bus Station', numbers: ['05281-244130'] },
    { label: 'Karvi Bus Station', numbers: ['05198-298457'] },
  ] },
  { city: 'lucknow', region: 'Lucknow', stands: [
    { label: 'Charbagh Bus Station', numbers: ['8726005892'] },
    { label: 'Alambagh Bus Station', numbers: ['8726005891'] },
    { label: 'Kaiserbagh Bus Station', numbers: ['8726005893'] },
    { label: 'Awadh Bus Station', numbers: ['0522-3510951'] },
  ] },
  { city: 'ayodhya', region: 'Ayodhya', stands: [
    { label: 'Ayodhya Bus Station', numbers: ['05278-222964', '7704823093'] },
    { label: 'Ayodhya Dham Bus Station', numbers: ['7752951415'] },
    { label: 'Sultanpur Bus Station', numbers: ['5362226094'] },
  ] },
  { city: 'gonda', region: 'Devipatan', stands: [
    { label: 'Gonda Bus Station', numbers: ['9453269789', '9838813485'] },
    { label: 'Bahraich Bus Station', numbers: ['7897542229'] },
    { label: 'Balrampur Bus Station', numbers: ['8299049448'] },
  ] },
  { city: 'prayagraj', region: 'Prayagraj', stands: [
    { label: 'Civil Lines Bus Station', numbers: ['8726005896'] },
    { label: 'Zero Road Bus Station', numbers: ['7521801226'] },
    { label: 'Leader Road Bus Station', numbers: ['8726005896'] },
    { label: 'Mirzapur Bus Station', numbers: ['05442-220562'] },
  ] },
  { city: 'azamgarh', region: 'Azamgarh', stands: [
    { label: 'Azamgarh Bus Station', numbers: ['8726005150', '9453005878'] },
    { label: 'Mau Bus Station', numbers: ['7007872768', '0547-2220915'] },
    { label: 'Balia Bus Station', numbers: ['05498-220739'] },
  ] },
  { city: 'gorakhpur', region: 'Gorakhpur', stands: [
    { label: 'Gorakhpur Bus Station', numbers: ['9451063836'] },
    { label: 'Raptinagar / Kachari Bus Station', numbers: ['0551-2500632'] },
    { label: 'Deoria Bus Station', numbers: ['9451133475'] },
    { label: 'Basti Bus Station', numbers: ['05542-282505'] },
  ] },
  { city: 'varanasi', region: 'Varanasi', stands: [
    { label: 'Varanasi Cantt / Grami Bus Station', numbers: ['8726005897'] },
    { label: 'Kashi Depot', numbers: ['8957896832', '8423564796'] },
    { label: 'Jaunpur Bus Station', numbers: ['8400486692'] },
    { label: 'Ghazipur Bus Station', numbers: ['9026315241'] },
  ] },
  { city: 'noida', region: 'Noida', stands: [
    { label: 'Noida City Centre Bus Station', numbers: ['0120-2507864', '7906352776'] },
    { label: 'Greater Noida Bus Station', numbers: ['9870387661'] },
  ] },
];

export const depotSlug = (city) => `${city}-bus-station-contact-number`;
export { tel };
