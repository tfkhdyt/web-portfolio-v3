import { metaTagsData } from '@/data/metaTags';

const MetaTags = () => {
  return (
    <>
      {/* google site verification */}
      <meta
        name='google-site-verification'
        content='JCu7ig2hkiijnjnq8doWrgNg9HPCpWwo2WrTQWko8Cs'
      />
      {/* metadata */}
      <meta name='description' content={metaTagsData.deskripsi} />
      <meta name='keywords' content={metaTagsData.keywords.join(',')} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:description' content={metaTagsData.deskripsi} />
      <meta
        name='twitter:image'
        content={metaTagsData.link + metaTagsData.thumbnail}
      />
      <meta name='twitter:title' content={metaTagsData.title} />
      <meta property='og:description' content={metaTagsData.deskripsi} />
      <meta
        property='og:image'
        content={metaTagsData.link + metaTagsData.thumbnail}
      />
      <meta property='og:title' content={metaTagsData.title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={metaTagsData.link} />
      <link rel='image_src' href={metaTagsData.link + metaTagsData.thumbnail} />
      <link
        rel='icon'
        type='image/x-icon'
        href={metaTagsData.link + metaTagsData.favicon}
      />
    </>
  );
};

export default MetaTags;
