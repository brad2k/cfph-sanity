import { defineField, defineType } from "sanity";
import { ClassesInput } from "./components/ClassesInput";

export const CLASS_GROUPS = [{ title: "All classes", value: "all" }];

export const classesType = defineType({
  name: "classes",
  title: "Classes",
  type: "array",
  components: { input: ClassesInput },
  of: [
    defineField({
      name: "class",
      type: "reference",
      to: [{ type: "class" }],
    }),
  ],
});
