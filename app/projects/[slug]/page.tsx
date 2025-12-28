import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, PenTool as Tools, Target, Zap } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-32 pb-20 px-4 md:px-8 relative z-30">
            <div className="max-w-4xl mx-auto">
                <Link href="/#projects" className="inline-block mb-8">
                    <MagneticButton className="flex items-center gap-2 text-sm bg-white/5 mx-0">
                        <ArrowLeft className="w-4 h-4" /> Back to Works
                    </MagneticButton>
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs font-mono text-white/80 border border-white/10 rounded-full bg-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-white/10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* TL;DR / Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-2 text-neon-cyan">
                            <Target className="w-5 h-5" />
                            <h3 className="font-bold">Goal</h3>
                        </div>
                        <p className="text-sm text-white/70">{project.goal}</p>
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-2 text-purple-400">
                            <Zap className="w-5 h-5" />
                            <h3 className="font-bold">Impact</h3>
                        </div>
                        <p className="text-sm text-white/70">{project.impact}</p>
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-2 text-pink-400">
                            <Tools className="w-5 h-5" />
                            <h3 className="font-bold">Role</h3>
                        </div>
                        <p className="text-sm text-white/70">UI/UX Designer, Researcher</p>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-16">
                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                        <p className="text-white/70 leading-relaxed text-lg">
                            {project.overview}
                        </p>
                    </section>

                    {/* Process */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8">The Process</h2>
                        <div className="space-y-8">
                            {project.process.map((step, i) => (
                                <div key={i} className="relative pl-8 border-l border-white/10">
                                    <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 border border-white/50" />
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-white/70">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final Outcome / Callout */}
                    <section className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Outcome</h2>
                        <p className="text-white/80 text-lg italic">"{project.impact}"</p>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-white/10 text-center">
                    <h3 className="text-white mb-6">Want to see more details?</h3>
                    <Link href="#contact">
                        <MagneticButton className="bg-white text-black font-bold">
                            Let's Talk
                        </MagneticButton>
                    </Link>
                </div>

            </div>
        </article>
    );
}
