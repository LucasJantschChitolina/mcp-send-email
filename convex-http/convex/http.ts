import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/health",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    return new Response(`OK`);
  }),
});

// get all jobs
http.route({
  path: "/jobs",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const jobs = await ctx.runQuery(api.jobs.all);
    return new Response(JSON.stringify(jobs));
  }),
});

// create a job
http.route({
  path: "/jobs",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const body = await request.json();

    const job = await ctx.runMutation(api.jobs.create, {
      title: body.title,
      description: body.description,
    });
    return new Response(JSON.stringify(job));
  }),
});

export default http;
