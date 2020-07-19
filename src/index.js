const { buildSchema } = require("graphql");

const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { readFileSync } = require("fs");
const { join } = require("path");

const port = process.env.port || 3000;

const app = express();

const resolvers = require("./lib/resolvers");
// define Schema
const schema = buildSchema(
  readFileSync(join(__dirname, "/lib/schema.graphql"), "utf-8")
);

app.use(
  "/api",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server run at port ${port}/api`);
});
/* Ejecución en la termianl para testeo
graphql(
  schema,
  `
    {
      hello
    }
  `,
  resolvers
).then((data) => {
  console.log(data);
  return data;
});
*/
