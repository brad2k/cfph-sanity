import { defineArrayMember, defineField, defineType } from "sanity";
import { MdOutlinePersonOutline } from "react-icons/md";

export const coach = defineType({
  type: "document",
  name: "coach",
  title: "Coach",
  icon: MdOutlinePersonOutline,
  fields: [
    defineField({
      type: "string",
      name: "name",
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
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      initialValue: "coach",
      options: {
        list: [
          { title: "Coach", value: "coach" },
          { title: "Head coach", value: "headCoach" },
        ],
      },
    }),
    defineField({
      type: "array",
      name: "certifications",
      title: "Certifications",
      of: [
        defineArrayMember({
          type: "reference",
          title: "Coach certification",
          to: [{ type: "certification" }],
        }),
      ],
      //validation: Rule => Rule.unique()
    }),
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "instagram",
          title: "Instagram username",
          type: "string",
        },
        {
          name: "facebook",
          title: "Facebook username",
          type: "string",
        },
        {
          name: "tiktok",
          title: "TikTok username",
          type: "string",
        },
      ],
      options: {
        collapsed: true,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: "fullBio",
      title: "Full bio",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
