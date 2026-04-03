// =============================================================
// CAPE CLIMATE — CENTRAL BUSINESS CONFIG
// Edit this file to update all site content in one place.
// =============================================================

export const BUSINESS = {
  name: "Cape Climate°",
  tagline: "H.V.A.C. Services",
  fullName: "Cape Climate° H.V.A.C. Services",
  owner: 'William "Adam" Cress',
  phone: "302.858.7160",
  phoneRaw: "3028587160",
  address: {
    street: "2641 Fells Street",
    city: "Georgetown",
    state: "Delaware",
    zip: "19947",
    full: "2641 Fells Street, Georgetown, Delaware 19947",
  },
  serviceArea: "Sussex County & Delaware Beaches",
  license: "DE Master's Licence #HM-0000071",
  licenseShort: "DE Lic. #HM-0000071",
  email: "PLACEHOLDER_EMAIL@capeclimate.com", // ← Replace with real email
  hours: "Mon–Fri: 7am–6pm · Sat: 8am–2pm · Emergency calls available",
  founded: "2005", // ← Replace with actual founding year if known
  copyright: `© ${new Date().getFullYear()} Cape Climate° H.V.A.C. Services. All rights reserved.`,
};

export const HERO = {
  headline: "Delaware Beaches' Trusted HVAC Experts",
  subheadline:
    "Fast, reliable HVAC service — no hassle. No surprises.",
  cta_primary: "Call Now — We Answer",
  cta_secondary: "Request Service Today",
  badge: "Licensed & Insured • Locally Owned",
};

export const SERVICES = [
  {
    id: "ac-repair",
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.29"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>',
    title: "A/C Repair",
    description:
      "Expert diagnosis and repair of all air conditioning systems.",
  },
  {
    id: "heating-repair",
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    title: "Heating Repair",
    description:
      "Reliable repairs for furnaces, heat pumps, and boilers.",
  },
  {
    id: "installation",
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>',
    title: "System Installation",
    description:
      "Professional installation of new HVAC systems.",
  },
  {
    id: "replacement",
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>',
    title: "System Replacement",
    description:
      "Full system replacements with minimal disruption.",
  },
  {
    id: "maintenance",
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    title: "Seasonal Tune-Ups",
    description:
      "Comprehensive seasonal maintenance and tune-ups.",
  },
  {
    id: "diagnostics",
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
    title: "System Diagnostics",
    description:
      "Accurate diagnostics for all system issues.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sandra M.",
    location: "Rehoboth Beach, DE",
    rating: 5,
    text: "Cape Climate° fixed our AC the same day it broke. Fair pricing, clean work, and clear explanations.",
  },
  {
    id: 2,
    name: "Tom & Diane R.",
    location: "Millsboro, DE",
    rating: 5,
    text: "We've used big HVAC companies before, but Cape Climate° stands out. They remember details and show up on time.",
  },
  {
    id: 3,
    name: "Kevin L.",
    location: "Lewes, DE",
    rating: 5,
    text: "Our heat pump was noisy. Cape Climate° diagnosed and fixed it quickly for half the price others quoted.",
  },
  {
    id: 4,
    name: "Patricia H.",
    location: "Seaford, DE",
    rating: 5,
    text: "Called three companies. Only Cape Climate° answered on Saturday, gave straight answers, and showed up as promised.",
  },
  {
    id: 5,
    name: "Mike C.",
    location: "Bethany Beach, DE",
    rating: 5,
    text: "Installed a new system in our rental. Painless process, transparent pricing, and quality work. We use them for everything.",
  },
];

export const WHY_US = [
  {
    icon: "✓",
    title: "Fully Licensed & Insured",
    desc: "Done right. Done to code. No risks.",
  },
  {
    icon: "✓",
    title: "Local. Not Corporate.",
    desc: "You’re dealing directly with the people doing the work.",
  },
  {
    icon: "✓",
    title: "We Answer — Fast",
    desc: "Real help when you call. No call centers.",
  },
  {
    icon: "✓",
    title: "Straight Answers",
    desc: "What you need. Nothing you don’t.",
  },
  {
    icon: "✓",
    title: "Same-Day Service",
    desc: "When it matters, we move fast.",
  },
  {
    icon: "✓",
    title: "Work That Holds Up",
    desc: "If it’s not right, we fix it.",
  },
];
