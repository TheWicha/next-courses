import { Chapter } from "@/types/chapter";

export interface CourseType {
  id: string;
  description: string;
  name: string;
  author: null;
  free: boolean;
  slug: string;
  totalChapters: number;
  youtubeUrl: null;
  chapter: Chapter[];
  banner: {
    url: string;
  };
}

export interface CourseListPropsType {
  courses: CourseType[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
