# Arnold.dev — Developer Portfolio

A responsive personal developer portfolio built with HTML5, CSS3, and vanilla JavaScript.

## Features

- Modern dark interface with blue and purple accents
- Responsive navigation for desktop and mobile
- Animated hero illustration and scroll reveal effects
- About, skills, project showcase, GitHub, and contact sections
- Live public GitHub profile statistics using the GitHub REST API
- Contact form that opens the visitor's email application
- Reduced-motion accessibility support
- No frontend framework or build step required

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser.

For a local development server, you can use the VS Code Live Server extension or Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize before publishing

1. In `index.html`, update the email placeholder `YOUR_EMAIL@example.com`.
2. In `assets/js/main.js`, update the `recipient` constant to the same email address.
3. Check each project link and replace placeholder repository URLs with your actual repositories.
4. Review the skills and project descriptions so they accurately reflect your work.
5. Add your LinkedIn URL when you create your profile.

## Publish with GitHub Pages

1. Create a public repository named `arnold-portfolio` under `arnold1121`.
2. Upload all files and folders from this project. Keep `index.html` in the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for deployment. Your site should be available at:

   `https://arnold1121.github.io/arnold-portfolio/`

## Contact form note

This is a static website. The contact form uses a `mailto:` link to open the visitor's email app; it does not send or store messages on a server. For a production form that submits directly, connect a trusted form service or build a backend API.

## GitHub API note

The GitHub statistics card requests public profile information from `api.github.com`. If the request is unavailable or rate-limited, the rest of the site continues to work.

## License

You may adapt this portfolio for your personal use.
