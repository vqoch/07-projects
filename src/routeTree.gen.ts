/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as EditProjectImport } from './routes/EditProject'
import { Route as AddProjectImport } from './routes/AddProject'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const EditProjectRoute = EditProjectImport.update({
  path: '/EditProject',
  getParentRoute: () => rootRoute,
} as any)

const AddProjectRoute = AddProjectImport.update({
  path: '/AddProject',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/AddProject': {
      id: '/AddProject'
      path: '/AddProject'
      fullPath: '/AddProject'
      preLoaderRoute: typeof AddProjectImport
      parentRoute: typeof rootRoute
    }
    '/EditProject': {
      id: '/EditProject'
      path: '/EditProject'
      fullPath: '/EditProject'
      preLoaderRoute: typeof EditProjectImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AddProjectRoute,
  EditProjectRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/AddProject",
        "/EditProject"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/AddProject": {
      "filePath": "AddProject.tsx"
    },
    "/EditProject": {
      "filePath": "EditProject.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
