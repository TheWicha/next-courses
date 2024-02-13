export interface Chapter {
  id: string;
  name: string;
  yturl: string | null;
  video: {
    url: string;
  };
  shortDesc: string;
  slug: string;
}
