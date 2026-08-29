// src/components/IntroCards.tsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function IntroCards() {
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
<div ref={ref} className="pt-20 px-4 bg-gray-900 text-gray-200">
<motion.div
initial="hidden"
animate={controls}
variants={fadeIn(0)}
className="max-w-4xl mx-auto text-center mb-10"
>
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-gray-800/60 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" /></span>Actively seeking full-time IT Support & Network Admin roles</div>
</div><p className="text-sm uppercase text-purple-400 mb-2">Introduction</p>
<h2 className="text-4xl font-bold">About me</h2>
</motion.div>

{/* Single combined card: profile + buttons + top skills */}
<motion.div
initial="hidden"
animate={controls}
variants={fadeIn(0.2)}
className="max-w-2xl mx-auto flex flex-col items-center space-y-6 bg-gray-800/50 border border-purple-500/30 rounded-2xl p-8 md:p-10"
>
<div className="w-48 h-48 rounded-full overflow-hidden shadow-lg ring-2 ring-purple-500/50">
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

{/* Divider */}
<div className="w-full border-t border-purple-500/20" />

{/* Top Skills — integrated into the same card */}
<div className="w-full text-center">
<p className="text-sm uppercase text-purple-400 mb-2">Top skills</p>
<p className="text-sm text-gray-300">
CompTIA Network+ Certified • Network Troubleshooting • Network Security • Wireless &amp; Wired Performance • Networking Concepts • IT Support &amp; Troubleshooting • Active Directory &amp; Azure AD Administration • Identity and Access Management (IAM)
</p>
</div>
</motion.div>
</div>
);
}
