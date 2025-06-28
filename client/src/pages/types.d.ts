export interface Comment {
  _id: string;
  blog: {
    _id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    isPublished: boolean;
    subTitle: string;
  };
  name: string;
  content: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
