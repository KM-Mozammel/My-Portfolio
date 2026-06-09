
export function detectTool(message: string) {
    const text = message.toLowerCase();

    const tools: string[] = [];

    // Projects intent
    if (
        text.includes("project") ||
        text.includes("portfolio") ||
        text.includes("built") ||
        text.includes("work")
    ) {
        tools.push("projects");
    }

    // Skills intent
    if (
        text.includes("skill") ||
        text.includes("technology") ||
        text.includes("tech stack") ||
        text.includes("frontend") ||
        text.includes("backend") ||
        text.includes("react") ||
        text.includes("next") ||
        text.includes("asp.net")
    ) {
        tools.push("skills");
    }

    // Blogs intent
    if (
        text.includes("blog") ||
        text.includes("article") ||
        text.includes("post") ||
        text.includes("write") ||
        text.includes("written")
    ) {
        tools.push("blogs");
    }

    return tools;
}