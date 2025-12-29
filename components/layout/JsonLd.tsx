export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Nirav Lakhani",
        url: "https://niravlakhani.design",
        "sameAs": [
            "https://www.linkedin.com/in/nirav-lakhani2005/",
            "https://dribbble.com/nirav_2005",
            "https://www.behance.net/niravlakhani2",
            "https://www.youtube.com/@Niravlakhani"
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
