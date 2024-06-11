import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

import { apiVersion, dataset, projectId } from "@/sanity/api";
import { defineDocuments, presentationTool } from "sanity/presentation";

const SANITY_STUDIO_PREVIEW_URL =
  process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000";

const studioConfig = {
  name: "default",
  title: "CrossFit Potrero Hill",

  projectId,
  dataset,
  apiVersion,

  basePath: "/studio",

  plugins: [
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: "/coaches/:slug",
            filter: `_type == "coach" && slug.current == $slug`,
          },
        ]),
      },
    }),
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
};

export default defineConfig(studioConfig);
