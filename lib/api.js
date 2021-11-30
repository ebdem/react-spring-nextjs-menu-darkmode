import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const postFields = `
title,
'category': postCategory->name,
description,
'slug': slug.current,
'author': author->{name ,'avatar':image.asset->url},
date,
'image': openGraphImage.asset->url,
_createdAt,
_updatedAt,
`;

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

export async function getAllPosts(
  { offset = 0, date = "desc", category = "all", search = "" } = {
    offset: 0,
    date: "desc",
    category: "all",
    search: ""
  }
) {
  const results =
    +search === 0
      ? category === "all"
        ? await client.fetch(
            `*[_type == "post"]{${postFields}} | order(_createdAt ${date})[${offset}...${
              offset + 3
            }]`
          )
        : await client.fetch(
            `*[_type == "post" && postCategory->name == "${category}"]{${postFields}} | order(_createdAt ${date})[${offset}...${
              offset + 3
            }]`
          )
      : category === "all"
      ? await client.fetch(
          `*[_type == "post" && title match "*${search}*"]{${postFields}} | order(_createdAt ${date})[${offset}...${
            offset + 3
          }]`
        )
      : await client.fetch(
          `*[_type == "post" && title match "*${search}*" && postCategory->name == "${category}"]{${postFields}} | order(_createdAt ${date})[${offset}...${
            offset + 3
          }]`
        );

  return results;
}

export async function getAllPostsSingle() {
  const results = await client.fetch(
    `*[_type == "post"]{${postFields}} | order(_createdAt desc)`
  );

  return results;
}

export async function getAllCategories() {
  const results = await client.fetch(
    `*[_type == "postCategory"]{name,'slug':slug.current} | order(_createdAt asc)`
  );

  return results;
}

export async function getPostBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "post" && slug.current == $slug]{
      ${postFields} 
      body[]{...,"asset": asset->url}
    }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}

const siteConfigFields = `
_updatedAt,
title,
url,
lang,
'logo': logo.asset->url,
'frontpage': frontpage -> {description,"openGraphImage": openGraphImage.asset -> url, title},
mainNavigation[] -> {'page': page -> title , 'slug': slug.current} ,
footerNavigation[] -> {'page': page -> title , 'slug': slug.current} ,
footerText[]{
  ...,
  "asset": asset->url,
  markDefs[]{
    ...,
    _type == "internalLink" => {
      "slug": @.reference->slug
    }
  }
},
`;

export async function getSiteConfig() {
  const result = await client
    .fetch(`*[_type == "site-config"]{${siteConfigFields}}`)
    .then((res) => res?.[0]);

  return result;
}

const ServicesFields = `
title,
'slug': slug.current,
'openGraphImage': openGraphImage.asset -> url,
description,
`;

const PageFields = `
disallowRobots,
includeInSitemap,
'title': page -> title,
'description': page -> description,
'content': page -> content[],
'openGraphImage': page -> openGraphImage.asset -> url,
'slug':slug.current,
'posts': *[_type == "post"]{${postFields}} | order(_createdAt desc),
'services': *[_type == "service"] {${ServicesFields}} | order(_createdAt asc)
`;

export async function getPageBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "route" && slug.current == $slug]
      {
        ${PageFields}       
      }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}

export async function getAllPages() {
  const res = await client.fetch(
    `*[_type == "route"]{${PageFields}} | order(_createdAt asc)`
  );

  return res;
}
