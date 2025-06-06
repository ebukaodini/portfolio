import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/interfaces/project";

export function ProjectCard({
  slug,
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  details,
}: Project) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
        </CardTitle>
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
          {tags.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 4} more
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link href={`/projects/${slug}`}>View Details</Link>
        </Button>
        <div className="flex gap-2">
          {demoUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
