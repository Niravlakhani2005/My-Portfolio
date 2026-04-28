import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectCaseStudy from "@/components/sections/ProjectCaseStudy";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Not Found" };
    return {
        title: `${project.title} — Case Study | Nirav Lakhani`,
        description: project.subtitle,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <ProjectCaseStudy slug={slug} />
        </main>
    );
}
