import { defineField, defineType } from "sanity";
import { TbCertificate } from "react-icons/tb";

export const certification = defineType({
  type: "document",
  name: "certification",
  title: "Certification",
  icon: TbCertificate,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Certification title",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
  ],
});
