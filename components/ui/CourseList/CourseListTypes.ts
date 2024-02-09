
export interface CourseType {
  id: string;
  description: string;
  name: string;
  author: null;
  free: boolean;
  slug: string;
  totalChapters: number;
  youtubeUrl: null;
  chapter: {
    id: string;
    name: string;
    slug: string;
    yturl: null;
    shortDesc: string;
  }[];
  banner: {
    url: string;
  };
}

export interface CourseListPropsType {
  courses: CourseType[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  coursesNumber: number;
}