import { defineType, defineField, defineArrayMember } from "sanity";

export const featureBlock = defineType({
  type: "object",
  name: "featureBlock",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      name: "body",
      title: "Body text",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "string",
      name: "altText",
      title: "Image description",
      description: "Visually describe the image for accessibility purposes.",
    }),
  ],
});
