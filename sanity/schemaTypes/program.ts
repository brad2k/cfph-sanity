import { MdOutlineFormatListBulleted } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const program = defineType({
  type: "document",
  name: "program",
  title: "Program",
  icon: MdOutlineFormatListBulleted,
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Program name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      description: "Used to generate the page URL",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "headline",
      title: "Program headline",
      description: "Pithy headline to introduce the program",
    }),
    defineField({
      name: "summary",
      title: "Program summary",
      type: "text",
      rows: 4,
    }),
  ],
});
