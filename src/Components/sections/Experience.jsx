import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
  {
    year: "2023 – Present",
    title: "Front-End Web Application Developer",
    company: "Freelance",
    description:
      "Building modern, responsive, and accessible web applications using React, JavaScript, Tailwind CSS, Vite, and AI-assisted development tools.",
  },
  {
    year: "2020 – 2022",
    title: "Computer System In-Charge",
    company: "Associate Consultant Engineers (ACE) Ltd.",
    description:
      "Managed enterprise IT infrastructure by troubleshooting hardware and software issues, redesigning network architecture, and leading network upgrade initiatives. Planned and supported data center deployment, implemented VLAN segmentation and inter-VLAN routing, managed enterprise storage with Synology NAS, automated data backups, virtualized physical servers, and deployed VMware ESXi to improve infrastructure performance, scalability, and reliability.",
  },
  {
    year: "2017 – 2018",
    title: "IT Officer",
    company: "Plan International",
    description:
      "Provided IT support for field operations by deploying and maintaining laptops, printers, scanners, mobile devices, and internet connectivity. Installed and configured DBR and CRMS applications, trained field staff and UC secretaries, managed IT asset inventory, ensured endpoint security with antivirus protection, and monitored the overall performance and reliability of IT infrastructure across multiple field locations.",
  },
  {
    year: "2014 – 2016",
    title: "Network Administrator",
    company: "DevCon - An Association for Rural Development",
    description:
      "Established and managed IT infrastructure across head and remote offices, including network deployment, WAN connectivity, domain services, and centralized data backup solutions. Provided end-user support, maintained the organization's website, deployed virtualized servers with Proxmox VE, implemented VLANs and network security on Cisco devices, and managed IT assets to ensure reliable and efficient business operations.",
  },
  {
    year: "2010 – 2014",
    title: "IT Executive",
    company: "AMAN Foundation",
    description:
      "Supported enterprise IT infrastructure by deploying and maintaining wireless and wired networks, virtualized servers, Active Directory, DNS, and remote administration solutions. Managed data center operations, configured VLANs and network devices, provided end-user technical support, implemented secure data backup solutions, and ensured reliable IT services across the organization.",
  },
  {
    year: "2009 – 2010",
    title: "Computer Network Expert CNE",
    company: "Associate Consultant Engineers (ACE) Ltd.",
    description:
      "Managed and supported office IT infrastructure by deploying wired networks, Active Directory, and DHCP services while providing hardware, software, and network support. Maintenance of network equipment, ensured reliable internet connectivity, and implemented regular data backup procedures to support secure and efficient business operations.",
  },
  {
    year: "2006 – 2008",
    title: "System Engineer",
    company: "e-BizSoft | Microsoft Dynamics Solutions",
    description:
      "Designed, implemented, and maintained enterprise network infrastructure, including LAN/WAN environments, servers, and network devices. Provided technical support for TCP/IP connectivity, domain-based networks, VoIP (SIP), PBX systems, and wireless access points, ensuring reliable communication and efficient IT operations.",
  },
];

const Experience = () => {
  const [openItems, setOpenItems] = useState({});

  const handleToggle = (year, event) => {
    event.preventDefault();

    setOpenItems((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <section
      id="experience"
      className="bg-slate-950 px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.3em]">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl">
            My Professional Journey
          </h2>
        </div>

        {/* Timeline Container: Tighter padding on mobile, expanding on sm+ */}
        <div className="relative mx-auto max-w-4xl border-l-2 border-blue-600 pl-6 sm:pl-8">
          {experiences.map((item) => {
            const isOpen = Boolean(openItems[item.year]);

            return (
              <details
                key={item.year}
                open={isOpen}
                className="group relative mb-10 sm:mb-12"
              >
                {/* Timeline marker adjusted for smaller left gutter on mobile */}
                <div
                  className={`absolute top-1.5 -left-8.5 h-4 w-4 rounded-full border-2 border-slate-950 transition-all duration-500 sm:top-2 sm:-left-10.5 sm:h-5 sm:w-5 sm:border-4 ${
                    isOpen
                      ? "scale-125 bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.8)]"
                      : "bg-blue-500"
                  }`}
                />

                <summary
                  onClick={(event) => handleToggle(item.year, event)}
                  className="cursor-pointer list-none transition-colors duration-200 outline-none hover:text-blue-400 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-blue-500 active:text-blue-400 [&::-webkit-details-marker]:hidden"
                >
                  <div>
                    <p className="text-xs font-semibold text-blue-400 sm:text-sm">
                      {item.year}
                    </p>

                    <h3 className="mt-1 text-xl font-bold sm:mt-2 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-sm text-slate-300 sm:mt-1 sm:text-base">
                      {item.company}
                    </p>
                  </div>
                </summary>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="description"
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -12,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -12,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4 sm:text-base sm:leading-8">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
