import { createRequire } from "module";
import importAsString from "@reactioncommerce/api-utils/importAsString.js";
import myResolvers from "./resolvers/resolvers.js"
const mySchema = importAsString("./schema/schema.graphql");
const require = createRequire(import.meta.url);
const pkg = require("../package.json");


async function register(app) {
  await app.registerPlugin({
    label: pkg.label,
    name: pkg.name,
    version: pkg.version,
    collections: {
      BranchData: {
        name: "BranchData",
        updatedAt: { type: Date, default: Date.now },
        createdAt: { type: Date, default: Date.now },
      },
    },
    graphQL: {
      schemas: [mySchema],
      resolvers: myResolvers,
    }
  });
}
export default register;
