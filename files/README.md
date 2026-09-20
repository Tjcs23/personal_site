# Wren Ashcombe — personal site

A plain HTML/CSS/JS site — no build step, no framework, no dependencies to
install. Open any `.html` file directly in a browser and it works. Edit any
file in a text editor and refresh to see the change.

## File structure

```
index.html        Home page
blog.html          Blog listing ("The Commonplace Book")
blog-post.html     One example blog post — duplicate this to add new posts
projects.html       Projects page ("The Workshop")
about.html          About page ("Ex Libris")
css/style.css        All styling — organized into numbered sections
js/main.js            Mobile nav toggle + active-link highlighting
```

There's no templating, so the `<nav>` and `<footer>` markup is repeated at
the top/bottom of every page. If you rename a page or add a new one, update
the nav links in *every* HTML file (a simple find-and-replace across files
works fine).

## First things to change

Everything below is placeholder content — search for it and replace it with
your own:

- **Name & bio** — "Wren Ashcombe" appears in the `<title>`, the nav brand,
  and the hero on `index.html`. The bio paragraph is also in `index.html`.
- **Email & social links** — in the `<footer>` of every page (`mailto:` link
  and the Instagram/Goodreads placeholders).
- **Blog posts** — `blog.html` has four example post *previews*. Each is one
  `<a class="manuscript-card">` block. `blog-post.html` is the template for
  an actual post page — duplicate it for each real post, then link to it
  from a card in `blog.html`.
- **Projects** — `projects.html` has five example `<div class="cabinet-card">`
  blocks. Duplicate/edit/delete as needed.
- **About page** — `about.html` has your bio, a pull quote, and an "interests
  as library catalog" list (the Dewey-style numbers are decorative flavor,
  not meant to be accurate — feel free to change or drop them).
- **Photo** — there are no photos in the site by design (keeps it dependency
  free). To add your own portrait, replace the `.portrait-frame` div in
  `about.html` with an `<img src="images/your-photo.jpg" alt="...">` — you'll
  want to add a small amount of CSS to round/frame it the way the initial is
  framed now.

## Design system (in `css/style.css`)

All colors, fonts, and spacing are defined as CSS variables at the top of
the file, under `:root`. Change a value there and it updates everywhere:

```css
--ink: #15110c;        /* main dark background */
--paper: #f2e8d3;       /* "lit page" surfaces — blog cards, post body */
--oxblood: #a1504c;      /* accent — links, seals */
--gold: #b8934f;          /* hairlines, borders, flourishes */
--forest: #55684a;         /* secondary accent — tag dots */
```

Fonts are loaded from Google Fonts in the `<head>` of each page (Cinzel for
headings, EB Garamond for body text). To change fonts, swap the `<link>`
tags and the `--font-display` / `--font-body` variables in `style.css`.

The rest of the file is organized into numbered sections (nav, hero,
book-spine cards, blog cards, project cards, the about-page spread, footer,
responsive rules) — the section comments make it easy to jump to the part
you want to change.

## Adding a new page

1. Duplicate an existing page closest in structure to what you want.
2. Update the `<title>` and `<meta name="description">`.
3. Add a `<li><a href="yourpage.html">Label</a></li>` to the `.nav-links`
   list in every HTML file.

## Deploying

This is a static site, so any static host works. Two easy free options:

- **GitHub Pages** — push this folder to a GitHub repo, then enable Pages
  in the repo settings (Settings → Pages → deploy from the main branch).
- **Netlify** — drag and drop this folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

No build step is needed for either — the files are already what gets served.
