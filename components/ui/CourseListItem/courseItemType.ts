import { Chapter } from "@/types/chapter";

export interface CourseItemType {
  course: {
    id: string;
    description: string;
    name: string;
    author: null;
    free: boolean;
    slug: string;
    totalChapters: number;
    youtubeUrl: null;
    chapter: Chapter;
  }[];
  banner: {
    url: string;
  };
}
