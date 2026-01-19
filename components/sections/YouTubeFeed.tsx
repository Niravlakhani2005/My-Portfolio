
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";

// --- Configuration ---
// TO ENABLE AUTOMATIC UPDATES:
// 1. Get a YouTube Data API Key from Google Cloud Console.
// 2. Add NEXT_PUBLIC_YOUTUBE_API_KEY and NEXT_PUBLIC_YOUTUBE_CHANNEL_ID to your .env.local file.
// 3. Set USE_API to true below.

const USE_API = false; // Set to true to fetch live data
const CHANNEL_ID = "UC_PLACEHOLDER_CHANNEL_ID"; // Replace with your actual Channel ID if hardcoding

// Fallback Data (Current scraped videos)
const INITIAL_VIDEOS = [
    {
        id: "MS1uSsjoUDY",
        title: "I went to Lonavala in the monsoon 🌧️⛰️ | Nirav Lakhani",
        thumbnail: "https://i.ytimg.com/vi/MS1uSsjoUDY/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=MS1uSsjoUDY",
    },
    {
        id: "OtqhybPZV4o",
        title: "I Went to India’s Biggest Film School 🎬 | FTII Pune",
        thumbnail: "https://i.ytimg.com/vi/OtqhybPZV4o/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=OtqhybPZV4o",
    },
    {
        id: "ql3ZD_l2ly0",
        title: "From Our First Cry… to This Goodbye | Emotional Sister Wedding Farewell",
        thumbnail: "https://i.ytimg.com/vi/ql3ZD_l2ly0/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=ql3ZD_l2ly0",
    },
    {
        id: "YoUgY3XrQnY",
        title: "I went to India’s Coldest Village DRASS (-60c) with @MonkeyxMagic!",
        thumbnail: "https://i.ytimg.com/vi/YoUgY3XrQnY/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=YoUgY3XrQnY",
    },
    {
        id: "IzVjSJZNa9o",
        title: "FAN OFF | Short Film",
        thumbnail: "https://i.ytimg.com/vi/IzVjSJZNa9o/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=IzVjSJZNa9o",
    },
];

export default function YouTubeFeed() {
    const [videos, setVideos] = useState(INITIAL_VIDEOS);

    // --- Automatic Fetching Logic (Future Proofing) ---
    useEffect(() => {
        if (!USE_API) return;

        const fetchVideos = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
                const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

                if (!apiKey || !channelId) return;

                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`
                );
                const data = await res.json();

                if (data.items) {
                    const fetchedVideos = data.items.map((item: any) => ({
                        id: item.id.videoId,
                        title: item.snippet.title,
                        thumbnail: item.snippet.thumbnails.high.url,
                        link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    }));
                    setVideos(fetchedVideos);
                }
            } catch (error) {
                console.error("Failed to fetch YouTube videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <section className="py-16 md:py-24 relative z-30" id="creativity">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <SectionHeading
                        number="04"
                        title="Beyond Design"
                        subtitle="My creative playground in vlogging & filmmaking"
                        className="mb-8"
                    />

                    <div className="max-w-2xl text-white/60">
                        <p className="text-lg leading-relaxed">
                            When I'm not crafting pixels, I'm capturing moments.
                            Here is a glimpse into my life through lenses—travel, stories, and a bit of comedy.
                        </p>
                        <Link
                            href="https://www.youtube.com/@Niravlakhani"
                            target="_blank"
                            className="inline-flex items-center gap-2 mt-6 text-primary hover:text-white transition-colors"
                        >
                            Visit Channel <ExternalLink className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* --- Featured Video (Latest) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <motion.a
                        href={videos[0].link}
                        target="_blank"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative lg:col-span-2 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5"
                    >
                        <Image
                            src={videos[0].thumbnail}
                            alt={videos[0].title}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 text-white fill-current" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                            <span className="inline-block px-2 py-1 mb-2 text-xs font-bold uppercase tracking-wider text-black bg-primary rounded-sm">
                                Latest Upload
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white line-clamp-2">
                                {videos[0].title}
                            </h3>
                        </div>
                    </motion.a>

                    {/* --- Other Videos Grid --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        {videos.slice(1, 5).map((video, index) => (
                            <motion.a
                                key={video.id}
                                href={video.link}
                                target="_blank"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex gap-4 items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className="relative w-32 aspect-video rounded-lg overflow-hidden shrink-0">
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent">
                                        <Play className="w-4 h-4 text-white/80" />
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-sm font-medium text-white/90 line-clamp-2 group-hover:text-primary transition-colors">
                                        {video.title}
                                    </h4>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
