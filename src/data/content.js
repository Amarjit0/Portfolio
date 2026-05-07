export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  name: 'Amar Gupta',
  role: 'Associate Security Consultant',
  company: 'Payatu',
  description:
    'I identify and exploit real-world vulnerabilities in web and API systems, helping organizations secure critical applications before attackers do.',
}

export const about = {
  summary:
    `Security consultant with 2+ years of hands-on experience in web and API penetration testing. I've worked on 100+ applications across banking and e-commerce, uncovering critical flaws that could have led to large-scale breaches.`,
  highlights: [
    '2+ years in web & API penetration testing',
    '100+ applications across banking & e-commerce',
    'Auth bypass, IDOR, request smuggling, business logic flaws',
    'Builds CTF challenges and security labs',
  ],
}

export const workItems = [
  {
    title: 'Large Scale VAPT Engagements',
    description:
      'Led comprehensive vulnerability assessment and penetration testing engagements for enterprise clients, covering web applications, APIs, and microservices architectures.',
    tags: ['VAPT', 'Enterprise', 'Web Apps'],
  },
  {
    title: 'Critical Vulnerability Discovery',
    description:
      'Identified and responsibly disclosed critical vulnerabilities including authentication bypasses, IDORs, and business logic flaws in production banking and fintech platforms.',
    tags: ['Bug Hunting', 'Responsible Disclosure'],
  },
  {
    title: 'CTF & Lab Development',
    description:
      'Designed and built capture-the-flag challenges and hands-on security labs focused on real-world attack scenarios for developer training and awareness programs.',
    tags: ['CTF', 'Training', 'Education'],
  },
  {
    title: 'Security Research',
    description:
      'Conducted research into emerging attack vectors including HTTP request smuggling, API abuse patterns, and modern authentication bypasses.',
    tags: ['Research', 'Request Smuggling', 'APIs'],
  },
]

export const caseStudies = [
  {
    id: 1,
    title: 'Authentication Bypass Vulnerability',
    severity: 'Critical',
    summary:
      'Discovered a critical authentication bypass in a banking application that allowed unauthenticated access to privileged API endpoints, potentially exposing sensitive customer financial data.',
    impact:
      'Could have resulted in unauthorized access to thousands of customer accounts and financial transactions.',
    approach: [
      'Mapped all API endpoints and authentication flows',
      'Identified inconsistencies in token validation logic',
      'Crafted requests that bypassed authentication middleware',
      'Verified access to privileged resources without valid credentials',
    ],
  },
  {
    id: 2,
    title: 'IDOR Vulnerability',
    severity: 'High',
    summary:
      'Found an Insecure Direct Object Reference vulnerability in an e-commerce platform that allowed any authenticated user to access and modify other users\' orders, personal data, and payment information.',
    impact:
      'Affected all platform users — any authenticated user could view or tamper with another user\'s data.',
    approach: [
      'Analyzed API request patterns for object reference handling',
      'Tested parameter manipulation across different user contexts',
      'Demonstrated horizontal privilege escalation across user accounts',
      'Provided remediation guidance for proper authorization checks',
    ],
  },
]

export const contact = {
  email: 'amarjitgupta@proton.me',
  tagline: 'Interested in working together? Let\'s connect.',
}
