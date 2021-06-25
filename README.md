# `typescript` Starter

Uses `"strict"` settings, includes `eslint`, `prettier`, the each and everything.

Use ES Modules, but you must `import` from `.js`, even if your file is a `.ts`.

For example, say we have `src.test.ts` lik this: `export default () : string => "Hello Export"`

Then, in `src/index.ts`: `import something from "./test.js"`

This is due to using `"module": "ES2020"`.
