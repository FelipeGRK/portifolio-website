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
<section ref={ref} className="pb-20 pt-10 px-4 bg-gray-900 text-gray-200">
<motion.div
initial="hidden"
animate={controls}
variants={fadeIn(0.1)}
className="max-w-4xl mx-auto space-y-6 text-lg"
>
<p>
I'm a motivated IT professional with hands-on experience in technical support, Active Directory, Microsoft Entra ID, endpoint deployment, asset management, and infrastructure-focused homelab projects. I learn quickly, stay organized, and take ownership of new tasks, while keeping a strong focus on documentation, follow-up, and reliable support. I am currently actively seeking full-time Network Administrator Jr. and Tier 2 Support positions where I can continue building my skills and contribute to a team.
</p>
<p>
I'm known for patience, flexibility, and a team-oriented mindset, and I like to research, test, and validate solutions, not just understand them in theory. I also look for ways to improve processes and address issues early. Outside of daily support work, I continue building my network skills — Network Troubleshooting, Network Security, Network Operations, Network Implementation, and Networking Concepts — through my home lab and hands-on projects. I'm CompTIA Network+ certified and am eager to grow into network administration.
</p>
</motion.div>
</section>
);
}
