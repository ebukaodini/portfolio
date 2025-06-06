# Developer Portfolio & Blog

A modern, full-stack portfolio and blog platform built with Next.js, TypeScript, and MDX.
Showcase your projects, write blog posts, and manage content with a beautiful, customizable UI and admin features.

### FEATURES

- Project Showcase: Highlight your best work with rich project pages, screenshots, and tech stack details.
- Blog Engine: Write posts in MDX with support for categories, tags, featured posts, and reading time.
- Admin Panel: Create, edit, and delete blog posts and projects with instant feedback and toasts.
- Dynamic Routing: SEO-friendly URLs for projects and blog posts.
- Server Components: Fast, scalable rendering using Next.js App Router.
- Custom Content System: Store content as MDX files for easy versioning and portability.
- Responsive Design: Mobile-friendly and accessible UI built with Tailwind CSS and Radix UI.
- TypeScript: Fully typed codebase for safety and maintainability.

### GETTING STARTED

- Clone the repository:
   ```bash
   git clone https://github.com/ebukaodini/portfolio.git
   cd portfolio
   ```

- Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

- Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

- Open http://localhost:3000 in your browser.

### CONTENT STRUCTURE

- Projects:
  Stored as MDX files in content/projects/.
  Each file contains YAML frontmatter and Markdown/MDX content.

- Blog Posts:
  Stored as MDX files in content/blogs/.
  Supports nested frontmatter, tags, categories, and more.

### TECH STACK

- Next.js 14+
- TypeScript
- MDX
- Tailwind CSS
- Radix UI
- Lucide Icons
- js-yaml

### FOLDER STRUCTURE

/app                # Next.js app directory (pages, routes, layouts)
/components         # UI and admin components
/content
  /blogs            # Blog posts (MDX)
  /projects         # Project pages (MDX)
/model              # Data fetching and content logic
/utils              # Utilities (MDX/YAML parsing, etc.)

### CONTRIBUTING

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.


### LICENSE

MIT
