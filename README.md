# React GitHub Actions CI/CD Demo

Author: **Dennis Nguyen**

This project demonstrates a complete CI/CD pipeline for a React application using GitHub Actions. The workflow includes automated building, testing, and deployment to GitHub Pages using `main` and `production` branches, with `GitHub Actions` enforcing checks on pull requests before merging.

## CI/CD Pipeline Features

- ✅ Automated builds on push and pull requests to `main` and `production` branches
- ✅ Unit testing with Jest and React Testing Library
- ✅ ESLint code quality checks
- ✅ Automatic deployment to GitHub Pages from `production` branch
- ✅ Dependency caching for faster builds
- ✅ Node.js version management across workflows

## Workflow Files

This project includes two workflow files:

1. **build-and-test.yml**: Runs on the `main` branch and on pull requests to `main`, performing code quality checks, testing, and building.
2. **jekyll-gh-pages.yml**: Deploys the application to GitHub Pages when code is merged into the `production` branch.

### Workflow Overview

1. **Setup**: Configures the Node.js environment.
2. **Install**: Installs project dependencies with caching for faster builds.
3. **Lint**: Runs ESLint to check code quality.
4. **Test**: Executes unit tests.
5. **Build**: Creates a production build of the application.
6. **Deploy**: Deploys the application to GitHub Pages when merged into `production`.

## Branching Strategy

- **Main Branch (`main`)**: Used for developing new features and running tests. Developers must create a pull request to `main` for any new feature, and GitHub Actions will run tests and checks automatically. Direct pushes to `main` are restricted, and merges are blocked if tests fail.
- **Production Branch (`production`)**: Used exclusively for deployment to GitHub Pages. After code is reviewed and tested on `main`, a pull request is created to merge `main` into `production`, triggering deployment.

## GitHub Pages Setup

To deploy to GitHub Pages:
1. Set the `homepage` field in `package.json` to your GitHub Pages URL: `https://<username>.github.io/<repo-name>`.
2. Go to your repository **Settings > Pages** and set the source to the `gh-pages` branch (this branch is automatically created by the deployment workflow).
3. Deployments are triggered automatically by merging the latest code from `main` to `production`.

## Local Development

To run the application locally:
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Run tests:
   ```bash
   npm test
   ```
5. Create a production build:
   ```bash
   npm run build
   ```

## Project Structure

```
├── .github/
│   └── workflows/
│       ├── build-and-test.yml
│       └── jekyll-gh-pages.yml
├── src/
│   ├── App.jsx
│   ├── App.test.jsx
│   └── App.css
├── package.json
├── .gitignore
└── README.md
```

## Contributing

1. **Feature Development**: Create a new branch from `main` and implement your feature.
2. **Testing and Code Quality**: Ensure your code passes all tests and complies with ESLint rules. Create a pull request to `main`.
3. **CI Checks**: All pull requests to `main` must pass automated checks (build, lint, and test). Merging is restricted if tests fail.
4. **Deployment**: After a feature is tested and approved in `main`, create a pull request to merge `main` into `production`. This will trigger the deployment workflow, and the latest version will be deployed to GitHub Pages.

## Starting Your Own CI/CD Demo

To use this project as a starting point for your own CI/CD demo:
1. **Fork** the repository.
2. Update the `homepage` field in `package.json` with your own GitHub Pages URL.
3. Customize the workflow files (`build-and-test.yml` and `jekyll-gh-pages.yml`) as needed.
4. Experiment with the branching and deployment strategy to see GitHub Actions CI/CD in action!
