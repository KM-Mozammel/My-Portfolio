"use client";

import "@xyflow/react/dist/style.css";

import {
    Background,
    Controls,
    MiniMap,
    ReactFlow,
    Node,
    Edge,
} from "@xyflow/react";

const nodes: Node[] = [
    {
        id: "1",
        position: { x: 350, y: 0 },
        data: { label: "🌱 Curiosity" },
    },
    {
        id: "2",
        position: { x: 350, y: 120 },
        data: { label: "💻 C Programming" },
    },
    {
        id: "3",
        position: { x: 350, y: 240 },
        data: { label: "🌐 Web Development" },
    },
    {
        id: "4",
        position: { x: 150, y: 380 },
        data: { label: "🐘 PHP / Laravel" },
    },
    {
        id: "5",
        position: { x: 550, y: 380 },
        data: { label: "⚡ ASP.NET Core" },
    },
    {
        id: "6",
        position: { x: 350, y: 520 },
        data: { label: "🚀 Full Stack" },
    },
    {
        id: "7",
        position: { x: 350, y: 650 },
        data: { label: "📡 SignalR / WebRTC" },
    },
    {
        id: "8",
        position: { x: 350, y: 800 },
        data: { label: "🤖 Applied AI" },
    },
];

const edges: Edge[] = [
    { id: "1-2", source: "1", target: "2", animated: true },
    { id: "2-3", source: "2", target: "3", animated: true },
    { id: "3-4", source: "3", target: "4", animated: true },
    { id: "3-5", source: "3", target: "5", animated: true },
    { id: "4-6", source: "4", target: "6", animated: true },
    { id: "5-6", source: "5", target: "6", animated: true },
    { id: "6-7", source: "6", target: "7", animated: true },
    { id: "7-8", source: "7", target: "8", animated: true },
];

export default function EvolutionTree() {
    return (
        <section className="py-32">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                        Evolution
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        My Learning Tree
                    </h2>

                    <p className="mt-5 text-lg text-[var(--text-muted)]">
                        Every technology opened the door to the next one.
                    </p>

                </div>

                <div
                    className="
                        h-[900px]
                        rounded-3xl
                        overflow-hidden
                        border
                        border-[var(--border-color)]
                        text-black
                        // font-bold
                    "
                >
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        fitView
                    >
                        {/* <MiniMap /> */}
                        <Controls />
                        <Background />
                    </ReactFlow>
                </div>

            </div>

        </section>
    );
}