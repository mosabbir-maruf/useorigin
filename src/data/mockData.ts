export type ProposalStatus =
  | "Draft"
  | "Pending Review"
  | "Active Voting"
  | "Approved"
  | "Rejected"
  | "Funded"
  | "Completed";

export interface Creator {
  id: string;
  name: string;
  initials: string;
  address: string;
  reputation: number;
  proposalsSubmitted: number;
  proposalsFunded: number;
  completedProjects: number;
  completionRate: number;
  memberSince: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  amount: number;
  expected: string;
  status:
    | "Upcoming"
    | "In Progress"
    | "Under Review"
    | "Approved"
    | "Released"
    | "Completed";
}

export interface Proposal {
  id: string;
  title: string;
  category: string;
  tags: string[];
  shortDescription: string;
  description: string[];

  overview?: {
    problem: string;
    solution: string;
    audience: string;
    impact: string;
  };

  creatorId: string;

  funding: {
    requested: number;
    breakdown: { label: string; amount: number }[];
  };

  votes: {
    for: number;
    against: number;
    abstain: number;
    quorumRequired: number;
    threshold: number;
  };

  status: ProposalStatus;
  submittedDate: string;
  deadline: string;

  milestones: Milestone[];

  links: { label: string; url: string }[];
  discussion: {
    author: string;
    time: string;
    text: string;
    isCreator?: boolean;
  }[];
  treasuryImpact?: { releaseModel: string };
}

export const creators: Record<string, Creator> = {
  "c-001": {
    id: "c-001",
    name: "Aria Chen",
    initials: "AC",
    address: "0x1a2b...3c4d",
    reputation: 92,
    proposalsSubmitted: 4,
    proposalsFunded: 3,
    completedProjects: 2,
    completionRate: 96,
    memberSince: "Jan 2024",
  },
  "c-002": {
    id: "c-002",
    name: "Maya Okonkwo",
    initials: "MO",
    address: "0x3f4a...c82e",
    reputation: 88,
    proposalsSubmitted: 2,
    proposalsFunded: 1,
    completedProjects: 1,
    completionRate: 100,
    memberSince: "March 2024",
  },
  "c-003": {
    id: "c-003",
    name: "David Park",
    initials: "DP",
    address: "0x7a9b...22f1",
    reputation: 75,
    proposalsSubmitted: 1,
    proposalsFunded: 1,
    completedProjects: 0,
    completionRate: 0,
    memberSince: "May 2025",
  },
  "c-004": {
    id: "c-004",
    name: "Elias Vance",
    initials: "EV",
    address: "0x8f2c...4d1e",
    reputation: 64,
    proposalsSubmitted: 2,
    proposalsFunded: 0,
    completedProjects: 0,
    completionRate: 0,
    memberSince: "Aug 2025",
  },
  "c-005": {
    id: "c-005",
    name: "Sarah Lin",
    initials: "SL",
    address: "0x9a1b...2c3d",
    reputation: 95,
    proposalsSubmitted: 6,
    proposalsFunded: 5,
    completedProjects: 4,
    completionRate: 80,
    memberSince: "Feb 2023",
  },
  "c-006": {
    id: "c-006",
    name: "Jamal Reid",
    initials: "JR",
    address: "0x4b5c...6d7e",
    reputation: 82,
    proposalsSubmitted: 3,
    proposalsFunded: 2,
    completedProjects: 2,
    completionRate: 100,
    memberSince: "Nov 2024",
  },
  "c-007": {
    id: "c-007",
    name: "Elena Rostova",
    initials: "ER",
    address: "0x1d2e...3f4a",
    reputation: 71,
    proposalsSubmitted: 1,
    proposalsFunded: 1,
    completedProjects: 1,
    completionRate: 100,
    memberSince: "Jan 2026",
  },
  "c-008": {
    id: "c-008",
    name: "Kaito Nakamura",
    initials: "KN",
    address: "0x5e6f...7a8b",
    reputation: 89,
    proposalsSubmitted: 4,
    proposalsFunded: 2,
    completedProjects: 2,
    completionRate: 100,
    memberSince: "Sep 2023",
  },
};

