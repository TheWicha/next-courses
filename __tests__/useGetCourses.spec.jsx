import useGetCourses from "../utils/useGetCourses";
import { renderHook, act, waitFor } from "@testing-library/react";
import { getAllCourseLists } from "../utils/graphqlQueries";

jest.mock("../app/_utils/GlobalApi", () => ({
  getAllCourseLists: jest.fn(),
}));

const mockCourses = [
  {
    banner: { url: "/path/to/image1.png" },
    description: "Description for Course 1",
    free: true,
    name: "Course 1",
  },
  {
    banner: { url: "/path/to/image2.png" },
    description: "Description for Course 2",
    free: false,
    name: "Course 2",
  },
];

const mockError = new Error("An error occurred");

describe("useGetCourses", () => {
  it("fetches courses successfully", async () => {
    getAllCourseLists.mockResolvedValue(mockCourses);
    const { result } = renderHook(() => useGetCourses());

    await waitFor(() => expect(result.current.courses).toEqual(mockCourses));

    expect(result.current.error).toBeNull();
  });

  it("handles error", async () => {
    getAllCourseLists.mockRejectedValue(mockError);

    const { result } = renderHook(() => useGetCourses());

    await waitFor(() => expect(result.current.courses).toBeNull());

    expect(result.current.error).toEqual(mockError);
  });
});
