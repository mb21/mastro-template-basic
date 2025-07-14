import server from "mastro/server";

Deno.serve(async req => {
  const res = await server.fetch(req)
  if (Deno.env.get("DENO_DEPLOYMENT_ID")) {
    res.headers.set("Cache-Control", "s-maxage=604800");
  }
  return res
})
