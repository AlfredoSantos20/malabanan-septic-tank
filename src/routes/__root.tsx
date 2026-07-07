import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { BRAND } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Malabanan Siphoning Septic Tank | Malabanan Septic | Septic Tank Siphoning" },
      {
        name: "description",
        content:
          "Malabanan — septic, tank, and siphoning services. Malabanan septic, malabanan siphoning, septic tank, siphoning malabanan, malabanan septic tank, malabanan siphoning septic tank. 24/7 declogging and plumbing in Tacloban, Iloilo, Bacolod, Quezon City, and Bohol.",
      },
      {
        name: "keywords",
        content:
          "malabanan, septic, tank, siphoning, malabanan septic, malabanan siphoning, septic tank, siphoning malabanan, malabanan tank, malabanan septic tank, malabanan siphoning septic, malabanan siphoning septic tank, malabanan siphoninc septic, septic siphoning, siphoning septic, siphoning septic tank, septic tank siphoning, malabanan siphoning tank, malabanan septic siphoning, malabanan plumbing, malabanan declogging, septic tank cleaning, septic tank cleaning malabanan, malabanan siphoning services, siphoning services, septic services",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Malabanan Siphoning Septic Tank | Malabanan Septic | Septic Tank Siphoning" },
      {
        property: "og:description",
        content:
          "Malabanan septic, malabanan siphoning, septic tank, and siphoning malabanan services. Malabanan siphoning septic tank — 24/7 declogging and plumbing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://malabanansiphoningseptictank.com/" },
      { property: "og:site_name", content: "Malabanan Siphoning Septic Tank" },
      { property: "og:image", content: "https://malabanansiphoningseptictank.com/assets/malabananlogo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Malabanan Siphoning Septic Tank | Malabanan Septic | Septic Tank Siphoning" },
      {
        name: "twitter:description",
        content:
          "Malabanan septic, malabanan siphoning, septic tank, siphoning malabanan, and malabanan siphoning septic tank services.",
      },
      { name: "twitter:image", content: "https://malabanansiphoningseptictank.com/assets/malabananlogo.png" },
      { name: "theme-color", content: "#0ea5e9" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap",
      },
      {
        rel: "icon",
        href: "/assets/malabananlogo.png",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        href: "/assets/malabananlogo.png",
      },
      {
        rel: "canonical",
        href: "https://malabanansiphoningseptictank.com/",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const phoneE164 = `+63${BRAND.phones[0].replace(/^0+/, "")}`;
  const jsonLd = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: BRAND.name,
              alternateName: [
                "Malabanan",
                "Malabanan Septic",
                "Malabanan Siphoning",
                "Septic Tank",
                "Siphoning Malabanan",
                "Malabanan Septic Tank",
                "Malabanan Siphoning Septic",
                "Malabanan Siphoning Septic Tank",
                "Malabanan Siphoninc Septic",
                "Septic Siphoning",
                "Siphoning Septic",
                "Siphoning Septic Tank",
                "Septic Tank Siphoning",
                "Malabanan Siphoning Tank",
                "Malabanan Septic Siphoning",
              ],
              url: "https://malabanansiphoningseptictank.com/",
            },
            {
              "@type": "Plumber",
              name: BRAND.name,
              alternateName: [
                "Malabanan",
                "Malabanan Septic",
                "Malabanan Siphoning",
                "Septic Tank",
                "Siphoning Malabanan",
                "Malabanan Septic Tank",
                "Malabanan Siphoning Septic",
                "Malabanan Siphoning Septic Tank",
                "Malabanan Siphoninc Septic",
                "Septic Siphoning",
                "Siphoning Septic",
                "Siphoning Septic Tank",
                "Septic Tank Siphoning",
              ],
              url: "https://malabanansiphoningseptictank.com/",
              logo: "https://malabanansiphoningseptictank.com/assets/malabananlogo.png",
              image: "https://malabanansiphoningseptictank.com/assets/malabananlogo.png",
              telephone: phoneE164,
              areaServed: [
                "Philippines",
                "Tacloban",
                "Iloilo",
                "Bacolod",
                "Quezon City",
                "Bohol",
              ],
              sameAs: [],
              openingHours: "Mo-Su 00:00-23:59",
            },
          ],
        }),
      }}
    />
  );

  // In SSR, render full document. In SPA (client), render a fragment.
  if (typeof document === "undefined") {
    return (
      <html lang="en">
        <head>
          <HeadContent />
          {jsonLd}
        </head>
        <body>
          {children}
          <Scripts />
        </body>
      </html>
    );
  }

  return (
    <>
      <HeadContent />
      {jsonLd}
      {children}
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
