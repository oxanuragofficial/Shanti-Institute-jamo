// Achievements. Each category has its own page (/achievements/<id>) listing its items
// with a description. Images come from src/assets/achievements/<id>/ in file-name order
// (item 1 uses the 1st image, item 2 the 2nd …).
//
// SAMPLE TEXT: except the Google rating (supplied by the owner), the titles and
// descriptions below are generic samples. Replace them with real items; do not publish
// claims the institute cannot support.
export const achievements = [
  {
    id: 'certificates',
    title: 'Certificates',
    intro: 'Certificates issued by the institute to its students.',
    items: [
      { title: 'Course Completion Certificate', description: 'Certificate issued to students after completing a course at the institute.' },
      { title: 'Computer Course Certificate', description: 'Certificate for computer courses such as DCA, ADCA and Computer Operator.' },
      { title: 'Skill Certificate', description: 'Certificate recognising practical skills learned in a software or technical course.' },
    ],
  },
  {
    id: 'events',
    title: 'Events',
    intro: 'Events, celebrations and activities at the institute.',
    items: [
      { title: 'Institute Event', description: 'Moments from events and celebrations held at the institute.' },
      { title: 'Guidance Session', description: 'Sessions that help students with interview tips, motivation and career direction.' },
      { title: 'Annual Celebration', description: 'Students, teachers and families coming together to celebrate the year.' },
    ],
  },
  {
    id: 'student-projects',
    title: 'Student Projects',
    intro: 'Practical work and projects completed by students.',
    items: [
      { title: 'Documents & Design Work', description: 'Documents, layouts and designs prepared by students during their course.' },
      { title: 'Accounting Practical', description: 'Practical accounting work done in Tally by students.' },
      { title: 'Typing & DTP Work', description: 'Typing practice and desktop publishing work by students.' },
    ],
  },
  {
    id: 'recognition',
    title: 'Recognition',
    intro: 'Recognition and feedback received by the institute.',
    items: [
      { title: 'Rated 4.8 on Google', description: 'Rated 4.8 out of 5 from 23 ratings on Google Maps.', link: 'google' },
      { title: 'Awards & Appreciation', description: 'Awards and appreciation received by the institute and its students.' },
      { title: 'Student Feedback', description: 'Feedback and appreciation shared by students and parents.' },
    ],
  },
]
export const getAchievement = (id) => achievements.find((a) => a.id === id)
