// Placement commitment. SOURCE: supplied by the institute owner:
//   - "100% placement with a guarantee"
//   - "100+ students placed with a good package"
// The official Shanti Institute website only lists "Employment Guaranteed Courses" as a feature and
// publishes no placement numbers or terms, so these figures come from the owner and should be
// confirmed by the institute. No salary figure is stated because none has been supplied.
//
// The full terms page (/placement-terms) is written from `termsPage` below. It deliberately lists the
// POINTS the institute confirms in writing at admission instead of inventing terms. When the
// institute gives its exact written terms, replace the `items` text and set `confirmed: true`.
export const PLACEMENT = {
  confirmed: false,
  headline: '100% placement guarantee',
  statement: 'The institute states that it provides 100% placement with a guarantee.',
  placedCount: '100+',
  placedLine: 'More than 100 students placed with a good package.',
  aboutText:
    'Placement is a key focus at the institute. More than 100 students have been placed with a good package, and the institute states a 100% placement guarantee for its students.',
  termsLinkText: 'Terms and conditions apply',
  // Pages: /placement (Read more) -> /placement-terms (terms and conditions link).
  pagePath: '/placement',
  termsPath: '/placement-terms',
  // Only these courses display the "100% placement guarantee" badge (course ids).
  courses: ['safety-officer'],
}

export const showsPlacement = (course) => PLACEMENT.courses.includes(course.id)

export const termsPage = {
  title: 'Placement Terms and Conditions',
  intro: [
    'Shanti Institute Technical Degree College, Jamo states that it provides 100% placement with a guarantee, and that more than 100 students have been placed with a good package. This page explains how that commitment works and what every student should confirm before joining.',
    'The exact terms are decided and confirmed by the institute. Please read this page, then ask the institute for the placement terms for your course in writing before you enrol.',
  ],
  sections: [
    {
      title: '1. What the placement commitment means',
      body: [
        'The institute states that it provides 100% placement with a guarantee to its students. Placement means the institute helps a student reach a job or work opportunity related to the skills learned in the course.',
        'How a “placement” is counted (type of job, work location, salary range, full-time or part-time) is confirmed by the institute in writing. Ask for this definition before you enrol.',
      ],
    },
    {
      title: '2. Courses covered',
      body: [
        'The commitment is stated for the institute’s courses. Before joining, ask the institute to confirm in writing whether your chosen course is covered, for example Safety Officer, AutoCAD, Store Keeper, Time Keeper, ADCA, DCA, Computer Operator, DTP, Typing, Computer Accounting or Tally Prime with GST.',
      ],
    },
    {
      title: '3. Eligibility and course completion',
      body: [
        'Conditions such as minimum qualification, regular attendance, completing the full course, clearing the course assessments and paying the course fee are confirmed by the institute at the time of admission.',
        'Please ask exactly which of these apply to you and keep the answer in writing.',
      ],
    },
    {
      title: '4. How the institute supports you',
      body: [
        'The institute runs smart classes, interview tips and inspiration classes alongside the courses. Students are expected to take part in these sessions, because they prepare you for interviews and work.',
        'The institute’s placement support, such as sharing job openings and arranging interviews, is confirmed by the institute for each course.',
      ],
    },
    {
      title: '5. What you should do as a student',
      body: [
        'Attend classes regularly, finish the practical work and assignments, take part in interview preparation, keep your documents and contact details up to date, and respond promptly when the institute shares an opportunity.',
      ],
    },
    {
      title: '6. Timeline and what happens if you are not placed',
      body: [
        'The time within which placement is arranged, and what the institute will do if a placement does not happen, must be stated by the institute in writing. Do not rely on a verbal promise alone.',
      ],
    },
    {
      title: '7. Final terms',
      body: [
        'The written terms given to you by the institute at admission are the final and binding terms. If anything on this website differs from the written terms, the written terms apply.',
      ],
    },
  ],
  askBefore: [
    'Is my course covered by the placement guarantee?',
    'What exactly counts as a placement (job type, location, package)?',
    'What are the eligibility, attendance and course-completion conditions?',
    'Within what time will placement be arranged?',
    'What happens if I am not placed?',
    'Can I get all of this in writing?',
  ],
  enquiryMessage:
    'Hello Shanti Institute Technical Degree College, Jamo,\n\nI would like the placement terms and conditions in writing.\n\nPlease confirm:\n- Which courses are covered\n- Eligibility, attendance and course-completion conditions\n- What counts as a placement\n- Placement timeline\n\nThank you.',
}

// /placement page ("Read more" from the About section). The terms link lives on this page.
export const placementPage = {
  title: 'Placement at Shanti Institute, Jamo',
  intro: [
    'Placement is a key focus at Shanti Institute Technical Degree College, Jamo. The institute states that it provides 100% placement with a guarantee, and that more than 100 students have been placed with a good package.',
    'Our courses are designed around practical skills that employers look for in offices, workshops, stores and industrial sites.',
  ],
  prepTitle: 'How students are prepared',
  prep: [
    ['Hands-on practice', 'Every course is built around practical work, so students learn by doing and not only by reading.'],
    ['Smart classes', 'Modern classroom sessions that make concepts easier to understand.'],
    ['Interview tips', 'Guidance on facing interviews with confidence.'],
    ['Inspiration classes', 'Sessions that build motivation and a positive career outlook.'],
  ],
  guaranteeTitle: 'About the placement guarantee',
  guarantee: [
    'The 100% placement guarantee is featured with our Safety Officer course. Please ask the institute which other courses are covered and what exactly is included.',
    'Placement terms are confirmed by the institute in writing at admission.',
  ],
}
