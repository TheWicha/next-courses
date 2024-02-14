import { gql } from "graphql-request";

export const enrollToCourse = gql`
  mutation MyMutation($courseId: String!, $userEmail: String!, $slug: String!) {
    createUserEnrollCourse(
      data: {
        courseId: $courseId
        userEmail: $userEmail
        list: { connect: { slug: $slug } }
      }
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
`;
