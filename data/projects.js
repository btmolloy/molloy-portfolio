window.PORTFOLIO_PROJECTS = [
  {
    "id": "nettower-agentless-network-topology",
    "published": true,
    "title": "NetTower: Agentless Network Topology & Situational Awareness Platform",
    "shortTitle": "NetTower",
    "role": "Capstone Project",
    "timeline": "January 2026 – April 2026",
    "status": "Completed",
    "category": "Networking",
    "problem": "Small and infrastructure-limited networks need clear situational awareness without enterprise monitoring tools or complex configuration.",
    "outcome": "A lightweight, self-hosted platform that discovers devices, infers relationships, enriches hosts, and visualizes changing network state.",
    "summary": "NetTower discovers devices on a local network, enriches host data, and displays inferred connections in an interactive topology.",
    "stack": [
      "Python",
      "Networking",
      "Cybersecurity",
      "MongoDB",
      "Packet Analysis",
      "System Design",
      "Electron",
      "Nmap",
      "Visualization"
    ],
    "tags": [
      "Python",
      "Networking",
      "Cybersecurity",
      "MongoDB",
      "Packet Analysis",
      "System Design",
      "Electron",
      "Nmap",
      "Visualization"
    ],
    "highlights": [
      "Built a lightweight discovery system that identifies devices using passive traffic analysis and active probing.",
      "Developed topology visualization with node and relationship inference for rapid situational awareness.",
      "Implemented real-time state updates and modular backend layers for future expansion."
    ],
    "workflow": [
      {
        "stage": "Discovery",
        "description": "Identify devices through passive traffic analysis and active ICMP, ARP, and Nmap-based probing."
      },
      {
        "stage": "Correlation",
        "description": "Classify hosts and infer device roles and relationships from observed behavior and vendor data."
      },
      {
        "stage": "Storage",
        "description": "Represent discovered devices and changing network state in a modular MongoDB-backed data layer."
      },
      {
        "stage": "Visualization",
        "description": "Render inferred topology in interactive 2D or optional 3D views with activity and density overlays."
      }
    ],
    "visibility": "Public Summary",
    "featured": true,
    "order": 110,
    "links": {
      "live": "",
      "repo": "https://github.com/btmolloy/NetTower-Capstone-Project",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/nettower-agentless-network-topology.svg",
      "alt": "Flat style illustration for NetTower: Agentless Network Topology & Situational Awareness Platform."
    },
    "details": {
      "overview": "NetTower is an agentless network situational awareness platform designed to provide clear, high-level visibility into small or infrastructure-limited networks. It enables users to quickly understand what devices are present, reachable, and how they are generally connected—without relying on enterprise monitoring tools or complex configurations.",
      "problem": "Small and infrastructure-limited networks need an approachable way to see which devices are present, reachable, and generally connected without depending on enterprise monitoring tools or complex configuration.",
      "outcome": "NetTower combines passive and active discovery with host enrichment, dynamic state updates, and interactive topology views in a modular platform designed for local or self-hosted deployment.",
      "limitations": [
        "Device roles, operating systems, and relationships are inferred from observed behavior and vendor data rather than guaranteed identifiers.",
        "Discovery coverage depends on the configured subnet, scan frequency, and selected passive or active methods.",
        "The platform is designed around small or infrastructure-limited network environments."
      ],
      "contributions": [
        "Designed for real-world environments such as home labs, ad-hoc networks, and off-grid systems where traditional monitoring solutions are impractical.",
        "Built a lightweight discovery system that identifies devices using a combination of passive traffic analysis and active probing (ICMP, ARP, and Nmap-based scans).",
        "Developed a topology visualization engine that represents devices as nodes and inferred relationships as connections, supporting both 2D and optional 3D views.",
        "Implemented node-centric exploration, allowing users to inspect individual devices and view enriched metadata such as inferred OS type or device role.",
        "Created host classification logic using observed network behavior and OUI/vendor lookups to visually differentiate device types.",
        "Engineered dynamic updates to reflect real-time network state changes, including device appearance, disappearance, and activity shifts.",
        "Added optional activity and density heat mapping to highlight areas of high communication or device concentration.",
        "Designed interactive navigation features including pan, zoom, and perspective adjustment for efficient network exploration.",
        "Built a modular backend architecture with a discovery layer, data modeling layer, and visualization interface to support scalability and future expansion.",
        "Structured the system for local or self-hosted deployment, avoiding reliance on external cloud infrastructure for core functionality.",
        "Implemented user-controlled scanning parameters, allowing customization of scan frequency, subnet targeting, and discovery scope.",
        "Followed an iterative sprint-based development process, progressing from core discovery to full frontend integration and performance refinement."
      ],
      "notes": [],
      "nextSteps": []
    },
    "gallery": [
      {
        "src": "assets/images/projects/nettower-showcase-01.jpg",
        "alt": "NetTower 2D tree topology view with activity heat."
      },
      {
        "src": "assets/images/projects/nettower-showcase-02.jpg",
        "alt": "NetTower 2D star topology view with activity heat."
      },
      {
        "src": "assets/images/projects/nettower-showcase-03.jpg",
        "alt": "NetTower 3D topology view with activity heat."
      }
    ]
  },
  {
    "id": "secrets-ctf-platform",
    "published": true,
    "title": "SECRETS: Cybersecurity Capture The Flag Platform",
    "shortTitle": "SECRETS",
    "role": "Outreach Developer",
    "timeline": "August 2024 - Present",
    "status": "In progress",
    "category": "Security",
    "problem": "Beginner learners need an accessible path from instruction to realistic, hands-on cybersecurity practice.",
    "outcome": "A workshop-ready CTF ecosystem with guided challenge tracks, unified WordPress and CTFd delivery, and repeatable event deployment.",
    "summary": "I built a beginner-focused CTF platform with guided challenges, WordPress and CTFd delivery, and repeatable event deployment.",
    "stack": [
      "WordPress",
      "Docker",
      "Reverse Proxy",
      "CTFd",
      "Apache"
    ],
    "tags": [
      "Cybersecurity",
      "Web Development",
      "CTF Design",
      "WordPress",
      "Docker",
      "Reverse Proxy",
      "Education"
    ],
    "highlights": [
      "Built practical challenge content across web exploitation, social engineering, and systems security.",
      "Integrated a WordPress frontend with external CTFd infrastructure and reverse proxy routing.",
      "Delivered workshops and guided students through hands-on cybersecurity exercises."
    ],
    "visibility": "Public Summary",
    "featured": true,
    "order": 109,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/secrets-ctf-platform.svg",
      "alt": "Flat style illustration for SECRETS: Cybersecurity Capture The Flag Platform."
    },
    "details": {
      "overview": "SECRETS is a beginner-focused CTF ecosystem designed for accessibility and practical learning. The platform emphasizes guided challenge progression, realistic threat simulation, and workshop-ready delivery.",
      "contributions": [
        "Built challenge tracks across web exploitation, social engineering, and foundational system security.",
        "Integrated WordPress presentation workflows with external CTFd services.",
        "Configured reverse proxy paths and container routing to keep user experience unified."
      ],
      "notes": [
        "Challenge difficulty ladders were tuned for high school and early-college onboarding.",
        "Workshop sessions included facilitator guidance and post-challenge debriefs.",
        "Platform was designed for repeatable event deployment."
      ],
      "nextSteps": [
        "Add instructor dashboards for cohort progress visibility.",
        "Publish challenge authoring templates for faster content expansion.",
        "Introduce analytics on challenge completion bottlenecks."
      ]
    },
    "gallery": [
      {
        "src": "assets/images/projects/secrets-ctf-platform.svg",
        "alt": "Flat style illustration for SECRETS: Cybersecurity Capture The Flag Platform."
      }
    ]
  },
  {
    "id": "axis-secure-modular-dashboard",
    "published": true,
    "title": "Secure Modular Dashboard (Axis)",
    "shortTitle": "Axis",
    "role": "Personal Project",
    "timeline": "October 2024 - Present",
    "status": "In progress",
    "category": "Product",
    "problem": "A modular dashboard needs to remain useful offline while handling local credentials securely and reconnecting to remote services reliably.",
    "outcome": "An offline-first Flutter dashboard with encrypted local credential workflows, retry and failover handling, and modules that can run locally or delegate to backend compute.",
    "summary": "Axis is an offline-first Flutter dashboard with encrypted local credentials, retry and failover handling, and optional backend execution.",
    "stack": [
      "Flutter",
      "Encryption",
      "Offline Systems",
      "Mobile Development",
      "Modular Architecture"
    ],
    "tags": [
      "Flutter",
      "Security",
      "Offline Systems",
      "Encryption",
      "Modular Architecture",
      "Mobile Development"
    ],
    "highlights": [
      "Implemented encrypted local credential storage with secure hashing workflows.",
      "Built connection management for retry, failover, and endpoint switching.",
      "Designed modules to run locally or offload computation to backend services."
    ],
    "visibility": "Public Summary",
    "featured": true,
    "order": 108,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/axis-secure-modular-dashboard.svg",
      "alt": "Flat style illustration for Secure Modular Dashboard (Axis)."
    },
    "details": {
      "overview": "Axis is a modular secure dashboard application designed around offline-first operation. It supports local execution paths while enabling selective synchronization with remote services when available.",
      "contributions": [
        "Implemented encrypted local credential workflows and secure storage patterns.",
        "Built a background connection manager with retry/failover logic.",
        "Designed module boundaries so capabilities can run locally or delegate to backend compute."
      ],
      "notes": [
        "Mobile resource constraints informed memory and battery optimization decisions.",
        "Connection-state transitions were handled with explicit state management patterns.",
        "Architecture supports future home-server synchronization workflows."
      ],
      "nextSteps": [
        "Complete distributed sync strategy with conflict resolution.",
        "Add role-based module access controls.",
        "Expand telemetry for reliability diagnostics."
      ]
    },
    "gallery": [
      {
        "src": "assets/images/projects/axis-secure-modular-dashboard.svg",
        "alt": "Flat style illustration for Secure Modular Dashboard (Axis)."
      }
    ]
  },
  {
    "id": "portfolio-with-secure-authentication",
    "published": true,
    "title": "Portfolio Website with Secure Authentication",
    "shortTitle": "Secure Portfolio",
    "role": "Personal Project",
    "timeline": "March 2025 - Present",
    "status": "In progress",
    "category": "Web",
    "problem": "A home-hosted portfolio needs secure public access and manageable content without directly exposing the server.",
    "outcome": "A hardened portfolio deployment with TOTP MFA, secure session handling and headers, Cloudflare Tunnel access, and JSON-backed content updates.",
    "summary": "I deployed this portfolio from a home server with TOTP authentication, secure session handling, Cloudflare Tunnel, and JSON-backed content.",
    "stack": [
      "PHP",
      "Apache",
      "Cloudflare",
      "Authentication",
      "Bootstrap"
    ],
    "tags": [
      "Web Development",
      "PHP",
      "Security",
      "Apache",
      "Cloudflare",
      "Authentication",
      "Bootstrap"
    ],
    "highlights": [
      "Implemented session hardening, security headers, and TOTP-based MFA.",
      "Configured Cloudflare Tunnel for secure public access without direct server exposure.",
      "Built a JSON-backed content management interface for dashboard-based updates."
    ],
    "visibility": "Public Summary",
    "featured": false,
    "order": 107,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/portfolio-with-secure-authentication.svg",
      "alt": "Flat style illustration for Portfolio Website with Secure Authentication."
    },
    "details": {
      "overview": "This portfolio deployment focuses on practical web security controls in a home-hosted environment. The system combines hardened session handling with secure external access and lightweight content management.",
      "contributions": [
        "Implemented session hardening, security headers, and TOTP-based MFA.",
        "Configured Cloudflare Tunnel for secure public access without direct server exposure.",
        "Built a JSON-backed content management interface for dashboard-based updates."
      ],
      "notes": [
        "Security headers and session controls were integrated to reduce common web attack surfaces.",
        "Cloudflare Tunnel removes the need to expose inbound ports directly.",
        "Content editing was structured through JSON-driven modules for operational simplicity."
      ],
      "nextSteps": [
        "Add fine-grained audit logging for authenticated content edits.",
        "Expand admin-side content preview workflows.",
        "Introduce staged publishing controls."
      ]
    },
    "gallery": [
      {
        "src": "assets/images/projects/portfolio-with-secure-authentication.svg",
        "alt": "Flat style illustration for Portfolio Website with Secure Authentication."
      }
    ]
  },
  {
    "id": "mindspace-file-based-journaling-system",
    "published": true,
    "title": "MindSpace: File-Based Journaling System",
    "shortTitle": "MindSpace",
    "role": "Personal Project",
    "timeline": "April 2025 - Present",
    "status": "In progress",
    "category": "Web",
    "problem": "A journaling tool should keep entries transparent, portable, and searchable without creating database lock-in.",
    "outcome": "A file-system-first journaling application with structured text storage, metadata indexing, search, editing, deletion, and directory cleanup workflows.",
    "summary": "MindSpace stores journal entries as structured text files and indexes their metadata for search and editing.",
    "stack": [
      "PHP",
      "File Systems",
      "Search",
      "Backend Development",
      "UX"
    ],
    "tags": [
      "PHP",
      "File Systems",
      "Backend Development",
      "Search",
      "Data Structuring",
      "UX"
    ],
    "highlights": [
      "Stored entries as structured text files by year and month with metadata indexing.",
      "Built create, edit, search, and delete workflows through a web interface.",
      "Implemented directory cleanup logic to maintain consistent filesystem state."
    ],
    "visibility": "Public Summary",
    "featured": false,
    "order": 106,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/mindspace-file-based-journaling-system.svg",
      "alt": "Flat style illustration for MindSpace: File-Based Journaling System."
    },
    "details": {
      "overview": "MindSpace is a file-system-first journaling application built for transparency, portability, and direct data ownership. It avoids database lock-in by organizing entries as structured text content.",
      "contributions": [
        "Stored entries as structured text files by year and month with metadata indexing.",
        "Built create, edit, search, and delete workflows through a web interface.",
        "Implemented directory cleanup logic to maintain consistent filesystem state."
      ],
      "notes": [
        "Metadata parsing enables efficient tag/date filtering with straightforward files.",
        "Directory cleanup routines keep storage hierarchy consistent over time.",
        "The interface prioritizes simple editing and retrieval workflows."
      ],
      "nextSteps": [
        "Add optional local encryption workflows for sensitive entries.",
        "Expand search controls for multi-tag weighted matching.",
        "Implement export presets for long-term archive snapshots."
      ]
    },
    "gallery": [
      {
        "src": "assets/images/projects/mindspace-file-based-journaling-system.svg",
        "alt": "Flat style illustration for MindSpace: File-Based Journaling System."
      }
    ]
  },
  {
    "id": "campus-server-network-operations",
    "published": true,
    "title": "Campus Server and Network Operations",
    "shortTitle": "Campus Server & Network Operations",
    "role": "Server Team Analyst",
    "timeline": "August 2023 - Present",
    "status": "In progress",
    "category": "Infrastructure",
    "problem": "Production campus systems require reliable identity administration, routine maintenance, and coordinated hardware support.",
    "outcome": "Ongoing support for Active Directory provisioning, policy enforcement, production patching, server maintenance, and Dell hardware lifecycle operations.",
    "summary": "I support Active Directory provisioning, policy enforcement, server patching, Cisco networking, and Dell hardware maintenance for campus systems.",
    "stack": [
      "Windows Server",
      "Active Directory",
      "Cisco",
      "Infrastructure",
      "IT Operations"
    ],
    "tags": [
      "Windows Server",
      "Active Directory",
      "Networking",
      "Cisco",
      "Infrastructure",
      "IT Operations"
    ],
    "highlights": [
      "Managed Active Directory provisioning and policy enforcement processes.",
      "Performed routine updates, patching, and server maintenance in production environments.",
      "Assisted Dell hardware lifecycle operations while supporting service reliability."
    ],
    "visibility": "Public Summary",
    "featured": false,
    "order": 105,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/campus-server-network-operations.svg",
      "alt": "Flat style illustration for Campus Server and Network Operations."
    },
    "details": {
      "overview": "This role supports production campus infrastructure through AD administration, network reliability operations, and hardware lifecycle maintenance across enterprise systems.",
      "contributions": [
        "Managed Active Directory provisioning and policy enforcement processes.",
        "Performed routine updates, patching, and server maintenance in production environments.",
        "Assisted Dell hardware lifecycle operations while supporting service reliability."
      ],
      "notes": [
        "Operational focus includes patching, maintenance windows, and service continuity.",
        "Cross-team coordination helps reduce disruption during infrastructure updates.",
        "Documentation practices emphasize repeatable support procedures."
      ],
      "nextSteps": [
        "Expand automation for recurring operational checks.",
        "Improve observability coverage for proactive issue detection.",
        "Continue hardening baseline policy sets."
      ]
    },
    "gallery": [
      {
        "src": "assets/images/projects/campus-server-network-operations.svg",
        "alt": "Flat style illustration for Campus Server and Network Operations."
      }
    ]
  },
  {
    "id": "flutter-weather-application",
    "published": true,
    "title": "Flutter Weather Application",
    "shortTitle": "Weather",
    "role": "Course Project",
    "timeline": "October 2024 - December 2024",
    "status": "Completed",
    "category": "Product",
    "problem": "The project needed to translate city-coordinate selections and OpenWeather responses into a responsive mobile interface.",
    "outcome": "A Flutter application that fetches city-based weather, parses JSON responses, and presents real-time data with condition-driven visuals.",
    "summary": "A Flutter weather app that uses city coordinates to request and display live OpenWeather data.",
    "stack": [
      "Flutter",
      "API Integration",
      "JSON",
      "Mobile Development",
      "UI and UX"
    ],
    "tags": [
      "Flutter",
      "API Integration",
      "Mobile Development",
      "UI/UX",
      "JSON"
    ],
    "highlights": [
      "Implemented dynamic weather fetching based on selected city coordinates.",
      "Handled API response parsing and real-time data presentation in-app.",
      "Built UI components for selection controls and weather-driven visuals."
    ],
    "visibility": "Public Summary",
    "featured": false,
    "order": 104,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/flutter-weather-application.svg",
      "alt": "Flat style illustration for Flutter Weather Application."
    },
    "details": {
      "overview": "A Flutter-based weather application that demonstrates API-driven mobile interfaces, dynamic data rendering, and responsive presentation logic.",
      "contributions": [
        "Implemented dynamic weather fetching based on selected city coordinates.",
        "Handled API response parsing and real-time data presentation in-app.",
        "Built UI components for selection controls and weather-driven visuals."
      ],
      "notes": [
        "OpenWeather integration required coordinate-aware request building.",
        "UI variants were mapped to weather conditions for fast comprehension.",
        "JSON parsing and state updates were optimized for real-time response."
      ],
      "nextSteps": [
        "Add forecast trend charts and hourly snapshots.",
        "Introduce offline caching of recent cities.",
        "Refine UI themes for weather severity states."
      ]
    },
    "gallery": [
      {
        "src": "assets/images/projects/flutter-weather-application.svg",
        "alt": "Flat style illustration for Flutter Weather Application."
      }
    ]
  },
  {
    "id": "enhanced-calculator-flutter",
    "published": true,
    "title": "Enhanced Calculator Application (Flutter)",
    "shortTitle": "Enhanced Calculator",
    "role": "Course Project",
    "timeline": "November 2024 - December 2024",
    "status": "Completed",
    "category": "Product",
    "problem": "An existing Flutter calculator needed advanced operations and custom expression parsing without disrupting core behavior.",
    "outcome": "Added logarithmic and factorial operations, including custom !(8) parsing, through modular helpers while preserving existing UI behavior.",
    "summary": "A Flutter calculator extension with logarithms, factorials, and custom !(8) parsing.",
    "stack": [
      "Flutter",
      "Dart",
      "Algorithms",
      "UI Development"
    ],
    "tags": [
      "Flutter",
      "Dart",
      "Algorithms",
      "UI Development"
    ],
    "highlights": [
      "Implemented logarithmic and factorial functions in the existing calculator system.",
      "Added custom parsing logic for expressions such as !(8) for factorials.",
      "Integrated new functionality without destabilizing existing UI behavior."
    ],
    "visibility": "Public Summary",
    "featured": false,
    "order": 103,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/enhanced-calculator-flutter.svg",
      "alt": "Flat style illustration for Enhanced Calculator Application (Flutter)."
    },
    "details": {
      "overview": "This project extends a base Flutter calculator with additional mathematical capabilities and custom expression parsing while preserving modular logic separation.",
      "contributions": [
        "Implemented logarithmic and factorial functions in the existing calculator system.",
        "Added custom parsing logic for expressions such as !(8) for factorials.",
        "Integrated new functionality without destabilizing existing UI behavior."
      ],
      "notes": [
        "Expression parsing handled special syntaxes like factorial notation.",
        "Helper utilities were isolated for reusable math operations.",
        "Feature additions were integrated without disrupting core calculator behavior."
      ],
      "nextSteps": [
        "Add expression history and reusable formulas.",
        "Implement input validation visuals for malformed expressions.",
        "Expand scientific mode operation coverage."
      ]
    },
    "gallery": [
      {
        "src": "assets/images/projects/enhanced-calculator-flutter.svg",
        "alt": "Flat style illustration for Enhanced Calculator Application (Flutter)."
      }
    ]
  },
  {
    "id": "ccdc-competition-experience",
    "published": true,
    "title": "Collegiate Cyber Defense Competition (CCDC)",
    "shortTitle": "CCDC",
    "role": "Competition Experience",
    "timeline": "February 2025",
    "status": "Completed",
    "category": "Security",
    "problem": "Enterprise-like services had to be hardened and kept stable under active adversarial pressure.",
    "outcome": "Hands-on experience hardening systems, triaging logs with SIEM and forensic workflows, and coordinating detection, response, and recovery.",
    "summary": "I competed in CCDC scenarios focused on hardening, log triage, incident response, and service recovery.",
    "stack": [
      "Incident Response",
      "Blue Team",
      "Network Defense",
      "SIEM"
    ],
    "tags": [
      "Cybersecurity",
      "Incident Response",
      "Blue Team",
      "Network Defense",
      "SIEM"
    ],
    "highlights": [
      "Configured and hardened systems under active adversarial conditions.",
      "Analyzed logs and performed triage with SIEM and forensic workflows.",
      "Gained practical experience in real-time detection, response, and recovery."
    ],
    "visibility": "Public Summary",
    "featured": false,
    "order": 102,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/ccdc-competition-experience.svg",
      "alt": "Flat style illustration for Collegiate Cyber Defense Competition (CCDC)."
    },
    "details": {
      "overview": "CCDC participation emphasized live defensive operations, rapid triage, and coordinated response under adversarial pressure in enterprise-like environments.",
      "contributions": [
        "Configured and hardened systems under active adversarial conditions.",
        "Analyzed logs and performed triage with SIEM and forensic workflows.",
        "Gained practical experience in real-time detection, response, and recovery."
      ],
      "notes": [
        "Competition workflows required rapid hardening and service stabilization.",
        "SIEM and forensic analysis informed prioritization decisions.",
        "Team coordination directly impacted containment and recovery quality."
      ],
      "nextSteps": [
        "Continue blue-team scenario drills with varied infrastructure models.",
        "Expand playbooks for faster incident categorization.",
        "Increase automated baseline checks for critical assets."
      ]
    },
    "gallery": [
      {
        "src": "assets/images/projects/ccdc-competition-experience.svg",
        "alt": "Flat style illustration for Collegiate Cyber Defense Competition (CCDC)."
      }
    ]
  },
  {
    "id": "ctf-cybersecurity-education-research",
    "published": true,
    "title": "CTF-Based Cybersecurity Education Research",
    "shortTitle": "CTF Learning Research",
    "role": "Research and Outreach",
    "timeline": "2024 - Present",
    "status": "In progress",
    "category": "Research",
    "problem": "Cybersecurity educators need clearer evidence about how CTF-based learning affects engagement, retention, and problem-solving.",
    "outcome": "An ongoing research track using workshops, experiments, and learner observations to guide practical improvements in entry-level cybersecurity instruction.",
    "summary": "I study how CTF-based instruction affects engagement, retention, and problem solving through workshops and learner observation.",
    "stack": [
      "Research",
      "Instructional Design",
      "Cybersecurity Education",
      "Analysis"
    ],
    "tags": [
      "Research",
      "Cybersecurity Education",
      "Instructional Design",
      "Analysis"
    ],
    "highlights": [
      "Designed workshops and experiments to evaluate learning outcomes.",
      "Analyzed student engagement across interactive challenge environments.",
      "Studied retention and reasoning improvements from hands-on problem solving."
    ],
    "visibility": "Public Summary",
    "featured": false,
    "order": 101,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/ctf-cybersecurity-education-research.svg",
      "alt": "Flat style illustration for CTF-Based Cybersecurity Education Research."
    },
    "details": {
      "overview": "This research track evaluates how CTF-style learning environments influence cybersecurity skill development, retention, and problem-solving confidence.",
      "contributions": [
        "Designed workshops and experiments to evaluate learning outcomes.",
        "Analyzed student engagement across interactive challenge environments.",
        "Studied retention and reasoning improvements from hands-on problem solving."
      ],
      "notes": [
        "Workshops are used as experimental contexts to measure engagement trends.",
        "Qualitative and quantitative observations guide instructional refinements.",
        "Findings target practical improvements in entry-level cybersecurity pedagogy."
      ],
      "nextSteps": [
        "Expand sample size across diverse learner cohorts.",
        "Compare guided vs. unguided challenge pathways.",
        "Formalize reporting templates for longitudinal study output."
      ]
    },
    "gallery": [
      {
        "src": "assets/images/projects/ctf-cybersecurity-education-research.svg",
        "alt": "Flat style illustration for CTF-Based Cybersecurity Education Research."
      }
    ]
  }
]
;
