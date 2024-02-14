import { gql } from "graphql-request";

export const coursesById = gql`
  query courseById($slug: String!) {
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
  query allBanner {
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
