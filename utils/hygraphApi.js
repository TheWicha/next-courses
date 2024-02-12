import { gql } from "graphql-request";

const apiKey = `https://api-eu-west-2.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

export const coursesById = gql`
  query MyQuery($slug: String!) {
    list(where: { slug: $slug }) {
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

export const sideBanners = gql`
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

export const allCourses = gql`
  query allCourses {
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
