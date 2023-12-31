import { app } from "./app";

const port = process.env.PORT || 3010;

app.listen(port, () =>
    console.log(`Database at http://localhost:${port}/api-docs`)
);