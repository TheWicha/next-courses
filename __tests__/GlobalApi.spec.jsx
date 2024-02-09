import { render, waitFor } from "@testing-library/react";
import { getAllCourseLists } from "../app/_utils/hygraphApi";

const mockList = [
  {
    author: null,
    name: "Fundamentals of Photography",
    id: "clrunplh71oq80bmnbhkxz8uh",
    free: true,
    demoUr: null,
    description:
      "An introductory course that covers the basics of photography, including understanding your camera, composition, and lighting.\n\n",
    chapter: [
      {
        id: "clruo2iie1pwk0cl6qseoehdb",
        chapterNumber: 1,
        name: "Understanding Your Camera",
      },
      {
        id: "clruo2iie1pwi0cl6fchyj2lf",
        chapterNumber: 2,
        name: "Basics of Composition",
      },
      {
        id: "clruo2iid1pwg0cl6udc12i9u",
        chapterNumber: 3,
        name: "Introduction to Lighting",
      },
    ],
    totalChapters: 3,
    slug: "fundamentals-of-photography",
    tags: [],
    banner: {
      url: "https://media.graphassets.com/UWnDGvISNC7rZOBb3urJ",
    },
  },
  {
    author: null,
    name: "Portrait Photography",
    id: "clruo5ov41qrm0cl6h843e6hj",
    free: false,
    demoUr: null,
    description:
      "This course focuses on techniques for capturing stunning portraits, including lighting, posing, and post-processing.",
    chapter: [
      {
        id: "clruo5ov41qrn0cl6u2sie62e",
        chapterNumber: 1,
        name: "Mastering Lighting Techniques",
      },
      {
        id: "clruo5ov51qrp0cl64gq8896c",
        chapterNumber: 2,
        name: "Posing for Portraits",
      },
      {
        id: "clruo5ov61qrr0cl6nm9d1adc",
        chapterNumber: 3,
        name: "Post-Processing for Portraits",
      },
    ],
    totalChapters: null,
    slug: "portrait-photography",
    tags: [],
    banner: {
      url: "https://media.graphassets.com/jlpwGyk0QnSgU5b9OZ4I",
    },
  },
];

jest.mock("graphql-request", () => ({
  gql: jest.fn(),
  request: jest.fn(() =>
    Promise.resolve({
      lists: mockList,
    })
  ),
}));

describe("getAllCourseLists", () => {
  it("returns the expected data", async () => {
    const data = await getAllCourseLists();
    expect(data).toEqual({
      lists: mockList,
    });
  });
});
