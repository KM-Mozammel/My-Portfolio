"use client";
import React, { useRef, useState } from "react";

interface AudioPlayerProps {
    src: string;
    name: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, name }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const vol = Number(e.target.value);
        setVolume(vol);
        if (audioRef.current) {
            audioRef.current.volume = vol;
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(var(--text-color), 0.08)",
                display: "flex",
                alignItems: "center",
                padding: "12px 24px",
                zIndex: 1000,
                // backdropFilter: "blur(6px)",
                boxShadow: "0 -2px 12px rgba(0,0,0,0.2)",
                width: "fit-content",
            }}
        >
            <span style={{ color: "var(--text-color)", fontWeight: 500, marginRight: 24 }}>
                {name}
            </span>
            <button
                onClick={togglePlay}
                style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: 22,
                    marginRight: 18,
                    cursor: "pointer",
                }}
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? "⏸️" : "▶️"}
            </button>
            <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                style={{ width: 100, marginRight: 12 }}
                aria-label="Volume"
            />
            <audio
                ref={audioRef}
                src={src}
                onEnded={() => setIsPlaying(false)}
                style={{ display: "none" }}
            />
        </div>
    );
};

export default AudioPlayer;