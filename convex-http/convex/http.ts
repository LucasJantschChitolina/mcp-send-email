import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
import { Id } from "./_generated/dataModel";

const http = httpRouter();

http.route({
  path: "/health",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    return new Response(`OK`);
  }),
});

http.route({
  path: "/jobs",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const jobs = await ctx.runQuery(api.jobs.all);
    return new Response(JSON.stringify(jobs));
  }),
});

http.route({
  path: "/jobs",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const body = await request.json();

    const job = await ctx.runMutation(api.jobs.create, {
      title: body.title,
      description: body.description,
      sendTo: body.sendTo,
      skills: body.skills,
      isActive: body.isActive,
    });
    return new Response(JSON.stringify(job));
  }),
});

export default http;
