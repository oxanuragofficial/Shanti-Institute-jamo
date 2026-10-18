// Single source of truth for institute details.
// Everything here comes from the information supplied by the owner and the
// official Shanti Institute branch listing (shanti-institute.com/branch.php).
// Only edit this file to update contact details across the whole website.

export const SITE = {
  name: 'Shanti Institute Technical Degree College, Jamo',
  shortName: 'Shanti Institute, Jamo',
  parentName: 'Shanti Institute Technical Degree College',
  tagline: 'Technical & Computer Education',

  address: {
    line1: 'Barauli Road, Jamo Bazar',
    line2: 'Bihar – 841413',
    // Short form used where space is tight
    short: 'Jamo Bazar, Bihar 841413',
  },

  // Labelled branch numbers. Both are listed for the Jamo branch on the
  // organization's branch page. Neither is presented as a personal mobile.
  phones: [
    { label: 'Branch office', display: '+91 80028 55930', tel: '+918002855930' },
    { label: 'Branch office (alternate)', display: '+91 85214 54437', tel: '+918521454437' },
  ],

  // Number used for "Call Now" and WhatsApp buttons.
  primaryPhone: { display: '+91 80028 55930', tel: '+918002855930' },
  // WhatsApp numbers offered in the chooser dialog, in priority order (international format,
  // digits only). The first is listed first and is the default for plain links.
  // Confirm with the institute that WhatsApp is active on both numbers before launch.
  whatsappNumbers: [
    { number: '918521454437', display: '+91 85214 54437', label: 'Preferred' },
    { number: '918002855930', display: '+91 80028 55930', label: 'Alternative' },
  ],

  contactPerson: 'Mr. Gulam Afsar Hussain',
  // Email listed for the Jamo branch on the official branch page.
  email: 'afsaralisitdc786@gmail.com',

  // Directions use a search link: no API key is needed or faked.
  // Google Plus Code shown on the institute's Google Maps listing (8H69+XJM, Jamo Bazar).
  plusCode: '8H69+XJM',
  mapsQuery: '8H69+XJM Jamo Bazar, Bihar 841413',
  // Google Maps listing links supplied by the owner (verify which one is the public listing).
  googleListingUrl: 'https://maps.app.goo.gl/sdcmDgTTfdwkURft8',
  // Rating shown on the Google listing when supplied by the owner. Update or remove as it changes.
  googleRating: { value: '4.8', count: 23 },

  organizationUrl: 'https://www.shanti-institute.com/',
  organizationName: 'Shanti Institute',

  // Enquiry form delivery. Leave empty until a real endpoint exists
  // (for example a Formspree URL: https://formspree.io/f/xxxxxxx).
  // Set in a .env file as VITE_ENQUIRY_ENDPOINT.
  enquiryEndpoint: import.meta.env.VITE_ENQUIRY_ENDPOINT || '',
}

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.mapsQuery,
)}`

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapsQuery,
)}&output=embed`

export const telHref = (tel = SITE.primaryPhone.tel) => `tel:${tel}`

export const whatsappHref = (message, number = SITE.whatsappNumbers[0].number) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`

export const generalEnquiryMessage =
  'Hello, I would like information about the courses at Shanti Institute Technical Degree College, Jamo. Please share the current course details, fees, batch timing and admission information.'

export const courseEnquiryMessage = (courseName) =>
  `Hello, I am interested in the ${courseName} course at Shanti Institute Technical Degree College, Jamo. Please share the current course details, fees, batch timing and admission information.`

// Message sent by every "Enroll" button (opens WhatsApp with this text ready to send).
export const enrollMessage = (courseName) =>
  `Hello Shanti Institute Technical Degree College, Jamo,\n\nI would like to enroll in the ${courseName} course.\n\nPlease share:\n- Admission process\n- Current course fee\n- Batch timing\n- Documents required\n\nThank you.`

export const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Faculty', to: '/#faculty' },
  { label: 'Contact', to: '/contact' },
]

// Short, verified descriptions of the wider organization.
export const ORGANIZATION = {
  vision:
    'To develop emerging professionals who contribute to a value-based education system and to the welfare of society.',
  missionPoints: [
    'Equip students with knowledge and academic discipline so they can shape their own path to success.',
    'Encourage faculty to excel so they can motivate students.',
    'Help students grow into capable technologists and professionals.',
    'Create a supportive atmosphere where technology and individual interests can grow together.',
    'Make sure every student is challenged and supported, whatever their starting ability.',
  ],
}
