export type ProcessStep = {
    title: string;
    description: string;
};

export type ProjectData = {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    tags: string[];
    image: string;
    color: string;
    figmaLink: string;
    deviceType: 'mobile' | 'web';
    overview: string;
    goal: string;
    role: string;
    impact: string;
    challenge: string;
    process: ProcessStep[];
    designDecisions: { decision: string; reason: string }[];
    outcome: string;
};

export const projects: ProjectData[] = [
    {
        id: "qonaq-health",
        slug: "qonaq-health",
        title: "Qonaq Health",
        subtitle: "A healthcare and wellness tourism platform that makes global medical treatment, recovery, and holistic wellness feel guided and trustworthy.",
        tags: ["UI/UX Design", "Figma", "Web Design", "Healthcare"],
        image: "/projects/qonaq-uhd.png",
        color: "#3b82f6",
        figmaLink: "https://www.figma.com/design/BKuGfZMcFnlwhHyITypED7/Qonaq---Portfolio?node-id=0-1&t=PKt3Hbbi6zXJT8qS-1",
        deviceType: 'web' as const,
        goal: "Create a trusted digital experience that simplifies medical tourism — making it easy for international users to find hospitals, book doctors, and plan their entire wellness journey in one place.",
        role: "UI/UX Designer (Solo)",
        impact: "A conversion-focused, multilingual website that makes complex medical tourism feel guided, reliable, and accessible at a glance.",
        challenge: "Medical tourism is inherently complex and anxiety-inducing — users are dealing with health decisions, foreign hospitals, travel logistics, and language barriers simultaneously. The design had to reduce that friction dramatically while projecting global-scale credibility.",
        overview: "Qonaq Health and Wellness is a healthcare and wellness tourism platform that connects users with global hospitals, doctors, and wellness retreats — acting as a one-stop solution for medical treatments, recovery journeys, and holistic wellness experiences including travel, accommodation, and post-treatment support. From a UI/UX perspective, the website stands out with a clean, structured layout and strong visual hierarchy that immediately communicates trust and scale through key metrics. The design balances emotional appeal with functional clarity, making a complex process — medical tourism — feel simple, guided, and conversion-focused.",
        process: [
            {
                title: "Understanding the Medical Tourism User",
                description: "People using a medical tourism platform are in a vulnerable, high-stakes situation — dealing with health decisions, foreign hospitals, and travel logistics all at once. I mapped the emotional journey from initial health concern through hospital comparison and booking, and let that emotional context shape every design decision.",
            },
            {
                title: "Establishing Trust at First Glance",
                description: "The homepage opens with credibility metrics — number of hospitals, doctors, and wellness centers. Users need to see proof of scale before they engage. I front-loaded these numbers prominently as the first thing users see after the hero.",
            },
            {
                title: "Information Architecture",
                description: "With services spanning hospitals, treatments, wellness retreats, travel, and accommodation, the IA challenge was substantial. I designed a navigation system with well-defined categories (Hospitals, Treatments, Wellness) that kept distinct user intents separate and never overlapping — making user journeys straightforward even for first-time visitors.",
            },
            {
                title: "Card-Based Browsing System",
                description: "Hospital and retreat discovery is a comparison task. I designed a card system that surfaces the most decision-relevant information in a scannable format. Cards enhance scannability and decision-making without overwhelming users with detail.",
            },
            {
                title: "Multilingual & Global UX",
                description: "Medical tourism users come from across the world. I integrated multilingual support and designed the interface to work across cultural contexts — using universally understood icons, clear CTAs, and imagery that reflects a global, inclusive platform.",
            },
        ],
        designDecisions: [
            {
                decision: "Dual primary CTAs: 'Book Appointment' and 'Get Treatment Plan'",
                reason: "These two CTAs capture distinct user intents — the action-ready user and the research-phase user. Offering both paths prevents drop-off from either segment and increases overall conversion across the funnel.",
            },
            {
                decision: "Wellness imagery over clinical photography",
                reason: "Clinical hospital photography creates anxiety. I used calm, aspirational wellness imagery to emotionally reframe the experience as healing and empowering, not intimidating — which is critical for a platform asking users to make high-stakes health decisions.",
            },
            {
                decision: "Metrics block above the fold",
                reason: "Showing hospitals, doctors, and wellness center counts at the hero immediately establishes scale and social proof. It tells users they're not alone in choosing this platform and that the network is large enough to find what they need.",
            },
        ],
        outcome: "Qonaq Health became a premium digital medical tourism experience that feels reliable, informative, and conversion-focused. The design successfully collapsed a complex, multi-step process — finding hospitals, booking doctors, planning travel and recovery — into a guided, calm, and trustworthy digital journey that works for international users across languages and health contexts.",
    },
    {
        id: "healthy-bharat",
        slug: "healthy-bharat",
        title: "Healthy Bharat",
        subtitle: "A Healthy Bharat mobile app unifying doctors, patients, and emergency health data in one calm, role-based ecosystem.",
        tags: ["Mobile App", "UI/UX", "Healthcare", "Figma"],
        image: "/projects/healthy-bharat-thumbnail.png",
        color: "#10b981",
        figmaLink: "https://www.figma.com/design/lqUw8N4COd824tvGuIbktc/DRAFT---Healthy-Bharat?node-id=91-25&t=50e0kREEwo9XjcoC-1",
        deviceType: 'mobile' as const,
        goal: "Simplify a highly complex, fragmented healthcare experience into a clean, intuitive mobile interface where doctors and patients interact seamlessly — with critical data accessible within seconds, even in emergencies.",
        role: "UI/UX Designer (Solo)",
        impact: "A complete, scalable mobile design system for three user types — Patient, Doctor, Emergency — with a QR-first architecture, visual health data, and multi-language support.",
        challenge: "Healthcare apps often fail because they try to serve everyone the same way. A doctor's needs during a consultation are completely different from a patient's daily health management needs. Building one app that works fluently for both — without confusion — required a deeply considered role-based architecture.",
        overview: "Healthy Bharat is an end-to-end healthcare mobile app that addresses India's fragmented medical ecosystem. Patients manage their own records, doctors lack instant access to full history, and emergencies are complicated by missing data. The app uses QR-based health profiles for instant access to critical information, while providing separate, role-based flows for doctors and patients within a single unified design system. The entire system is built to feel reliable, calm, and efficient — solving a real healthcare problem through thoughtful interaction design and a scalable design system.",
        process: [
            {
                title: "Mapping the Fragmentation Problem",
                description: "I started by documenting every friction point in India's current healthcare experience: patients carrying physical reports to appointments, doctors making decisions without full history, emergencies where critical health data is unavailable. Each friction point became a specific design opportunity.",
            },
            {
                title: "QR-Based Emergency Access Architecture",
                description: "The QR health profile was the most critical UX decision. In an emergency, there's no time to log in or navigate. I designed a QR code that surfaces the patient's critical data — blood type, allergies, medications, emergency contacts — instantly, without requiring an account for first responders.",
            },
            {
                title: "Role-Based Dual Flow Design",
                description: "I designed separate but visually consistent flows for doctors and patients, ensuring role-based clarity while maintaining a unified design language. The Patient flow covers health dashboards, report uploads, appointment booking, medicine reminders, and health graphs. The Doctor flow covers patient queue, consultation history, prescription writing, and earnings.",
            },
            {
                title: "Color System for Health Status",
                description: "The color palette — green for normal, orange for attention, purple for primary actions — was chosen to communicate health status without text. A patient with an abnormal lab result sees an orange indicator immediately, without needing to read the value. This reduces cognitive overload in critical moments.",
            },
            {
                title: "Visual Data Over Text-Heavy Interfaces",
                description: "Medical data is inherently text-heavy. I replaced walls of numbers with visual graphs for health trends, structured cards for lab reports, and icon-led prescription layouts. This helps patients better understand their health trends and helps doctors make faster decisions during consultations.",
            },
        ],
        designDecisions: [
            {
                decision: "Deep navy dark theme with green, orange, and purple accents",
                reason: "Healthcare apps are used at all hours — early morning for lab bookings, late night for emergencies. A deep navy base reduces eye strain and feels premium. The three-color accent system communicates health status instantly without requiring users to read labels.",
            },
            {
                decision: "Multi-language support in doctor explanations",
                reason: "When a doctor writes a prescription or note, patients often don't understand medical terminology in English. A dedicated explanation field where doctors can write in the patient's preferred language reduces confusion, improves compliance, and builds trust.",
            },
            {
                decision: "Reminder system designed to be helpful, not intrusive",
                reason: "Medicine and follow-up reminders are only useful if users don't dismiss them out of irritation. I designed the reminder system with smart timing, clear snooze options, and a minimal visual footprint — effective at driving engagement without disrupting daily life.",
            },
        ],
        outcome: "Healthy Bharat became a complete, user-centric healthcare ecosystem — not just a collection of screens. The role-based architecture, QR-first emergency access, visual health data system, and multi-language support combine to solve a real problem through thoughtful design. This project reflects my ability to design not just interfaces, but complete experiences that align with real-world behaviors, constraints, and the high stakes of healthcare.",
    },
    {
        id: "luumpa",
        slug: "luumpa",
        title: "Luumpa",
        subtitle: "A D2C functional beverage brand website blending gut-friendly health messaging with bold, nostalgic branding and conversion-focused UX.",
        tags: ["3D Animation", "Figma", "Web Design", "Landing Page"],
        image: "/projects/luumpa-final.png",
        color: "#fbbf24",
        figmaLink: "https://www.figma.com/design/KVpVVHp1TVLe2EavtgnCZt/Luumpa---portfolio?node-id=0-1&t=dUFugAk7IJqaWkIV-1",
        deviceType: 'web' as const,
        goal: "Design a bold, conversion-focused D2C website that communicates Luumpa's health credentials and brand personality simultaneously — making users want to trust the product and buy it.",
        role: "UI/UX Designer & Visual Designer (Solo)",
        impact: "A digital brand experience where health-conscious messaging and nostalgic fun coexist — resulting in a site that converts and that people want to share.",
        challenge: "Functional beverage branding has a core tension: health-focused messaging can feel clinical and boring, while nostalgic fun messaging can undermine health credibility. The design had to hold both identities simultaneously — which required precise control over tone, visual language, and copywriting.",
        overview: "Drink Luumpa is a modern functional beverage brand offering gut-friendly hydration — low-calorie, no added sugar drinks enriched with prebiotic fibre and electrolytes, positioned as a healthier alternative to traditional soft drinks while delivering a nostalgic, fun experience. The website needed to communicate this dual identity: health-conscious enough to convert wellness buyers, fun enough to feel like a brand people genuinely want to be part of. The design is clean and conversion-focused, with copywriting playing a major role in the UX — making users feel understood before they even read the ingredients.",
        process: [
            {
                title: "Brand Personality Definition",
                description: "Before touching Figma, I built a brand moodboard positioning Luumpa at the intersection of nostalgic fun (retro naming like 'Retro Cola' and 'Lazy Lemon') and modern wellness (gut health, electrolytes, zero sugar). This dual identity became the north star for every subsequent design decision.",
            },
            {
                title: "Copywriting-Led UX",
                description: "Unlike most websites where copy is added after design, I designed around the copy. Relatable moments — 'before gym,' 'after food,' 'midday slump' — serve as section anchors, connecting product benefits to real moments in users' lives. This approach makes the value proposition feel human, not clinical.",
            },
            {
                title: "Visual Hierarchy for Health Benefits",
                description: "Key benefits — zero added sugar, low calories, gut health, electrolytes — needed to be immediately visible without creating a label-reading experience. I designed a scannable benefits display using icons and short labels so users understand the product's differentiation in under three seconds.",
            },
            {
                title: "Product Section & Purchase Flow",
                description: "The product browsing section uses card-based layouts with minimal friction CTAs. I kept the path from 'see product' to 'add to cart' as short as possible — no unnecessary steps, no competing upsells during browsing. The goal was awareness to purchase with the fewest possible decisions.",
            },
            {
                title: "Social Proof & Community Integration",
                description: "For a new-age D2C brand, peer validation matters more than brand claims. Community testimonials and user-generated content are embedded into the design at strategic points to reinforce trust before and after the product section.",
            },
        ],
        designDecisions: [
            {
                decision: "Nostalgic product naming ('Retro Cola', 'Lazy Lemon') as the visual hero",
                reason: "Product names carry emotional weight. I designed product cards so the name is the typographic hero — large, expressive, and playful — making even the name feel like part of the brand experience and improving recall.",
            },
            {
                decision: "Relatable micro-moment copywriting as UX anchors",
                reason: "'Before gym,' 'after food,' 'midday slump' are not just taglines — they organize content around real moments rather than product features. This makes the UX conversational and personally relevant, which dramatically improves engagement and connection to the product.",
            },
            {
                decision: "Lightweight, distraction-free page architecture",
                reason: "D2C conversion depends on keeping users focused on the product path. I eliminated visual clutter, reduced competing CTAs, and kept the page fast and minimal — ensuring users move smoothly from product discovery to purchase without getting lost.",
            },
        ],
        outcome: "The Luumpa website became a digital brand experience that holds two identities simultaneously: health-credible and genuinely fun. The copywriting-led UX, scannable benefits hierarchy, nostalgic product design, and distraction-free purchase flow created a D2C wellness brand site that feels fresh, approachable, and conversion-ready — the kind of brand you discover and immediately send to someone you know.",
    },
    {
        id: "cantech",
        slug: "cantech",
        title: "Cantech",
        subtitle: "A modern tech portfolio website designed to communicate innovation, credibility, and scale through structured visual storytelling.",
        tags: ["Web Design", "Corporate UI", "Figma", "Tech"],
        image: "/projects/cantech-v5-final.png",
        color: "#06b6d4",
        figmaLink: "https://www.figma.com/design/LAD4WVkd5Oj9jO0FrPaOFE/Cantech---portfolio?node-id=0-1&t=FDREx0lJn8sYFj9X-1",
        deviceType: 'web' as const,
        goal: "Design a modern corporate tech website that communicates brand positioning, service capability, and proof of work — guiding users from first impression to conviction within a single scrolling journey.",
        role: "UI/UX Designer (Solo)",
        impact: "A professional portfolio website that communicates brand value and technical capability within seconds — built for scalability as work and services grow over time.",
        challenge: "Corporate tech websites are a sea of sameness — blue gradients, stock photography, and buzzword-heavy hero sections that all look identical. The design needed to be visually distinctive while maintaining the professionalism that clients and recruiters expect. Being too 'creative' was as risky as being too generic.",
        overview: "Cantech is a modern tech-driven digital presence designed to clearly communicate innovation, credibility, and product capability through a clean and structured UI system. The design follows a minimal and professional aesthetic with consistent spacing, grid alignment, and a well-defined visual hierarchy that guides users smoothly from introduction to detailed sections — services, case studies, and portfolio work. Each section is structured to support storytelling: starting from brand positioning, moving into capabilities, and ending with proof of work — ensuring a logical and engaging user journey.",
        process: [
            {
                title: "Structuring the Brand Story",
                description: "The site's IA follows a deliberate storytelling arc: brand positioning (hero) → capabilities (services) → proof (portfolio/case studies) → credibility (team) → action (contact). This mirrors the mental journey of an evaluating client, building conviction progressively before asking for action.",
            },
            {
                title: "Grid & Typography System",
                description: "I established a strict 12-column grid and a clear typographic scale (Display → Heading → Body → Caption). Every section locks to this system — creating underlying rhythm and order that communicates professionalism and craftsmanship without being stated explicitly.",
            },
            {
                title: "Whitespace as a Design Tool",
                description: "The most important design decision was restraint. Heavy use of whitespace signals confidence — a brand that doesn't need to shout because its work speaks for itself. I used whitespace deliberately to create breathing room and direct focus onto key content.",
            },
            {
                title: "Card-Based Service & Portfolio Layouts",
                description: "Services and portfolio work are complex information. I designed card-based components that surface the most important attributes in a digestible format — making complex capability feel approachable and scannable for users evaluating the brand quickly.",
            },
            {
                title: "No Stock Photography Policy",
                description: "Stock images of handshakes and server rooms immediately undermine credibility. I replaced all photography with geometric data visualizations, abstract tech illustrations, and icon-based infographics — imagery unique to the brand that reinforces a tech-forward identity.",
            },
        ],
        designDecisions: [
            {
                decision: "Storytelling-first section structure",
                reason: "Starting with brand positioning, moving into capabilities, then proof of work ensures users build conviction progressively. By the time they reach the contact section, they've already understood why Cantech is the right choice — reducing friction at the conversion point.",
            },
            {
                decision: "Minimal color palette with high-contrast typography",
                reason: "A restrained palette communicates discipline and focus. High-contrast typography ensures readability across all contexts and reinforces the brand's clarity of thought — which is itself a credibility signal for a tech company.",
            },
            {
                decision: "Scalable component architecture",
                reason: "A portfolio site grows over time — new projects, new services, new team members. I designed every component to accommodate new content without breaking the visual system, which is essential for long-term maintainability and consistency.",
            },
        ],
        outcome: "Cantech resulted in a corporate portfolio website that is confident, structured, and genuinely distinctive in the tech space. The storytelling-led section architecture, disciplined grid system, and restraint-first visual approach combine to communicate capability and credibility within seconds — which is exactly what a professional audience needs to feel before they reach out.",
    },
    {
        id: "event-booking-app",
        slug: "event-booking-app",
        title: "Event Booking App",
        subtitle: "A mobile app for discovering and booking local events — fast, dark, and built for the energy of live experiences.",
        tags: ["Mobile App", "Figma", "UI/UX", "iOS"],
        image: "/projects/event-booking-thumbnail.png",
        color: "#f43f5e",
        figmaLink: "https://www.figma.com/design/ofQuP2qOzsHNu99qJeA5VC/Event-Booking-App---Portfolio?node-id=1-2&t=fm815QPQU822Ebbs-1",
        deviceType: 'mobile' as const,
        goal: "Design an iOS mobile app for discovering, filtering, and booking local events — with a premium dark UI that matches the energy of nightlife and live experiences.",
        role: "UI/UX Designer (Solo)",
        impact: "A full end-to-end mobile UI for event discovery and booking, with a distinct dark aesthetic that sets a mood before the event even starts.",
        challenge: "Most event booking apps feel like utility software — functional but emotionally flat. Events are experiences. The design had to match the anticipation and excitement of a concert, festival, or club night — making the app feel like part of the event, not just a ticketing tool.",
        overview: "This is a full mobile app design for iOS — covering event discovery, filtering, event detail pages, seat selection, and booking confirmation. The design philosophy was 'the app is the pre-game' — it should feel as exciting as the event itself. I studied Eventbrite, Dice, RA (Resident Advisor), and Fever to identify the gap: a genuinely premium, dark, magazine-quality event app that treats the pre-event experience as part of the event experience itself.",
        process: [
            {
                title: "Benchmarking Existing Apps",
                description: "I studied Eventbrite, Dice, RA, and Fever. Eventbrite is functional but visually dated. Dice and RA cater to niches. Fever has strong UX but a cluttered visual language. The gap was clear: a premium, dark, editorial event app with a frictionless booking flow.",
            },
            {
                title: "User Flow Mapping",
                description: "I mapped the core journey: Home → Browse/Search → Filter by Date/Type/Location → Event Detail → Ticket Selection → Payment → Confirmation. Each step was designed to minimize friction while maintaining visual excitement throughout.",
            },
            {
                title: "Dark Theme & Color Psychology",
                description: "Nighttime venues, concert lighting, and festival energy are inherently dark environments. The app's dark theme isn't a trend choice — it's contextually appropriate. Accent reds and warm ambers echo stage lighting and create subconscious associations with live energy.",
            },
            {
                title: "Event Card Component Design",
                description: "The event card is the most repeated element in the app. I spent significant time on this: full-bleed event photography, category tags, date chips, and a price badge — all arranged to be scannable in under two seconds and emotionally compelling at first glance.",
            },
            {
                title: "Frictionless Booking Flow",
                description: "The booking flow was designed as three clean steps: Select tickets → Enter details → Pay. Progress indicators, clear error states, and a satisfying confirmation screen were all designed to reduce purchase anxiety and cart abandonment.",
            },
        ],
        designDecisions: [
            {
                decision: "Full-bleed event photography in cards",
                reason: "Events sell emotion. A full-bleed image communicates the vibe of a concert or festival in milliseconds. Cropped or small thumbnails dilute that emotional impact — and emotion is what drives event ticket purchases.",
            },
            {
                decision: "Red/rose accent on a dark base",
                reason: "Red communicates energy, urgency, and exclusivity — 'limited tickets', 'tonight only'. It creates a sense of scarcity and excitement that drives action without feeling aggressive on a dark background.",
            },
            {
                decision: "Location-first search architecture",
                reason: "Event discovery is fundamentally local. I placed location awareness at the top of the home screen throughout the browse experience — because an event three hours away is irrelevant no matter how good it is.",
            },
        ],
        outcome: "The Event Booking App is a full-system mobile design that treats the pre-event experience as part of the event experience itself. The dark, energetic aesthetic and friction-reduced booking flow create an app that people would genuinely want on their phone — not just tolerate as a transactional necessity.",
    },
    {
        id: "event-booking-revamp",
        slug: "event-booking-revamp",
        title: "Event Booking Revamp",
        subtitle: "A self-initiated redesign of the home screen — fixing navigation clarity, improving hierarchy, and elevating the visual language.",
        tags: ["Mobile App", "Redesign", "Figma", "UX Improvement"],
        image: "/projects/event-booking-revamp-thumbnail.png",
        color: "#ec4899",
        figmaLink: "https://www.figma.com/design/lHbXSgOxpbvf4KJZ8Ghv5L/Event-Booking-Revamp---Portfolio?node-id=0-1&t=BfBGH0oi3T2fEQ9P-1",
        deviceType: 'mobile' as const,
        goal: "Revamp the Event Booking App's home screen to improve navigation clarity, fix visual hierarchy issues, and elevate the overall aesthetic to a higher standard.",
        role: "UI/UX Designer (Solo) — Self-initiated redesign",
        impact: "A significantly cleaner, more navigable, and visually refined home screen that elevates the entire app's quality perception.",
        challenge: "Going back to your own work with fresh eyes is harder than it sounds. The original home screen had specific, identifiable problems — but fixing them required dismantling decisions I was originally confident in and rebuilding with what I'd learned since.",
        overview: "This project is a self-initiated redesign of my own Event Booking App. After shipping v1, I returned with fresh eyes and documented specific problems: visually ambiguous navigation, competing information hierarchy, and inconsistent color use. The Revamp focuses exclusively on the home screen — the most critical surface — and treats it as an opportunity to apply everything learned since building the original.",
        process: [
            {
                title: "Auditing the Original Design",
                description: "I documented every problem in the original home screen: navigation icons were too similar in visual weight, the featured event section competed with the search bar, category filters were easy to miss, and the color palette felt muddied. Each issue became a specific design goal.",
            },
            {
                title: "Navigation Redesign",
                description: "The original tab bar used icon-only navigation. Research shows icon-only nav creates confusion unless icons are universally recognizable. I revised the active state treatment and added label reinforcement to make the current section immediately obvious.",
            },
            {
                title: "Visual Hierarchy Restructuring",
                description: "I established a clearer scanning pattern: Location → Search → Featured Event → Category Filters → Events List. This top-to-bottom structure mirrors how people actually discover events — by location first, then intent, then browsing.",
            },
            {
                title: "Refining the Color System",
                description: "The original used red accents inconsistently. In the revamp, the accent color (now a warm pink-rose) is reserved exclusively for interactive CTAs, prices, and 'live now' indicators. Everything else is neutral — making interactive elements instantly obvious.",
            },
            {
                title: "Elevated Component Quality",
                description: "Every component was rebuilt with tighter spacing, better type scales, and more intentional shadow use. The featured event card has a more cinematic aspect ratio, and category filter pills have better tap target sizing for thumb interaction.",
            },
        ],
        designDecisions: [
            {
                decision: "Pink-rose accent shift from the original red",
                reason: "The original red felt aggressive and urgent everywhere — which desensitizes users to its importance. A more nuanced pink-rose preserves the energy while feeling more curated and premium.",
            },
            {
                decision: "Cinematic 16:9 featured event card",
                reason: "The original featured card had an awkward aspect ratio that cropped event photography poorly. 16:9 is the natural format for concert and event photography — making every image look intentional rather than cropped.",
            },
            {
                decision: "Separating 'Near You' from 'Top Events'",
                reason: "The original mixed local and popular events in one section, creating confusion about intent. Separating them into distinct labeled sections gives users clearer mental models and reduces decision fatigue when browsing.",
            },
        ],
        outcome: "The Revamp demonstrates something important: good design is never finished. Going back to my own work with a critical eye produced a significantly better product. Improved navigation clarity, tighter visual hierarchy, and a more intentional color system elevate the home screen from 'good' to 'genuinely polished' — and the process taught me as much as building v1 did.",
    },
];
