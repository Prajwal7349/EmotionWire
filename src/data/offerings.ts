export interface Offering {
  slug: string;
  title: string;
  subtitle: string;
  overview: string[];
  problem: {
    title: string;
    description: string[];
  };
  features: {
    title: string;
    items: string[];
  }[];
  outcome: string;
}

export const offerings: Offering[] = [
  {
    slug: 'brand-positioning-sprint',
    title: 'Brand Positioning Sprint',
    subtitle: 'Move from "what we do" to "why buyers should choose us."',
    overview: [
      'Many B2B companies describe their services accurately but fail to occupy a meaningful space in the buyer\'s mind.',
      'But the buyer is left asking four important Ws.',
      '1. "Why this company?"\n2. "Why now?"\n3. "Why should I trust them?"\n4. "What do they understand that others do not?"',
      'The Brand Positioning Sprint helps answer these questions by uncovering the emotional and behavioural forces behind your buyer\'s decision.',
      'We start with decoding the buyer\'s mind. We investigate what the buyer is trying to avoid, what they secretly desire, what risk they are carrying, what pressure they are under, and what kind of partner they are emotionally prepared to trust.',
      'Then we convert that insight into a sharper positioning system.'
    ],
    problem: {
      title: 'The behavioural problem we solve',
      description: [
        'Your buyer is not only comparing vendors, but they are also managing fear, internal pressure, decision risk, reputation risk, budget justification, and the need to look smart in front of others.',
        'Your weak positioning makes the buyer work too hard to justify you as a vendor. We help you give the buyer a simple, believable reason to remember you and move forward.'
      ]
    },
    features: [
      {
        title: 'What we engineer',
        items: [
          'A sharper mental category for your brand',
          'Emotional anchors that make the brand easier to remember',
          'Trust signals that reduce perceived risk',
          'Differentiation that is not limited to features',
          'A positioning narrative that sales and marketing can both use',
          'Messaging that creates clarity, confidence, and action'
        ]
      },
      {
        title: 'What you get',
        items: [
          'Brand positioning statement',
          'Buyer mindscape map',
          'Emotional trigger map',
          'Differentiation narrative',
          'Messaging pillars',
          'Core brand belief',
          'Website hero direction',
          'Sales conversation narrative',
          'Tagline or campaign-line options',
          'Behavioural messaging guide'
        ]
      }
    ],
    outcome: 'Your brand becomes easier to understand, easier to remember, and easier to choose.'
  },
  {
    slug: 'founder-leadership-narrative-sprint',
    title: 'Founder / Leadership Narrative Sprint',
    subtitle: 'Turn leadership conviction into market influence.',
    overview: [
      'In B2B, leadership is a trust signal where buyers want to know not only what the company does, but how its leaders think. They look for conviction, clarity, judgement, and point of view.',
      'A founder or leader with a strong narrative creates an emotional shortcut for the market. The Founder / Leadership Narrative Sprint helps convert scattered leadership experience into a clear public narrative.'
    ],
    problem: {
      title: 'The behavioural problem we solve',
      description: [
        'Most leaders have strong ideas, but their market presence is fragmented or unclear. Their thinking appears in sales calls, internal meetings, podcasts, investor conversations, and random LinkedIn posts but not as a consistent narrative.',
        'As a result, the market does not know what they stand for. We help leaders define their intellectual territory and emotional authority.'
      ]
    },
    features: [
      {
        title: 'What we engineer',
        items: [
          'A leadership voice that builds trust',
          'A clear point of view on the market',
          'Stories that create credibility',
          'Contrarian or distinctive beliefs',
          'Emotional themes that make the leader relatable',
          'Thought-leadership pillars connected to business goals'
        ]
      },
      {
        title: 'What you get',
        items: [
          'Founder / leadership narrative',
          'Core belief architecture',
          'Market point-of-view document',
          'Personal brand positioning',
          'LinkedIn content pillars',
          'Signature story bank',
          'Podcast and event talking points',
          'Leadership bio options',
          'Interview message bank'
        ]
      }
    ],
    outcome: 'Your leadership becomes a source of trust, authority, and demand creation.'
  },
  {
    slug: 'b2b-website-messaging-audit-and-realigning',
    title: 'B2B Website Messaging Audit and Realigning',
    subtitle: 'Do you see website visits but no form fills?',
    overview: [
      'A website is not only a digital brochure. It is often the first serious trust test and always an important pit-stop of the buyer\'s journey.',
      'Your lead generation engines are bringing prospects to the website. Unfortunately, most B2B websites fail because they answer company questions instead of buyer questions.',
      'The B2B Website Messaging Audit studies your website through the lens of buyer psychology, emotional friction, trust formation, and conversion behaviour.'
    ],
    problem: {
      title: 'The behavioural problem we solve',
      description: [
        'Your website may have information, but information alone does not move buyers. Buyers act when the message reduces uncertainty and increases confidence.',
        'We identify where your website creates confusion, hesitation, lack of urgency, weak trust, or emotional distance. We give you messaging that would help your buyers take that next step in the journey, like filling out the form or calling sales.'
      ]
    },
    features: [
      {
        title: 'What we engineer',
        items: [
          'Clearer buyer relevance',
          'Stronger trust signals',
          'Reduced decision friction',
          'Sharper emotional hooks',
          'Better page-level persuasion',
          'More action-oriented CTAs',
          'Sales-aligned website messaging'
        ]
      },
      {
        title: 'What we review',
        items: [
          'Homepage clarity',
          'Service page persuasiveness',
          'Buyer pain alignment',
          'Emotional triggers',
          'Trust and credibility signals',
          'Differentiation strength',
          'Case study placement',
          'CTA quality',
          'Navigation logic',
          'Conversion friction',
          'SEO and AEO readiness'
        ]
      },
      {
        title: 'What you get',
        items: [
          'Website messaging audit report',
          'Buyer-friction diagnosis',
          'Emotional clarity score',
          'Trust-gap analysis',
          'Website rewrite direction',
          'CTA recommendations',
          'Page-wise improvement notes',
          'Proof-point checklist',
          'Conversion improvement roadmap'
        ]
      }
    ],
    outcome: 'Your website starts working harder for sales conversions by creating clarity, confidence, and trust before the first call.'
  },
  {
    slug: 'linkedin-thought-leadership-engine',
    title: 'LinkedIn Thought Leadership Engine',
    subtitle: 'Build market memory before the sales conversation begins.',
    overview: [
      'LinkedIn is much more than a posting platform. For B2B brands and leaders, it is a memory-building platform. Every post either strengthens or weakens how the market remembers you.',
      'Most LinkedIn content fails because it is either too promotional, too generic, or too disconnected from the company\'s positioning.',
      'The LinkedIn Thought Leadership Engine helps you build a consistent public voice around the emotional and strategic themes your buyers care about.'
    ],
    problem: {
      title: 'The behavioural problem we solve',
      description: [
        'Buyers respond to repeated exposure to a clear idea because, as humans, we are wired to trust through pattern recognition.',
        'When your audience repeatedly sees your point of view, your examples, your language, and your beliefs, they begin to associate you with a specific problem or opportunity.',
        'That is when content starts supporting demand creation.'
      ]
    },
    features: [
      {
        title: 'What we engineer',
        items: [
          'Familiarity',
          'Recall',
          'Trust',
          'Authority',
          'Emotional resonance',
          'Category association',
          'Founder-led credibility',
          'Company-level consistency'
        ]
      },
      {
        title: 'What you get',
        items: [
          'LinkedIn thought-leadership strategy',
          'Founder / leadership content pillars',
          'Company page content themes',
          'Monthly content calendar',
          'POV-led posts',
          'Case-study-led posts',
          'Buyer-education posts',
          'Sales-support posts',
          'Campaign amplification posts',
          'Performance review and refinement'
        ]
      }
    ],
    outcome: 'Your LinkedIn presence stops being a content calendar and becomes a trust-building system.'
  },
  {
    slug: 'seo-aeo-content-program',
    title: 'SEO + AEO Content Program',
    subtitle: 'Create content for how modern buyers search, ask, compare, and decide.',
    overview: [
      'Search behaviour has changed. Buyers are no longer only typing keywords into Google. They are asking AI tools, reading summaries, comparing vendors, searching for direct answers, and educating themselves before speaking to sales.',
      'The SEO + AEO Content Program helps you create content around buyer intent, emotional needs, and decision-stage questions.'
    ],
    problem: {
      title: 'The behavioural problem we solve',
      description: [
        'SEO content plays two critical roles. It attracts attention and influences decisions. Most companies know how the former works but miss the buyer\'s deeper concern.',
        'We build content that answers both the visible search query and the hidden emotional question.'
      ]
    },
    features: [
      {
        title: 'What we engineer',
        items: [
          'Discoverability',
          'Authority',
          'Buyer confidence',
          'Reduced decision anxiety',
          'Search and answer readiness',
          'Educational trust',
          'Better movement from awareness to consideration'
        ]
      },
      {
        title: 'What you get',
        items: [
          'Keyword and buyer-question map',
          'Buyer intent architecture',
          'AEO-ready FAQ clusters',
          'SEO blog calendar',
          'Thought-leadership articles',
          'Service-page content direction',
          'Comparison content ideas',
          'Decision-stage content',
          'Internal linking recommendations',
          'Content performance review'
        ]
      }
    ],
    outcome: 'Your content becomes easier to find, easier to trust, and more useful in the buyer\'s decision journey.'
  },
  {
    slug: 'gtm-campaign-messaging',
    title: 'GTM Campaign Messaging',
    subtitle: 'Convert your offer into a market argument that buyers care about.',
    overview: [
      'We consider a GTM campaign a behavioural journey.',
      'The buyer must move from indifference to attention, from attention to relevance, from relevance to trust, and from trust to action. Most campaigns fail because they begin with the company\'s offer instead of the buyer\'s pressure.',
      'The GTM Campaign Launch Kit helps you build a campaign around the emotional and business trigger that makes the buyer act.'
    ],
    problem: {
      title: 'The behavioural problem we solve',
      description: [
        'Most campaigns fail because they begin with the company\'s offer instead of the buyer\'s pressure.',
        'We engineer campaigns that convert your offer into a market argument that buyers actually care about.'
      ]
    },
    features: [
      {
        title: 'What we engineer',
        items: [
          'Campaign relevance',
          'Urgency',
          'Trust',
          'Message consistency',
          'Sales alignment',
          'Buyer movement',
          'CTA clarity',
          'Emotional momentum'
        ]
      },
      {
        title: 'What you get',
        items: [
          'Campaign positioning note',
          'Buyer trigger map',
          'Emotional messaging architecture',
          'Campaign narrative',
          'Landing page copy direction',
          'Email sequence',
          'LinkedIn post set',
          'Sales outreach messages',
          'Sales deck storyline',
          'Proof-point framework',
          'CTA and conversion path recommendations'
        ]
      }
    ],
    outcome: 'Your campaign stops being a collection of disconnected assets and becomes a focused system designed to move the buyer toward action.'
  },
  {
    slug: 'lead-generation-system',
    title: 'Lead Generation System',
    subtitle: 'Turn your demand capture into a buyer-moving system.',
    overview: [
      'Lead generation is not only about filling the pipeline. It is about creating the right sequence of signals, messages, and moments that make a buyer more willing to engage.',
      'Most B2B lead-generation systems fail because they are built around volume targets instead of buyer behaviour. The market gets flooded with outreach, but the buyer is still asking silent questions like, "Is this relevant to me?", "Can I trust this company?", and "Is it worth taking this conversation?"',
      'The Lead Generation System helps answer those questions before the first real sales interaction. We build lead-generation infrastructure around intent, timing, trust, and message-market fit, so your outbound and inbound efforts work as one coherent system.'
    ],
    problem: {
      title: 'The behavioural problem we solve',
      description: [
        'Buyers do not respond because a company wants pipeline. They respond when the message feels relevant, the timing feels right, and the risk feels manageable.',
        'Most lead-generation efforts ignore this. Lists are pulled too broadly. Messaging is written from the seller\'s point of view. Follow-up lacks context. Sales and marketing operate as separate motions. As a result, the buyer experiences noise instead of momentum.',
        'The Lead Generation System fixes this by making lead generation more behaviour-aware. It helps you reach the right accounts, with the right trigger, through the right channel, with messaging that reduces friction and increases response probability.'
      ]
    },
    features: [
      {
        title: 'What we engineer',
        items: [
          'ICP and segment definition based on market fit, buying context, and likely pressure points',
          'Lead-source and channel strategy across outbound, inbound, content, and campaign capture',
          'Outreach messaging aligned to buyer pain, urgency, and trust formation',
          'Trigger-based lead capture and follow-up logic',
          'Sales and marketing alignment around qualification, routing, and conversion stages',
          'Nurture pathways for buyers who are interested but not yet ready',
          'Demand capture systems that turn attention into identifiable pipeline',
          'Measurement logic that tracks quality, response, and conversion behaviour'
        ]
      },
      {
        title: 'What you get',
        items: [
          'Lead-generation strategy',
          'ICP and segment map',
          'Offer and outreach angle framework',
          'Channel-wise lead-capture plan',
          'Messaging directions for outbound and inbound follow-up',
          'Qualification and handoff logic',
          'Nurture-path recommendations',
          'Conversion tracking framework',
          'Lead-management improvement roadmap'
        ]
      }
    ],
    outcome: 'Your lead generation stops being a random collection of campaigns, lists, forms, and follow-ups. It becomes a structured growth system designed to create relevance, build trust, and increase the number of buyers who are ready to enter a serious sales conversation.'
  },
  {
    slug: 'marketing-automation',
    title: 'Marketing Automation',
    subtitle: 'Build journeys that respond to buyer behaviour instead of broadcasting generic follow-ups.',
    overview: [
      'Marketing automation should not feel mechanical. It should quietly guide the buyer from first interest to sales readiness through a sequence of timely, relevant, and trust-building interactions.',
      'Most automation systems fail because they are treated as delivery tools instead of behavioural systems. Everyone receives the same emails, the same timing, and the same logic, regardless of what they clicked, what they ignored, what page they visited, or what stage of readiness they are actually in.',
      'EmotionWire helps design marketing automation around real buyer movement. We create workflows that react to signals, support the buyer\'s decision journey, and make your marketing feel more human even when it is automated.'
    ],
    problem: {
      title: 'The behavioural problem we solve',
      description: [
        'Buyers do not move in straight lines. They pause, compare, hesitate, revisit, and return when internal timing changes.',
        'But most automation assumes linear progression. It pushes too early, repeats the wrong message, or keeps nurturing leads long after intent has changed. That creates fatigue, weakens trust, and leaves revenue on the table.',
        'The Marketing Automation service rebuilds your automation logic around buyer psychology and behavioural data. It helps your systems respond with more relevance, better timing, and stronger alignment between marketing activity and sales readiness.'
      ]
    },
    features: [
      {
        title: 'What we engineer',
        items: [
          'Buyer-journey workflows aligned to awareness, consideration, and decision stages',
          'Behaviour-based automation logic triggered by opens, clicks, visits, downloads, and form actions',
          'Lead scoring models based on fit, engagement, and intent strength',
          'Nurture sequences designed to educate, reassure, and reduce perceived risk',
          'Segmentation frameworks that prevent over-messaging and improve relevance',
          'Sales-alert and handoff workflows based on readiness signals',
          'Re-engagement paths for stalled or inactive leads',
          'Reporting systems that show movement, drop-off, and conversion patterns'
        ]
      },
      {
        title: 'What you get',
        items: [
          'Marketing automation blueprint',
          'Workflow and nurture architecture',
          'Lead-scoring logic',
          'Segmentation and trigger framework',
          'Email-sequence direction',
          'Sales-notification and handoff rules',
          'Re-engagement flow recommendations',
          'Automation performance review framework',
          'Funnel-leakage diagnosis and improvement roadmap'
        ]
      }
    ],
    outcome: 'Your automation stops acting like a message-sending machine. It becomes a responsive system that nurtures trust, improves conversion quality, and helps buyers move forward with more clarity and confidence.'
  }
];
