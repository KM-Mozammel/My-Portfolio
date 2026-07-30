export type Project = {
    id: number | string;
    title: string;
    images: string[];
    description: string;
    link?: string;
    githubUrl?: string;
    featured?: boolean;
    createdAt: string;
};

export type ImageViewerProps = {
    setPreviewImg: (img: string | null) => void;
    previewImg: string | undefined;
};