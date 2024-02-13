import { Chapter } from "@/types/chapter";

interface Banner {
  url: string;
}

interface Lessons {
  chapter: any;
  list: any;
  lessons: {
    id: string;
    banner: Banner;
    chapter: Chapter[];
  };
}

export interface ChapterListFacadeProps {
  chapters: Lessons;
  data: string;
}
