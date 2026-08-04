// All portfolio content. Edit here — the site reads directly from this file,
// no backend/API needed. This is what makes it deploy cleanly to Netlify.

export const profile = {
  name: "Rohith Reddy",
  role: "Network Engineer",
  location: "Huntington Station, NY",
  email: "rrohith2966@gmail.com",
  phone: "+1 (205) 377 8565",
  tagline:
    "Network Engineer with 4+ years designing, implementing, and maintaining enterprise network infrastructure across multisite and datacenter environments — firewalls, routing, switching, and wireless.",
  about:
    "I design and operate secure, high-availability networks. My work spans configuring Palo Alto and Cisco firewalls, building resilient routing with BGP/OSPF, segmenting traffic with VLANs, and automating operations with Python and Ansible. I care about clean architecture, audit-ready documentation, and keeping 24x7 environments stable. Currently pursuing an M.S. in Computer Science at Auburn University.",
  socials: {
    github: null,
    linkedin: null,
  },
};

export const education = {
  degree: "M.S. in Computer Science",
  school: "Auburn University, Alabama",
  period: "Aug 2024 – May 2026",
};

export const skillGroups = [
  {
    category: "Routing & Switching",
    items: ["BGP", "OSPF", "EIGRP", "TCP/IP", "VLANs", "802.1Q", "EtherChannel/LACP", "HSRP", "VRRP", "STP/RSTP", "PBR"],
  },
  {
    category: "Firewalls & Security",
    items: ["Palo Alto (PA-3410/3220/455)", "Cisco Firepower/FTD", "Cisco ASA", "FortiGate", "ACLs", "NAC", "802.1X", "Zero Trust"],
  },
  {
    category: "Wireless / Wi-Fi",
    items: ["Cisco Wi-Fi administration", "Wireless troubleshooting", "Coverage & performance optimization"],
  },
  {
    category: "Cisco Platforms",
    items: ["Catalyst 9000", "Nexus 2K–9K", "ASR 1000/9000", "ISR", "Cisco ACI", "UCS", "SD-WAN (Viptela)", "DNA Center", "Meraki"],
  },
  {
    category: "VoIP & Connectivity",
    items: ["Cisco VoIP", "WAN/SD-WAN", "MPLS", "IPSec/GRE VPN", "DMVPN", "Metro Ethernet", "Multisite & datacenter"],
  },
  {
    category: "Monitoring & Troubleshooting",
    items: ["SolarWinds", "Nagios", "PRTG", "Wireshark", "tcpdump", "NetFlow", "SNMP", "Syslog"],
  },
  {
    category: "Automation & Scripting",
    items: ["Python (Netmiko, Napalm, Requests)", "Ansible", "Bash", "Git", "REST APIs"],
  },
  {
    category: "Compliance & Documentation",
    items: ["SOC 2", "Visio network diagrams", "IP addressing plans", "Runbooks", "ITIL change management"],
  },
];

export const experience = [
  {
    id: 1,
    title: "Network Engineer",
    company: "Lumen Technologies",
    period: "Jan 2026 – Present",
    highlights: [
      "Configured Palo Alto firewalls (PA-3410/3220/455) with 3,500+ security policies across 25+ enterprise locations, achieving 99.99% firewall availability.",
      "Designed a Zero Trust access architecture integrating web application firewall and identity-based access controls for remote and on-prem users.",
      "Maintained datacenter fabric policies across multisite environments with 200+ segmentation groups, reducing east-west security risk by 40%.",
      "Automated firewall policy synchronization and health monitoring to maintain continuous compliance and documented change procedures.",
    ],
    tech: ["Palo Alto", "Zero Trust", "NAT/Load Balancing", "WildFire", "Content-ID"],
  },
  {
    id: 2,
    title: "Network Implementation Engineer",
    company: "Cisco",
    period: "Sep 2021 – Jul 2024",
    highlights: [
      "Installed and supported routers, switches, firewalls, and VPN infrastructure across 200+ sites on ASR, Nexus, and Catalyst platforms.",
      "Implemented OSPF and BGP between on-prem and cloud, reducing failover time by 65% via consistent path selection and route summarization.",
      "Configured VLANs and trunks on 200+ switches, cutting broadcast domain congestion by 42%.",
      "Automated weekly config backups for 150+ devices, achieving a 60% reduction in outage recovery time.",
      "Hardened access-layer switches with ACLs, SSH hardening, and port security, reducing unauthorized access attempts by 74% with zero high-severity audit findings.",
    ],
    tech: ["Cisco ASR/Nexus/Catalyst", "OSPF/BGP", "VLANs", "SolarWinds", "Python/Ansible"],
  },
];

export const certifications = [
  "Cisco Certified Network Associate (CCNA)",
  "Cisco Certified Network Professional – Enterprise (CCNP Enterprise)",
  "Palo Alto Networks Certified Network Security Engineer (PCNSE)",
  "CompTIA Network+",
  "AWS Certified Advanced Networking – Specialty (ANS-C01)",
];
