export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Nirav Lakhani",
        url: "https://niravlakhani.design",
        sameAs: [
            "https://linkedin.com/in/niravlakhani",
            "https://behance.net/niravlakhani",
        ],
        jobTitle: "UI/UX Designer",
        worksFor: {
            "@type": "Organization",
            name: "Freelance",
        },
        description:
            "UI/UX Designer specializing in user research, wireframing, and design systems.",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
