import { render, screen } from "@testing-library/react";
import CourseList from "@/components/ui/CourseList/CourseList";
import "@testing-library/jest-dom";
import useGetCourses from "@/utils/useGetCourses";

const mockCourses = [
  {
    name: "Course 1",
    free: true,
    description: "Description for Course 1",
    banner: { url: "/path/to/image1.png" },
  },
  {
    name: "Course 2",
    free: false,
    description: "Description for Course 2",
    banner: { url: "/path/to/image2.png" },
  },
];

jest.mock("../app/(router)/_utils/useGetCourses", () => ({
  __esModule: true,
  default: jest.fn(),
}));

beforeEach(() => {
  useGetCourses.mockImplementation(() => ({ courses: { lists: mockCourses } }));
});

test("renders the heading and filter", () => {
  render(<CourseList />);

  const heading = screen.getByText("All Courses");
  expect(heading).toBeInTheDocument();

  const filterSelect = screen.getByRole("combobox");
  expect(filterSelect).toBeInTheDocument();

  const filterTrigger = screen.getByText("All Courses");
  expect(filterTrigger).toBeInTheDocument();
});

test("renders course list items when courses are available", () => {
  render(<CourseList />);

  const courseListItems = screen.getAllByText(/Course/i);
  expect(courseListItems).toHaveLength(4);
});
