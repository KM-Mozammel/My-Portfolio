import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCardType?: string;
};

const SEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  twitterCardType = "summary_large_image",
}: SEOProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    <meta name="twitter:card" content={twitterCardType} />
  </Head>
);

export default SEO;