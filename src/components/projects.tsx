import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Server, ShieldCheck, Network as NetworkIcon } from 'lucide-react';

interface Project {
id: string;
name: string;
description: string;
date: string;
skills: string;
imageUrl?: string;
icon?: React.ReactNode;
link: string;
}

// Sample projects data
const PROJECTS: Project[] = [
{
id: 'it-infra-lab',
name: 'IT Infrastructure Lab: Active Directory, Zabbix Monitoring & Endpoint Management',
description: 'Built a Windows Server Active Directory environment (AD DS, DNS, OUs, RBAC) and deployed a Linux-based Zabbix server for centralized monitoring of CPU, RAM, disk, and service health across domain-joined endpoints. Integrated Microsoft Entra ID with on-prem AD via Entra Connect and managed hybrid endpoints with Intune.',
date: 'Feb 2026 - Apr 2026',
skills: 'Active Directory · DNS · RBAC · Zabbix · Microsoft Entra ID · Intune · Windows Server 2022',
icon: <Server className="w-16 h-16 text-green-400" />,
link: 'https://github.com/FelipeGRK/IT-Infrastructure-Monitoring-Active-Directory-Lab-Endpoint-Management',
},
{
id: 'pfsense-lab',
name: 'pfSense Virtual Firewall & Router Lab',
description: 'Designed a virtualized enterprise-style network using pfSense and Oracle VirtualBox, configuring a dual-interface firewall/router with WAN/LAN separation, custom IPv4 subnetting, DHCP/NAT, and 802.1Q VLAN segmentation with per-interface firewall rules.',
date: 'Jan 2026 - Mar 2026',
skills: 'pfSense · VLANs (802.1Q) · DHCP/NAT · LAN/WAN Design · Oracle VirtualBox',
icon: <ShieldCheck className="w-16 h-16 text-green-400" />,
link: 'https://www.linkedin.com/in/felipe-siqueira-0bbb6a169/',
},
{
id: 'unifi-network',
name: 'Ubiquiti UniFi USW-24-G2 Network Infrastructure Implementation',
description: 'Designed and deployed a dedicated, isolated LAN for live esports broadcast and production at Fisher College: configured a UniFi Layer 2 switch, static IPv4 addressing for Dante audio devices, PoE injectors for announcer consoles, and a dual-NIC broadcast PC setup.',
date: 'Aug 2025',
skills: 'UniFi (Ubiquiti) Switching · Static IP · PoE · Dante Audio · Network Configuration',
icon: <NetworkIcon className="w-16 h-16 text-green-400" />,
link: 'https://www.linkedin.com/in/felipe-siqueira-0bbb6a169/',
},
];

// Animation variants
const fadeIn = (delay = 0) => ({
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ProjectsSection: React.FC = () => {
return (
<section id="projects" className="py-20 px-4 bg-gray-900 text-gray-200 scroll-mt-16">
<div className="max-w-5xl mx-auto">
<h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{PROJECTS.map((project, index) => (
<motion.div key={project.id} variants={fadeIn(index * 0.3)} initial="hidden" animate="visible">
<Tilt glareEnable glareColor="#805AD5" glareMaxOpacity={0.2} tiltMaxAngleX={20} tiltMaxAngleY={20}>
<a href={project.link} target="_blank" rel="noopener noreferrer">
<div className="relative w-[300px] rounded-2xl border-2 border-purple-500 p-4 bg-gray-800 hover:border-green-400 transition-all duration-300">
{project.imageUrl ? (
<img src={project.imageUrl} alt={project.name} className="h-40 w-full object-cover rounded-md mb-4" />
) : (
<div className="h-40 w-full flex items-center justify-center bg-gray-700 rounded-md mb-4">
{project.icon}
</div>
)}
<h3 className="text-xl font-semibold mb-1">{project.name}</h3>
<p className="text-sm text-gray-300 mb-2">{project.date}</p>
<p className="text-gray-200 mb-3">{project.description}</p>
<p className="text-xs text-gray-400">Skills: {project.skills}</p>
</div>
</a>
</Tilt>
</motion.div>
))}
</div>
</div>
</section>
);
};

export default ProjectsSection;
