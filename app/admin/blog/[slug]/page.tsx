import { BlogPostForm } from "@/components/admin/blog-post-form";
import { redirect } from "next/navigation";
import { getBlogPostBySlug } from "@/model/blog";

export default async function EditBlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const isNewPost = params.slug === "new";
  let blogPost;

  if (!isNewPost) {
    blogPost = await getBlogPostBySlug(params.slug);
    if (!blogPost) {
      // Redirect to blog list with a query param
      redirect("/admin/blog?notfound=1");
    }
  } else {
    blogPost = {
      title: "",
      excerpt: "",
      content: "",
      publishedAt: "",
      category: "",
      tags: [],
      coverImage: "",
      status: "draft" as "draft",
      featured: false,
      createdAt: new Date().toISOString(),
    };
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          {isNewPost ? "Create Blog Post" : "Edit Blog Post"}
        </h2>
      </div>
      <BlogPostForm initialData={blogPost} />
    </div>
  );
}
