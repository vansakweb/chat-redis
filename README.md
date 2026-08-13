bun create next-app@latest ./ --yes

bunx --bun shadcn@latest init --preset b0 --template next

bun add prisma tsx @types/node @types/pg --dev
bun add @prisma/client @prisma/adapter-pg pg dotenv

bunx --bun prisma init --datasource-provider postgresql --output ../generated/prisma

bunx prisma generate
bunx prisma db push
npx prisma studio

bun install @upstash/realtime @upstash/redis zod

bun add @auth/prisma-adapter next-auth@beta
bunx auth secret


git add .