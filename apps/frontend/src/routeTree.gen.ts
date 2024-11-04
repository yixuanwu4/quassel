/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as SessionImport } from "./routes/session";
import { Route as AuthImport } from "./routes/_auth";
import { Route as AuthIndexImport } from "./routes/_auth/index";
import { Route as AuthQuestionnaireImport } from "./routes/_auth/questionnaire";
import { Route as AuthAdministrationImport } from "./routes/_auth/administration";
import { Route as AuthQuestionnaireIndexImport } from "./routes/_auth/questionnaire/index";
import { Route as AuthAdministrationIndexImport } from "./routes/_auth/administration/index";
import { Route as AuthAdministrationUsersImport } from "./routes/_auth/administration/users";
import { Route as AuthAdministrationStudiesImport } from "./routes/_auth/administration/studies";
import { Route as AuthAdministrationQuestionnairesImport } from "./routes/_auth/administration/questionnaires";
import { Route as AuthAdministrationParticipantsImport } from "./routes/_auth/administration/participants";
import { Route as AuthAdministrationLanguagesImport } from "./routes/_auth/administration/languages";
import { Route as AuthAdministrationExportImport } from "./routes/_auth/administration/export";
import { Route as AuthAdministrationCarersImport } from "./routes/_auth/administration/carers";
import { Route as AuthAdministrationUsersIndexImport } from "./routes/_auth/administration/users/index";
import { Route as AuthAdministrationLanguagesIndexImport } from "./routes/_auth/administration/languages/index";
import { Route as AuthAdministrationCarersIndexImport } from "./routes/_auth/administration/carers/index";
import { Route as AuthAdministrationUsersNewImport } from "./routes/_auth/administration/users/new";
import { Route as AuthAdministrationLanguagesNewImport } from "./routes/_auth/administration/languages/new";
import { Route as AuthAdministrationCarersNewImport } from "./routes/_auth/administration/carers/new";
import { Route as AuthAdministrationUsersEditIdImport } from "./routes/_auth/administration/users/edit.$id";
import { Route as AuthAdministrationLanguagesEditIdImport } from "./routes/_auth/administration/languages/edit.$id";
import { Route as AuthAdministrationCarersEditIdImport } from "./routes/_auth/administration/carers/edit.$id";

// Create/Update Routes

const SessionRoute = SessionImport.update({
  id: "/session",
  path: "/session",
  getParentRoute: () => rootRoute,
} as any);

const AuthRoute = AuthImport.update({
  id: "/_auth",
  getParentRoute: () => rootRoute,
} as any);

const AuthIndexRoute = AuthIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => AuthRoute,
} as any);

const AuthQuestionnaireRoute = AuthQuestionnaireImport.update({
  id: "/questionnaire",
  path: "/questionnaire",
  getParentRoute: () => AuthRoute,
} as any);

const AuthAdministrationRoute = AuthAdministrationImport.update({
  id: "/administration",
  path: "/administration",
  getParentRoute: () => AuthRoute,
} as any);

const AuthQuestionnaireIndexRoute = AuthQuestionnaireIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => AuthQuestionnaireRoute,
} as any);

const AuthAdministrationIndexRoute = AuthAdministrationIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => AuthAdministrationRoute,
} as any);

const AuthAdministrationUsersRoute = AuthAdministrationUsersImport.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => AuthAdministrationRoute,
} as any);

const AuthAdministrationStudiesRoute = AuthAdministrationStudiesImport.update({
  id: "/studies",
  path: "/studies",
  getParentRoute: () => AuthAdministrationRoute,
} as any);

const AuthAdministrationQuestionnairesRoute =
  AuthAdministrationQuestionnairesImport.update({
    id: "/questionnaires",
    path: "/questionnaires",
    getParentRoute: () => AuthAdministrationRoute,
  } as any);

const AuthAdministrationParticipantsRoute =
  AuthAdministrationParticipantsImport.update({
    id: "/participants",
    path: "/participants",
    getParentRoute: () => AuthAdministrationRoute,
  } as any);

const AuthAdministrationLanguagesRoute =
  AuthAdministrationLanguagesImport.update({
    id: "/languages",
    path: "/languages",
    getParentRoute: () => AuthAdministrationRoute,
  } as any);

