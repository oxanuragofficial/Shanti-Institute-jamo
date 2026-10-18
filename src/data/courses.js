// ──────────────────────────────────────────────────────────────
// COURSE DATA — the courses listed on the Jamo branch poster.
//
// SOURCES
//  • ADCA, DCA, Computer Accounting (CA), DTP, Tally: durations and syllabus topics
//    come from the official Shanti Institute course pages. Descriptions are rewritten.
//  • Computer Operator: 3-month duration from the network's capsule-course list.
//  • Safety Officer, Store Keeper, Typing, Time Keeper, AutoCAD: no syllabus or duration
//    is published, so the descriptions/modules below are SAMPLE TEXT written to be
//    replaced by the institute's own syllabus. No duration is shown for them.
//
// Fees, batch timings and eligibility are never shown: visitors are asked to
// contact the institute. To change anything, edit the entry here — nothing else.
// ──────────────────────────────────────────────────────────────

const allCourses = [
  {
    id: 'adca',
    name: 'Advanced Diploma in Computer Applications',
    code: 'ADCA',
    duration: '12 Months',
    summary: 'A complete computer course: office software, accounting, design, programming and web basics.',
    description: [
      'ADCA brings the most useful computer skills together in one structured programme. You begin with computer fundamentals and Windows, move through office software and computerised accounting, learn design tools, and finish with programming and web fundamentals.',
      'The course is designed for learners who want an all-round base, whether for office and accounts work, design and data-entry jobs, or further study in programming and web development.',
    ],
    audience: [
      'Students who want a complete, all-round computer course',
      'Learners preparing for office, accounts, design or data-entry work',
      'Those who want a base for programming and web development',
      'Beginners: the syllabus starts from computer fundamentals',
    ],
    modules: [
      { title: 'Computer Fundamentals', items: ['Fundamentals of computer', 'MS-DOS'] },
      { title: 'Operating Systems', items: ['Windows XP and Vista', 'MS Paint'] },
      { title: 'Office Productivity', items: ['MS Word', 'PowerPoint', 'MS Excel', 'MS Access'] },
      { title: 'Accounting', items: ['Tally', 'Tally ERP'] },
      { title: 'Graphic Design', items: ['Adobe PageMaker', 'CorelDRAW', 'Photoshop CS'] },
      { title: 'Programming Fundamentals', items: ['C language', 'C++'] },
      { title: 'Web Fundamentals', items: ['HTML', 'DHTML', 'JavaScript'] },
      { title: 'Internet & Revision', items: ['Internet use', 'Revision of the full syllabus'] },
    ],
    skills: [
      'Documents, presentations and spreadsheets',
      'Database basics with Access',
      'Computerised accounting with Tally',
      'Page layout and image editing',
      'Basic C and C++ programming',
      'Creating simple web pages',
    ],
    useCases: [
      'Office, records and data-entry work',
      'Billing and accounts using Tally',
      'DTP, design and image-editing tasks',
      'A starting point for programming and web development',
    ],
  },
  {
    id: 'dca',
    name: 'Diploma in Computer Applications',
    code: 'DCA',
    duration: '9 Months',
    summary: 'A shorter route into computing: office software, design tools, C/C++ and web basics.',
    description: [
      'DCA covers the same foundations as ADCA (Windows, office software, design tools, C and C++, and web basics) in a shorter programme, without the accounting and JavaScript modules.',
      'It suits learners who want solid everyday computer skills and an introduction to programming without committing to the longer diploma.',
    ],
    audience: [
      'Students who want a strong computer foundation in less time',
      'Learners preparing for office and data-entry work',
      'Beginners: the syllabus starts from computer fundamentals',
    ],
    modules: [
      { title: 'Computer Fundamentals', items: ['Fundamentals of computer', 'MS-DOS'] },
      { title: 'Operating Systems', items: ['Windows XP and Vista', 'MS Paint'] },
      { title: 'Office Productivity', items: ['MS Word', 'PowerPoint', 'MS Excel', 'MS Access'] },
      { title: 'Graphic Design', items: ['Adobe PageMaker', 'CorelDRAW', 'Photoshop CS'] },
      { title: 'Programming Fundamentals', items: ['C language', 'C++'] },
      { title: 'Web & Internet', items: ['HTML', 'DHTML', 'Internet use'] },
    ],
    skills: [
      'Documents, presentations and spreadsheets',
      'Basic database work with Access',
      'Page layout and image editing',
      'Basic C and C++ programming',
      'Simple web pages with HTML',
    ],
    useCases: [
      'Office and data-entry work',
      'Basic design and layout tasks',
      'A step towards ADCA or further study',
    ],
  },
  {
    id: 'computer-accounting',
    name: 'Computer Accounting',
    code: 'CA',
    duration: '6 Months',
    summary: 'Computer basics, Word and Excel, plus two levels of Tally accounting.',
    description: [
      'Computer Accounting pairs general computer skills with Tally, so you can work comfortably with both documents and accounts.',
      'You start with computer fundamentals and Windows, learn Word and Excel, then work through two levels of Tally before revising the whole syllabus.',
    ],
    audience: [
      'Commerce students and those aiming for accounts or billing work',
      'Shop and small-business owners who want to keep accounts on a computer',
    ],
    modules: [
      { title: 'Computer Basics', items: ['Fundamentals of computer', 'Windows XP', 'MS Word', 'MS Excel'] },
      { title: 'Accounting', items: ['Tally I', 'Tally II'] },
      { title: 'Internet & Revision', items: ['Internet use', 'Revision'] },
    ],
    skills: ['Basic computer operation', 'Spreadsheets and documents', 'Tally accounting'],
    useCases: ['Accounts and billing work', 'Maintaining books for a small business'],
  },
  {
    id: 'safety-officer',
    name: 'Safety Officer',
    code: '',
    duration: '',
    summary: 'Workplace safety basics: hazards, fire safety, protective equipment and first aid.',
    description: [
      'This course introduces the responsibilities of a safety officer and the practices that keep workplaces safe. It covers how to recognise hazards, prevent accidents and respond when something goes wrong.',
      'It is aimed at learners who want to work in factories, construction, warehouses and other industrial or commercial sites where safety is a requirement.',
    ],
    audience: [
      'Learners who want to start a career in industrial or site safety',
      'Supervisors and workers who want to understand safe working practice',
    ],
    modules: [
      { title: 'Safety Fundamentals', items: ['Role of a safety officer', 'Hazards and risk awareness', 'Accident causes and prevention'] },
      { title: 'Protection & Fire Safety', items: ['Personal protective equipment', 'Fire prevention and fire-fighting basics', 'Emergency exits and evacuation'] },
      { title: 'Response & Records', items: ['First-aid basics', 'Safety inspections and reports', 'Safety signs and awareness'] },
    ],
    skills: ['Recognising workplace hazards', 'Using protective equipment correctly', 'Basic fire and first-aid response', 'Keeping safety records'],
    useCases: ['Site and factory safety roles', 'Safety support in construction and warehouses'],
  },
  {
    id: 'dtp',
    name: 'Desktop Publishing',
    code: 'DTP',
    duration: '6 Months',
    summary: 'Typing, page layout and design software for print and publishing work.',
    description: [
      'DTP trains you to prepare printed material on a computer. You learn Hindi and English typing, then layout and graphics with PageMaker, CorelDRAW and Photoshop.',
      'The course ends with scanning and revision, so you can produce finished pamphlets, forms, cards and books.',
    ],
    audience: [
      'Learners who want to work with print, flex or publishing material',
      'Those who want to start with typing and layout skills',
      'Students interested in design software',
    ],
    modules: [
      { title: 'Typing & Windows', items: ['Windows fundamentals', 'Hindi and English typing'] },
      { title: 'Office Software', items: ['MS Word', 'PowerPoint'] },
      { title: 'Layout & Design', items: ['Adobe PageMaker', 'CorelDRAW', 'Photoshop CS'] },
      { title: 'Production', items: ['Scanning', 'Revision'] },
    ],
    skills: ['Hindi and English typing', 'Page layout', 'Vector and image editing', 'Scanning'],
    useCases: [
      'Preparing pamphlets, forms, books and cards',
      'Work at printing, typing and design shops',
      'Basic design work for local businesses',
    ],
  },
  {
    id: 'store-keeper',
    name: 'Store Keeper',
    code: '',
    duration: '',
    summary: 'Managing stock: receiving, storing, issuing goods and keeping accurate store records.',
    description: [
      'This course teaches how a store is run: receiving goods, storing them safely, issuing them against requests and keeping accurate records of every movement.',
      'It prepares learners for store and warehouse roles in shops, factories, hospitals, institutions and construction sites.',
    ],
    audience: [
      'Learners who want to work in stores, warehouses or inventory roles',
      'Shop staff who want to keep stock records properly',
    ],
    modules: [
      { title: 'Store Basics', items: ['Role of a store keeper', 'Types of stores and materials', 'Safe storage and handling'] },
      { title: 'Stock Control', items: ['Receiving and checking goods', 'Issuing materials', 'Stock registers and bin cards', 'Stock-taking'] },
      { title: 'Records & Computer', items: ['Bills, challans and vouchers', 'Basic computer use for stock records'] },
    ],
    skills: ['Receiving and issuing goods', 'Maintaining stock registers', 'Stock-taking and reconciliation', 'Basic computerised records'],
    useCases: ['Store and warehouse jobs', 'Inventory work in shops and workshops'],
  },
  {
    id: 'computer-operator',
    name: 'Computer Operator',
    code: '',
    duration: '3 Months',
    summary: 'Everyday computer work: Windows, Word, Excel, PowerPoint and the internet.',
    description: [
      'Computer Operator is a practical course for people who need to use a computer confidently at work. You learn to operate Windows, prepare documents, work with spreadsheets and presentations, and use the internet.',
      'It is a good first course for beginners and a stepping stone to longer diplomas such as DCA or ADCA.',
    ],
    audience: [
      'Beginners who want to start using computers',
      'Learners preparing for data-entry and office jobs',
    ],
    modules: [
      { title: 'Basics', items: ['Computer fundamentals', 'Windows operation'] },
      { title: 'Office Software', items: ['Word', 'Excel', 'PowerPoint'] },
      { title: 'Internet', items: ['Internet use', 'Email basics'] },
    ],
    skills: ['Operating a computer confidently', 'Documents and spreadsheets', 'Presentations', 'Using the internet'],
    useCases: ['Data-entry and office work', 'A foundation for DCA or ADCA'],
  },
  {
    id: 'tally',
    name: 'Tally Prime with GST',
    code: 'Tally',
    duration: '3 Months',
    summary: 'Computerised accounting in Tally: ledgers, vouchers, invoices, reports, payroll and GST.',
    description: [
      'Learn how to keep a business’s accounts in Tally, from creating a company and ledgers to entering vouchers, preparing reports and understanding the Indian tax structure with GST.',
      'The course is practical from the first day, so you finish able to handle day-to-day accounting and billing work on a computer.',
    ],
    audience: ['Commerce students', 'Shopkeepers and small business owners', 'Learners targeting accounts or billing work'],
    modules: [
      { title: 'Getting Started', items: ['Fundamentals of computer and operating system', 'Introduction to Tally', 'Gateway of Tally'] },
      { title: 'Masters & Vouchers', items: ['Creating a company', 'Groups and ledgers', 'Voucher creation and entry', 'Purchase and sale orders', 'Invoice entry and printing'] },
      { title: 'Reports, Payroll & GST', items: ['Balance sheet and profit and loss account', 'Stock summary, trial balance and day book', 'Payroll: pay heads, employee groups and vouchers', 'Indian tax structure with GST'] },
    ],
    skills: ['Creating and managing company accounts', 'Voucher and invoice entry', 'Financial reports', 'Payroll basics', 'GST fundamentals'],
    useCases: ['Accounts and billing jobs', 'Keeping books for a shop or small business'],
  },
  {
    id: 'typing',
    name: 'Typing',
    code: '',
    duration: '',
    summary: 'Build speed and accuracy on the computer keyboard.',
    description: [
      'This course builds typing speed and accuracy on the computer keyboard through regular guided practice. It is useful for almost every office, data-entry and exam-related task.',
      'Learners practise correct finger positions, then work on speed, accuracy and typing real documents.',
    ],
    audience: [
      'Students and job seekers who need typing skills',
      'Beginners who have not used a keyboard before',
    ],
    modules: [
      { title: 'Keyboard Basics', items: ['Keyboard layout', 'Correct posture and finger positions'] },
      { title: 'Speed & Accuracy', items: ['Practice drills', 'Speed building', 'Reducing errors'] },
      { title: 'Real Documents', items: ['Typing letters and passages', 'Basic formatting in a word processor'] },
    ],
    skills: ['Touch typing', 'Typing speed and accuracy', 'Preparing typed documents'],
    useCases: ['Data-entry and typing jobs', 'A base for DTP and office courses'],
  },
  {
    id: 'time-keeper',
    name: 'Time Keeper',
    code: '',
    duration: '',
    summary: 'Recording attendance, working hours and overtime for workers and staff.',
    description: [
      'Time Keeper training covers how to record attendance and working hours accurately, and how to prepare the records used for wages and overtime.',
      'It prepares learners for time-office roles in factories, construction sites, contractors’ offices and other workplaces with large teams.',
    ],
    audience: [
      'Learners who want a time-office or site-administration role',
      'Those who want to learn attendance and wage record keeping',
    ],
    modules: [
      { title: 'Time-Office Basics', items: ['Role of a time keeper', 'Attendance registers and muster rolls'] },
      { title: 'Hours & Wages', items: ['Recording working hours and shifts', 'Overtime calculation', 'Preparing wage sheets'] },
      { title: 'Records & Computer', items: ['Leave and holiday records', 'Basic computer use for attendance sheets'] },
    ],
    skills: ['Maintaining attendance records', 'Calculating hours and overtime', 'Preparing basic wage sheets'],
    useCases: ['Time-office roles in factories and sites', 'Administrative support for contractors'],
  },
  {
    id: 'autocad',
    name: 'AutoCAD',
    code: '',
    duration: '',
    summary: 'Computer-aided drawing: 2D drafting, dimensions and printing technical drawings.',
    description: [
      'AutoCAD is the standard tool for technical drawing. This course teaches you to create accurate 2D drawings, add dimensions and text, organise layers, and print finished drawings.',
      'It is useful for learners interested in civil, mechanical and electrical drafting, interiors and design work.',
    ],
    audience: [
      'Students of engineering, diploma and ITI trades',
      'Learners who want a drafting or design-assistant role',
    ],
    modules: [
      { title: 'Getting Started', items: ['AutoCAD interface and commands', 'Drawing settings and units'] },
      { title: '2D Drafting', items: ['Lines, circles, arcs and polylines', 'Editing and modifying objects', 'Layers and blocks'] },
      { title: 'Finishing', items: ['Dimensions and text', 'Plotting and printing drawings'] },
    ],
    skills: ['Creating 2D technical drawings', 'Editing and organising drawings', 'Dimensioning', 'Printing drawings'],
    useCases: ['Drafting assistant roles', 'Plans and drawings for civil, mechanical and electrical work'],
  },
]

// Display order: Safety Officer first (featured), then technical and vocational courses,
// then computer courses, then accounting. Any course not listed here is appended at the end.
export const FEATURED_COURSE_ID = 'safety-officer'
const ORDER = ['safety-officer', 'autocad', 'store-keeper', 'time-keeper', 'adca', 'dca', 'computer-operator', 'dtp', 'typing', 'computer-accounting', 'tally']
export const courses = [
  ...ORDER.map((id) => allCourses.find((c) => c.id === id)).filter(Boolean),
  ...allCourses.filter((c) => !ORDER.includes(c.id)),
]

// "ADCA", "DCA", "CA", "DTP" for buttons; otherwise the course name.
export const courseShort = (c) => (/^[A-Z]{2,6}$/.test(c.code || '') ? c.code : c.name)
// "Advanced Diploma in Computer Applications (ADCA)" for messages.
export const courseFull = (c) => (/^[A-Z]{2,6}$/.test(c.code || '') ? `${c.name} (${c.code})` : c.name)

export const getCourse = (id) => courses.find((c) => c.id === id)
