"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Building, ChevronDown, ChevronUp } from "lucide-react"

export interface TimelineExperience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string
  impacts: string[]
  logo?: string
}

interface TimelineProps {
  experiences: TimelineExperience[]
  orientation?: "vertical" | "horizontal"
  className?: string
}

export function Timeline({ experiences, orientation = "vertical", className }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const timelineRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          setIsVisible((prev) => ({
            ...prev,
            [id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.2 },
    )

    Object.values(timelineRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      Object.values(timelineRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [experiences])

  if (orientation === "horizontal") {
    return (
      <div className={cn("w-full overflow-x-auto", className)}>
        <div className="flex min-w-max items-start gap-6 pb-8 pt-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              id={experience.id}
              ref={(el) => (timelineRefs.current[experience.id] = el)}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible[experience.id] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex w-80 flex-col rounded-lg border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-background bg-primary" />
              <div className="absolute -top-[1px] left-0 right-0 mx-auto h-[1px] w-full bg-border" />

              <div className="mb-3 flex items-center justify-between">
                <Badge variant="outline" className="px-2 py-1 text-xs font-normal">
                  {experience.duration}
                </Badge>
                <Badge variant="secondary" className="px-2 py-1 text-xs font-normal">
                  {experience.location}
                </Badge>
              </div>

              <h3 className="mb-1 text-lg font-bold">{experience.position}</h3>
              <div className="mb-3 flex items-center text-sm text-muted-foreground">
                <Building className="mr-1 h-4 w-4" />
                {experience.company}
              </div>

              <p className="mb-3 text-sm text-muted-foreground">{experience.description}</p>

              <button
                onClick={() => toggleExpanded(experience.id)}
                className="flex items-center justify-center gap-1 text-sm font-medium text-primary"
              >
                {expandedId === experience.id ? (
                  <>
                    Show Less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show Impact <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>

              {expandedId === experience.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 space-y-2"
                >
                  <h4 className="text-sm font-semibold">Key Impacts:</h4>
                  <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                    {experience.impacts.map((impact, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        {impact}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="absolute left-[19px] top-0 h-full w-[2px] bg-border md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            id={experience.id}
            ref={(el) => (timelineRefs.current[experience.id] = el)}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible[experience.id] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative flex flex-col gap-4 md:grid",
              index % 2 === 0 ? "md:grid-cols-[1fr_40px_1fr]" : "md:grid-cols-[1fr_40px_1fr]",
            )}
          >
            {/* Timeline node */}
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground md:left-1/2 md:-translate-x-1/2">
              <Briefcase className="h-4 w-4" />
            </div>

            {/* Content for even items (left side on desktop) */}
            <div
              className={cn(
                "ml-16 md:ml-0",
                index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-3 md:text-left",
              )}
            >
              <div className={cn("flex flex-col gap-1", index % 2 === 0 ? "md:items-end" : "md:items-start")}>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="px-2 py-1 text-xs font-normal">
                    {experience.duration}
                  </Badge>
                  <Badge variant="secondary" className="px-2 py-1 text-xs font-normal">
                    {experience.location}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold">{experience.position}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Building className="h-4 w-4" />
                  {experience.company}
                </div>
              </div>
            </div>

            {/* Empty column for the timeline line */}
            <div className="hidden md:block"></div>

            {/* Content for odd items (right side on desktop) */}
            <div
              className={cn(
                "ml-16 md:ml-0",
                index % 2 === 0 ? "md:col-start-3 md:text-left" : "md:col-start-1 md:text-right",
              )}
            >
              <div
                className={cn(
                  "rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md",
                  index % 2 === 0 ? "" : "",
                )}
              >
                <p className="mb-3 text-sm text-muted-foreground">{experience.description}</p>
                <button
                  onClick={() => toggleExpanded(experience.id)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium text-primary",
                    index % 2 === 0 ? "" : "md:justify-end",
                  )}
                >
                  {expandedId === experience.id ? (
                    <>
                      Show Less <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show Impact <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>

                {expandedId === experience.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 space-y-2"
                  >
                    <h4 className={cn("text-sm font-semibold", index % 2 === 0 ? "" : "md:text-right")}>
                      Key Impacts:
                    </h4>
                    <ul
                      className={cn(
                        "ml-5 list-disc space-y-1 text-sm text-muted-foreground",
                        index % 2 === 0 ? "" : "md:ml-0 md:list-inside",
                      )}
                    >
                      {experience.impacts.map((impact, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          {impact}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
