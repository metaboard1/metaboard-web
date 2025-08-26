interface ArticleInterface {
    id: number;
    title: string;
    description: string;
    author: string;
    coverImage: string;
    coverUrl: string;
    publishedAt: string;
}
interface RelatedArticleInterface {
    id: number;
    title: string;
    coverImage: string;
    coverUrl: string;
    publishedAt: string;
    tags: string[];
}
interface BlogInterface {
    id: number;
    title: string;
    description: string;
    author: string;
    estimateReadTime: number;
    coverImage: string;
    coverUrl: string;
    tags: string[];
    publishedAt: string;
}
interface PublicationInterface {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    isbn: string;
    pages: number;
    publicationDate: string;
    publisher: string;
    price: number;
    coverImage: string;
    coverUrl: string;
    storeLinks:Object;
}

interface DocumentInterface {
    id: number;
    title: string;
    description: string;
    estimateReadTime: number;
    file: string;
    fileUrl: string;
    fileSize: number;
    publishedAt: string;
}