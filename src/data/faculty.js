// Faculty section (order here = order on the site; Managing Director sits in the centre).
// Photos: drop a square .png/.jpg named after the id into
// src/assets/faculty/ (afsar-sir.png, neha-khatoon.png, priti-miss.png); it replaces the placeholder.
// Names/roles are as supplied by the owner. The "bio" text is SAMPLE TEXT: replace it
// with details confirmed by each person (qualifications, subjects, experience).
export const faculty = [
  {
    id: 'afsar-sir',
    name: 'Mr. Gulam Afsar Hussain',
    nickname: 'Afsar Sir',
    role: 'Principal & Educator',
    bio: [
      'Leads the Jamo branch and is the main point of contact for admissions and enquiries. He oversees the day-to-day running of the institute and guides students in choosing the right course.',
      'As an educator, he focuses on helping students move from the basics to practical, job-ready skills.',
    ],
  },
  {
    // Name and role supplied by the owner; no photo or biography has been supplied yet.
    // Replace `bio` with text approved by Neha Khatoon herself.
    id: 'neha-khatoon',
    name: 'Neha Khatoon',
    nickname: '',
    role: 'Lab Teacher',
    featured: true,
    bio: [
      'Neha Khatoon is a Lab Teacher at Shanti Institute Technical Degree College, Jamo Bazar branch. She supports students in practical learning, laboratory activities, and the application of theoretical concepts through hands-on experience.',
      'For admissions, course guidance or any other enquiry, you can reach the institute team by call or WhatsApp.',
    ],
  },
  {
    id: 'priti-miss',
    name: 'Priti Kumari',
    nickname: '',
    role: 'Class Teacher',
    bio: [
      'Guides students through laboratory sessions, practical exercises, and hands-on assignments, helping them understand concepts and resolve doubts along the way.',
      'With a patient and practical approach, she helps students build confidence in using laboratory equipment and applying theoretical knowledge to real-world tasks.',
    ],
  },
]
