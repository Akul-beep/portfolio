# Resume

## On the portfolio site

- **View:** `/resume` — in-browser PDF viewer
- **Download:** `public/resume.pdf` (exported from `akul_nehra_resume_final.tex`)

After updating the LaTeX, recompile and copy the PDF:

```bash
cp /path/to/Akul_Nehra_Resume_FINAL.pdf ../public/resume.pdf
```

## Overleaf

1. Upload `akul_nehra_resume_final.tex`
2. Compiler: **pdfLaTeX** → Recompile
3. Download PDF → replace `public/resume.pdf`

## Files

| File | Purpose |
|------|---------|
| `akul_nehra_resume_final.tex` | Current resume source (final) |
| `../public/resume.pdf` | Served on site + download |
| `master-resume.md` | Source of truth for tailoring |