export const proposals: Proposal[] = [
  {
    id: "gip-meridian",
    title: "Meridian — An Adaptive Film Score Engine",
    category: "Creative Technology",
    tags: ["Audio", "Open Source", "CC0", "Tooling"],
    shortDescription:
      "An AI-assisted composing toolkit for independent filmmakers to generate adaptive, royalty-free orchestral scores synchronized to scene pacing.",
    description: [
      "Meridian is an adaptive engine specifically built for narrative timing. It allows directors to input emotional arcs and tension curves that sync precisely with visual cuts.",
      "Funding will support six months of development across audio synthesis research, a professional beta program with 50 selected filmmakers, and a distribution partnership.",
    ],
    overview: {
      problem:
        "Independent filmmakers often struggle to afford high-quality custom scoring. Current generative AI solutions lack emotional direction controls and timing alignment for complex scenes.",
      solution:
        "Meridian is an adaptive engine specifically built for narrative timing. It allows directors to input emotional arcs and tension curves that sync precisely with visual cuts.",
      audience:
        "Independent filmmakers, game developers, and content creators who need affordable, royalty-free, but highly customized adaptive audio.",
      impact:
        "Democratizes professional-grade scoring, allowing creators to allocate more budget to production rather than post-production licensing fees.",
    },
    creatorId: "c-001",
    funding: {
      requested: 48000,
      breakdown: [
        { label: "Product Development", amount: 18000 },
        { label: "Creator Compensation", amount: 12000 },
        { label: "Infrastructure", amount: 8000 },
        { label: "Marketing & Distribution", amount: 5000 },
        { label: "Operations", amount: 5000 },
      ],
    },
    votes: {
      for: 1_240_000,
      against: 360_000,
      abstain: 120_000,
      quorumRequired: 2_000_000,
      threshold: 50,
    },
    status: "Active Voting",
    submittedDate: "Aug 1, 2026",
    deadline: "Aug 17, 2026",
    milestones: [
      {
        id: "m1",
        title: "Research & Prototype",
        description:
          "Core timing algorithm and emotional mapping architecture.",
        amount: 10000,
        status: "Completed",
        expected: "Sep 01, 2026",
      },
      {
        id: "m2",
        title: "Engine Development",
        description: "Building the main synthesis and generation pipelines.",
        amount: 14000,
        status: "In Progress",
        expected: "Oct 15, 2026",
      },
      {
        id: "m3",
        title: "Beta Release",
        description: "Closed beta testing with 50 independent filmmakers.",
        amount: 12000,
        status: "Upcoming",
        expected: "Nov 30, 2026",
      },
      {
        id: "m4",
        title: "Public Launch",
        description:
          "Open-sourcing the engine and launching the web interface.",
        amount: 12000,
        status: "Upcoming",
        expected: "Jan 15, 2027",
      },
    ],
    links: [
      { label: "Project Website", url: "#" },
      { label: "Technical Whitepaper", url: "#" },
      { label: "GitHub Repository", url: "#" },
    ],
    discussion: [
      {
        author: "0x88f...1a2",
        time: "2 hours ago",
        text: "How will this handle complex polyrhythms? Most adaptive engines fail there.",
      },
      {
        author: "Aria Chen",
        time: "1 hour ago",
        text: "We're using a custom metrical grid system that allows for variable subdivision tracking. It's detailed in page 14 of our technical whitepaper.",
        isCreator: true,
      },
      {
        author: "steward.eth",
        time: "30 mins ago",
        text: "Aria's track record is excellent. Fully support this allocation.",
      },
    ],
    treasuryImpact: { releaseModel: "Milestone-based" },
  },
  {
    id: "gip-lumina",
    title: "Lumina — Open Source Lighting Control",
    category: "Hardware",
    tags: ["Hardware", "Open Source", "Filmmaking"],
    shortDescription:
      "An open-source hardware and software ecosystem for professional DMX lighting control on indie film sets.",
    description: [
      "Lumina aims to build an affordable, open-source alternative to expensive proprietary DMX lighting boards used in film production.",
    ],
    creatorId: "c-002",
    funding: {
      requested: 35000,
      breakdown: [
        { label: "Prototyping", amount: 15000 },
        { label: "Software UI", amount: 10000 },
        { label: "Manufacturing Run", amount: 10000 },
      ],
    },
    votes: {
      for: 2_100_000,
      against: 150_000,
      abstain: 50_000,
      quorumRequired: 2_000_000,
      threshold: 50,
    },
    status: "Funded",
    submittedDate: "May 10, 2026",
    deadline: "May 25, 2026",
    milestones: [
      {
        id: "m1",
        title: "Hardware Prototypes",
        description: "First 10 working boards.",
        amount: 15000,
        status: "Released",
        expected: "Jun 20, 2026",
      },
      {
        id: "m2",
        title: "Software Alpha",
        description: "Basic DMX routing interface.",
        amount: 10000,
        status: "Released",
        expected: "Aug 01, 2026",
      },
      {
        id: "m3",
        title: "Production Run",
        description: "First 100 units manufactured.",
        amount: 10000,
        status: "In Progress",
        expected: "Oct 01, 2026",
      },
    ],
    links: [],
    discussion: [],
    treasuryImpact: { releaseModel: "Milestone-based" },
  },
  {
    id: "gip-nexus",
    title: "Nexus Writing Fellowship",
    category: "Writing",
    tags: ["Literature", "Fellowship"],
    shortDescription:
      "A decentralized fellowship program funding 5 emerging sci-fi authors to write web3-native novels.",
    description: [
      "Funding 5 authors for 6 months to complete their novels, with publishing rights remaining entirely with the authors.",
    ],
    creatorId: "c-003",
    funding: {
      requested: 50000,
      breakdown: [
        { label: "Author Stipends", amount: 40000 },
        { label: "Editorial Support", amount: 10000 },
      ],
    },
    votes: {
      for: 1_850_000,
      against: 800_000,
      abstain: 100_000,
      quorumRequired: 2_000_000,
      threshold: 50,
    },
    status: "Approved",
    submittedDate: "Jul 15, 2026",
    deadline: "Aug 01, 2026",
    milestones: [
      {
        id: "m1",
        title: "Cohort Selection",
        description: "Select the 5 authors.",
        amount: 10000,
        status: "Upcoming",
        expected: "Sep 01, 2026",
      },
      {
        id: "m2",
        title: "Midpoint Check-in",
        description: "First 50k words submitted.",
        amount: 20000,
        status: "Upcoming",
        expected: "Dec 01, 2026",
      },
      {
        id: "m3",
        title: "Final Manuscripts",
        description: "Completed novels.",
        amount: 20000,
        status: "Upcoming",
        expected: "Mar 01, 2027",
      },
    ],
    links: [],
    discussion: [],
    treasuryImpact: { releaseModel: "Milestone-based" },
  },
  {
    id: "gip-canvas",
    title: "Canvas — Collaborative On-Chain Mural",
    category: "Visual Art",
    tags: ["Art", "NFT", "Community"],
    shortDescription:
      "A massive, ever-evolving digital canvas where artists collaborate to paint pixels stored permanently on-chain.",
    description: [
      "Canvas is a social experiment in collective art creation. Users can purchase pixels to paint on a shared digital canvas, with the final artwork preserved eternally on the blockchain.",
    ],
    creatorId: "c-004",
    funding: {
      requested: 15000,
      breakdown: [
        { label: "Smart Contract Audits", amount: 8000 },
        { label: "Frontend Development", amount: 7000 },
      ],
    },
    votes: {
      for: 0,
      against: 0,
      abstain: 0,
      quorumRequired: 1_500_000,
      threshold: 50,
    },
    status: "Pending Review",
    submittedDate: "Aug 10, 2026",
    deadline: "Aug 24, 2026",
    milestones: [],
    links: [],
    discussion: [],
    treasuryImpact: { releaseModel: "Lump-sum" },
  },
  {
    id: "gip-echo",
    title: "Echo — Algorithmic Lo-Fi Radio",
    category: "Music",
    tags: ["Audio", "Streaming", "Generative"],
    shortDescription:
      "An always-on internet radio station that generates infinite lo-fi hip hop tracks using open-source models.",
    description: [
      "Echo provides a 24/7 stream of uniquely generated music, aiming to create a decentralized alternative to popular study streams.",
    ],
    creatorId: "c-005",
    funding: {
      requested: 20000,
      breakdown: [
        { label: "Model Training", amount: 15000 },
        { label: "Server Costs", amount: 5000 },
      ],
    },
    votes: {
      for: 400_000,
      against: 850_000,
      abstain: 50_000,
      quorumRequired: 1_500_000,
      threshold: 50,
    },
    status: "Rejected",
    submittedDate: "Jan 05, 2026",
    deadline: "Jan 20, 2026",
    milestones: [],
    links: [],
    discussion: [],
    treasuryImpact: { releaseModel: "Milestone-based" },
  },
  {
    id: "gip-voyage",
    title: "Voyage — On-Chain Space Exploration",
    category: "Gaming",
    tags: ["GameFi", "Strategy"],
    shortDescription:
      "A fully decentralized space trading and exploration game built on a zero-knowledge rollup.",
    description: [
      "Players can mint ships, discover new planets, and mine resources in a procedurally generated universe entirely governed by smart contracts.",
    ],
    creatorId: "c-006",
    funding: {
      requested: 80000,
      breakdown: [
        { label: "Core Logic", amount: 40000 },
        { label: "Art Assets", amount: 20000 },
        { label: "Marketing", amount: 20000 },
      ],
    },
    votes: {
      for: 950_000,
      against: 210_000,
      abstain: 40_000,
      quorumRequired: 2_000_000,
      threshold: 50,
    },
    status: "Active Voting",
    submittedDate: "Aug 01, 2026",
    deadline: "Aug 15, 2026",
    milestones: [
      {
        id: "m1",
        title: "Game Design Document",
        description: "Finalize mechanics.",
        amount: 20000,
        status: "Upcoming",
        expected: "Oct 15, 2026",
      },
      {
        id: "m2",
        title: "Alpha Release",
        description: "Playable prototype.",
        amount: 30000,
        status: "Upcoming",
        expected: "Jan 15, 2027",
      },
      {
        id: "m3",
        title: "Mainnet Launch",
        description: "Public release.",
        amount: 30000,
        status: "Upcoming",
        expected: "Apr 15, 2027",
      },
    ],
    links: [],
    discussion: [],
    treasuryImpact: { releaseModel: "Milestone-based" },
  },
  {
    id: "gip-lens",
    title: "Lens — Creator Economy Documentary",
    category: "Film",
    tags: ["Documentary", "Education"],
    shortDescription:
      "A feature-length documentary chronicling the shift from platform-owned to creator-owned internet economies.",
    description: [
      "Lens follows the journeys of five independent creators as they transition from traditional web2 platforms to decentralized networks.",
    ],
    creatorId: "c-007",
    funding: {
      requested: 120000,
      breakdown: [
        { label: "Production", amount: 70000 },
        { label: "Post-Production", amount: 30000 },
        { label: "Distribution", amount: 20000 },
      ],
    },
    votes: {
      for: 2_800_000,
      against: 120_000,
      abstain: 80_000,
      quorumRequired: 2_000_000,
      threshold: 50,
    },
    status: "Completed",
    submittedDate: "Nov 01, 2024",
    deadline: "Nov 15, 2024",
    milestones: [
      {
        id: "m1",
        title: "Pre-Production",
        description: "Script and scheduling.",
        amount: 30000,
        status: "Completed",
        expected: "Jan 10, 2025",
      },
      {
        id: "m2",
        title: "Principal Photography",
        description: "Filming complete.",
        amount: 60000,
        status: "Completed",
        expected: "May 20, 2025",
      },
      {
        id: "m3",
        title: "Final Cut",
        description: "Ready for festivals.",
        amount: 30000,
        status: "Completed",
        expected: "Sep 05, 2025",
      },
    ],
    links: [],
    discussion: [],
    treasuryImpact: { releaseModel: "Milestone-based" },
  },
  {
    id: "gip-synth",
    title: "Synth — Cairo Development Course",
    category: "Education",
    tags: ["Course", "ZK", "Starknet"],
    shortDescription:
      "An interactive, free-to-access educational platform teaching developers how to write secure zero-knowledge smart contracts.",
    description: [
      "Synth aims to onboard the next 10,000 developers into the ZK ecosystem through hands-on, gamified coding challenges.",
    ],
    creatorId: "c-008",
    funding: {
      requested: 45000,
      breakdown: [
        { label: "Curriculum Design", amount: 15000 },
        { label: "Platform Development", amount: 30000 },
      ],
    },
    votes: {
      for: 1_600_000,
      against: 50_000,
      abstain: 10_000,
      quorumRequired: 1_500_000,
      threshold: 50,
    },
    status: "Funded",
    submittedDate: "Mar 10, 2026",
    deadline: "Mar 25, 2026",
    milestones: [
      {
        id: "m1",
        title: "Beta Launch",
        description: "First 3 modules.",
        amount: 15000,
        status: "Released",
        expected: "May 01, 2026",
      },
      {
        id: "m2",
        title: "Full Launch",
        description: "All 10 modules.",
        amount: 30000,
        status: "In Progress",
        expected: "Aug 30, 2026",
      },
    ],
    links: [],
    discussion: [],
    treasuryImpact: { releaseModel: "Milestone-based" },
  },
  {
    id: "gip-archive",
    title: "Archive — Decentralized Storage Layer",
    category: "Open Source",
    tags: ["Storage", "Infrastructure"],
    shortDescription:
      "A robust tooling layer that seamlessly mirrors vital public domain datasets to Arweave and Filecoin.",
    description: [
      "Ensuring humanity's most important public information is censorship-resistant and permanently available.",
    ],
    creatorId: "c-005",
    funding: {
      requested: 65000,
      breakdown: [
        { label: "Engineering", amount: 45000 },
        { label: "Initial Storage Fees", amount: 20000 },
      ],
    },
    votes: {
      for: 800_000,
      against: 100_000,
      abstain: 25_000,
      quorumRequired: 2_000_000,
      threshold: 50,
    },
    status: "Active Voting",
    submittedDate: "Aug 05, 2026",
    deadline: "Aug 20, 2026",
    milestones: [
      {
        id: "m1",
        title: "CLI Tool",
        description: "Command line interface.",
        amount: 25000,
        status: "Upcoming",
        expected: "Oct 01, 2026",
      },
      {
        id: "m2",
        title: "Dataset Integration",
        description: "First 10TB mirrored.",
        amount: 40000,
        status: "Upcoming",
        expected: "Dec 15, 2026",
      },
    ],
    links: [],
    discussion: [],
    treasuryImpact: { releaseModel: "Milestone-based" },
  },
];

