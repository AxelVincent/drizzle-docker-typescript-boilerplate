# TypeScript Boilerplate with Drizzle, Docker, and PNPM

A minimal boilerplate using TypeScript, Drizzle ORM, Docker, and PNPM.

**Very easy to use for quick scripting with a local database**

## Features

- **TypeScript** for type safety
- **Drizzle ORM** for database operations
- **Docker** for containerization
- **Biome** for linting and formatting
- **PNPM** as the package manager

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/axelvincent/drizzle-docker-typescript-boilerplate.git
cd drizzle-docker-typescript-boilerplate
```

### 2. Install

```bash
pnpm install
```

### 3. Start docker

```bash
docker-compose up
```

### 4. Create migration file & migrate

```bash
pnpm db:generate
```

```bash
pnpm db:migrate
```

### 5 Usage

```bash
pnpm dev
```

```bash
pnpm scripts:example
```
