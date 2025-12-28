import {
    siFigma,
    // siAdobexd,
    // siAdobephotoshop,
    // siAdobeillustrator,
    siSketch,
    siNotion,
    siMiro,
    siJira,
    // siSlack,
    siTrello,
    siAsana,
    siMaze,
    siDribbble,
    siBehance,
    siReact,
} from "simple-icons/icons";
import {
    Search,
    Users,
    Map,
    Workflow,
    Layout,
    Type,
    Palette,
    Accessibility,
    Smartphone,
    Layers,
    MousePointer2,
    UserCheck,
    MonitorSmartphone
} from "lucide-react";

// Tools for the 3D Cloud (must have simple-icon svg)
// Tools for the 3D Cloud
// We use a mix of Lucide React icons and Simple Icons (SVG strings)
// The SkillsCloud component will handle both types.
export const tools = [
    { name: "User Research", icon: Users, color: "#3B82F6" }, // Blue
    { name: "User Flows", icon: Workflow, color: "#8B5CF6" }, // Violet
    { name: "Wireframing", icon: Layers, color: "#10B981" }, // Emerald
    { name: "Prototyping", icon: Smartphone, color: "#F472B6" }, // Pink
    { name: "Visual Design", icon: Palette, color: "#F59E0B" }, // Amber
    { name: "Interaction", icon: MousePointer2, color: "#EC4899" }, // Pink
    { name: "Design Systems", icon: Layout, color: "#6366F1" }, // Indigo
    { name: "Usability Testing", icon: UserCheck, color: "#14B8A6" }, // Teal
    { name: "Accessibility", icon: Accessibility, color: "#EF4444" }, // Red
    { name: "Responsive", icon: MonitorSmartphone, color: "#3B82F6" }, // Blue
    { name: "Figma", icon: siFigma, color: `#${siFigma.hex}` },
];

// Categorized Skills for the Grid
export const skillCategories = [
    {
        title: "UX Research",
        skills: [
            { name: "User Interviews", icon: Users },
            { name: "Personas", icon: Users },
            { name: "Journey Mapping", icon: Map },
            { name: "Usability Testing", icon: Search },
        ]
    },
    {
        title: "UX Design",
        skills: [
            { name: "Wireframing", icon: Layers },
            { name: "User Flows", icon: Workflow },
            { name: "Info Architecture", icon: Layers },
            { name: "Prototyping", icon: Smartphone },
        ]
    },
    {
        title: "UI & Product",
        skills: [
            { name: "Visual Design", icon: Layout },
            { name: "Typography", icon: Type },
            { name: "Color Theory", icon: Palette },
            { name: "Accessibility", icon: Accessibility },
        ]
    }
];