export const getCreator = (id: string) => creators[id];

// Deterministic, seeded avatar art mapped to local assets/avatars files (01.png - 24.png)
export const avatarUrl = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = (Math.abs(hash) % 24) + 1;
  const num = index.toString().padStart(2, "0");
  return `/assets/avatars/${num}.png`;
};
export const calculateFunding = (p: Proposal) => {
  const requested = p.funding.requested;
  const released = p.milestones
    .filter((m) => m.status === "Released" || m.status === "Completed")
    .reduce((sum, m) => sum + m.amount, 0);
  const remaining = requested - released;
  return {
    requested,
    released,
    remaining,
    progress: requested ? (released / requested) * 100 : 0,
  };
};

export const calculateVotes = (p: Proposal) => {
  const total = p.votes.for + p.votes.against + p.votes.abstain;
  return {
    for: p.votes.for,
    against: p.votes.against,
    abstain: p.votes.abstain,
    total,
    forPct: total ? (p.votes.for / total) * 100 : 0,
    againstPct: total ? (p.votes.against / total) * 100 : 0,
    abstainPct: total ? (p.votes.abstain / total) * 100 : 0,
    quorumAchieved: total >= p.votes.quorumRequired,
    quorumRequired: p.votes.quorumRequired,
  };
};

// Aggregations
export const governanceStats = {
  get totalProposals() {
    return proposals.length;
  },
  get activeProposals() {
    return proposals.filter((p) => p.status === "Active Voting").length;
  },
  get passedProposals() {
    return proposals.filter((p) =>
      ["Approved", "Funded", "Completed"].includes(p.status),
    ).length;
  },
  get rejectedProposals() {
    return proposals.filter((p) => p.status === "Rejected").length;
  },
  get totalVotes() {
    return proposals.reduce(
      (sum, p) => sum + p.votes.for + p.votes.against + p.votes.abstain,
      0,
    );
  },
  voterParticipationRate: 42.5,
  totalVotingPower: 14_200_000,
  activeVoters: 1245,
  get proposalSuccessRate() {
    return this.totalProposals > 0
      ? Math.round((this.passedProposals / this.totalProposals) * 100)
      : 0;
  },
  quorumAchievementRate: 92,
};

