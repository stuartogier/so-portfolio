/*
 * All images live in public/images/ — drop the files there and they'll load.
 * Base path is /images/filename.webp
 */

export const projects = [
  {
    slug: 'center-for-behavioral-institutional-design',
    title: 'Center for Behavioral & Institutional Design',
    subtitle: 'A full-scale redesign of C-BID\'s digital presence, from user experience to development.',
    services: ['UX Design', 'Visual Design', 'User Research','Development'],
    tags: ['UX', 'UI', 'Research','Development'],
    heroImage: '/images/image-asset.gif',
    heroImageAlt: 'C-BID website redesign',
    body: `I led the research, design, and development of a new website for the Center for Behavioral Institutional Design (C-BID), a behavioral research agency at NYU Abu Dhabi. I crafted a seamless experience that effectively showcases C-BID's research, events, and collaborations. From wireframes to final code, I ensured the site not only meets accessibility and usability standards but also reflects C-BID's mission to advance behavioral science in institutional design.`,
    sections: [
      {
        title: 'Information architecture',
        body: `To create a seamless user experience, I developed a structured information architecture that organises C-BID's research, publications, and collaborations. This sitemap reflects the refined navigation system, ensuring intuitive access to content for researchers, policymakers, and students.`,
        images: [
          { url: '/images/cbid-ia.webp', alt: 'C-BID information architecture sitemap' },
        ],
      },
      {
        title: 'Wireframes & UX structure',
        body: `Wireframes were created to define content hierarchy and user interactions before moving into visual design. These grayscale prototypes helped validate navigation flows and ensure clarity in presenting C-BID's research focus areas.`,
        images: [
          { url: '/images/cbid-wireframes.webp', alt: 'C-BID wireframes' },
        ],
      },
      {
        title: 'Initial concepts',
        body: `In the early design phase, I explored multiple visual directions for C-BID's website, experimenting with typography, imagery, and layout. These concepts aimed to balance academic credibility with an engaging, modern aesthetic while maintaining usability and accessibility.`,
        images: [
          { url: '/images/cbid-initial-designs.webp', alt: 'C-BID initial design concepts' },
        ],
      },
      {
        title: 'Refined design iteration',
        body: `Building on feedback, I refined the visual and interaction design to enhance clarity and engagement. This phase involved optimising typography, color palettes, and interactive elements to align with C-BID's brand and mission.`,
        images: [
          { url: '/images/cbid-refined-designs.webp', alt: 'C-BID refined designs' },
        ],
      },
      {
        title: 'Final design & implementation',
        body: `The final design brings C-BID's research to life through a polished, user-friendly interface. Built using React for a dynamic and modular structure with SCSS for scalable styling. The site is fully responsive and optimised for accessibility across devices.`,
        images: [
          { url: '/images/cbid-final-designs.webp', alt: 'C-BID final design' },
        ],
      },
    ],
  },
  {
    slug: 'department-for-energy-security-and-net-zero',
    title: 'Department for Energy Security & Net Zero',
    subtitle: 'Alpha project exploring digital solutions for Heat Networks.',
    services: ['Government Department', 'UX design'],
    tags: ['Government', 'UX'],
    heroImage: '/images/DESNZ.jpg',
    heroImageAlt: 'DESNZ Heat Networks project',
    body: `I led the interaction design for an Alpha project with the Department for Energy Security & Net Zero (DESNZ), investigating how digital solutions could support the growth and efficiency of Heat Networks. Working closely with a multidisciplinary team, we built on prior Discovery findings to prototype and test digital tools aimed at improving data transparency, user accessibility, and operational efficiency.\n\nThrough in-depth user research with key stakeholders — including local authorities, energy providers, and consumers — we identified key challenges in heat network adoption, data standardisation, and regulatory compliance.`,
    sections: [
      {
        title: 'Compliance checker & onboarding',
        body: `I designed and iterated a flow for a Compliance Checker and Onboarding Flow, ensuring clarity and usability for different stakeholder groups. A key challenge was making it immediately clear whether users needed to comply with Heat Network regulations. Through multiple rounds of user research and testing, I refined the flow to improve navigation, accessibility, and comprehension.\n\nTo further validate our designs, I built a working flow in code, allowing for usability testing with real users. Accessibility testing ensured the solution met WCAG standards.`,
        images: [
          { url: '/images/Limit+-+Frame+1.webp', alt: 'DESNZ compliance checker frame' },
          { url: '/images/desnz-onboarding.webp', alt: 'DESNZ onboarding flow' },
        ],
      },
      {
        title: 'Statement of Applicability flow',
        body: `I designed and built the feasibility flow for the Statement of Applicability, a crucial step in registering a Heat Network. This flow helped users determine whether they needed to comply with regulations and guided them through the early stages of the registration process.\n\nAfter submission, the Statement of Applicability was assessed by regulators, with feedback provided for any required adjustments.`,
        images: [
          { url: '/images/desnz-soa.webp', alt: 'DESNZ Statement of Applicability' },
          { url: '/images/desnz-assess.webp', alt: 'DESNZ assessment flow' },
        ],
      },
    ],
  },
  {
    slug: 'nyu-abu-dhabi',
    title: 'NYU Abu Dhabi',
    subtitle: 'UI design for three NYU Abu Dhabi websites.',
    services: ['Education', 'Visual design'],
    tags: ['Education','UI'],
    heroImage: '/images/im-87321948.avif',
    heroImageAlt: 'NYU Abu Dhabi website designs',
    body: `I led the visual design for three key NYU Abu Dhabi websites, collaborating closely with researchers, UX designers, and developers to craft engaging, user-friendly digital experiences. Through typography, color systems, and layout design, I ensured each website not only meets usability and accessibility standards but also delivers a polished and cohesive digital experience.`,
    sections: [
      {
        title: 'Public Programs',
        body: `For the Public Programs websites — The Art Gallery, The Institute, and The Arts Center — I developed a cohesive yet flexible visual identity for each centre that unified the platforms while preserving each initiative's unique character.`,
        images: [
          { url: '/images/nyu1.webp', alt: 'NYU Abu Dhabi Public Programs website' },
          { url: '/images/nyu2.webp', alt: 'NYU Abu Dhabi Arts Center website' },
        ],
      },
      {
        title: 'NYU Stern MBA program website',
        body: `For the NYU Stern MBA program website, I created a professional and dynamic visual system that aligns with NYU's global brand while effectively showcasing the program's offerings, faculty, and admissions pathways.`,
        images: [
          { url: '/images/nyu3.webp', alt: 'NYU Stern MBA website' },
          { url: '/images/nyu4.webp', alt: 'NYU Stern MBA website detail' },
        ],
      },
      {
        title: 'NYU corporate website',
        body: `For the main corporate website, I refined the visual language to support a scalable, intuitive, and visually compelling structure that reflects NYU Abu Dhabi's identity.`,
        images: [
          { url: '/images/nyu5.webp', alt: 'NYU Abu Dhabi corporate website' },
          { url: '/images/nyu6.webp', alt: 'NYU Abu Dhabi corporate website detail' },
        ],
      },
    ],
  },
  {
    slug: 'department-for-education',
    title: 'Department for Education',
    subtitle: 'Three projects: Schools Financial Benchmarking, Get Information About Schools & DfE Sign-in.',
    services: ['Government', 'UX Design', 'Visual Design', 'User Research'],
    tags: ['Government', 'UX', 'UI', 'Research'],
    heroImage: '/images/START.webp',
    heroImageAlt: 'Department for Education projects',
    body: `Three separate projects for the Department for Education, spanning user research, UX design, and visual design.`,
    sections: [
      {
        title: 'Schools financial benchmarking',
        body: `I worked on Schools Financial Benchmarking as the project's user researcher and UX designer. I conducted over 200 concept tests, usability tests and focus groups to help redesign the site as well as launch new tools and features for the service.\n\nLive at schools-financial-benchmarking.service.gov.uk`,
        images: [
          { url: '/images/per1.webp', alt: 'Schools benchmarking user research' },
          { url: '/images/per2.webp', alt: 'Schools benchmarking personas' },
          { url: '/images/ia-1.webp', alt: 'Schools benchmarking sitemap' },
          { url: '/images/userflow-1.webp', alt: 'Schools benchmarking user flow' },
          { url: '/images/wireframes-1.webp', alt: 'Schools benchmarking wireframes' },
        ],
      },
      {
        title: 'Get information about schools',
        body: `On Get Information About Schools I was the service's UX designer, leading the redesign of the site to meet GDS standards as well as adding new tools and features.\n\nLive at get-information-schools.service.gov.uk`,
        images: [
          { url: '/images/userflows.webp', alt: 'Get information about schools user flows' },
          { url: '/images/wireframes-2.webp', alt: 'Get information about schools wireframes' },
        ],
      },
      {
        title: 'DfE Sign-in',
        body: `DfE Sign-in was a unified sign-in service to replace 40 disparate DfE service logins. The issues around this were that each service had different security needs, leading to extensive research and onboarding flows.\n\nLive at services.signin.education.gov.uk`,
        images: [
          { url: '/images/ia-2.webp', alt: 'DfE Sign-in sitemap' },
          { url: '/images/Flow-1.webp', alt: 'DfE Sign-in user flows' },
          { url: '/images/wireframes2.webp', alt: 'DfE Sign-in wireframes' },
        ],
      },
    ],
  },
  {
    slug: 'department-of-health-and-social-care',
    title: 'Department of Health & Social Care',
    subtitle: 'A three month discovery into the impact a Skills Passport would have on the nation\'s social care sector.',
    services: ['Government Department', 'User Research'],
    tags: ['Government', 'Research'],
    heroImage: '/images/DHSC_front.webp',
    heroImageAlt: 'DHSC Skills Passport discovery',
    body: `I led and coordinated the research and design part of a discovery for the DHSC with a team of five researchers and designers. The Discovery looked at the possibility of introducing a new digital resource to capture the learning and development of social care staff, and facilitate the portability of training undertaken — something that up till then did not exist.`,
    sections: [
      {
        title: 'Interviews & persona creation',
        body: `After establishing the problem statements with the DHSC we created interview scripts and took them out to 40+ interviewees across the social care sector. The results of these interviews helped us build the archetype personas which we built from later on.`,
        images: [
          { url: '/images/dhsc+interviews.webp', alt: 'DHSC interview findings' },
        ],
      },
      {
        title: 'Experience maps',
        body: `The experience maps allowed the DHSC for the first time to see the issues that workers in the social care setting were experiencing and how that was affecting them.`,
        images: [
          { url: '/images/DHSC+user+journeyss.webp', alt: 'DHSC experience maps' },
        ],
      },
      {
        title: 'Site maps & user flows',
        body: `The production of the experience maps allowed us to co-create with the DHSC team to understand what a potential solution would look like. This meant we could build first draft site maps and user flows to inform the creation of concepts and prototypes.`,
        images: [
          { url: '/images/dhsc_sitemaps.webp', alt: 'DHSC sitemaps and user flows' },
        ],
      },
      {
        title: 'Prototypes for concept testing',
        body: `Using the GDS toolkit we built multiple working prototypes to test with users so they could understand and feedback on the concept. We took these prototypes out to approximately 20 participants.`,
        images: [
          { url: '/images/dhsc_prototype.webp', alt: 'DHSC prototype' },
        ],
      },
      {
        title: 'Discovery report',
        body: `The final report was around 100 pages that detailed all the research findings as well as an Alpha plan for research if the DHSC chose to take the project forward.`,
        images: [
          { url: '/images/dhsc_report.webp', alt: 'DHSC discovery report' },
        ],
      },
    ],
  },
  {
    slug: 'giacom',
    title: 'Giacom',
    subtitle: 'Rebranded corporate website.',
    services: ['UX Design', 'Visual design'],
    tags: ['UX', 'UI'],
    heroImage: '/images/START2.gif',
    heroImageAlt: 'Giacom website redesign',
    body: `I led the redesign of Giacom's website, creating a modern, scalable, and user-friendly platform that reflects the brand's position as a leading cloud services provider. The project involved end-to-end UX and UI design, from research and strategy to final implementation.`,
    sections: [
      {
        title: 'Information architecture',
        body: `After card-sorting exercises and initial research I created a user flow with simplified navigation and improved discoverability. I restructured the site's IA, ensuring a logical flow for business customers and partners.`,
        images: [
          { url: '/images/Giacom_whatwelearnt.webp', alt: 'Giacom research findings' },
          { url: '/images/Giacom_sitemap.webp', alt: 'Giacom sitemap' },
        ],
      },
      {
        title: 'Wireframes & UX prototyping',
        body: `I developed wireframes and low-fidelity prototypes to define content hierarchy, validate key user journeys, and test usability before moving into visual design.`,
        images: [
          { url: '/images/dws_wire.webp', alt: 'Giacom wireframes' },
        ],
      },
      {
        title: 'Initial design concepts',
        body: `I explored multiple design directions, balancing brand identity, accessibility, and conversion goals. These early concepts helped refine the visual language and interaction patterns.`,
        images: [
          { url: '/images/dws_ini.webp', alt: 'Giacom initial design concepts' },
        ],
      },
      {
        title: 'Final design & development',
        body: `The final design delivers a polished, intuitive experience optimised for engagement and usability. The redesign enhanced navigation clarity, user engagement, and conversion pathways, supporting Giacom's growth and brand positioning.`,
        images: [
          { url: '/images/final-page.webp', alt: 'Giacom final design' },
        ],
      },
    ],
  },
  {
    slug: 'gchq-and-ncsc',
    title: 'GCHQ & NCSC',
    subtitle: 'Full website redesign for both sites.',
    services: ['Government Department', 'UX Design', 'Visual Design'],
    tags: ['Government', 'UX', 'UI'],
    heroImage: '/images/gchq.jpeg',
    heroImageAlt: 'GCHQ and NCSC website redesign',
    body: `GCHQ and NCSC are sister organisations that both wished to redesign their existing sites. It was decided to use NCSC as the main focus in the design process as their site was more complex and would create the greater challenge.\n\nWe started by redesigning the user flows of the site based on task analysis of current users and then built out a new set of site maps and wireframes. Lastly a new visual identity that could be used for both sites was created.`,
    sections: [
      {
        title: 'Sitemaps',
        body: `Comprehensive sitemaps were developed for both gchq.gov.uk and ncsc.gov.uk, restructuring the information architecture to improve discoverability and task completion.`,
        images: [
          { url: '/images/GCHQ_IA.webp', alt: 'GCHQ sitemap' },
          { url: '/images/NCSC_IA.webp', alt: 'NCSC sitemap' },
        ],
      },
      {
        title: 'Wireframes',
        body: `Later stage wireframes were tested for visibility of key messages and general usability, iterating through multiple rounds to ensure clarity across both organisations' distinct content needs.`,
        images: [
          { url: '/images/wireframe.webp', alt: 'GCHQ NCSC wireframes' },
        ],
      },
      {
        title: 'Early UI designs',
        body: `Initial UI explorations developed a visual language capable of working across both GCHQ and NCSC, balancing institutional authority with modern digital accessibility standards.`,
        images: [
          { url: '/images/Initial-UIs.webp', alt: 'GCHQ NCSC early UI designs' },
        ],
      },
      {
        title: 'Final designs & layout guides',
        body: `The final designs incorporated over 180 screens for multiple parts of the two sites across four distinct size breakpoints. A full style guide was delivered covering typography, colour, and interactions.`,
        images: [
          { url: '/images/final-fronts.webp', alt: 'GCHQ NCSC final designs' },
          { url: '/images/Layoutguides.webp', alt: 'GCHQ NCSC layout guides' },
          { url: '/images/styleguide.webp', alt: 'GCHQ NCSC style guide' },
        ],
      },
    ],
  },
  {
    slug: 'flagstone-investment-management',
    title: 'Flagstone Investment Management',
    subtitle: 'New onboarding flow and site redesign.',
    services: ['UX Design', 'Visual Design'],
    tags: ['UX', 'UI'],
    heroImage: '/images/START-1.webp',
    heroImageAlt: 'Flagstone Investment Management redesign',
    body: `Flagstone Investment Management allows high worth individuals to invest a minimum of £250k in high-interest private bank accounts. They needed a new onboarding flow for these individuals that included Know My Customer (KYC) regulations as well as new visual design for the site.`,
    sections: [
      {
        title: 'Sitemaps & flows',
        body: `Comprehensive sitemaps and user flows were created to map out the new onboarding journey, ensuring the KYC regulatory requirements were seamlessly integrated into a smooth user experience.`,
        images: [
          { url: '/images/IA.webp', alt: 'Flagstone information architecture' },
          { url: '/images/flow.webp', alt: 'Flagstone user flow' },
        ],
      },
      {
        title: 'Wireframes',
        body: `Multiple wireframes and flows were tested with existing and prospective customers as well as ensuring they met KYC regulations.`,
        images: [
          { url: '/images/wires.webp', alt: 'Flagstone wireframes' },
        ],
      },
      {
        title: 'Final interfaces & style guide',
        body: `The final design had a radically different onboarding flow as well as more visually clear screens throughout the site. A full style guide was handed over to the in-house developers.`,
        images: [
          { url: '/images/screens.webp', alt: 'Flagstone final interfaces' },
          { url: '/images/styleguide-1.webp', alt: 'Flagstone style guide' },
        ],
      },
    ],
  },
  {
    slug: 'warwickshire-county-council',
    title: 'Warwickshire County Council',
    subtitle: 'Full website redesign.',
    services: ['Local Government', 'UX Design', 'Visual Design'],
    tags: ['Government', 'UX', 'UI'],
    heroImage: '/images/Screenshot-2021-03-12-at-21.05.10.webp',
    heroImageAlt: 'Warwickshire County Council website redesign',
    body: `Warwickshire County Council requested a full redesign of their current site at warwickshire.gov.uk. This included new user flows based on task analysis as well as a new visual identity that better reflected their status as Shakespeare's county.`,
    sections: [
      {
        title: 'Wireframes',
        body: `Wireframes were created throughout the design process to test flows with users. These low-fidelity representations allowed rapid iteration based on user feedback.`,
        images: [
          { url: '/images/wire1.webp', alt: 'WCC wireframes' },
        ],
      },
      {
        title: 'Early UI designs',
        body: `Substantial user tests were performed on the UIs for not only usability but visual identity. Testing ensured the new visual language resonated with the diverse range of citizens using council services.`,
        images: [
          { url: '/images/early-UIs.webp', alt: 'WCC early UI designs' },
        ],
      },
      {
        title: 'Layout guides',
        body: `Layouts were created for all the page template types to ensure all components could scale and would fit across all screen types.`,
        images: [
          { url: '/images/layout.webp', alt: 'WCC layout guides' },
        ],
      },
      {
        title: 'Final designs & style guide',
        body: `Final designs were produced for all template types and screens. A style guide was created covering typography, colour and interactions.`,
        images: [
          { url: '/images/final-1.webp', alt: 'WCC final designs' },
          { url: '/images/styleguide-2.webp', alt: 'WCC style guide' },
        ],
      },
    ],
  },
  {
    slug: 'knight-frank',
    title: 'Knight Frank',
    subtitle: 'Visual design',
    services: ['Visual design'],
    tags: ['UI'],
    heroImage: '/images/START-2.webp',
    heroImageAlt: 'Knight Frank sales dashboard',
    body: `Knight Frank is the UK's leading independent real estate consultancy and needed a better designed dashboard for their sales associates. After initial wireframes a set of visual designs were created which were tested with their sales associates leading to an adapted final design.`,
    sections: [
      {
        title: 'Wireframe',
        body: `Initial wireframes established the layout and information hierarchy for the dashboard, focusing on the key tasks sales associates perform daily.`,
        images: [
          { url: '/images/wireframesmall.webp', alt: 'Knight Frank wireframe' },
        ],
      },
      {
        title: 'Initial & final designs',
        body: `Initial visual designs were developed and tested with sales associates before being iterated into the final dashboard design.`,
        images: [
          { url: '/images/UI-versions.webp', alt: 'Knight Frank initial designs' },
          { url: '/images/finalsmall.webp', alt: 'Knight Frank final design' },
        ],
      },
    ],
  },
  {
    slug: 'wonderbill',
    title: 'WonderBill',
    subtitle: 'Startup to provide automatic comparison and switching of energy suppliers.',
    services: ['UX Design', 'Visual design', 'User Research'],
    tags: ['UX', 'UI', 'Resarch'],
    heroImage: '/images/iphone6_angle_gld_01.webp',
    heroImageAlt: 'WonderBill app design',
    body: `WonderBill is a company that was started at the end of an innovation project to discover innovative ways to help energy customers. After a series of workshops and interviews the decision was made to create a platform that would allow customers to have all their bills in one place and the system to learn about their usage to enable automatic switching.\n\nMy role was to facilitate the design process with my team. We were involved from early stage discovery phase, through proposition testing to design and development of the platform to Alpha and Beta launches.`,
    sections: [
      {
        title: 'Personas',
        body: `Detailed user personas were created based on extensive research into energy customer behaviour, motivations and pain points.`,
        images: [
          { url: '/images/A1_OneBill_Personas_2016-06-27-4.webp', alt: 'WonderBill personas' },
        ],
      },
      {
        title: 'Wireframes & interviews',
        body: `Wireframes were used for initial concept testing to help define feature priority. Proposition test interviews were conducted across both the UK and USA.`,
        images: [
          { url: '/images/earwires.webp', alt: 'WonderBill early wireframes' },
          { url: '/images/interviews.webp', alt: 'WonderBill interviews' },
        ],
      },
      {
        title: 'IA & user flows',
        body: `The onboarding user flow and information architecture of the top level features were developed to ensure a coherent experience as the product grew.`,
        images: [
          { url: '/images/userflow.webp', alt: 'WonderBill onboarding user flow' },
          { url: '/images/what.webp', alt: 'WonderBill information architecture' },
        ],
      },
      {
        title: 'Visual design',
        body: `Final visuals were produced for the beta launch, including the landing page design and adaptive wireframes for key flows.`,
        images: [
          { url: '/images/finalUI.webp', alt: 'WonderBill final visual design' },
          { url: '/images/final.webp', alt: 'WonderBill landing page' },
        ],
      },
    ],
  },
  {
    slug: 'lego',
    title: 'LEGO',
    subtitle: 'Online store and delivery fulfilment screens.',
    services: ['UX Design', 'Visual Design'],
    tags: ['UX', 'UI'],
    heroImage: '/images/START-1.webp',
    heroImageAlt: 'LEGO online store design',
    body: `LEGO had up to this point relied on third parties to fulfil their orders. We designed their first online store and delivery fulfilment flows and designs. In keeping with LEGO's brand all designs were vibrant with all wireframes and initial designs kept at a high visual standard throughout.`,
    sections: [
      {
        title: 'Sitemap',
        body: `A comprehensive sitemap was developed to map out the online store and order fulfilment flows.`,
        images: [
          { url: '/images/CnC_userflow.webp', alt: 'LEGO sitemap and user flow' },
        ],
      },
      {
        title: 'Order tracking UI concepts & final designs',
        body: `Multiple UI concepts were explored for the order tracking experience, consistent with LEGO's vibrant brand identity. Final designs brought these concepts to a polished, high visual standard across all screens.`,
        images: [
          { url: '/images/lego-2.webp', alt: 'LEGO order tracking concept' },
          { url: '/images/lego-3.webp', alt: 'LEGO order tracking concept 2' },
          { url: '/images/lego-1.webp', alt: 'LEGO order tracking concept 3' },
          { url: '/images/finalartwork.webp', alt: 'LEGO final designs' },
        ],
      },
    ],
  },
  {
    slug: 'bnp-paribas',
    title: 'BNP Paribas',
    subtitle: 'Three year vision across five routes: mortgages, private & business banking, small business and personal loans.',
    services: ['UX Design', 'Visual Design'],
    tags: [ 'UX', 'UI'],
    heroImage: '/images/iphone6_angle_gld_01-1.webp',
    heroImageAlt: 'BNP Paribas digital vision',
    body: `This 16 week project involved getting five different countries' teams to participate in multiple ideation and discovery sessions. We worked with existing and new customer research to understand the pain points and frustrations of existing and future customers.\n\nA unique challenge of this job was that each country bank had a different system under different country-specific legislation. We worked with the country teams to find commonality in the systems and legislation to produce a core product and vision for the customer.\n\nThe production phase involved creating narratives for each customer journey through storyboards and then working those into low fidelity wireframes and then into working prototypes.`,
    sections: [
      {
        title: 'Workshops',
        body: `Workshops and ideation sessions were held across five countries with stakeholders and clients. Social and technological trend posters helped the client explore alternative approaches to banking.`,
        images: [
          { url: '/images/workshops.webp', alt: 'BNP Paribas workshops' },
          { url: '/images/client-play.webp', alt: 'BNP Paribas client playback sessions' },
          { url: '/images/dp1.webp', alt: 'BNP Paribas trend posters' },
        ],
      },
      {
        title: 'Personas & experience maps',
        body: `Personas and customer journeys were created for each of the five routes, mapping the full experience for each archetype across the five countries.`,
        images: [
          { url: '/images/mortscreen.webp', alt: 'BNP Paribas mortgage persona' },
          { url: '/images/privscreen.webp', alt: 'BNP Paribas private customer persona' },
        ],
      },
      {
        title: 'Wireframes & prototypes',
        body: `Wireframes and interactive prototypes were produced for each journey. A video was also produced for the mortgage route to help sell the concept to internal BNP Paribas teams.`,
        images: [
          { url: '/images/story1.webp', alt: 'BNP Paribas user story 1' },
          { url: '/images/story2.webp', alt: 'BNP Paribas user story 2' },
          { url: '/images/wire2.webp', alt: 'BNP Paribas wireframes - buy a house' },
          { url: '/images/wire2-1.webp', alt: 'BNP Paribas wireframes - private customer' },
          { url: '/images/corpscreen.webp', alt: 'BNP Paribas corporate customer prototype' },
          { url: '/images/video.webp', alt: 'BNP Paribas mortgage video' },
        ],
      },
    ],
  },
  {
    slug: 'axa',
    title: 'AXA',
    subtitle: 'Four digital startup concepts developed for AXA\'s digital ventures team.',
    services: ['UX Design', 'Visual Design'],
    tags: ['UX', 'UI'],
    heroImage: '/images/START-3.webp',
    heroImageAlt: 'AXA digital startup concepts',
    body: `AXA wanted to develop new digital startups to leverage their network and core services. The four services here were developed in conjunction with their digital ventures team for them to spin up when the project finished.`,
    sections: [
      {
        title: 'Driven',
        body: `Driven allowed users to book fuss-free car repairs, services and MOTs with car pick-up and return.`,
        images: [
          { url: '/images/screens-1.webp', alt: 'AXA Driven app' },
        ],
      },
      {
        title: 'Policy Angel',
        body: `Policy Angel used a few personal questions to help users build a suite of insurance policies tailored to their individual circumstances.`,
        images: [
          { url: '/images/inter.webp', alt: 'AXA Policy Angel app' },
        ],
      },
      {
        title: 'Spaced',
        body: `Spaced allows users to book driveways as well as commercial and private car parks to park their car.`,
        images: [
          { url: '/images/Ops_Check-credentials_AS-IS.webp', alt: 'AXA Spaced app' },
        ],
      },
      {
        title: 'Wingman',
        body: `Wingman is the ultimate redecoration and odd job booking tool — connecting users with trusted tradespeople for home improvement tasks.`,
        images: [
          { url: '/images/video-1.webp', alt: 'AXA Wingman app' },
        ],
      },
    ],
  },
  {
    slug: 'hsbc',
    title: 'HSBC',
    subtitle: 'Customer payments tracker.',
    services: ['UX Design', 'Visual Design'],
    tags: ['UX', 'UI'],
    heroImage: '/images/START-4.webp',
    heroImageAlt: 'HSBC payments tracker dashboard',
    body: `A re-engineering of the existing customer journey for corporate tracking of payments. The previous system was spread across several departments and didn't allow for the tracing of payments that had left the HSBC ecosystem. The new system created an easy to understand dashboard that allowed the tracing of single payments or multiple payments, and receive reporting on all of them.`,
    sections: [
      {
        title: 'Sitemap',
        body: `A new sitemap was developed to consolidate what had been a fragmented, multi-department process into a single coherent service.`,
        images: [
          { url: '/images/Screen+Shot+2017-01-25+at+13.13.48.webp', alt: 'HSBC sitemap' },
        ],
      },
      {
        title: 'Wireframes & final design',
        body: `Wireframes were developed and tested before being refined into final UI designs. The resulting dashboard provided clear visibility of all payment states with comprehensive reporting capabilities.`,
        images: [
          { url: '/images/wires2.webp', alt: 'HSBC wireframes' },
          { url: '/images/screens.webp', alt: 'HSBC final design' },
        ],
      },
    ],
  },
  {
    slug: 'fare-pilot',
    title: 'Fare Pilot',
    subtitle: 'Startup for taxi drivers to increase revenue.',
    services: ['UX Design', 'Visual Design'],
    tags: ['UX', 'UI'],
    heroImage: '/images/iphone6_angle_wht_01.webp',
    heroImageAlt: 'Fare Pilot app for taxi drivers',
    body: `Fare Pilot is an application that gives taxi drivers visibility of where they can secure fares. The application uses realtime analytics of crowd movements, analysis of large events within a city and historical daily data.\n\nThe original idea came with other assumptions about what would be an ideal feature set for a taxi driver. This allowed us to produce an early prototype to test with drivers in interviews before refining that into a working prototype deployed to a set of working drivers in an alpha test.`,
    sections: [
      {
        title: 'Personas',
        body: `Detailed driver personas were created from research into taxi driver behaviour, motivations, income goals, and frustrations with existing navigation and dispatch tools.`,
        images: [
          { url: '/images/Screen+Shot+2017-02-01+at+10.01.55.webp', alt: 'Fare Pilot personas' },
        ],
      },
      {
        title: 'Interviews & alpha test',
        body: `Proposition interviews were conducted with taxi drivers to test the initial features. An alpha test was run with a UX designer operating the software manually and pointing drivers to hotspots. Post-alpha interviews with drivers who used the app for two weeks provided critical learning.`,
        images: [
          { url: '/images/interviews2.webp', alt: 'Fare Pilot proposition interviews' },
          { url: '/images/alpha.webp', alt: 'Fare Pilot alpha test' },
          { url: '/images/Screen+Shot+2017-02-01+at+11.51.10.webp', alt: 'Fare Pilot post-alpha interviews' },
        ],
      },
      {
        title: 'Wireframes & visual design',
        body: `Early wireframes were created for proposition testing, followed by revised wireframes to validate the refined feature set. Visual designs for the beta launch incorporated second stage branding.`,
        images: [
          { url: '/images/wireframes.webp', alt: 'Fare Pilot early wireframes' },
          { url: '/images/wires.webp', alt: 'Fare Pilot revised wireframes' },
          { url: '/images/finalUI.webp', alt: 'Fare Pilot visual design' },
        ],
      },
    ],
  },
  {
    slug: 'paralympicsgb',
    title: 'ParalympicsGB',
    subtitle: 'Brand creation for the British Paralympics Association.',
    services: ['Visual Design'],
    tags: ['Branding'],
    heroImage: '/images/StuartOgier_Jan15_Portfolio19a.webp',
    heroImageAlt: 'ParalympicsGB brand identity',
    body: `The British Paralympics Association rebranded Paralympics UK as the governing body for all paralympic athletes. The new identity is a strong and resolute lion with a mane that reflects the Olympic torch. The branding is used by the team at all major paralympic events and worn by the athletes.`,
    sections: [
      {
        title: 'Brand identity',
        body: `A completely new visual identity was created for the British Paralympics Association — a strong, resolute lion whose mane echoes the shape of the Olympic torch. The identity needed to project strength and pride while being versatile enough for use across team kit, signage, broadcast, and digital contexts.`,
        images: [
          { url: '/images/StuartOgier_Jan15_Portfolio19a.webp', alt: 'ParalympicsGB brand identity' },
          { url: '/images/StuartOgier_Jan15_Portfolio19b.webp', alt: 'ParalympicsGB branding in use' },
          { url: '/images/StuartOgier_Jan15_Portfolio19d.webp', alt: 'ParalympicsGB logo detail' },
          { url: '/images/StuartOgier_Jan15_Portfolio19c.webp', alt: 'ParalympicsGB brand applications' },
        ],
      },
    ],
  },
];

export function getProject(slug) {
  return projects.find(p => p.slug === slug);
}
