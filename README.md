# Babbar Payment Solutions

Corporate website for Babbar Payment Collection and Solutions Private Limited.

## Development

Requires Node.js 22 and pnpm 10.34.2 (pinned in package.json).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

## Validation

```sh
pnpm typecheck
pnpm build
```

## Website

Includes company information, five solution pages, an illustrative workflow demo, insights, FAQs, contact information, and privacy and terms pages. Legacy ecommerce URLs redirect to the relevant Babbar destinations.

The inquiry form prepares a draft in the visitor's email application. It does not submit inquiries to a backend. The demo does not process real financial transactions.

The operational address is M.P. Nagar, Bhopal. A complete registered-office address has not yet been provided.

## Project Structure

- `app/`: Next.js routes, metadata, and global styles.
- `components/babbar/`: Active Babbar website components and content.
- Other component and asset folders retain resources from the original template.

See LICENSE for the retained template license.

## Netlify Deployment

Import this repository in Netlify and select the `main` branch. Leave the base directory empty (repository root). The committed `netlify.toml` sets the build command to `pnpm run build`, publish directory to `.next`, Node.js to 22, and the hoisting option required for Next.js with pnpm. Netlify applies its Next.js adapter automatically.

After changing these settings, retry the deploy with a cleared build cache. Do not configure `out` or `build` as the publish directory: this project uses the Next.js runtime, including redirects.