export const treasuryAssets = [
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: 1_200_000,
    value: 1_200_000,
    color: "#2775ca",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: 480,
    value: 1_440_000,
    color: "#627eea",
  },
  {
    symbol: "DACF",
    name: "DACF Token",
    balance: 5_000_000,
    value: 500_000,
    color: "var(--jade)",
  },
];

export const treasuryStats = {
  get totalTreasury() {
    return treasuryAssets.reduce((sum, a) => sum + a.value, 0);
  }, // 3,140,000
  get distributed() {
    return proposals.reduce((sum, p) => sum + calculateFunding(p).released, 0);
  },
  get allocated() {
    return proposals
      .filter((p) => ["Approved", "Funded", "Completed"].includes(p.status))
      .reduce((sum, p) => sum + calculateFunding(p).remaining, 0);
  },
  get available() {
    return this.totalTreasury - this.allocated;
  }, // distributed already left the treasury assets!
  get activeProposals() {
    return governanceStats.activeProposals;
  },
  get fundedCreators() {
    return new Set(
      proposals
        .filter((p) => ["Approved", "Funded", "Completed"].includes(p.status))
        .map((p) => p.creatorId),
    ).size;
  },
};

export const currentUserGovernance = {
  votingPower: 45_000,
  delegatedPower: 12_000,
  totalVotesParticipated: 14,
  votingParticipationRate: 33.3,
};

