import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
}

const SITE = "https://useorigin.pages.dev";
const SITE_NAME = "Origin";
const DEFAULT_TITLE = "Origin — Community-Governed Decentralized Treasury";
const DEFAULT_DESC =
  "A community-governed treasury connecting independent creators with decentralized, milestone-gated funding.";

export default function SEO({
  title,
  description,
  path = "/",
  type = "website",
}: SEOProps) {
  const pageTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESC;
  const canonical = `${SITE}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${SITE}/opengraph.webp`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={`${SITE}/opengraph.webp`} />
    </Helmet>
  );
}
