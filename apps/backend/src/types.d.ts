import { SessionData as FastifySessionData } from "@fastify/secure-session";
import { User } from "./system/users/user.entity";

declare module "@fastify/secure-session" {
  interface SessionData extends FastifySessionData {
    userId?: number;
  }
}

declare module "fastify" {
  interface FastifyRequest {
    user?: User;
  }
}

declare global {
  type Leaves<T> = T extends object
    ? { [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? "" : `.${Leaves<T[K]>}`}` }[keyof T]
    : never;

  type LeaveTypes<T, S extends string> = S extends `${infer T1}.${infer T2}`
    ? T1 extends keyof T
      ? LeaveTypes<T[T1], T2>
      : never
    : S extends keyof T
      ? T[S]
      : never;
}
