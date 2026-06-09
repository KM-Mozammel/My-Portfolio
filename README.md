First, run the development server:
npm run dev
Open [http://localhost:3000](http://localhost:3000);
## Deployed on Vercel at : https://mozammel-portfolio.vercel.app/


New Project Structure 
├── src/
│   ├── app/
│   │   ├── (public)/              # Parentheses mean "Route Group" (invisible in URL)
│   │   │   ├── page.tsx           # ◄ FIX: This is your main portfolio homepage (/)
│   │   │   ├── projects/
│   │   │   │   └── page.tsx       # Your public projects showcase (/projects)
│   │   │   └── blog/              # ◄ FIX: Unified blog directory
│   │   │       ├── page.tsx       # Your public blog list page (/blog)
│   │   │       └── [slug]/        # ◄ FIX: Nested folder inside blog
│   │   │           └── page.tsx   # Individual dynamic blog posts (/blog/my-post)
│   │   │
│   │   ├── admin/                 # Private Admin Dashboard Panel
│   │   │   ├── layout.tsx         # Outlines admin sidebar & handles security guard
│   │   │   ├── page.tsx           # Admin main page Overview/Analytics (/admin)
│   │   │   ├── blog/
│   │   │   │   └── page.tsx       # ◄ FIX: Add this for managing blogs (/admin/blog)
│   │   │   └── projects/
│   │   │       └── page.tsx       # ◄ FIX: Add this for managing projects (/admin/projects)
│   │   │
│   │   ├── api/                   # Backend API Route Handlers
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/ # ◄ FIX: Change 'auth\login' to this for NextAuth standard
│   │   │   │       └── route.ts
│   │   │   └── metrics/
│   │   │       └── route.ts       # Endpoint tracking visits (/api/metrics)
│   │   │
│   │   ├── globals.css
│   │   └── middleware.ts          # Root-level route middleware matcher


AI Application --->

User:
Tell me about Mozammel's ASP.NET experience
↓
Vector Search
↓
Relevant Portfolio Data
↓
LLM Response


API STRUCTURE
src/app/api/
  public/
    profile/route.ts
    projects/route.ts
    skills/route.ts
    experience/route.ts

  admin/
    projects/route.ts
    projects/[id]/route.ts
    skills/route.ts
    experience/route.ts
    contacts/route.ts