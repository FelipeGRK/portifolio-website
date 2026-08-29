// src/components/SkillsSection.tsx
import React from 'react'

export interface Skill {
id: string
name: string
imageUrl: string
link?: string
}

export interface SkillCategory {
title: string
skills: Skill[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
{
title: 'Networking',
skills: [
{ id: 'network-plus', name: 'CompTIA Network+ Certified', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/comptia.svg' },
{ id: 'cisco', name: 'Cisco Networking Fundamentals', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg' },
{ id: 'pfsense', name: 'pfSense (Firewall & Routing)', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pfsense.svg' },
{ id: 'unifi', name: 'UniFi Switching & Wi-Fi', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ubiquiti.svg' },
{ id: 'wireshark', name: 'Wireshark & Network Troubleshooting', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wireshark.svg' },
{ id: 'vlans', name: 'VLANs & Subnetting', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg' },
],
},
{
title: 'Systems Administration',
skills: [
{ id: 'winserver', name: 'Windows Server 2022', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg' },
{ id: 'ad', name: 'Active Directory (AD DS)', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg' },
{ id: 'gpo', name: 'Group Policy (GPO/GPP)', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg' },
{ id: 'powershell', name: 'PowerShell', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powershell.svg' },
],
},
{
title: 'Identity & Access Management',
skills: [
{ id: 'entra', name: 'Microsoft Entra ID (Azure AD)', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg' },
{ id: 'entraconnect', name: 'Entra Connect / Hybrid Identity', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg' },
{ id: 'iam', name: 'IAM, RBAC & MFA', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg' },
],
},
{
title: 'Endpoint & Device Management',
skills: [
{ id: 'intune', name: 'Microsoft Intune (MDM)', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg' },
{ id: 'imaging', name: 'Windows Imaging & Deployment', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg' },
{ id: 'assets', name: 'Asset & Inventory Management', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dell.svg' },
],
},
{
title: 'IT Support & Help Desk',
skills: [
{ id: 'helpdesk', name: 'Tier 1/2 Support & Ticketing', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg' },
{ id: 'remote', name: 'Remote Support (Quick Assist/RDP)', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg' },
{ id: 'docs', name: 'Customer Service & Documentation', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftteams.svg' },
],
},
{
title: 'Microsoft 365 & Collaboration',
skills: [
{ id: 'm365', name: 'Microsoft 365 (Exchange, SharePoint, Teams)', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftteams.svg' },
{ id: 'office', name: 'Microsoft Office', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftoffice.svg' },
],
},
{
title: 'Additional Tools',
skills: [
{ id: 'vmware', name: 'VMware / Virtualization', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vmware.svg' },
{ id: 'vm', name: 'VirtualBox', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/virtualbox.svg' },
{ id: 'linux', name: 'Linux (Ubuntu Server)', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
{ id: 'git', name: 'Git & GitHub', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
],
},
]
const SkillsSection: React.FC = () => (
<section id="skills" className="py-20 px-4 bg-gray-900 text-gray-200">
<div className="max-w-5xl mx-auto space-y-12 text-white">
<h2 className="text-4xl font-bold text-center">Skills</h2>
{SKILL_CATEGORIES.map(cat => (
<div key={cat.title} className="space-y-4">
<h3 className="text-2xl font-medium text-center">
{cat.title}
<span className="block h-1 w-20 mx-auto mt-1 bg-purple-600"></span>
</h3>
<div className="flex flex-wrap justify-center gap-4">
{cat.skills.map(skill => (
<div
key={skill.id}
onClick={() => skill.link && window.open(skill.link, '_blank')}
className="
bg-white rounded-xl
p-3
flex flex-col items-center space-y-1
w-24
border-2 border-transparent
hover:border-purple-700 hover:shadow-lg
transition-all duration-200 cursor-pointer
"
>
<img
src={skill.imageUrl}
alt={skill.name}
className="h-10 w-10 object-contain"
/>
<p className="text-xs text-gray-800">{skill.name}</p>
</div>
))}
</div>
</div>
))}
</div>
</section>
)

export default SkillsSection