export const userVotingHistory = [
  {
    id: "v1",
    proposalId: "gip-lumina",
    proposalTitle: "Lumina — Open Source Lighting Control",
    vote: "Yes",
    powerUsed: 45000,
    date: "May 20, 2026",
    outcome: "Passed",
  },
  {
    id: "v2",
    proposalId: "gip-nexus",
    proposalTitle: "Nexus Writing Fellowship",
    vote: "Yes",
    powerUsed: 45000,
    date: "Jul 25, 2026",
    outcome: "Passed",
  },
];

// Flat list of all milestones across active/funded projects for the UI
export const getActiveMilestones = () => {
  const active = [];
  for (const p of proposals) {
    if (["Approved", "Funded"].includes(p.status)) {
      for (const m of p.milestones) {
        if (m.status !== "Released" && m.status !== "Completed") {
          active.push({ proposal: p, milestone: m });
        }
      }
    }
  }
  return active;
};

// Derive transactions from released milestones
export const transactions = proposals
  .filter((p) => ["Approved", "Funded", "Completed"].includes(p.status))
  .flatMap((p) =>
    p.milestones
      .filter((m) => m.status === "Released" || m.status === "Completed")
      .map((m) => ({
        id: `tx-${p.id}-${m.id}`,
        date: m.expected,
        type: "Milestone Release",
        project: p.title,
        amount: m.amount,
        asset: "USDC",
        status: "Completed",
        hash: `0x${Math.random().toString(16).substr(2, 8)}...`,
      })),
  )
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const treasuryActivityData = [
  { month: "Jan", inflow: 120000, outflow: 45000 },
  { month: "Feb", inflow: 150000, outflow: 80000 },
  { month: "Mar", inflow: 280000, outflow: 120000 },
  { month: "Apr", inflow: 190000, outflow: 160000 },
  { month: "May", inflow: 310000, outflow: 210000 },
  { month: "Jun", inflow: 190000, outflow: 123000 },
];

