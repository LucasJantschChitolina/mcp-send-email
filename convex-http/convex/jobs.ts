import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const all = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("jobs").collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    sendTo: v.string(),
    skills: v.array(v.string()),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("jobs", args);
  },
});