const AuthAdministrationExportRoute = AuthAdministrationExportImport.update({
  id: "/export",
  path: "/export",
  getParentRoute: () => AuthAdministrationRoute,
} as any);

const AuthAdministrationCarersRoute = AuthAdministrationCarersImport.update({
  id: "/carers",
  path: "/carers",
  getParentRoute: () => AuthAdministrationRoute,
} as any);

const AuthAdministrationUsersIndexRoute =
  AuthAdministrationUsersIndexImport.update({
    id: "/",
    path: "/",
    getParentRoute: () => AuthAdministrationUsersRoute,
  } as any);

const AuthAdministrationLanguagesIndexRoute =
  AuthAdministrationLanguagesIndexImport.update({
    id: "/",
    path: "/",
    getParentRoute: () => AuthAdministrationLanguagesRoute,
  } as any);

const AuthAdministrationCarersIndexRoute =
  AuthAdministrationCarersIndexImport.update({
    id: "/",
    path: "/",
    getParentRoute: () => AuthAdministrationCarersRoute,
  } as any);

const AuthAdministrationUsersNewRoute = AuthAdministrationUsersNewImport.update(
  {
    id: "/new",
    path: "/new",
    getParentRoute: () => AuthAdministrationUsersRoute,
  } as any,
);

const AuthAdministrationLanguagesNewRoute =
  AuthAdministrationLanguagesNewImport.update({
    id: "/new",
    path: "/new",
    getParentRoute: () => AuthAdministrationLanguagesRoute,
  } as any);

const AuthAdministrationCarersNewRoute =
  AuthAdministrationCarersNewImport.update({
    id: "/new",
    path: "/new",
    getParentRoute: () => AuthAdministrationCarersRoute,
  } as any);

const AuthAdministrationUsersEditIdRoute =
  AuthAdministrationUsersEditIdImport.update({
    id: "/edit/$id",
    path: "/edit/$id",
    getParentRoute: () => AuthAdministrationUsersRoute,
  } as any);

const AuthAdministrationLanguagesEditIdRoute =
  AuthAdministrationLanguagesEditIdImport.update({
    id: "/edit/$id",
    path: "/edit/$id",
    getParentRoute: () => AuthAdministrationLanguagesRoute,
  } as any);

