import { Chapter } from "@/types/chapter";

interface Banner {
  url: string;
}

interface Lessons {
  id: any;
  chapter: any;
  list: any;
  lessons: {
    id: string;
    banner: Banner;
    chapter: Chapter[];
  };
}

export interface ChapterListFacadeProps {
  chapters: Lessons["lessons"]["chapter"];
}
