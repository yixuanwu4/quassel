/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as SessionImport } from "./routes/session";
import { Route as QuestionnaireImport } from "./routes/questionnaire";
import { Route as AdminImport } from "./routes/admin";
import { Route as IndexImport } from "./routes/index";

// Create Virtual Routes

const QuestionnaireIndexLazyImport = createFileRoute("/questionnaire/")();
const AdminIndexLazyImport = createFileRoute("/admin/")();

// Create/Update Routes

const SessionRoute = SessionImport.update({
  path: "/session",
  getParentRoute: () => rootRoute,
} as any);

const QuestionnaireRoute = QuestionnaireImport.update({
  path: "/questionnaire",
  getParentRoute: () => rootRoute,
} as any);

const AdminRoute = AdminImport.update({
  path: "/admin",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const QuestionnaireIndexLazyRoute = QuestionnaireIndexLazyImport.update({
  path: "/",
  getParentRoute: () => QuestionnaireRoute,
} as any).lazy(() =>
  import("./routes/questionnaire/index.lazy").then((d) => d.Route),
);

const AdminIndexLazyRoute = AdminIndexLazyImport.update({
  path: "/",
  getParentRoute: () => AdminRoute,
} as any).lazy(() => import("./routes/admin/index.lazy").then((d) => d.Route));

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/admin": {
      id: "/admin";
      path: "/admin";
      fullPath: "/admin";
      preLoaderRoute: typeof AdminImport;
      parentRoute: typeof rootRoute;
    };
    "/questionnaire": {
      id: "/questionnaire";
      path: "/questionnaire";
      fullPath: "/questionnaire";
      preLoaderRoute: typeof QuestionnaireImport;
      parentRoute: typeof rootRoute;
    };
    "/session": {
      id: "/session";
      path: "/session";
      fullPath: "/session";
      preLoaderRoute: typeof SessionImport;
      parentRoute: typeof rootRoute;
    };
    "/admin/": {
      id: "/admin/";
      path: "/";
      fullPath: "/admin/";
      preLoaderRoute: typeof AdminIndexLazyImport;
      parentRoute: typeof AdminImport;
    };
    "/questionnaire/": {
      id: "/questionnaire/";
      path: "/";
      fullPath: "/questionnaire/";
      preLoaderRoute: typeof QuestionnaireIndexLazyImport;
      parentRoute: typeof QuestionnaireImport;
    };
  }
}

// Create and export the route tree

interface AdminRouteChildren {
  AdminIndexLazyRoute: typeof AdminIndexLazyRoute;
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminIndexLazyRoute: AdminIndexLazyRoute,
};

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);

interface QuestionnaireRouteChildren {
  QuestionnaireIndexLazyRoute: typeof QuestionnaireIndexLazyRoute;
}

const QuestionnaireRouteChildren: QuestionnaireRouteChildren = {
  QuestionnaireIndexLazyRoute: QuestionnaireIndexLazyRoute,
};

const QuestionnaireRouteWithChildren = QuestionnaireRoute._addFileChildren(
  QuestionnaireRouteChildren,
);

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/admin": typeof AdminRouteWithChildren;
  "/questionnaire": typeof QuestionnaireRouteWithChildren;
  "/session": typeof SessionRoute;
  "/admin/": typeof AdminIndexLazyRoute;
  "/questionnaire/": typeof QuestionnaireIndexLazyRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/session": typeof SessionRoute;
  "/admin": typeof AdminIndexLazyRoute;
  "/questionnaire": typeof QuestionnaireIndexLazyRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/admin": typeof AdminRouteWithChildren;
  "/questionnaire": typeof QuestionnaireRouteWithChildren;
  "/session": typeof SessionRoute;
  "/admin/": typeof AdminIndexLazyRoute;
  "/questionnaire/": typeof QuestionnaireIndexLazyRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/admin"
    | "/questionnaire"
    | "/session"
    | "/admin/"
    | "/questionnaire/";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/session" | "/admin" | "/questionnaire";
  id:
    | "__root__"
    | "/"
    | "/admin"
    | "/questionnaire"
    | "/session"
    | "/admin/"
    | "/questionnaire/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AdminRoute: typeof AdminRouteWithChildren;
  QuestionnaireRoute: typeof QuestionnaireRouteWithChildren;
  SessionRoute: typeof SessionRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  QuestionnaireRoute: QuestionnaireRouteWithChildren,
  SessionRoute: SessionRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/admin",
        "/questionnaire",
        "/session"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/admin": {
      "filePath": "admin.tsx",
      "children": [
        "/admin/"
      ]
    },
    "/questionnaire": {
      "filePath": "questionnaire.tsx",
      "children": [
        "/questionnaire/"
      ]
    },
    "/session": {
      "filePath": "session.tsx"
    },
    "/admin/": {
      "filePath": "admin/index.lazy.tsx",
      "parent": "/admin"
    },
    "/questionnaire/": {
      "filePath": "questionnaire/index.lazy.tsx",
      "parent": "/questionnaire"
    }
  }
}
ROUTE_MANIFEST_END */
