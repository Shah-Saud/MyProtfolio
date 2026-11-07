# Static Assets Directory (`public/assets/`)

Place static files here so they are served directly at `/assets/<filename>` (or `<repo-base>/assets/<filename>` on GitHub Pages):

1. **Resume PDF**:
   - Place your real resume PDF at:
     `public/assets/Shah-Saud-Resume.pdf`
   - Or update `resume.filePath` in `src/data/portfolioData.ts`.

2. **Project Screenshots (Optional)**:
   - Place real project screenshots in `public/assets/projects/` (for example, `public/assets/projects/smart-printer.webp`).
   - Then set the `screenshot` property on the corresponding project item in `src/data/portfolioData.ts`.
   - When `screenshot` is omitted or empty, the portfolio automatically renders a custom interactive product preview illustration for that project.
