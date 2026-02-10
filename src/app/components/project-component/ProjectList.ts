import type { Project } from "./ProjectType";

export const projects: Project[] = [
    {
        id: 1,
        title: "Gotaste",
        images: ["/img/gotaste2.png", "/img/gotaste.png"],
        description: "GoTaste is a restaurant web application built with ASP.NET Core Web API and React.js.",
        link: "https://gotaste.uk/"
    },
    {
        id: 2,
        title: "Private Messenger",
        images: ["/img/private-messenger-1.png", "/img/private-messenger-2.png", "/img/private-messenger-3.png"],
        description: "A private messaging built with React.js and ASP.NET core web api, dapper, mysql, signalR.",
        link: "https://mk-private-messenger.vercel.app/"
    },
    {
        id: 3,
        title: "Audio Visual",
        images: ["/img/audio-visual-1.png", "/img/audio-visual-2.png"],
        description: "An audio visualizer built with React.js and audio context API for real time analysis.",
        link: "https://mk-audio-visualizer.vercel.app/"
    },
];