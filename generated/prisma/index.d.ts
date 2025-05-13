
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>
/**
 * Model SignalCategory
 * 
 */
export type SignalCategory = $Result.DefaultSelection<Prisma.$SignalCategoryPayload>
/**
 * Model Signal
 * 
 */
export type Signal = $Result.DefaultSelection<Prisma.$SignalPayload>
/**
 * Model Response
 * 
 */
export type Response = $Result.DefaultSelection<Prisma.$ResponsePayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model RoutePoint
 * 
 */
export type RoutePoint = $Result.DefaultSelection<Prisma.$RoutePointPayload>
/**
 * Model WalkSession
 * 
 */
export type WalkSession = $Result.DefaultSelection<Prisma.$WalkSessionPayload>
/**
 * Model WalkLog
 * 
 */
export type WalkLog = $Result.DefaultSelection<Prisma.$WalkLogPayload>
/**
 * Model RespondedSignal
 * 
 */
export type RespondedSignal = $Result.DefaultSelection<Prisma.$RespondedSignalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SignalStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type SignalStatus = (typeof SignalStatus)[keyof typeof SignalStatus]


export const SessionStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type SignalStatus = $Enums.SignalStatus

export const SignalStatus: typeof $Enums.SignalStatus

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signalCategory`: Exposes CRUD operations for the **SignalCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SignalCategories
    * const signalCategories = await prisma.signalCategory.findMany()
    * ```
    */
  get signalCategory(): Prisma.SignalCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signal`: Exposes CRUD operations for the **Signal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signals
    * const signals = await prisma.signal.findMany()
    * ```
    */
  get signal(): Prisma.SignalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.response`: Exposes CRUD operations for the **Response** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responses
    * const responses = await prisma.response.findMany()
    * ```
    */
  get response(): Prisma.ResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routePoint`: Exposes CRUD operations for the **RoutePoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutePoints
    * const routePoints = await prisma.routePoint.findMany()
    * ```
    */
  get routePoint(): Prisma.RoutePointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walkSession`: Exposes CRUD operations for the **WalkSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalkSessions
    * const walkSessions = await prisma.walkSession.findMany()
    * ```
    */
  get walkSession(): Prisma.WalkSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walkLog`: Exposes CRUD operations for the **WalkLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalkLogs
    * const walkLogs = await prisma.walkLog.findMany()
    * ```
    */
  get walkLog(): Prisma.WalkLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.respondedSignal`: Exposes CRUD operations for the **RespondedSignal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RespondedSignals
    * const respondedSignals = await prisma.respondedSignal.findMany()
    * ```
    */
  get respondedSignal(): Prisma.RespondedSignalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Theme: 'Theme',
    SignalCategory: 'SignalCategory',
    Signal: 'Signal',
    Response: 'Response',
    Route: 'Route',
    RoutePoint: 'RoutePoint',
    WalkSession: 'WalkSession',
    WalkLog: 'WalkLog',
    RespondedSignal: 'RespondedSignal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "theme" | "signalCategory" | "signal" | "response" | "route" | "routePoint" | "walkSession" | "walkLog" | "respondedSignal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      SignalCategory: {
        payload: Prisma.$SignalCategoryPayload<ExtArgs>
        fields: Prisma.SignalCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload>
          }
          findFirst: {
            args: Prisma.SignalCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload>
          }
          findMany: {
            args: Prisma.SignalCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload>[]
          }
          create: {
            args: Prisma.SignalCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload>
          }
          createMany: {
            args: Prisma.SignalCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload>[]
          }
          delete: {
            args: Prisma.SignalCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload>
          }
          update: {
            args: Prisma.SignalCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SignalCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SignalCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalCategoryPayload>
          }
          aggregate: {
            args: Prisma.SignalCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignalCategory>
          }
          groupBy: {
            args: Prisma.SignalCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SignalCategoryCountAggregateOutputType> | number
          }
        }
      }
      Signal: {
        payload: Prisma.$SignalPayload<ExtArgs>
        fields: Prisma.SignalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          findFirst: {
            args: Prisma.SignalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          findMany: {
            args: Prisma.SignalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>[]
          }
          create: {
            args: Prisma.SignalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          createMany: {
            args: Prisma.SignalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>[]
          }
          delete: {
            args: Prisma.SignalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          update: {
            args: Prisma.SignalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          deleteMany: {
            args: Prisma.SignalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>[]
          }
          upsert: {
            args: Prisma.SignalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          aggregate: {
            args: Prisma.SignalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignal>
          }
          groupBy: {
            args: Prisma.SignalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalCountArgs<ExtArgs>
            result: $Utils.Optional<SignalCountAggregateOutputType> | number
          }
        }
      }
      Response: {
        payload: Prisma.$ResponsePayload<ExtArgs>
        fields: Prisma.ResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findFirst: {
            args: Prisma.ResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          findMany: {
            args: Prisma.ResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          create: {
            args: Prisma.ResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          createMany: {
            args: Prisma.ResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          delete: {
            args: Prisma.ResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          update: {
            args: Prisma.ResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          deleteMany: {
            args: Prisma.ResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>[]
          }
          upsert: {
            args: Prisma.ResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsePayload>
          }
          aggregate: {
            args: Prisma.ResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponse>
          }
          groupBy: {
            args: Prisma.ResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ResponseCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      RoutePoint: {
        payload: Prisma.$RoutePointPayload<ExtArgs>
        fields: Prisma.RoutePointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutePointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutePointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload>
          }
          findFirst: {
            args: Prisma.RoutePointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutePointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload>
          }
          findMany: {
            args: Prisma.RoutePointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload>[]
          }
          create: {
            args: Prisma.RoutePointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload>
          }
          createMany: {
            args: Prisma.RoutePointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutePointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload>[]
          }
          delete: {
            args: Prisma.RoutePointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload>
          }
          update: {
            args: Prisma.RoutePointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload>
          }
          deleteMany: {
            args: Prisma.RoutePointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutePointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutePointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload>[]
          }
          upsert: {
            args: Prisma.RoutePointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePointPayload>
          }
          aggregate: {
            args: Prisma.RoutePointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutePoint>
          }
          groupBy: {
            args: Prisma.RoutePointGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutePointGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutePointCountArgs<ExtArgs>
            result: $Utils.Optional<RoutePointCountAggregateOutputType> | number
          }
        }
      }
      WalkSession: {
        payload: Prisma.$WalkSessionPayload<ExtArgs>
        fields: Prisma.WalkSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalkSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalkSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload>
          }
          findFirst: {
            args: Prisma.WalkSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalkSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload>
          }
          findMany: {
            args: Prisma.WalkSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload>[]
          }
          create: {
            args: Prisma.WalkSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload>
          }
          createMany: {
            args: Prisma.WalkSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalkSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload>[]
          }
          delete: {
            args: Prisma.WalkSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload>
          }
          update: {
            args: Prisma.WalkSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload>
          }
          deleteMany: {
            args: Prisma.WalkSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalkSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalkSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload>[]
          }
          upsert: {
            args: Prisma.WalkSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkSessionPayload>
          }
          aggregate: {
            args: Prisma.WalkSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalkSession>
          }
          groupBy: {
            args: Prisma.WalkSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalkSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalkSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WalkSessionCountAggregateOutputType> | number
          }
        }
      }
      WalkLog: {
        payload: Prisma.$WalkLogPayload<ExtArgs>
        fields: Prisma.WalkLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalkLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalkLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload>
          }
          findFirst: {
            args: Prisma.WalkLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalkLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload>
          }
          findMany: {
            args: Prisma.WalkLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload>[]
          }
          create: {
            args: Prisma.WalkLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload>
          }
          createMany: {
            args: Prisma.WalkLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalkLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload>[]
          }
          delete: {
            args: Prisma.WalkLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload>
          }
          update: {
            args: Prisma.WalkLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload>
          }
          deleteMany: {
            args: Prisma.WalkLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalkLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalkLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload>[]
          }
          upsert: {
            args: Prisma.WalkLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkLogPayload>
          }
          aggregate: {
            args: Prisma.WalkLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalkLog>
          }
          groupBy: {
            args: Prisma.WalkLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalkLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalkLogCountArgs<ExtArgs>
            result: $Utils.Optional<WalkLogCountAggregateOutputType> | number
          }
        }
      }
      RespondedSignal: {
        payload: Prisma.$RespondedSignalPayload<ExtArgs>
        fields: Prisma.RespondedSignalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespondedSignalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespondedSignalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload>
          }
          findFirst: {
            args: Prisma.RespondedSignalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespondedSignalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload>
          }
          findMany: {
            args: Prisma.RespondedSignalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload>[]
          }
          create: {
            args: Prisma.RespondedSignalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload>
          }
          createMany: {
            args: Prisma.RespondedSignalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RespondedSignalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload>[]
          }
          delete: {
            args: Prisma.RespondedSignalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload>
          }
          update: {
            args: Prisma.RespondedSignalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload>
          }
          deleteMany: {
            args: Prisma.RespondedSignalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RespondedSignalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RespondedSignalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload>[]
          }
          upsert: {
            args: Prisma.RespondedSignalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespondedSignalPayload>
          }
          aggregate: {
            args: Prisma.RespondedSignalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRespondedSignal>
          }
          groupBy: {
            args: Prisma.RespondedSignalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespondedSignalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespondedSignalCountArgs<ExtArgs>
            result: $Utils.Optional<RespondedSignalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    theme?: ThemeOmit
    signalCategory?: SignalCategoryOmit
    signal?: SignalOmit
    response?: ResponseOmit
    route?: RouteOmit
    routePoint?: RoutePointOmit
    walkSession?: WalkSessionOmit
    walkLog?: WalkLogOmit
    respondedSignal?: RespondedSignalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    routes: number
    signals: number
    selectedSignals: number
    responses: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | UserCountOutputTypeCountRoutesArgs
    signals?: boolean | UserCountOutputTypeCountSignalsArgs
    selectedSignals?: boolean | UserCountOutputTypeCountSelectedSignalsArgs
    responses?: boolean | UserCountOutputTypeCountResponsesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSelectedSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalkSessionWhereInput
  }


  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    routes: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | ThemeCountOutputTypeCountRoutesArgs
  }

  // Custom InputTypes
  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }


  /**
   * Count Type SignalCategoryCountOutputType
   */

  export type SignalCategoryCountOutputType = {
    signals: number
  }

  export type SignalCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signals?: boolean | SignalCategoryCountOutputTypeCountSignalsArgs
  }

  // Custom InputTypes
  /**
   * SignalCategoryCountOutputType without action
   */
  export type SignalCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategoryCountOutputType
     */
    select?: SignalCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SignalCategoryCountOutputType without action
   */
  export type SignalCategoryCountOutputTypeCountSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalWhereInput
  }


  /**
   * Count Type SignalCountOutputType
   */

  export type SignalCountOutputType = {
    responses: number
    respondedSignals: number
  }

  export type SignalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | SignalCountOutputTypeCountResponsesArgs
    respondedSignals?: boolean | SignalCountOutputTypeCountRespondedSignalsArgs
  }

  // Custom InputTypes
  /**
   * SignalCountOutputType without action
   */
  export type SignalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCountOutputType
     */
    select?: SignalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SignalCountOutputType without action
   */
  export type SignalCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
  }

  /**
   * SignalCountOutputType without action
   */
  export type SignalCountOutputTypeCountRespondedSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespondedSignalWhereInput
  }


  /**
   * Count Type ResponseCountOutputType
   */

  export type ResponseCountOutputType = {
    respondedSignals: number
  }

  export type ResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respondedSignals?: boolean | ResponseCountOutputTypeCountRespondedSignalsArgs
  }

  // Custom InputTypes
  /**
   * ResponseCountOutputType without action
   */
  export type ResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseCountOutputType
     */
    select?: ResponseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResponseCountOutputType without action
   */
  export type ResponseCountOutputTypeCountRespondedSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespondedSignalWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    points: number
    sessions: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | RouteCountOutputTypeCountPointsArgs
    sessions?: boolean | RouteCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutePointWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalkSessionWhereInput
  }


  /**
   * Count Type WalkLogCountOutputType
   */

  export type WalkLogCountOutputType = {
    respondedSignals: number
  }

  export type WalkLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respondedSignals?: boolean | WalkLogCountOutputTypeCountRespondedSignalsArgs
  }

  // Custom InputTypes
  /**
   * WalkLogCountOutputType without action
   */
  export type WalkLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLogCountOutputType
     */
    select?: WalkLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalkLogCountOutputType without action
   */
  export type WalkLogCountOutputTypeCountRespondedSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespondedSignalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    createdAt?: boolean
    routes?: boolean | User$routesArgs<ExtArgs>
    signals?: boolean | User$signalsArgs<ExtArgs>
    selectedSignals?: boolean | User$selectedSignalsArgs<ExtArgs>
    responses?: boolean | User$responsesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | User$routesArgs<ExtArgs>
    signals?: boolean | User$signalsArgs<ExtArgs>
    selectedSignals?: boolean | User$selectedSignalsArgs<ExtArgs>
    responses?: boolean | User$responsesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      routes: Prisma.$RoutePayload<ExtArgs>[]
      signals: Prisma.$SignalPayload<ExtArgs>[]
      selectedSignals: Prisma.$SignalPayload<ExtArgs>[]
      responses: Prisma.$ResponsePayload<ExtArgs>[]
      sessions: Prisma.$WalkSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routes<T extends User$routesArgs<ExtArgs> = {}>(args?: Subset<T, User$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signals<T extends User$signalsArgs<ExtArgs> = {}>(args?: Subset<T, User$signalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    selectedSignals<T extends User$selectedSignalsArgs<ExtArgs> = {}>(args?: Subset<T, User$selectedSignalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends User$responsesArgs<ExtArgs> = {}>(args?: Subset<T, User$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.routes
   */
  export type User$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * User.signals
   */
  export type User$signalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    where?: SignalWhereInput
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    cursor?: SignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * User.selectedSignals
   */
  export type User$selectedSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    where?: SignalWhereInput
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    cursor?: SignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * User.responses
   */
  export type User$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    cursor?: ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    where?: WalkSessionWhereInput
    orderBy?: WalkSessionOrderByWithRelationInput | WalkSessionOrderByWithRelationInput[]
    cursor?: WalkSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalkSessionScalarFieldEnum | WalkSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    id: number | null
  }

  export type ThemeSumAggregateOutputType = {
    id: number | null
  }

  export type ThemeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    id?: true
  }

  export type ThemeSumAggregateInputType = {
    id?: true
  }

  export type ThemeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: number
    name: string
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    routes?: boolean | Theme$routesArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["theme"]>
  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | Theme$routesArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      routes: Prisma.$RoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThemeFindUniqueArgs>(args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThemeFindFirstArgs>(args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThemeFindManyArgs>(args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends ThemeCreateArgs>(args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThemeCreateManyArgs>(args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Themes and returns the data saved in the database.
     * @param {ThemeCreateManyAndReturnArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, ThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends ThemeDeleteArgs>(args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThemeUpdateArgs>(args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThemeDeleteManyArgs>(args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThemeUpdateManyArgs>(args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes and returns the data updated in the database.
     * @param {ThemeUpdateManyAndReturnArgs} args - Arguments to update many Themes.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, ThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends ThemeUpsertArgs>(args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routes<T extends Theme$routesArgs<ExtArgs> = {}>(args?: Subset<T, Theme$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Theme model
   */
  interface ThemeFieldRefs {
    readonly id: FieldRef<"Theme", 'Int'>
    readonly name: FieldRef<"Theme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }

  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme createManyAndReturn
   */
  export type ThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme updateManyAndReturn
   */
  export type ThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }

  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to delete.
     */
    limit?: number
  }

  /**
   * Theme.routes
   */
  export type Theme$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
  }


  /**
   * Model SignalCategory
   */

  export type AggregateSignalCategory = {
    _count: SignalCategoryCountAggregateOutputType | null
    _avg: SignalCategoryAvgAggregateOutputType | null
    _sum: SignalCategorySumAggregateOutputType | null
    _min: SignalCategoryMinAggregateOutputType | null
    _max: SignalCategoryMaxAggregateOutputType | null
  }

  export type SignalCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type SignalCategorySumAggregateOutputType = {
    id: number | null
  }

  export type SignalCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SignalCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SignalCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SignalCategoryAvgAggregateInputType = {
    id?: true
  }

  export type SignalCategorySumAggregateInputType = {
    id?: true
  }

  export type SignalCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SignalCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SignalCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SignalCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignalCategory to aggregate.
     */
    where?: SignalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalCategories to fetch.
     */
    orderBy?: SignalCategoryOrderByWithRelationInput | SignalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SignalCategories
    **/
    _count?: true | SignalCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignalCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignalCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalCategoryMaxAggregateInputType
  }

  export type GetSignalCategoryAggregateType<T extends SignalCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSignalCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignalCategory[P]>
      : GetScalarType<T[P], AggregateSignalCategory[P]>
  }




  export type SignalCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalCategoryWhereInput
    orderBy?: SignalCategoryOrderByWithAggregationInput | SignalCategoryOrderByWithAggregationInput[]
    by: SignalCategoryScalarFieldEnum[] | SignalCategoryScalarFieldEnum
    having?: SignalCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalCategoryCountAggregateInputType | true
    _avg?: SignalCategoryAvgAggregateInputType
    _sum?: SignalCategorySumAggregateInputType
    _min?: SignalCategoryMinAggregateInputType
    _max?: SignalCategoryMaxAggregateInputType
  }

  export type SignalCategoryGroupByOutputType = {
    id: number
    name: string
    _count: SignalCategoryCountAggregateOutputType | null
    _avg: SignalCategoryAvgAggregateOutputType | null
    _sum: SignalCategorySumAggregateOutputType | null
    _min: SignalCategoryMinAggregateOutputType | null
    _max: SignalCategoryMaxAggregateOutputType | null
  }

  type GetSignalCategoryGroupByPayload<T extends SignalCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SignalCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SignalCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    signals?: boolean | SignalCategory$signalsArgs<ExtArgs>
    _count?: boolean | SignalCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalCategory"]>

  export type SignalCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["signalCategory"]>

  export type SignalCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["signalCategory"]>

  export type SignalCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SignalCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["signalCategory"]>
  export type SignalCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signals?: boolean | SignalCategory$signalsArgs<ExtArgs>
    _count?: boolean | SignalCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SignalCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SignalCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SignalCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SignalCategory"
    objects: {
      signals: Prisma.$SignalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["signalCategory"]>
    composites: {}
  }

  type SignalCategoryGetPayload<S extends boolean | null | undefined | SignalCategoryDefaultArgs> = $Result.GetResult<Prisma.$SignalCategoryPayload, S>

  type SignalCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignalCategoryCountAggregateInputType | true
    }

  export interface SignalCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SignalCategory'], meta: { name: 'SignalCategory' } }
    /**
     * Find zero or one SignalCategory that matches the filter.
     * @param {SignalCategoryFindUniqueArgs} args - Arguments to find a SignalCategory
     * @example
     * // Get one SignalCategory
     * const signalCategory = await prisma.signalCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalCategoryFindUniqueArgs>(args: SelectSubset<T, SignalCategoryFindUniqueArgs<ExtArgs>>): Prisma__SignalCategoryClient<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SignalCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalCategoryFindUniqueOrThrowArgs} args - Arguments to find a SignalCategory
     * @example
     * // Get one SignalCategory
     * const signalCategory = await prisma.signalCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalCategoryClient<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignalCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCategoryFindFirstArgs} args - Arguments to find a SignalCategory
     * @example
     * // Get one SignalCategory
     * const signalCategory = await prisma.signalCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalCategoryFindFirstArgs>(args?: SelectSubset<T, SignalCategoryFindFirstArgs<ExtArgs>>): Prisma__SignalCategoryClient<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignalCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCategoryFindFirstOrThrowArgs} args - Arguments to find a SignalCategory
     * @example
     * // Get one SignalCategory
     * const signalCategory = await prisma.signalCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalCategoryClient<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SignalCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SignalCategories
     * const signalCategories = await prisma.signalCategory.findMany()
     * 
     * // Get first 10 SignalCategories
     * const signalCategories = await prisma.signalCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalCategoryWithIdOnly = await prisma.signalCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalCategoryFindManyArgs>(args?: SelectSubset<T, SignalCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SignalCategory.
     * @param {SignalCategoryCreateArgs} args - Arguments to create a SignalCategory.
     * @example
     * // Create one SignalCategory
     * const SignalCategory = await prisma.signalCategory.create({
     *   data: {
     *     // ... data to create a SignalCategory
     *   }
     * })
     * 
     */
    create<T extends SignalCategoryCreateArgs>(args: SelectSubset<T, SignalCategoryCreateArgs<ExtArgs>>): Prisma__SignalCategoryClient<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SignalCategories.
     * @param {SignalCategoryCreateManyArgs} args - Arguments to create many SignalCategories.
     * @example
     * // Create many SignalCategories
     * const signalCategory = await prisma.signalCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalCategoryCreateManyArgs>(args?: SelectSubset<T, SignalCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SignalCategories and returns the data saved in the database.
     * @param {SignalCategoryCreateManyAndReturnArgs} args - Arguments to create many SignalCategories.
     * @example
     * // Create many SignalCategories
     * const signalCategory = await prisma.signalCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SignalCategories and only return the `id`
     * const signalCategoryWithIdOnly = await prisma.signalCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SignalCategory.
     * @param {SignalCategoryDeleteArgs} args - Arguments to delete one SignalCategory.
     * @example
     * // Delete one SignalCategory
     * const SignalCategory = await prisma.signalCategory.delete({
     *   where: {
     *     // ... filter to delete one SignalCategory
     *   }
     * })
     * 
     */
    delete<T extends SignalCategoryDeleteArgs>(args: SelectSubset<T, SignalCategoryDeleteArgs<ExtArgs>>): Prisma__SignalCategoryClient<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SignalCategory.
     * @param {SignalCategoryUpdateArgs} args - Arguments to update one SignalCategory.
     * @example
     * // Update one SignalCategory
     * const signalCategory = await prisma.signalCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalCategoryUpdateArgs>(args: SelectSubset<T, SignalCategoryUpdateArgs<ExtArgs>>): Prisma__SignalCategoryClient<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SignalCategories.
     * @param {SignalCategoryDeleteManyArgs} args - Arguments to filter SignalCategories to delete.
     * @example
     * // Delete a few SignalCategories
     * const { count } = await prisma.signalCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalCategoryDeleteManyArgs>(args?: SelectSubset<T, SignalCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignalCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SignalCategories
     * const signalCategory = await prisma.signalCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalCategoryUpdateManyArgs>(args: SelectSubset<T, SignalCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignalCategories and returns the data updated in the database.
     * @param {SignalCategoryUpdateManyAndReturnArgs} args - Arguments to update many SignalCategories.
     * @example
     * // Update many SignalCategories
     * const signalCategory = await prisma.signalCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SignalCategories and only return the `id`
     * const signalCategoryWithIdOnly = await prisma.signalCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignalCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SignalCategory.
     * @param {SignalCategoryUpsertArgs} args - Arguments to update or create a SignalCategory.
     * @example
     * // Update or create a SignalCategory
     * const signalCategory = await prisma.signalCategory.upsert({
     *   create: {
     *     // ... data to create a SignalCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SignalCategory we want to update
     *   }
     * })
     */
    upsert<T extends SignalCategoryUpsertArgs>(args: SelectSubset<T, SignalCategoryUpsertArgs<ExtArgs>>): Prisma__SignalCategoryClient<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SignalCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCategoryCountArgs} args - Arguments to filter SignalCategories to count.
     * @example
     * // Count the number of SignalCategories
     * const count = await prisma.signalCategory.count({
     *   where: {
     *     // ... the filter for the SignalCategories we want to count
     *   }
     * })
    **/
    count<T extends SignalCategoryCountArgs>(
      args?: Subset<T, SignalCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SignalCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignalCategoryAggregateArgs>(args: Subset<T, SignalCategoryAggregateArgs>): Prisma.PrismaPromise<GetSignalCategoryAggregateType<T>>

    /**
     * Group by SignalCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignalCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SignalCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignalCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SignalCategory model
   */
  readonly fields: SignalCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SignalCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    signals<T extends SignalCategory$signalsArgs<ExtArgs> = {}>(args?: Subset<T, SignalCategory$signalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SignalCategory model
   */
  interface SignalCategoryFieldRefs {
    readonly id: FieldRef<"SignalCategory", 'Int'>
    readonly name: FieldRef<"SignalCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SignalCategory findUnique
   */
  export type SignalCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SignalCategory to fetch.
     */
    where: SignalCategoryWhereUniqueInput
  }

  /**
   * SignalCategory findUniqueOrThrow
   */
  export type SignalCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SignalCategory to fetch.
     */
    where: SignalCategoryWhereUniqueInput
  }

  /**
   * SignalCategory findFirst
   */
  export type SignalCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SignalCategory to fetch.
     */
    where?: SignalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalCategories to fetch.
     */
    orderBy?: SignalCategoryOrderByWithRelationInput | SignalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignalCategories.
     */
    cursor?: SignalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignalCategories.
     */
    distinct?: SignalCategoryScalarFieldEnum | SignalCategoryScalarFieldEnum[]
  }

  /**
   * SignalCategory findFirstOrThrow
   */
  export type SignalCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SignalCategory to fetch.
     */
    where?: SignalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalCategories to fetch.
     */
    orderBy?: SignalCategoryOrderByWithRelationInput | SignalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignalCategories.
     */
    cursor?: SignalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignalCategories.
     */
    distinct?: SignalCategoryScalarFieldEnum | SignalCategoryScalarFieldEnum[]
  }

  /**
   * SignalCategory findMany
   */
  export type SignalCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SignalCategories to fetch.
     */
    where?: SignalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalCategories to fetch.
     */
    orderBy?: SignalCategoryOrderByWithRelationInput | SignalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SignalCategories.
     */
    cursor?: SignalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalCategories.
     */
    skip?: number
    distinct?: SignalCategoryScalarFieldEnum | SignalCategoryScalarFieldEnum[]
  }

  /**
   * SignalCategory create
   */
  export type SignalCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SignalCategory.
     */
    data: XOR<SignalCategoryCreateInput, SignalCategoryUncheckedCreateInput>
  }

  /**
   * SignalCategory createMany
   */
  export type SignalCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SignalCategories.
     */
    data: SignalCategoryCreateManyInput | SignalCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SignalCategory createManyAndReturn
   */
  export type SignalCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SignalCategories.
     */
    data: SignalCategoryCreateManyInput | SignalCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SignalCategory update
   */
  export type SignalCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SignalCategory.
     */
    data: XOR<SignalCategoryUpdateInput, SignalCategoryUncheckedUpdateInput>
    /**
     * Choose, which SignalCategory to update.
     */
    where: SignalCategoryWhereUniqueInput
  }

  /**
   * SignalCategory updateMany
   */
  export type SignalCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SignalCategories.
     */
    data: XOR<SignalCategoryUpdateManyMutationInput, SignalCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SignalCategories to update
     */
    where?: SignalCategoryWhereInput
    /**
     * Limit how many SignalCategories to update.
     */
    limit?: number
  }

  /**
   * SignalCategory updateManyAndReturn
   */
  export type SignalCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SignalCategories.
     */
    data: XOR<SignalCategoryUpdateManyMutationInput, SignalCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SignalCategories to update
     */
    where?: SignalCategoryWhereInput
    /**
     * Limit how many SignalCategories to update.
     */
    limit?: number
  }

  /**
   * SignalCategory upsert
   */
  export type SignalCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SignalCategory to update in case it exists.
     */
    where: SignalCategoryWhereUniqueInput
    /**
     * In case the SignalCategory found by the `where` argument doesn't exist, create a new SignalCategory with this data.
     */
    create: XOR<SignalCategoryCreateInput, SignalCategoryUncheckedCreateInput>
    /**
     * In case the SignalCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalCategoryUpdateInput, SignalCategoryUncheckedUpdateInput>
  }

  /**
   * SignalCategory delete
   */
  export type SignalCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
    /**
     * Filter which SignalCategory to delete.
     */
    where: SignalCategoryWhereUniqueInput
  }

  /**
   * SignalCategory deleteMany
   */
  export type SignalCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignalCategories to delete
     */
    where?: SignalCategoryWhereInput
    /**
     * Limit how many SignalCategories to delete.
     */
    limit?: number
  }

  /**
   * SignalCategory.signals
   */
  export type SignalCategory$signalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    where?: SignalWhereInput
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    cursor?: SignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * SignalCategory without action
   */
  export type SignalCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCategory
     */
    select?: SignalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalCategory
     */
    omit?: SignalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Signal
   */

  export type AggregateSignal = {
    _count: SignalCountAggregateOutputType | null
    _avg: SignalAvgAggregateOutputType | null
    _sum: SignalSumAggregateOutputType | null
    _min: SignalMinAggregateOutputType | null
    _max: SignalMaxAggregateOutputType | null
  }

  export type SignalAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    lat: number | null
    lng: number | null
    timeLimit: number | null
    selectedUserId: number | null
  }

  export type SignalSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    lat: number | null
    lng: number | null
    timeLimit: number | null
    selectedUserId: number | null
  }

  export type SignalMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    description: string | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    timeLimit: number | null
    status: $Enums.SignalStatus | null
    selectedUserId: number | null
    expiresAt: Date | null
  }

  export type SignalMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    description: string | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    timeLimit: number | null
    status: $Enums.SignalStatus | null
    selectedUserId: number | null
    expiresAt: Date | null
  }

  export type SignalCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    title: number
    description: number
    lat: number
    lng: number
    createdAt: number
    timeLimit: number
    status: number
    selectedUserId: number
    expiresAt: number
    _all: number
  }


  export type SignalAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    lat?: true
    lng?: true
    timeLimit?: true
    selectedUserId?: true
  }

  export type SignalSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    lat?: true
    lng?: true
    timeLimit?: true
    selectedUserId?: true
  }

  export type SignalMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    description?: true
    lat?: true
    lng?: true
    createdAt?: true
    timeLimit?: true
    status?: true
    selectedUserId?: true
    expiresAt?: true
  }

  export type SignalMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    description?: true
    lat?: true
    lng?: true
    createdAt?: true
    timeLimit?: true
    status?: true
    selectedUserId?: true
    expiresAt?: true
  }

  export type SignalCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    description?: true
    lat?: true
    lng?: true
    createdAt?: true
    timeLimit?: true
    status?: true
    selectedUserId?: true
    expiresAt?: true
    _all?: true
  }

  export type SignalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signal to aggregate.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signals
    **/
    _count?: true | SignalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalMaxAggregateInputType
  }

  export type GetSignalAggregateType<T extends SignalAggregateArgs> = {
        [P in keyof T & keyof AggregateSignal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignal[P]>
      : GetScalarType<T[P], AggregateSignal[P]>
  }




  export type SignalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalWhereInput
    orderBy?: SignalOrderByWithAggregationInput | SignalOrderByWithAggregationInput[]
    by: SignalScalarFieldEnum[] | SignalScalarFieldEnum
    having?: SignalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalCountAggregateInputType | true
    _avg?: SignalAvgAggregateInputType
    _sum?: SignalSumAggregateInputType
    _min?: SignalMinAggregateInputType
    _max?: SignalMaxAggregateInputType
  }

  export type SignalGroupByOutputType = {
    id: number
    userId: number
    categoryId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt: Date
    timeLimit: number
    status: $Enums.SignalStatus
    selectedUserId: number | null
    expiresAt: Date
    _count: SignalCountAggregateOutputType | null
    _avg: SignalAvgAggregateOutputType | null
    _sum: SignalSumAggregateOutputType | null
    _min: SignalMinAggregateOutputType | null
    _max: SignalMaxAggregateOutputType | null
  }

  type GetSignalGroupByPayload<T extends SignalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalGroupByOutputType[P]>
            : GetScalarType<T[P], SignalGroupByOutputType[P]>
        }
      >
    >


  export type SignalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    timeLimit?: boolean
    status?: boolean
    selectedUserId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    selectedUser?: boolean | Signal$selectedUserArgs<ExtArgs>
    category?: boolean | SignalCategoryDefaultArgs<ExtArgs>
    responses?: boolean | Signal$responsesArgs<ExtArgs>
    respondedSignals?: boolean | Signal$respondedSignalsArgs<ExtArgs>
    _count?: boolean | SignalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signal"]>

  export type SignalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    timeLimit?: boolean
    status?: boolean
    selectedUserId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    selectedUser?: boolean | Signal$selectedUserArgs<ExtArgs>
    category?: boolean | SignalCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signal"]>

  export type SignalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    timeLimit?: boolean
    status?: boolean
    selectedUserId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    selectedUser?: boolean | Signal$selectedUserArgs<ExtArgs>
    category?: boolean | SignalCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signal"]>

  export type SignalSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    timeLimit?: boolean
    status?: boolean
    selectedUserId?: boolean
    expiresAt?: boolean
  }

  export type SignalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "title" | "description" | "lat" | "lng" | "createdAt" | "timeLimit" | "status" | "selectedUserId" | "expiresAt", ExtArgs["result"]["signal"]>
  export type SignalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    selectedUser?: boolean | Signal$selectedUserArgs<ExtArgs>
    category?: boolean | SignalCategoryDefaultArgs<ExtArgs>
    responses?: boolean | Signal$responsesArgs<ExtArgs>
    respondedSignals?: boolean | Signal$respondedSignalsArgs<ExtArgs>
    _count?: boolean | SignalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SignalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    selectedUser?: boolean | Signal$selectedUserArgs<ExtArgs>
    category?: boolean | SignalCategoryDefaultArgs<ExtArgs>
  }
  export type SignalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    selectedUser?: boolean | Signal$selectedUserArgs<ExtArgs>
    category?: boolean | SignalCategoryDefaultArgs<ExtArgs>
  }

  export type $SignalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      selectedUser: Prisma.$UserPayload<ExtArgs> | null
      category: Prisma.$SignalCategoryPayload<ExtArgs>
      responses: Prisma.$ResponsePayload<ExtArgs>[]
      respondedSignals: Prisma.$RespondedSignalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      categoryId: number
      title: string
      description: string
      lat: number
      lng: number
      createdAt: Date
      timeLimit: number
      status: $Enums.SignalStatus
      selectedUserId: number | null
      expiresAt: Date
    }, ExtArgs["result"]["signal"]>
    composites: {}
  }

  type SignalGetPayload<S extends boolean | null | undefined | SignalDefaultArgs> = $Result.GetResult<Prisma.$SignalPayload, S>

  type SignalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignalCountAggregateInputType | true
    }

  export interface SignalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signal'], meta: { name: 'Signal' } }
    /**
     * Find zero or one Signal that matches the filter.
     * @param {SignalFindUniqueArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalFindUniqueArgs>(args: SelectSubset<T, SignalFindUniqueArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalFindUniqueOrThrowArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalFindFirstArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalFindFirstArgs>(args?: SelectSubset<T, SignalFindFirstArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalFindFirstOrThrowArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signals
     * const signals = await prisma.signal.findMany()
     * 
     * // Get first 10 Signals
     * const signals = await prisma.signal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalWithIdOnly = await prisma.signal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalFindManyArgs>(args?: SelectSubset<T, SignalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signal.
     * @param {SignalCreateArgs} args - Arguments to create a Signal.
     * @example
     * // Create one Signal
     * const Signal = await prisma.signal.create({
     *   data: {
     *     // ... data to create a Signal
     *   }
     * })
     * 
     */
    create<T extends SignalCreateArgs>(args: SelectSubset<T, SignalCreateArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signals.
     * @param {SignalCreateManyArgs} args - Arguments to create many Signals.
     * @example
     * // Create many Signals
     * const signal = await prisma.signal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalCreateManyArgs>(args?: SelectSubset<T, SignalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signals and returns the data saved in the database.
     * @param {SignalCreateManyAndReturnArgs} args - Arguments to create many Signals.
     * @example
     * // Create many Signals
     * const signal = await prisma.signal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signals and only return the `id`
     * const signalWithIdOnly = await prisma.signal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Signal.
     * @param {SignalDeleteArgs} args - Arguments to delete one Signal.
     * @example
     * // Delete one Signal
     * const Signal = await prisma.signal.delete({
     *   where: {
     *     // ... filter to delete one Signal
     *   }
     * })
     * 
     */
    delete<T extends SignalDeleteArgs>(args: SelectSubset<T, SignalDeleteArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signal.
     * @param {SignalUpdateArgs} args - Arguments to update one Signal.
     * @example
     * // Update one Signal
     * const signal = await prisma.signal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalUpdateArgs>(args: SelectSubset<T, SignalUpdateArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signals.
     * @param {SignalDeleteManyArgs} args - Arguments to filter Signals to delete.
     * @example
     * // Delete a few Signals
     * const { count } = await prisma.signal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalDeleteManyArgs>(args?: SelectSubset<T, SignalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signals
     * const signal = await prisma.signal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalUpdateManyArgs>(args: SelectSubset<T, SignalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signals and returns the data updated in the database.
     * @param {SignalUpdateManyAndReturnArgs} args - Arguments to update many Signals.
     * @example
     * // Update many Signals
     * const signal = await prisma.signal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signals and only return the `id`
     * const signalWithIdOnly = await prisma.signal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignalUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Signal.
     * @param {SignalUpsertArgs} args - Arguments to update or create a Signal.
     * @example
     * // Update or create a Signal
     * const signal = await prisma.signal.upsert({
     *   create: {
     *     // ... data to create a Signal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signal we want to update
     *   }
     * })
     */
    upsert<T extends SignalUpsertArgs>(args: SelectSubset<T, SignalUpsertArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCountArgs} args - Arguments to filter Signals to count.
     * @example
     * // Count the number of Signals
     * const count = await prisma.signal.count({
     *   where: {
     *     // ... the filter for the Signals we want to count
     *   }
     * })
    **/
    count<T extends SignalCountArgs>(
      args?: Subset<T, SignalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignalAggregateArgs>(args: Subset<T, SignalAggregateArgs>): Prisma.PrismaPromise<GetSignalAggregateType<T>>

    /**
     * Group by Signal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalGroupByArgs['orderBy'] }
        : { orderBy?: SignalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signal model
   */
  readonly fields: SignalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selectedUser<T extends Signal$selectedUserArgs<ExtArgs> = {}>(args?: Subset<T, Signal$selectedUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends SignalCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SignalCategoryDefaultArgs<ExtArgs>>): Prisma__SignalCategoryClient<$Result.GetResult<Prisma.$SignalCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends Signal$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Signal$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    respondedSignals<T extends Signal$respondedSignalsArgs<ExtArgs> = {}>(args?: Subset<T, Signal$respondedSignalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Signal model
   */
  interface SignalFieldRefs {
    readonly id: FieldRef<"Signal", 'Int'>
    readonly userId: FieldRef<"Signal", 'Int'>
    readonly categoryId: FieldRef<"Signal", 'Int'>
    readonly title: FieldRef<"Signal", 'String'>
    readonly description: FieldRef<"Signal", 'String'>
    readonly lat: FieldRef<"Signal", 'Float'>
    readonly lng: FieldRef<"Signal", 'Float'>
    readonly createdAt: FieldRef<"Signal", 'DateTime'>
    readonly timeLimit: FieldRef<"Signal", 'Int'>
    readonly status: FieldRef<"Signal", 'SignalStatus'>
    readonly selectedUserId: FieldRef<"Signal", 'Int'>
    readonly expiresAt: FieldRef<"Signal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Signal findUnique
   */
  export type SignalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal findUniqueOrThrow
   */
  export type SignalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal findFirst
   */
  export type SignalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signals.
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signals.
     */
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Signal findFirstOrThrow
   */
  export type SignalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signals.
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signals.
     */
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Signal findMany
   */
  export type SignalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signals to fetch.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signals.
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Signal create
   */
  export type SignalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * The data needed to create a Signal.
     */
    data: XOR<SignalCreateInput, SignalUncheckedCreateInput>
  }

  /**
   * Signal createMany
   */
  export type SignalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signals.
     */
    data: SignalCreateManyInput | SignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signal createManyAndReturn
   */
  export type SignalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * The data used to create many Signals.
     */
    data: SignalCreateManyInput | SignalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signal update
   */
  export type SignalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * The data needed to update a Signal.
     */
    data: XOR<SignalUpdateInput, SignalUncheckedUpdateInput>
    /**
     * Choose, which Signal to update.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal updateMany
   */
  export type SignalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signals.
     */
    data: XOR<SignalUpdateManyMutationInput, SignalUncheckedUpdateManyInput>
    /**
     * Filter which Signals to update
     */
    where?: SignalWhereInput
    /**
     * Limit how many Signals to update.
     */
    limit?: number
  }

  /**
   * Signal updateManyAndReturn
   */
  export type SignalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * The data used to update Signals.
     */
    data: XOR<SignalUpdateManyMutationInput, SignalUncheckedUpdateManyInput>
    /**
     * Filter which Signals to update
     */
    where?: SignalWhereInput
    /**
     * Limit how many Signals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signal upsert
   */
  export type SignalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * The filter to search for the Signal to update in case it exists.
     */
    where: SignalWhereUniqueInput
    /**
     * In case the Signal found by the `where` argument doesn't exist, create a new Signal with this data.
     */
    create: XOR<SignalCreateInput, SignalUncheckedCreateInput>
    /**
     * In case the Signal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalUpdateInput, SignalUncheckedUpdateInput>
  }

  /**
   * Signal delete
   */
  export type SignalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter which Signal to delete.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal deleteMany
   */
  export type SignalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signals to delete
     */
    where?: SignalWhereInput
    /**
     * Limit how many Signals to delete.
     */
    limit?: number
  }

  /**
   * Signal.selectedUser
   */
  export type Signal$selectedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Signal.responses
   */
  export type Signal$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    cursor?: ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Signal.respondedSignals
   */
  export type Signal$respondedSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    where?: RespondedSignalWhereInput
    orderBy?: RespondedSignalOrderByWithRelationInput | RespondedSignalOrderByWithRelationInput[]
    cursor?: RespondedSignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespondedSignalScalarFieldEnum | RespondedSignalScalarFieldEnum[]
  }

  /**
   * Signal without action
   */
  export type SignalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
  }


  /**
   * Model Response
   */

  export type AggregateResponse = {
    _count: ResponseCountAggregateOutputType | null
    _avg: ResponseAvgAggregateOutputType | null
    _sum: ResponseSumAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  export type ResponseAvgAggregateOutputType = {
    id: number | null
    signalId: number | null
    userId: number | null
  }

  export type ResponseSumAggregateOutputType = {
    id: number | null
    signalId: number | null
    userId: number | null
  }

  export type ResponseMinAggregateOutputType = {
    id: number | null
    signalId: number | null
    userId: number | null
    message: string | null
    respondedAt: Date | null
    isRead: boolean | null
  }

  export type ResponseMaxAggregateOutputType = {
    id: number | null
    signalId: number | null
    userId: number | null
    message: string | null
    respondedAt: Date | null
    isRead: boolean | null
  }

  export type ResponseCountAggregateOutputType = {
    id: number
    signalId: number
    userId: number
    message: number
    respondedAt: number
    isRead: number
    _all: number
  }


  export type ResponseAvgAggregateInputType = {
    id?: true
    signalId?: true
    userId?: true
  }

  export type ResponseSumAggregateInputType = {
    id?: true
    signalId?: true
    userId?: true
  }

  export type ResponseMinAggregateInputType = {
    id?: true
    signalId?: true
    userId?: true
    message?: true
    respondedAt?: true
    isRead?: true
  }

  export type ResponseMaxAggregateInputType = {
    id?: true
    signalId?: true
    userId?: true
    message?: true
    respondedAt?: true
    isRead?: true
  }

  export type ResponseCountAggregateInputType = {
    id?: true
    signalId?: true
    userId?: true
    message?: true
    respondedAt?: true
    isRead?: true
    _all?: true
  }

  export type ResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Response to aggregate.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responses
    **/
    _count?: true | ResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponseMaxAggregateInputType
  }

  export type GetResponseAggregateType<T extends ResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponse[P]>
      : GetScalarType<T[P], AggregateResponse[P]>
  }




  export type ResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseWhereInput
    orderBy?: ResponseOrderByWithAggregationInput | ResponseOrderByWithAggregationInput[]
    by: ResponseScalarFieldEnum[] | ResponseScalarFieldEnum
    having?: ResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponseCountAggregateInputType | true
    _avg?: ResponseAvgAggregateInputType
    _sum?: ResponseSumAggregateInputType
    _min?: ResponseMinAggregateInputType
    _max?: ResponseMaxAggregateInputType
  }

  export type ResponseGroupByOutputType = {
    id: number
    signalId: number
    userId: number
    message: string
    respondedAt: Date
    isRead: boolean
    _count: ResponseCountAggregateOutputType | null
    _avg: ResponseAvgAggregateOutputType | null
    _sum: ResponseSumAggregateOutputType | null
    _min: ResponseMinAggregateOutputType | null
    _max: ResponseMaxAggregateOutputType | null
  }

  type GetResponseGroupByPayload<T extends ResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ResponseGroupByOutputType[P]>
        }
      >
    >


  export type ResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signalId?: boolean
    userId?: boolean
    message?: boolean
    respondedAt?: boolean
    isRead?: boolean
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    respondedSignals?: boolean | Response$respondedSignalsArgs<ExtArgs>
    _count?: boolean | ResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signalId?: boolean
    userId?: boolean
    message?: boolean
    respondedAt?: boolean
    isRead?: boolean
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signalId?: boolean
    userId?: boolean
    message?: boolean
    respondedAt?: boolean
    isRead?: boolean
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["response"]>

  export type ResponseSelectScalar = {
    id?: boolean
    signalId?: boolean
    userId?: boolean
    message?: boolean
    respondedAt?: boolean
    isRead?: boolean
  }

  export type ResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "signalId" | "userId" | "message" | "respondedAt" | "isRead", ExtArgs["result"]["response"]>
  export type ResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    respondedSignals?: boolean | Response$respondedSignalsArgs<ExtArgs>
    _count?: boolean | ResponseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Response"
    objects: {
      signal: Prisma.$SignalPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      respondedSignals: Prisma.$RespondedSignalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      signalId: number
      userId: number
      message: string
      respondedAt: Date
      isRead: boolean
    }, ExtArgs["result"]["response"]>
    composites: {}
  }

  type ResponseGetPayload<S extends boolean | null | undefined | ResponseDefaultArgs> = $Result.GetResult<Prisma.$ResponsePayload, S>

  type ResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponseCountAggregateInputType | true
    }

  export interface ResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Response'], meta: { name: 'Response' } }
    /**
     * Find zero or one Response that matches the filter.
     * @param {ResponseFindUniqueArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponseFindUniqueArgs>(args: SelectSubset<T, ResponseFindUniqueArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Response that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponseFindUniqueOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponseFindFirstArgs>(args?: SelectSubset<T, ResponseFindFirstArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindFirstOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responses
     * const responses = await prisma.response.findMany()
     * 
     * // Get first 10 Responses
     * const responses = await prisma.response.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responseWithIdOnly = await prisma.response.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponseFindManyArgs>(args?: SelectSubset<T, ResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Response.
     * @param {ResponseCreateArgs} args - Arguments to create a Response.
     * @example
     * // Create one Response
     * const Response = await prisma.response.create({
     *   data: {
     *     // ... data to create a Response
     *   }
     * })
     * 
     */
    create<T extends ResponseCreateArgs>(args: SelectSubset<T, ResponseCreateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Responses.
     * @param {ResponseCreateManyArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponseCreateManyArgs>(args?: SelectSubset<T, ResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Responses and returns the data saved in the database.
     * @param {ResponseCreateManyAndReturnArgs} args - Arguments to create many Responses.
     * @example
     * // Create many Responses
     * const response = await prisma.response.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Response.
     * @param {ResponseDeleteArgs} args - Arguments to delete one Response.
     * @example
     * // Delete one Response
     * const Response = await prisma.response.delete({
     *   where: {
     *     // ... filter to delete one Response
     *   }
     * })
     * 
     */
    delete<T extends ResponseDeleteArgs>(args: SelectSubset<T, ResponseDeleteArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Response.
     * @param {ResponseUpdateArgs} args - Arguments to update one Response.
     * @example
     * // Update one Response
     * const response = await prisma.response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponseUpdateArgs>(args: SelectSubset<T, ResponseUpdateArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Responses.
     * @param {ResponseDeleteManyArgs} args - Arguments to filter Responses to delete.
     * @example
     * // Delete a few Responses
     * const { count } = await prisma.response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponseDeleteManyArgs>(args?: SelectSubset<T, ResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponseUpdateManyArgs>(args: SelectSubset<T, ResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responses and returns the data updated in the database.
     * @param {ResponseUpdateManyAndReturnArgs} args - Arguments to update many Responses.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Responses and only return the `id`
     * const responseWithIdOnly = await prisma.response.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, ResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Response.
     * @param {ResponseUpsertArgs} args - Arguments to update or create a Response.
     * @example
     * // Update or create a Response
     * const response = await prisma.response.upsert({
     *   create: {
     *     // ... data to create a Response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Response we want to update
     *   }
     * })
     */
    upsert<T extends ResponseUpsertArgs>(args: SelectSubset<T, ResponseUpsertArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseCountArgs} args - Arguments to filter Responses to count.
     * @example
     * // Count the number of Responses
     * const count = await prisma.response.count({
     *   where: {
     *     // ... the filter for the Responses we want to count
     *   }
     * })
    **/
    count<T extends ResponseCountArgs>(
      args?: Subset<T, ResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResponseAggregateArgs>(args: Subset<T, ResponseAggregateArgs>): Prisma.PrismaPromise<GetResponseAggregateType<T>>

    /**
     * Group by Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponseGroupByArgs['orderBy'] }
        : { orderBy?: ResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Response model
   */
  readonly fields: ResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    signal<T extends SignalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SignalDefaultArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    respondedSignals<T extends Response$respondedSignalsArgs<ExtArgs> = {}>(args?: Subset<T, Response$respondedSignalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Response model
   */
  interface ResponseFieldRefs {
    readonly id: FieldRef<"Response", 'Int'>
    readonly signalId: FieldRef<"Response", 'Int'>
    readonly userId: FieldRef<"Response", 'Int'>
    readonly message: FieldRef<"Response", 'String'>
    readonly respondedAt: FieldRef<"Response", 'DateTime'>
    readonly isRead: FieldRef<"Response", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Response findUnique
   */
  export type ResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findUniqueOrThrow
   */
  export type ResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response findFirst
   */
  export type ResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findFirstOrThrow
   */
  export type ResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Response to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response findMany
   */
  export type ResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Responses to fetch.
     */
    where?: ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responses to fetch.
     */
    orderBy?: ResponseOrderByWithRelationInput | ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responses.
     */
    cursor?: ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responses.
     */
    skip?: number
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[]
  }

  /**
   * Response create
   */
  export type ResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a Response.
     */
    data: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
  }

  /**
   * Response createMany
   */
  export type ResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Response createManyAndReturn
   */
  export type ResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * The data used to create many Responses.
     */
    data: ResponseCreateManyInput | ResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Response update
   */
  export type ResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a Response.
     */
    data: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
    /**
     * Choose, which Response to update.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response updateMany
   */
  export type ResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responses.
     */
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Responses to update
     */
    where?: ResponseWhereInput
    /**
     * Limit how many Responses to update.
     */
    limit?: number
  }

  /**
   * Response updateManyAndReturn
   */
  export type ResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * The data used to update Responses.
     */
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Responses to update
     */
    where?: ResponseWhereInput
    /**
     * Limit how many Responses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Response upsert
   */
  export type ResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the Response to update in case it exists.
     */
    where: ResponseWhereUniqueInput
    /**
     * In case the Response found by the `where` argument doesn't exist, create a new Response with this data.
     */
    create: XOR<ResponseCreateInput, ResponseUncheckedCreateInput>
    /**
     * In case the Response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponseUpdateInput, ResponseUncheckedUpdateInput>
  }

  /**
   * Response delete
   */
  export type ResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
    /**
     * Filter which Response to delete.
     */
    where: ResponseWhereUniqueInput
  }

  /**
   * Response deleteMany
   */
  export type ResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responses to delete
     */
    where?: ResponseWhereInput
    /**
     * Limit how many Responses to delete.
     */
    limit?: number
  }

  /**
   * Response.respondedSignals
   */
  export type Response$respondedSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    where?: RespondedSignalWhereInput
    orderBy?: RespondedSignalOrderByWithRelationInput | RespondedSignalOrderByWithRelationInput[]
    cursor?: RespondedSignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespondedSignalScalarFieldEnum | RespondedSignalScalarFieldEnum[]
  }

  /**
   * Response without action
   */
  export type ResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Response
     */
    select?: ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Response
     */
    omit?: ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    distance: number | null
    themeId: number | null
  }

  export type RouteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    distance: number | null
    themeId: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: number | null
    userId: number | null
    distance: number | null
    themeId: number | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    distance: number | null
    themeId: number | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    userId: number
    distance: number
    themeId: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    id?: true
    userId?: true
    distance?: true
    themeId?: true
  }

  export type RouteSumAggregateInputType = {
    id?: true
    userId?: true
    distance?: true
    themeId?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    userId?: true
    distance?: true
    themeId?: true
    createdAt?: true
    completedAt?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    userId?: true
    distance?: true
    themeId?: true
    createdAt?: true
    completedAt?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    userId?: true
    distance?: true
    themeId?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: number
    userId: number
    distance: number | null
    themeId: number
    createdAt: Date
    completedAt: Date | null
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    distance?: boolean
    themeId?: boolean
    createdAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
    points?: boolean | Route$pointsArgs<ExtArgs>
    sessions?: boolean | Route$sessionsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    distance?: boolean
    themeId?: boolean
    createdAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    distance?: boolean
    themeId?: boolean
    createdAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    userId?: boolean
    distance?: boolean
    themeId?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "distance" | "themeId" | "createdAt" | "completedAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
    points?: boolean | Route$pointsArgs<ExtArgs>
    sessions?: boolean | Route$sessionsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      theme: Prisma.$ThemePayload<ExtArgs>
      points: Prisma.$RoutePointPayload<ExtArgs>[]
      sessions: Prisma.$WalkSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      distance: number | null
      themeId: number
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theme<T extends ThemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThemeDefaultArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    points<T extends Route$pointsArgs<ExtArgs> = {}>(args?: Subset<T, Route$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Route$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Route$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'Int'>
    readonly userId: FieldRef<"Route", 'Int'>
    readonly distance: FieldRef<"Route", 'Float'>
    readonly themeId: FieldRef<"Route", 'Int'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
    readonly completedAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.points
   */
  export type Route$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    where?: RoutePointWhereInput
    orderBy?: RoutePointOrderByWithRelationInput | RoutePointOrderByWithRelationInput[]
    cursor?: RoutePointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutePointScalarFieldEnum | RoutePointScalarFieldEnum[]
  }

  /**
   * Route.sessions
   */
  export type Route$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    where?: WalkSessionWhereInput
    orderBy?: WalkSessionOrderByWithRelationInput | WalkSessionOrderByWithRelationInput[]
    cursor?: WalkSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalkSessionScalarFieldEnum | WalkSessionScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model RoutePoint
   */

  export type AggregateRoutePoint = {
    _count: RoutePointCountAggregateOutputType | null
    _avg: RoutePointAvgAggregateOutputType | null
    _sum: RoutePointSumAggregateOutputType | null
    _min: RoutePointMinAggregateOutputType | null
    _max: RoutePointMaxAggregateOutputType | null
  }

  export type RoutePointAvgAggregateOutputType = {
    id: number | null
    routeId: number | null
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type RoutePointSumAggregateOutputType = {
    id: number | null
    routeId: number | null
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type RoutePointMinAggregateOutputType = {
    id: number | null
    routeId: number | null
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type RoutePointMaxAggregateOutputType = {
    id: number | null
    routeId: number | null
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type RoutePointCountAggregateOutputType = {
    id: number
    routeId: number
    lat: number
    lng: number
    order: number
    _all: number
  }


  export type RoutePointAvgAggregateInputType = {
    id?: true
    routeId?: true
    lat?: true
    lng?: true
    order?: true
  }

  export type RoutePointSumAggregateInputType = {
    id?: true
    routeId?: true
    lat?: true
    lng?: true
    order?: true
  }

  export type RoutePointMinAggregateInputType = {
    id?: true
    routeId?: true
    lat?: true
    lng?: true
    order?: true
  }

  export type RoutePointMaxAggregateInputType = {
    id?: true
    routeId?: true
    lat?: true
    lng?: true
    order?: true
  }

  export type RoutePointCountAggregateInputType = {
    id?: true
    routeId?: true
    lat?: true
    lng?: true
    order?: true
    _all?: true
  }

  export type RoutePointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutePoint to aggregate.
     */
    where?: RoutePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutePoints to fetch.
     */
    orderBy?: RoutePointOrderByWithRelationInput | RoutePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutePoints
    **/
    _count?: true | RoutePointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutePointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutePointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutePointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutePointMaxAggregateInputType
  }

  export type GetRoutePointAggregateType<T extends RoutePointAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutePoint[P]>
      : GetScalarType<T[P], AggregateRoutePoint[P]>
  }




  export type RoutePointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutePointWhereInput
    orderBy?: RoutePointOrderByWithAggregationInput | RoutePointOrderByWithAggregationInput[]
    by: RoutePointScalarFieldEnum[] | RoutePointScalarFieldEnum
    having?: RoutePointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutePointCountAggregateInputType | true
    _avg?: RoutePointAvgAggregateInputType
    _sum?: RoutePointSumAggregateInputType
    _min?: RoutePointMinAggregateInputType
    _max?: RoutePointMaxAggregateInputType
  }

  export type RoutePointGroupByOutputType = {
    id: number
    routeId: number
    lat: number
    lng: number
    order: number
    _count: RoutePointCountAggregateOutputType | null
    _avg: RoutePointAvgAggregateOutputType | null
    _sum: RoutePointSumAggregateOutputType | null
    _min: RoutePointMinAggregateOutputType | null
    _max: RoutePointMaxAggregateOutputType | null
  }

  type GetRoutePointGroupByPayload<T extends RoutePointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutePointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutePointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutePointGroupByOutputType[P]>
            : GetScalarType<T[P], RoutePointGroupByOutputType[P]>
        }
      >
    >


  export type RoutePointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    lat?: boolean
    lng?: boolean
    order?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routePoint"]>

  export type RoutePointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    lat?: boolean
    lng?: boolean
    order?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routePoint"]>

  export type RoutePointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    lat?: boolean
    lng?: boolean
    order?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routePoint"]>

  export type RoutePointSelectScalar = {
    id?: boolean
    routeId?: boolean
    lat?: boolean
    lng?: boolean
    order?: boolean
  }

  export type RoutePointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "lat" | "lng" | "order", ExtArgs["result"]["routePoint"]>
  export type RoutePointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type RoutePointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type RoutePointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $RoutePointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutePoint"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routeId: number
      lat: number
      lng: number
      order: number
    }, ExtArgs["result"]["routePoint"]>
    composites: {}
  }

  type RoutePointGetPayload<S extends boolean | null | undefined | RoutePointDefaultArgs> = $Result.GetResult<Prisma.$RoutePointPayload, S>

  type RoutePointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutePointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutePointCountAggregateInputType | true
    }

  export interface RoutePointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutePoint'], meta: { name: 'RoutePoint' } }
    /**
     * Find zero or one RoutePoint that matches the filter.
     * @param {RoutePointFindUniqueArgs} args - Arguments to find a RoutePoint
     * @example
     * // Get one RoutePoint
     * const routePoint = await prisma.routePoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutePointFindUniqueArgs>(args: SelectSubset<T, RoutePointFindUniqueArgs<ExtArgs>>): Prisma__RoutePointClient<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoutePoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutePointFindUniqueOrThrowArgs} args - Arguments to find a RoutePoint
     * @example
     * // Get one RoutePoint
     * const routePoint = await prisma.routePoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutePointFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutePointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutePointClient<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutePoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutePointFindFirstArgs} args - Arguments to find a RoutePoint
     * @example
     * // Get one RoutePoint
     * const routePoint = await prisma.routePoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutePointFindFirstArgs>(args?: SelectSubset<T, RoutePointFindFirstArgs<ExtArgs>>): Prisma__RoutePointClient<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutePoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutePointFindFirstOrThrowArgs} args - Arguments to find a RoutePoint
     * @example
     * // Get one RoutePoint
     * const routePoint = await prisma.routePoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutePointFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutePointFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutePointClient<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoutePoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutePointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutePoints
     * const routePoints = await prisma.routePoint.findMany()
     * 
     * // Get first 10 RoutePoints
     * const routePoints = await prisma.routePoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routePointWithIdOnly = await prisma.routePoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutePointFindManyArgs>(args?: SelectSubset<T, RoutePointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoutePoint.
     * @param {RoutePointCreateArgs} args - Arguments to create a RoutePoint.
     * @example
     * // Create one RoutePoint
     * const RoutePoint = await prisma.routePoint.create({
     *   data: {
     *     // ... data to create a RoutePoint
     *   }
     * })
     * 
     */
    create<T extends RoutePointCreateArgs>(args: SelectSubset<T, RoutePointCreateArgs<ExtArgs>>): Prisma__RoutePointClient<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoutePoints.
     * @param {RoutePointCreateManyArgs} args - Arguments to create many RoutePoints.
     * @example
     * // Create many RoutePoints
     * const routePoint = await prisma.routePoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutePointCreateManyArgs>(args?: SelectSubset<T, RoutePointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoutePoints and returns the data saved in the database.
     * @param {RoutePointCreateManyAndReturnArgs} args - Arguments to create many RoutePoints.
     * @example
     * // Create many RoutePoints
     * const routePoint = await prisma.routePoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoutePoints and only return the `id`
     * const routePointWithIdOnly = await prisma.routePoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutePointCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutePointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoutePoint.
     * @param {RoutePointDeleteArgs} args - Arguments to delete one RoutePoint.
     * @example
     * // Delete one RoutePoint
     * const RoutePoint = await prisma.routePoint.delete({
     *   where: {
     *     // ... filter to delete one RoutePoint
     *   }
     * })
     * 
     */
    delete<T extends RoutePointDeleteArgs>(args: SelectSubset<T, RoutePointDeleteArgs<ExtArgs>>): Prisma__RoutePointClient<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoutePoint.
     * @param {RoutePointUpdateArgs} args - Arguments to update one RoutePoint.
     * @example
     * // Update one RoutePoint
     * const routePoint = await prisma.routePoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutePointUpdateArgs>(args: SelectSubset<T, RoutePointUpdateArgs<ExtArgs>>): Prisma__RoutePointClient<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoutePoints.
     * @param {RoutePointDeleteManyArgs} args - Arguments to filter RoutePoints to delete.
     * @example
     * // Delete a few RoutePoints
     * const { count } = await prisma.routePoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutePointDeleteManyArgs>(args?: SelectSubset<T, RoutePointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutePointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutePoints
     * const routePoint = await prisma.routePoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutePointUpdateManyArgs>(args: SelectSubset<T, RoutePointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutePoints and returns the data updated in the database.
     * @param {RoutePointUpdateManyAndReturnArgs} args - Arguments to update many RoutePoints.
     * @example
     * // Update many RoutePoints
     * const routePoint = await prisma.routePoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoutePoints and only return the `id`
     * const routePointWithIdOnly = await prisma.routePoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoutePointUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutePointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoutePoint.
     * @param {RoutePointUpsertArgs} args - Arguments to update or create a RoutePoint.
     * @example
     * // Update or create a RoutePoint
     * const routePoint = await prisma.routePoint.upsert({
     *   create: {
     *     // ... data to create a RoutePoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutePoint we want to update
     *   }
     * })
     */
    upsert<T extends RoutePointUpsertArgs>(args: SelectSubset<T, RoutePointUpsertArgs<ExtArgs>>): Prisma__RoutePointClient<$Result.GetResult<Prisma.$RoutePointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoutePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutePointCountArgs} args - Arguments to filter RoutePoints to count.
     * @example
     * // Count the number of RoutePoints
     * const count = await prisma.routePoint.count({
     *   where: {
     *     // ... the filter for the RoutePoints we want to count
     *   }
     * })
    **/
    count<T extends RoutePointCountArgs>(
      args?: Subset<T, RoutePointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutePointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutePointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoutePointAggregateArgs>(args: Subset<T, RoutePointAggregateArgs>): Prisma.PrismaPromise<GetRoutePointAggregateType<T>>

    /**
     * Group by RoutePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutePointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoutePointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutePointGroupByArgs['orderBy'] }
        : { orderBy?: RoutePointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoutePointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutePointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutePoint model
   */
  readonly fields: RoutePointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutePoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutePointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoutePoint model
   */
  interface RoutePointFieldRefs {
    readonly id: FieldRef<"RoutePoint", 'Int'>
    readonly routeId: FieldRef<"RoutePoint", 'Int'>
    readonly lat: FieldRef<"RoutePoint", 'Float'>
    readonly lng: FieldRef<"RoutePoint", 'Float'>
    readonly order: FieldRef<"RoutePoint", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoutePoint findUnique
   */
  export type RoutePointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    /**
     * Filter, which RoutePoint to fetch.
     */
    where: RoutePointWhereUniqueInput
  }

  /**
   * RoutePoint findUniqueOrThrow
   */
  export type RoutePointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    /**
     * Filter, which RoutePoint to fetch.
     */
    where: RoutePointWhereUniqueInput
  }

  /**
   * RoutePoint findFirst
   */
  export type RoutePointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    /**
     * Filter, which RoutePoint to fetch.
     */
    where?: RoutePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutePoints to fetch.
     */
    orderBy?: RoutePointOrderByWithRelationInput | RoutePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutePoints.
     */
    cursor?: RoutePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutePoints.
     */
    distinct?: RoutePointScalarFieldEnum | RoutePointScalarFieldEnum[]
  }

  /**
   * RoutePoint findFirstOrThrow
   */
  export type RoutePointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    /**
     * Filter, which RoutePoint to fetch.
     */
    where?: RoutePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutePoints to fetch.
     */
    orderBy?: RoutePointOrderByWithRelationInput | RoutePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutePoints.
     */
    cursor?: RoutePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutePoints.
     */
    distinct?: RoutePointScalarFieldEnum | RoutePointScalarFieldEnum[]
  }

  /**
   * RoutePoint findMany
   */
  export type RoutePointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    /**
     * Filter, which RoutePoints to fetch.
     */
    where?: RoutePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutePoints to fetch.
     */
    orderBy?: RoutePointOrderByWithRelationInput | RoutePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutePoints.
     */
    cursor?: RoutePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutePoints.
     */
    skip?: number
    distinct?: RoutePointScalarFieldEnum | RoutePointScalarFieldEnum[]
  }

  /**
   * RoutePoint create
   */
  export type RoutePointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutePoint.
     */
    data: XOR<RoutePointCreateInput, RoutePointUncheckedCreateInput>
  }

  /**
   * RoutePoint createMany
   */
  export type RoutePointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutePoints.
     */
    data: RoutePointCreateManyInput | RoutePointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutePoint createManyAndReturn
   */
  export type RoutePointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * The data used to create many RoutePoints.
     */
    data: RoutePointCreateManyInput | RoutePointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutePoint update
   */
  export type RoutePointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutePoint.
     */
    data: XOR<RoutePointUpdateInput, RoutePointUncheckedUpdateInput>
    /**
     * Choose, which RoutePoint to update.
     */
    where: RoutePointWhereUniqueInput
  }

  /**
   * RoutePoint updateMany
   */
  export type RoutePointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutePoints.
     */
    data: XOR<RoutePointUpdateManyMutationInput, RoutePointUncheckedUpdateManyInput>
    /**
     * Filter which RoutePoints to update
     */
    where?: RoutePointWhereInput
    /**
     * Limit how many RoutePoints to update.
     */
    limit?: number
  }

  /**
   * RoutePoint updateManyAndReturn
   */
  export type RoutePointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * The data used to update RoutePoints.
     */
    data: XOR<RoutePointUpdateManyMutationInput, RoutePointUncheckedUpdateManyInput>
    /**
     * Filter which RoutePoints to update
     */
    where?: RoutePointWhereInput
    /**
     * Limit how many RoutePoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutePoint upsert
   */
  export type RoutePointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutePoint to update in case it exists.
     */
    where: RoutePointWhereUniqueInput
    /**
     * In case the RoutePoint found by the `where` argument doesn't exist, create a new RoutePoint with this data.
     */
    create: XOR<RoutePointCreateInput, RoutePointUncheckedCreateInput>
    /**
     * In case the RoutePoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutePointUpdateInput, RoutePointUncheckedUpdateInput>
  }

  /**
   * RoutePoint delete
   */
  export type RoutePointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
    /**
     * Filter which RoutePoint to delete.
     */
    where: RoutePointWhereUniqueInput
  }

  /**
   * RoutePoint deleteMany
   */
  export type RoutePointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutePoints to delete
     */
    where?: RoutePointWhereInput
    /**
     * Limit how many RoutePoints to delete.
     */
    limit?: number
  }

  /**
   * RoutePoint without action
   */
  export type RoutePointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutePoint
     */
    select?: RoutePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutePoint
     */
    omit?: RoutePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutePointInclude<ExtArgs> | null
  }


  /**
   * Model WalkSession
   */

  export type AggregateWalkSession = {
    _count: WalkSessionCountAggregateOutputType | null
    _avg: WalkSessionAvgAggregateOutputType | null
    _sum: WalkSessionSumAggregateOutputType | null
    _min: WalkSessionMinAggregateOutputType | null
    _max: WalkSessionMaxAggregateOutputType | null
  }

  export type WalkSessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    routeId: number | null
  }

  export type WalkSessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    routeId: number | null
  }

  export type WalkSessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    routeId: number | null
    startedAt: Date | null
    finishedAt: Date | null
    status: $Enums.SessionStatus | null
  }

  export type WalkSessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    routeId: number | null
    startedAt: Date | null
    finishedAt: Date | null
    status: $Enums.SessionStatus | null
  }

  export type WalkSessionCountAggregateOutputType = {
    id: number
    userId: number
    routeId: number
    startedAt: number
    finishedAt: number
    status: number
    _all: number
  }


  export type WalkSessionAvgAggregateInputType = {
    id?: true
    userId?: true
    routeId?: true
  }

  export type WalkSessionSumAggregateInputType = {
    id?: true
    userId?: true
    routeId?: true
  }

  export type WalkSessionMinAggregateInputType = {
    id?: true
    userId?: true
    routeId?: true
    startedAt?: true
    finishedAt?: true
    status?: true
  }

  export type WalkSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    routeId?: true
    startedAt?: true
    finishedAt?: true
    status?: true
  }

  export type WalkSessionCountAggregateInputType = {
    id?: true
    userId?: true
    routeId?: true
    startedAt?: true
    finishedAt?: true
    status?: true
    _all?: true
  }

  export type WalkSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalkSession to aggregate.
     */
    where?: WalkSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkSessions to fetch.
     */
    orderBy?: WalkSessionOrderByWithRelationInput | WalkSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalkSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalkSessions
    **/
    _count?: true | WalkSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalkSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalkSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalkSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalkSessionMaxAggregateInputType
  }

  export type GetWalkSessionAggregateType<T extends WalkSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWalkSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalkSession[P]>
      : GetScalarType<T[P], AggregateWalkSession[P]>
  }




  export type WalkSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalkSessionWhereInput
    orderBy?: WalkSessionOrderByWithAggregationInput | WalkSessionOrderByWithAggregationInput[]
    by: WalkSessionScalarFieldEnum[] | WalkSessionScalarFieldEnum
    having?: WalkSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalkSessionCountAggregateInputType | true
    _avg?: WalkSessionAvgAggregateInputType
    _sum?: WalkSessionSumAggregateInputType
    _min?: WalkSessionMinAggregateInputType
    _max?: WalkSessionMaxAggregateInputType
  }

  export type WalkSessionGroupByOutputType = {
    id: number
    userId: number
    routeId: number
    startedAt: Date
    finishedAt: Date | null
    status: $Enums.SessionStatus
    _count: WalkSessionCountAggregateOutputType | null
    _avg: WalkSessionAvgAggregateOutputType | null
    _sum: WalkSessionSumAggregateOutputType | null
    _min: WalkSessionMinAggregateOutputType | null
    _max: WalkSessionMaxAggregateOutputType | null
  }

  type GetWalkSessionGroupByPayload<T extends WalkSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalkSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalkSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalkSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WalkSessionGroupByOutputType[P]>
        }
      >
    >


  export type WalkSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    routeId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    walkLog?: boolean | WalkSession$walkLogArgs<ExtArgs>
  }, ExtArgs["result"]["walkSession"]>

  export type WalkSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    routeId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walkSession"]>

  export type WalkSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    routeId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walkSession"]>

  export type WalkSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    routeId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    status?: boolean
  }

  export type WalkSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "routeId" | "startedAt" | "finishedAt" | "status", ExtArgs["result"]["walkSession"]>
  export type WalkSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    walkLog?: boolean | WalkSession$walkLogArgs<ExtArgs>
  }
  export type WalkSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type WalkSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $WalkSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalkSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs>
      walkLog: Prisma.$WalkLogPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      routeId: number
      startedAt: Date
      finishedAt: Date | null
      status: $Enums.SessionStatus
    }, ExtArgs["result"]["walkSession"]>
    composites: {}
  }

  type WalkSessionGetPayload<S extends boolean | null | undefined | WalkSessionDefaultArgs> = $Result.GetResult<Prisma.$WalkSessionPayload, S>

  type WalkSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalkSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalkSessionCountAggregateInputType | true
    }

  export interface WalkSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalkSession'], meta: { name: 'WalkSession' } }
    /**
     * Find zero or one WalkSession that matches the filter.
     * @param {WalkSessionFindUniqueArgs} args - Arguments to find a WalkSession
     * @example
     * // Get one WalkSession
     * const walkSession = await prisma.walkSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalkSessionFindUniqueArgs>(args: SelectSubset<T, WalkSessionFindUniqueArgs<ExtArgs>>): Prisma__WalkSessionClient<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalkSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalkSessionFindUniqueOrThrowArgs} args - Arguments to find a WalkSession
     * @example
     * // Get one WalkSession
     * const walkSession = await prisma.walkSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalkSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WalkSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalkSessionClient<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalkSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkSessionFindFirstArgs} args - Arguments to find a WalkSession
     * @example
     * // Get one WalkSession
     * const walkSession = await prisma.walkSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalkSessionFindFirstArgs>(args?: SelectSubset<T, WalkSessionFindFirstArgs<ExtArgs>>): Prisma__WalkSessionClient<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalkSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkSessionFindFirstOrThrowArgs} args - Arguments to find a WalkSession
     * @example
     * // Get one WalkSession
     * const walkSession = await prisma.walkSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalkSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WalkSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalkSessionClient<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalkSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalkSessions
     * const walkSessions = await prisma.walkSession.findMany()
     * 
     * // Get first 10 WalkSessions
     * const walkSessions = await prisma.walkSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walkSessionWithIdOnly = await prisma.walkSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalkSessionFindManyArgs>(args?: SelectSubset<T, WalkSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalkSession.
     * @param {WalkSessionCreateArgs} args - Arguments to create a WalkSession.
     * @example
     * // Create one WalkSession
     * const WalkSession = await prisma.walkSession.create({
     *   data: {
     *     // ... data to create a WalkSession
     *   }
     * })
     * 
     */
    create<T extends WalkSessionCreateArgs>(args: SelectSubset<T, WalkSessionCreateArgs<ExtArgs>>): Prisma__WalkSessionClient<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalkSessions.
     * @param {WalkSessionCreateManyArgs} args - Arguments to create many WalkSessions.
     * @example
     * // Create many WalkSessions
     * const walkSession = await prisma.walkSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalkSessionCreateManyArgs>(args?: SelectSubset<T, WalkSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalkSessions and returns the data saved in the database.
     * @param {WalkSessionCreateManyAndReturnArgs} args - Arguments to create many WalkSessions.
     * @example
     * // Create many WalkSessions
     * const walkSession = await prisma.walkSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalkSessions and only return the `id`
     * const walkSessionWithIdOnly = await prisma.walkSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalkSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, WalkSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalkSession.
     * @param {WalkSessionDeleteArgs} args - Arguments to delete one WalkSession.
     * @example
     * // Delete one WalkSession
     * const WalkSession = await prisma.walkSession.delete({
     *   where: {
     *     // ... filter to delete one WalkSession
     *   }
     * })
     * 
     */
    delete<T extends WalkSessionDeleteArgs>(args: SelectSubset<T, WalkSessionDeleteArgs<ExtArgs>>): Prisma__WalkSessionClient<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalkSession.
     * @param {WalkSessionUpdateArgs} args - Arguments to update one WalkSession.
     * @example
     * // Update one WalkSession
     * const walkSession = await prisma.walkSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalkSessionUpdateArgs>(args: SelectSubset<T, WalkSessionUpdateArgs<ExtArgs>>): Prisma__WalkSessionClient<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalkSessions.
     * @param {WalkSessionDeleteManyArgs} args - Arguments to filter WalkSessions to delete.
     * @example
     * // Delete a few WalkSessions
     * const { count } = await prisma.walkSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalkSessionDeleteManyArgs>(args?: SelectSubset<T, WalkSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalkSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalkSessions
     * const walkSession = await prisma.walkSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalkSessionUpdateManyArgs>(args: SelectSubset<T, WalkSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalkSessions and returns the data updated in the database.
     * @param {WalkSessionUpdateManyAndReturnArgs} args - Arguments to update many WalkSessions.
     * @example
     * // Update many WalkSessions
     * const walkSession = await prisma.walkSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalkSessions and only return the `id`
     * const walkSessionWithIdOnly = await prisma.walkSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalkSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, WalkSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalkSession.
     * @param {WalkSessionUpsertArgs} args - Arguments to update or create a WalkSession.
     * @example
     * // Update or create a WalkSession
     * const walkSession = await prisma.walkSession.upsert({
     *   create: {
     *     // ... data to create a WalkSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalkSession we want to update
     *   }
     * })
     */
    upsert<T extends WalkSessionUpsertArgs>(args: SelectSubset<T, WalkSessionUpsertArgs<ExtArgs>>): Prisma__WalkSessionClient<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalkSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkSessionCountArgs} args - Arguments to filter WalkSessions to count.
     * @example
     * // Count the number of WalkSessions
     * const count = await prisma.walkSession.count({
     *   where: {
     *     // ... the filter for the WalkSessions we want to count
     *   }
     * })
    **/
    count<T extends WalkSessionCountArgs>(
      args?: Subset<T, WalkSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalkSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalkSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalkSessionAggregateArgs>(args: Subset<T, WalkSessionAggregateArgs>): Prisma.PrismaPromise<GetWalkSessionAggregateType<T>>

    /**
     * Group by WalkSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalkSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalkSessionGroupByArgs['orderBy'] }
        : { orderBy?: WalkSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalkSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalkSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalkSession model
   */
  readonly fields: WalkSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalkSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalkSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    walkLog<T extends WalkSession$walkLogArgs<ExtArgs> = {}>(args?: Subset<T, WalkSession$walkLogArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WalkSession model
   */
  interface WalkSessionFieldRefs {
    readonly id: FieldRef<"WalkSession", 'Int'>
    readonly userId: FieldRef<"WalkSession", 'Int'>
    readonly routeId: FieldRef<"WalkSession", 'Int'>
    readonly startedAt: FieldRef<"WalkSession", 'DateTime'>
    readonly finishedAt: FieldRef<"WalkSession", 'DateTime'>
    readonly status: FieldRef<"WalkSession", 'SessionStatus'>
  }
    

  // Custom InputTypes
  /**
   * WalkSession findUnique
   */
  export type WalkSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WalkSession to fetch.
     */
    where: WalkSessionWhereUniqueInput
  }

  /**
   * WalkSession findUniqueOrThrow
   */
  export type WalkSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WalkSession to fetch.
     */
    where: WalkSessionWhereUniqueInput
  }

  /**
   * WalkSession findFirst
   */
  export type WalkSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WalkSession to fetch.
     */
    where?: WalkSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkSessions to fetch.
     */
    orderBy?: WalkSessionOrderByWithRelationInput | WalkSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalkSessions.
     */
    cursor?: WalkSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalkSessions.
     */
    distinct?: WalkSessionScalarFieldEnum | WalkSessionScalarFieldEnum[]
  }

  /**
   * WalkSession findFirstOrThrow
   */
  export type WalkSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WalkSession to fetch.
     */
    where?: WalkSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkSessions to fetch.
     */
    orderBy?: WalkSessionOrderByWithRelationInput | WalkSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalkSessions.
     */
    cursor?: WalkSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalkSessions.
     */
    distinct?: WalkSessionScalarFieldEnum | WalkSessionScalarFieldEnum[]
  }

  /**
   * WalkSession findMany
   */
  export type WalkSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    /**
     * Filter, which WalkSessions to fetch.
     */
    where?: WalkSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkSessions to fetch.
     */
    orderBy?: WalkSessionOrderByWithRelationInput | WalkSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalkSessions.
     */
    cursor?: WalkSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkSessions.
     */
    skip?: number
    distinct?: WalkSessionScalarFieldEnum | WalkSessionScalarFieldEnum[]
  }

  /**
   * WalkSession create
   */
  export type WalkSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WalkSession.
     */
    data: XOR<WalkSessionCreateInput, WalkSessionUncheckedCreateInput>
  }

  /**
   * WalkSession createMany
   */
  export type WalkSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalkSessions.
     */
    data: WalkSessionCreateManyInput | WalkSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalkSession createManyAndReturn
   */
  export type WalkSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * The data used to create many WalkSessions.
     */
    data: WalkSessionCreateManyInput | WalkSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalkSession update
   */
  export type WalkSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WalkSession.
     */
    data: XOR<WalkSessionUpdateInput, WalkSessionUncheckedUpdateInput>
    /**
     * Choose, which WalkSession to update.
     */
    where: WalkSessionWhereUniqueInput
  }

  /**
   * WalkSession updateMany
   */
  export type WalkSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalkSessions.
     */
    data: XOR<WalkSessionUpdateManyMutationInput, WalkSessionUncheckedUpdateManyInput>
    /**
     * Filter which WalkSessions to update
     */
    where?: WalkSessionWhereInput
    /**
     * Limit how many WalkSessions to update.
     */
    limit?: number
  }

  /**
   * WalkSession updateManyAndReturn
   */
  export type WalkSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * The data used to update WalkSessions.
     */
    data: XOR<WalkSessionUpdateManyMutationInput, WalkSessionUncheckedUpdateManyInput>
    /**
     * Filter which WalkSessions to update
     */
    where?: WalkSessionWhereInput
    /**
     * Limit how many WalkSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalkSession upsert
   */
  export type WalkSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WalkSession to update in case it exists.
     */
    where: WalkSessionWhereUniqueInput
    /**
     * In case the WalkSession found by the `where` argument doesn't exist, create a new WalkSession with this data.
     */
    create: XOR<WalkSessionCreateInput, WalkSessionUncheckedCreateInput>
    /**
     * In case the WalkSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalkSessionUpdateInput, WalkSessionUncheckedUpdateInput>
  }

  /**
   * WalkSession delete
   */
  export type WalkSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
    /**
     * Filter which WalkSession to delete.
     */
    where: WalkSessionWhereUniqueInput
  }

  /**
   * WalkSession deleteMany
   */
  export type WalkSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalkSessions to delete
     */
    where?: WalkSessionWhereInput
    /**
     * Limit how many WalkSessions to delete.
     */
    limit?: number
  }

  /**
   * WalkSession.walkLog
   */
  export type WalkSession$walkLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    where?: WalkLogWhereInput
  }

  /**
   * WalkSession without action
   */
  export type WalkSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkSession
     */
    select?: WalkSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkSession
     */
    omit?: WalkSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkSessionInclude<ExtArgs> | null
  }


  /**
   * Model WalkLog
   */

  export type AggregateWalkLog = {
    _count: WalkLogCountAggregateOutputType | null
    _avg: WalkLogAvgAggregateOutputType | null
    _sum: WalkLogSumAggregateOutputType | null
    _min: WalkLogMinAggregateOutputType | null
    _max: WalkLogMaxAggregateOutputType | null
  }

  export type WalkLogAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
    distance: number | null
  }

  export type WalkLogSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
    distance: number | null
  }

  export type WalkLogMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    distance: number | null
    walkedAt: Date | null
  }

  export type WalkLogMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    distance: number | null
    walkedAt: Date | null
  }

  export type WalkLogCountAggregateOutputType = {
    id: number
    sessionId: number
    distance: number
    walkedAt: number
    _all: number
  }


  export type WalkLogAvgAggregateInputType = {
    id?: true
    sessionId?: true
    distance?: true
  }

  export type WalkLogSumAggregateInputType = {
    id?: true
    sessionId?: true
    distance?: true
  }

  export type WalkLogMinAggregateInputType = {
    id?: true
    sessionId?: true
    distance?: true
    walkedAt?: true
  }

  export type WalkLogMaxAggregateInputType = {
    id?: true
    sessionId?: true
    distance?: true
    walkedAt?: true
  }

  export type WalkLogCountAggregateInputType = {
    id?: true
    sessionId?: true
    distance?: true
    walkedAt?: true
    _all?: true
  }

  export type WalkLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalkLog to aggregate.
     */
    where?: WalkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkLogs to fetch.
     */
    orderBy?: WalkLogOrderByWithRelationInput | WalkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalkLogs
    **/
    _count?: true | WalkLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalkLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalkLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalkLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalkLogMaxAggregateInputType
  }

  export type GetWalkLogAggregateType<T extends WalkLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWalkLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalkLog[P]>
      : GetScalarType<T[P], AggregateWalkLog[P]>
  }




  export type WalkLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalkLogWhereInput
    orderBy?: WalkLogOrderByWithAggregationInput | WalkLogOrderByWithAggregationInput[]
    by: WalkLogScalarFieldEnum[] | WalkLogScalarFieldEnum
    having?: WalkLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalkLogCountAggregateInputType | true
    _avg?: WalkLogAvgAggregateInputType
    _sum?: WalkLogSumAggregateInputType
    _min?: WalkLogMinAggregateInputType
    _max?: WalkLogMaxAggregateInputType
  }

  export type WalkLogGroupByOutputType = {
    id: number
    sessionId: number
    distance: number | null
    walkedAt: Date
    _count: WalkLogCountAggregateOutputType | null
    _avg: WalkLogAvgAggregateOutputType | null
    _sum: WalkLogSumAggregateOutputType | null
    _min: WalkLogMinAggregateOutputType | null
    _max: WalkLogMaxAggregateOutputType | null
  }

  type GetWalkLogGroupByPayload<T extends WalkLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalkLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalkLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalkLogGroupByOutputType[P]>
            : GetScalarType<T[P], WalkLogGroupByOutputType[P]>
        }
      >
    >


  export type WalkLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    distance?: boolean
    walkedAt?: boolean
    session?: boolean | WalkSessionDefaultArgs<ExtArgs>
    respondedSignals?: boolean | WalkLog$respondedSignalsArgs<ExtArgs>
    _count?: boolean | WalkLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walkLog"]>

  export type WalkLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    distance?: boolean
    walkedAt?: boolean
    session?: boolean | WalkSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walkLog"]>

  export type WalkLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    distance?: boolean
    walkedAt?: boolean
    session?: boolean | WalkSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walkLog"]>

  export type WalkLogSelectScalar = {
    id?: boolean
    sessionId?: boolean
    distance?: boolean
    walkedAt?: boolean
  }

  export type WalkLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "distance" | "walkedAt", ExtArgs["result"]["walkLog"]>
  export type WalkLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WalkSessionDefaultArgs<ExtArgs>
    respondedSignals?: boolean | WalkLog$respondedSignalsArgs<ExtArgs>
    _count?: boolean | WalkLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WalkLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WalkSessionDefaultArgs<ExtArgs>
  }
  export type WalkLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WalkSessionDefaultArgs<ExtArgs>
  }

  export type $WalkLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalkLog"
    objects: {
      session: Prisma.$WalkSessionPayload<ExtArgs>
      respondedSignals: Prisma.$RespondedSignalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: number
      distance: number | null
      walkedAt: Date
    }, ExtArgs["result"]["walkLog"]>
    composites: {}
  }

  type WalkLogGetPayload<S extends boolean | null | undefined | WalkLogDefaultArgs> = $Result.GetResult<Prisma.$WalkLogPayload, S>

  type WalkLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalkLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalkLogCountAggregateInputType | true
    }

  export interface WalkLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalkLog'], meta: { name: 'WalkLog' } }
    /**
     * Find zero or one WalkLog that matches the filter.
     * @param {WalkLogFindUniqueArgs} args - Arguments to find a WalkLog
     * @example
     * // Get one WalkLog
     * const walkLog = await prisma.walkLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalkLogFindUniqueArgs>(args: SelectSubset<T, WalkLogFindUniqueArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalkLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalkLogFindUniqueOrThrowArgs} args - Arguments to find a WalkLog
     * @example
     * // Get one WalkLog
     * const walkLog = await prisma.walkLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalkLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WalkLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalkLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkLogFindFirstArgs} args - Arguments to find a WalkLog
     * @example
     * // Get one WalkLog
     * const walkLog = await prisma.walkLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalkLogFindFirstArgs>(args?: SelectSubset<T, WalkLogFindFirstArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalkLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkLogFindFirstOrThrowArgs} args - Arguments to find a WalkLog
     * @example
     * // Get one WalkLog
     * const walkLog = await prisma.walkLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalkLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WalkLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalkLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalkLogs
     * const walkLogs = await prisma.walkLog.findMany()
     * 
     * // Get first 10 WalkLogs
     * const walkLogs = await prisma.walkLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walkLogWithIdOnly = await prisma.walkLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalkLogFindManyArgs>(args?: SelectSubset<T, WalkLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalkLog.
     * @param {WalkLogCreateArgs} args - Arguments to create a WalkLog.
     * @example
     * // Create one WalkLog
     * const WalkLog = await prisma.walkLog.create({
     *   data: {
     *     // ... data to create a WalkLog
     *   }
     * })
     * 
     */
    create<T extends WalkLogCreateArgs>(args: SelectSubset<T, WalkLogCreateArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalkLogs.
     * @param {WalkLogCreateManyArgs} args - Arguments to create many WalkLogs.
     * @example
     * // Create many WalkLogs
     * const walkLog = await prisma.walkLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalkLogCreateManyArgs>(args?: SelectSubset<T, WalkLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalkLogs and returns the data saved in the database.
     * @param {WalkLogCreateManyAndReturnArgs} args - Arguments to create many WalkLogs.
     * @example
     * // Create many WalkLogs
     * const walkLog = await prisma.walkLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalkLogs and only return the `id`
     * const walkLogWithIdOnly = await prisma.walkLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalkLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WalkLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalkLog.
     * @param {WalkLogDeleteArgs} args - Arguments to delete one WalkLog.
     * @example
     * // Delete one WalkLog
     * const WalkLog = await prisma.walkLog.delete({
     *   where: {
     *     // ... filter to delete one WalkLog
     *   }
     * })
     * 
     */
    delete<T extends WalkLogDeleteArgs>(args: SelectSubset<T, WalkLogDeleteArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalkLog.
     * @param {WalkLogUpdateArgs} args - Arguments to update one WalkLog.
     * @example
     * // Update one WalkLog
     * const walkLog = await prisma.walkLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalkLogUpdateArgs>(args: SelectSubset<T, WalkLogUpdateArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalkLogs.
     * @param {WalkLogDeleteManyArgs} args - Arguments to filter WalkLogs to delete.
     * @example
     * // Delete a few WalkLogs
     * const { count } = await prisma.walkLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalkLogDeleteManyArgs>(args?: SelectSubset<T, WalkLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalkLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalkLogs
     * const walkLog = await prisma.walkLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalkLogUpdateManyArgs>(args: SelectSubset<T, WalkLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalkLogs and returns the data updated in the database.
     * @param {WalkLogUpdateManyAndReturnArgs} args - Arguments to update many WalkLogs.
     * @example
     * // Update many WalkLogs
     * const walkLog = await prisma.walkLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalkLogs and only return the `id`
     * const walkLogWithIdOnly = await prisma.walkLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalkLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WalkLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalkLog.
     * @param {WalkLogUpsertArgs} args - Arguments to update or create a WalkLog.
     * @example
     * // Update or create a WalkLog
     * const walkLog = await prisma.walkLog.upsert({
     *   create: {
     *     // ... data to create a WalkLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalkLog we want to update
     *   }
     * })
     */
    upsert<T extends WalkLogUpsertArgs>(args: SelectSubset<T, WalkLogUpsertArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalkLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkLogCountArgs} args - Arguments to filter WalkLogs to count.
     * @example
     * // Count the number of WalkLogs
     * const count = await prisma.walkLog.count({
     *   where: {
     *     // ... the filter for the WalkLogs we want to count
     *   }
     * })
    **/
    count<T extends WalkLogCountArgs>(
      args?: Subset<T, WalkLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalkLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalkLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalkLogAggregateArgs>(args: Subset<T, WalkLogAggregateArgs>): Prisma.PrismaPromise<GetWalkLogAggregateType<T>>

    /**
     * Group by WalkLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalkLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalkLogGroupByArgs['orderBy'] }
        : { orderBy?: WalkLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalkLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalkLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalkLog model
   */
  readonly fields: WalkLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalkLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalkLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends WalkSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalkSessionDefaultArgs<ExtArgs>>): Prisma__WalkSessionClient<$Result.GetResult<Prisma.$WalkSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    respondedSignals<T extends WalkLog$respondedSignalsArgs<ExtArgs> = {}>(args?: Subset<T, WalkLog$respondedSignalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WalkLog model
   */
  interface WalkLogFieldRefs {
    readonly id: FieldRef<"WalkLog", 'Int'>
    readonly sessionId: FieldRef<"WalkLog", 'Int'>
    readonly distance: FieldRef<"WalkLog", 'Float'>
    readonly walkedAt: FieldRef<"WalkLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalkLog findUnique
   */
  export type WalkLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    /**
     * Filter, which WalkLog to fetch.
     */
    where: WalkLogWhereUniqueInput
  }

  /**
   * WalkLog findUniqueOrThrow
   */
  export type WalkLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    /**
     * Filter, which WalkLog to fetch.
     */
    where: WalkLogWhereUniqueInput
  }

  /**
   * WalkLog findFirst
   */
  export type WalkLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    /**
     * Filter, which WalkLog to fetch.
     */
    where?: WalkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkLogs to fetch.
     */
    orderBy?: WalkLogOrderByWithRelationInput | WalkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalkLogs.
     */
    cursor?: WalkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalkLogs.
     */
    distinct?: WalkLogScalarFieldEnum | WalkLogScalarFieldEnum[]
  }

  /**
   * WalkLog findFirstOrThrow
   */
  export type WalkLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    /**
     * Filter, which WalkLog to fetch.
     */
    where?: WalkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkLogs to fetch.
     */
    orderBy?: WalkLogOrderByWithRelationInput | WalkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalkLogs.
     */
    cursor?: WalkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalkLogs.
     */
    distinct?: WalkLogScalarFieldEnum | WalkLogScalarFieldEnum[]
  }

  /**
   * WalkLog findMany
   */
  export type WalkLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    /**
     * Filter, which WalkLogs to fetch.
     */
    where?: WalkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkLogs to fetch.
     */
    orderBy?: WalkLogOrderByWithRelationInput | WalkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalkLogs.
     */
    cursor?: WalkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkLogs.
     */
    skip?: number
    distinct?: WalkLogScalarFieldEnum | WalkLogScalarFieldEnum[]
  }

  /**
   * WalkLog create
   */
  export type WalkLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WalkLog.
     */
    data: XOR<WalkLogCreateInput, WalkLogUncheckedCreateInput>
  }

  /**
   * WalkLog createMany
   */
  export type WalkLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalkLogs.
     */
    data: WalkLogCreateManyInput | WalkLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalkLog createManyAndReturn
   */
  export type WalkLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * The data used to create many WalkLogs.
     */
    data: WalkLogCreateManyInput | WalkLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalkLog update
   */
  export type WalkLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WalkLog.
     */
    data: XOR<WalkLogUpdateInput, WalkLogUncheckedUpdateInput>
    /**
     * Choose, which WalkLog to update.
     */
    where: WalkLogWhereUniqueInput
  }

  /**
   * WalkLog updateMany
   */
  export type WalkLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalkLogs.
     */
    data: XOR<WalkLogUpdateManyMutationInput, WalkLogUncheckedUpdateManyInput>
    /**
     * Filter which WalkLogs to update
     */
    where?: WalkLogWhereInput
    /**
     * Limit how many WalkLogs to update.
     */
    limit?: number
  }

  /**
   * WalkLog updateManyAndReturn
   */
  export type WalkLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * The data used to update WalkLogs.
     */
    data: XOR<WalkLogUpdateManyMutationInput, WalkLogUncheckedUpdateManyInput>
    /**
     * Filter which WalkLogs to update
     */
    where?: WalkLogWhereInput
    /**
     * Limit how many WalkLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalkLog upsert
   */
  export type WalkLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WalkLog to update in case it exists.
     */
    where: WalkLogWhereUniqueInput
    /**
     * In case the WalkLog found by the `where` argument doesn't exist, create a new WalkLog with this data.
     */
    create: XOR<WalkLogCreateInput, WalkLogUncheckedCreateInput>
    /**
     * In case the WalkLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalkLogUpdateInput, WalkLogUncheckedUpdateInput>
  }

  /**
   * WalkLog delete
   */
  export type WalkLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
    /**
     * Filter which WalkLog to delete.
     */
    where: WalkLogWhereUniqueInput
  }

  /**
   * WalkLog deleteMany
   */
  export type WalkLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalkLogs to delete
     */
    where?: WalkLogWhereInput
    /**
     * Limit how many WalkLogs to delete.
     */
    limit?: number
  }

  /**
   * WalkLog.respondedSignals
   */
  export type WalkLog$respondedSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    where?: RespondedSignalWhereInput
    orderBy?: RespondedSignalOrderByWithRelationInput | RespondedSignalOrderByWithRelationInput[]
    cursor?: RespondedSignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespondedSignalScalarFieldEnum | RespondedSignalScalarFieldEnum[]
  }

  /**
   * WalkLog without action
   */
  export type WalkLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkLog
     */
    select?: WalkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkLog
     */
    omit?: WalkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalkLogInclude<ExtArgs> | null
  }


  /**
   * Model RespondedSignal
   */

  export type AggregateRespondedSignal = {
    _count: RespondedSignalCountAggregateOutputType | null
    _avg: RespondedSignalAvgAggregateOutputType | null
    _sum: RespondedSignalSumAggregateOutputType | null
    _min: RespondedSignalMinAggregateOutputType | null
    _max: RespondedSignalMaxAggregateOutputType | null
  }

  export type RespondedSignalAvgAggregateOutputType = {
    id: number | null
    walkLogId: number | null
    signalId: number | null
    responseId: number | null
  }

  export type RespondedSignalSumAggregateOutputType = {
    id: number | null
    walkLogId: number | null
    signalId: number | null
    responseId: number | null
  }

  export type RespondedSignalMinAggregateOutputType = {
    id: number | null
    walkLogId: number | null
    signalId: number | null
    responseId: number | null
    respondedAt: Date | null
  }

  export type RespondedSignalMaxAggregateOutputType = {
    id: number | null
    walkLogId: number | null
    signalId: number | null
    responseId: number | null
    respondedAt: Date | null
  }

  export type RespondedSignalCountAggregateOutputType = {
    id: number
    walkLogId: number
    signalId: number
    responseId: number
    respondedAt: number
    _all: number
  }


  export type RespondedSignalAvgAggregateInputType = {
    id?: true
    walkLogId?: true
    signalId?: true
    responseId?: true
  }

  export type RespondedSignalSumAggregateInputType = {
    id?: true
    walkLogId?: true
    signalId?: true
    responseId?: true
  }

  export type RespondedSignalMinAggregateInputType = {
    id?: true
    walkLogId?: true
    signalId?: true
    responseId?: true
    respondedAt?: true
  }

  export type RespondedSignalMaxAggregateInputType = {
    id?: true
    walkLogId?: true
    signalId?: true
    responseId?: true
    respondedAt?: true
  }

  export type RespondedSignalCountAggregateInputType = {
    id?: true
    walkLogId?: true
    signalId?: true
    responseId?: true
    respondedAt?: true
    _all?: true
  }

  export type RespondedSignalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RespondedSignal to aggregate.
     */
    where?: RespondedSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespondedSignals to fetch.
     */
    orderBy?: RespondedSignalOrderByWithRelationInput | RespondedSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespondedSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespondedSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespondedSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RespondedSignals
    **/
    _count?: true | RespondedSignalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RespondedSignalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RespondedSignalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespondedSignalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespondedSignalMaxAggregateInputType
  }

  export type GetRespondedSignalAggregateType<T extends RespondedSignalAggregateArgs> = {
        [P in keyof T & keyof AggregateRespondedSignal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRespondedSignal[P]>
      : GetScalarType<T[P], AggregateRespondedSignal[P]>
  }




  export type RespondedSignalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespondedSignalWhereInput
    orderBy?: RespondedSignalOrderByWithAggregationInput | RespondedSignalOrderByWithAggregationInput[]
    by: RespondedSignalScalarFieldEnum[] | RespondedSignalScalarFieldEnum
    having?: RespondedSignalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespondedSignalCountAggregateInputType | true
    _avg?: RespondedSignalAvgAggregateInputType
    _sum?: RespondedSignalSumAggregateInputType
    _min?: RespondedSignalMinAggregateInputType
    _max?: RespondedSignalMaxAggregateInputType
  }

  export type RespondedSignalGroupByOutputType = {
    id: number
    walkLogId: number
    signalId: number
    responseId: number
    respondedAt: Date
    _count: RespondedSignalCountAggregateOutputType | null
    _avg: RespondedSignalAvgAggregateOutputType | null
    _sum: RespondedSignalSumAggregateOutputType | null
    _min: RespondedSignalMinAggregateOutputType | null
    _max: RespondedSignalMaxAggregateOutputType | null
  }

  type GetRespondedSignalGroupByPayload<T extends RespondedSignalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespondedSignalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespondedSignalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespondedSignalGroupByOutputType[P]>
            : GetScalarType<T[P], RespondedSignalGroupByOutputType[P]>
        }
      >
    >


  export type RespondedSignalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walkLogId?: boolean
    signalId?: boolean
    responseId?: boolean
    respondedAt?: boolean
    walkLog?: boolean | WalkLogDefaultArgs<ExtArgs>
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    response?: boolean | ResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respondedSignal"]>

  export type RespondedSignalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walkLogId?: boolean
    signalId?: boolean
    responseId?: boolean
    respondedAt?: boolean
    walkLog?: boolean | WalkLogDefaultArgs<ExtArgs>
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    response?: boolean | ResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respondedSignal"]>

  export type RespondedSignalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walkLogId?: boolean
    signalId?: boolean
    responseId?: boolean
    respondedAt?: boolean
    walkLog?: boolean | WalkLogDefaultArgs<ExtArgs>
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    response?: boolean | ResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respondedSignal"]>

  export type RespondedSignalSelectScalar = {
    id?: boolean
    walkLogId?: boolean
    signalId?: boolean
    responseId?: boolean
    respondedAt?: boolean
  }

  export type RespondedSignalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walkLogId" | "signalId" | "responseId" | "respondedAt", ExtArgs["result"]["respondedSignal"]>
  export type RespondedSignalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    walkLog?: boolean | WalkLogDefaultArgs<ExtArgs>
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    response?: boolean | ResponseDefaultArgs<ExtArgs>
  }
  export type RespondedSignalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    walkLog?: boolean | WalkLogDefaultArgs<ExtArgs>
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    response?: boolean | ResponseDefaultArgs<ExtArgs>
  }
  export type RespondedSignalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    walkLog?: boolean | WalkLogDefaultArgs<ExtArgs>
    signal?: boolean | SignalDefaultArgs<ExtArgs>
    response?: boolean | ResponseDefaultArgs<ExtArgs>
  }

  export type $RespondedSignalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RespondedSignal"
    objects: {
      walkLog: Prisma.$WalkLogPayload<ExtArgs>
      signal: Prisma.$SignalPayload<ExtArgs>
      response: Prisma.$ResponsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      walkLogId: number
      signalId: number
      responseId: number
      respondedAt: Date
    }, ExtArgs["result"]["respondedSignal"]>
    composites: {}
  }

  type RespondedSignalGetPayload<S extends boolean | null | undefined | RespondedSignalDefaultArgs> = $Result.GetResult<Prisma.$RespondedSignalPayload, S>

  type RespondedSignalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RespondedSignalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RespondedSignalCountAggregateInputType | true
    }

  export interface RespondedSignalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RespondedSignal'], meta: { name: 'RespondedSignal' } }
    /**
     * Find zero or one RespondedSignal that matches the filter.
     * @param {RespondedSignalFindUniqueArgs} args - Arguments to find a RespondedSignal
     * @example
     * // Get one RespondedSignal
     * const respondedSignal = await prisma.respondedSignal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RespondedSignalFindUniqueArgs>(args: SelectSubset<T, RespondedSignalFindUniqueArgs<ExtArgs>>): Prisma__RespondedSignalClient<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RespondedSignal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RespondedSignalFindUniqueOrThrowArgs} args - Arguments to find a RespondedSignal
     * @example
     * // Get one RespondedSignal
     * const respondedSignal = await prisma.respondedSignal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RespondedSignalFindUniqueOrThrowArgs>(args: SelectSubset<T, RespondedSignalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RespondedSignalClient<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RespondedSignal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespondedSignalFindFirstArgs} args - Arguments to find a RespondedSignal
     * @example
     * // Get one RespondedSignal
     * const respondedSignal = await prisma.respondedSignal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RespondedSignalFindFirstArgs>(args?: SelectSubset<T, RespondedSignalFindFirstArgs<ExtArgs>>): Prisma__RespondedSignalClient<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RespondedSignal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespondedSignalFindFirstOrThrowArgs} args - Arguments to find a RespondedSignal
     * @example
     * // Get one RespondedSignal
     * const respondedSignal = await prisma.respondedSignal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RespondedSignalFindFirstOrThrowArgs>(args?: SelectSubset<T, RespondedSignalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RespondedSignalClient<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RespondedSignals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespondedSignalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RespondedSignals
     * const respondedSignals = await prisma.respondedSignal.findMany()
     * 
     * // Get first 10 RespondedSignals
     * const respondedSignals = await prisma.respondedSignal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const respondedSignalWithIdOnly = await prisma.respondedSignal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RespondedSignalFindManyArgs>(args?: SelectSubset<T, RespondedSignalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RespondedSignal.
     * @param {RespondedSignalCreateArgs} args - Arguments to create a RespondedSignal.
     * @example
     * // Create one RespondedSignal
     * const RespondedSignal = await prisma.respondedSignal.create({
     *   data: {
     *     // ... data to create a RespondedSignal
     *   }
     * })
     * 
     */
    create<T extends RespondedSignalCreateArgs>(args: SelectSubset<T, RespondedSignalCreateArgs<ExtArgs>>): Prisma__RespondedSignalClient<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RespondedSignals.
     * @param {RespondedSignalCreateManyArgs} args - Arguments to create many RespondedSignals.
     * @example
     * // Create many RespondedSignals
     * const respondedSignal = await prisma.respondedSignal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RespondedSignalCreateManyArgs>(args?: SelectSubset<T, RespondedSignalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RespondedSignals and returns the data saved in the database.
     * @param {RespondedSignalCreateManyAndReturnArgs} args - Arguments to create many RespondedSignals.
     * @example
     * // Create many RespondedSignals
     * const respondedSignal = await prisma.respondedSignal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RespondedSignals and only return the `id`
     * const respondedSignalWithIdOnly = await prisma.respondedSignal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RespondedSignalCreateManyAndReturnArgs>(args?: SelectSubset<T, RespondedSignalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RespondedSignal.
     * @param {RespondedSignalDeleteArgs} args - Arguments to delete one RespondedSignal.
     * @example
     * // Delete one RespondedSignal
     * const RespondedSignal = await prisma.respondedSignal.delete({
     *   where: {
     *     // ... filter to delete one RespondedSignal
     *   }
     * })
     * 
     */
    delete<T extends RespondedSignalDeleteArgs>(args: SelectSubset<T, RespondedSignalDeleteArgs<ExtArgs>>): Prisma__RespondedSignalClient<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RespondedSignal.
     * @param {RespondedSignalUpdateArgs} args - Arguments to update one RespondedSignal.
     * @example
     * // Update one RespondedSignal
     * const respondedSignal = await prisma.respondedSignal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RespondedSignalUpdateArgs>(args: SelectSubset<T, RespondedSignalUpdateArgs<ExtArgs>>): Prisma__RespondedSignalClient<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RespondedSignals.
     * @param {RespondedSignalDeleteManyArgs} args - Arguments to filter RespondedSignals to delete.
     * @example
     * // Delete a few RespondedSignals
     * const { count } = await prisma.respondedSignal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RespondedSignalDeleteManyArgs>(args?: SelectSubset<T, RespondedSignalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RespondedSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespondedSignalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RespondedSignals
     * const respondedSignal = await prisma.respondedSignal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RespondedSignalUpdateManyArgs>(args: SelectSubset<T, RespondedSignalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RespondedSignals and returns the data updated in the database.
     * @param {RespondedSignalUpdateManyAndReturnArgs} args - Arguments to update many RespondedSignals.
     * @example
     * // Update many RespondedSignals
     * const respondedSignal = await prisma.respondedSignal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RespondedSignals and only return the `id`
     * const respondedSignalWithIdOnly = await prisma.respondedSignal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RespondedSignalUpdateManyAndReturnArgs>(args: SelectSubset<T, RespondedSignalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RespondedSignal.
     * @param {RespondedSignalUpsertArgs} args - Arguments to update or create a RespondedSignal.
     * @example
     * // Update or create a RespondedSignal
     * const respondedSignal = await prisma.respondedSignal.upsert({
     *   create: {
     *     // ... data to create a RespondedSignal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RespondedSignal we want to update
     *   }
     * })
     */
    upsert<T extends RespondedSignalUpsertArgs>(args: SelectSubset<T, RespondedSignalUpsertArgs<ExtArgs>>): Prisma__RespondedSignalClient<$Result.GetResult<Prisma.$RespondedSignalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RespondedSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespondedSignalCountArgs} args - Arguments to filter RespondedSignals to count.
     * @example
     * // Count the number of RespondedSignals
     * const count = await prisma.respondedSignal.count({
     *   where: {
     *     // ... the filter for the RespondedSignals we want to count
     *   }
     * })
    **/
    count<T extends RespondedSignalCountArgs>(
      args?: Subset<T, RespondedSignalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespondedSignalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RespondedSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespondedSignalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RespondedSignalAggregateArgs>(args: Subset<T, RespondedSignalAggregateArgs>): Prisma.PrismaPromise<GetRespondedSignalAggregateType<T>>

    /**
     * Group by RespondedSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespondedSignalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RespondedSignalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespondedSignalGroupByArgs['orderBy'] }
        : { orderBy?: RespondedSignalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RespondedSignalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespondedSignalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RespondedSignal model
   */
  readonly fields: RespondedSignalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RespondedSignal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespondedSignalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    walkLog<T extends WalkLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalkLogDefaultArgs<ExtArgs>>): Prisma__WalkLogClient<$Result.GetResult<Prisma.$WalkLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    signal<T extends SignalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SignalDefaultArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    response<T extends ResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResponseDefaultArgs<ExtArgs>>): Prisma__ResponseClient<$Result.GetResult<Prisma.$ResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RespondedSignal model
   */
  interface RespondedSignalFieldRefs {
    readonly id: FieldRef<"RespondedSignal", 'Int'>
    readonly walkLogId: FieldRef<"RespondedSignal", 'Int'>
    readonly signalId: FieldRef<"RespondedSignal", 'Int'>
    readonly responseId: FieldRef<"RespondedSignal", 'Int'>
    readonly respondedAt: FieldRef<"RespondedSignal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RespondedSignal findUnique
   */
  export type RespondedSignalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    /**
     * Filter, which RespondedSignal to fetch.
     */
    where: RespondedSignalWhereUniqueInput
  }

  /**
   * RespondedSignal findUniqueOrThrow
   */
  export type RespondedSignalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    /**
     * Filter, which RespondedSignal to fetch.
     */
    where: RespondedSignalWhereUniqueInput
  }

  /**
   * RespondedSignal findFirst
   */
  export type RespondedSignalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    /**
     * Filter, which RespondedSignal to fetch.
     */
    where?: RespondedSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespondedSignals to fetch.
     */
    orderBy?: RespondedSignalOrderByWithRelationInput | RespondedSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RespondedSignals.
     */
    cursor?: RespondedSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespondedSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespondedSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RespondedSignals.
     */
    distinct?: RespondedSignalScalarFieldEnum | RespondedSignalScalarFieldEnum[]
  }

  /**
   * RespondedSignal findFirstOrThrow
   */
  export type RespondedSignalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    /**
     * Filter, which RespondedSignal to fetch.
     */
    where?: RespondedSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespondedSignals to fetch.
     */
    orderBy?: RespondedSignalOrderByWithRelationInput | RespondedSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RespondedSignals.
     */
    cursor?: RespondedSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespondedSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespondedSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RespondedSignals.
     */
    distinct?: RespondedSignalScalarFieldEnum | RespondedSignalScalarFieldEnum[]
  }

  /**
   * RespondedSignal findMany
   */
  export type RespondedSignalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    /**
     * Filter, which RespondedSignals to fetch.
     */
    where?: RespondedSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespondedSignals to fetch.
     */
    orderBy?: RespondedSignalOrderByWithRelationInput | RespondedSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RespondedSignals.
     */
    cursor?: RespondedSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespondedSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespondedSignals.
     */
    skip?: number
    distinct?: RespondedSignalScalarFieldEnum | RespondedSignalScalarFieldEnum[]
  }

  /**
   * RespondedSignal create
   */
  export type RespondedSignalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    /**
     * The data needed to create a RespondedSignal.
     */
    data: XOR<RespondedSignalCreateInput, RespondedSignalUncheckedCreateInput>
  }

  /**
   * RespondedSignal createMany
   */
  export type RespondedSignalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RespondedSignals.
     */
    data: RespondedSignalCreateManyInput | RespondedSignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RespondedSignal createManyAndReturn
   */
  export type RespondedSignalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * The data used to create many RespondedSignals.
     */
    data: RespondedSignalCreateManyInput | RespondedSignalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RespondedSignal update
   */
  export type RespondedSignalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    /**
     * The data needed to update a RespondedSignal.
     */
    data: XOR<RespondedSignalUpdateInput, RespondedSignalUncheckedUpdateInput>
    /**
     * Choose, which RespondedSignal to update.
     */
    where: RespondedSignalWhereUniqueInput
  }

  /**
   * RespondedSignal updateMany
   */
  export type RespondedSignalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RespondedSignals.
     */
    data: XOR<RespondedSignalUpdateManyMutationInput, RespondedSignalUncheckedUpdateManyInput>
    /**
     * Filter which RespondedSignals to update
     */
    where?: RespondedSignalWhereInput
    /**
     * Limit how many RespondedSignals to update.
     */
    limit?: number
  }

  /**
   * RespondedSignal updateManyAndReturn
   */
  export type RespondedSignalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * The data used to update RespondedSignals.
     */
    data: XOR<RespondedSignalUpdateManyMutationInput, RespondedSignalUncheckedUpdateManyInput>
    /**
     * Filter which RespondedSignals to update
     */
    where?: RespondedSignalWhereInput
    /**
     * Limit how many RespondedSignals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RespondedSignal upsert
   */
  export type RespondedSignalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    /**
     * The filter to search for the RespondedSignal to update in case it exists.
     */
    where: RespondedSignalWhereUniqueInput
    /**
     * In case the RespondedSignal found by the `where` argument doesn't exist, create a new RespondedSignal with this data.
     */
    create: XOR<RespondedSignalCreateInput, RespondedSignalUncheckedCreateInput>
    /**
     * In case the RespondedSignal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespondedSignalUpdateInput, RespondedSignalUncheckedUpdateInput>
  }

  /**
   * RespondedSignal delete
   */
  export type RespondedSignalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
    /**
     * Filter which RespondedSignal to delete.
     */
    where: RespondedSignalWhereUniqueInput
  }

  /**
   * RespondedSignal deleteMany
   */
  export type RespondedSignalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RespondedSignals to delete
     */
    where?: RespondedSignalWhereInput
    /**
     * Limit how many RespondedSignals to delete.
     */
    limit?: number
  }

  /**
   * RespondedSignal without action
   */
  export type RespondedSignalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespondedSignal
     */
    select?: RespondedSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RespondedSignal
     */
    omit?: RespondedSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespondedSignalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const SignalCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SignalCategoryScalarFieldEnum = (typeof SignalCategoryScalarFieldEnum)[keyof typeof SignalCategoryScalarFieldEnum]


  export const SignalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    title: 'title',
    description: 'description',
    lat: 'lat',
    lng: 'lng',
    createdAt: 'createdAt',
    timeLimit: 'timeLimit',
    status: 'status',
    selectedUserId: 'selectedUserId',
    expiresAt: 'expiresAt'
  };

  export type SignalScalarFieldEnum = (typeof SignalScalarFieldEnum)[keyof typeof SignalScalarFieldEnum]


  export const ResponseScalarFieldEnum: {
    id: 'id',
    signalId: 'signalId',
    userId: 'userId',
    message: 'message',
    respondedAt: 'respondedAt',
    isRead: 'isRead'
  };

  export type ResponseScalarFieldEnum = (typeof ResponseScalarFieldEnum)[keyof typeof ResponseScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    distance: 'distance',
    themeId: 'themeId',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const RoutePointScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    lat: 'lat',
    lng: 'lng',
    order: 'order'
  };

  export type RoutePointScalarFieldEnum = (typeof RoutePointScalarFieldEnum)[keyof typeof RoutePointScalarFieldEnum]


  export const WalkSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    routeId: 'routeId',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    status: 'status'
  };

  export type WalkSessionScalarFieldEnum = (typeof WalkSessionScalarFieldEnum)[keyof typeof WalkSessionScalarFieldEnum]


  export const WalkLogScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    distance: 'distance',
    walkedAt: 'walkedAt'
  };

  export type WalkLogScalarFieldEnum = (typeof WalkLogScalarFieldEnum)[keyof typeof WalkLogScalarFieldEnum]


  export const RespondedSignalScalarFieldEnum: {
    id: 'id',
    walkLogId: 'walkLogId',
    signalId: 'signalId',
    responseId: 'responseId',
    respondedAt: 'respondedAt'
  };

  export type RespondedSignalScalarFieldEnum = (typeof RespondedSignalScalarFieldEnum)[keyof typeof RespondedSignalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SignalStatus'
   */
  export type EnumSignalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignalStatus'>
    


  /**
   * Reference to a field of type 'SignalStatus[]'
   */
  export type ListEnumSignalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignalStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    routes?: RouteListRelationFilter
    signals?: SignalListRelationFilter
    selectedSignals?: SignalListRelationFilter
    responses?: ResponseListRelationFilter
    sessions?: WalkSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    routes?: RouteOrderByRelationAggregateInput
    signals?: SignalOrderByRelationAggregateInput
    selectedSignals?: SignalOrderByRelationAggregateInput
    responses?: ResponseOrderByRelationAggregateInput
    sessions?: WalkSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    routes?: RouteListRelationFilter
    signals?: SignalListRelationFilter
    selectedSignals?: SignalListRelationFilter
    responses?: ResponseListRelationFilter
    sessions?: WalkSessionListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    id?: IntFilter<"Theme"> | number
    name?: StringFilter<"Theme"> | string
    routes?: RouteListRelationFilter
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    routes?: RouteOrderByRelationAggregateInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    name?: StringFilter<"Theme"> | string
    routes?: RouteListRelationFilter
  }, "id">

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _avg?: ThemeAvgOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
    _sum?: ThemeSumOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Theme"> | number
    name?: StringWithAggregatesFilter<"Theme"> | string
  }

  export type SignalCategoryWhereInput = {
    AND?: SignalCategoryWhereInput | SignalCategoryWhereInput[]
    OR?: SignalCategoryWhereInput[]
    NOT?: SignalCategoryWhereInput | SignalCategoryWhereInput[]
    id?: IntFilter<"SignalCategory"> | number
    name?: StringFilter<"SignalCategory"> | string
    signals?: SignalListRelationFilter
  }

  export type SignalCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    signals?: SignalOrderByRelationAggregateInput
  }

  export type SignalCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SignalCategoryWhereInput | SignalCategoryWhereInput[]
    OR?: SignalCategoryWhereInput[]
    NOT?: SignalCategoryWhereInput | SignalCategoryWhereInput[]
    name?: StringFilter<"SignalCategory"> | string
    signals?: SignalListRelationFilter
  }, "id">

  export type SignalCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SignalCategoryCountOrderByAggregateInput
    _avg?: SignalCategoryAvgOrderByAggregateInput
    _max?: SignalCategoryMaxOrderByAggregateInput
    _min?: SignalCategoryMinOrderByAggregateInput
    _sum?: SignalCategorySumOrderByAggregateInput
  }

  export type SignalCategoryScalarWhereWithAggregatesInput = {
    AND?: SignalCategoryScalarWhereWithAggregatesInput | SignalCategoryScalarWhereWithAggregatesInput[]
    OR?: SignalCategoryScalarWhereWithAggregatesInput[]
    NOT?: SignalCategoryScalarWhereWithAggregatesInput | SignalCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SignalCategory"> | number
    name?: StringWithAggregatesFilter<"SignalCategory"> | string
  }

  export type SignalWhereInput = {
    AND?: SignalWhereInput | SignalWhereInput[]
    OR?: SignalWhereInput[]
    NOT?: SignalWhereInput | SignalWhereInput[]
    id?: IntFilter<"Signal"> | number
    userId?: IntFilter<"Signal"> | number
    categoryId?: IntFilter<"Signal"> | number
    title?: StringFilter<"Signal"> | string
    description?: StringFilter<"Signal"> | string
    lat?: FloatFilter<"Signal"> | number
    lng?: FloatFilter<"Signal"> | number
    createdAt?: DateTimeFilter<"Signal"> | Date | string
    timeLimit?: IntFilter<"Signal"> | number
    status?: EnumSignalStatusFilter<"Signal"> | $Enums.SignalStatus
    selectedUserId?: IntNullableFilter<"Signal"> | number | null
    expiresAt?: DateTimeFilter<"Signal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    selectedUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<SignalCategoryScalarRelationFilter, SignalCategoryWhereInput>
    responses?: ResponseListRelationFilter
    respondedSignals?: RespondedSignalListRelationFilter
  }

  export type SignalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    timeLimit?: SortOrder
    status?: SortOrder
    selectedUserId?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
    selectedUser?: UserOrderByWithRelationInput
    category?: SignalCategoryOrderByWithRelationInput
    responses?: ResponseOrderByRelationAggregateInput
    respondedSignals?: RespondedSignalOrderByRelationAggregateInput
  }

  export type SignalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SignalWhereInput | SignalWhereInput[]
    OR?: SignalWhereInput[]
    NOT?: SignalWhereInput | SignalWhereInput[]
    userId?: IntFilter<"Signal"> | number
    categoryId?: IntFilter<"Signal"> | number
    title?: StringFilter<"Signal"> | string
    description?: StringFilter<"Signal"> | string
    lat?: FloatFilter<"Signal"> | number
    lng?: FloatFilter<"Signal"> | number
    createdAt?: DateTimeFilter<"Signal"> | Date | string
    timeLimit?: IntFilter<"Signal"> | number
    status?: EnumSignalStatusFilter<"Signal"> | $Enums.SignalStatus
    selectedUserId?: IntNullableFilter<"Signal"> | number | null
    expiresAt?: DateTimeFilter<"Signal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    selectedUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<SignalCategoryScalarRelationFilter, SignalCategoryWhereInput>
    responses?: ResponseListRelationFilter
    respondedSignals?: RespondedSignalListRelationFilter
  }, "id">

  export type SignalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    timeLimit?: SortOrder
    status?: SortOrder
    selectedUserId?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    _count?: SignalCountOrderByAggregateInput
    _avg?: SignalAvgOrderByAggregateInput
    _max?: SignalMaxOrderByAggregateInput
    _min?: SignalMinOrderByAggregateInput
    _sum?: SignalSumOrderByAggregateInput
  }

  export type SignalScalarWhereWithAggregatesInput = {
    AND?: SignalScalarWhereWithAggregatesInput | SignalScalarWhereWithAggregatesInput[]
    OR?: SignalScalarWhereWithAggregatesInput[]
    NOT?: SignalScalarWhereWithAggregatesInput | SignalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Signal"> | number
    userId?: IntWithAggregatesFilter<"Signal"> | number
    categoryId?: IntWithAggregatesFilter<"Signal"> | number
    title?: StringWithAggregatesFilter<"Signal"> | string
    description?: StringWithAggregatesFilter<"Signal"> | string
    lat?: FloatWithAggregatesFilter<"Signal"> | number
    lng?: FloatWithAggregatesFilter<"Signal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Signal"> | Date | string
    timeLimit?: IntWithAggregatesFilter<"Signal"> | number
    status?: EnumSignalStatusWithAggregatesFilter<"Signal"> | $Enums.SignalStatus
    selectedUserId?: IntNullableWithAggregatesFilter<"Signal"> | number | null
    expiresAt?: DateTimeWithAggregatesFilter<"Signal"> | Date | string
  }

  export type ResponseWhereInput = {
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    id?: IntFilter<"Response"> | number
    signalId?: IntFilter<"Response"> | number
    userId?: IntFilter<"Response"> | number
    message?: StringFilter<"Response"> | string
    respondedAt?: DateTimeFilter<"Response"> | Date | string
    isRead?: BoolFilter<"Response"> | boolean
    signal?: XOR<SignalScalarRelationFilter, SignalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    respondedSignals?: RespondedSignalListRelationFilter
  }

  export type ResponseOrderByWithRelationInput = {
    id?: SortOrder
    signalId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    respondedAt?: SortOrder
    isRead?: SortOrder
    signal?: SignalOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    respondedSignals?: RespondedSignalOrderByRelationAggregateInput
  }

  export type ResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResponseWhereInput | ResponseWhereInput[]
    OR?: ResponseWhereInput[]
    NOT?: ResponseWhereInput | ResponseWhereInput[]
    signalId?: IntFilter<"Response"> | number
    userId?: IntFilter<"Response"> | number
    message?: StringFilter<"Response"> | string
    respondedAt?: DateTimeFilter<"Response"> | Date | string
    isRead?: BoolFilter<"Response"> | boolean
    signal?: XOR<SignalScalarRelationFilter, SignalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    respondedSignals?: RespondedSignalListRelationFilter
  }, "id">

  export type ResponseOrderByWithAggregationInput = {
    id?: SortOrder
    signalId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    respondedAt?: SortOrder
    isRead?: SortOrder
    _count?: ResponseCountOrderByAggregateInput
    _avg?: ResponseAvgOrderByAggregateInput
    _max?: ResponseMaxOrderByAggregateInput
    _min?: ResponseMinOrderByAggregateInput
    _sum?: ResponseSumOrderByAggregateInput
  }

  export type ResponseScalarWhereWithAggregatesInput = {
    AND?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    OR?: ResponseScalarWhereWithAggregatesInput[]
    NOT?: ResponseScalarWhereWithAggregatesInput | ResponseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Response"> | number
    signalId?: IntWithAggregatesFilter<"Response"> | number
    userId?: IntWithAggregatesFilter<"Response"> | number
    message?: StringWithAggregatesFilter<"Response"> | string
    respondedAt?: DateTimeWithAggregatesFilter<"Response"> | Date | string
    isRead?: BoolWithAggregatesFilter<"Response"> | boolean
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: IntFilter<"Route"> | number
    userId?: IntFilter<"Route"> | number
    distance?: FloatNullableFilter<"Route"> | number | null
    themeId?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    completedAt?: DateTimeNullableFilter<"Route"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, ThemeWhereInput>
    points?: RoutePointListRelationFilter
    sessions?: WalkSessionListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    distance?: SortOrderInput | SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    theme?: ThemeOrderByWithRelationInput
    points?: RoutePointOrderByRelationAggregateInput
    sessions?: WalkSessionOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    userId?: IntFilter<"Route"> | number
    distance?: FloatNullableFilter<"Route"> | number | null
    themeId?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    completedAt?: DateTimeNullableFilter<"Route"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, ThemeWhereInput>
    points?: RoutePointListRelationFilter
    sessions?: WalkSessionListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    distance?: SortOrderInput | SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Route"> | number
    userId?: IntWithAggregatesFilter<"Route"> | number
    distance?: FloatNullableWithAggregatesFilter<"Route"> | number | null
    themeId?: IntWithAggregatesFilter<"Route"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Route"> | Date | string | null
  }

  export type RoutePointWhereInput = {
    AND?: RoutePointWhereInput | RoutePointWhereInput[]
    OR?: RoutePointWhereInput[]
    NOT?: RoutePointWhereInput | RoutePointWhereInput[]
    id?: IntFilter<"RoutePoint"> | number
    routeId?: IntFilter<"RoutePoint"> | number
    lat?: FloatFilter<"RoutePoint"> | number
    lng?: FloatFilter<"RoutePoint"> | number
    order?: IntFilter<"RoutePoint"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }

  export type RoutePointOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
    route?: RouteOrderByWithRelationInput
  }

  export type RoutePointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoutePointWhereInput | RoutePointWhereInput[]
    OR?: RoutePointWhereInput[]
    NOT?: RoutePointWhereInput | RoutePointWhereInput[]
    routeId?: IntFilter<"RoutePoint"> | number
    lat?: FloatFilter<"RoutePoint"> | number
    lng?: FloatFilter<"RoutePoint"> | number
    order?: IntFilter<"RoutePoint"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }, "id">

  export type RoutePointOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
    _count?: RoutePointCountOrderByAggregateInput
    _avg?: RoutePointAvgOrderByAggregateInput
    _max?: RoutePointMaxOrderByAggregateInput
    _min?: RoutePointMinOrderByAggregateInput
    _sum?: RoutePointSumOrderByAggregateInput
  }

  export type RoutePointScalarWhereWithAggregatesInput = {
    AND?: RoutePointScalarWhereWithAggregatesInput | RoutePointScalarWhereWithAggregatesInput[]
    OR?: RoutePointScalarWhereWithAggregatesInput[]
    NOT?: RoutePointScalarWhereWithAggregatesInput | RoutePointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoutePoint"> | number
    routeId?: IntWithAggregatesFilter<"RoutePoint"> | number
    lat?: FloatWithAggregatesFilter<"RoutePoint"> | number
    lng?: FloatWithAggregatesFilter<"RoutePoint"> | number
    order?: IntWithAggregatesFilter<"RoutePoint"> | number
  }

  export type WalkSessionWhereInput = {
    AND?: WalkSessionWhereInput | WalkSessionWhereInput[]
    OR?: WalkSessionWhereInput[]
    NOT?: WalkSessionWhereInput | WalkSessionWhereInput[]
    id?: IntFilter<"WalkSession"> | number
    userId?: IntFilter<"WalkSession"> | number
    routeId?: IntFilter<"WalkSession"> | number
    startedAt?: DateTimeFilter<"WalkSession"> | Date | string
    finishedAt?: DateTimeNullableFilter<"WalkSession"> | Date | string | null
    status?: EnumSessionStatusFilter<"WalkSession"> | $Enums.SessionStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    walkLog?: XOR<WalkLogNullableScalarRelationFilter, WalkLogWhereInput> | null
  }

  export type WalkSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    walkLog?: WalkLogOrderByWithRelationInput
  }

  export type WalkSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WalkSessionWhereInput | WalkSessionWhereInput[]
    OR?: WalkSessionWhereInput[]
    NOT?: WalkSessionWhereInput | WalkSessionWhereInput[]
    userId?: IntFilter<"WalkSession"> | number
    routeId?: IntFilter<"WalkSession"> | number
    startedAt?: DateTimeFilter<"WalkSession"> | Date | string
    finishedAt?: DateTimeNullableFilter<"WalkSession"> | Date | string | null
    status?: EnumSessionStatusFilter<"WalkSession"> | $Enums.SessionStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    walkLog?: XOR<WalkLogNullableScalarRelationFilter, WalkLogWhereInput> | null
  }, "id">

  export type WalkSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: WalkSessionCountOrderByAggregateInput
    _avg?: WalkSessionAvgOrderByAggregateInput
    _max?: WalkSessionMaxOrderByAggregateInput
    _min?: WalkSessionMinOrderByAggregateInput
    _sum?: WalkSessionSumOrderByAggregateInput
  }

  export type WalkSessionScalarWhereWithAggregatesInput = {
    AND?: WalkSessionScalarWhereWithAggregatesInput | WalkSessionScalarWhereWithAggregatesInput[]
    OR?: WalkSessionScalarWhereWithAggregatesInput[]
    NOT?: WalkSessionScalarWhereWithAggregatesInput | WalkSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WalkSession"> | number
    userId?: IntWithAggregatesFilter<"WalkSession"> | number
    routeId?: IntWithAggregatesFilter<"WalkSession"> | number
    startedAt?: DateTimeWithAggregatesFilter<"WalkSession"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"WalkSession"> | Date | string | null
    status?: EnumSessionStatusWithAggregatesFilter<"WalkSession"> | $Enums.SessionStatus
  }

  export type WalkLogWhereInput = {
    AND?: WalkLogWhereInput | WalkLogWhereInput[]
    OR?: WalkLogWhereInput[]
    NOT?: WalkLogWhereInput | WalkLogWhereInput[]
    id?: IntFilter<"WalkLog"> | number
    sessionId?: IntFilter<"WalkLog"> | number
    distance?: FloatNullableFilter<"WalkLog"> | number | null
    walkedAt?: DateTimeFilter<"WalkLog"> | Date | string
    session?: XOR<WalkSessionScalarRelationFilter, WalkSessionWhereInput>
    respondedSignals?: RespondedSignalListRelationFilter
  }

  export type WalkLogOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    distance?: SortOrderInput | SortOrder
    walkedAt?: SortOrder
    session?: WalkSessionOrderByWithRelationInput
    respondedSignals?: RespondedSignalOrderByRelationAggregateInput
  }

  export type WalkLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionId?: number
    AND?: WalkLogWhereInput | WalkLogWhereInput[]
    OR?: WalkLogWhereInput[]
    NOT?: WalkLogWhereInput | WalkLogWhereInput[]
    distance?: FloatNullableFilter<"WalkLog"> | number | null
    walkedAt?: DateTimeFilter<"WalkLog"> | Date | string
    session?: XOR<WalkSessionScalarRelationFilter, WalkSessionWhereInput>
    respondedSignals?: RespondedSignalListRelationFilter
  }, "id" | "sessionId">

  export type WalkLogOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    distance?: SortOrderInput | SortOrder
    walkedAt?: SortOrder
    _count?: WalkLogCountOrderByAggregateInput
    _avg?: WalkLogAvgOrderByAggregateInput
    _max?: WalkLogMaxOrderByAggregateInput
    _min?: WalkLogMinOrderByAggregateInput
    _sum?: WalkLogSumOrderByAggregateInput
  }

  export type WalkLogScalarWhereWithAggregatesInput = {
    AND?: WalkLogScalarWhereWithAggregatesInput | WalkLogScalarWhereWithAggregatesInput[]
    OR?: WalkLogScalarWhereWithAggregatesInput[]
    NOT?: WalkLogScalarWhereWithAggregatesInput | WalkLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WalkLog"> | number
    sessionId?: IntWithAggregatesFilter<"WalkLog"> | number
    distance?: FloatNullableWithAggregatesFilter<"WalkLog"> | number | null
    walkedAt?: DateTimeWithAggregatesFilter<"WalkLog"> | Date | string
  }

  export type RespondedSignalWhereInput = {
    AND?: RespondedSignalWhereInput | RespondedSignalWhereInput[]
    OR?: RespondedSignalWhereInput[]
    NOT?: RespondedSignalWhereInput | RespondedSignalWhereInput[]
    id?: IntFilter<"RespondedSignal"> | number
    walkLogId?: IntFilter<"RespondedSignal"> | number
    signalId?: IntFilter<"RespondedSignal"> | number
    responseId?: IntFilter<"RespondedSignal"> | number
    respondedAt?: DateTimeFilter<"RespondedSignal"> | Date | string
    walkLog?: XOR<WalkLogScalarRelationFilter, WalkLogWhereInput>
    signal?: XOR<SignalScalarRelationFilter, SignalWhereInput>
    response?: XOR<ResponseScalarRelationFilter, ResponseWhereInput>
  }

  export type RespondedSignalOrderByWithRelationInput = {
    id?: SortOrder
    walkLogId?: SortOrder
    signalId?: SortOrder
    responseId?: SortOrder
    respondedAt?: SortOrder
    walkLog?: WalkLogOrderByWithRelationInput
    signal?: SignalOrderByWithRelationInput
    response?: ResponseOrderByWithRelationInput
  }

  export type RespondedSignalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RespondedSignalWhereInput | RespondedSignalWhereInput[]
    OR?: RespondedSignalWhereInput[]
    NOT?: RespondedSignalWhereInput | RespondedSignalWhereInput[]
    walkLogId?: IntFilter<"RespondedSignal"> | number
    signalId?: IntFilter<"RespondedSignal"> | number
    responseId?: IntFilter<"RespondedSignal"> | number
    respondedAt?: DateTimeFilter<"RespondedSignal"> | Date | string
    walkLog?: XOR<WalkLogScalarRelationFilter, WalkLogWhereInput>
    signal?: XOR<SignalScalarRelationFilter, SignalWhereInput>
    response?: XOR<ResponseScalarRelationFilter, ResponseWhereInput>
  }, "id">

  export type RespondedSignalOrderByWithAggregationInput = {
    id?: SortOrder
    walkLogId?: SortOrder
    signalId?: SortOrder
    responseId?: SortOrder
    respondedAt?: SortOrder
    _count?: RespondedSignalCountOrderByAggregateInput
    _avg?: RespondedSignalAvgOrderByAggregateInput
    _max?: RespondedSignalMaxOrderByAggregateInput
    _min?: RespondedSignalMinOrderByAggregateInput
    _sum?: RespondedSignalSumOrderByAggregateInput
  }

  export type RespondedSignalScalarWhereWithAggregatesInput = {
    AND?: RespondedSignalScalarWhereWithAggregatesInput | RespondedSignalScalarWhereWithAggregatesInput[]
    OR?: RespondedSignalScalarWhereWithAggregatesInput[]
    NOT?: RespondedSignalScalarWhereWithAggregatesInput | RespondedSignalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RespondedSignal"> | number
    walkLogId?: IntWithAggregatesFilter<"RespondedSignal"> | number
    signalId?: IntWithAggregatesFilter<"RespondedSignal"> | number
    responseId?: IntWithAggregatesFilter<"RespondedSignal"> | number
    respondedAt?: DateTimeWithAggregatesFilter<"RespondedSignal"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    createdAt?: Date | string
    routes?: RouteCreateNestedManyWithoutUserInput
    signals?: SignalCreateNestedManyWithoutUserInput
    selectedSignals?: SignalCreateNestedManyWithoutSelectedUserInput
    responses?: ResponseCreateNestedManyWithoutUserInput
    sessions?: WalkSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    createdAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    signals?: SignalUncheckedCreateNestedManyWithoutUserInput
    selectedSignals?: SignalUncheckedCreateNestedManyWithoutSelectedUserInput
    responses?: ResponseUncheckedCreateNestedManyWithoutUserInput
    sessions?: WalkSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUpdateManyWithoutUserNestedInput
    signals?: SignalUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUpdateManyWithoutSelectedUserNestedInput
    responses?: ResponseUpdateManyWithoutUserNestedInput
    sessions?: WalkSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    signals?: SignalUncheckedUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUncheckedUpdateManyWithoutSelectedUserNestedInput
    responses?: ResponseUncheckedUpdateManyWithoutUserNestedInput
    sessions?: WalkSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeCreateInput = {
    name: string
    routes?: RouteCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: number
    name: string
    routes?: RouteUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    routes?: RouteUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    routes?: RouteUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type ThemeCreateManyInput = {
    id?: number
    name: string
  }

  export type ThemeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SignalCategoryCreateInput = {
    name: string
    signals?: SignalCreateNestedManyWithoutCategoryInput
  }

  export type SignalCategoryUncheckedCreateInput = {
    id?: number
    name: string
    signals?: SignalUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SignalCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    signals?: SignalUpdateManyWithoutCategoryNestedInput
  }

  export type SignalCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    signals?: SignalUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SignalCategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type SignalCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SignalCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SignalCreateInput = {
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    expiresAt?: Date | string
    user: UserCreateNestedOneWithoutSignalsInput
    selectedUser?: UserCreateNestedOneWithoutSelectedSignalsInput
    category: SignalCategoryCreateNestedOneWithoutSignalsInput
    responses?: ResponseCreateNestedManyWithoutSignalInput
    respondedSignals?: RespondedSignalCreateNestedManyWithoutSignalInput
  }

  export type SignalUncheckedCreateInput = {
    id?: number
    userId: number
    categoryId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    selectedUserId?: number | null
    expiresAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutSignalInput
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutSignalInput
  }

  export type SignalUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSignalsNestedInput
    selectedUser?: UserUpdateOneWithoutSelectedSignalsNestedInput
    category?: SignalCategoryUpdateOneRequiredWithoutSignalsNestedInput
    responses?: ResponseUpdateManyWithoutSignalNestedInput
    respondedSignals?: RespondedSignalUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    selectedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutSignalNestedInput
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutSignalNestedInput
  }

  export type SignalCreateManyInput = {
    id?: number
    userId: number
    categoryId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    selectedUserId?: number | null
    expiresAt?: Date | string
  }

  export type SignalUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    selectedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseCreateInput = {
    message: string
    respondedAt?: Date | string
    isRead?: boolean
    signal: SignalCreateNestedOneWithoutResponsesInput
    user: UserCreateNestedOneWithoutResponsesInput
    respondedSignals?: RespondedSignalCreateNestedManyWithoutResponseInput
  }

  export type ResponseUncheckedCreateInput = {
    id?: number
    signalId: number
    userId: number
    message: string
    respondedAt?: Date | string
    isRead?: boolean
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutResponseInput
  }

  export type ResponseUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    signal?: SignalUpdateOneRequiredWithoutResponsesNestedInput
    user?: UserUpdateOneRequiredWithoutResponsesNestedInput
    respondedSignals?: RespondedSignalUpdateManyWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type ResponseCreateManyInput = {
    id?: number
    signalId: number
    userId: number
    message: string
    respondedAt?: Date | string
    isRead?: boolean
  }

  export type ResponseUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResponseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RouteCreateInput = {
    distance?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRoutesInput
    theme: ThemeCreateNestedOneWithoutRoutesInput
    points?: RoutePointCreateNestedManyWithoutRouteInput
    sessions?: WalkSessionCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: number
    userId: number
    distance?: number | null
    themeId: number
    createdAt?: Date | string
    completedAt?: Date | string | null
    points?: RoutePointUncheckedCreateNestedManyWithoutRouteInput
    sessions?: WalkSessionUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    theme?: ThemeUpdateOneRequiredWithoutRoutesNestedInput
    points?: RoutePointUpdateManyWithoutRouteNestedInput
    sessions?: WalkSessionUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: RoutePointUncheckedUpdateManyWithoutRouteNestedInput
    sessions?: WalkSessionUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: number
    userId: number
    distance?: number | null
    themeId: number
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type RouteUpdateManyMutationInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoutePointCreateInput = {
    lat: number
    lng: number
    order: number
    route: RouteCreateNestedOneWithoutPointsInput
  }

  export type RoutePointUncheckedCreateInput = {
    id?: number
    routeId: number
    lat: number
    lng: number
    order: number
  }

  export type RoutePointUpdateInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutPointsNestedInput
  }

  export type RoutePointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutePointCreateManyInput = {
    id?: number
    routeId: number
    lat: number
    lng: number
    order: number
  }

  export type RoutePointUpdateManyMutationInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutePointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WalkSessionCreateInput = {
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
    user: UserCreateNestedOneWithoutSessionsInput
    route: RouteCreateNestedOneWithoutSessionsInput
    walkLog?: WalkLogCreateNestedOneWithoutSessionInput
  }

  export type WalkSessionUncheckedCreateInput = {
    id?: number
    userId: number
    routeId: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
    walkLog?: WalkLogUncheckedCreateNestedOneWithoutSessionInput
  }

  export type WalkSessionUpdateInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    route?: RouteUpdateOneRequiredWithoutSessionsNestedInput
    walkLog?: WalkLogUpdateOneWithoutSessionNestedInput
  }

  export type WalkSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    walkLog?: WalkLogUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type WalkSessionCreateManyInput = {
    id?: number
    userId: number
    routeId: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
  }

  export type WalkSessionUpdateManyMutationInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
  }

  export type WalkSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
  }

  export type WalkLogCreateInput = {
    distance?: number | null
    walkedAt?: Date | string
    session: WalkSessionCreateNestedOneWithoutWalkLogInput
    respondedSignals?: RespondedSignalCreateNestedManyWithoutWalkLogInput
  }

  export type WalkLogUncheckedCreateInput = {
    id?: number
    sessionId: number
    distance?: number | null
    walkedAt?: Date | string
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutWalkLogInput
  }

  export type WalkLogUpdateInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    walkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: WalkSessionUpdateOneRequiredWithoutWalkLogNestedInput
    respondedSignals?: RespondedSignalUpdateManyWithoutWalkLogNestedInput
  }

  export type WalkLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    walkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutWalkLogNestedInput
  }

  export type WalkLogCreateManyInput = {
    id?: number
    sessionId: number
    distance?: number | null
    walkedAt?: Date | string
  }

  export type WalkLogUpdateManyMutationInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    walkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalkLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    walkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespondedSignalCreateInput = {
    respondedAt?: Date | string
    walkLog: WalkLogCreateNestedOneWithoutRespondedSignalsInput
    signal: SignalCreateNestedOneWithoutRespondedSignalsInput
    response: ResponseCreateNestedOneWithoutRespondedSignalsInput
  }

  export type RespondedSignalUncheckedCreateInput = {
    id?: number
    walkLogId: number
    signalId: number
    responseId: number
    respondedAt?: Date | string
  }

  export type RespondedSignalUpdateInput = {
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walkLog?: WalkLogUpdateOneRequiredWithoutRespondedSignalsNestedInput
    signal?: SignalUpdateOneRequiredWithoutRespondedSignalsNestedInput
    response?: ResponseUpdateOneRequiredWithoutRespondedSignalsNestedInput
  }

  export type RespondedSignalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    walkLogId?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    responseId?: IntFieldUpdateOperationsInput | number
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespondedSignalCreateManyInput = {
    id?: number
    walkLogId: number
    signalId: number
    responseId: number
    respondedAt?: Date | string
  }

  export type RespondedSignalUpdateManyMutationInput = {
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespondedSignalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    walkLogId?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    responseId?: IntFieldUpdateOperationsInput | number
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type SignalListRelationFilter = {
    every?: SignalWhereInput
    some?: SignalWhereInput
    none?: SignalWhereInput
  }

  export type ResponseListRelationFilter = {
    every?: ResponseWhereInput
    some?: ResponseWhereInput
    none?: ResponseWhereInput
  }

  export type WalkSessionListRelationFilter = {
    every?: WalkSessionWhereInput
    some?: WalkSessionWhereInput
    none?: WalkSessionWhereInput
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalkSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ThemeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ThemeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SignalCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SignalCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SignalCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SignalCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SignalCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumSignalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalStatus | EnumSignalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SignalStatus[] | ListEnumSignalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignalStatus[] | ListEnumSignalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSignalStatusFilter<$PrismaModel> | $Enums.SignalStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SignalCategoryScalarRelationFilter = {
    is?: SignalCategoryWhereInput
    isNot?: SignalCategoryWhereInput
  }

  export type RespondedSignalListRelationFilter = {
    every?: RespondedSignalWhereInput
    some?: RespondedSignalWhereInput
    none?: RespondedSignalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RespondedSignalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    timeLimit?: SortOrder
    status?: SortOrder
    selectedUserId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SignalAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    timeLimit?: SortOrder
    selectedUserId?: SortOrder
  }

  export type SignalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    timeLimit?: SortOrder
    status?: SortOrder
    selectedUserId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SignalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    timeLimit?: SortOrder
    status?: SortOrder
    selectedUserId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SignalSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    timeLimit?: SortOrder
    selectedUserId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumSignalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalStatus | EnumSignalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SignalStatus[] | ListEnumSignalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignalStatus[] | ListEnumSignalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSignalStatusWithAggregatesFilter<$PrismaModel> | $Enums.SignalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSignalStatusFilter<$PrismaModel>
    _max?: NestedEnumSignalStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SignalScalarRelationFilter = {
    is?: SignalWhereInput
    isNot?: SignalWhereInput
  }

  export type ResponseCountOrderByAggregateInput = {
    id?: SortOrder
    signalId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    respondedAt?: SortOrder
    isRead?: SortOrder
  }

  export type ResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    signalId?: SortOrder
    userId?: SortOrder
  }

  export type ResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    signalId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    respondedAt?: SortOrder
    isRead?: SortOrder
  }

  export type ResponseMinOrderByAggregateInput = {
    id?: SortOrder
    signalId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    respondedAt?: SortOrder
    isRead?: SortOrder
  }

  export type ResponseSumOrderByAggregateInput = {
    id?: SortOrder
    signalId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ThemeScalarRelationFilter = {
    is?: ThemeWhereInput
    isNot?: ThemeWhereInput
  }

  export type RoutePointListRelationFilter = {
    every?: RoutePointWhereInput
    some?: RoutePointWhereInput
    none?: RoutePointWhereInput
  }

  export type RoutePointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    distance?: SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    distance?: SortOrder
    themeId?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    distance?: SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    distance?: SortOrder
    themeId?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    distance?: SortOrder
    themeId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type RoutePointCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type RoutePointAvgOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type RoutePointMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type RoutePointMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type RoutePointSumOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type WalkLogNullableScalarRelationFilter = {
    is?: WalkLogWhereInput | null
    isNot?: WalkLogWhereInput | null
  }

  export type WalkSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
  }

  export type WalkSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
  }

  export type WalkSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
  }

  export type WalkSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    status?: SortOrder
  }

  export type WalkSessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    routeId?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type WalkSessionScalarRelationFilter = {
    is?: WalkSessionWhereInput
    isNot?: WalkSessionWhereInput
  }

  export type WalkLogCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    distance?: SortOrder
    walkedAt?: SortOrder
  }

  export type WalkLogAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    distance?: SortOrder
  }

  export type WalkLogMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    distance?: SortOrder
    walkedAt?: SortOrder
  }

  export type WalkLogMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    distance?: SortOrder
    walkedAt?: SortOrder
  }

  export type WalkLogSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    distance?: SortOrder
  }

  export type WalkLogScalarRelationFilter = {
    is?: WalkLogWhereInput
    isNot?: WalkLogWhereInput
  }

  export type ResponseScalarRelationFilter = {
    is?: ResponseWhereInput
    isNot?: ResponseWhereInput
  }

  export type RespondedSignalCountOrderByAggregateInput = {
    id?: SortOrder
    walkLogId?: SortOrder
    signalId?: SortOrder
    responseId?: SortOrder
    respondedAt?: SortOrder
  }

  export type RespondedSignalAvgOrderByAggregateInput = {
    id?: SortOrder
    walkLogId?: SortOrder
    signalId?: SortOrder
    responseId?: SortOrder
  }

  export type RespondedSignalMaxOrderByAggregateInput = {
    id?: SortOrder
    walkLogId?: SortOrder
    signalId?: SortOrder
    responseId?: SortOrder
    respondedAt?: SortOrder
  }

  export type RespondedSignalMinOrderByAggregateInput = {
    id?: SortOrder
    walkLogId?: SortOrder
    signalId?: SortOrder
    responseId?: SortOrder
    respondedAt?: SortOrder
  }

  export type RespondedSignalSumOrderByAggregateInput = {
    id?: SortOrder
    walkLogId?: SortOrder
    signalId?: SortOrder
    responseId?: SortOrder
  }

  export type RouteCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type SignalCreateNestedManyWithoutUserInput = {
    create?: XOR<SignalCreateWithoutUserInput, SignalUncheckedCreateWithoutUserInput> | SignalCreateWithoutUserInput[] | SignalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutUserInput | SignalCreateOrConnectWithoutUserInput[]
    createMany?: SignalCreateManyUserInputEnvelope
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
  }

  export type SignalCreateNestedManyWithoutSelectedUserInput = {
    create?: XOR<SignalCreateWithoutSelectedUserInput, SignalUncheckedCreateWithoutSelectedUserInput> | SignalCreateWithoutSelectedUserInput[] | SignalUncheckedCreateWithoutSelectedUserInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutSelectedUserInput | SignalCreateOrConnectWithoutSelectedUserInput[]
    createMany?: SignalCreateManySelectedUserInputEnvelope
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
  }

  export type ResponseCreateNestedManyWithoutUserInput = {
    create?: XOR<ResponseCreateWithoutUserInput, ResponseUncheckedCreateWithoutUserInput> | ResponseCreateWithoutUserInput[] | ResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutUserInput | ResponseCreateOrConnectWithoutUserInput[]
    createMany?: ResponseCreateManyUserInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type WalkSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<WalkSessionCreateWithoutUserInput, WalkSessionUncheckedCreateWithoutUserInput> | WalkSessionCreateWithoutUserInput[] | WalkSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalkSessionCreateOrConnectWithoutUserInput | WalkSessionCreateOrConnectWithoutUserInput[]
    createMany?: WalkSessionCreateManyUserInputEnvelope
    connect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type SignalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SignalCreateWithoutUserInput, SignalUncheckedCreateWithoutUserInput> | SignalCreateWithoutUserInput[] | SignalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutUserInput | SignalCreateOrConnectWithoutUserInput[]
    createMany?: SignalCreateManyUserInputEnvelope
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
  }

  export type SignalUncheckedCreateNestedManyWithoutSelectedUserInput = {
    create?: XOR<SignalCreateWithoutSelectedUserInput, SignalUncheckedCreateWithoutSelectedUserInput> | SignalCreateWithoutSelectedUserInput[] | SignalUncheckedCreateWithoutSelectedUserInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutSelectedUserInput | SignalCreateOrConnectWithoutSelectedUserInput[]
    createMany?: SignalCreateManySelectedUserInputEnvelope
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
  }

  export type ResponseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResponseCreateWithoutUserInput, ResponseUncheckedCreateWithoutUserInput> | ResponseCreateWithoutUserInput[] | ResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutUserInput | ResponseCreateOrConnectWithoutUserInput[]
    createMany?: ResponseCreateManyUserInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type WalkSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WalkSessionCreateWithoutUserInput, WalkSessionUncheckedCreateWithoutUserInput> | WalkSessionCreateWithoutUserInput[] | WalkSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalkSessionCreateOrConnectWithoutUserInput | WalkSessionCreateOrConnectWithoutUserInput[]
    createMany?: WalkSessionCreateManyUserInputEnvelope
    connect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RouteUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type SignalUpdateManyWithoutUserNestedInput = {
    create?: XOR<SignalCreateWithoutUserInput, SignalUncheckedCreateWithoutUserInput> | SignalCreateWithoutUserInput[] | SignalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutUserInput | SignalCreateOrConnectWithoutUserInput[]
    upsert?: SignalUpsertWithWhereUniqueWithoutUserInput | SignalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SignalCreateManyUserInputEnvelope
    set?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    disconnect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    delete?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    update?: SignalUpdateWithWhereUniqueWithoutUserInput | SignalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SignalUpdateManyWithWhereWithoutUserInput | SignalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SignalScalarWhereInput | SignalScalarWhereInput[]
  }

  export type SignalUpdateManyWithoutSelectedUserNestedInput = {
    create?: XOR<SignalCreateWithoutSelectedUserInput, SignalUncheckedCreateWithoutSelectedUserInput> | SignalCreateWithoutSelectedUserInput[] | SignalUncheckedCreateWithoutSelectedUserInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutSelectedUserInput | SignalCreateOrConnectWithoutSelectedUserInput[]
    upsert?: SignalUpsertWithWhereUniqueWithoutSelectedUserInput | SignalUpsertWithWhereUniqueWithoutSelectedUserInput[]
    createMany?: SignalCreateManySelectedUserInputEnvelope
    set?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    disconnect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    delete?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    update?: SignalUpdateWithWhereUniqueWithoutSelectedUserInput | SignalUpdateWithWhereUniqueWithoutSelectedUserInput[]
    updateMany?: SignalUpdateManyWithWhereWithoutSelectedUserInput | SignalUpdateManyWithWhereWithoutSelectedUserInput[]
    deleteMany?: SignalScalarWhereInput | SignalScalarWhereInput[]
  }

  export type ResponseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResponseCreateWithoutUserInput, ResponseUncheckedCreateWithoutUserInput> | ResponseCreateWithoutUserInput[] | ResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutUserInput | ResponseCreateOrConnectWithoutUserInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutUserInput | ResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResponseCreateManyUserInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutUserInput | ResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutUserInput | ResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type WalkSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalkSessionCreateWithoutUserInput, WalkSessionUncheckedCreateWithoutUserInput> | WalkSessionCreateWithoutUserInput[] | WalkSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalkSessionCreateOrConnectWithoutUserInput | WalkSessionCreateOrConnectWithoutUserInput[]
    upsert?: WalkSessionUpsertWithWhereUniqueWithoutUserInput | WalkSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalkSessionCreateManyUserInputEnvelope
    set?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    disconnect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    delete?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    connect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    update?: WalkSessionUpdateWithWhereUniqueWithoutUserInput | WalkSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalkSessionUpdateManyWithWhereWithoutUserInput | WalkSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalkSessionScalarWhereInput | WalkSessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RouteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type SignalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SignalCreateWithoutUserInput, SignalUncheckedCreateWithoutUserInput> | SignalCreateWithoutUserInput[] | SignalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutUserInput | SignalCreateOrConnectWithoutUserInput[]
    upsert?: SignalUpsertWithWhereUniqueWithoutUserInput | SignalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SignalCreateManyUserInputEnvelope
    set?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    disconnect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    delete?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    update?: SignalUpdateWithWhereUniqueWithoutUserInput | SignalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SignalUpdateManyWithWhereWithoutUserInput | SignalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SignalScalarWhereInput | SignalScalarWhereInput[]
  }

  export type SignalUncheckedUpdateManyWithoutSelectedUserNestedInput = {
    create?: XOR<SignalCreateWithoutSelectedUserInput, SignalUncheckedCreateWithoutSelectedUserInput> | SignalCreateWithoutSelectedUserInput[] | SignalUncheckedCreateWithoutSelectedUserInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutSelectedUserInput | SignalCreateOrConnectWithoutSelectedUserInput[]
    upsert?: SignalUpsertWithWhereUniqueWithoutSelectedUserInput | SignalUpsertWithWhereUniqueWithoutSelectedUserInput[]
    createMany?: SignalCreateManySelectedUserInputEnvelope
    set?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    disconnect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    delete?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    update?: SignalUpdateWithWhereUniqueWithoutSelectedUserInput | SignalUpdateWithWhereUniqueWithoutSelectedUserInput[]
    updateMany?: SignalUpdateManyWithWhereWithoutSelectedUserInput | SignalUpdateManyWithWhereWithoutSelectedUserInput[]
    deleteMany?: SignalScalarWhereInput | SignalScalarWhereInput[]
  }

  export type ResponseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResponseCreateWithoutUserInput, ResponseUncheckedCreateWithoutUserInput> | ResponseCreateWithoutUserInput[] | ResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutUserInput | ResponseCreateOrConnectWithoutUserInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutUserInput | ResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResponseCreateManyUserInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutUserInput | ResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutUserInput | ResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type WalkSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalkSessionCreateWithoutUserInput, WalkSessionUncheckedCreateWithoutUserInput> | WalkSessionCreateWithoutUserInput[] | WalkSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalkSessionCreateOrConnectWithoutUserInput | WalkSessionCreateOrConnectWithoutUserInput[]
    upsert?: WalkSessionUpsertWithWhereUniqueWithoutUserInput | WalkSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalkSessionCreateManyUserInputEnvelope
    set?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    disconnect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    delete?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    connect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    update?: WalkSessionUpdateWithWhereUniqueWithoutUserInput | WalkSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalkSessionUpdateManyWithWhereWithoutUserInput | WalkSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalkSessionScalarWhereInput | WalkSessionScalarWhereInput[]
  }

  export type RouteCreateNestedManyWithoutThemeInput = {
    create?: XOR<RouteCreateWithoutThemeInput, RouteUncheckedCreateWithoutThemeInput> | RouteCreateWithoutThemeInput[] | RouteUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutThemeInput | RouteCreateOrConnectWithoutThemeInput[]
    createMany?: RouteCreateManyThemeInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<RouteCreateWithoutThemeInput, RouteUncheckedCreateWithoutThemeInput> | RouteCreateWithoutThemeInput[] | RouteUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutThemeInput | RouteCreateOrConnectWithoutThemeInput[]
    createMany?: RouteCreateManyThemeInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type RouteUpdateManyWithoutThemeNestedInput = {
    create?: XOR<RouteCreateWithoutThemeInput, RouteUncheckedCreateWithoutThemeInput> | RouteCreateWithoutThemeInput[] | RouteUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutThemeInput | RouteCreateOrConnectWithoutThemeInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutThemeInput | RouteUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: RouteCreateManyThemeInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutThemeInput | RouteUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutThemeInput | RouteUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<RouteCreateWithoutThemeInput, RouteUncheckedCreateWithoutThemeInput> | RouteCreateWithoutThemeInput[] | RouteUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutThemeInput | RouteCreateOrConnectWithoutThemeInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutThemeInput | RouteUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: RouteCreateManyThemeInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutThemeInput | RouteUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutThemeInput | RouteUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type SignalCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SignalCreateWithoutCategoryInput, SignalUncheckedCreateWithoutCategoryInput> | SignalCreateWithoutCategoryInput[] | SignalUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutCategoryInput | SignalCreateOrConnectWithoutCategoryInput[]
    createMany?: SignalCreateManyCategoryInputEnvelope
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
  }

  export type SignalUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SignalCreateWithoutCategoryInput, SignalUncheckedCreateWithoutCategoryInput> | SignalCreateWithoutCategoryInput[] | SignalUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutCategoryInput | SignalCreateOrConnectWithoutCategoryInput[]
    createMany?: SignalCreateManyCategoryInputEnvelope
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
  }

  export type SignalUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SignalCreateWithoutCategoryInput, SignalUncheckedCreateWithoutCategoryInput> | SignalCreateWithoutCategoryInput[] | SignalUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutCategoryInput | SignalCreateOrConnectWithoutCategoryInput[]
    upsert?: SignalUpsertWithWhereUniqueWithoutCategoryInput | SignalUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SignalCreateManyCategoryInputEnvelope
    set?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    disconnect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    delete?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    update?: SignalUpdateWithWhereUniqueWithoutCategoryInput | SignalUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SignalUpdateManyWithWhereWithoutCategoryInput | SignalUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SignalScalarWhereInput | SignalScalarWhereInput[]
  }

  export type SignalUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SignalCreateWithoutCategoryInput, SignalUncheckedCreateWithoutCategoryInput> | SignalCreateWithoutCategoryInput[] | SignalUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutCategoryInput | SignalCreateOrConnectWithoutCategoryInput[]
    upsert?: SignalUpsertWithWhereUniqueWithoutCategoryInput | SignalUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SignalCreateManyCategoryInputEnvelope
    set?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    disconnect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    delete?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    update?: SignalUpdateWithWhereUniqueWithoutCategoryInput | SignalUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SignalUpdateManyWithWhereWithoutCategoryInput | SignalUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SignalScalarWhereInput | SignalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSignalsInput = {
    create?: XOR<UserCreateWithoutSignalsInput, UserUncheckedCreateWithoutSignalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSelectedSignalsInput = {
    create?: XOR<UserCreateWithoutSelectedSignalsInput, UserUncheckedCreateWithoutSelectedSignalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSelectedSignalsInput
    connect?: UserWhereUniqueInput
  }

  export type SignalCategoryCreateNestedOneWithoutSignalsInput = {
    create?: XOR<SignalCategoryCreateWithoutSignalsInput, SignalCategoryUncheckedCreateWithoutSignalsInput>
    connectOrCreate?: SignalCategoryCreateOrConnectWithoutSignalsInput
    connect?: SignalCategoryWhereUniqueInput
  }

  export type ResponseCreateNestedManyWithoutSignalInput = {
    create?: XOR<ResponseCreateWithoutSignalInput, ResponseUncheckedCreateWithoutSignalInput> | ResponseCreateWithoutSignalInput[] | ResponseUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutSignalInput | ResponseCreateOrConnectWithoutSignalInput[]
    createMany?: ResponseCreateManySignalInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type RespondedSignalCreateNestedManyWithoutSignalInput = {
    create?: XOR<RespondedSignalCreateWithoutSignalInput, RespondedSignalUncheckedCreateWithoutSignalInput> | RespondedSignalCreateWithoutSignalInput[] | RespondedSignalUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutSignalInput | RespondedSignalCreateOrConnectWithoutSignalInput[]
    createMany?: RespondedSignalCreateManySignalInputEnvelope
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
  }

  export type ResponseUncheckedCreateNestedManyWithoutSignalInput = {
    create?: XOR<ResponseCreateWithoutSignalInput, ResponseUncheckedCreateWithoutSignalInput> | ResponseCreateWithoutSignalInput[] | ResponseUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutSignalInput | ResponseCreateOrConnectWithoutSignalInput[]
    createMany?: ResponseCreateManySignalInputEnvelope
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
  }

  export type RespondedSignalUncheckedCreateNestedManyWithoutSignalInput = {
    create?: XOR<RespondedSignalCreateWithoutSignalInput, RespondedSignalUncheckedCreateWithoutSignalInput> | RespondedSignalCreateWithoutSignalInput[] | RespondedSignalUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutSignalInput | RespondedSignalCreateOrConnectWithoutSignalInput[]
    createMany?: RespondedSignalCreateManySignalInputEnvelope
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSignalStatusFieldUpdateOperationsInput = {
    set?: $Enums.SignalStatus
  }

  export type UserUpdateOneRequiredWithoutSignalsNestedInput = {
    create?: XOR<UserCreateWithoutSignalsInput, UserUncheckedCreateWithoutSignalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignalsInput
    upsert?: UserUpsertWithoutSignalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSignalsInput, UserUpdateWithoutSignalsInput>, UserUncheckedUpdateWithoutSignalsInput>
  }

  export type UserUpdateOneWithoutSelectedSignalsNestedInput = {
    create?: XOR<UserCreateWithoutSelectedSignalsInput, UserUncheckedCreateWithoutSelectedSignalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSelectedSignalsInput
    upsert?: UserUpsertWithoutSelectedSignalsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSelectedSignalsInput, UserUpdateWithoutSelectedSignalsInput>, UserUncheckedUpdateWithoutSelectedSignalsInput>
  }

  export type SignalCategoryUpdateOneRequiredWithoutSignalsNestedInput = {
    create?: XOR<SignalCategoryCreateWithoutSignalsInput, SignalCategoryUncheckedCreateWithoutSignalsInput>
    connectOrCreate?: SignalCategoryCreateOrConnectWithoutSignalsInput
    upsert?: SignalCategoryUpsertWithoutSignalsInput
    connect?: SignalCategoryWhereUniqueInput
    update?: XOR<XOR<SignalCategoryUpdateToOneWithWhereWithoutSignalsInput, SignalCategoryUpdateWithoutSignalsInput>, SignalCategoryUncheckedUpdateWithoutSignalsInput>
  }

  export type ResponseUpdateManyWithoutSignalNestedInput = {
    create?: XOR<ResponseCreateWithoutSignalInput, ResponseUncheckedCreateWithoutSignalInput> | ResponseCreateWithoutSignalInput[] | ResponseUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutSignalInput | ResponseCreateOrConnectWithoutSignalInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutSignalInput | ResponseUpsertWithWhereUniqueWithoutSignalInput[]
    createMany?: ResponseCreateManySignalInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutSignalInput | ResponseUpdateWithWhereUniqueWithoutSignalInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutSignalInput | ResponseUpdateManyWithWhereWithoutSignalInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type RespondedSignalUpdateManyWithoutSignalNestedInput = {
    create?: XOR<RespondedSignalCreateWithoutSignalInput, RespondedSignalUncheckedCreateWithoutSignalInput> | RespondedSignalCreateWithoutSignalInput[] | RespondedSignalUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutSignalInput | RespondedSignalCreateOrConnectWithoutSignalInput[]
    upsert?: RespondedSignalUpsertWithWhereUniqueWithoutSignalInput | RespondedSignalUpsertWithWhereUniqueWithoutSignalInput[]
    createMany?: RespondedSignalCreateManySignalInputEnvelope
    set?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    disconnect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    delete?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    update?: RespondedSignalUpdateWithWhereUniqueWithoutSignalInput | RespondedSignalUpdateWithWhereUniqueWithoutSignalInput[]
    updateMany?: RespondedSignalUpdateManyWithWhereWithoutSignalInput | RespondedSignalUpdateManyWithWhereWithoutSignalInput[]
    deleteMany?: RespondedSignalScalarWhereInput | RespondedSignalScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResponseUncheckedUpdateManyWithoutSignalNestedInput = {
    create?: XOR<ResponseCreateWithoutSignalInput, ResponseUncheckedCreateWithoutSignalInput> | ResponseCreateWithoutSignalInput[] | ResponseUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: ResponseCreateOrConnectWithoutSignalInput | ResponseCreateOrConnectWithoutSignalInput[]
    upsert?: ResponseUpsertWithWhereUniqueWithoutSignalInput | ResponseUpsertWithWhereUniqueWithoutSignalInput[]
    createMany?: ResponseCreateManySignalInputEnvelope
    set?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    disconnect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    delete?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    connect?: ResponseWhereUniqueInput | ResponseWhereUniqueInput[]
    update?: ResponseUpdateWithWhereUniqueWithoutSignalInput | ResponseUpdateWithWhereUniqueWithoutSignalInput[]
    updateMany?: ResponseUpdateManyWithWhereWithoutSignalInput | ResponseUpdateManyWithWhereWithoutSignalInput[]
    deleteMany?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
  }

  export type RespondedSignalUncheckedUpdateManyWithoutSignalNestedInput = {
    create?: XOR<RespondedSignalCreateWithoutSignalInput, RespondedSignalUncheckedCreateWithoutSignalInput> | RespondedSignalCreateWithoutSignalInput[] | RespondedSignalUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutSignalInput | RespondedSignalCreateOrConnectWithoutSignalInput[]
    upsert?: RespondedSignalUpsertWithWhereUniqueWithoutSignalInput | RespondedSignalUpsertWithWhereUniqueWithoutSignalInput[]
    createMany?: RespondedSignalCreateManySignalInputEnvelope
    set?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    disconnect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    delete?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    update?: RespondedSignalUpdateWithWhereUniqueWithoutSignalInput | RespondedSignalUpdateWithWhereUniqueWithoutSignalInput[]
    updateMany?: RespondedSignalUpdateManyWithWhereWithoutSignalInput | RespondedSignalUpdateManyWithWhereWithoutSignalInput[]
    deleteMany?: RespondedSignalScalarWhereInput | RespondedSignalScalarWhereInput[]
  }

  export type SignalCreateNestedOneWithoutResponsesInput = {
    create?: XOR<SignalCreateWithoutResponsesInput, SignalUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SignalCreateOrConnectWithoutResponsesInput
    connect?: SignalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResponsesInput = {
    create?: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsesInput
    connect?: UserWhereUniqueInput
  }

  export type RespondedSignalCreateNestedManyWithoutResponseInput = {
    create?: XOR<RespondedSignalCreateWithoutResponseInput, RespondedSignalUncheckedCreateWithoutResponseInput> | RespondedSignalCreateWithoutResponseInput[] | RespondedSignalUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutResponseInput | RespondedSignalCreateOrConnectWithoutResponseInput[]
    createMany?: RespondedSignalCreateManyResponseInputEnvelope
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
  }

  export type RespondedSignalUncheckedCreateNestedManyWithoutResponseInput = {
    create?: XOR<RespondedSignalCreateWithoutResponseInput, RespondedSignalUncheckedCreateWithoutResponseInput> | RespondedSignalCreateWithoutResponseInput[] | RespondedSignalUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutResponseInput | RespondedSignalCreateOrConnectWithoutResponseInput[]
    createMany?: RespondedSignalCreateManyResponseInputEnvelope
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SignalUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<SignalCreateWithoutResponsesInput, SignalUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SignalCreateOrConnectWithoutResponsesInput
    upsert?: SignalUpsertWithoutResponsesInput
    connect?: SignalWhereUniqueInput
    update?: XOR<XOR<SignalUpdateToOneWithWhereWithoutResponsesInput, SignalUpdateWithoutResponsesInput>, SignalUncheckedUpdateWithoutResponsesInput>
  }

  export type UserUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsesInput
    upsert?: UserUpsertWithoutResponsesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsesInput, UserUpdateWithoutResponsesInput>, UserUncheckedUpdateWithoutResponsesInput>
  }

  export type RespondedSignalUpdateManyWithoutResponseNestedInput = {
    create?: XOR<RespondedSignalCreateWithoutResponseInput, RespondedSignalUncheckedCreateWithoutResponseInput> | RespondedSignalCreateWithoutResponseInput[] | RespondedSignalUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutResponseInput | RespondedSignalCreateOrConnectWithoutResponseInput[]
    upsert?: RespondedSignalUpsertWithWhereUniqueWithoutResponseInput | RespondedSignalUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: RespondedSignalCreateManyResponseInputEnvelope
    set?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    disconnect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    delete?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    update?: RespondedSignalUpdateWithWhereUniqueWithoutResponseInput | RespondedSignalUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: RespondedSignalUpdateManyWithWhereWithoutResponseInput | RespondedSignalUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: RespondedSignalScalarWhereInput | RespondedSignalScalarWhereInput[]
  }

  export type RespondedSignalUncheckedUpdateManyWithoutResponseNestedInput = {
    create?: XOR<RespondedSignalCreateWithoutResponseInput, RespondedSignalUncheckedCreateWithoutResponseInput> | RespondedSignalCreateWithoutResponseInput[] | RespondedSignalUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutResponseInput | RespondedSignalCreateOrConnectWithoutResponseInput[]
    upsert?: RespondedSignalUpsertWithWhereUniqueWithoutResponseInput | RespondedSignalUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: RespondedSignalCreateManyResponseInputEnvelope
    set?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    disconnect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    delete?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    update?: RespondedSignalUpdateWithWhereUniqueWithoutResponseInput | RespondedSignalUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: RespondedSignalUpdateManyWithWhereWithoutResponseInput | RespondedSignalUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: RespondedSignalScalarWhereInput | RespondedSignalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoutesInput = {
    create?: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput
    connect?: UserWhereUniqueInput
  }

  export type ThemeCreateNestedOneWithoutRoutesInput = {
    create?: XOR<ThemeCreateWithoutRoutesInput, ThemeUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutRoutesInput
    connect?: ThemeWhereUniqueInput
  }

  export type RoutePointCreateNestedManyWithoutRouteInput = {
    create?: XOR<RoutePointCreateWithoutRouteInput, RoutePointUncheckedCreateWithoutRouteInput> | RoutePointCreateWithoutRouteInput[] | RoutePointUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RoutePointCreateOrConnectWithoutRouteInput | RoutePointCreateOrConnectWithoutRouteInput[]
    createMany?: RoutePointCreateManyRouteInputEnvelope
    connect?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
  }

  export type WalkSessionCreateNestedManyWithoutRouteInput = {
    create?: XOR<WalkSessionCreateWithoutRouteInput, WalkSessionUncheckedCreateWithoutRouteInput> | WalkSessionCreateWithoutRouteInput[] | WalkSessionUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: WalkSessionCreateOrConnectWithoutRouteInput | WalkSessionCreateOrConnectWithoutRouteInput[]
    createMany?: WalkSessionCreateManyRouteInputEnvelope
    connect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
  }

  export type RoutePointUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RoutePointCreateWithoutRouteInput, RoutePointUncheckedCreateWithoutRouteInput> | RoutePointCreateWithoutRouteInput[] | RoutePointUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RoutePointCreateOrConnectWithoutRouteInput | RoutePointCreateOrConnectWithoutRouteInput[]
    createMany?: RoutePointCreateManyRouteInputEnvelope
    connect?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
  }

  export type WalkSessionUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<WalkSessionCreateWithoutRouteInput, WalkSessionUncheckedCreateWithoutRouteInput> | WalkSessionCreateWithoutRouteInput[] | WalkSessionUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: WalkSessionCreateOrConnectWithoutRouteInput | WalkSessionCreateOrConnectWithoutRouteInput[]
    createMany?: WalkSessionCreateManyRouteInputEnvelope
    connect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput
    upsert?: UserUpsertWithoutRoutesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutesInput, UserUpdateWithoutRoutesInput>, UserUncheckedUpdateWithoutRoutesInput>
  }

  export type ThemeUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<ThemeCreateWithoutRoutesInput, ThemeUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutRoutesInput
    upsert?: ThemeUpsertWithoutRoutesInput
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutRoutesInput, ThemeUpdateWithoutRoutesInput>, ThemeUncheckedUpdateWithoutRoutesInput>
  }

  export type RoutePointUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RoutePointCreateWithoutRouteInput, RoutePointUncheckedCreateWithoutRouteInput> | RoutePointCreateWithoutRouteInput[] | RoutePointUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RoutePointCreateOrConnectWithoutRouteInput | RoutePointCreateOrConnectWithoutRouteInput[]
    upsert?: RoutePointUpsertWithWhereUniqueWithoutRouteInput | RoutePointUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RoutePointCreateManyRouteInputEnvelope
    set?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
    disconnect?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
    delete?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
    connect?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
    update?: RoutePointUpdateWithWhereUniqueWithoutRouteInput | RoutePointUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RoutePointUpdateManyWithWhereWithoutRouteInput | RoutePointUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RoutePointScalarWhereInput | RoutePointScalarWhereInput[]
  }

  export type WalkSessionUpdateManyWithoutRouteNestedInput = {
    create?: XOR<WalkSessionCreateWithoutRouteInput, WalkSessionUncheckedCreateWithoutRouteInput> | WalkSessionCreateWithoutRouteInput[] | WalkSessionUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: WalkSessionCreateOrConnectWithoutRouteInput | WalkSessionCreateOrConnectWithoutRouteInput[]
    upsert?: WalkSessionUpsertWithWhereUniqueWithoutRouteInput | WalkSessionUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: WalkSessionCreateManyRouteInputEnvelope
    set?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    disconnect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    delete?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    connect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    update?: WalkSessionUpdateWithWhereUniqueWithoutRouteInput | WalkSessionUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: WalkSessionUpdateManyWithWhereWithoutRouteInput | WalkSessionUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: WalkSessionScalarWhereInput | WalkSessionScalarWhereInput[]
  }

  export type RoutePointUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RoutePointCreateWithoutRouteInput, RoutePointUncheckedCreateWithoutRouteInput> | RoutePointCreateWithoutRouteInput[] | RoutePointUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RoutePointCreateOrConnectWithoutRouteInput | RoutePointCreateOrConnectWithoutRouteInput[]
    upsert?: RoutePointUpsertWithWhereUniqueWithoutRouteInput | RoutePointUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RoutePointCreateManyRouteInputEnvelope
    set?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
    disconnect?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
    delete?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
    connect?: RoutePointWhereUniqueInput | RoutePointWhereUniqueInput[]
    update?: RoutePointUpdateWithWhereUniqueWithoutRouteInput | RoutePointUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RoutePointUpdateManyWithWhereWithoutRouteInput | RoutePointUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RoutePointScalarWhereInput | RoutePointScalarWhereInput[]
  }

  export type WalkSessionUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<WalkSessionCreateWithoutRouteInput, WalkSessionUncheckedCreateWithoutRouteInput> | WalkSessionCreateWithoutRouteInput[] | WalkSessionUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: WalkSessionCreateOrConnectWithoutRouteInput | WalkSessionCreateOrConnectWithoutRouteInput[]
    upsert?: WalkSessionUpsertWithWhereUniqueWithoutRouteInput | WalkSessionUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: WalkSessionCreateManyRouteInputEnvelope
    set?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    disconnect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    delete?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    connect?: WalkSessionWhereUniqueInput | WalkSessionWhereUniqueInput[]
    update?: WalkSessionUpdateWithWhereUniqueWithoutRouteInput | WalkSessionUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: WalkSessionUpdateManyWithWhereWithoutRouteInput | WalkSessionUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: WalkSessionScalarWhereInput | WalkSessionScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutPointsInput = {
    create?: XOR<RouteCreateWithoutPointsInput, RouteUncheckedCreateWithoutPointsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutPointsInput
    connect?: RouteWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<RouteCreateWithoutPointsInput, RouteUncheckedCreateWithoutPointsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutPointsInput
    upsert?: RouteUpsertWithoutPointsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutPointsInput, RouteUpdateWithoutPointsInput>, RouteUncheckedUpdateWithoutPointsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutSessionsInput = {
    create?: XOR<RouteCreateWithoutSessionsInput, RouteUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutSessionsInput
    connect?: RouteWhereUniqueInput
  }

  export type WalkLogCreateNestedOneWithoutSessionInput = {
    create?: XOR<WalkLogCreateWithoutSessionInput, WalkLogUncheckedCreateWithoutSessionInput>
    connectOrCreate?: WalkLogCreateOrConnectWithoutSessionInput
    connect?: WalkLogWhereUniqueInput
  }

  export type WalkLogUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<WalkLogCreateWithoutSessionInput, WalkLogUncheckedCreateWithoutSessionInput>
    connectOrCreate?: WalkLogCreateOrConnectWithoutSessionInput
    connect?: WalkLogWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type RouteUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<RouteCreateWithoutSessionsInput, RouteUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutSessionsInput
    upsert?: RouteUpsertWithoutSessionsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutSessionsInput, RouteUpdateWithoutSessionsInput>, RouteUncheckedUpdateWithoutSessionsInput>
  }

  export type WalkLogUpdateOneWithoutSessionNestedInput = {
    create?: XOR<WalkLogCreateWithoutSessionInput, WalkLogUncheckedCreateWithoutSessionInput>
    connectOrCreate?: WalkLogCreateOrConnectWithoutSessionInput
    upsert?: WalkLogUpsertWithoutSessionInput
    disconnect?: WalkLogWhereInput | boolean
    delete?: WalkLogWhereInput | boolean
    connect?: WalkLogWhereUniqueInput
    update?: XOR<XOR<WalkLogUpdateToOneWithWhereWithoutSessionInput, WalkLogUpdateWithoutSessionInput>, WalkLogUncheckedUpdateWithoutSessionInput>
  }

  export type WalkLogUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<WalkLogCreateWithoutSessionInput, WalkLogUncheckedCreateWithoutSessionInput>
    connectOrCreate?: WalkLogCreateOrConnectWithoutSessionInput
    upsert?: WalkLogUpsertWithoutSessionInput
    disconnect?: WalkLogWhereInput | boolean
    delete?: WalkLogWhereInput | boolean
    connect?: WalkLogWhereUniqueInput
    update?: XOR<XOR<WalkLogUpdateToOneWithWhereWithoutSessionInput, WalkLogUpdateWithoutSessionInput>, WalkLogUncheckedUpdateWithoutSessionInput>
  }

  export type WalkSessionCreateNestedOneWithoutWalkLogInput = {
    create?: XOR<WalkSessionCreateWithoutWalkLogInput, WalkSessionUncheckedCreateWithoutWalkLogInput>
    connectOrCreate?: WalkSessionCreateOrConnectWithoutWalkLogInput
    connect?: WalkSessionWhereUniqueInput
  }

  export type RespondedSignalCreateNestedManyWithoutWalkLogInput = {
    create?: XOR<RespondedSignalCreateWithoutWalkLogInput, RespondedSignalUncheckedCreateWithoutWalkLogInput> | RespondedSignalCreateWithoutWalkLogInput[] | RespondedSignalUncheckedCreateWithoutWalkLogInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutWalkLogInput | RespondedSignalCreateOrConnectWithoutWalkLogInput[]
    createMany?: RespondedSignalCreateManyWalkLogInputEnvelope
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
  }

  export type RespondedSignalUncheckedCreateNestedManyWithoutWalkLogInput = {
    create?: XOR<RespondedSignalCreateWithoutWalkLogInput, RespondedSignalUncheckedCreateWithoutWalkLogInput> | RespondedSignalCreateWithoutWalkLogInput[] | RespondedSignalUncheckedCreateWithoutWalkLogInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutWalkLogInput | RespondedSignalCreateOrConnectWithoutWalkLogInput[]
    createMany?: RespondedSignalCreateManyWalkLogInputEnvelope
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
  }

  export type WalkSessionUpdateOneRequiredWithoutWalkLogNestedInput = {
    create?: XOR<WalkSessionCreateWithoutWalkLogInput, WalkSessionUncheckedCreateWithoutWalkLogInput>
    connectOrCreate?: WalkSessionCreateOrConnectWithoutWalkLogInput
    upsert?: WalkSessionUpsertWithoutWalkLogInput
    connect?: WalkSessionWhereUniqueInput
    update?: XOR<XOR<WalkSessionUpdateToOneWithWhereWithoutWalkLogInput, WalkSessionUpdateWithoutWalkLogInput>, WalkSessionUncheckedUpdateWithoutWalkLogInput>
  }

  export type RespondedSignalUpdateManyWithoutWalkLogNestedInput = {
    create?: XOR<RespondedSignalCreateWithoutWalkLogInput, RespondedSignalUncheckedCreateWithoutWalkLogInput> | RespondedSignalCreateWithoutWalkLogInput[] | RespondedSignalUncheckedCreateWithoutWalkLogInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutWalkLogInput | RespondedSignalCreateOrConnectWithoutWalkLogInput[]
    upsert?: RespondedSignalUpsertWithWhereUniqueWithoutWalkLogInput | RespondedSignalUpsertWithWhereUniqueWithoutWalkLogInput[]
    createMany?: RespondedSignalCreateManyWalkLogInputEnvelope
    set?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    disconnect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    delete?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    update?: RespondedSignalUpdateWithWhereUniqueWithoutWalkLogInput | RespondedSignalUpdateWithWhereUniqueWithoutWalkLogInput[]
    updateMany?: RespondedSignalUpdateManyWithWhereWithoutWalkLogInput | RespondedSignalUpdateManyWithWhereWithoutWalkLogInput[]
    deleteMany?: RespondedSignalScalarWhereInput | RespondedSignalScalarWhereInput[]
  }

  export type RespondedSignalUncheckedUpdateManyWithoutWalkLogNestedInput = {
    create?: XOR<RespondedSignalCreateWithoutWalkLogInput, RespondedSignalUncheckedCreateWithoutWalkLogInput> | RespondedSignalCreateWithoutWalkLogInput[] | RespondedSignalUncheckedCreateWithoutWalkLogInput[]
    connectOrCreate?: RespondedSignalCreateOrConnectWithoutWalkLogInput | RespondedSignalCreateOrConnectWithoutWalkLogInput[]
    upsert?: RespondedSignalUpsertWithWhereUniqueWithoutWalkLogInput | RespondedSignalUpsertWithWhereUniqueWithoutWalkLogInput[]
    createMany?: RespondedSignalCreateManyWalkLogInputEnvelope
    set?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    disconnect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    delete?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    connect?: RespondedSignalWhereUniqueInput | RespondedSignalWhereUniqueInput[]
    update?: RespondedSignalUpdateWithWhereUniqueWithoutWalkLogInput | RespondedSignalUpdateWithWhereUniqueWithoutWalkLogInput[]
    updateMany?: RespondedSignalUpdateManyWithWhereWithoutWalkLogInput | RespondedSignalUpdateManyWithWhereWithoutWalkLogInput[]
    deleteMany?: RespondedSignalScalarWhereInput | RespondedSignalScalarWhereInput[]
  }

  export type WalkLogCreateNestedOneWithoutRespondedSignalsInput = {
    create?: XOR<WalkLogCreateWithoutRespondedSignalsInput, WalkLogUncheckedCreateWithoutRespondedSignalsInput>
    connectOrCreate?: WalkLogCreateOrConnectWithoutRespondedSignalsInput
    connect?: WalkLogWhereUniqueInput
  }

  export type SignalCreateNestedOneWithoutRespondedSignalsInput = {
    create?: XOR<SignalCreateWithoutRespondedSignalsInput, SignalUncheckedCreateWithoutRespondedSignalsInput>
    connectOrCreate?: SignalCreateOrConnectWithoutRespondedSignalsInput
    connect?: SignalWhereUniqueInput
  }

  export type ResponseCreateNestedOneWithoutRespondedSignalsInput = {
    create?: XOR<ResponseCreateWithoutRespondedSignalsInput, ResponseUncheckedCreateWithoutRespondedSignalsInput>
    connectOrCreate?: ResponseCreateOrConnectWithoutRespondedSignalsInput
    connect?: ResponseWhereUniqueInput
  }

  export type WalkLogUpdateOneRequiredWithoutRespondedSignalsNestedInput = {
    create?: XOR<WalkLogCreateWithoutRespondedSignalsInput, WalkLogUncheckedCreateWithoutRespondedSignalsInput>
    connectOrCreate?: WalkLogCreateOrConnectWithoutRespondedSignalsInput
    upsert?: WalkLogUpsertWithoutRespondedSignalsInput
    connect?: WalkLogWhereUniqueInput
    update?: XOR<XOR<WalkLogUpdateToOneWithWhereWithoutRespondedSignalsInput, WalkLogUpdateWithoutRespondedSignalsInput>, WalkLogUncheckedUpdateWithoutRespondedSignalsInput>
  }

  export type SignalUpdateOneRequiredWithoutRespondedSignalsNestedInput = {
    create?: XOR<SignalCreateWithoutRespondedSignalsInput, SignalUncheckedCreateWithoutRespondedSignalsInput>
    connectOrCreate?: SignalCreateOrConnectWithoutRespondedSignalsInput
    upsert?: SignalUpsertWithoutRespondedSignalsInput
    connect?: SignalWhereUniqueInput
    update?: XOR<XOR<SignalUpdateToOneWithWhereWithoutRespondedSignalsInput, SignalUpdateWithoutRespondedSignalsInput>, SignalUncheckedUpdateWithoutRespondedSignalsInput>
  }

  export type ResponseUpdateOneRequiredWithoutRespondedSignalsNestedInput = {
    create?: XOR<ResponseCreateWithoutRespondedSignalsInput, ResponseUncheckedCreateWithoutRespondedSignalsInput>
    connectOrCreate?: ResponseCreateOrConnectWithoutRespondedSignalsInput
    upsert?: ResponseUpsertWithoutRespondedSignalsInput
    connect?: ResponseWhereUniqueInput
    update?: XOR<XOR<ResponseUpdateToOneWithWhereWithoutRespondedSignalsInput, ResponseUpdateWithoutRespondedSignalsInput>, ResponseUncheckedUpdateWithoutRespondedSignalsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSignalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalStatus | EnumSignalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SignalStatus[] | ListEnumSignalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignalStatus[] | ListEnumSignalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSignalStatusFilter<$PrismaModel> | $Enums.SignalStatus
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSignalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignalStatus | EnumSignalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SignalStatus[] | ListEnumSignalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignalStatus[] | ListEnumSignalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSignalStatusWithAggregatesFilter<$PrismaModel> | $Enums.SignalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSignalStatusFilter<$PrismaModel>
    _max?: NestedEnumSignalStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type RouteCreateWithoutUserInput = {
    distance?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    theme: ThemeCreateNestedOneWithoutRoutesInput
    points?: RoutePointCreateNestedManyWithoutRouteInput
    sessions?: WalkSessionCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutUserInput = {
    id?: number
    distance?: number | null
    themeId: number
    createdAt?: Date | string
    completedAt?: Date | string | null
    points?: RoutePointUncheckedCreateNestedManyWithoutRouteInput
    sessions?: WalkSessionUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutUserInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteCreateManyUserInputEnvelope = {
    data: RouteCreateManyUserInput | RouteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SignalCreateWithoutUserInput = {
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    expiresAt?: Date | string
    selectedUser?: UserCreateNestedOneWithoutSelectedSignalsInput
    category: SignalCategoryCreateNestedOneWithoutSignalsInput
    responses?: ResponseCreateNestedManyWithoutSignalInput
    respondedSignals?: RespondedSignalCreateNestedManyWithoutSignalInput
  }

  export type SignalUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    selectedUserId?: number | null
    expiresAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutSignalInput
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutSignalInput
  }

  export type SignalCreateOrConnectWithoutUserInput = {
    where: SignalWhereUniqueInput
    create: XOR<SignalCreateWithoutUserInput, SignalUncheckedCreateWithoutUserInput>
  }

  export type SignalCreateManyUserInputEnvelope = {
    data: SignalCreateManyUserInput | SignalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SignalCreateWithoutSelectedUserInput = {
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    expiresAt?: Date | string
    user: UserCreateNestedOneWithoutSignalsInput
    category: SignalCategoryCreateNestedOneWithoutSignalsInput
    responses?: ResponseCreateNestedManyWithoutSignalInput
    respondedSignals?: RespondedSignalCreateNestedManyWithoutSignalInput
  }

  export type SignalUncheckedCreateWithoutSelectedUserInput = {
    id?: number
    userId: number
    categoryId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    expiresAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutSignalInput
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutSignalInput
  }

  export type SignalCreateOrConnectWithoutSelectedUserInput = {
    where: SignalWhereUniqueInput
    create: XOR<SignalCreateWithoutSelectedUserInput, SignalUncheckedCreateWithoutSelectedUserInput>
  }

  export type SignalCreateManySelectedUserInputEnvelope = {
    data: SignalCreateManySelectedUserInput | SignalCreateManySelectedUserInput[]
    skipDuplicates?: boolean
  }

  export type ResponseCreateWithoutUserInput = {
    message: string
    respondedAt?: Date | string
    isRead?: boolean
    signal: SignalCreateNestedOneWithoutResponsesInput
    respondedSignals?: RespondedSignalCreateNestedManyWithoutResponseInput
  }

  export type ResponseUncheckedCreateWithoutUserInput = {
    id?: number
    signalId: number
    message: string
    respondedAt?: Date | string
    isRead?: boolean
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutResponseInput
  }

  export type ResponseCreateOrConnectWithoutUserInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutUserInput, ResponseUncheckedCreateWithoutUserInput>
  }

  export type ResponseCreateManyUserInputEnvelope = {
    data: ResponseCreateManyUserInput | ResponseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalkSessionCreateWithoutUserInput = {
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
    route: RouteCreateNestedOneWithoutSessionsInput
    walkLog?: WalkLogCreateNestedOneWithoutSessionInput
  }

  export type WalkSessionUncheckedCreateWithoutUserInput = {
    id?: number
    routeId: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
    walkLog?: WalkLogUncheckedCreateNestedOneWithoutSessionInput
  }

  export type WalkSessionCreateOrConnectWithoutUserInput = {
    where: WalkSessionWhereUniqueInput
    create: XOR<WalkSessionCreateWithoutUserInput, WalkSessionUncheckedCreateWithoutUserInput>
  }

  export type WalkSessionCreateManyUserInputEnvelope = {
    data: WalkSessionCreateManyUserInput | WalkSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RouteUpsertWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
  }

  export type RouteUpdateManyWithWhereWithoutUserInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutUserInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: IntFilter<"Route"> | number
    userId?: IntFilter<"Route"> | number
    distance?: FloatNullableFilter<"Route"> | number | null
    themeId?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    completedAt?: DateTimeNullableFilter<"Route"> | Date | string | null
  }

  export type SignalUpsertWithWhereUniqueWithoutUserInput = {
    where: SignalWhereUniqueInput
    update: XOR<SignalUpdateWithoutUserInput, SignalUncheckedUpdateWithoutUserInput>
    create: XOR<SignalCreateWithoutUserInput, SignalUncheckedCreateWithoutUserInput>
  }

  export type SignalUpdateWithWhereUniqueWithoutUserInput = {
    where: SignalWhereUniqueInput
    data: XOR<SignalUpdateWithoutUserInput, SignalUncheckedUpdateWithoutUserInput>
  }

  export type SignalUpdateManyWithWhereWithoutUserInput = {
    where: SignalScalarWhereInput
    data: XOR<SignalUpdateManyMutationInput, SignalUncheckedUpdateManyWithoutUserInput>
  }

  export type SignalScalarWhereInput = {
    AND?: SignalScalarWhereInput | SignalScalarWhereInput[]
    OR?: SignalScalarWhereInput[]
    NOT?: SignalScalarWhereInput | SignalScalarWhereInput[]
    id?: IntFilter<"Signal"> | number
    userId?: IntFilter<"Signal"> | number
    categoryId?: IntFilter<"Signal"> | number
    title?: StringFilter<"Signal"> | string
    description?: StringFilter<"Signal"> | string
    lat?: FloatFilter<"Signal"> | number
    lng?: FloatFilter<"Signal"> | number
    createdAt?: DateTimeFilter<"Signal"> | Date | string
    timeLimit?: IntFilter<"Signal"> | number
    status?: EnumSignalStatusFilter<"Signal"> | $Enums.SignalStatus
    selectedUserId?: IntNullableFilter<"Signal"> | number | null
    expiresAt?: DateTimeFilter<"Signal"> | Date | string
  }

  export type SignalUpsertWithWhereUniqueWithoutSelectedUserInput = {
    where: SignalWhereUniqueInput
    update: XOR<SignalUpdateWithoutSelectedUserInput, SignalUncheckedUpdateWithoutSelectedUserInput>
    create: XOR<SignalCreateWithoutSelectedUserInput, SignalUncheckedCreateWithoutSelectedUserInput>
  }

  export type SignalUpdateWithWhereUniqueWithoutSelectedUserInput = {
    where: SignalWhereUniqueInput
    data: XOR<SignalUpdateWithoutSelectedUserInput, SignalUncheckedUpdateWithoutSelectedUserInput>
  }

  export type SignalUpdateManyWithWhereWithoutSelectedUserInput = {
    where: SignalScalarWhereInput
    data: XOR<SignalUpdateManyMutationInput, SignalUncheckedUpdateManyWithoutSelectedUserInput>
  }

  export type ResponseUpsertWithWhereUniqueWithoutUserInput = {
    where: ResponseWhereUniqueInput
    update: XOR<ResponseUpdateWithoutUserInput, ResponseUncheckedUpdateWithoutUserInput>
    create: XOR<ResponseCreateWithoutUserInput, ResponseUncheckedCreateWithoutUserInput>
  }

  export type ResponseUpdateWithWhereUniqueWithoutUserInput = {
    where: ResponseWhereUniqueInput
    data: XOR<ResponseUpdateWithoutUserInput, ResponseUncheckedUpdateWithoutUserInput>
  }

  export type ResponseUpdateManyWithWhereWithoutUserInput = {
    where: ResponseScalarWhereInput
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyWithoutUserInput>
  }

  export type ResponseScalarWhereInput = {
    AND?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    OR?: ResponseScalarWhereInput[]
    NOT?: ResponseScalarWhereInput | ResponseScalarWhereInput[]
    id?: IntFilter<"Response"> | number
    signalId?: IntFilter<"Response"> | number
    userId?: IntFilter<"Response"> | number
    message?: StringFilter<"Response"> | string
    respondedAt?: DateTimeFilter<"Response"> | Date | string
    isRead?: BoolFilter<"Response"> | boolean
  }

  export type WalkSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: WalkSessionWhereUniqueInput
    update: XOR<WalkSessionUpdateWithoutUserInput, WalkSessionUncheckedUpdateWithoutUserInput>
    create: XOR<WalkSessionCreateWithoutUserInput, WalkSessionUncheckedCreateWithoutUserInput>
  }

  export type WalkSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: WalkSessionWhereUniqueInput
    data: XOR<WalkSessionUpdateWithoutUserInput, WalkSessionUncheckedUpdateWithoutUserInput>
  }

  export type WalkSessionUpdateManyWithWhereWithoutUserInput = {
    where: WalkSessionScalarWhereInput
    data: XOR<WalkSessionUpdateManyMutationInput, WalkSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type WalkSessionScalarWhereInput = {
    AND?: WalkSessionScalarWhereInput | WalkSessionScalarWhereInput[]
    OR?: WalkSessionScalarWhereInput[]
    NOT?: WalkSessionScalarWhereInput | WalkSessionScalarWhereInput[]
    id?: IntFilter<"WalkSession"> | number
    userId?: IntFilter<"WalkSession"> | number
    routeId?: IntFilter<"WalkSession"> | number
    startedAt?: DateTimeFilter<"WalkSession"> | Date | string
    finishedAt?: DateTimeNullableFilter<"WalkSession"> | Date | string | null
    status?: EnumSessionStatusFilter<"WalkSession"> | $Enums.SessionStatus
  }

  export type RouteCreateWithoutThemeInput = {
    distance?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRoutesInput
    points?: RoutePointCreateNestedManyWithoutRouteInput
    sessions?: WalkSessionCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutThemeInput = {
    id?: number
    userId: number
    distance?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    points?: RoutePointUncheckedCreateNestedManyWithoutRouteInput
    sessions?: WalkSessionUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutThemeInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutThemeInput, RouteUncheckedCreateWithoutThemeInput>
  }

  export type RouteCreateManyThemeInputEnvelope = {
    data: RouteCreateManyThemeInput | RouteCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type RouteUpsertWithWhereUniqueWithoutThemeInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutThemeInput, RouteUncheckedUpdateWithoutThemeInput>
    create: XOR<RouteCreateWithoutThemeInput, RouteUncheckedCreateWithoutThemeInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutThemeInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutThemeInput, RouteUncheckedUpdateWithoutThemeInput>
  }

  export type RouteUpdateManyWithWhereWithoutThemeInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutThemeInput>
  }

  export type SignalCreateWithoutCategoryInput = {
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    expiresAt?: Date | string
    user: UserCreateNestedOneWithoutSignalsInput
    selectedUser?: UserCreateNestedOneWithoutSelectedSignalsInput
    responses?: ResponseCreateNestedManyWithoutSignalInput
    respondedSignals?: RespondedSignalCreateNestedManyWithoutSignalInput
  }

  export type SignalUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    selectedUserId?: number | null
    expiresAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutSignalInput
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutSignalInput
  }

  export type SignalCreateOrConnectWithoutCategoryInput = {
    where: SignalWhereUniqueInput
    create: XOR<SignalCreateWithoutCategoryInput, SignalUncheckedCreateWithoutCategoryInput>
  }

  export type SignalCreateManyCategoryInputEnvelope = {
    data: SignalCreateManyCategoryInput | SignalCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SignalUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SignalWhereUniqueInput
    update: XOR<SignalUpdateWithoutCategoryInput, SignalUncheckedUpdateWithoutCategoryInput>
    create: XOR<SignalCreateWithoutCategoryInput, SignalUncheckedCreateWithoutCategoryInput>
  }

  export type SignalUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SignalWhereUniqueInput
    data: XOR<SignalUpdateWithoutCategoryInput, SignalUncheckedUpdateWithoutCategoryInput>
  }

  export type SignalUpdateManyWithWhereWithoutCategoryInput = {
    where: SignalScalarWhereInput
    data: XOR<SignalUpdateManyMutationInput, SignalUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutSignalsInput = {
    username: string
    createdAt?: Date | string
    routes?: RouteCreateNestedManyWithoutUserInput
    selectedSignals?: SignalCreateNestedManyWithoutSelectedUserInput
    responses?: ResponseCreateNestedManyWithoutUserInput
    sessions?: WalkSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSignalsInput = {
    id?: number
    username: string
    createdAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    selectedSignals?: SignalUncheckedCreateNestedManyWithoutSelectedUserInput
    responses?: ResponseUncheckedCreateNestedManyWithoutUserInput
    sessions?: WalkSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSignalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSignalsInput, UserUncheckedCreateWithoutSignalsInput>
  }

  export type UserCreateWithoutSelectedSignalsInput = {
    username: string
    createdAt?: Date | string
    routes?: RouteCreateNestedManyWithoutUserInput
    signals?: SignalCreateNestedManyWithoutUserInput
    responses?: ResponseCreateNestedManyWithoutUserInput
    sessions?: WalkSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSelectedSignalsInput = {
    id?: number
    username: string
    createdAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    signals?: SignalUncheckedCreateNestedManyWithoutUserInput
    responses?: ResponseUncheckedCreateNestedManyWithoutUserInput
    sessions?: WalkSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSelectedSignalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSelectedSignalsInput, UserUncheckedCreateWithoutSelectedSignalsInput>
  }

  export type SignalCategoryCreateWithoutSignalsInput = {
    name: string
  }

  export type SignalCategoryUncheckedCreateWithoutSignalsInput = {
    id?: number
    name: string
  }

  export type SignalCategoryCreateOrConnectWithoutSignalsInput = {
    where: SignalCategoryWhereUniqueInput
    create: XOR<SignalCategoryCreateWithoutSignalsInput, SignalCategoryUncheckedCreateWithoutSignalsInput>
  }

  export type ResponseCreateWithoutSignalInput = {
    message: string
    respondedAt?: Date | string
    isRead?: boolean
    user: UserCreateNestedOneWithoutResponsesInput
    respondedSignals?: RespondedSignalCreateNestedManyWithoutResponseInput
  }

  export type ResponseUncheckedCreateWithoutSignalInput = {
    id?: number
    userId: number
    message: string
    respondedAt?: Date | string
    isRead?: boolean
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutResponseInput
  }

  export type ResponseCreateOrConnectWithoutSignalInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutSignalInput, ResponseUncheckedCreateWithoutSignalInput>
  }

  export type ResponseCreateManySignalInputEnvelope = {
    data: ResponseCreateManySignalInput | ResponseCreateManySignalInput[]
    skipDuplicates?: boolean
  }

  export type RespondedSignalCreateWithoutSignalInput = {
    respondedAt?: Date | string
    walkLog: WalkLogCreateNestedOneWithoutRespondedSignalsInput
    response: ResponseCreateNestedOneWithoutRespondedSignalsInput
  }

  export type RespondedSignalUncheckedCreateWithoutSignalInput = {
    id?: number
    walkLogId: number
    responseId: number
    respondedAt?: Date | string
  }

  export type RespondedSignalCreateOrConnectWithoutSignalInput = {
    where: RespondedSignalWhereUniqueInput
    create: XOR<RespondedSignalCreateWithoutSignalInput, RespondedSignalUncheckedCreateWithoutSignalInput>
  }

  export type RespondedSignalCreateManySignalInputEnvelope = {
    data: RespondedSignalCreateManySignalInput | RespondedSignalCreateManySignalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSignalsInput = {
    update: XOR<UserUpdateWithoutSignalsInput, UserUncheckedUpdateWithoutSignalsInput>
    create: XOR<UserCreateWithoutSignalsInput, UserUncheckedCreateWithoutSignalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSignalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSignalsInput, UserUncheckedUpdateWithoutSignalsInput>
  }

  export type UserUpdateWithoutSignalsInput = {
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUpdateManyWithoutSelectedUserNestedInput
    responses?: ResponseUpdateManyWithoutUserNestedInput
    sessions?: WalkSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUncheckedUpdateManyWithoutSelectedUserNestedInput
    responses?: ResponseUncheckedUpdateManyWithoutUserNestedInput
    sessions?: WalkSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSelectedSignalsInput = {
    update: XOR<UserUpdateWithoutSelectedSignalsInput, UserUncheckedUpdateWithoutSelectedSignalsInput>
    create: XOR<UserCreateWithoutSelectedSignalsInput, UserUncheckedCreateWithoutSelectedSignalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSelectedSignalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSelectedSignalsInput, UserUncheckedUpdateWithoutSelectedSignalsInput>
  }

  export type UserUpdateWithoutSelectedSignalsInput = {
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUpdateManyWithoutUserNestedInput
    signals?: SignalUpdateManyWithoutUserNestedInput
    responses?: ResponseUpdateManyWithoutUserNestedInput
    sessions?: WalkSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSelectedSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    signals?: SignalUncheckedUpdateManyWithoutUserNestedInput
    responses?: ResponseUncheckedUpdateManyWithoutUserNestedInput
    sessions?: WalkSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SignalCategoryUpsertWithoutSignalsInput = {
    update: XOR<SignalCategoryUpdateWithoutSignalsInput, SignalCategoryUncheckedUpdateWithoutSignalsInput>
    create: XOR<SignalCategoryCreateWithoutSignalsInput, SignalCategoryUncheckedCreateWithoutSignalsInput>
    where?: SignalCategoryWhereInput
  }

  export type SignalCategoryUpdateToOneWithWhereWithoutSignalsInput = {
    where?: SignalCategoryWhereInput
    data: XOR<SignalCategoryUpdateWithoutSignalsInput, SignalCategoryUncheckedUpdateWithoutSignalsInput>
  }

  export type SignalCategoryUpdateWithoutSignalsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SignalCategoryUncheckedUpdateWithoutSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResponseUpsertWithWhereUniqueWithoutSignalInput = {
    where: ResponseWhereUniqueInput
    update: XOR<ResponseUpdateWithoutSignalInput, ResponseUncheckedUpdateWithoutSignalInput>
    create: XOR<ResponseCreateWithoutSignalInput, ResponseUncheckedCreateWithoutSignalInput>
  }

  export type ResponseUpdateWithWhereUniqueWithoutSignalInput = {
    where: ResponseWhereUniqueInput
    data: XOR<ResponseUpdateWithoutSignalInput, ResponseUncheckedUpdateWithoutSignalInput>
  }

  export type ResponseUpdateManyWithWhereWithoutSignalInput = {
    where: ResponseScalarWhereInput
    data: XOR<ResponseUpdateManyMutationInput, ResponseUncheckedUpdateManyWithoutSignalInput>
  }

  export type RespondedSignalUpsertWithWhereUniqueWithoutSignalInput = {
    where: RespondedSignalWhereUniqueInput
    update: XOR<RespondedSignalUpdateWithoutSignalInput, RespondedSignalUncheckedUpdateWithoutSignalInput>
    create: XOR<RespondedSignalCreateWithoutSignalInput, RespondedSignalUncheckedCreateWithoutSignalInput>
  }

  export type RespondedSignalUpdateWithWhereUniqueWithoutSignalInput = {
    where: RespondedSignalWhereUniqueInput
    data: XOR<RespondedSignalUpdateWithoutSignalInput, RespondedSignalUncheckedUpdateWithoutSignalInput>
  }

  export type RespondedSignalUpdateManyWithWhereWithoutSignalInput = {
    where: RespondedSignalScalarWhereInput
    data: XOR<RespondedSignalUpdateManyMutationInput, RespondedSignalUncheckedUpdateManyWithoutSignalInput>
  }

  export type RespondedSignalScalarWhereInput = {
    AND?: RespondedSignalScalarWhereInput | RespondedSignalScalarWhereInput[]
    OR?: RespondedSignalScalarWhereInput[]
    NOT?: RespondedSignalScalarWhereInput | RespondedSignalScalarWhereInput[]
    id?: IntFilter<"RespondedSignal"> | number
    walkLogId?: IntFilter<"RespondedSignal"> | number
    signalId?: IntFilter<"RespondedSignal"> | number
    responseId?: IntFilter<"RespondedSignal"> | number
    respondedAt?: DateTimeFilter<"RespondedSignal"> | Date | string
  }

  export type SignalCreateWithoutResponsesInput = {
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    expiresAt?: Date | string
    user: UserCreateNestedOneWithoutSignalsInput
    selectedUser?: UserCreateNestedOneWithoutSelectedSignalsInput
    category: SignalCategoryCreateNestedOneWithoutSignalsInput
    respondedSignals?: RespondedSignalCreateNestedManyWithoutSignalInput
  }

  export type SignalUncheckedCreateWithoutResponsesInput = {
    id?: number
    userId: number
    categoryId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    selectedUserId?: number | null
    expiresAt?: Date | string
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutSignalInput
  }

  export type SignalCreateOrConnectWithoutResponsesInput = {
    where: SignalWhereUniqueInput
    create: XOR<SignalCreateWithoutResponsesInput, SignalUncheckedCreateWithoutResponsesInput>
  }

  export type UserCreateWithoutResponsesInput = {
    username: string
    createdAt?: Date | string
    routes?: RouteCreateNestedManyWithoutUserInput
    signals?: SignalCreateNestedManyWithoutUserInput
    selectedSignals?: SignalCreateNestedManyWithoutSelectedUserInput
    sessions?: WalkSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResponsesInput = {
    id?: number
    username: string
    createdAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    signals?: SignalUncheckedCreateNestedManyWithoutUserInput
    selectedSignals?: SignalUncheckedCreateNestedManyWithoutSelectedUserInput
    sessions?: WalkSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResponsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
  }

  export type RespondedSignalCreateWithoutResponseInput = {
    respondedAt?: Date | string
    walkLog: WalkLogCreateNestedOneWithoutRespondedSignalsInput
    signal: SignalCreateNestedOneWithoutRespondedSignalsInput
  }

  export type RespondedSignalUncheckedCreateWithoutResponseInput = {
    id?: number
    walkLogId: number
    signalId: number
    respondedAt?: Date | string
  }

  export type RespondedSignalCreateOrConnectWithoutResponseInput = {
    where: RespondedSignalWhereUniqueInput
    create: XOR<RespondedSignalCreateWithoutResponseInput, RespondedSignalUncheckedCreateWithoutResponseInput>
  }

  export type RespondedSignalCreateManyResponseInputEnvelope = {
    data: RespondedSignalCreateManyResponseInput | RespondedSignalCreateManyResponseInput[]
    skipDuplicates?: boolean
  }

  export type SignalUpsertWithoutResponsesInput = {
    update: XOR<SignalUpdateWithoutResponsesInput, SignalUncheckedUpdateWithoutResponsesInput>
    create: XOR<SignalCreateWithoutResponsesInput, SignalUncheckedCreateWithoutResponsesInput>
    where?: SignalWhereInput
  }

  export type SignalUpdateToOneWithWhereWithoutResponsesInput = {
    where?: SignalWhereInput
    data: XOR<SignalUpdateWithoutResponsesInput, SignalUncheckedUpdateWithoutResponsesInput>
  }

  export type SignalUpdateWithoutResponsesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSignalsNestedInput
    selectedUser?: UserUpdateOneWithoutSelectedSignalsNestedInput
    category?: SignalCategoryUpdateOneRequiredWithoutSignalsNestedInput
    respondedSignals?: RespondedSignalUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    selectedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutSignalNestedInput
  }

  export type UserUpsertWithoutResponsesInput = {
    update: XOR<UserUpdateWithoutResponsesInput, UserUncheckedUpdateWithoutResponsesInput>
    create: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsesInput, UserUncheckedUpdateWithoutResponsesInput>
  }

  export type UserUpdateWithoutResponsesInput = {
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUpdateManyWithoutUserNestedInput
    signals?: SignalUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUpdateManyWithoutSelectedUserNestedInput
    sessions?: WalkSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    signals?: SignalUncheckedUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUncheckedUpdateManyWithoutSelectedUserNestedInput
    sessions?: WalkSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RespondedSignalUpsertWithWhereUniqueWithoutResponseInput = {
    where: RespondedSignalWhereUniqueInput
    update: XOR<RespondedSignalUpdateWithoutResponseInput, RespondedSignalUncheckedUpdateWithoutResponseInput>
    create: XOR<RespondedSignalCreateWithoutResponseInput, RespondedSignalUncheckedCreateWithoutResponseInput>
  }

  export type RespondedSignalUpdateWithWhereUniqueWithoutResponseInput = {
    where: RespondedSignalWhereUniqueInput
    data: XOR<RespondedSignalUpdateWithoutResponseInput, RespondedSignalUncheckedUpdateWithoutResponseInput>
  }

  export type RespondedSignalUpdateManyWithWhereWithoutResponseInput = {
    where: RespondedSignalScalarWhereInput
    data: XOR<RespondedSignalUpdateManyMutationInput, RespondedSignalUncheckedUpdateManyWithoutResponseInput>
  }

  export type UserCreateWithoutRoutesInput = {
    username: string
    createdAt?: Date | string
    signals?: SignalCreateNestedManyWithoutUserInput
    selectedSignals?: SignalCreateNestedManyWithoutSelectedUserInput
    responses?: ResponseCreateNestedManyWithoutUserInput
    sessions?: WalkSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutesInput = {
    id?: number
    username: string
    createdAt?: Date | string
    signals?: SignalUncheckedCreateNestedManyWithoutUserInput
    selectedSignals?: SignalUncheckedCreateNestedManyWithoutSelectedUserInput
    responses?: ResponseUncheckedCreateNestedManyWithoutUserInput
    sessions?: WalkSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
  }

  export type ThemeCreateWithoutRoutesInput = {
    name: string
  }

  export type ThemeUncheckedCreateWithoutRoutesInput = {
    id?: number
    name: string
  }

  export type ThemeCreateOrConnectWithoutRoutesInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutRoutesInput, ThemeUncheckedCreateWithoutRoutesInput>
  }

  export type RoutePointCreateWithoutRouteInput = {
    lat: number
    lng: number
    order: number
  }

  export type RoutePointUncheckedCreateWithoutRouteInput = {
    id?: number
    lat: number
    lng: number
    order: number
  }

  export type RoutePointCreateOrConnectWithoutRouteInput = {
    where: RoutePointWhereUniqueInput
    create: XOR<RoutePointCreateWithoutRouteInput, RoutePointUncheckedCreateWithoutRouteInput>
  }

  export type RoutePointCreateManyRouteInputEnvelope = {
    data: RoutePointCreateManyRouteInput | RoutePointCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type WalkSessionCreateWithoutRouteInput = {
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
    user: UserCreateNestedOneWithoutSessionsInput
    walkLog?: WalkLogCreateNestedOneWithoutSessionInput
  }

  export type WalkSessionUncheckedCreateWithoutRouteInput = {
    id?: number
    userId: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
    walkLog?: WalkLogUncheckedCreateNestedOneWithoutSessionInput
  }

  export type WalkSessionCreateOrConnectWithoutRouteInput = {
    where: WalkSessionWhereUniqueInput
    create: XOR<WalkSessionCreateWithoutRouteInput, WalkSessionUncheckedCreateWithoutRouteInput>
  }

  export type WalkSessionCreateManyRouteInputEnvelope = {
    data: WalkSessionCreateManyRouteInput | WalkSessionCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoutesInput = {
    update: XOR<UserUpdateWithoutRoutesInput, UserUncheckedUpdateWithoutRoutesInput>
    create: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutesInput, UserUncheckedUpdateWithoutRoutesInput>
  }

  export type UserUpdateWithoutRoutesInput = {
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signals?: SignalUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUpdateManyWithoutSelectedUserNestedInput
    responses?: ResponseUpdateManyWithoutUserNestedInput
    sessions?: WalkSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signals?: SignalUncheckedUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUncheckedUpdateManyWithoutSelectedUserNestedInput
    responses?: ResponseUncheckedUpdateManyWithoutUserNestedInput
    sessions?: WalkSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThemeUpsertWithoutRoutesInput = {
    update: XOR<ThemeUpdateWithoutRoutesInput, ThemeUncheckedUpdateWithoutRoutesInput>
    create: XOR<ThemeCreateWithoutRoutesInput, ThemeUncheckedCreateWithoutRoutesInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutRoutesInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutRoutesInput, ThemeUncheckedUpdateWithoutRoutesInput>
  }

  export type ThemeUpdateWithoutRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeUncheckedUpdateWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoutePointUpsertWithWhereUniqueWithoutRouteInput = {
    where: RoutePointWhereUniqueInput
    update: XOR<RoutePointUpdateWithoutRouteInput, RoutePointUncheckedUpdateWithoutRouteInput>
    create: XOR<RoutePointCreateWithoutRouteInput, RoutePointUncheckedCreateWithoutRouteInput>
  }

  export type RoutePointUpdateWithWhereUniqueWithoutRouteInput = {
    where: RoutePointWhereUniqueInput
    data: XOR<RoutePointUpdateWithoutRouteInput, RoutePointUncheckedUpdateWithoutRouteInput>
  }

  export type RoutePointUpdateManyWithWhereWithoutRouteInput = {
    where: RoutePointScalarWhereInput
    data: XOR<RoutePointUpdateManyMutationInput, RoutePointUncheckedUpdateManyWithoutRouteInput>
  }

  export type RoutePointScalarWhereInput = {
    AND?: RoutePointScalarWhereInput | RoutePointScalarWhereInput[]
    OR?: RoutePointScalarWhereInput[]
    NOT?: RoutePointScalarWhereInput | RoutePointScalarWhereInput[]
    id?: IntFilter<"RoutePoint"> | number
    routeId?: IntFilter<"RoutePoint"> | number
    lat?: FloatFilter<"RoutePoint"> | number
    lng?: FloatFilter<"RoutePoint"> | number
    order?: IntFilter<"RoutePoint"> | number
  }

  export type WalkSessionUpsertWithWhereUniqueWithoutRouteInput = {
    where: WalkSessionWhereUniqueInput
    update: XOR<WalkSessionUpdateWithoutRouteInput, WalkSessionUncheckedUpdateWithoutRouteInput>
    create: XOR<WalkSessionCreateWithoutRouteInput, WalkSessionUncheckedCreateWithoutRouteInput>
  }

  export type WalkSessionUpdateWithWhereUniqueWithoutRouteInput = {
    where: WalkSessionWhereUniqueInput
    data: XOR<WalkSessionUpdateWithoutRouteInput, WalkSessionUncheckedUpdateWithoutRouteInput>
  }

  export type WalkSessionUpdateManyWithWhereWithoutRouteInput = {
    where: WalkSessionScalarWhereInput
    data: XOR<WalkSessionUpdateManyMutationInput, WalkSessionUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteCreateWithoutPointsInput = {
    distance?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRoutesInput
    theme: ThemeCreateNestedOneWithoutRoutesInput
    sessions?: WalkSessionCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutPointsInput = {
    id?: number
    userId: number
    distance?: number | null
    themeId: number
    createdAt?: Date | string
    completedAt?: Date | string | null
    sessions?: WalkSessionUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutPointsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutPointsInput, RouteUncheckedCreateWithoutPointsInput>
  }

  export type RouteUpsertWithoutPointsInput = {
    update: XOR<RouteUpdateWithoutPointsInput, RouteUncheckedUpdateWithoutPointsInput>
    create: XOR<RouteCreateWithoutPointsInput, RouteUncheckedCreateWithoutPointsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutPointsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutPointsInput, RouteUncheckedUpdateWithoutPointsInput>
  }

  export type RouteUpdateWithoutPointsInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    theme?: ThemeUpdateOneRequiredWithoutRoutesNestedInput
    sessions?: WalkSessionUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: WalkSessionUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    username: string
    createdAt?: Date | string
    routes?: RouteCreateNestedManyWithoutUserInput
    signals?: SignalCreateNestedManyWithoutUserInput
    selectedSignals?: SignalCreateNestedManyWithoutSelectedUserInput
    responses?: ResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    username: string
    createdAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    signals?: SignalUncheckedCreateNestedManyWithoutUserInput
    selectedSignals?: SignalUncheckedCreateNestedManyWithoutSelectedUserInput
    responses?: ResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type RouteCreateWithoutSessionsInput = {
    distance?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRoutesInput
    theme: ThemeCreateNestedOneWithoutRoutesInput
    points?: RoutePointCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutSessionsInput = {
    id?: number
    userId: number
    distance?: number | null
    themeId: number
    createdAt?: Date | string
    completedAt?: Date | string | null
    points?: RoutePointUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutSessionsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutSessionsInput, RouteUncheckedCreateWithoutSessionsInput>
  }

  export type WalkLogCreateWithoutSessionInput = {
    distance?: number | null
    walkedAt?: Date | string
    respondedSignals?: RespondedSignalCreateNestedManyWithoutWalkLogInput
  }

  export type WalkLogUncheckedCreateWithoutSessionInput = {
    id?: number
    distance?: number | null
    walkedAt?: Date | string
    respondedSignals?: RespondedSignalUncheckedCreateNestedManyWithoutWalkLogInput
  }

  export type WalkLogCreateOrConnectWithoutSessionInput = {
    where: WalkLogWhereUniqueInput
    create: XOR<WalkLogCreateWithoutSessionInput, WalkLogUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUpdateManyWithoutUserNestedInput
    signals?: SignalUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUpdateManyWithoutSelectedUserNestedInput
    responses?: ResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    signals?: SignalUncheckedUpdateManyWithoutUserNestedInput
    selectedSignals?: SignalUncheckedUpdateManyWithoutSelectedUserNestedInput
    responses?: ResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RouteUpsertWithoutSessionsInput = {
    update: XOR<RouteUpdateWithoutSessionsInput, RouteUncheckedUpdateWithoutSessionsInput>
    create: XOR<RouteCreateWithoutSessionsInput, RouteUncheckedCreateWithoutSessionsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutSessionsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutSessionsInput, RouteUncheckedUpdateWithoutSessionsInput>
  }

  export type RouteUpdateWithoutSessionsInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    theme?: ThemeUpdateOneRequiredWithoutRoutesNestedInput
    points?: RoutePointUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: RoutePointUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type WalkLogUpsertWithoutSessionInput = {
    update: XOR<WalkLogUpdateWithoutSessionInput, WalkLogUncheckedUpdateWithoutSessionInput>
    create: XOR<WalkLogCreateWithoutSessionInput, WalkLogUncheckedCreateWithoutSessionInput>
    where?: WalkLogWhereInput
  }

  export type WalkLogUpdateToOneWithWhereWithoutSessionInput = {
    where?: WalkLogWhereInput
    data: XOR<WalkLogUpdateWithoutSessionInput, WalkLogUncheckedUpdateWithoutSessionInput>
  }

  export type WalkLogUpdateWithoutSessionInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    walkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedSignals?: RespondedSignalUpdateManyWithoutWalkLogNestedInput
  }

  export type WalkLogUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    walkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutWalkLogNestedInput
  }

  export type WalkSessionCreateWithoutWalkLogInput = {
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
    user: UserCreateNestedOneWithoutSessionsInput
    route: RouteCreateNestedOneWithoutSessionsInput
  }

  export type WalkSessionUncheckedCreateWithoutWalkLogInput = {
    id?: number
    userId: number
    routeId: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
  }

  export type WalkSessionCreateOrConnectWithoutWalkLogInput = {
    where: WalkSessionWhereUniqueInput
    create: XOR<WalkSessionCreateWithoutWalkLogInput, WalkSessionUncheckedCreateWithoutWalkLogInput>
  }

  export type RespondedSignalCreateWithoutWalkLogInput = {
    respondedAt?: Date | string
    signal: SignalCreateNestedOneWithoutRespondedSignalsInput
    response: ResponseCreateNestedOneWithoutRespondedSignalsInput
  }

  export type RespondedSignalUncheckedCreateWithoutWalkLogInput = {
    id?: number
    signalId: number
    responseId: number
    respondedAt?: Date | string
  }

  export type RespondedSignalCreateOrConnectWithoutWalkLogInput = {
    where: RespondedSignalWhereUniqueInput
    create: XOR<RespondedSignalCreateWithoutWalkLogInput, RespondedSignalUncheckedCreateWithoutWalkLogInput>
  }

  export type RespondedSignalCreateManyWalkLogInputEnvelope = {
    data: RespondedSignalCreateManyWalkLogInput | RespondedSignalCreateManyWalkLogInput[]
    skipDuplicates?: boolean
  }

  export type WalkSessionUpsertWithoutWalkLogInput = {
    update: XOR<WalkSessionUpdateWithoutWalkLogInput, WalkSessionUncheckedUpdateWithoutWalkLogInput>
    create: XOR<WalkSessionCreateWithoutWalkLogInput, WalkSessionUncheckedCreateWithoutWalkLogInput>
    where?: WalkSessionWhereInput
  }

  export type WalkSessionUpdateToOneWithWhereWithoutWalkLogInput = {
    where?: WalkSessionWhereInput
    data: XOR<WalkSessionUpdateWithoutWalkLogInput, WalkSessionUncheckedUpdateWithoutWalkLogInput>
  }

  export type WalkSessionUpdateWithoutWalkLogInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    route?: RouteUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type WalkSessionUncheckedUpdateWithoutWalkLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
  }

  export type RespondedSignalUpsertWithWhereUniqueWithoutWalkLogInput = {
    where: RespondedSignalWhereUniqueInput
    update: XOR<RespondedSignalUpdateWithoutWalkLogInput, RespondedSignalUncheckedUpdateWithoutWalkLogInput>
    create: XOR<RespondedSignalCreateWithoutWalkLogInput, RespondedSignalUncheckedCreateWithoutWalkLogInput>
  }

  export type RespondedSignalUpdateWithWhereUniqueWithoutWalkLogInput = {
    where: RespondedSignalWhereUniqueInput
    data: XOR<RespondedSignalUpdateWithoutWalkLogInput, RespondedSignalUncheckedUpdateWithoutWalkLogInput>
  }

  export type RespondedSignalUpdateManyWithWhereWithoutWalkLogInput = {
    where: RespondedSignalScalarWhereInput
    data: XOR<RespondedSignalUpdateManyMutationInput, RespondedSignalUncheckedUpdateManyWithoutWalkLogInput>
  }

  export type WalkLogCreateWithoutRespondedSignalsInput = {
    distance?: number | null
    walkedAt?: Date | string
    session: WalkSessionCreateNestedOneWithoutWalkLogInput
  }

  export type WalkLogUncheckedCreateWithoutRespondedSignalsInput = {
    id?: number
    sessionId: number
    distance?: number | null
    walkedAt?: Date | string
  }

  export type WalkLogCreateOrConnectWithoutRespondedSignalsInput = {
    where: WalkLogWhereUniqueInput
    create: XOR<WalkLogCreateWithoutRespondedSignalsInput, WalkLogUncheckedCreateWithoutRespondedSignalsInput>
  }

  export type SignalCreateWithoutRespondedSignalsInput = {
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    expiresAt?: Date | string
    user: UserCreateNestedOneWithoutSignalsInput
    selectedUser?: UserCreateNestedOneWithoutSelectedSignalsInput
    category: SignalCategoryCreateNestedOneWithoutSignalsInput
    responses?: ResponseCreateNestedManyWithoutSignalInput
  }

  export type SignalUncheckedCreateWithoutRespondedSignalsInput = {
    id?: number
    userId: number
    categoryId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    selectedUserId?: number | null
    expiresAt?: Date | string
    responses?: ResponseUncheckedCreateNestedManyWithoutSignalInput
  }

  export type SignalCreateOrConnectWithoutRespondedSignalsInput = {
    where: SignalWhereUniqueInput
    create: XOR<SignalCreateWithoutRespondedSignalsInput, SignalUncheckedCreateWithoutRespondedSignalsInput>
  }

  export type ResponseCreateWithoutRespondedSignalsInput = {
    message: string
    respondedAt?: Date | string
    isRead?: boolean
    signal: SignalCreateNestedOneWithoutResponsesInput
    user: UserCreateNestedOneWithoutResponsesInput
  }

  export type ResponseUncheckedCreateWithoutRespondedSignalsInput = {
    id?: number
    signalId: number
    userId: number
    message: string
    respondedAt?: Date | string
    isRead?: boolean
  }

  export type ResponseCreateOrConnectWithoutRespondedSignalsInput = {
    where: ResponseWhereUniqueInput
    create: XOR<ResponseCreateWithoutRespondedSignalsInput, ResponseUncheckedCreateWithoutRespondedSignalsInput>
  }

  export type WalkLogUpsertWithoutRespondedSignalsInput = {
    update: XOR<WalkLogUpdateWithoutRespondedSignalsInput, WalkLogUncheckedUpdateWithoutRespondedSignalsInput>
    create: XOR<WalkLogCreateWithoutRespondedSignalsInput, WalkLogUncheckedCreateWithoutRespondedSignalsInput>
    where?: WalkLogWhereInput
  }

  export type WalkLogUpdateToOneWithWhereWithoutRespondedSignalsInput = {
    where?: WalkLogWhereInput
    data: XOR<WalkLogUpdateWithoutRespondedSignalsInput, WalkLogUncheckedUpdateWithoutRespondedSignalsInput>
  }

  export type WalkLogUpdateWithoutRespondedSignalsInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    walkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: WalkSessionUpdateOneRequiredWithoutWalkLogNestedInput
  }

  export type WalkLogUncheckedUpdateWithoutRespondedSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    walkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalUpsertWithoutRespondedSignalsInput = {
    update: XOR<SignalUpdateWithoutRespondedSignalsInput, SignalUncheckedUpdateWithoutRespondedSignalsInput>
    create: XOR<SignalCreateWithoutRespondedSignalsInput, SignalUncheckedCreateWithoutRespondedSignalsInput>
    where?: SignalWhereInput
  }

  export type SignalUpdateToOneWithWhereWithoutRespondedSignalsInput = {
    where?: SignalWhereInput
    data: XOR<SignalUpdateWithoutRespondedSignalsInput, SignalUncheckedUpdateWithoutRespondedSignalsInput>
  }

  export type SignalUpdateWithoutRespondedSignalsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSignalsNestedInput
    selectedUser?: UserUpdateOneWithoutSelectedSignalsNestedInput
    category?: SignalCategoryUpdateOneRequiredWithoutSignalsNestedInput
    responses?: ResponseUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateWithoutRespondedSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    selectedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutSignalNestedInput
  }

  export type ResponseUpsertWithoutRespondedSignalsInput = {
    update: XOR<ResponseUpdateWithoutRespondedSignalsInput, ResponseUncheckedUpdateWithoutRespondedSignalsInput>
    create: XOR<ResponseCreateWithoutRespondedSignalsInput, ResponseUncheckedCreateWithoutRespondedSignalsInput>
    where?: ResponseWhereInput
  }

  export type ResponseUpdateToOneWithWhereWithoutRespondedSignalsInput = {
    where?: ResponseWhereInput
    data: XOR<ResponseUpdateWithoutRespondedSignalsInput, ResponseUncheckedUpdateWithoutRespondedSignalsInput>
  }

  export type ResponseUpdateWithoutRespondedSignalsInput = {
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    signal?: SignalUpdateOneRequiredWithoutResponsesNestedInput
    user?: UserUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ResponseUncheckedUpdateWithoutRespondedSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RouteCreateManyUserInput = {
    id?: number
    distance?: number | null
    themeId: number
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type SignalCreateManyUserInput = {
    id?: number
    categoryId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    selectedUserId?: number | null
    expiresAt?: Date | string
  }

  export type SignalCreateManySelectedUserInput = {
    id?: number
    userId: number
    categoryId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    expiresAt?: Date | string
  }

  export type ResponseCreateManyUserInput = {
    id?: number
    signalId: number
    message: string
    respondedAt?: Date | string
    isRead?: boolean
  }

  export type WalkSessionCreateManyUserInput = {
    id?: number
    routeId: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
  }

  export type RouteUpdateWithoutUserInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: ThemeUpdateOneRequiredWithoutRoutesNestedInput
    points?: RoutePointUpdateManyWithoutRouteNestedInput
    sessions?: WalkSessionUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: RoutePointUncheckedUpdateManyWithoutRouteNestedInput
    sessions?: WalkSessionUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    themeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SignalUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedUser?: UserUpdateOneWithoutSelectedSignalsNestedInput
    category?: SignalCategoryUpdateOneRequiredWithoutSignalsNestedInput
    responses?: ResponseUpdateManyWithoutSignalNestedInput
    respondedSignals?: RespondedSignalUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    selectedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutSignalNestedInput
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    selectedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalUpdateWithoutSelectedUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSignalsNestedInput
    category?: SignalCategoryUpdateOneRequiredWithoutSignalsNestedInput
    responses?: ResponseUpdateManyWithoutSignalNestedInput
    respondedSignals?: RespondedSignalUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateWithoutSelectedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutSignalNestedInput
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateManyWithoutSelectedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    signal?: SignalUpdateOneRequiredWithoutResponsesNestedInput
    respondedSignals?: RespondedSignalUpdateManyWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WalkSessionUpdateWithoutUserInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    route?: RouteUpdateOneRequiredWithoutSessionsNestedInput
    walkLog?: WalkLogUpdateOneWithoutSessionNestedInput
  }

  export type WalkSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    walkLog?: WalkLogUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type WalkSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
  }

  export type RouteCreateManyThemeInput = {
    id?: number
    userId: number
    distance?: number | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type RouteUpdateWithoutThemeInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    points?: RoutePointUpdateManyWithoutRouteNestedInput
    sessions?: WalkSessionUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    points?: RoutePointUncheckedUpdateManyWithoutRouteNestedInput
    sessions?: WalkSessionUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SignalCreateManyCategoryInput = {
    id?: number
    userId: number
    title: string
    description: string
    lat: number
    lng: number
    createdAt?: Date | string
    timeLimit: number
    status?: $Enums.SignalStatus
    selectedUserId?: number | null
    expiresAt?: Date | string
  }

  export type SignalUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSignalsNestedInput
    selectedUser?: UserUpdateOneWithoutSelectedSignalsNestedInput
    responses?: ResponseUpdateManyWithoutSignalNestedInput
    respondedSignals?: RespondedSignalUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    selectedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ResponseUncheckedUpdateManyWithoutSignalNestedInput
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    status?: EnumSignalStatusFieldUpdateOperationsInput | $Enums.SignalStatus
    selectedUserId?: NullableIntFieldUpdateOperationsInput | number | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseCreateManySignalInput = {
    id?: number
    userId: number
    message: string
    respondedAt?: Date | string
    isRead?: boolean
  }

  export type RespondedSignalCreateManySignalInput = {
    id?: number
    walkLogId: number
    responseId: number
    respondedAt?: Date | string
  }

  export type ResponseUpdateWithoutSignalInput = {
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutResponsesNestedInput
    respondedSignals?: RespondedSignalUpdateManyWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateWithoutSignalInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    respondedSignals?: RespondedSignalUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type ResponseUncheckedUpdateManyWithoutSignalInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RespondedSignalUpdateWithoutSignalInput = {
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walkLog?: WalkLogUpdateOneRequiredWithoutRespondedSignalsNestedInput
    response?: ResponseUpdateOneRequiredWithoutRespondedSignalsNestedInput
  }

  export type RespondedSignalUncheckedUpdateWithoutSignalInput = {
    id?: IntFieldUpdateOperationsInput | number
    walkLogId?: IntFieldUpdateOperationsInput | number
    responseId?: IntFieldUpdateOperationsInput | number
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespondedSignalUncheckedUpdateManyWithoutSignalInput = {
    id?: IntFieldUpdateOperationsInput | number
    walkLogId?: IntFieldUpdateOperationsInput | number
    responseId?: IntFieldUpdateOperationsInput | number
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespondedSignalCreateManyResponseInput = {
    id?: number
    walkLogId: number
    signalId: number
    respondedAt?: Date | string
  }

  export type RespondedSignalUpdateWithoutResponseInput = {
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walkLog?: WalkLogUpdateOneRequiredWithoutRespondedSignalsNestedInput
    signal?: SignalUpdateOneRequiredWithoutRespondedSignalsNestedInput
  }

  export type RespondedSignalUncheckedUpdateWithoutResponseInput = {
    id?: IntFieldUpdateOperationsInput | number
    walkLogId?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespondedSignalUncheckedUpdateManyWithoutResponseInput = {
    id?: IntFieldUpdateOperationsInput | number
    walkLogId?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutePointCreateManyRouteInput = {
    id?: number
    lat: number
    lng: number
    order: number
  }

  export type WalkSessionCreateManyRouteInput = {
    id?: number
    userId: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    status?: $Enums.SessionStatus
  }

  export type RoutePointUpdateWithoutRouteInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutePointUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoutePointUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WalkSessionUpdateWithoutRouteInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    walkLog?: WalkLogUpdateOneWithoutSessionNestedInput
  }

  export type WalkSessionUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    walkLog?: WalkLogUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type WalkSessionUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
  }

  export type RespondedSignalCreateManyWalkLogInput = {
    id?: number
    signalId: number
    responseId: number
    respondedAt?: Date | string
  }

  export type RespondedSignalUpdateWithoutWalkLogInput = {
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signal?: SignalUpdateOneRequiredWithoutRespondedSignalsNestedInput
    response?: ResponseUpdateOneRequiredWithoutRespondedSignalsNestedInput
  }

  export type RespondedSignalUncheckedUpdateWithoutWalkLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    responseId?: IntFieldUpdateOperationsInput | number
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespondedSignalUncheckedUpdateManyWithoutWalkLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    signalId?: IntFieldUpdateOperationsInput | number
    responseId?: IntFieldUpdateOperationsInput | number
    respondedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}