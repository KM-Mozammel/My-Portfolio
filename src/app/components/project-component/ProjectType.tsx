export type Project = {
    id: number;
    title: string;
    images: string[];
    description: string;
    link?: string;
};

export type ImageViewerProps = {
    setPreviewImg: (img: string | null) => void;
    previewImg: string | undefined;
};