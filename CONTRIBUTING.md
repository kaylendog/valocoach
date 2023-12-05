# Contribution Guidelines

## Setup

You will require a number of pre-requisites to be installed on your machine before you can start
contributing to this project. Please follow the instructions below to get started.

- [Node.js](https://nodejs.org/en/) 18 or above
- [PNPM](https://pnpm.io/) 8.9.0 or above
- [Rust](https://www.rust-lang.org/) 1.72.0 or above
- [Turborepo](https://turbo.build/repo) 1.10.0 or above

### Node.js

This project requires Node.js to be installed on your machine. You can download the latest version
of Node.js from the [official website](https://nodejs.org/en/).

I recommend using [nvm](https://github.com/nvm-sh/nvm) to install and manage Node.js versions on
your machine.

**All of the Node.js components of this poject use Node 16 or above.**

### PNPM

We use PNPM to manage our Node.js and JavaScript dependencies. This is a slightly faster and fancier
package manager than the default, NPM.

You can install PNPM using NPM itself:

```sh
npm install -g pnpm
```

### Rust

The native components of this project are written in Rust. You can use Rust's official toolchain
installer, [rustup](https://rustup.rs/), to install Rust on your machine.

### Turborepo

Turborepo is a fancy tool for managing various aspects of a monorepo. You can install it form their
website, [turbo.build](https://turbo.build/repo).

## Development

We are making use of [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
for our development process. This is a workflow defined by a single trunk branch, `main`, and
feature branches for each new feature or bug fix.

### Branches

We use the following branch naming conventions:

- `main` - the main branch of the repository, containing the latest stable code configuration, etc.
- `feat/<user>/<name>` - a new feature branch, implementing new functionality, or changing existing
  functionality
- `fix/<user>/<name>` - a bug fix branch, fixing a bug or mistake in the source
- `ref/<user>/<name>` - a code refactor branch, refactoring existing code to improve its quality,
  readability, or performance
- `docs/<user>/<name>` - a documentation branch, adding or changing documentation
- `test/<user>/<name>` - a test branch, adding or changing tests.

  **Note:** These branches should generally be avoided in favour of adding tests alongside new
  features or bug fixes.

- `chore/<user>/<name>` - a chore branch, adding or changing non-code files, such as configuration

### Commits

We use the following commit message conventions:

- `feat: <message>` - a new feature
- `fix: <message>` - a bug fix
- `ref: <message>` - a code refactor

These are enforced by [commitlint](https://commitlint.js.org/), and is set up to run automatically
when you commit code.

**All commits should ideally be signed using GPG and keys stored on your GitHub account.**

### Style

All of the code in this repository uses a consistent code style, enforced by a variety of tools.

#### JavaScript and Typescript

Our JavaScript and Typescript code uses [Prettier](https://prettier.io/) to enforce a consistent
code style, and [ESLint](https://eslint.org/) to catch common bad practices.

#### Rust

Our Rust code uses the built-in `rustfmt` tool to enforce a consistent code style.
