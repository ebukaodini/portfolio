import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/interfaces/project";

export function ProjectCard({ title, description, image, tags, url }: Project) {
  return (
    <Link href={url ?? "#"} target="_blank" rel="noopener noreferrer">
      <Card className="relative group overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-4 right-4 w-full group">
          <ExternalLink className="text-muted-foreground h-4 w-4 top-2 right-2 invisible group-hover:visible" />
        </div>
        <CardHeader className="p-3">
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
          </CardTitle>
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-normal"
              >
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
        <CardContent className="p-3">
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
