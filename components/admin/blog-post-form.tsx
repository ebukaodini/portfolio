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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { TagInput } from "@/components/admin/tag-input";
import { BlogPostPreview } from "@/components/admin/blog-post-preview";
import { useToast } from "@/hooks/use-toast";
import { Edit, Eye } from "lucide-react";
import Editor from "./editor";
import { useFormAutoSave } from "@/hooks/use-autosave";
import { useGitHub } from "@/hooks/use-github";
import { BlogPost } from "@/interfaces/blog-post";
import { slugify } from "@/utils/slugify";
import { generateShortId } from "@/utils/short-id";
import TagInput from "./tag-input";

interface BlogPostFormProps {
  initialData: BlogPost;
}

export function BlogPostForm({ initialData }: BlogPostFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState<BlogPost>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { saveToGitHub } = useGitHub();

  // Use the auto-save hook
  const { clearSavedData } = useFormAutoSave(
    formData,
    setFormData,
    "blog-post"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const { filename, path } = await saveToGitHub(formData.content, {
        id: initialData.id || generateShortId(),
        slug: formData.slug || slugify(formData.title),
        title: formData.title,
        excerpt: formData.excerpt,
        category: formData.category,
        tags: formData.tags || [],
        coverImage: formData.coverImage,
        status: formData.status,
        createdAt: initialData.createdAt || new Date().toISOString(),
        publishedAt:
          formData.status === "published"
            ? formData.publishedAt || new Date().toISOString()
            : null,
        featured: formData.featured || false,
      } as BlogPost);

      // Clear saved data after successful submission
      clearSavedData();

      toast({
        title: "Success",
        description: `Blog post ${
          initialData.id ? "updated" : "created"
        } successfully. File: ${filename}. Path: ${path}`,
      });

      // Redirect to the blog posts list
      router.push("/admin/blog");
    } catch (error) {
      console.log("Error saving blog post:", error);
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
                <Edit className="h-4 w-4" />
                Edit
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    status: value as "draft" | "published",
                  }))
                }
              >
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
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
                        placeholder="Enter post title"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, category: value }))
                        }
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Engineering Notes">
                            Engineering Notes
                          </SelectItem>
                          <SelectItem value="R&D Experiments">
                            R&D Experiments
                          </SelectItem>
                          <SelectItem value="Career Insights">
                            Career Insights
                          </SelectItem>
                          <SelectItem value="Life Beyond Code">
                            Life Beyond Code
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleChange}
                      placeholder="Brief summary of the post"
                      rows={2}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverImage">Cover Image URL</Label>
                    <Input
                      id="coverImage"
                      name="coverImage"
                      value={formData.coverImage}
                      onChange={handleChange}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <div className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-2 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <Editor
                        name="content"
                        markdown={formData.content}
                        onChange={(value) => {
                          setFormData((prev) => ({ ...prev, content: value }));
                        }}
                        placeholder="Write your content here..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <TagInput
                      tags={formData.tags}
                      setTags={(value: string[]) => {
                        setFormData((prev) => ({ ...prev, tags: value }));
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview">
            <Card>
              <CardContent className="pt-6">
                <BlogPostPreview post={formData} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </form>
  );
}
