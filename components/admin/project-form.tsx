"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
// import { TagInput } from "@/components/admin/tag-input"
import { ProjectPreview } from "@/components/admin/project-preview";
import { useToast } from "@/hooks/use-toast";
import { Eye, Plus, Save, Trash } from "lucide-react";

interface Screenshot {
  title: string;
  image: string;
  description: string;
}

interface ProjectDetails {
  challenge: string;
  solution: string;
  impact: string;
  features: string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  techStack: string[];
  screenshots: Screenshot[];
  details: ProjectDetails;
}

interface ProjectFormProps {
  initialData: Project;
}

export function ProjectForm({ initialData }: ProjectFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState<Project>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      details: { ...prev.details, [name]: value },
    }));
  };

  const handleTagsChange = (tags: string[]) => {
    setFormData((prev) => ({ ...prev, tags }));
  };

  const handleTechStackChange = (techStack: string[]) => {
    setFormData((prev) => ({ ...prev, techStack }));
  };

  const handleFeaturesChange = (features: string[]) => {
    setFormData((prev) => ({
      ...prev,
      details: { ...prev.details, features },
    }));
  };

  const handleFeaturedChange = (featured: boolean) => {
    setFormData((prev) => ({ ...prev, featured }));
  };

  const handleScreenshotChange = (
    index: number,
    field: keyof Screenshot,
    value: string
  ) => {
    const updatedScreenshots = [...formData.screenshots];
    updatedScreenshots[index] = {
      ...updatedScreenshots[index],
      [field]: value,
    };
    setFormData((prev) => ({ ...prev, screenshots: updatedScreenshots }));
  };

  const addScreenshot = () => {
    setFormData((prev) => ({
      ...prev,
      screenshots: [
        ...prev.screenshots,
        { title: "", image: "", description: "" },
      ],
    }));
  };

  const removeScreenshot = (index: number) => {
    const updatedScreenshots = [...formData.screenshots];
    updatedScreenshots.splice(index, 1);
    setFormData((prev) => ({ ...prev, screenshots: updatedScreenshots }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Success",
        description: `Project ${
          initialData.id ? "updated" : "created"
        } successfully.`,
      });

      // Redirect to the projects list
      router.push("/admin/projects");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Tabs defaultValue="edit" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="edit" className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Edit
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={handleFeaturedChange}
                />
                <Label htmlFor="featured">Featured</Label>
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>

          <TabsContent value="edit" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter project title"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">Main Image URL</Label>
                      <Input
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Brief description of the project"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="demoUrl">Demo URL</Label>
                      <Input
                        id="demoUrl"
                        name="demoUrl"
                        value={formData.demoUrl}
                        onChange={handleChange}
                        placeholder="https://demo.example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="githubUrl">GitHub URL</Label>
                      <Input
                        id="githubUrl"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleChange}
                        placeholder="https://github.com/username/repo"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Tags</Label>
                    {/* <TagInput tags={formData.tags} setTags={handleTagsChange} /> */}
                    <p className="text-xs text-muted-foreground">
                      Press enter or comma to add a tag
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Tech Stack</Label>
                    {/* <TagInput tags={formData.techStack} setTags={handleTechStackChange} /> */}
                    <p className="text-xs text-muted-foreground">
                      Add the technologies used in this project
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-medium">Project Details</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="challenge">Challenge</Label>
                    <Textarea
                      id="challenge"
                      name="challenge"
                      value={formData.details.challenge}
                      onChange={handleDetailsChange}
                      placeholder="What problem did this project solve?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="solution">Solution</Label>
                    <Textarea
                      id="solution"
                      name="solution"
                      value={formData.details.solution}
                      onChange={handleDetailsChange}
                      placeholder="How did you solve the problem?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="impact">Impact</Label>
                    <Input
                      id="impact"
                      name="impact"
                      value={formData.details.impact}
                      onChange={handleDetailsChange}
                      placeholder="What was the outcome or impact?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Key Features</Label>
                    {/* <TagInput tags={formData.details.features} setTags={handleFeaturesChange} /> */}
                    <p className="text-xs text-muted-foreground">
                      Add the key features of this project
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Screenshots</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addScreenshot}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Screenshot
                  </Button>
                </div>
                <div className="mt-4 space-y-6">
                  {formData.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="relative space-y-4 rounded-md border p-4"
                    >
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2"
                        onClick={() => removeScreenshot(index)}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor={`screenshot-title-${index}`}>
                            Title
                          </Label>
                          <Input
                            id={`screenshot-title-${index}`}
                            value={screenshot.title}
                            onChange={(e) =>
                              handleScreenshotChange(
                                index,
                                "title",
                                e.target.value
                              )
                            }
                            placeholder="Screenshot title"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`screenshot-image-${index}`}>
                            Image URL
                          </Label>
                          <Input
                            id={`screenshot-image-${index}`}
                            value={screenshot.image}
                            onChange={(e) =>
                              handleScreenshotChange(
                                index,
                                "image",
                                e.target.value
                              )
                            }
                            placeholder="https://example.com/screenshot.jpg"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`screenshot-description-${index}`}>
                          Description
                        </Label>
                        <Input
                          id={`screenshot-description-${index}`}
                          value={screenshot.description}
                          onChange={(e) =>
                            handleScreenshotChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Brief description of this screenshot"
                        />
                      </div>
                    </div>
                  ))}
                  {formData.screenshots.length === 0 && (
                    <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
                      <p className="text-sm text-muted-foreground">
                        No screenshots added yet
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview">
            <Card>
              <CardContent className="pt-6">
                <ProjectPreview project={formData} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </form>
  );
}
