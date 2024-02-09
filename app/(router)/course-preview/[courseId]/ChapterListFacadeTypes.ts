interface Chapter {
  id: string;
  name: string;
  yturl: string | null;
  video: {
    url: string;
  };
  shortDesc: string;
  slug: string;
}

interface Banner {
  url: string;
}

interface Lessons {
  list: any;
  lessons: {
    id: string;
    banner: Banner;
    chapter: Chapter[];
  };
}

export interface ChapterListFacadeProps {
  chapters: Lessons;
  data: any; // You can replace 'any' with a more specific type if needed
}