const AuthAdministrationCarersEditIdRoute =
  AuthAdministrationCarersEditIdImport.update({
    id: "/edit/$id",
    path: "/edit/$id",
    getParentRoute: () => AuthAdministrationCarersRoute,
  } as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_auth": {
      id: "/_auth";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthImport;
      parentRoute: typeof rootRoute;
    };
    "/session": {
      id: "/session";
      path: "/session";
      fullPath: "/session";
      preLoaderRoute: typeof SessionImport;
      parentRoute: typeof rootRoute;
    };
    "/_auth/administration": {
      id: "/_auth/administration";
      path: "/administration";
      fullPath: "/administration";
      preLoaderRoute: typeof AuthAdministrationImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/questionnaire": {
      id: "/_auth/questionnaire";
      path: "/questionnaire";
      fullPath: "/questionnaire";
      preLoaderRoute: typeof AuthQuestionnaireImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/": {
      id: "/_auth/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof AuthIndexImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/administration/carers": {
      id: "/_auth/administration/carers";
      path: "/carers";
      fullPath: "/administration/carers";
      preLoaderRoute: typeof AuthAdministrationCarersImport;
      parentRoute: typeof AuthAdministrationImport;
    };
    "/_auth/administration/export": {
      id: "/_auth/administration/export";
      path: "/export";
      fullPath: "/administration/export";
      preLoaderRoute: typeof AuthAdministrationExportImport;
      parentRoute: typeof AuthAdministrationImport;
    };
    "/_auth/administration/languages": {
      id: "/_auth/administration/languages";
      path: "/languages";
      fullPath: "/administration/languages";
      preLoaderRoute: typeof AuthAdministrationLanguagesImport;
      parentRoute: typeof AuthAdministrationImport;
    };
    "/_auth/administration/participants": {
      id: "/_auth/administration/participants";
      path: "/participants";
      fullPath: "/administration/participants";
      preLoaderRoute: typeof AuthAdministrationParticipantsImport;
      parentRoute: typeof AuthAdministrationImport;
    };
    "/_auth/administration/questionnaires": {
      id: "/_auth/administration/questionnaires";
      path: "/questionnaires";
      fullPath: "/administration/questionnaires";
      preLoaderRoute: typeof AuthAdministrationQuestionnairesImport;
      parentRoute: typeof AuthAdministrationImport;
    };
    "/_auth/administration/studies": {
      id: "/_auth/administration/studies";
      path: "/studies";
      fullPath: "/administration/studies";
      preLoaderRoute: typeof AuthAdministrationStudiesImport;
      parentRoute: typeof AuthAdministrationImport;
    };
    "/_auth/administration/users": {
      id: "/_auth/administration/users";
      path: "/users";
      fullPath: "/administration/users";
      preLoaderRoute: typeof AuthAdministrationUsersImport;
      parentRoute: typeof AuthAdministrationImport;
    };
    "/_auth/administration/": {
      id: "/_auth/administration/";
      path: "/";
      fullPath: "/administration/";
      preLoaderRoute: typeof AuthAdministrationIndexImport;
      parentRoute: typeof AuthAdministrationImport;
    };
    "/_auth/questionnaire/": {
      id: "/_auth/questionnaire/";
      path: "/";
      fullPath: "/questionnaire/";
      preLoaderRoute: typeof AuthQuestionnaireIndexImport;
      parentRoute: typeof AuthQuestionnaireImport;
    };
    "/_auth/administration/carers/new": {
      id: "/_auth/administration/carers/new";
      path: "/new";
      fullPath: "/administration/carers/new";
      preLoaderRoute: typeof AuthAdministrationCarersNewImport;
      parentRoute: typeof AuthAdministrationCarersImport;
    };
    "/_auth/administration/languages/new": {
      id: "/_auth/administration/languages/new";
      path: "/new";
      fullPath: "/administration/languages/new";
      preLoaderRoute: typeof AuthAdministrationLanguagesNewImport;
      parentRoute: typeof AuthAdministrationLanguagesImport;
    };
    "/_auth/administration/users/new": {
      id: "/_auth/administration/users/new";
      path: "/new";
      fullPath: "/administration/users/new";
      preLoaderRoute: typeof AuthAdministrationUsersNewImport;
      parentRoute: typeof AuthAdministrationUsersImport;
    };
    "/_auth/administration/carers/": {
      id: "/_auth/administration/carers/";
      path: "/";
      fullPath: "/administration/carers/";
      preLoaderRoute: typeof AuthAdministrationCarersIndexImport;
      parentRoute: typeof AuthAdministrationCarersImport;
    };
    "/_auth/administration/languages/": {
      id: "/_auth/administration/languages/";
      path: "/";
      fullPath: "/administration/languages/";
      preLoaderRoute: typeof AuthAdministrationLanguagesIndexImport;
      parentRoute: typeof AuthAdministrationLanguagesImport;
    };
    "/_auth/administration/users/": {
      id: "/_auth/administration/users/";
      path: "/";
      fullPath: "/administration/users/";
      preLoaderRoute: typeof AuthAdministrationUsersIndexImport;
      parentRoute: typeof AuthAdministrationUsersImport;
    };
    "/_auth/administration/carers/edit/$id": {
      id: "/_auth/administration/carers/edit/$id";
      path: "/edit/$id";
      fullPath: "/administration/carers/edit/$id";
      preLoaderRoute: typeof AuthAdministrationCarersEditIdImport;
      parentRoute: typeof AuthAdministrationCarersImport;
    };
    "/_auth/administration/languages/edit/$id": {
      id: "/_auth/administration/languages/edit/$id";
      path: "/edit/$id";
      fullPath: "/administration/languages/edit/$id";
      preLoaderRoute: typeof AuthAdministrationLanguagesEditIdImport;
      parentRoute: typeof AuthAdministrationLanguagesImport;
    };
    "/_auth/administration/users/edit/$id": {
      id: "/_auth/administration/users/edit/$id";
      path: "/edit/$id";
      fullPath: "/administration/users/edit/$id";
      preLoaderRoute: typeof AuthAdministrationUsersEditIdImport;
      parentRoute: typeof AuthAdministrationUsersImport;
    };
  }
}

