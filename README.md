# Babbar Payment Solutions

Corporate website for Babbar Payment Collection and Solutions Private Limited.

## Development

Requires Node.js 20.9+ and pnpm.

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
