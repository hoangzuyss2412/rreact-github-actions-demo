# React GitHub Actions Demo

This project demonstrates a complete CI/CD pipeline for a React application using GitHub Actions. The workflow includes building, testing, and deploying the application to GitHub Pages.

## CI/CD Pipeline Features

- ✅ Automated builds on push and pull requests
- ✅ Unit testing with Jest and React Testing Library
- ✅ ESLint code quality checks
- ✅ Automatic deployment to GitHub Pages
- ✅ Dependency caching for faster builds
- ✅ Node.js version management

## Workflow Steps

1. **Setup**: Configures Node.js environment
2. **Install**: Installs project dependencies
3. **Lint**: Checks code quality
4. **Test**: Runs unit tests
5. **Build**: Creates production build
6. **Deploy**: Deploys to GitHub Pages (main branch only)

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Run tests: `npm test`
5. Create production build: `npm run build`

## GitHub Pages Setup

1. Update the `homepage` field in `package.json` with your repository URL
2. Enable GitHub Pages in repository settings
3. Set the source branch to `gh-pages`

## Project Structure

```
├── .github/
│   └── workflows/
│       └── build-and-test.yml
│       └── jekyll-gh-pages.yml
│
├── src/
│   ├── App.jsx
│   ├── App.test.jsx
│   └── App.css
├── package.json
├── .gitignore
└── README.md
```
