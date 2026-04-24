window.PORTFOLIO_PROJECTS = [
  {
    "id": "nettower-agentless-network-topology",
    "title": "NetTower: Agentless Network Topology & Situational Awareness Platform",
    "role": "Capstone Project",
    "timeline": "January 2026 – April 2026",
    "summary": "NetTower is an agentless network situational awareness platform designed to provide clear, high-level visibility into small or infrastructure-limited networks. It enables users to quickly understand what devices are present, reachable, and how they are generally connected—without relying on enterprise monitoring tools or complex configurations.",
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
    "visibility": "Public Summary",
    "featured": true,
    "order": 110,
    "links": {
      "live": "",
      "repo": "",
      "caseStudy": ""
    },
    "image": {
      "src": "assets/images/projects/nettower-agentless-network-topology.svg",
      "alt": "Flat style illustration for NetTower: Agentless Network Topology & Situational Awareness Platform."
    },
    "details": {
      "overview": "NetTower is an agentless network situational awareness platform designed to provide clear, high-level visibility into small or infrastructure-limited networks. It enables users to quickly understand what devices are present, reachable, and how they are generally connected—without relying on enterprise monitoring tools or complex configurations.",
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
        "src": "assets/images/projects/nettower-showcase-01.svg",
        "alt": "NetTower showcase slot 1 for your screenshot."
      },
      {
        "src": "assets/images/projects/nettower-showcase-02.svg",
        "alt": "NetTower showcase slot 2 for your screenshot."
      },
      {
        "src": "assets/images/projects/nettower-showcase-03.svg",
        "alt": "NetTower showcase slot 3 for your screenshot."
      }
    ]
  },
  {
    "id": "secrets-ctf-platform",
    "title": "SECRETS: Cybersecurity Capture The Flag Platform",
    "role": "Outreach Developer",
    "timeline": "August 2024 - Present",
    "summary": "Designed and developed a beginner-focused CTF platform with interactive challenges and live instructional delivery.",
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
    "title": "Secure Modular Dashboard (Axis)",
    "role": "Personal Project",
    "timeline": "October 2024 - Present",
    "summary": "Built a cross-platform, offline-first dashboard with modular expansion patterns and secure local credential handling.",
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
    "title": "Portfolio Website with Secure Authentication",
    "role": "Personal Project",
    "timeline": "March 2025 - Present",
    "summary": "Designed and deployed a home-server portfolio with hardened authentication, secure external access, and modular content management.",
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
    "title": "MindSpace: File-Based Journaling System",
    "role": "Personal Project",
    "timeline": "April 2025 - Present",
    "summary": "Designed a file-based journaling system with structured metadata parsing, search, and transparent storage without database dependency.",
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
    "title": "Campus Server and Network Operations",
    "role": "Server Team Analyst",
    "timeline": "August 2023 - Present",
    "summary": "Supported campus server and network operations across Active Directory, Cisco infrastructure, and production maintenance workflows.",
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
    "title": "Flutter Weather Application",
    "role": "Course Project",
    "timeline": "October 2024 - December 2024",
    "summary": "Developed a mobile weather app using Flutter and OpenWeather API with dynamic city-based retrieval and responsive UI feedback.",
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
    "title": "Enhanced Calculator Application (Flutter)",
    "role": "Course Project",
    "timeline": "November 2024 - December 2024",
    "summary": "Extended a Flutter calculator with custom parsing and advanced operations while preserving clean architecture and modular helpers.",
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
    "title": "Collegiate Cyber Defense Competition (CCDC)",
    "role": "Competition Experience",
    "timeline": "February 2025",
    "summary": "Participated in live defensive cybersecurity competition scenarios focused on enterprise hardening, incident response, and recovery.",
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
    "title": "CTF-Based Cybersecurity Education Research",
    "role": "Research and Outreach",
    "timeline": "2024 - Present",
    "summary": "Conducting research on how CTF-based learning impacts cybersecurity engagement, retention, and problem-solving outcomes.",
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