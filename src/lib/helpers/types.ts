export interface Post {
  meta: {
    title: string;
    subtitle: string;
    date: string;
    categories: string[];
  };
  path: string;
}

export interface CategorizedPosts {
  [key, string]: Post[];
}
