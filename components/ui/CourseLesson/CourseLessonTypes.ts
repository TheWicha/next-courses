export interface CourseLessonType {
  chapter: {
    id: string;
    name: string;
    yturl: string | null;
    video: {
      url: string;
    };
    shortDesc: string;
    slug: string;
  };
}
