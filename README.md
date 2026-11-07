# Shah Saud — Senior Android Engineer Portfolio

A fast, responsive, recruiter-focused portfolio website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

Designed for international recruiters, hiring managers, engineering managers, founders, and technical leads evaluating **Shah Saud** for Senior Android Engineer, Android Engineer, and Mobile Engineer opportunities.

---

## 1. Local Development

Make sure you have **Node.js 18+** installed.

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`) to preview the website with hot module replacement.

---

## 2. Production Build & Preview

```bash
# Type-check and build the production bundle into ./dist
npm run build

# Locally preview the production build
npm run preview
```

---

## 3. Deploying to GitHub Pages

This project includes a ready-to-use GitHub Actions workflow at `.github/workflows/deploy.yml` and uses a relative asset base path (`./`) in `vite.config.ts`. It works seamlessly whether hosted at:

- A repository path: `https://USERNAME.github.io/REPOSITORY/`
- A user/organization root domain: `https://USERNAME.github.io/`

### Setup Steps on GitHub:
1. Push this repository to GitHub (`main` or `master` branch).
2. In your GitHub repository, navigate to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Every push to `main` (or manual trigger in the **Actions** tab) will automatically build and deploy the site.

---

## 4. Where to Update Portfolio Content

All portfolio copy, metrics, projects, experience timeline items, technical skills, achievements, and links are centralized in a single structured configuration file:

- **`src/data/portfolioData.ts`**

You can update any section in `src/data/portfolioData.ts` without modifying React UI components:
- `siteConfig`: Name, title, positioning, availability, contact links, resume path, SEO metadata
- `heroMetrics`: Headline credibility metrics
- `aboutContent`: About paragraphs, quick facts, and client/internal product breadth
- `featuredProjects`: The 4 primary featured projects
- `moreProjects`: Additional Google Play Store products
- `experienceTimeline`: Work history and bullet points
- `skillCategories`: Categorized technical skills
- `achievements`: Key measurable achievements
- `aiWorkflowContent` & `engineeringApproach`: Modern engineering workflow and approach cards

---

## 5. Where to Place Your Resume PDF

1. Place your real PDF file inside `public/assets/` named:
   ```text
   public/assets/Shah-Saud-Resume.pdf
   ```
2. Once `public/assets/Shah-Saud-Resume.pdf` is present, every **Download Resume** button in the navbar, hero section, and contact section will directly download/open the PDF in one click.
3. If you want to use a different filename, update `siteConfig.resume.filePath` in `src/data/portfolioData.ts`:
   ```ts
   resume: {
     filePath: '/assets/Shah-Saud-Resume.pdf',
     downloadFilename: 'Shah-Saud-Senior-Android-Engineer-Resume.pdf',
   }
   ```

---

## 6. Where to Add Project Screenshots

1. Place real project screenshot images (`.webp`, `.png`, or `.jpg`) inside:
   ```text
   public/assets/projects/
   ```
   For example: `public/assets/projects/smart-printer.webp`
2. Open `src/data/portfolioData.ts` and set the `screenshot` path on the corresponding item in `featuredProjects`:
   ```ts
   {
     id: 'smart-printer',
     // ...
     screenshot: '/assets/projects/smart-printer.webp',
   }
   ```
3. When `screenshot` is empty (`''`), the card automatically renders a custom engineered product interface visual for that project.

---

## 7. How to Change GitHub, LinkedIn, and Email Links

Open `src/data/portfolioData.ts` and edit `siteConfig.contact`:

```ts
contact: {
  email: 'shah.saud.5872@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shaahsaud/',
  github: 'https://github.com/YOUR_GITHUB_USERNAME',
},
```

If you also want to set a canonical URL once deployed to GitHub Pages, update `siteConfig.seo.canonicalUrl` in `src/data/portfolioData.ts`.
