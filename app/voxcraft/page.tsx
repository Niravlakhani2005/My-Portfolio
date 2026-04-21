import { Metadata } from "next";
import VoxCraftCaseStudy from "@/components/sections/VoxCraftCaseStudy";

export const metadata: Metadata = {
    title: "VoxCraft - Say it, We Design it | Nirav Lakhani",
    description: "Case study of VoxCraft, an AI-powered UI generator that turns natural language into real interfaces.",
};

export default function VoxCraftPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <VoxCraftCaseStudy />
        </main>
    );
}
