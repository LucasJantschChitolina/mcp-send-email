import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  jobs: defineTable({
    title: v.string(),
    description: v.string(),
    sendTo: v.string(),
    skills: v.array(v.string()),
    emailId: v.optional(v.string()),
    isActive: v.boolean(),
  }),
});
