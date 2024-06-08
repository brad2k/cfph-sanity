import { GiWeightLiftingUp } from "react-icons/gi";
import { defineArrayMember, defineField, defineType } from "sanity";

export const classType = defineType({
  type: "document",
  name: "class",
  title: "Class",
  icon: GiWeightLiftingUp,

  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Class name",
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
      title: "Class headline",
      description: "Pithy headline to introduce the class",
    }),
    defineField({
      name: "summary",
      title: "Class summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      type: "text",
      name: "sampleWorkout",
      title: "Sample workout",
      description: "A sample of a WOD",
      rows: 6,
    }),
    defineField({
      type: "array",
      name: "features",
      title: "Class features",
      of: [
        defineArrayMember({
          title: "Class feature",
          type: "featureBlock",
        }),
      ],
    }),
  ],
});