export interface Testimonial {
  id: string;
  quote: string;
  creatorId: string;
  role: string;
  metric: { label: string; value: string };
}

export const testimonials: Testimonial[] = [
  {
    id: "t-001",
    quote:
      "Origin funded Meridian in three weeks flat — no pitch decks, no gatekeepers. The community read the proposal, asked sharp questions, and voted. Milestone payouts kept us honest and kept us moving.",
    creatorId: "c-001",
    role: "Composer & Creator of Meridian",
    metric: { label: "Funded in", value: "19 days" },
  },
  {
    id: "t-002",
    quote:
      "I've applied to a dozen grant programs. Origin is the only one where I could see exactly who voted, why, and where every dollar of my milestone went afterward. That transparency changed how I plan my whole studio.",
    creatorId: "c-005",
    role: "Independent Filmmaker",
    metric: { label: "Completion rate", value: "80%" },
  },
  {
    id: "t-006",
    quote:
      "The milestone-gated structure sounded strict at first, but it's actually what got my project taken seriously. Backers trust that funds unlock only when work ships — so does my team.",
    creatorId: "c-006",
    role: "Open Source Tooling Lead",
    metric: { label: "Proposals funded", value: "2 of 3" },
  },
  {
    id: "t-008",
    quote:
      "Governance here isn't theater. My proposal was amended twice by community feedback before the vote even opened, and it passed with the highest quorum turnout I've seen on the platform.",
    creatorId: "c-008",
    role: "Generative Art Collective",
    metric: { label: "Voter turnout", value: "94%" },
  },
  {
    id: "t-003",
    quote:
      "Lumina almost died in a drawer until Origin backers voted to fund the hardware run. Every milestone check-in forced us to ship instead of polish forever.",
    creatorId: "c-002",
    role: "Hardware Lead, Lumina",
    metric: { label: "Units shipped", value: "100" },
  },
  {
    id: "t-004",
    quote:
      "Five authors, one treasury, zero gatekeepers. Origin let our fellowship pay writers directly instead of routing through a publisher's advance.",
    creatorId: "c-003",
    role: "Fellowship Director, Nexus",
    metric: { label: "Writers funded", value: "5" },
  },
  {
    id: "t-005",
    quote:
      "Lens wouldn't exist without a treasury willing to fund a documentary with no guaranteed distributor. The community bet on the story, not a studio's calendar.",
    creatorId: "c-007",
    role: "Director, Lens",
    metric: { label: "Festival selections", value: "6" },
  },
  {
    id: "t-007",
    quote:
      "Delegation made the difference for me — I didn't have time to review every vote, so I delegated to a steward whose track record I could actually verify on-chain.",
    creatorId: "c-004",
    role: "Digital Artist, Canvas",
    metric: { label: "Delegated power", value: "12K" },
  },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    q: "What is Origin and how is it different from a grant program?",
    a: "Origin is a community-governed treasury, not a foundation or grant committee. Anyone can submit a funding proposal, and token holders — not a small board — vote on-chain to decide what gets funded. There's no editorial gatekeeping; execution is enforced entirely by smart contracts.",
  },
  {
    q: "Who can submit a proposal?",
    a: "Any creator with a connected wallet can submit a proposal. You'll define your project scope, funding ask, and milestone breakdown. A 48-hour community review window opens before the proposal moves to a formal vote.",
  },
  {
    q: "How does milestone-gated funding work?",
    a: "Approved funds are held in escrow rather than paid out in full. Each milestone is reviewed and released independently as it's completed, so creators are paid for delivered progress and the treasury is protected from unfinished work.",
  },
  {
    q: "What does it take for a proposal to pass?",
    a: "A proposal needs a minimum quorum of 500 votes and 60% approval within a 14-day voting window. Every vote is recorded on-chain, so outcomes are auditable and can't be altered after the fact.",
  },
  {
    q: "Do I need a crypto wallet to participate?",
    a: "Yes — connecting a wallet (MetaMask or another supported provider) is how you vote, delegate voting power, and receive milestone disbursements. Origin never has access to your private keys or funds without your explicit on-chain approval.",
  },
  {
    q: "How is the treasury funded and kept transparent?",
    a: "The treasury holds a mix of USDC, ETH, and the native DACF token. Every inflow, allocation, and disbursement is visible on the Treasury page in real time, broken down by category and cross-referenced with funded proposals.",
  },
  {
    q: "What happens if a funded creator misses a milestone?",
    a: "Unreleased milestone funds simply remain in escrow. If a milestone is abandoned or fails community review, those funds return to the treasury rather than being disbursed — they are never forfeited to a third party.",
  },
];