// Create and export the route tree

interface AuthAdministrationCarersRouteChildren {
  AuthAdministrationCarersNewRoute: typeof AuthAdministrationCarersNewRoute;
  AuthAdministrationCarersIndexRoute: typeof AuthAdministrationCarersIndexRoute;
  AuthAdministrationCarersEditIdRoute: typeof AuthAdministrationCarersEditIdRoute;
}

const AuthAdministrationCarersRouteChildren: AuthAdministrationCarersRouteChildren =
  {
    AuthAdministrationCarersNewRoute: AuthAdministrationCarersNewRoute,
    AuthAdministrationCarersIndexRoute: AuthAdministrationCarersIndexRoute,
    AuthAdministrationCarersEditIdRoute: AuthAdministrationCarersEditIdRoute,
  };

const AuthAdministrationCarersRouteWithChildren =
  AuthAdministrationCarersRoute._addFileChildren(
    AuthAdministrationCarersRouteChildren,
  );

interface AuthAdministrationLanguagesRouteChildren {
  AuthAdministrationLanguagesNewRoute: typeof AuthAdministrationLanguagesNewRoute;
  AuthAdministrationLanguagesIndexRoute: typeof AuthAdministrationLanguagesIndexRoute;
  AuthAdministrationLanguagesEditIdRoute: typeof AuthAdministrationLanguagesEditIdRoute;
}

const AuthAdministrationLanguagesRouteChildren: AuthAdministrationLanguagesRouteChildren =
  {
    AuthAdministrationLanguagesNewRoute: AuthAdministrationLanguagesNewRoute,
    AuthAdministrationLanguagesIndexRoute:
      AuthAdministrationLanguagesIndexRoute,
    AuthAdministrationLanguagesEditIdRoute:
      AuthAdministrationLanguagesEditIdRoute,
  };

const AuthAdministrationLanguagesRouteWithChildren =
  AuthAdministrationLanguagesRoute._addFileChildren(
    AuthAdministrationLanguagesRouteChildren,
  );

interface AuthAdministrationUsersRouteChildren {
  AuthAdministrationUsersNewRoute: typeof AuthAdministrationUsersNewRoute;
  AuthAdministrationUsersIndexRoute: typeof AuthAdministrationUsersIndexRoute;
  AuthAdministrationUsersEditIdRoute: typeof AuthAdministrationUsersEditIdRoute;
}

const AuthAdministrationUsersRouteChildren: AuthAdministrationUsersRouteChildren =
  {
    AuthAdministrationUsersNewRoute: AuthAdministrationUsersNewRoute,
    AuthAdministrationUsersIndexRoute: AuthAdministrationUsersIndexRoute,
    AuthAdministrationUsersEditIdRoute: AuthAdministrationUsersEditIdRoute,
  };

const AuthAdministrationUsersRouteWithChildren =
  AuthAdministrationUsersRoute._addFileChildren(
    AuthAdministrationUsersRouteChildren,
  );

interface AuthAdministrationRouteChildren {
  AuthAdministrationCarersRoute: typeof AuthAdministrationCarersRouteWithChildren;
  AuthAdministrationExportRoute: typeof AuthAdministrationExportRoute;
  AuthAdministrationLanguagesRoute: typeof AuthAdministrationLanguagesRouteWithChildren;
  AuthAdministrationParticipantsRoute: typeof AuthAdministrationParticipantsRoute;
  AuthAdministrationQuestionnairesRoute: typeof AuthAdministrationQuestionnairesRoute;
  AuthAdministrationStudiesRoute: typeof AuthAdministrationStudiesRoute;
  AuthAdministrationUsersRoute: typeof AuthAdministrationUsersRouteWithChildren;
  AuthAdministrationIndexRoute: typeof AuthAdministrationIndexRoute;
}

const AuthAdministrationRouteChildren: AuthAdministrationRouteChildren = {
  AuthAdministrationCarersRoute: AuthAdministrationCarersRouteWithChildren,
  AuthAdministrationExportRoute: AuthAdministrationExportRoute,
  AuthAdministrationLanguagesRoute:
    AuthAdministrationLanguagesRouteWithChildren,
  AuthAdministrationParticipantsRoute: AuthAdministrationParticipantsRoute,
  AuthAdministrationQuestionnairesRoute: AuthAdministrationQuestionnairesRoute,
  AuthAdministrationStudiesRoute: AuthAdministrationStudiesRoute,
  AuthAdministrationUsersRoute: AuthAdministrationUsersRouteWithChildren,
  AuthAdministrationIndexRoute: AuthAdministrationIndexRoute,
};

