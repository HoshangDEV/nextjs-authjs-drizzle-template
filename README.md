# NextJS NextAuth Drizzle Template

A modern, full-stack template featuring Next.js 15+, NextAuth v5, Drizzle ORM, and TypeScript.

## Features

- 🚀 [Next.js 15+](https://nextjs.org/) with App Router
- 🔐 [NextAuth v5](https://next-auth.js.org/) for authentication
- 🛢️ [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 📝 [TypeScript](https://www.typescriptlang.org/) for type safety
- 🔍 ESLint configured for Next.js
- ⚡ Turbopack enabled for faster development

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- GitHub OAuth credentials (for authentication)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/HoshangDEV/nextjs-nextauth-drizzle-template
cd nextjs-nextauth-drizzle-template
```

2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables:

    Fill in your `.env` file with the following:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
AUTH_SECRET="your-auth-secret"
```

4. Initialize the database:

```bash
bun drizzle-kit generate
bun drizzle-kit push
```

5. Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                   # Next.js app directory
├── auth/                  # Authentication configuration
├── components/           # React components
├── drizzle/              # Database schema and configuration
│   ├── schema.ts        # Database schema
│   └── index.ts         # Database connection
└── public/              # Static assets
```

## Authentication

This template uses NextAuth v5 with GitHub authentication out of the box. Additional providers can be added in `auth/config.ts`.

## Database

The template uses Drizzle ORM with PostgreSQL. The schema is defined in `drizzle/schema.ts` and includes tables for:
- Users
- Accounts
- Sessions
- Verification tokens
- Authenticators (for WebAuthn)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Tailwind CSS](https://tailwindcss.com/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
