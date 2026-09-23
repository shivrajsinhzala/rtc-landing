/**
 * State-level informational pages for Uttar Pradesh — the "utility guide" cluster that
 * gsrtc-landing has (helpline, fare, booking, timetable) and that catches the high-volume
 * informational queries a depot page does not: "upsrtc helpline number", "up roadways fare",
 * "upsrtc online ticket booking", "upsrtc bus timetable".
 *
 * Same discipline as everything else in this project: public information only, sourced from
 * UPSRTC's own site, nothing invented. In particular the fare page explains how fares are
 * CALCULATED and links the official calculator — it does not quote a per-km paise figure as
 * current, because the official rates carry an expired validity window and a stale fare is the
 * same class of error as a wrong phone number.
 *
 * Each guide is plain data; the page shell (GuidePage.astro) renders `bodyHtml` as-is, so the
 * copy lives here next to its sourcing note.
 */

export const GUIDES = [
  {
    slug: 'upsrtc-helpline-number',
    navLabel: 'UPSRTC helpline & complaints',
    title: 'UPSRTC Helpline Number — 24x7 Customer Care & Complaints',
    description: 'UPSRTC 24x7 helpline 1800-180-2877 for UP Roadways bus enquiries, refunds and complaints — plus the WhatsApp line, email, and how to raise a complaint.',
    h1: 'UPSRTC helpline number & customer care',
    // Sourced: upsrtc.up.gov.in/en/page/helpline-directory and /en/article/contact-details.
    bodyHtml: `
      <div class="card">
        <p style="margin:0 0 .5rem;font-weight:600;">UPSRTC 24x7 passenger helpline</p>
        <div class="call-btns"><a href="tel:18001802877">Call 1800-180-2877</a></div>
      </div>
      <p>The single statewide number for anything to do with a UP Roadways (UPSRTC) bus —
        schedules, delays, a refund on a cancelled ticket, lost property, or a complaint — is
        the toll-free <a href="tel:18001802877">1800-180-2877</a>, staffed around the clock.</p>
      <h2>Which line to use for what</h2>
      <table>
        <tr><th>You need</th><th>Contact</th></tr>
        <tr><td>Bus enquiry, refund, complaint (statewide)</td><td><a href="tel:18001802877">1800-180-2877</a></td></tr>
        <tr><td>A specific bus station's local desk</td><td>See that station's page below</td></tr>
        <tr><td>Online booking support</td><td>online.support@upsrtc.com</td></tr>
      </table>
      <p>For a matter tied to one bus station — a bus that did not arrive, a query about a
        particular departure — the local station enquiry line is often faster than the statewide
        desk. Every UPSRTC region's station numbers are on
        <a href="/uttar-pradesh">the Uttar Pradesh bus station directory</a>.</p>
      <h2>Raising a complaint</h2>
      <p>Complaints can be made on the 24x7 line above, or through the official complaints page
        on UPSRTC's own website, <a href="https://upsrtc.up.gov.in" rel="noopener">upsrtc.up.gov.in</a>.
        Keep your ticket or PNR to hand — it is the first thing the desk will ask for.</p>`,
    faq: [
      { q: 'What is the UPSRTC 24x7 helpline number?', a: 'The statewide UPSRTC passenger helpline is 1800-180-2877, toll-free and staffed 24x7 for bus enquiries, refunds and complaints across Uttar Pradesh.' },
      { q: 'How do I complain about a UP Roadways bus?', a: 'Call the 24x7 helpline 1800-180-2877, or use the official complaints page on upsrtc.up.gov.in. Have your ticket or PNR ready.' },
    ],
  },
  {
    slug: 'upsrtc-bus-fare',
    navLabel: 'UPSRTC bus fare',
    title: 'UPSRTC Bus Fare — How UP Roadways Fares Are Calculated',
    description: 'How UPSRTC bus fares work: fare is distance x the rate for your bus class (ordinary, AC, sleeper) plus fixed passenger surcharges and tax. Check the exact fare on the official calculator.',
    h1: 'UPSRTC bus fare, and how it is worked out',
    // Sourced: upsrtc.up.gov.in/en/article/fare-calculation. Deliberately no current paise/km
    // figure — the official rate table carries an expired validity window.
    bodyHtml: `
      <p>A UP Roadways (UPSRTC) fare is not a flat number — it is the distance you travel
        multiplied by the per-kilometre rate for the class of bus you take, plus a few fixed
        passenger surcharges and tax. Knowing the pieces tells you why two trips of the same
        length can cost differently.</p>
      <h2>What your fare is built from</h2>
      <ul>
        <li><b>Distance x class rate.</b> Each bus class has its own per-km rate. From lowest to
          highest that runs roughly: <b>Gramin Seva</b> and <b>Ordinary</b>, then air-conditioned
          classes — <b>AC 3x2</b>, <b>AC 2x2</b>, <b>AC Sleeper</b>, and premium <b>high-end AC</b>
          (Scania / Volvo) at the top.</li>
        <li><b>Fixed passenger surcharges.</b> Small per-ticket amounts for accident cover
          (Yatri Raht Yojana), passenger amenities, and, where applicable, an IT surcharge and
          toll — these step up in distance brackets rather than scaling smoothly.</li>
        <li><b>Tax</b> at the applicable rate on top.</li>
      </ul>
      <h2>Get the exact fare</h2>
      <p>Because the per-km rates are revised periodically, the only figure worth trusting is the
        live one. UPSRTC's own portal quotes the exact fare for your route and bus type when you
        search a journey — enter your two stations on
        <a href="https://www.onlineupsrtc.co.in" rel="noopener">onlineupsrtc.co.in</a> and the
        fare shows against each service before you book. This page explains the structure; that
        portal is the source of record for the number.</p>`,
    faq: [
      { q: 'How is UPSRTC bus fare calculated?', a: 'Fare = distance travelled x the per-km rate for your bus class (ordinary, AC, sleeper, etc.), plus fixed passenger surcharges for accident cover and amenities, plus tax.' },
      { q: 'Where can I check the exact UPSRTC fare for my route?', a: 'Search your two stations on the official portal onlineupsrtc.co.in — it shows the current fare against each service. Rates are revised periodically, so the live portal is the reliable source.' },
    ],
  },
  {
    slug: 'upsrtc-online-ticket-booking',
    navLabel: 'UPSRTC ticket booking',
    title: 'UPSRTC Online Ticket Booking — How to Book UP Roadways Bus Tickets',
    description: 'How to book a UP Roadways (UPSRTC) bus ticket online: the official portal, guest booking without an account, seat selection, payment, and cancellation.',
    h1: 'UPSRTC online ticket booking, step by step',
    // Sourced: onlineupsrtc.co.in (the official reservation portal) and upsrtc.up.gov.in.
    bodyHtml: `
      <p>UP Roadways (UPSRTC) tickets are booked on the corporation's own reservation portal,
        <a href="https://www.onlineupsrtc.co.in" rel="noopener">onlineupsrtc.co.in</a>. You do not
        need an account — guest booking lets you buy a ticket with just your trip and passenger
        details.</p>
      <h2>How to book</h2>
      <ol>
        <li>Open <a href="https://www.onlineupsrtc.co.in" rel="noopener">onlineupsrtc.co.in</a> and
          enter your <b>From</b> and <b>To</b> stations and the journey date.</li>
        <li>Pick a service from the list — each shows its bus class, departure time and fare.</li>
        <li>Choose your seat and boarding point.</li>
        <li>Enter passenger details (name, age, gender, mobile).</li>
        <li>Pay by UPI, card or net banking, and receive the e-ticket.</li>
      </ol>
      <h2>Cancellation &amp; refunds</h2>
      <p>Booked tickets can be cancelled from the same portal, with the refund following UPSRTC's
        cancellation policy shown at the time of booking. For a refund that has not arrived or a
        failed transaction, use the 24x7 helpline
        <a href="tel:18001802877">1800-180-2877</a> — and note UPSRTC will never ask for your
        card number, OTP or UPI PIN to process a refund.</p>
      <p>Booking can also be done at any bus station counter; find your station's enquiry line on
        <a href="/uttar-pradesh">the Uttar Pradesh bus station directory</a>.</p>`,
    faq: [
      { q: 'How do I book a UPSRTC bus ticket online?', a: 'Book on the official portal onlineupsrtc.co.in: enter your stations and date, pick a service, choose a seat and boarding point, enter passenger details and pay by UPI, card or net banking. Guest booking needs no account.' },
      { q: 'Can I book a UP Roadways ticket without an account?', a: 'Yes. The official portal onlineupsrtc.co.in offers guest booking — you can buy a ticket with only your trip and passenger details, no registration required.' },
    ],
  },
  {
    slug: 'upsrtc-bus-timetable',
    navLabel: 'UPSRTC bus timetable',
    title: 'UPSRTC Bus Timetable — Check UP Roadways Bus Timings',
    description: 'How to check UPSRTC (UP Roadways) bus timings between any two stations on the official portal, and the bus stand enquiry lines that confirm today\'s departures.',
    h1: 'UPSRTC bus timetable & timings',
    // Sourced: onlineupsrtc.co.in ("Know your bus details" / availability search) and the
    // station enquiry directory. No specific schedules are reproduced — they change, and the
    // portal is the live source.
    bodyHtml: `
      <p>UP Roadways (UPSRTC) runs scheduled services across more than 2,800 routes, and the
        reliable way to see today's timings is the corporation's own portal rather than a printed
        list that goes stale.</p>
      <h2>Check timings between two stations</h2>
      <p>On <a href="https://www.onlineupsrtc.co.in" rel="noopener">onlineupsrtc.co.in</a>, enter
        your <b>From</b> and <b>To</b> stations and the date — the availability search returns
        every scheduled service on that pair with its departure time, bus class and fare. This is
        the same search used for booking, so what you see is current.</p>
      <h2>Confirm a specific departure</h2>
      <p>For "is the bus actually running today", a bus station's own enquiry desk is the quickest
        answer. Each UPSRTC region's station numbers are listed on
        <a href="/uttar-pradesh">the Uttar Pradesh bus station directory</a> — call the station
        you are travelling from and ask about the service you want.</p>
      <p>For anything the station line cannot settle, the statewide 24x7 helpline is
        <a href="tel:18001802877">1800-180-2877</a>.</p>`,
    faq: [
      { q: 'How do I check the UPSRTC bus timetable?', a: 'Enter your two stations and date on the official portal onlineupsrtc.co.in — it lists every scheduled service with departure time, bus class and fare. To confirm a specific departure is running today, call that bus station\'s enquiry line.' },
      { q: 'Does UPSRTC have live bus tracking?', a: 'This site does not track live bus positions. For scheduled timings use the official portal onlineupsrtc.co.in, and for today\'s departures call the relevant bus station\'s enquiry number.' },
    ],
  },
];

export const guideSlug = (slug) => slug;
