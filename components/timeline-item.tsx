import { Building } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

export const workExperience = [
  {
    duration: "09/2024 — Present",
    position: "Senior Full Stack Engineer",
    company: "Utopia Tech Corp",
    companyUrl: "https://www.clodura.ai/directory/company/utopia-tech-corp",
    location: "Remote • Tel Aviv, Israel",
    impacts: [
      "Led design, development, and deployment of software tools and systems.",
      "Collaborated cross-functionally to meet software and hardware integration requirements.",
      "Managed software documentation and performance evaluation efforts.",
    ],
  },
  {
    duration: "02/2023 — 12/2024",
    position: "Senior Backend / R&D Engineer",
    company: "SeamlessHR",
    companyUrl: "https://seamlesshr.com",
    location: "Hybrid • Lagos, Nigeria",
    impacts: [
      "Built and published shared packages used by 40+ engineers.",
      "Led development of centralized workflows and identity services.",
      "Headed R&D, implementing scalable microservices and Kafka pipelines.",
    ],
  },
  {
    duration: "01/2023 — 03/2023",
    position: "Front End Engineer",
    company: "Pade HCM",
    companyUrl: "https://www.padehcm.com",
    location: "Remote • Lagos, Nigeria",
    impacts: [
      "Built UI for HR product used by 100+ companies and 13,000+ employees.",
      "Contributed to features that supported over $20M in payroll processing.",
      "Product updates contributed to successful pre-seed funding.",
    ],
  },
  {
    duration: "12/2022 — 04/2023",
    position: "Front End Engineer (Contract)",
    company: "Lautech International College",
    companyUrl: "https://lautech.edu.ng/",
    location: "Remote • Ogbomoso, Nigeria",
    impacts: [
      "Developed admission portal frontend for a college with 5,000+ applicants.",
      "Improved speed and scalability of the application.",
      "Collaborated with 3-person team to deliver product.",
    ],
  },
  {
    duration: "03/2022 — 11/2022",
    position: "Software / DevOps Engineer",
    company: "Safeli Technologies",
    companyUrl: "https://safeli.ng",
    location: "Remote • Lagos, Nigeria",
    impacts: [
      "Designed API and payment integrations for a Web3 escrow service.",
      "Increased SEO performance and customer satisfaction.",
      "Deployed and managed cloud infrastructure.",
    ],
  },
  {
    duration: "10/2021 — 03/2022",
    position: "Fullstack JavaScript Engineer",
    company: "Tensei",
    location: "Remote • Lagos, Nigeria",
    impacts: [
      "Improved component framework efficiency by 40%.",
      "Built reusable architecture for frontend and backend features.",
      "Enhanced productivity through new tools and best practices.",
    ],
  },
  {
    duration: "02/2019 — 04/2022",
    position: "Software Engineer",
    company: "Spicy Guitar Academy",
    companyUrl: "https://app.spicyguitaracademy.com",
    location: "Remote • Lagos, Nigeria",
    impacts: [
      "Built web, CMS, and mobile apps using React, Flutter, PHP, and MySQL.",
      "Integrated Paystack and JWT; managed deployment and scaling.",
      "Product acquired 700+ customers and supported full online learning.",
    ],
  },
  {
    duration: "10/2020 — 03/2021",
    position: "Software Engineer",
    company: "Sports Fans Club",
    companyUrl: "https://sportsfansng.com",
    location: "Remote • Lagos, Nigeria",
    impacts: [
      "Developed social networking and payment features.",
      "Integrated Facebook, Twitter, and WhatsApp APIs.",
      "Launched a multilevel marketing-style fan engagement app.",
    ],
  },
  {
    duration: "04/2018 — 03/2021",
    position: "Software Engineer",
    company: "Mira Technologies Ltd.",
    companyUrl: "https://miratechnologiesng.com",
    location: "On Site • Lagos, Nigeria",
    impacts: [
      "Developed Sysbanker EE for microfinance institutions.",
      "Built Mira Bulk Mail — an enterprise bulk email and SMS platform.",
      "Helped multiple banks scale daily operations with secure, fast software.",
    ],
  },
  {
    duration: "05/2017 — 08/2019",
    position: "Software Developer (Freelance)",
    company: "Freelancer",
    location: "Benin, Nigeria",
    impacts: [
      "Built several desktop and web applications for businesses.",
      "Developed loan management and fuzzy logic software.",
      "Delivered end-to-end design, development, and deployment services.",
    ],
  },
];

export function TimelineItem({
  hidden,
  company,
  companyUrl,
  position,
  duration,
  location,
  impacts,
}: {
  hidden?: boolean;
  company: string;
  companyUrl?: string;
  position: string;
  duration: string;
  location: string;
  impacts: string[];
}) {
  return (
    <div className={`${hidden ? "hidden" : "block"} relative pl-6`}>
      <div className="absolute -left-[10px] h-5 w-5 rounded-full border-2 border-white bg-primary shadow"></div>
      <div className="mb-1 text-sm font-medium text-gray-500">{duration}</div>
      <h3 className="mb-1 text-lg font-semibold">{position} </h3>
      <div className="mb-3 flex flex-col sm:flex-row gap-1 sm:gap-6 justify-start items-start sm:items-center">
        {companyUrl ? (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            aria-label={company}
            href={companyUrl}
          >
            <div className="flex items-center text-sm text-muted-foreground">
              <Building className="mr-1 h-4 w-4" />
              {company}
            </div>
          </Link>
        ) : (
          <div className="flex items-center text-sm text-muted-foreground">
            <Building className="mr-1 h-4 w-4" />
            {company}
          </div>
        )}

        <Badge variant="secondary" className="px-2 py-1 text-xs font-normal">
          {location}
        </Badge>
      </div>
      <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
        {impacts.map((impact, i) => (
          <li key={i}>{impact}</li>
        ))}
      </ul>
    </div>
  );
}
