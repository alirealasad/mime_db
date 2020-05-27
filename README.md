# mine_db
Media Type Database for deno based on https://github.com/jshttp/mime-db.

## Download
```ts
import db from "https://raw.githubusercontent.com/alirealasad/mine_db/master/mod.ts";
// or
import db from "https://deno.land/x/mine_db/mod.ts";
```
```
# deno run --allow-net main.ts
```
## Example

```ts
import db from "https://deno.land/x/mine_db/mod.ts";

// grab data on .js files
var data = db['application/javascript']

console.log(data);
// → { source: "iana", charset: "UTF-8", compressible: true, extensions: [ "js", "mjs" ] }

```
## Links

- [mine-db](https://github.com/jshttp/mime-db)
