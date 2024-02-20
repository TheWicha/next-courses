import { gql } from "graphql-request";

export const checkIfUserEnrolled = gql`
  query checkIfUserEnrolled($courseId: String!, $userEmail: String!) {
    userEnrollCourses(where: { userEmail: $userEmail, courseId: $courseId }) {
      id
    }
  }
`;

export const getUserEnrolledCourseDetails = gql`
  query userEnrolledCourseDetails($id: ID!, $userEmail: String!) {
    userEnrollCourses(where: { id: $id, userEmail: $userEmail }) {
      courseId
      id
      userEmail
      list {
        author
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            shortDesc
            video {
              url
            }
          }
        }
        description
        demoUr
        free
        id
        name
        slug
        sourceCode
        totalChapters
      }
    }
  }
`;

export const coursesById = gql`
  query courseById($slug: String!) {
    list(where: { slug: $slug }) {
      id
      banner {
        url
      }
      description
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
