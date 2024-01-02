export interface Post {
  meta: {
    title: string;
    subtitle: string;
    date: string;
    categories: string[];
  };
  path: string;
  latest: boolean;
}

export interface BlogData {
  posts: Post[];
  currentCategory: string;
}

export interface Image {
  folder: string;
  imgUrl: string;
}

export interface InstaImageType {
  currentRoute: any;
  [key: string]: Image;
}


