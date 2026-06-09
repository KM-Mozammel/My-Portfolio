import { useState } from "react";
import type { Project } from "./ProjectType";
import ImageViewer from "./ImageViewer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCard: React.FC<{ project: Project; fadeIn: boolean }> = ({ project, fadeIn }) => {
    const [previewImg, setPreviewImg] = useState<string | null>(null);

    return (
        <div
            className={`transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0"
                } bg-[var(--background-color)] text-[var(--text-color)] rounded-lg shadow-lg lg:w-70 sm:w-full`}
            style={{ backgroundColor: 'rgba(17, 27, 59, 0.84)' }}
        >
            {/* Image Slider */}
            <div className="relative w-full">
                <Swiper
                    modules={[Navigation, Pagination]}
                    loop
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={false}
                    className="!w-full max-w-full"
                >
                    {project.images.map((img, index) => (
                        <SwiperSlide key={index} className="!w-full">
                            <img
                                src={img}
                                alt={`${project.title} ${index + 1}`}
                                onClick={() => setPreviewImg(img)}
                                className="block w-full max-w-full h-48 sm:h-40 md:h-44 object-cover rounded-md cursor-pointer hover:scale-[1.02] transition"
                            />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>

            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-base" style={{ color: 'dark-gray' }}>{project.description}</p>

                <div className="flex flex-row gap-2">
                    <a target="_blank" href={project.link} className="mt-4 inline-block">
                        <button className="hover:cursor-pointer hover:text-red-500/100 px-2" style={{ border: '1px solid white' }}>Golive</button>
                    </a>
                    <a target="_blank" href={project.link} className="mt-4 inline-block">
                        <button className="hover:cursor-pointer hover:text-red-500/100 px-2" style={{ border: '1px solid white' }}>Show Description</button>
                    </a>
                </div>
            </div>

            {previewImg && (
                <ImageViewer
                    previewImg={previewImg}
                    setPreviewImg={setPreviewImg}
                />
            )}
        </div>
    );
};

export default ProjectCard;