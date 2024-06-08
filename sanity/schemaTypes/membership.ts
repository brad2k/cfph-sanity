import { MdOutlineAttachMoney } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export const membership = defineType({
  type: "document",
  name: "membership",
  title: "Membership",
  icon: MdOutlineAttachMoney,
  groups: [
    {
      name: "pricing",
      title: "Pricing",
    },
  ],
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Membership name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Membership summary",
      type: "text",
      rows: 4,
    }),
    // defineField({
    //   type: "slug",
    //   name: "slug",
    //   description: "Used to generate the page URL",
    //   options: {
    //     source: "name",
    //     maxLength: 96,
    //   },
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      title: "Monthly price",
      name: "monthlyPrice",
      description: "Monthly price with no discount",
      type: "number",
      group: "pricing",
    }),
    defineField({
      title: "Biannual price",
      name: "biannualPrice",
      description: "Price for 6 months",
      type: "number",
      group: "pricing",
    }),
    defineField({
      title: "Annual price",
      name: "annualPrice",
      description: "Price for 12 months",
      type: "number",
      group: "pricing",
    }),
    defineField({
      title: "Session price",
      name: "sessionPrice",
      description: "Price for a single class",
      type: "number",
      group: "pricing",
    }),
    defineField({
      title: "Monthly class limit",
      name: "monthlyLimit",
      type: "number",
    }),
    defineField({
      name: "classes",
      type: "classes",
      description: "Classes that are available under the membership plan",
    }),
  ],
});