const AuthAdministrationRouteWithChildren =
  AuthAdministrationRoute._addFileChildren(AuthAdministrationRouteChildren);

interface AuthQuestionnaireRouteChildren {
  AuthQuestionnaireIndexRoute: typeof AuthQuestionnaireIndexRoute;
}

const AuthQuestionnaireRouteChildren: AuthQuestionnaireRouteChildren = {
  AuthQuestionnaireIndexRoute: AuthQuestionnaireIndexRoute,
};

const AuthQuestionnaireRouteWithChildren =
  AuthQuestionnaireRoute._addFileChildren(AuthQuestionnaireRouteChildren);

interface AuthRouteChildren {
  AuthAdministrationRoute: typeof AuthAdministrationRouteWithChildren;
  AuthQuestionnaireRoute: typeof AuthQuestionnaireRouteWithChildren;
  AuthIndexRoute: typeof AuthIndexRoute;
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthAdministrationRoute: AuthAdministrationRouteWithChildren,
  AuthQuestionnaireRoute: AuthQuestionnaireRouteWithChildren,
  AuthIndexRoute: AuthIndexRoute,
};

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);

export interface FileRoutesByFullPath {
  "": typeof AuthRouteWithChildren;
  "/session": typeof SessionRoute;
  "/administration": typeof AuthAdministrationRouteWithChildren;
  "/questionnaire": typeof AuthQuestionnaireRouteWithChildren;
  "/": typeof AuthIndexRoute;
  "/administration/carers": typeof AuthAdministrationCarersRouteWithChildren;
  "/administration/export": typeof AuthAdministrationExportRoute;
  "/administration/languages": typeof AuthAdministrationLanguagesRouteWithChildren;
  "/administration/participants": typeof AuthAdministrationParticipantsRoute;
  "/administration/questionnaires": typeof AuthAdministrationQuestionnairesRoute;
  "/administration/studies": typeof AuthAdministrationStudiesRoute;
  "/administration/users": typeof AuthAdministrationUsersRouteWithChildren;
  "/administration/": typeof AuthAdministrationIndexRoute;
  "/questionnaire/": typeof AuthQuestionnaireIndexRoute;
  "/administration/carers/new": typeof AuthAdministrationCarersNewRoute;
  "/administration/languages/new": typeof AuthAdministrationLanguagesNewRoute;
  "/administration/users/new": typeof AuthAdministrationUsersNewRoute;
  "/administration/carers/": typeof AuthAdministrationCarersIndexRoute;
  "/administration/languages/": typeof AuthAdministrationLanguagesIndexRoute;
  "/administration/users/": typeof AuthAdministrationUsersIndexRoute;
  "/administration/carers/edit/$id": typeof AuthAdministrationCarersEditIdRoute;
  "/administration/languages/edit/$id": typeof AuthAdministrationLanguagesEditIdRoute;
  "/administration/users/edit/$id": typeof AuthAdministrationUsersEditIdRoute;
}

