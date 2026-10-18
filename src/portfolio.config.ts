import type { PortfolioConfig } from './types.ts';

/*
  THIS IS THE ONLY FILE YOU NEED TO EDIT.
  Tip: put *asterisks* around a word in any title to make it italic serif.
*/

const config: PortfolioConfig = {
  site: {
    title: 'Vishal Nigam | Azure SME and Cloud Platform Engineer',
    description:
      'Azure SME at a Big 5 Canadian bank. I build cloud platforms and help cloud engineers land better roles.',
    logo: 'Vishal Nigam',
    accent: '#F5A623',
    showCredit: false,
  },

  hero: {
    eyebrow: 'Azure SME / Cloud and AI Platforms',
    title: 'Cloud Platform *Engineer.*',
    intro:
      'I build Azure platforms at a Big 5 Canadian bank. I also help cloud engineers land better roles.',
    backdropWord: 'VISHAL',
    video: 'media/hero.mp4',
    poster: 'media/hero-poster.jpg',
    videoTransparent: 'media/hero.webm',
    posterTransparent: 'media/hero-poster.webp',
    primaryCta: { label: 'See my work', href: '#work' },
    secondaryCta: { label: 'Join the community', href: 'https://mentoraccelerate.com/cloudcareercommunitywaitlist' },
    quickFacts: [
      { value: '8+ yrs', label: 'building in Canada' },
      { value: '6', label: 'offers, zero cold applications' },
    ],
  },

  about: {
    greeting: "Hi, I'm *Vishal.*",
    paragraphs: [
      'I landed in Canada in 2017 with $5,000, my wife, our 4-year-old son, and zero connections.',
      'Today I am an Azure SME at a Big 5 Canadian bank. I work on landing zones, policies, and the platform patterns other teams build on.',
      'I also run MentorAccelerate. I teach cloud and DevOps engineers how to position themselves and get hired.',
    ],
    buttons: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/nigam-vishal' },
      { label: 'Join the community', href: 'https://mentoraccelerate.com/cloudcareercommunitywaitlist' },
    ],
    facts: [
      { label: 'Based in', value: 'Mississauga, ON' },
      { label: 'Focus', value: 'Azure platforms' },
      { label: 'Building', value: 'Evolura AI' },
      { label: 'Teaching', value: 'MentorAccelerate' },
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
        { label: 'Specialty', value: 'Landing zones' },
        { label: 'Since', value: '2017' },
      ],
    },
  },

  skills: {
    title: 'Tools of the *trade.*',
    subtitle: 'My periodic table. Hover any element.',
    groups: [
      { id: 'cloud', label: 'Cloud' },
      { id: 'iac', label: 'IaC' },
      { id: 'containers', label: 'Containers' },
      { id: 'cicd', label: 'CI/CD' },
      { id: 'observe', label: 'Observability' },
      { id: 'ai', label: 'AI' },
      { id: 'code', label: 'Code' },
    ],
    elements: [
      { symbol: 'Az', name: 'Azure', group: 'cloud', note: 'Daily driver. SME level.' },
      { symbol: 'En', name: 'Entra ID', group: 'cloud', note: 'Identity and access.' },
      { symbol: 'Pl', name: 'Azure Policy', group: 'cloud', note: 'Guardrails at scale.' },
      { symbol: 'Lz', name: 'Landing Zones', group: 'cloud', note: 'Enterprise foundations.' },
      { symbol: 'Kv', name: 'Key Vault', group: 'cloud' },
      { symbol: 'Vn', name: 'VNets', group: 'cloud', note: 'Hub and spoke networking.' },
      { symbol: 'Tf', name: 'Terraform', group: 'iac' },
      { symbol: 'Bc', name: 'Bicep', group: 'iac' },
      { symbol: 'Ar', name: 'ARM', group: 'iac' },
      { symbol: 'Ak', name: 'AKS', group: 'containers' },
      { symbol: 'Dk', name: 'Docker', group: 'containers' },
      { symbol: 'K8', name: 'Kubernetes', group: 'containers' },
      { symbol: 'Ad', name: 'Azure DevOps', group: 'cicd' },
      { symbol: 'Gh', name: 'GitHub Actions', group: 'cicd' },
      { symbol: 'Gt', name: 'Git', group: 'cicd' },
      { symbol: 'Mn', name: 'Azure Monitor', group: 'observe' },
      { symbol: 'La', name: 'Log Analytics', group: 'observe' },
      { symbol: 'As', name: 'AI Search', group: 'ai', note: 'Retrieval for RAG apps.' },
      { symbol: 'Lc', name: 'LangChain', group: 'ai' },
      { symbol: 'Rg', name: 'RAG', group: 'ai', note: 'Grounded answers on internal docs.' },
      { symbol: 'Cl', name: 'Claude', group: 'ai', note: 'Agents and automation.' },
      { symbol: 'Py', name: 'Python', group: 'code' },
      { symbol: 'Fa', name: 'FastAPI', group: 'code' },
      { symbol: 'Ps', name: 'PowerShell', group: 'code' },
    ],
  },

  certifications: [],

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
