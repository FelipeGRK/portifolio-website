// src/components/About.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function About() {
const ref = useRef(null);
const inView = useInView(ref, { once: true, amount: 0.2 });
const controls = useAnimation();

useEffect(() => {
if (inView) controls.start("visible");
}, [inView, controls]);

const fadeIn = (delay = 0) => ({
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.6, delay },
},
});

return (
<section ref={ref} className="py-20 px-4 bg-gray-900 text-gray-200">
{/* Intro heading */}
<motion.div
initial="hidden"
animate={controls}
variants={fadeIn(0)}
className="max-w-4xl mx-auto text-center mb-10"
>
<p className="text-sm uppercase text-purple-400 mb-2">Introduction</p>
<h2 className="text-4xl font-bold">About me</h2>
</motion.div>

<div className="max-w-4xl mx-auto flex flex-col gap-10">
{/* Profile card + Top Skills card — centered side by side */}
<div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
{/* Profile card */}
<motion.div
initial="hidden"
animate={controls}
variants={fadeIn(0.2)}
className="flex flex-col items-center space-y-6 bg-gray-800/50 border border-purple-500/30 rounded-2xl p-6"
>
<div className="w-40 h-40 rounded-full overflow-hidden shadow-lg ring-2 ring-purple-500/50">
<img
src="/assets/profile.jpg"
alt="Felipe Siqueira"
className="w-full h-full object-cover"
/>
</div>

<div className="flex flex-wrap gap-4 justify-center">
<a
href="/assets/resume.pdf"
target="_blank"
rel="noopener"
className="px-6 py-3 bg-red-600 hover:bg-purple-700 rounded-md text-white font-medium transition"
>
Resume
</a>
<a
href="https://www.linkedin.com/in/felipe-siqueira-0bbb6a169/"
target="_blank"
rel="noopener"
className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
>
LinkedIn
</a>
<a
href="https://github.com/FelipeGRK"
target="_blank"
rel="noopener"
className="px-6 py-3 bg-purple-600 hover:bg-gray-700 rounded-md text-white font-medium transition"
>
GitHub
</a>
</div>
</motion.div>

{/* Top Skills card */}
<motion.div
initial="hidden"
animate={controls}
variants={fadeIn(0.3)}
className="bg-gray-800/50 border border-purple-500/30 rounded-2xl p-6 sm:max-w-xs flex flex-col justify-center"
>
<p className="text-sm uppercase text-purple-400 mb-2">Top skills</p>
<p className="text-sm text-gray-300">
CompTIA Network+ Certified • Network Troubleshooting • Network Security • Wireless &amp; Wired Performance • Networking Concepts • IT Support &amp; Troubleshooting • Active Directory &amp; Azure AD Administration • Identity and Access Management (IAM)
</p>
</motion.div>
</div>

{/* About text — below */}
<motion.div
initial="hidden"
animate={controls}
variants={fadeIn(0.4)}
className="space-y-6 text-lg"
>
<p>
I'm a motivated IT professional with hands-on experience in technical support, Active Directory, Microsoft Entra ID, endpoint deployment, asset management, and infrastructure-focused homelab projects. I learn quickly, stay organized, and take ownership of new tasks, while keeping a strong focus on documentation, follow-up, and reliable support. I am currently actively seeking full-time Network Administrator Jr. and Tier 2 Support positions where I can continue building my skills and contribute to a team.
</p>
<p>
I'm known for patience, flexibility, and a team-oriented mindset, and I like to research, test, and validate solutions, not just understand them in theory. I also look for ways to improve processes and address issues early. Outside of daily support work, I continue building my network skills — Network Troubleshooting, Network Security, Network Operations, Network Implementation, and Networking Concepts — through my home lab and hands-on projects. I'm CompTIA Network+ certified and am eager to grow into network administration.
</p>
</motion.div>
</div>
</section>
);
}
