import { Chapter } from "@/types/chapter";

export interface CourseLessonWrapperType {
  children: React.ReactNode;
  chapters: Chapter[];
  chapter: Chapter;
  isCourseAvailable: boolean;
  user: any;
  slug: string;
}
