import { StackContext, Api, Config } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });
  new Config.Parameter(stack, "API_URL", {
    value: api.url,
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
