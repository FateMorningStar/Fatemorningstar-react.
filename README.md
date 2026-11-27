# GitHub Profile Recreation (React)

A responsive GitHub-profile-inspired page built from reusable React components.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
npm run preview
```

## Component structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProfileHeader.jsx
│   ├── ProfileSidebar.jsx
│   ├── RepositoryCard.jsx
│   ├── RepositoryList.jsx
│   └── ContributionGraph.jsx
├── data/
│   └── repositories.js
├── App.jsx
├── main.jsx
└── style.css
```

## Before submitting

- Check `src/data/repositories.js` and replace the sample repository entries with the exact repositories on your GitHub account.
- Confirm your profile name, bio, location, and avatar in `ProfileHeader.jsx` and `ProfileSidebar.jsx`.
- The contribution graph is decorative sample data, not live GitHub activity.
- No API key or GitHub access token is used. The profile and repository details are local static data.

## GitHub Pages

The Vite base path is configured for `https://fatemorningstar.github.io/fatemorningstar-react/`.
In repository Settings → Pages, set the source to **GitHub Actions**.
