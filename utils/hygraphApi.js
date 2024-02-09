import { request, gql } from "graphql-request";

const apiKey = `https://api-eu-west-2.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

export const getCourseById = async ({ id }) => {
  const query = gql`
    query MyQuery {
      list(where: { slug: "${id}" }) {
        id
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            yturl
            video {
              url
            }
            shortDesc
            slug
          }
        }
      }
    }
  `;
  const result = await request(apiKey, query);
  return result;
};

export const getSideBanner = async () => {
  const query = gql`
    query getBanner {
      sideBanners {
        banner {
          url
        }
        name
        url
      }
    }
  `;

  const result = await request(apiKey, query);
  return result;
};

export const getAllCourseLists = async () => {
  const query = gql`
    query getAllCourses {
      lists {
        id
        description
        name
        author
        free
        slug
        totalChapters
        youtubeUrl
        chapter {
          ... on Chapter {
            id
            name
            slug
            yturl
            shortDesc
          }
        }
        banner {
          url
        }
      }
    }
  `;

  const result = await request(apiKey, query);
  return result;
};
