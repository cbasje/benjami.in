import groq from "groq";

export const projectsQuery = groq`
*[_type == "project" && defined(slug.current) && __i18n_lang == $locale] {
  title,
  description,
  company,
  colour,
  headerImage,
  excerpt,
  content,
  seo,
  publishedAt,
  categories[] -> { _id, title },
  "slug": slug.current,
  "locale": __i18n_lang
}`;

export const projectPathsQuery = groq`
*[_type == "project" && defined(slug.current) && defined(__i18n_lang)] {
  "slug": slug.current,
  "locale": __i18n_lang
}
`;

export const categoryPathsQuery = groq`
*[_type == "category" && defined(slug.current) && defined(__i18n_lang)] {
  "slug": slug.current,
  "locale": __i18n_lang
}
`;

export const homeQuery = groq`
*[_type == "home" && __i18n_lang == $locale] | order(_updatedAt desc) [0] {
  _id,
  title,
  description,
  callToAction,
  links[] {
    _type == 'reference' => @->{
      _type,
      colour,
      'slug': 'project/' + slug.current,
      'title': title + ' project',
      'image': headerImageRound,
    },
    _type == 'general-link' => {
      _type,
      colour,
      url,
      'slug': slug.current,
      title,
      image,
    }
  },
  "locale": __i18n_lang
}
`;

export const notFoundQuery = groq`
*[_type == "not-found" && __i18n_lang == $locale] | order(_updatedAt desc) [0] {
  title,
  "locale": __i18n_lang
}
`;

export const globalQuery = groq`
*[_type == "global" && __i18n_lang == $locale] [0] {
  _id,
  siteName,
  siteKeywords,
  defaultSeo,
  "locale": __i18n_lang
}
`;
