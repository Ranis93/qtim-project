export interface IArticle {
  id: number,
  createdAt: string,
  description: string,
  image: string,
  preview: string,
  title: string,
}
export type Articles = IArticle[] | []