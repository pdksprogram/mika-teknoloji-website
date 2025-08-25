# Mika Teknoloji Kontrol Sistemleri Website

## Overview

This is a corporate website for Mika Teknoloji Kontrol Sistemleri, a modern Turkish technology company specializing in Personnel Attendance Control Systems (PDKS) and security solutions. The website serves as a marketing platform showcasing their products and services including WebPDKS, QR-Patrol, access control systems, face recognition, and RFID solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (Latest)

- **Page Loading Animations (January 2025)**: Added comprehensive loading and motion animations
  - Created LoadingScreen component with progress bar and company logo animation
  - Implemented smooth page transitions using Framer Motion with fade-in effects
  - Added scroll-triggered animations for all page sections (Hero, Features, CTA)
  - Enhanced card hover effects with lift animations and icon scaling
  - Added button hover effects with scale transforms
  - Implemented staggered animation sequences for better visual flow

- **Company Rebranding (January 2025)**: Complete rebrand from "Özgür Zaman" to "Mika Teknoloji"
  - Updated all company names, logos, and branding elements
  - Changed color scheme to modern pink/coral theme (hsl(355, 84%, 65%))
  - Updated email addresses from @ozgurzaman.com to @mikateknoloji.com
  - Renamed files from ozgurzaman-* to mikateknoloji-*
  - Updated promotional messaging and company descriptions
  - Logo initials changed from "ÖZ" to "MT"

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with Turkish URL paths (/hakkimizda, /cozumler, /urunler, /iletisim)
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Hookform resolvers for validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: Hot reload with Vite integration for development mode
- **Storage**: Pluggable storage interface with in-memory implementation (MemStorage)
- **API Structure**: RESTful API with /api prefix routing

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL via Neon Database serverless
- **Schema**: Users table with UUID primary keys, username/password fields
- **Migrations**: Drizzle Kit for schema migrations and database operations

### Component Architecture
- **Design System**: Shadcn/ui components with consistent styling patterns
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Sticky header with mobile hamburger menu
- **Pages**: Static marketing pages (Home, About, Solutions, Products, Contact)

### Build System
- **Frontend Build**: Vite with React plugin and TypeScript compilation
- **Backend Build**: ESBuild for server-side bundling
- **Development**: Concurrent development server with HMR
- **Production**: Static asset serving with Express integration

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL serverless database connection
- **drizzle-orm & drizzle-kit**: Database ORM and migration toolkit
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing

### UI Framework
- **@radix-ui/***: Comprehensive collection of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library for consistent iconography

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment

### Form and Validation
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for various schema libraries
- **zod**: Runtime type validation and schema definition

### Additional Utilities
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **nanoid**: Unique ID generation
- **cmdk**: Command menu component functionality