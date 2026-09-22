/**
 * Verified HRTC (Himachal Road Transport Corporation) Depots Directory.
 * Sourced directly from official state transport records (hrtchp.com).
 * HRTC Toll-Free Helpline: 1800 180 8185 / 0177-2658765
 */

const tel = (n) => n.replace(/[^0-9]/g, '');

export const DEPOTS = [
  { city: 'shimla', region: 'Shimla', stands: [
    { label: 'ISBT Tutikandi (Shimla New Bus Stand)', numbers: ['0177-2657326', '0177-2658765'] },
    { label: 'Old Bus Stand (Shimla Cart Road)', numbers: ['0177-2803456'] },
  ] },
  { city: 'manali', region: 'Manali', stands: [
    { label: 'Manali Central Bus Stand', numbers: ['01902-252323', '01902-251115'] },
  ] },
  { city: 'dharamshala', region: 'Dharamshala', stands: [
    { label: 'Dharamshala General Bus Stand', numbers: ['01892-224903', '01892-224904'] },
    { label: 'McLeod Ganj Bus Stand', numbers: ['01892-221298'] },
  ] },
  { city: 'kullu', region: 'Kullu', stands: [
    { label: 'Kullu Sarwari Bus Stand', numbers: ['01902-222728'] },
  ] },
  { city: 'mandi', region: 'Mandi', stands: [
    { label: 'Mandi ISBT Bus Stand', numbers: ['01905-235538', '01905-222842'] },
  ] },
  { city: 'solan', region: 'Solan', stands: [
    { label: 'Solan New Bus Stand', numbers: ['01792-223028'] },
  ] },
  { city: 'kangra', region: 'Kangra', stands: [
    { label: 'Kangra General Bus Stand', numbers: ['01892-265129'] },
  ] },
  { city: 'chamba', region: 'Chamba', stands: [
    { label: 'Chamba Main Bus Stand', numbers: ['01899-222210'] },
  ] },
  { city: 'hamirpur', region: 'Hamirpur', stands: [
    { label: 'Hamirpur Central Bus Stand', numbers: ['01972-222893'] },
  ] },
  { city: 'una', region: 'Una', stands: [
    { label: 'Una General Bus Stand', numbers: ['01975-226058'] },
  ] },
  { city: 'bilaspur', region: 'Bilaspur', stands: [
    { label: 'Bilaspur Bus Stand (NH-205)', numbers: ['01978-222549'] },
  ] },
  { city: 'palampur', region: 'Palampur', stands: [
    { label: 'Palampur General Bus Stand', numbers: ['01894-230304'] },
  ] },
];

export const depotSlug = (city) => `${city}-bus-station-contact-number`;
export { tel };
