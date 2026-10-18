import type { PortfolioConfig } from './types.ts';

/*
  THIS IS THE ONLY FILE YOU NEED TO EDIT.
  Tip: put *asterisks* around a word in any title to make it italic serif.
*/

const config: PortfolioConfig = {
  site: {
    title: 'Vishal Nigam | Azure SME and Cloud Platform Engineer',
    description:
      'Senior Azure Platform Engineer with 18+ years in enterprise IT. Azure SME for a Big 5 Canadian bank: hybrid connectivity, landing zones, and security guardrails.',
    logo: 'Vishal Nigam',
    accent: '#F5A623',
    showCredit: false,
  },

  hero: {
    eyebrow: 'Azure SME / Cloud and AI Platforms',
    title: 'Cloud Platform *Engineer.*',
    intro:
      'I design hybrid connectivity, landing zones, and security guardrails for a Big 5 Canadian bank. I also help cloud engineers land better roles.',
    backdropWord: 'VISHAL',
    video: 'media/hero.mp4',
    poster: 'media/hero-poster.jpg',
    videoTransparent: 'media/hero.webm',
    posterTransparent: 'media/hero-poster.webp',
    primaryCta: { label: 'See my work', href: '#work' },
    secondaryCta: { label: 'Join the community', href: 'https://mentoraccelerate.com/cloudcareercommunitywaitlist' },
    quickFacts: [
      { value: '18+ yrs', label: 'in enterprise IT' },
      { value: '8+ yrs', label: 'running Azure for banking and healthcare' },
    ],
  },

  about: {
    greeting: "Hi, I'm *Vishal.*",
    paragraphs: [
      'I landed in Canada in 2017 with $5,000, my wife, our 4-year-old son, and zero connections.',
      'Today I am the Azure SME a Big 5 Canadian bank escalates to. I own hybrid connectivity across Virtual WAN and ExpressRoute, and I publish the patterns application teams use to land safely in Azure.',
      'Before that I migrated healthcare apps to Azure, ran GCP for a messaging platform, and led 15 engineers through one of India\'s largest telecom launches.',
      'I also run MentorAccelerate. I teach cloud and DevOps engineers how to position themselves and get hired.',
    ],
    buttons: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/nigam-vishal' },
      { label: 'Join the community', href: 'https://mentoraccelerate.com/cloudcareercommunitywaitlist' },
    ],
    facts: [
      { label: 'Based in', value: 'Mississauga, ON' },
      { label: 'Focus', value: 'Azure networking and governance' },
      { label: 'Building', value: 'Evolura AI' },
      { label: 'Teaching', value: 'MentorAccelerate' },
      { label: 'Certified', value: 'AZ-500, AZ-303, AZ-104' },
      { label: 'In Canada since', value: '2017' },
    ],
    badge: {
      org: 'Cloud Platform',
      photo: 'media/badge.jpg',
      role: 'Azure SME',
      idNumber: 'AZ-2017-CA',
      back: [
        { label: 'Region', value: 'Canada Central' },
        { label: 'Access', value: 'Production' },
        { label: 'Specialty', value: 'Hybrid connectivity' },
        { label: 'Since', value: '2017' },
      ],
    },
  },

  skills: {
    title: 'Tools of the *trade.*',
    subtitle: 'My periodic table. Hover any element.',
    groups: [
      { id: 'cloud', label: 'Cloud' },
      { id: 'network', label: 'Network' },
      { id: 'identity', label: 'Identity' },
      { id: 'security', label: 'Security' },
      { id: 'iac', label: 'IaC' },
      { id: 'delivery', label: 'Delivery' },
      { id: 'ai', label: 'AI' },
    ],
    elements: [
      { symbol: 'Az', name: 'Azure', group: 'cloud', note: 'Daily driver. SME level.' },
      { symbol: 'Lz', name: 'Landing Zones', group: 'cloud', note: 'CAF, management groups, subscription vending.' },
      { symbol: 'Aw', name: 'AWS', group: 'cloud', note: 'IAM, EC2, CloudFront, S3 at telecom scale.' },
      { symbol: 'Gc', name: 'GCP', group: 'cloud', note: 'Ran production for a high-traffic messaging platform.' },
      { symbol: 'Vw', name: 'Virtual WAN', group: 'network', note: 'Virtual Hubs centralizing enterprise routing.' },
      { symbol: 'Er', name: 'ExpressRoute', group: 'network', note: 'ExpressRoute and ExpressRoute Direct circuits.' },
      { symbol: 'Pe', name: 'Private Endpoints', group: 'network', note: 'Published as a reusable pattern.' },
      { symbol: 'Dn', name: 'Hybrid DNS', group: 'network', note: 'Private DNS across cloud and on-prem.' },
      { symbol: 'Fw', name: 'Azure Firewall', group: 'network' },
      { symbol: 'En', name: 'Entra ID', group: 'identity', note: 'Identity governance across tenants.' },
      { symbol: 'Rb', name: 'RBAC', group: 'identity', note: 'Least-privilege access models.' },
      { symbol: 'Pm', name: 'PIM', group: 'identity', note: 'Just-in-time privileged access.' },
      { symbol: 'Ca', name: 'Conditional Access', group: 'identity' },
      { symbol: 'Pl', name: 'Azure Policy', group: 'security', note: 'Guardrails across many subscriptions.' },
      { symbol: 'Wz', name: 'Wiz', group: 'security', note: 'Scanner outposts for cloud security posture.' },
      { symbol: 'Ns', name: 'Netskope', group: 'security', note: 'Cloud proxy and SaaS traffic security.' },
      { symbol: 'Op', name: 'OPA', group: 'security', note: 'Policy as code.' },
      { symbol: 'Kv', name: 'Key Vault', group: 'security' },
      { symbol: 'Tf', name: 'Terraform', group: 'iac', note: 'Self-service infrastructure pipelines.' },
      { symbol: 'Cd', name: 'CDKTF', group: 'iac' },
      { symbol: 'Ar', name: 'ARM', group: 'iac' },
      { symbol: 'Bc', name: 'Bicep', group: 'iac' },
      { symbol: 'An', name: 'Ansible', group: 'iac' },
      { symbol: 'Gh', name: 'GitHub Actions', group: 'delivery', note: 'Replaced ticket-based provisioning.' },
      { symbol: 'Jk', name: 'Jenkins', group: 'delivery', note: 'Pipelines converted to Jenkinsfile as code.' },
      { symbol: 'Sp', name: 'Spinnaker', group: 'delivery' },
      { symbol: 'Ak', name: 'AKS', group: 'delivery' },
      { symbol: 'Mn', name: 'Azure Monitor', group: 'delivery' },
      { symbol: 'Py', name: 'Python', group: 'ai' },
      { symbol: 'As', name: 'AI Search', group: 'ai', note: 'Retrieval for RAG apps.' },
      { symbol: 'Lc', name: 'LangChain', group: 'ai' },
      { symbol: 'Cl', name: 'Claude', group: 'ai', note: 'Agents and automation.' },
    ],
  },

  experience: {
    title: '18 years, *one thread.*',
    subtitle: 'Taking messy, manual infrastructure and turning it into something teams can trust.',
    jobs: [
      {
        role: 'Cloud Consultant, Azure SME',
        company: 'Evolura Technology Solutions, for a Big 5 Canadian bank',
        location: 'Mississauga, ON',
        start: '05/2022',
        end: 'Present',
        summary: 'The Azure SME multiple CIO teams escalate to before they deploy.',
        highlights: [
          'Own hybrid connectivity architecture: design and operate ExpressRoute and ExpressRoute Direct circuits in an Azure Virtual WAN topology, with Virtual Hubs centralizing routing across an enterprise-scale network.',
          'Design and publish reusable architecture patterns for Private Endpoint, shared services connectivity, and hybrid DNS, so application teams get a pre-approved way into the landing zone instead of a one-off design each time.',
          'Replaced manual, ticket-based provisioning with self-service pipelines (GitHub Actions, CDKTF, Terraform, ARM), giving CIO-aligned teams a compliant path to deploy without waiting on the platform team.',
          'Set and enforce cloud security guardrails, including Azure Policy and least-privilege RBAC, across a multi-subscription environment.',
          'Deploy and operate cloud security tooling: Wiz scanner outposts for posture management, and Netskope for cloud proxy and SaaS traffic security.',
          'Cut recurring architecture review cycles by giving teams pre-vetted, secure deployment patterns instead of case-by-case reviews.',
        ],
        stack: ['Virtual WAN', 'ExpressRoute', 'Terraform', 'CDKTF', 'GitHub Actions', 'Azure Policy', 'Wiz', 'Netskope'],
      },
      {
        role: 'Senior Cloud Engineer',
        company: 'PointClickCare',
        location: 'Mississauga, ON',
        start: '04/2019',
        end: '05/2022',
        summary: 'Healthcare software, moved from on-premises to Azure.',
        highlights: [
          'Led end-to-end cloud migrations, from assessment through cutover, moving healthcare application infrastructure to Azure with minimal production disruption.',
          'Designed the target-state Azure architecture and automated deployment with Ansible, Terraform, and ARM, replacing manual provisioning with repeatable Infrastructure as Code.',
          'Managed the Azure tenant as global administrator, enforcing identity governance and security compliance across production and non-production.',
          'Implemented monitoring for cloud performance and availability, improving visibility into infrastructure health for engineering.',
        ],
        stack: ['Azure', 'Terraform', 'Ansible', 'ARM', 'Entra ID', 'Azure Monitor'],
      },
      {
        role: 'Senior DevOps Engineer',
        company: 'BBM (CMW Social Networking)',
        location: 'Mississauga, ON',
        start: '07/2018',
        end: '04/2019',
        highlights: [
          'Ran day-to-day GCP infrastructure for a high-traffic messaging platform, automating deployments with Ansible, Jenkins, and Spinnaker.',
          'Converted legacy Jenkins pipelines to Jenkinsfile as code, making pipelines easier to maintain and deployments repeatable.',
        ],
        stack: ['GCP', 'Ansible', 'Jenkins', 'Spinnaker'],
      },
      {
        role: 'Senior DevOps Consultant',
        company: 'Bell, via Askida',
        location: 'Mississauga, ON',
        start: '06/2017',
        end: '06/2018',
        summary: 'My first role in Canada.',
        highlights: ['Provided DevOps consulting for enterprise infrastructure operations and deployment automation.'],
      },
      {
        role: 'Senior Manager, CDN Infrastructure',
        company: 'Reliance Jio',
        location: 'Mumbai, India',
        start: '05/2015',
        end: '03/2017',
        summary: 'Part of the team behind one of India\'s largest telecom network launches.',
        highlights: [
          'Led a team of 15 engineers running cloud infrastructure that served 50+ million users during the launch.',
          'Turned manually deployed infrastructure into Infrastructure as Code, and set least-privilege security policies with AWS IAM across EC2, CloudFront, and S3.',
        ],
        stack: ['AWS', 'IAM', 'CloudFront', 'S3', 'EC2'],
      },
    ],
    earlier: [
      { role: 'Senior Consultant, Managed Services', company: 'Capgemini', years: '2010 – 2015' },
      { role: 'Deputy Manager, VAS', company: 'Reliance Communications', years: '2008 – 2010' },
      { role: 'Developer', company: 'Zweck Solutions', years: '2007 – 2008' },
    ],
    education: [
      { degree: 'B.E., Computer Science', school: 'Rajiv Gandhi Prodyogiki Vishwavidyalaya', years: '2003 – 2007' },
    ],
  },

  certifications: [
    { name: 'Azure Security Technologies (AZ-500)', issuer: 'Microsoft', year: '' },
    { name: 'Azure Architect Technologies (AZ-303)', issuer: 'Microsoft', year: '' },
    { name: 'Azure Administrator (AZ-104)', issuer: 'Microsoft', year: '' },
    { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: '' },
    { name: 'ITIL Expert', issuer: 'ITIL', year: '' },
  ],

  projects: [
    {
      title: 'Azure Platform Architect',
      tagline: 'An AI assistant for Azure architecture.',
      description:
        'Answers questions on landing zones, policies, and pattern documents in banking environments. Retrieval over architecture docs, secured with Entra ID.',
      stack: ['FastAPI', 'LangChain', 'Azure AI Search', 'Entra ID'],
      status: 'Side project',
    },
    {
      title: 'Evolura AI',
      tagline: 'AI automation for local businesses.',
      description:
        'Small businesses lose hours to follow-ups and admin. Evolura AI builds automations that take that work off their plate.',
      stack: ['AI agents', 'Workflow automation', 'CRM'],
      status: 'Founder',
    },
    {
      title: 'Cloud Episodes',
      tagline: 'Animated cloud explainers, in Hindi.',
      description:
        'Short reels that explain AWS, Azure, GCP, and DevOps in Hindi. Scripted, voiced, and rendered by an automated pipeline.',
      stack: ['Python', 'Claude', 'ElevenLabs', 'Automation'],
      status: 'In production',
      link: { label: 'Watch on Instagram', href: 'https://www.instagram.com/thrivewithvishal/' },
    },
    {
      title: 'MentorAccelerate',
      tagline: 'A career community for cloud engineers.',
      description:
        'A course and community for Cloud, DevOps, and cloud AI engineers. Built around the 90 Day Job Search Program.',
      stack: ['Course', 'Community', 'Mentorship'],
      status: 'Waitlist open',
      link: { label: 'Join the waitlist', href: 'https://mentoraccelerate.com/cloudcareercommunitywaitlist' },
    },
  ],

  moments: {
    title: 'Proud *moments.*',
    subtitle: 'Keep scrolling.',
    items: [
      { value: '$5K', title: 'Where it started', detail: 'Our savings when we landed in Canada in 2017.' },
      { value: '6', unit: 'offers', title: 'Zero cold applications', detail: 'Six job offers in Canada. All through positioning and networking.' },
      { value: '2', unit: 'weeks', title: 'Layoff to 2 offers', detail: 'Two offers, two weeks after being laid off.' },
      { value: '30', unit: '%', title: 'Salary jump', detail: 'The raise that came after the layoff, not before it.' },
      { value: '50M+', unit: 'users', title: 'One launch, at scale', detail: 'Led 15 engineers running the infrastructure behind a national telecom launch in India.' },
      { value: '2025', title: 'Started teaching', detail: 'Founded MentorAccelerate to share the system that worked.' },
    ],
  },

  contact: {
    title: "Let's *talk.*",
    text: 'Questions on Azure platforms, cloud careers, or working together? My inbox is open.',
    email: 'vnigam1985@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nigam-vishal' },
      { label: 'GitHub', href: 'https://github.com/vnigam1985' },
      { label: 'Instagram', href: 'https://www.instagram.com/thrivewithvishal/' },
      { label: 'All links', href: 'https://linktr.ee/nigamv' },
    ],
    cta: { label: 'Get the free 90-day job search framework', href: 'https://mentoraccelerate.com/90-day-job-search-framework' },
  },
};

export default config;
