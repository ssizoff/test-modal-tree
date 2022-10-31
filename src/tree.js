import { loremIpsum } from "lorem-ipsum";

const loremOpt =
{
    count: 5,                // Number of "words", "sentences", or "paragraphs"
    format: "plain",         // "plain" or "html"
    units: "words",
};

export function generateTree(level = 1, id = { value: 0 }) {
    if (level <= 5) {
        const max = Math.round(Math.random() * 10);

        if (max) {
            const items = [];

            for (let i = 0; i < max; i++) {
                id.value++;
                items.push({
                    id: id.value,
                    title: loremIpsum(loremOpt), //`item ${id.value}`,
                    items: generateTree(level + 1, id)
                })
            }
            return items;
        }
    }
}