export interface FileRoutesByTo {
  "/session": typeof SessionRoute;
  "/": typeof AuthIndexRoute;
  "/administration/export": typeof AuthAdministrationExportRoute;
  "/administration/participants": typeof AuthAdministrationParticipantsRoute;
  "/administration/questionnaires": typeof AuthAdministrationQuestionnairesRoute;
  "/administration/studies": typeof AuthAdministrationStudiesRoute;
  "/administration": typeof AuthAdministrationIndexRoute;
  "/questionnaire": typeof AuthQuestionnaireIndexRoute;
  "/administration/carers/new": typeof AuthAdministrationCarersNewRoute;
  "/administration/languages/new": typeof AuthAdministrationLanguagesNewRoute;
  "/administration/users/new": typeof AuthAdministrationUsersNewRoute;
  "/administration/carers": typeof AuthAdministrationCarersIndexRoute;
  "/administration/languages": typeof AuthAdministrationLanguagesIndexRoute;
  "/administration/users": typeof AuthAdministrationUsersIndexRoute;
  "/administration/carers/edit/$id": typeof AuthAdministrationCarersEditIdRoute;
  "/administration/languages/edit/$id": typeof AuthAdministrationLanguagesEditIdRoute;
  "/administration/users/edit/$id": typeof AuthAdministrationUsersEditIdRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/_auth": typeof AuthRouteWithChildren;
  "/session": typeof SessionRoute;
  "/_auth/administration": typeof AuthAdministrationRouteWithChildren;
  "/_auth/questionnaire": typeof AuthQuestionnaireRouteWithChildren;
  "/_auth/": typeof AuthIndexRoute;
  "/_auth/administration/carers": typeof AuthAdministrationCarersRouteWithChildren;
  "/_auth/administration/export": typeof AuthAdministrationExportRoute;
  "/_auth/administration/languages": typeof AuthAdministrationLanguagesRouteWithChildren;
  "/_auth/administration/participants": typeof AuthAdministrationParticipantsRoute;
  "/_auth/administration/questionnaires": typeof AuthAdministrationQuestionnairesRoute;
  "/_auth/administration/studies": typeof AuthAdministrationStudiesRoute;
  "/_auth/administration/users": typeof AuthAdministrationUsersRouteWithChildren;
  "/_auth/administration/": typeof AuthAdministrationIndexRoute;
  "/_auth/questionnaire/": typeof AuthQuestionnaireIndexRoute;
  "/_auth/administration/carers/new": typeof AuthAdministrationCarersNewRoute;
  "/_auth/administration/languages/new": typeof AuthAdministrationLanguagesNewRoute;
  "/_auth/administration/users/new": typeof AuthAdministrationUsersNewRoute;
  "/_auth/administration/carers/": typeof AuthAdministrationCarersIndexRoute;
  "/_auth/administration/languages/": typeof AuthAdministrationLanguagesIndexRoute;
  "/_auth/administration/users/": typeof AuthAdministrationUsersIndexRoute;
  "/_auth/administration/carers/edit/$id": typeof AuthAdministrationCarersEditIdRoute;
  "/_auth/administration/languages/edit/$id": typeof AuthAdministrationLanguagesEditIdRoute;
  "/_auth/administration/users/edit/$id": typeof AuthAdministrationUsersEditIdRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | ""
    | "/session"
    | "/administration"
    | "/questionnaire"
    | "/"
    | "/administration/carers"
    | "/administration/export"
    | "/administration/languages"
    | "/administration/participants"
    | "/administration/questionnaires"
    | "/administration/studies"
    | "/administration/users"
    | "/administration/"
    | "/questionnaire/"
    | "/administration/carers/new"
    | "/administration/languages/new"
    | "/administration/users/new"
    | "/administration/carers/"
    | "/administration/languages/"
    | "/administration/users/"
    | "/administration/carers/edit/$id"
    | "/administration/languages/edit/$id"
    | "/administration/users/edit/$id";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | "/session"
    | "/"
    | "/administration/export"
    | "/administration/participants"
    | "/administration/questionnaires"
    | "/administration/studies"
    | "/administration"
    | "/questionnaire"
    | "/administration/carers/new"
    | "/administration/languages/new"
    | "/administration/users/new"
    | "/administration/carers"
    | "/administration/languages"
    | "/administration/users"
    | "/administration/carers/edit/$id"
    | "/administration/languages/edit/$id"
    | "/administration/users/edit/$id";
  id:
    | "__root__"
    | "/_auth"
    | "/session"
    | "/_auth/administration"
    | "/_auth/questionnaire"
    | "/_auth/"
    | "/_auth/administration/carers"
    | "/_auth/administration/export"
    | "/_auth/administration/languages"
    | "/_auth/administration/participants"
    | "/_auth/administration/questionnaires"
    | "/_auth/administration/studies"
    | "/_auth/administration/users"
    | "/_auth/administration/"
    | "/_auth/questionnaire/"
    | "/_auth/administration/carers/new"
    | "/_auth/administration/languages/new"
    | "/_auth/administration/users/new"
    | "/_auth/administration/carers/"
    | "/_auth/administration/languages/"
    | "/_auth/administration/users/"
    | "/_auth/administration/carers/edit/$id"
    | "/_auth/administration/languages/edit/$id"
    | "/_auth/administration/users/edit/$id";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRouteWithChildren;
  SessionRoute: typeof SessionRoute;
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRouteWithChildren,
  SessionRoute: SessionRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/session"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/administration",
        "/_auth/questionnaire",
        "/_auth/"
      ]
    },
    "/session": {
      "filePath": "session.tsx"
    },
    "/_auth/administration": {
      "filePath": "_auth/administration.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/administration/carers",
        "/_auth/administration/export",
        "/_auth/administration/languages",
        "/_auth/administration/participants",
        "/_auth/administration/questionnaires",
        "/_auth/administration/studies",
        "/_auth/administration/users",
        "/_auth/administration/"
      ]
    },
    "/_auth/questionnaire": {
      "filePath": "_auth/questionnaire.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/questionnaire/"
      ]
    },
    "/_auth/": {
      "filePath": "_auth/index.tsx",
      "parent": "/_auth"
    },
    "/_auth/administration/carers": {
      "filePath": "_auth/administration/carers.tsx",
      "parent": "/_auth/administration",
      "children": [
        "/_auth/administration/carers/new",
        "/_auth/administration/carers/",
        "/_auth/administration/carers/edit/$id"
      ]
    },
    "/_auth/administration/export": {
      "filePath": "_auth/administration/export.tsx",
      "parent": "/_auth/administration"
    },
    "/_auth/administration/languages": {
      "filePath": "_auth/administration/languages.tsx",
      "parent": "/_auth/administration",
      "children": [
        "/_auth/administration/languages/new",
        "/_auth/administration/languages/",
        "/_auth/administration/languages/edit/$id"
      ]
    },
    "/_auth/administration/participants": {
      "filePath": "_auth/administration/participants.tsx",
      "parent": "/_auth/administration"
    },
    "/_auth/administration/questionnaires": {
      "filePath": "_auth/administration/questionnaires.tsx",
      "parent": "/_auth/administration"
    },
    "/_auth/administration/studies": {
      "filePath": "_auth/administration/studies.tsx",
      "parent": "/_auth/administration"
    },
    "/_auth/administration/users": {
      "filePath": "_auth/administration/users.tsx",
      "parent": "/_auth/administration",
      "children": [
        "/_auth/administration/users/new",
        "/_auth/administration/users/",
        "/_auth/administration/users/edit/$id"
      ]
    },
    "/_auth/administration/": {
      "filePath": "_auth/administration/index.tsx",
      "parent": "/_auth/administration"
    },
    "/_auth/questionnaire/": {
      "filePath": "_auth/questionnaire/index.tsx",
      "parent": "/_auth/questionnaire"
    },
    "/_auth/administration/carers/new": {
      "filePath": "_auth/administration/carers/new.tsx",
      "parent": "/_auth/administration/carers"
    },
    "/_auth/administration/languages/new": {
      "filePath": "_auth/administration/languages/new.tsx",
      "parent": "/_auth/administration/languages"
    },
    "/_auth/administration/users/new": {
      "filePath": "_auth/administration/users/new.tsx",
      "parent": "/_auth/administration/users"
    },
    "/_auth/administration/carers/": {
      "filePath": "_auth/administration/carers/index.tsx",
      "parent": "/_auth/administration/carers"
    },
    "/_auth/administration/languages/": {
      "filePath": "_auth/administration/languages/index.tsx",
      "parent": "/_auth/administration/languages"
    },
    "/_auth/administration/users/": {
      "filePath": "_auth/administration/users/index.tsx",
      "parent": "/_auth/administration/users"
    },
    "/_auth/administration/carers/edit/$id": {
      "filePath": "_auth/administration/carers/edit.$id.tsx",
      "parent": "/_auth/administration/carers"
    },
    "/_auth/administration/languages/edit/$id": {
      "filePath": "_auth/administration/languages/edit.$id.tsx",
      "parent": "/_auth/administration/languages"
    },
    "/_auth/administration/users/edit/$id": {
      "filePath": "_auth/administration/users/edit.$id.tsx",
      "parent": "/_auth/administration/users"
    }
  }
}
ROUTE_MANIFEST_END */
