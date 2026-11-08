# EcoPulse Pakistan — Campus Climate Action Series

A one-page website for the EcoPulse Pakistan civics and community engagement project: four workshops that turn climate awareness into everyday action at Lahore universities.

Built with plain HTML, CSS and JavaScript. There is no build step, so it works on Netlify as-is.

## Project structure

```
index.html
style.css
script.js
logos/
  cmaced.png
  sep.png
  sdg-hub.png
  superior-university.png
README.md
```

Keep the `logos` folder next to `index.html`, or the partner logos will not show.

## Run locally

Open `index.html` in any browser. No server or installation needed.

## Deploy on Netlify

**Option 1: Drag and drop**
1. Go to https://app.netlify.com/drop
2. Drag the whole project folder into the page.

**Option 2: GitHub**
1. Create a new GitHub repository and upload all the files, keeping the `logos` folder.
2. In Netlify choose Add new site > Import an existing project, then pick the repository.
3. Leave the build command empty and set the publish directory to `/`.
4. Click Deploy.

## Contact form

The form uses Netlify Forms. After the first deploy, messages appear in the Netlify dashboard under Forms. No extra setup is needed.

## Editing content

- Text and numbers: `index.html`
- Colours, spacing and animations: `style.css` (colours are at the top, under `:root`)
- Counters, scroll effects and menu: `script.js`
- Logos: replace the PNG files in `logos/`, keeping the same file names

## Credits

A Civics and Community Engagement project in partnership with CMACED (Children Muhammad Akram Center for Entrepreneurship Development), the Social Entrepreneurship Program, SDG Hub and Superior University.
