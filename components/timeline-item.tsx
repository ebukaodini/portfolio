import { Building } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

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
