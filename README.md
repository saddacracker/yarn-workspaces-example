# Working Yarn Workspaces Monorepo 
Monorepo proof of concept using yarn workspaces with:
1. Nextjs application
2. External js library
3. External jsx component library
4. Typescript support (though not used)
5. Successfully builds with jss styled components

## Notable configurations to make this work
[] `/package.json` workspaces wildcard to reference evrything in the package directory
[] `/yarnrc.yml`

[] `packages/web-app/packages.json` look at the dependencies
[] `packages/web-app/next.config.js` turn on `externalDir` for hot module reloading stuff (experimental)
[] `packages/web-app/tsconfig.json` Nextjs tsconfig including pathing
[] `packages/web-app/.bablerc` config that worked for me with Nextjs ssr log errors
[] `packages/web-app/empty.ts` prevent the ts compiler from barking if you don't have any ts files

[] `packages/utils/package.json`

[] `packages/shared-ui-components/package.json`
[] `packages/shared-ui-components/index.js` I mention this, because when I tried to name this file `index.jsx` the compiler would bark at me. However, the files I reference are .jsx files. Makes sense since this isn't jsx, but figured I'd mention it nonetheless. 


## Todo
1. Set up scripts to run app commands from root. As of now, you need to cd into the `web-app` directory and run yarn commands directly in there.

## Caveats
**Best to use latest version of yarn**
`yarn set version latest`

## Helpful info

