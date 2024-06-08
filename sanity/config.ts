import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

import { apiVersion, dataset, projectId } from "@/sanity/api";

const studioConfig = {
  name: "default",
  title: "CrossFit Potrero Hill",

  projectId,
  dataset,
  apiVersion,

  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
};

export default defineConfig(studioConfig);
