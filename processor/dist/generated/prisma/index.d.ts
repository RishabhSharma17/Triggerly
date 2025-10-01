
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
 * Model Zap
 * 
 */
export type Zap = $Result.DefaultSelection<Prisma.$ZapPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model AvailableActions
 * 
 */
export type AvailableActions = $Result.DefaultSelection<Prisma.$AvailableActionsPayload>
/**
 * Model AvailableTriggers
 * 
 */
export type AvailableTriggers = $Result.DefaultSelection<Prisma.$AvailableTriggersPayload>
/**
 * Model zapRun
 * 
 */
export type zapRun = $Result.DefaultSelection<Prisma.$zapRunPayload>
/**
 * Model zapRunOutbox
 * 
 */
export type zapRunOutbox = $Result.DefaultSelection<Prisma.$zapRunOutboxPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.zap`: Exposes CRUD operations for the **Zap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zaps
    * const zaps = await prisma.zap.findMany()
    * ```
    */
  get zap(): Prisma.ZapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableActions`: Exposes CRUD operations for the **AvailableActions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableActions
    * const availableActions = await prisma.availableActions.findMany()
    * ```
    */
  get availableActions(): Prisma.AvailableActionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableTriggers`: Exposes CRUD operations for the **AvailableTriggers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableTriggers
    * const availableTriggers = await prisma.availableTriggers.findMany()
    * ```
    */
  get availableTriggers(): Prisma.AvailableTriggersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRun`: Exposes CRUD operations for the **zapRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRuns
    * const zapRuns = await prisma.zapRun.findMany()
    * ```
    */
  get zapRun(): Prisma.zapRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRunOutbox`: Exposes CRUD operations for the **zapRunOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRunOutboxes
    * const zapRunOutboxes = await prisma.zapRunOutbox.findMany()
    * ```
    */
  get zapRunOutbox(): Prisma.zapRunOutboxDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Zap: 'Zap',
    Trigger: 'Trigger',
    Action: 'Action',
    AvailableActions: 'AvailableActions',
    AvailableTriggers: 'AvailableTriggers',
    zapRun: 'zapRun',
    zapRunOutbox: 'zapRunOutbox'
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
      modelProps: "user" | "zap" | "trigger" | "action" | "availableActions" | "availableTriggers" | "zapRun" | "zapRunOutbox"
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
      Zap: {
        payload: Prisma.$ZapPayload<ExtArgs>
        fields: Prisma.ZapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findFirst: {
            args: Prisma.ZapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findMany: {
            args: Prisma.ZapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          create: {
            args: Prisma.ZapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          createMany: {
            args: Prisma.ZapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          delete: {
            args: Prisma.ZapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          update: {
            args: Prisma.ZapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          deleteMany: {
            args: Prisma.ZapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          upsert: {
            args: Prisma.ZapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          aggregate: {
            args: Prisma.ZapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZap>
          }
          groupBy: {
            args: Prisma.ZapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapCountArgs<ExtArgs>
            result: $Utils.Optional<ZapCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      AvailableActions: {
        payload: Prisma.$AvailableActionsPayload<ExtArgs>
        fields: Prisma.AvailableActionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableActionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableActionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          findFirst: {
            args: Prisma.AvailableActionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableActionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          findMany: {
            args: Prisma.AvailableActionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[]
          }
          create: {
            args: Prisma.AvailableActionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          createMany: {
            args: Prisma.AvailableActionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableActionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[]
          }
          delete: {
            args: Prisma.AvailableActionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          update: {
            args: Prisma.AvailableActionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          deleteMany: {
            args: Prisma.AvailableActionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableActionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableActionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[]
          }
          upsert: {
            args: Prisma.AvailableActionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          aggregate: {
            args: Prisma.AvailableActionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableActions>
          }
          groupBy: {
            args: Prisma.AvailableActionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableActionsCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionsCountAggregateOutputType> | number
          }
        }
      }
      AvailableTriggers: {
        payload: Prisma.$AvailableTriggersPayload<ExtArgs>
        fields: Prisma.AvailableTriggersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableTriggersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableTriggersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          findFirst: {
            args: Prisma.AvailableTriggersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableTriggersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          findMany: {
            args: Prisma.AvailableTriggersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[]
          }
          create: {
            args: Prisma.AvailableTriggersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          createMany: {
            args: Prisma.AvailableTriggersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableTriggersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[]
          }
          delete: {
            args: Prisma.AvailableTriggersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          update: {
            args: Prisma.AvailableTriggersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          deleteMany: {
            args: Prisma.AvailableTriggersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableTriggersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableTriggersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[]
          }
          upsert: {
            args: Prisma.AvailableTriggersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          aggregate: {
            args: Prisma.AvailableTriggersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableTriggers>
          }
          groupBy: {
            args: Prisma.AvailableTriggersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableTriggersCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggersCountAggregateOutputType> | number
          }
        }
      }
      zapRun: {
        payload: Prisma.$zapRunPayload<ExtArgs>
        fields: Prisma.zapRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.zapRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.zapRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          findFirst: {
            args: Prisma.zapRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.zapRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          findMany: {
            args: Prisma.zapRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>[]
          }
          create: {
            args: Prisma.zapRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          createMany: {
            args: Prisma.zapRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.zapRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>[]
          }
          delete: {
            args: Prisma.zapRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          update: {
            args: Prisma.zapRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          deleteMany: {
            args: Prisma.zapRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.zapRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.zapRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>[]
          }
          upsert: {
            args: Prisma.zapRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          aggregate: {
            args: Prisma.ZapRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRun>
          }
          groupBy: {
            args: Prisma.zapRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.zapRunCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunCountAggregateOutputType> | number
          }
        }
      }
      zapRunOutbox: {
        payload: Prisma.$zapRunOutboxPayload<ExtArgs>
        fields: Prisma.zapRunOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.zapRunOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.zapRunOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload>
          }
          findFirst: {
            args: Prisma.zapRunOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.zapRunOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload>
          }
          findMany: {
            args: Prisma.zapRunOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload>[]
          }
          create: {
            args: Prisma.zapRunOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload>
          }
          createMany: {
            args: Prisma.zapRunOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.zapRunOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload>[]
          }
          delete: {
            args: Prisma.zapRunOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload>
          }
          update: {
            args: Prisma.zapRunOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload>
          }
          deleteMany: {
            args: Prisma.zapRunOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.zapRunOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.zapRunOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload>[]
          }
          upsert: {
            args: Prisma.zapRunOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunOutboxPayload>
          }
          aggregate: {
            args: Prisma.ZapRunOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRunOutbox>
          }
          groupBy: {
            args: Prisma.zapRunOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.zapRunOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunOutboxCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    zap?: ZapOmit
    trigger?: TriggerOmit
    action?: ActionOmit
    availableActions?: AvailableActionsOmit
    availableTriggers?: AvailableTriggersOmit
    zapRun?: zapRunOmit
    zapRunOutbox?: zapRunOutboxOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ZapCountOutputType
   */

  export type ZapCountOutputType = {
    action: number
    zapRuns: number
  }

  export type ZapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ZapCountOutputTypeCountActionArgs
    zapRuns?: boolean | ZapCountOutputTypeCountZapRunsArgs
  }

  // Custom InputTypes
  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapCountOutputType
     */
    select?: ZapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountZapRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zapRunWhereInput
  }


  /**
   * Count Type AvailableActionsCountOutputType
   */

  export type AvailableActionsCountOutputType = {
    actions: number
  }

  export type AvailableActionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvailableActionsCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * AvailableActionsCountOutputType without action
   */
  export type AvailableActionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionsCountOutputType
     */
    select?: AvailableActionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableActionsCountOutputType without action
   */
  export type AvailableActionsCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Count Type AvailableTriggersCountOutputType
   */

  export type AvailableTriggersCountOutputType = {
    triggers: number
  }

  export type AvailableTriggersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | AvailableTriggersCountOutputTypeCountTriggersArgs
  }

  // Custom InputTypes
  /**
   * AvailableTriggersCountOutputType without action
   */
  export type AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggersCountOutputType
     */
    select?: AvailableTriggersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableTriggersCountOutputType without action
   */
  export type AvailableTriggersCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
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
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
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
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
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
    name: string
    email: string
    password: string
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
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
  }


  /**
   * Model Zap
   */

  export type AggregateZap = {
    _count: ZapCountAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  export type ZapMinAggregateOutputType = {
    id: string | null
  }

  export type ZapMaxAggregateOutputType = {
    id: string | null
  }

  export type ZapCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ZapMinAggregateInputType = {
    id?: true
  }

  export type ZapMaxAggregateInputType = {
    id?: true
  }

  export type ZapCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ZapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zap to aggregate.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zaps
    **/
    _count?: true | ZapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapMaxAggregateInputType
  }

  export type GetZapAggregateType<T extends ZapAggregateArgs> = {
        [P in keyof T & keyof AggregateZap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZap[P]>
      : GetScalarType<T[P], AggregateZap[P]>
  }




  export type ZapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithAggregationInput | ZapOrderByWithAggregationInput[]
    by: ZapScalarFieldEnum[] | ZapScalarFieldEnum
    having?: ZapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapCountAggregateInputType | true
    _min?: ZapMinAggregateInputType
    _max?: ZapMaxAggregateInputType
  }

  export type ZapGroupByOutputType = {
    id: string
    _count: ZapCountAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  type GetZapGroupByPayload<T extends ZapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapGroupByOutputType[P]>
            : GetScalarType<T[P], ZapGroupByOutputType[P]>
        }
      >
    >


  export type ZapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    action?: boolean | Zap$actionArgs<ExtArgs>
    zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectScalar = {
    id?: boolean
  }

  export type ZapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["zap"]>
  export type ZapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    action?: boolean | Zap$actionArgs<ExtArgs>
    zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ZapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ZapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zap"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      action: Prisma.$ActionPayload<ExtArgs>[]
      zapRuns: Prisma.$zapRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["zap"]>
    composites: {}
  }

  type ZapGetPayload<S extends boolean | null | undefined | ZapDefaultArgs> = $Result.GetResult<Prisma.$ZapPayload, S>

  type ZapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapCountAggregateInputType | true
    }

  export interface ZapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zap'], meta: { name: 'Zap' } }
    /**
     * Find zero or one Zap that matches the filter.
     * @param {ZapFindUniqueArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapFindUniqueArgs>(args: SelectSubset<T, ZapFindUniqueArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapFindUniqueOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapFindFirstArgs>(args?: SelectSubset<T, ZapFindFirstArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zaps
     * const zaps = await prisma.zap.findMany()
     * 
     * // Get first 10 Zaps
     * const zaps = await prisma.zap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapWithIdOnly = await prisma.zap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapFindManyArgs>(args?: SelectSubset<T, ZapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zap.
     * @param {ZapCreateArgs} args - Arguments to create a Zap.
     * @example
     * // Create one Zap
     * const Zap = await prisma.zap.create({
     *   data: {
     *     // ... data to create a Zap
     *   }
     * })
     * 
     */
    create<T extends ZapCreateArgs>(args: SelectSubset<T, ZapCreateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zaps.
     * @param {ZapCreateManyArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapCreateManyArgs>(args?: SelectSubset<T, ZapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zaps and returns the data saved in the database.
     * @param {ZapCreateManyAndReturnArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zap.
     * @param {ZapDeleteArgs} args - Arguments to delete one Zap.
     * @example
     * // Delete one Zap
     * const Zap = await prisma.zap.delete({
     *   where: {
     *     // ... filter to delete one Zap
     *   }
     * })
     * 
     */
    delete<T extends ZapDeleteArgs>(args: SelectSubset<T, ZapDeleteArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zap.
     * @param {ZapUpdateArgs} args - Arguments to update one Zap.
     * @example
     * // Update one Zap
     * const zap = await prisma.zap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapUpdateArgs>(args: SelectSubset<T, ZapUpdateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zaps.
     * @param {ZapDeleteManyArgs} args - Arguments to filter Zaps to delete.
     * @example
     * // Delete a few Zaps
     * const { count } = await prisma.zap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapDeleteManyArgs>(args?: SelectSubset<T, ZapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapUpdateManyArgs>(args: SelectSubset<T, ZapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps and returns the data updated in the database.
     * @param {ZapUpdateManyAndReturnArgs} args - Arguments to update many Zaps.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZapUpdateManyAndReturnArgs>(args: SelectSubset<T, ZapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zap.
     * @param {ZapUpsertArgs} args - Arguments to update or create a Zap.
     * @example
     * // Update or create a Zap
     * const zap = await prisma.zap.upsert({
     *   create: {
     *     // ... data to create a Zap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zap we want to update
     *   }
     * })
     */
    upsert<T extends ZapUpsertArgs>(args: SelectSubset<T, ZapUpsertArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapCountArgs} args - Arguments to filter Zaps to count.
     * @example
     * // Count the number of Zaps
     * const count = await prisma.zap.count({
     *   where: {
     *     // ... the filter for the Zaps we want to count
     *   }
     * })
    **/
    count<T extends ZapCountArgs>(
      args?: Subset<T, ZapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZapAggregateArgs>(args: Subset<T, ZapAggregateArgs>): Prisma.PrismaPromise<GetZapAggregateType<T>>

    /**
     * Group by Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapGroupByArgs} args - Group by arguments.
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
      T extends ZapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapGroupByArgs['orderBy'] }
        : { orderBy?: ZapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zap model
   */
  readonly fields: ZapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends Zap$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Zap$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    action<T extends Zap$actionArgs<ExtArgs> = {}>(args?: Subset<T, Zap$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zapRuns<T extends Zap$zapRunsArgs<ExtArgs> = {}>(args?: Subset<T, Zap$zapRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Zap model
   */
  interface ZapFieldRefs {
    readonly id: FieldRef<"Zap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Zap findUnique
   */
  export type ZapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findUniqueOrThrow
   */
  export type ZapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findFirst
   */
  export type ZapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findFirstOrThrow
   */
  export type ZapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findMany
   */
  export type ZapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zaps to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap create
   */
  export type ZapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to create a Zap.
     */
    data?: XOR<ZapCreateInput, ZapUncheckedCreateInput>
  }

  /**
   * Zap createMany
   */
  export type ZapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zap createManyAndReturn
   */
  export type ZapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zap update
   */
  export type ZapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to update a Zap.
     */
    data: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
    /**
     * Choose, which Zap to update.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap updateMany
   */
  export type ZapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
  }

  /**
   * Zap updateManyAndReturn
   */
  export type ZapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
  }

  /**
   * Zap upsert
   */
  export type ZapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The filter to search for the Zap to update in case it exists.
     */
    where: ZapWhereUniqueInput
    /**
     * In case the Zap found by the `where` argument doesn't exist, create a new Zap with this data.
     */
    create: XOR<ZapCreateInput, ZapUncheckedCreateInput>
    /**
     * In case the Zap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
  }

  /**
   * Zap delete
   */
  export type ZapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter which Zap to delete.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap deleteMany
   */
  export type ZapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zaps to delete
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to delete.
     */
    limit?: number
  }

  /**
   * Zap.trigger
   */
  export type Zap$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Zap.action
   */
  export type Zap$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Zap.zapRuns
   */
  export type Zap$zapRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    where?: zapRunWhereInput
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    cursor?: zapRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * Zap without action
   */
  export type ZapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    zapId: string | null
    triggerId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
    triggerId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    zapId: number
    triggerId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    zapId?: true
    triggerId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    zapId?: true
    triggerId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    zapId?: true
    triggerId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    zapId: string
    triggerId: string
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapId" | "triggerId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      type: Prisma.$AvailableTriggersPayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapId: string
      triggerId: string
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
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
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
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
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AvailableTriggersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggersDefaultArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly zapId: FieldRef<"Trigger", 'String'>
    readonly triggerId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    zapId: string | null
    actionId: string | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
    actionId: string | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    zapId: number
    actionId: number
    _all: number
  }


  export type ActionMinAggregateInputType = {
    id?: true
    zapId?: true
    actionId?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    zapId?: true
    actionId?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    zapId?: true
    actionId?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    zapId: string
    actionId: string
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    actionId?: boolean
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    actionId?: boolean
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    actionId?: boolean
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    zapId?: boolean
    actionId?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapId" | "actionId", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      type: Prisma.$AvailableActionsPayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapId: string
      actionId: string
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
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
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AvailableActionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionsDefaultArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly zapId: FieldRef<"Action", 'String'>
    readonly actionId: FieldRef<"Action", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model AvailableActions
   */

  export type AggregateAvailableActions = {
    _count: AvailableActionsCountAggregateOutputType | null
    _min: AvailableActionsMinAggregateOutputType | null
    _max: AvailableActionsMaxAggregateOutputType | null
  }

  export type AvailableActionsMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableActionsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableActionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to aggregate.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableActions
    **/
    _count?: true | AvailableActionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableActionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableActionsMaxAggregateInputType
  }

  export type GetAvailableActionsAggregateType<T extends AvailableActionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableActions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableActions[P]>
      : GetScalarType<T[P], AggregateAvailableActions[P]>
  }




  export type AvailableActionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableActionsWhereInput
    orderBy?: AvailableActionsOrderByWithAggregationInput | AvailableActionsOrderByWithAggregationInput[]
    by: AvailableActionsScalarFieldEnum[] | AvailableActionsScalarFieldEnum
    having?: AvailableActionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableActionsCountAggregateInputType | true
    _min?: AvailableActionsMinAggregateInputType
    _max?: AvailableActionsMaxAggregateInputType
  }

  export type AvailableActionsGroupByOutputType = {
    id: string
    name: string
    _count: AvailableActionsCountAggregateOutputType | null
    _min: AvailableActionsMinAggregateOutputType | null
    _max: AvailableActionsMaxAggregateOutputType | null
  }

  type GetAvailableActionsGroupByPayload<T extends AvailableActionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableActionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableActionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableActionsGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableActionsGroupByOutputType[P]>
        }
      >
    >


  export type AvailableActionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actions?: boolean | AvailableActions$actionsArgs<ExtArgs>
    _count?: boolean | AvailableActionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableActions"]>

  export type AvailableActionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableActions"]>

  export type AvailableActionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableActions"]>

  export type AvailableActionsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableActionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableActions"]>
  export type AvailableActionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvailableActions$actionsArgs<ExtArgs>
    _count?: boolean | AvailableActionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableActionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableActionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableActionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableActions"
    objects: {
      actions: Prisma.$ActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableActions"]>
    composites: {}
  }

  type AvailableActionsGetPayload<S extends boolean | null | undefined | AvailableActionsDefaultArgs> = $Result.GetResult<Prisma.$AvailableActionsPayload, S>

  type AvailableActionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableActionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableActionsCountAggregateInputType | true
    }

  export interface AvailableActionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableActions'], meta: { name: 'AvailableActions' } }
    /**
     * Find zero or one AvailableActions that matches the filter.
     * @param {AvailableActionsFindUniqueArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableActionsFindUniqueArgs>(args: SelectSubset<T, AvailableActionsFindUniqueArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableActions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableActionsFindUniqueOrThrowArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableActionsFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableActionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindFirstArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableActionsFindFirstArgs>(args?: SelectSubset<T, AvailableActionsFindFirstArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableActions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindFirstOrThrowArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableActionsFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableActionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableActions
     * const availableActions = await prisma.availableActions.findMany()
     * 
     * // Get first 10 AvailableActions
     * const availableActions = await prisma.availableActions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableActionsFindManyArgs>(args?: SelectSubset<T, AvailableActionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableActions.
     * @param {AvailableActionsCreateArgs} args - Arguments to create a AvailableActions.
     * @example
     * // Create one AvailableActions
     * const AvailableActions = await prisma.availableActions.create({
     *   data: {
     *     // ... data to create a AvailableActions
     *   }
     * })
     * 
     */
    create<T extends AvailableActionsCreateArgs>(args: SelectSubset<T, AvailableActionsCreateArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableActions.
     * @param {AvailableActionsCreateManyArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableActions = await prisma.availableActions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableActionsCreateManyArgs>(args?: SelectSubset<T, AvailableActionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableActions and returns the data saved in the database.
     * @param {AvailableActionsCreateManyAndReturnArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableActions = await prisma.availableActions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableActions and only return the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableActionsCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableActionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableActions.
     * @param {AvailableActionsDeleteArgs} args - Arguments to delete one AvailableActions.
     * @example
     * // Delete one AvailableActions
     * const AvailableActions = await prisma.availableActions.delete({
     *   where: {
     *     // ... filter to delete one AvailableActions
     *   }
     * })
     * 
     */
    delete<T extends AvailableActionsDeleteArgs>(args: SelectSubset<T, AvailableActionsDeleteArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableActions.
     * @param {AvailableActionsUpdateArgs} args - Arguments to update one AvailableActions.
     * @example
     * // Update one AvailableActions
     * const availableActions = await prisma.availableActions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableActionsUpdateArgs>(args: SelectSubset<T, AvailableActionsUpdateArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableActions.
     * @param {AvailableActionsDeleteManyArgs} args - Arguments to filter AvailableActions to delete.
     * @example
     * // Delete a few AvailableActions
     * const { count } = await prisma.availableActions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableActionsDeleteManyArgs>(args?: SelectSubset<T, AvailableActionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableActions
     * const availableActions = await prisma.availableActions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableActionsUpdateManyArgs>(args: SelectSubset<T, AvailableActionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions and returns the data updated in the database.
     * @param {AvailableActionsUpdateManyAndReturnArgs} args - Arguments to update many AvailableActions.
     * @example
     * // Update many AvailableActions
     * const availableActions = await prisma.availableActions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableActions and only return the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailableActionsUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableActionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableActions.
     * @param {AvailableActionsUpsertArgs} args - Arguments to update or create a AvailableActions.
     * @example
     * // Update or create a AvailableActions
     * const availableActions = await prisma.availableActions.upsert({
     *   create: {
     *     // ... data to create a AvailableActions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableActions we want to update
     *   }
     * })
     */
    upsert<T extends AvailableActionsUpsertArgs>(args: SelectSubset<T, AvailableActionsUpsertArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsCountArgs} args - Arguments to filter AvailableActions to count.
     * @example
     * // Count the number of AvailableActions
     * const count = await prisma.availableActions.count({
     *   where: {
     *     // ... the filter for the AvailableActions we want to count
     *   }
     * })
    **/
    count<T extends AvailableActionsCountArgs>(
      args?: Subset<T, AvailableActionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableActionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableActionsAggregateArgs>(args: Subset<T, AvailableActionsAggregateArgs>): Prisma.PrismaPromise<GetAvailableActionsAggregateType<T>>

    /**
     * Group by AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsGroupByArgs} args - Group by arguments.
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
      T extends AvailableActionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableActionsGroupByArgs['orderBy'] }
        : { orderBy?: AvailableActionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableActionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableActionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableActions model
   */
  readonly fields: AvailableActionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableActions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableActionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends AvailableActions$actionsArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActions$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AvailableActions model
   */
  interface AvailableActionsFieldRefs {
    readonly id: FieldRef<"AvailableActions", 'String'>
    readonly name: FieldRef<"AvailableActions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableActions findUnique
   */
  export type AvailableActionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions findUniqueOrThrow
   */
  export type AvailableActionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions findFirst
   */
  export type AvailableActionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * AvailableActions findFirstOrThrow
   */
  export type AvailableActionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * AvailableActions findMany
   */
  export type AvailableActionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * AvailableActions create
   */
  export type AvailableActionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableActions.
     */
    data: XOR<AvailableActionsCreateInput, AvailableActionsUncheckedCreateInput>
  }

  /**
   * AvailableActions createMany
   */
  export type AvailableActionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionsCreateManyInput | AvailableActionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableActions createManyAndReturn
   */
  export type AvailableActionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionsCreateManyInput | AvailableActionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableActions update
   */
  export type AvailableActionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableActions.
     */
    data: XOR<AvailableActionsUpdateInput, AvailableActionsUncheckedUpdateInput>
    /**
     * Choose, which AvailableActions to update.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions updateMany
   */
  export type AvailableActionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionsUpdateManyMutationInput, AvailableActionsUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionsWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableActions updateManyAndReturn
   */
  export type AvailableActionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionsUpdateManyMutationInput, AvailableActionsUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionsWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableActions upsert
   */
  export type AvailableActionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableActions to update in case it exists.
     */
    where: AvailableActionsWhereUniqueInput
    /**
     * In case the AvailableActions found by the `where` argument doesn't exist, create a new AvailableActions with this data.
     */
    create: XOR<AvailableActionsCreateInput, AvailableActionsUncheckedCreateInput>
    /**
     * In case the AvailableActions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableActionsUpdateInput, AvailableActionsUncheckedUpdateInput>
  }

  /**
   * AvailableActions delete
   */
  export type AvailableActionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter which AvailableActions to delete.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions deleteMany
   */
  export type AvailableActionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to delete
     */
    where?: AvailableActionsWhereInput
    /**
     * Limit how many AvailableActions to delete.
     */
    limit?: number
  }

  /**
   * AvailableActions.actions
   */
  export type AvailableActions$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * AvailableActions without action
   */
  export type AvailableActionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
  }


  /**
   * Model AvailableTriggers
   */

  export type AggregateAvailableTriggers = {
    _count: AvailableTriggersCountAggregateOutputType | null
    _min: AvailableTriggersMinAggregateOutputType | null
    _max: AvailableTriggersMaxAggregateOutputType | null
  }

  export type AvailableTriggersMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggersMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggersCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableTriggersMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggersMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggersCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableTriggersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to aggregate.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableTriggers
    **/
    _count?: true | AvailableTriggersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableTriggersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableTriggersMaxAggregateInputType
  }

  export type GetAvailableTriggersAggregateType<T extends AvailableTriggersAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableTriggers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTriggers[P]>
      : GetScalarType<T[P], AggregateAvailableTriggers[P]>
  }




  export type AvailableTriggersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTriggersWhereInput
    orderBy?: AvailableTriggersOrderByWithAggregationInput | AvailableTriggersOrderByWithAggregationInput[]
    by: AvailableTriggersScalarFieldEnum[] | AvailableTriggersScalarFieldEnum
    having?: AvailableTriggersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableTriggersCountAggregateInputType | true
    _min?: AvailableTriggersMinAggregateInputType
    _max?: AvailableTriggersMaxAggregateInputType
  }

  export type AvailableTriggersGroupByOutputType = {
    id: string
    name: string
    _count: AvailableTriggersCountAggregateOutputType | null
    _min: AvailableTriggersMinAggregateOutputType | null
    _max: AvailableTriggersMaxAggregateOutputType | null
  }

  type GetAvailableTriggersGroupByPayload<T extends AvailableTriggersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTriggersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableTriggersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableTriggersGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableTriggersGroupByOutputType[P]>
        }
      >
    >


  export type AvailableTriggersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    triggers?: boolean | AvailableTriggers$triggersArgs<ExtArgs>
    _count?: boolean | AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTriggers"]>

  export type AvailableTriggersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTriggers"]>

  export type AvailableTriggersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTriggers"]>

  export type AvailableTriggersSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableTriggersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableTriggers"]>
  export type AvailableTriggersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | AvailableTriggers$triggersArgs<ExtArgs>
    _count?: boolean | AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableTriggersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableTriggersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableTriggersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableTriggers"
    objects: {
      triggers: Prisma.$TriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableTriggers"]>
    composites: {}
  }

  type AvailableTriggersGetPayload<S extends boolean | null | undefined | AvailableTriggersDefaultArgs> = $Result.GetResult<Prisma.$AvailableTriggersPayload, S>

  type AvailableTriggersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableTriggersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableTriggersCountAggregateInputType | true
    }

  export interface AvailableTriggersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableTriggers'], meta: { name: 'AvailableTriggers' } }
    /**
     * Find zero or one AvailableTriggers that matches the filter.
     * @param {AvailableTriggersFindUniqueArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTriggersFindUniqueArgs>(args: SelectSubset<T, AvailableTriggersFindUniqueArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableTriggers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableTriggersFindUniqueOrThrowArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTriggersFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableTriggersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindFirstArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTriggersFindFirstArgs>(args?: SelectSubset<T, AvailableTriggersFindFirstArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTriggers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindFirstOrThrowArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTriggersFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableTriggersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findMany()
     * 
     * // Get first 10 AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableTriggersFindManyArgs>(args?: SelectSubset<T, AvailableTriggersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableTriggers.
     * @param {AvailableTriggersCreateArgs} args - Arguments to create a AvailableTriggers.
     * @example
     * // Create one AvailableTriggers
     * const AvailableTriggers = await prisma.availableTriggers.create({
     *   data: {
     *     // ... data to create a AvailableTriggers
     *   }
     * })
     * 
     */
    create<T extends AvailableTriggersCreateArgs>(args: SelectSubset<T, AvailableTriggersCreateArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableTriggers.
     * @param {AvailableTriggersCreateManyArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableTriggersCreateManyArgs>(args?: SelectSubset<T, AvailableTriggersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableTriggers and returns the data saved in the database.
     * @param {AvailableTriggersCreateManyAndReturnArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableTriggers and only return the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableTriggersCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableTriggersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableTriggers.
     * @param {AvailableTriggersDeleteArgs} args - Arguments to delete one AvailableTriggers.
     * @example
     * // Delete one AvailableTriggers
     * const AvailableTriggers = await prisma.availableTriggers.delete({
     *   where: {
     *     // ... filter to delete one AvailableTriggers
     *   }
     * })
     * 
     */
    delete<T extends AvailableTriggersDeleteArgs>(args: SelectSubset<T, AvailableTriggersDeleteArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableTriggers.
     * @param {AvailableTriggersUpdateArgs} args - Arguments to update one AvailableTriggers.
     * @example
     * // Update one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableTriggersUpdateArgs>(args: SelectSubset<T, AvailableTriggersUpdateArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableTriggers.
     * @param {AvailableTriggersDeleteManyArgs} args - Arguments to filter AvailableTriggers to delete.
     * @example
     * // Delete a few AvailableTriggers
     * const { count } = await prisma.availableTriggers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableTriggersDeleteManyArgs>(args?: SelectSubset<T, AvailableTriggersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableTriggersUpdateManyArgs>(args: SelectSubset<T, AvailableTriggersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers and returns the data updated in the database.
     * @param {AvailableTriggersUpdateManyAndReturnArgs} args - Arguments to update many AvailableTriggers.
     * @example
     * // Update many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableTriggers and only return the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailableTriggersUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableTriggersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableTriggers.
     * @param {AvailableTriggersUpsertArgs} args - Arguments to update or create a AvailableTriggers.
     * @example
     * // Update or create a AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.upsert({
     *   create: {
     *     // ... data to create a AvailableTriggers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTriggersUpsertArgs>(args: SelectSubset<T, AvailableTriggersUpsertArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersCountArgs} args - Arguments to filter AvailableTriggers to count.
     * @example
     * // Count the number of AvailableTriggers
     * const count = await prisma.availableTriggers.count({
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to count
     *   }
     * })
    **/
    count<T extends AvailableTriggersCountArgs>(
      args?: Subset<T, AvailableTriggersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableTriggersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableTriggersAggregateArgs>(args: Subset<T, AvailableTriggersAggregateArgs>): Prisma.PrismaPromise<GetAvailableTriggersAggregateType<T>>

    /**
     * Group by AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersGroupByArgs} args - Group by arguments.
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
      T extends AvailableTriggersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTriggersGroupByArgs['orderBy'] }
        : { orderBy?: AvailableTriggersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableTriggersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableTriggersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableTriggers model
   */
  readonly fields: AvailableTriggersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTriggers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTriggersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    triggers<T extends AvailableTriggers$triggersArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggers$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AvailableTriggers model
   */
  interface AvailableTriggersFieldRefs {
    readonly id: FieldRef<"AvailableTriggers", 'String'>
    readonly name: FieldRef<"AvailableTriggers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableTriggers findUnique
   */
  export type AvailableTriggersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers findUniqueOrThrow
   */
  export type AvailableTriggersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers findFirst
   */
  export type AvailableTriggersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * AvailableTriggers findFirstOrThrow
   */
  export type AvailableTriggersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * AvailableTriggers findMany
   */
  export type AvailableTriggersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * AvailableTriggers create
   */
  export type AvailableTriggersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableTriggers.
     */
    data: XOR<AvailableTriggersCreateInput, AvailableTriggersUncheckedCreateInput>
  }

  /**
   * AvailableTriggers createMany
   */
  export type AvailableTriggersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggersCreateManyInput | AvailableTriggersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTriggers createManyAndReturn
   */
  export type AvailableTriggersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggersCreateManyInput | AvailableTriggersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTriggers update
   */
  export type AvailableTriggersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableTriggers.
     */
    data: XOR<AvailableTriggersUpdateInput, AvailableTriggersUncheckedUpdateInput>
    /**
     * Choose, which AvailableTriggers to update.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers updateMany
   */
  export type AvailableTriggersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggersUpdateManyMutationInput, AvailableTriggersUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggersWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTriggers updateManyAndReturn
   */
  export type AvailableTriggersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggersUpdateManyMutationInput, AvailableTriggersUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggersWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTriggers upsert
   */
  export type AvailableTriggersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableTriggers to update in case it exists.
     */
    where: AvailableTriggersWhereUniqueInput
    /**
     * In case the AvailableTriggers found by the `where` argument doesn't exist, create a new AvailableTriggers with this data.
     */
    create: XOR<AvailableTriggersCreateInput, AvailableTriggersUncheckedCreateInput>
    /**
     * In case the AvailableTriggers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableTriggersUpdateInput, AvailableTriggersUncheckedUpdateInput>
  }

  /**
   * AvailableTriggers delete
   */
  export type AvailableTriggersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter which AvailableTriggers to delete.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers deleteMany
   */
  export type AvailableTriggersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to delete
     */
    where?: AvailableTriggersWhereInput
    /**
     * Limit how many AvailableTriggers to delete.
     */
    limit?: number
  }

  /**
   * AvailableTriggers.triggers
   */
  export type AvailableTriggers$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * AvailableTriggers without action
   */
  export type AvailableTriggersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
  }


  /**
   * Model zapRun
   */

  export type AggregateZapRun = {
    _count: ZapRunCountAggregateOutputType | null
    _min: ZapRunMinAggregateOutputType | null
    _max: ZapRunMaxAggregateOutputType | null
  }

  export type ZapRunMinAggregateOutputType = {
    id: string | null
    zapId: string | null
  }

  export type ZapRunMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
  }

  export type ZapRunCountAggregateOutputType = {
    id: number
    zapId: number
    metadata: number
    _all: number
  }


  export type ZapRunMinAggregateInputType = {
    id?: true
    zapId?: true
  }

  export type ZapRunMaxAggregateInputType = {
    id?: true
    zapId?: true
  }

  export type ZapRunCountAggregateInputType = {
    id?: true
    zapId?: true
    metadata?: true
    _all?: true
  }

  export type ZapRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zapRun to aggregate.
     */
    where?: zapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: zapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned zapRuns
    **/
    _count?: true | ZapRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunMaxAggregateInputType
  }

  export type GetZapRunAggregateType<T extends ZapRunAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRun[P]>
      : GetScalarType<T[P], AggregateZapRun[P]>
  }




  export type zapRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zapRunWhereInput
    orderBy?: zapRunOrderByWithAggregationInput | zapRunOrderByWithAggregationInput[]
    by: ZapRunScalarFieldEnum[] | ZapRunScalarFieldEnum
    having?: zapRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunCountAggregateInputType | true
    _min?: ZapRunMinAggregateInputType
    _max?: ZapRunMaxAggregateInputType
  }

  export type ZapRunGroupByOutputType = {
    id: string
    zapId: string
    metadata: JsonValue
    _count: ZapRunCountAggregateOutputType | null
    _min: ZapRunMinAggregateOutputType | null
    _max: ZapRunMaxAggregateOutputType | null
  }

  type GetZapRunGroupByPayload<T extends zapRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunGroupByOutputType[P]>
        }
      >
    >


  export type zapRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zapRunOutbox?: boolean | zapRun$zapRunOutboxArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type zapRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type zapRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type zapRunSelectScalar = {
    id?: boolean
    zapId?: boolean
    metadata?: boolean
  }

  export type zapRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapId" | "metadata", ExtArgs["result"]["zapRun"]>
  export type zapRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zapRunOutbox?: boolean | zapRun$zapRunOutboxArgs<ExtArgs>
  }
  export type zapRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type zapRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $zapRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "zapRun"
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>
      zapRunOutbox: Prisma.$zapRunOutboxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapId: string
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["zapRun"]>
    composites: {}
  }

  type zapRunGetPayload<S extends boolean | null | undefined | zapRunDefaultArgs> = $Result.GetResult<Prisma.$zapRunPayload, S>

  type zapRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<zapRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunCountAggregateInputType | true
    }

  export interface zapRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['zapRun'], meta: { name: 'zapRun' } }
    /**
     * Find zero or one ZapRun that matches the filter.
     * @param {zapRunFindUniqueArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zapRunFindUniqueArgs>(args: SelectSubset<T, zapRunFindUniqueArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zapRunFindUniqueOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zapRunFindUniqueOrThrowArgs>(args: SelectSubset<T, zapRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunFindFirstArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zapRunFindFirstArgs>(args?: SelectSubset<T, zapRunFindFirstArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunFindFirstOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zapRunFindFirstOrThrowArgs>(args?: SelectSubset<T, zapRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRuns
     * const zapRuns = await prisma.zapRun.findMany()
     * 
     * // Get first 10 ZapRuns
     * const zapRuns = await prisma.zapRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends zapRunFindManyArgs>(args?: SelectSubset<T, zapRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRun.
     * @param {zapRunCreateArgs} args - Arguments to create a ZapRun.
     * @example
     * // Create one ZapRun
     * const ZapRun = await prisma.zapRun.create({
     *   data: {
     *     // ... data to create a ZapRun
     *   }
     * })
     * 
     */
    create<T extends zapRunCreateArgs>(args: SelectSubset<T, zapRunCreateArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRuns.
     * @param {zapRunCreateManyArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends zapRunCreateManyArgs>(args?: SelectSubset<T, zapRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRuns and returns the data saved in the database.
     * @param {zapRunCreateManyAndReturnArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends zapRunCreateManyAndReturnArgs>(args?: SelectSubset<T, zapRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRun.
     * @param {zapRunDeleteArgs} args - Arguments to delete one ZapRun.
     * @example
     * // Delete one ZapRun
     * const ZapRun = await prisma.zapRun.delete({
     *   where: {
     *     // ... filter to delete one ZapRun
     *   }
     * })
     * 
     */
    delete<T extends zapRunDeleteArgs>(args: SelectSubset<T, zapRunDeleteArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRun.
     * @param {zapRunUpdateArgs} args - Arguments to update one ZapRun.
     * @example
     * // Update one ZapRun
     * const zapRun = await prisma.zapRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends zapRunUpdateArgs>(args: SelectSubset<T, zapRunUpdateArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRuns.
     * @param {zapRunDeleteManyArgs} args - Arguments to filter ZapRuns to delete.
     * @example
     * // Delete a few ZapRuns
     * const { count } = await prisma.zapRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends zapRunDeleteManyArgs>(args?: SelectSubset<T, zapRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends zapRunUpdateManyArgs>(args: SelectSubset<T, zapRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRuns and returns the data updated in the database.
     * @param {zapRunUpdateManyAndReturnArgs} args - Arguments to update many ZapRuns.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends zapRunUpdateManyAndReturnArgs>(args: SelectSubset<T, zapRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZapRun.
     * @param {zapRunUpsertArgs} args - Arguments to update or create a ZapRun.
     * @example
     * // Update or create a ZapRun
     * const zapRun = await prisma.zapRun.upsert({
     *   create: {
     *     // ... data to create a ZapRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRun we want to update
     *   }
     * })
     */
    upsert<T extends zapRunUpsertArgs>(args: SelectSubset<T, zapRunUpsertArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunCountArgs} args - Arguments to filter ZapRuns to count.
     * @example
     * // Count the number of ZapRuns
     * const count = await prisma.zapRun.count({
     *   where: {
     *     // ... the filter for the ZapRuns we want to count
     *   }
     * })
    **/
    count<T extends zapRunCountArgs>(
      args?: Subset<T, zapRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZapRunAggregateArgs>(args: Subset<T, ZapRunAggregateArgs>): Prisma.PrismaPromise<GetZapRunAggregateType<T>>

    /**
     * Group by ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunGroupByArgs} args - Group by arguments.
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
      T extends zapRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: zapRunGroupByArgs['orderBy'] }
        : { orderBy?: zapRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, zapRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the zapRun model
   */
  readonly fields: zapRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for zapRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__zapRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zapRunOutbox<T extends zapRun$zapRunOutboxArgs<ExtArgs> = {}>(args?: Subset<T, zapRun$zapRunOutboxArgs<ExtArgs>>): Prisma__zapRunOutboxClient<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the zapRun model
   */
  interface zapRunFieldRefs {
    readonly id: FieldRef<"zapRun", 'String'>
    readonly zapId: FieldRef<"zapRun", 'String'>
    readonly metadata: FieldRef<"zapRun", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * zapRun findUnique
   */
  export type zapRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRun to fetch.
     */
    where: zapRunWhereUniqueInput
  }

  /**
   * zapRun findUniqueOrThrow
   */
  export type zapRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRun to fetch.
     */
    where: zapRunWhereUniqueInput
  }

  /**
   * zapRun findFirst
   */
  export type zapRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRun to fetch.
     */
    where?: zapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zapRuns.
     */
    cursor?: zapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * zapRun findFirstOrThrow
   */
  export type zapRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRun to fetch.
     */
    where?: zapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zapRuns.
     */
    cursor?: zapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * zapRun findMany
   */
  export type zapRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRuns to fetch.
     */
    where?: zapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing zapRuns.
     */
    cursor?: zapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRuns.
     */
    skip?: number
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * zapRun create
   */
  export type zapRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * The data needed to create a zapRun.
     */
    data: XOR<zapRunCreateInput, zapRunUncheckedCreateInput>
  }

  /**
   * zapRun createMany
   */
  export type zapRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many zapRuns.
     */
    data: zapRunCreateManyInput | zapRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zapRun createManyAndReturn
   */
  export type zapRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * The data used to create many zapRuns.
     */
    data: zapRunCreateManyInput | zapRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * zapRun update
   */
  export type zapRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * The data needed to update a zapRun.
     */
    data: XOR<zapRunUpdateInput, zapRunUncheckedUpdateInput>
    /**
     * Choose, which zapRun to update.
     */
    where: zapRunWhereUniqueInput
  }

  /**
   * zapRun updateMany
   */
  export type zapRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update zapRuns.
     */
    data: XOR<zapRunUpdateManyMutationInput, zapRunUncheckedUpdateManyInput>
    /**
     * Filter which zapRuns to update
     */
    where?: zapRunWhereInput
    /**
     * Limit how many zapRuns to update.
     */
    limit?: number
  }

  /**
   * zapRun updateManyAndReturn
   */
  export type zapRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * The data used to update zapRuns.
     */
    data: XOR<zapRunUpdateManyMutationInput, zapRunUncheckedUpdateManyInput>
    /**
     * Filter which zapRuns to update
     */
    where?: zapRunWhereInput
    /**
     * Limit how many zapRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * zapRun upsert
   */
  export type zapRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * The filter to search for the zapRun to update in case it exists.
     */
    where: zapRunWhereUniqueInput
    /**
     * In case the zapRun found by the `where` argument doesn't exist, create a new zapRun with this data.
     */
    create: XOR<zapRunCreateInput, zapRunUncheckedCreateInput>
    /**
     * In case the zapRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<zapRunUpdateInput, zapRunUncheckedUpdateInput>
  }

  /**
   * zapRun delete
   */
  export type zapRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter which zapRun to delete.
     */
    where: zapRunWhereUniqueInput
  }

  /**
   * zapRun deleteMany
   */
  export type zapRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zapRuns to delete
     */
    where?: zapRunWhereInput
    /**
     * Limit how many zapRuns to delete.
     */
    limit?: number
  }

  /**
   * zapRun.zapRunOutbox
   */
  export type zapRun$zapRunOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    where?: zapRunOutboxWhereInput
  }

  /**
   * zapRun without action
   */
  export type zapRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
  }


  /**
   * Model zapRunOutbox
   */

  export type AggregateZapRunOutbox = {
    _count: ZapRunOutboxCountAggregateOutputType | null
    _min: ZapRunOutboxMinAggregateOutputType | null
    _max: ZapRunOutboxMaxAggregateOutputType | null
  }

  export type ZapRunOutboxMinAggregateOutputType = {
    id: string | null
    zapRunId: string | null
  }

  export type ZapRunOutboxMaxAggregateOutputType = {
    id: string | null
    zapRunId: string | null
  }

  export type ZapRunOutboxCountAggregateOutputType = {
    id: number
    zapRunId: number
    _all: number
  }


  export type ZapRunOutboxMinAggregateInputType = {
    id?: true
    zapRunId?: true
  }

  export type ZapRunOutboxMaxAggregateInputType = {
    id?: true
    zapRunId?: true
  }

  export type ZapRunOutboxCountAggregateInputType = {
    id?: true
    zapRunId?: true
    _all?: true
  }

  export type ZapRunOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zapRunOutbox to aggregate.
     */
    where?: zapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRunOutboxes to fetch.
     */
    orderBy?: zapRunOutboxOrderByWithRelationInput | zapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: zapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned zapRunOutboxes
    **/
    _count?: true | ZapRunOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunOutboxMaxAggregateInputType
  }

  export type GetZapRunOutboxAggregateType<T extends ZapRunOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRunOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRunOutbox[P]>
      : GetScalarType<T[P], AggregateZapRunOutbox[P]>
  }




  export type zapRunOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zapRunOutboxWhereInput
    orderBy?: zapRunOutboxOrderByWithAggregationInput | zapRunOutboxOrderByWithAggregationInput[]
    by: ZapRunOutboxScalarFieldEnum[] | ZapRunOutboxScalarFieldEnum
    having?: zapRunOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunOutboxCountAggregateInputType | true
    _min?: ZapRunOutboxMinAggregateInputType
    _max?: ZapRunOutboxMaxAggregateInputType
  }

  export type ZapRunOutboxGroupByOutputType = {
    id: string
    zapRunId: string
    _count: ZapRunOutboxCountAggregateOutputType | null
    _min: ZapRunOutboxMinAggregateOutputType | null
    _max: ZapRunOutboxMaxAggregateOutputType | null
  }

  type GetZapRunOutboxGroupByPayload<T extends zapRunOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]>
        }
      >
    >


  export type zapRunOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutbox"]>

  export type zapRunOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutbox"]>

  export type zapRunOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutbox"]>

  export type zapRunOutboxSelectScalar = {
    id?: boolean
    zapRunId?: boolean
  }

  export type zapRunOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapRunId", ExtArgs["result"]["zapRunOutbox"]>
  export type zapRunOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
  }
  export type zapRunOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
  }
  export type zapRunOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
  }

  export type $zapRunOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "zapRunOutbox"
    objects: {
      zapRun: Prisma.$zapRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapRunId: string
    }, ExtArgs["result"]["zapRunOutbox"]>
    composites: {}
  }

  type zapRunOutboxGetPayload<S extends boolean | null | undefined | zapRunOutboxDefaultArgs> = $Result.GetResult<Prisma.$zapRunOutboxPayload, S>

  type zapRunOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<zapRunOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunOutboxCountAggregateInputType | true
    }

  export interface zapRunOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['zapRunOutbox'], meta: { name: 'zapRunOutbox' } }
    /**
     * Find zero or one ZapRunOutbox that matches the filter.
     * @param {zapRunOutboxFindUniqueArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zapRunOutboxFindUniqueArgs>(args: SelectSubset<T, zapRunOutboxFindUniqueArgs<ExtArgs>>): Prisma__zapRunOutboxClient<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRunOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zapRunOutboxFindUniqueOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zapRunOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, zapRunOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__zapRunOutboxClient<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxFindFirstArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zapRunOutboxFindFirstArgs>(args?: SelectSubset<T, zapRunOutboxFindFirstArgs<ExtArgs>>): Prisma__zapRunOutboxClient<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxFindFirstOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zapRunOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, zapRunOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__zapRunOutboxClient<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRunOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany()
     * 
     * // Get first 10 ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends zapRunOutboxFindManyArgs>(args?: SelectSubset<T, zapRunOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRunOutbox.
     * @param {zapRunOutboxCreateArgs} args - Arguments to create a ZapRunOutbox.
     * @example
     * // Create one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.create({
     *   data: {
     *     // ... data to create a ZapRunOutbox
     *   }
     * })
     * 
     */
    create<T extends zapRunOutboxCreateArgs>(args: SelectSubset<T, zapRunOutboxCreateArgs<ExtArgs>>): Prisma__zapRunOutboxClient<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRunOutboxes.
     * @param {zapRunOutboxCreateManyArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends zapRunOutboxCreateManyArgs>(args?: SelectSubset<T, zapRunOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRunOutboxes and returns the data saved in the database.
     * @param {zapRunOutboxCreateManyAndReturnArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRunOutboxes and only return the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends zapRunOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, zapRunOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRunOutbox.
     * @param {zapRunOutboxDeleteArgs} args - Arguments to delete one ZapRunOutbox.
     * @example
     * // Delete one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.delete({
     *   where: {
     *     // ... filter to delete one ZapRunOutbox
     *   }
     * })
     * 
     */
    delete<T extends zapRunOutboxDeleteArgs>(args: SelectSubset<T, zapRunOutboxDeleteArgs<ExtArgs>>): Prisma__zapRunOutboxClient<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRunOutbox.
     * @param {zapRunOutboxUpdateArgs} args - Arguments to update one ZapRunOutbox.
     * @example
     * // Update one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends zapRunOutboxUpdateArgs>(args: SelectSubset<T, zapRunOutboxUpdateArgs<ExtArgs>>): Prisma__zapRunOutboxClient<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRunOutboxes.
     * @param {zapRunOutboxDeleteManyArgs} args - Arguments to filter ZapRunOutboxes to delete.
     * @example
     * // Delete a few ZapRunOutboxes
     * const { count } = await prisma.zapRunOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends zapRunOutboxDeleteManyArgs>(args?: SelectSubset<T, zapRunOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends zapRunOutboxUpdateManyArgs>(args: SelectSubset<T, zapRunOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRunOutboxes and returns the data updated in the database.
     * @param {zapRunOutboxUpdateManyAndReturnArgs} args - Arguments to update many ZapRunOutboxes.
     * @example
     * // Update many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZapRunOutboxes and only return the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.updateManyAndReturn({
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
    updateManyAndReturn<T extends zapRunOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, zapRunOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZapRunOutbox.
     * @param {zapRunOutboxUpsertArgs} args - Arguments to update or create a ZapRunOutbox.
     * @example
     * // Update or create a ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.upsert({
     *   create: {
     *     // ... data to create a ZapRunOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRunOutbox we want to update
     *   }
     * })
     */
    upsert<T extends zapRunOutboxUpsertArgs>(args: SelectSubset<T, zapRunOutboxUpsertArgs<ExtArgs>>): Prisma__zapRunOutboxClient<$Result.GetResult<Prisma.$zapRunOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxCountArgs} args - Arguments to filter ZapRunOutboxes to count.
     * @example
     * // Count the number of ZapRunOutboxes
     * const count = await prisma.zapRunOutbox.count({
     *   where: {
     *     // ... the filter for the ZapRunOutboxes we want to count
     *   }
     * })
    **/
    count<T extends zapRunOutboxCountArgs>(
      args?: Subset<T, zapRunOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZapRunOutboxAggregateArgs>(args: Subset<T, ZapRunOutboxAggregateArgs>): Prisma.PrismaPromise<GetZapRunOutboxAggregateType<T>>

    /**
     * Group by ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunOutboxGroupByArgs} args - Group by arguments.
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
      T extends zapRunOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: zapRunOutboxGroupByArgs['orderBy'] }
        : { orderBy?: zapRunOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, zapRunOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the zapRunOutbox model
   */
  readonly fields: zapRunOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for zapRunOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__zapRunOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zapRun<T extends zapRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, zapRunDefaultArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the zapRunOutbox model
   */
  interface zapRunOutboxFieldRefs {
    readonly id: FieldRef<"zapRunOutbox", 'String'>
    readonly zapRunId: FieldRef<"zapRunOutbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * zapRunOutbox findUnique
   */
  export type zapRunOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunOutbox to fetch.
     */
    where: zapRunOutboxWhereUniqueInput
  }

  /**
   * zapRunOutbox findUniqueOrThrow
   */
  export type zapRunOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunOutbox to fetch.
     */
    where: zapRunOutboxWhereUniqueInput
  }

  /**
   * zapRunOutbox findFirst
   */
  export type zapRunOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunOutbox to fetch.
     */
    where?: zapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRunOutboxes to fetch.
     */
    orderBy?: zapRunOutboxOrderByWithRelationInput | zapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zapRunOutboxes.
     */
    cursor?: zapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRunOutboxes.
     */
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[]
  }

  /**
   * zapRunOutbox findFirstOrThrow
   */
  export type zapRunOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunOutbox to fetch.
     */
    where?: zapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRunOutboxes to fetch.
     */
    orderBy?: zapRunOutboxOrderByWithRelationInput | zapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zapRunOutboxes.
     */
    cursor?: zapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRunOutboxes.
     */
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[]
  }

  /**
   * zapRunOutbox findMany
   */
  export type zapRunOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunOutboxes to fetch.
     */
    where?: zapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRunOutboxes to fetch.
     */
    orderBy?: zapRunOutboxOrderByWithRelationInput | zapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing zapRunOutboxes.
     */
    cursor?: zapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRunOutboxes.
     */
    skip?: number
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[]
  }

  /**
   * zapRunOutbox create
   */
  export type zapRunOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a zapRunOutbox.
     */
    data: XOR<zapRunOutboxCreateInput, zapRunOutboxUncheckedCreateInput>
  }

  /**
   * zapRunOutbox createMany
   */
  export type zapRunOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many zapRunOutboxes.
     */
    data: zapRunOutboxCreateManyInput | zapRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zapRunOutbox createManyAndReturn
   */
  export type zapRunOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many zapRunOutboxes.
     */
    data: zapRunOutboxCreateManyInput | zapRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * zapRunOutbox update
   */
  export type zapRunOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a zapRunOutbox.
     */
    data: XOR<zapRunOutboxUpdateInput, zapRunOutboxUncheckedUpdateInput>
    /**
     * Choose, which zapRunOutbox to update.
     */
    where: zapRunOutboxWhereUniqueInput
  }

  /**
   * zapRunOutbox updateMany
   */
  export type zapRunOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update zapRunOutboxes.
     */
    data: XOR<zapRunOutboxUpdateManyMutationInput, zapRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which zapRunOutboxes to update
     */
    where?: zapRunOutboxWhereInput
    /**
     * Limit how many zapRunOutboxes to update.
     */
    limit?: number
  }

  /**
   * zapRunOutbox updateManyAndReturn
   */
  export type zapRunOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to update zapRunOutboxes.
     */
    data: XOR<zapRunOutboxUpdateManyMutationInput, zapRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which zapRunOutboxes to update
     */
    where?: zapRunOutboxWhereInput
    /**
     * Limit how many zapRunOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * zapRunOutbox upsert
   */
  export type zapRunOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the zapRunOutbox to update in case it exists.
     */
    where: zapRunOutboxWhereUniqueInput
    /**
     * In case the zapRunOutbox found by the `where` argument doesn't exist, create a new zapRunOutbox with this data.
     */
    create: XOR<zapRunOutboxCreateInput, zapRunOutboxUncheckedCreateInput>
    /**
     * In case the zapRunOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<zapRunOutboxUpdateInput, zapRunOutboxUncheckedUpdateInput>
  }

  /**
   * zapRunOutbox delete
   */
  export type zapRunOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter which zapRunOutbox to delete.
     */
    where: zapRunOutboxWhereUniqueInput
  }

  /**
   * zapRunOutbox deleteMany
   */
  export type zapRunOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zapRunOutboxes to delete
     */
    where?: zapRunOutboxWhereInput
    /**
     * Limit how many zapRunOutboxes to delete.
     */
    limit?: number
  }

  /**
   * zapRunOutbox without action
   */
  export type zapRunOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunOutbox
     */
    select?: zapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunOutbox
     */
    omit?: zapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunOutboxInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ZapScalarFieldEnum: {
    id: 'id'
  };

  export type ZapScalarFieldEnum = (typeof ZapScalarFieldEnum)[keyof typeof ZapScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    zapId: 'zapId',
    triggerId: 'triggerId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    zapId: 'zapId',
    actionId: 'actionId'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const AvailableActionsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableActionsScalarFieldEnum = (typeof AvailableActionsScalarFieldEnum)[keyof typeof AvailableActionsScalarFieldEnum]


  export const AvailableTriggersScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableTriggersScalarFieldEnum = (typeof AvailableTriggersScalarFieldEnum)[keyof typeof AvailableTriggersScalarFieldEnum]


  export const ZapRunScalarFieldEnum: {
    id: 'id',
    zapId: 'zapId',
    metadata: 'metadata'
  };

  export type ZapRunScalarFieldEnum = (typeof ZapRunScalarFieldEnum)[keyof typeof ZapRunScalarFieldEnum]


  export const ZapRunOutboxScalarFieldEnum: {
    id: 'id',
    zapRunId: 'zapRunId'
  };

  export type ZapRunOutboxScalarFieldEnum = (typeof ZapRunOutboxScalarFieldEnum)[keyof typeof ZapRunOutboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ZapWhereInput = {
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    id?: StringFilter<"Zap"> | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    zapRuns?: ZapRunListRelationFilter
  }

  export type ZapOrderByWithRelationInput = {
    id?: SortOrder
    trigger?: TriggerOrderByWithRelationInput
    action?: ActionOrderByRelationAggregateInput
    zapRuns?: zapRunOrderByRelationAggregateInput
  }

  export type ZapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    zapRuns?: ZapRunListRelationFilter
  }, "id">

  export type ZapOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ZapCountOrderByAggregateInput
    _max?: ZapMaxOrderByAggregateInput
    _min?: ZapMinOrderByAggregateInput
  }

  export type ZapScalarWhereWithAggregatesInput = {
    AND?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    OR?: ZapScalarWhereWithAggregatesInput[]
    NOT?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zap"> | string
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
    type?: XOR<AvailableTriggersScalarRelationFilter, AvailableTriggersWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
    type?: AvailableTriggersOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    triggerId?: StringFilter<"Trigger"> | string
    type?: XOR<AvailableTriggersScalarRelationFilter, AvailableTriggersWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }, "id" | "zapId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    zapId?: StringWithAggregatesFilter<"Trigger"> | string
    triggerId?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    zapId?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    type?: XOR<AvailableActionsScalarRelationFilter, AvailableActionsWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    zapId?: SortOrder
    actionId?: SortOrder
    type?: AvailableActionsOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    zapId?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    type?: XOR<AvailableActionsScalarRelationFilter, AvailableActionsWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    zapId?: SortOrder
    actionId?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    zapId?: StringWithAggregatesFilter<"Action"> | string
    actionId?: StringWithAggregatesFilter<"Action"> | string
  }

  export type AvailableActionsWhereInput = {
    AND?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    OR?: AvailableActionsWhereInput[]
    NOT?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    id?: StringFilter<"AvailableActions"> | string
    name?: StringFilter<"AvailableActions"> | string
    actions?: ActionListRelationFilter
  }

  export type AvailableActionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    actions?: ActionOrderByRelationAggregateInput
  }

  export type AvailableActionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    OR?: AvailableActionsWhereInput[]
    NOT?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    name?: StringFilter<"AvailableActions"> | string
    actions?: ActionListRelationFilter
  }, "id">

  export type AvailableActionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableActionsCountOrderByAggregateInput
    _max?: AvailableActionsMaxOrderByAggregateInput
    _min?: AvailableActionsMinOrderByAggregateInput
  }

  export type AvailableActionsScalarWhereWithAggregatesInput = {
    AND?: AvailableActionsScalarWhereWithAggregatesInput | AvailableActionsScalarWhereWithAggregatesInput[]
    OR?: AvailableActionsScalarWhereWithAggregatesInput[]
    NOT?: AvailableActionsScalarWhereWithAggregatesInput | AvailableActionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableActions"> | string
    name?: StringWithAggregatesFilter<"AvailableActions"> | string
  }

  export type AvailableTriggersWhereInput = {
    AND?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    OR?: AvailableTriggersWhereInput[]
    NOT?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    id?: StringFilter<"AvailableTriggers"> | string
    name?: StringFilter<"AvailableTriggers"> | string
    triggers?: TriggerListRelationFilter
  }

  export type AvailableTriggersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    triggers?: TriggerOrderByRelationAggregateInput
  }

  export type AvailableTriggersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    OR?: AvailableTriggersWhereInput[]
    NOT?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    name?: StringFilter<"AvailableTriggers"> | string
    triggers?: TriggerListRelationFilter
  }, "id">

  export type AvailableTriggersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableTriggersCountOrderByAggregateInput
    _max?: AvailableTriggersMaxOrderByAggregateInput
    _min?: AvailableTriggersMinOrderByAggregateInput
  }

  export type AvailableTriggersScalarWhereWithAggregatesInput = {
    AND?: AvailableTriggersScalarWhereWithAggregatesInput | AvailableTriggersScalarWhereWithAggregatesInput[]
    OR?: AvailableTriggersScalarWhereWithAggregatesInput[]
    NOT?: AvailableTriggersScalarWhereWithAggregatesInput | AvailableTriggersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableTriggers"> | string
    name?: StringWithAggregatesFilter<"AvailableTriggers"> | string
  }

  export type zapRunWhereInput = {
    AND?: zapRunWhereInput | zapRunWhereInput[]
    OR?: zapRunWhereInput[]
    NOT?: zapRunWhereInput | zapRunWhereInput[]
    id?: StringFilter<"zapRun"> | string
    zapId?: StringFilter<"zapRun"> | string
    metadata?: JsonFilter<"zapRun">
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zapRunOutbox?: XOR<ZapRunOutboxNullableScalarRelationFilter, zapRunOutboxWhereInput> | null
  }

  export type zapRunOrderByWithRelationInput = {
    id?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
    zap?: ZapOrderByWithRelationInput
    zapRunOutbox?: zapRunOutboxOrderByWithRelationInput
  }

  export type zapRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: zapRunWhereInput | zapRunWhereInput[]
    OR?: zapRunWhereInput[]
    NOT?: zapRunWhereInput | zapRunWhereInput[]
    zapId?: StringFilter<"zapRun"> | string
    metadata?: JsonFilter<"zapRun">
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zapRunOutbox?: XOR<ZapRunOutboxNullableScalarRelationFilter, zapRunOutboxWhereInput> | null
  }, "id">

  export type zapRunOrderByWithAggregationInput = {
    id?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
    _count?: zapRunCountOrderByAggregateInput
    _max?: zapRunMaxOrderByAggregateInput
    _min?: zapRunMinOrderByAggregateInput
  }

  export type zapRunScalarWhereWithAggregatesInput = {
    AND?: zapRunScalarWhereWithAggregatesInput | zapRunScalarWhereWithAggregatesInput[]
    OR?: zapRunScalarWhereWithAggregatesInput[]
    NOT?: zapRunScalarWhereWithAggregatesInput | zapRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"zapRun"> | string
    zapId?: StringWithAggregatesFilter<"zapRun"> | string
    metadata?: JsonWithAggregatesFilter<"zapRun">
  }

  export type zapRunOutboxWhereInput = {
    AND?: zapRunOutboxWhereInput | zapRunOutboxWhereInput[]
    OR?: zapRunOutboxWhereInput[]
    NOT?: zapRunOutboxWhereInput | zapRunOutboxWhereInput[]
    id?: StringFilter<"zapRunOutbox"> | string
    zapRunId?: StringFilter<"zapRunOutbox"> | string
    zapRun?: XOR<ZapRunScalarRelationFilter, zapRunWhereInput>
  }

  export type zapRunOutboxOrderByWithRelationInput = {
    id?: SortOrder
    zapRunId?: SortOrder
    zapRun?: zapRunOrderByWithRelationInput
  }

  export type zapRunOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapRunId?: string
    AND?: zapRunOutboxWhereInput | zapRunOutboxWhereInput[]
    OR?: zapRunOutboxWhereInput[]
    NOT?: zapRunOutboxWhereInput | zapRunOutboxWhereInput[]
    zapRun?: XOR<ZapRunScalarRelationFilter, zapRunWhereInput>
  }, "id" | "zapRunId">

  export type zapRunOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    zapRunId?: SortOrder
    _count?: zapRunOutboxCountOrderByAggregateInput
    _max?: zapRunOutboxMaxOrderByAggregateInput
    _min?: zapRunOutboxMinOrderByAggregateInput
  }

  export type zapRunOutboxScalarWhereWithAggregatesInput = {
    AND?: zapRunOutboxScalarWhereWithAggregatesInput | zapRunOutboxScalarWhereWithAggregatesInput[]
    OR?: zapRunOutboxScalarWhereWithAggregatesInput[]
    NOT?: zapRunOutboxScalarWhereWithAggregatesInput | zapRunOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"zapRunOutbox"> | string
    zapRunId?: StringWithAggregatesFilter<"zapRunOutbox"> | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ZapCreateInput = {
    id?: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    action?: ActionCreateNestedManyWithoutZapInput
    zapRuns?: zapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateInput = {
    id?: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
    zapRuns?: zapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    action?: ActionUpdateManyWithoutZapNestedInput
    zapRuns?: zapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
    zapRuns?: zapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapCreateManyInput = {
    id?: string
  }

  export type ZapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateInput = {
    id?: string
    type: AvailableTriggersCreateNestedOneWithoutTriggersInput
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    zapId: string
    triggerId: string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    zapId: string
    triggerId: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateInput = {
    id?: string
    type: AvailableActionsCreateNestedOneWithoutActionsInput
    zap: ZapCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    zapId: string
    actionId: string
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableActionsUpdateOneRequiredWithoutActionsNestedInput
    zap?: ZapUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyInput = {
    id?: string
    zapId: string
    actionId: string
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionsCreateInput = {
    id?: string
    name: string
    actions?: ActionCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionsUncheckedCreateInput = {
    id?: string
    name: string
    actions?: ActionUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    actions?: ActionUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    actions?: ActionUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionsCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableActionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggersCreateInput = {
    id?: string
    name: string
    triggers?: TriggerCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggersUncheckedCreateInput = {
    id?: string
    name: string
    triggers?: TriggerUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggersCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableTriggersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type zapRunCreateInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZapRunsInput
    zapRunOutbox?: zapRunOutboxCreateNestedOneWithoutZapRunInput
  }

  export type zapRunUncheckedCreateInput = {
    id?: string
    zapId: string
    metadata: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: zapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput
  }

  export type zapRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput
    zapRunOutbox?: zapRunOutboxUpdateOneWithoutZapRunNestedInput
  }

  export type zapRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: zapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput
  }

  export type zapRunCreateManyInput = {
    id?: string
    zapId: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type zapRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type zapRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type zapRunOutboxCreateInput = {
    id?: string
    zapRun: zapRunCreateNestedOneWithoutZapRunOutboxInput
  }

  export type zapRunOutboxUncheckedCreateInput = {
    id?: string
    zapRunId: string
  }

  export type zapRunOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRun?: zapRunUpdateOneRequiredWithoutZapRunOutboxNestedInput
  }

  export type zapRunOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRunId?: StringFieldUpdateOperationsInput | string
  }

  export type zapRunOutboxCreateManyInput = {
    id?: string
    zapRunId: string
  }

  export type zapRunOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type zapRunOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRunId?: StringFieldUpdateOperationsInput | string
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type ZapRunListRelationFilter = {
    every?: zapRunWhereInput
    some?: zapRunWhereInput
    none?: zapRunWhereInput
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type zapRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ZapMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ZapMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AvailableTriggersScalarRelationFilter = {
    is?: AvailableTriggersWhereInput
    isNot?: AvailableTriggersWhereInput
  }

  export type ZapScalarRelationFilter = {
    is?: ZapWhereInput
    isNot?: ZapWhereInput
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
  }

  export type AvailableActionsScalarRelationFilter = {
    is?: AvailableActionsWhereInput
    isNot?: AvailableActionsWhereInput
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    actionId?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    actionId?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    actionId?: SortOrder
  }

  export type AvailableActionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableTriggersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ZapRunOutboxNullableScalarRelationFilter = {
    is?: zapRunOutboxWhereInput | null
    isNot?: zapRunOutboxWhereInput | null
  }

  export type zapRunCountOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
  }

  export type zapRunMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
  }

  export type zapRunMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ZapRunScalarRelationFilter = {
    is?: zapRunWhereInput
    isNot?: zapRunWhereInput
  }

  export type zapRunOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type zapRunOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type zapRunOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriggerCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type zapRunCreateNestedManyWithoutZapInput = {
    create?: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput> | zapRunCreateWithoutZapInput[] | zapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: zapRunCreateOrConnectWithoutZapInput | zapRunCreateOrConnectWithoutZapInput[]
    createMany?: zapRunCreateManyZapInputEnvelope
    connect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type zapRunUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput> | zapRunCreateWithoutZapInput[] | zapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: zapRunCreateOrConnectWithoutZapInput | zapRunCreateOrConnectWithoutZapInput[]
    createMany?: zapRunCreateManyZapInputEnvelope
    connect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
  }

  export type TriggerUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type zapRunUpdateManyWithoutZapNestedInput = {
    create?: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput> | zapRunCreateWithoutZapInput[] | zapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: zapRunCreateOrConnectWithoutZapInput | zapRunCreateOrConnectWithoutZapInput[]
    upsert?: zapRunUpsertWithWhereUniqueWithoutZapInput | zapRunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: zapRunCreateManyZapInputEnvelope
    set?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    disconnect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    delete?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    connect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    update?: zapRunUpdateWithWhereUniqueWithoutZapInput | zapRunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: zapRunUpdateManyWithWhereWithoutZapInput | zapRunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: zapRunScalarWhereInput | zapRunScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type zapRunUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput> | zapRunCreateWithoutZapInput[] | zapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: zapRunCreateOrConnectWithoutZapInput | zapRunCreateOrConnectWithoutZapInput[]
    upsert?: zapRunUpsertWithWhereUniqueWithoutZapInput | zapRunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: zapRunCreateManyZapInputEnvelope
    set?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    disconnect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    delete?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    connect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    update?: zapRunUpdateWithWhereUniqueWithoutZapInput | zapRunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: zapRunUpdateManyWithWhereWithoutZapInput | zapRunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: zapRunScalarWhereInput | zapRunScalarWhereInput[]
  }

  export type AvailableTriggersCreateNestedOneWithoutTriggersInput = {
    create?: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTriggersInput
    connect?: AvailableTriggersWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutTriggerInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    connect?: ZapWhereUniqueInput
  }

  export type AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTriggersInput
    upsert?: AvailableTriggersUpsertWithoutTriggersInput
    connect?: AvailableTriggersWhereUniqueInput
    update?: XOR<XOR<AvailableTriggersUpdateToOneWithWhereWithoutTriggersInput, AvailableTriggersUpdateWithoutTriggersInput>, AvailableTriggersUncheckedUpdateWithoutTriggersInput>
  }

  export type ZapUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    upsert?: ZapUpsertWithoutTriggerInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutTriggerInput, ZapUpdateWithoutTriggerInput>, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type AvailableActionsCreateNestedOneWithoutActionsInput = {
    create?: XOR<AvailableActionsCreateWithoutActionsInput, AvailableActionsUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionsInput
    connect?: AvailableActionsWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutActionInput = {
    create?: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionInput
    connect?: ZapWhereUniqueInput
  }

  export type AvailableActionsUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<AvailableActionsCreateWithoutActionsInput, AvailableActionsUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionsInput
    upsert?: AvailableActionsUpsertWithoutActionsInput
    connect?: AvailableActionsWhereUniqueInput
    update?: XOR<XOR<AvailableActionsUpdateToOneWithWhereWithoutActionsInput, AvailableActionsUpdateWithoutActionsInput>, AvailableActionsUncheckedUpdateWithoutActionsInput>
  }

  export type ZapUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionInput
    upsert?: ZapUpsertWithoutActionInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutActionInput, ZapUpdateWithoutActionInput>, ZapUncheckedUpdateWithoutActionInput>
  }

  export type ActionCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type TriggerCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ZapCreateNestedOneWithoutZapRunsInput = {
    create?: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput
    connect?: ZapWhereUniqueInput
  }

  export type zapRunOutboxCreateNestedOneWithoutZapRunInput = {
    create?: XOR<zapRunOutboxCreateWithoutZapRunInput, zapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: zapRunOutboxCreateOrConnectWithoutZapRunInput
    connect?: zapRunOutboxWhereUniqueInput
  }

  export type zapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput = {
    create?: XOR<zapRunOutboxCreateWithoutZapRunInput, zapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: zapRunOutboxCreateOrConnectWithoutZapRunInput
    connect?: zapRunOutboxWhereUniqueInput
  }

  export type ZapUpdateOneRequiredWithoutZapRunsNestedInput = {
    create?: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput
    upsert?: ZapUpsertWithoutZapRunsInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutZapRunsInput, ZapUpdateWithoutZapRunsInput>, ZapUncheckedUpdateWithoutZapRunsInput>
  }

  export type zapRunOutboxUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<zapRunOutboxCreateWithoutZapRunInput, zapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: zapRunOutboxCreateOrConnectWithoutZapRunInput
    upsert?: zapRunOutboxUpsertWithoutZapRunInput
    disconnect?: zapRunOutboxWhereInput | boolean
    delete?: zapRunOutboxWhereInput | boolean
    connect?: zapRunOutboxWhereUniqueInput
    update?: XOR<XOR<zapRunOutboxUpdateToOneWithWhereWithoutZapRunInput, zapRunOutboxUpdateWithoutZapRunInput>, zapRunOutboxUncheckedUpdateWithoutZapRunInput>
  }

  export type zapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<zapRunOutboxCreateWithoutZapRunInput, zapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: zapRunOutboxCreateOrConnectWithoutZapRunInput
    upsert?: zapRunOutboxUpsertWithoutZapRunInput
    disconnect?: zapRunOutboxWhereInput | boolean
    delete?: zapRunOutboxWhereInput | boolean
    connect?: zapRunOutboxWhereUniqueInput
    update?: XOR<XOR<zapRunOutboxUpdateToOneWithWhereWithoutZapRunInput, zapRunOutboxUpdateWithoutZapRunInput>, zapRunOutboxUncheckedUpdateWithoutZapRunInput>
  }

  export type zapRunCreateNestedOneWithoutZapRunOutboxInput = {
    create?: XOR<zapRunCreateWithoutZapRunOutboxInput, zapRunUncheckedCreateWithoutZapRunOutboxInput>
    connectOrCreate?: zapRunCreateOrConnectWithoutZapRunOutboxInput
    connect?: zapRunWhereUniqueInput
  }

  export type zapRunUpdateOneRequiredWithoutZapRunOutboxNestedInput = {
    create?: XOR<zapRunCreateWithoutZapRunOutboxInput, zapRunUncheckedCreateWithoutZapRunOutboxInput>
    connectOrCreate?: zapRunCreateOrConnectWithoutZapRunOutboxInput
    upsert?: zapRunUpsertWithoutZapRunOutboxInput
    connect?: zapRunWhereUniqueInput
    update?: XOR<XOR<zapRunUpdateToOneWithWhereWithoutZapRunOutboxInput, zapRunUpdateWithoutZapRunOutboxInput>, zapRunUncheckedUpdateWithoutZapRunOutboxInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TriggerCreateWithoutZapInput = {
    id?: string
    type: AvailableTriggersCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateWithoutZapInput = {
    id?: string
    triggerId: string
  }

  export type TriggerCreateOrConnectWithoutZapInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
  }

  export type ActionCreateWithoutZapInput = {
    id?: string
    type: AvailableActionsCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutZapInput = {
    id?: string
    actionId: string
  }

  export type ActionCreateOrConnectWithoutZapInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionCreateManyZapInputEnvelope = {
    data: ActionCreateManyZapInput | ActionCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type zapRunCreateWithoutZapInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: zapRunOutboxCreateNestedOneWithoutZapRunInput
  }

  export type zapRunUncheckedCreateWithoutZapInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: zapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput
  }

  export type zapRunCreateOrConnectWithoutZapInput = {
    where: zapRunWhereUniqueInput
    create: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput>
  }

  export type zapRunCreateManyZapInputEnvelope = {
    data: zapRunCreateManyZapInput | zapRunCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithoutZapInput = {
    update: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutZapInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type TriggerUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUpsertWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
  }

  export type ActionUpdateManyWithWhereWithoutZapInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutZapInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    zapId?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
  }

  export type zapRunUpsertWithWhereUniqueWithoutZapInput = {
    where: zapRunWhereUniqueInput
    update: XOR<zapRunUpdateWithoutZapInput, zapRunUncheckedUpdateWithoutZapInput>
    create: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput>
  }

  export type zapRunUpdateWithWhereUniqueWithoutZapInput = {
    where: zapRunWhereUniqueInput
    data: XOR<zapRunUpdateWithoutZapInput, zapRunUncheckedUpdateWithoutZapInput>
  }

  export type zapRunUpdateManyWithWhereWithoutZapInput = {
    where: zapRunScalarWhereInput
    data: XOR<zapRunUpdateManyMutationInput, zapRunUncheckedUpdateManyWithoutZapInput>
  }

  export type zapRunScalarWhereInput = {
    AND?: zapRunScalarWhereInput | zapRunScalarWhereInput[]
    OR?: zapRunScalarWhereInput[]
    NOT?: zapRunScalarWhereInput | zapRunScalarWhereInput[]
    id?: StringFilter<"zapRun"> | string
    zapId?: StringFilter<"zapRun"> | string
    metadata?: JsonFilter<"zapRun">
  }

  export type AvailableTriggersCreateWithoutTriggersInput = {
    id?: string
    name: string
  }

  export type AvailableTriggersUncheckedCreateWithoutTriggersInput = {
    id?: string
    name: string
  }

  export type AvailableTriggersCreateOrConnectWithoutTriggersInput = {
    where: AvailableTriggersWhereUniqueInput
    create: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
  }

  export type ZapCreateWithoutTriggerInput = {
    id?: string
    action?: ActionCreateNestedManyWithoutZapInput
    zapRuns?: zapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutTriggerInput = {
    id?: string
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
    zapRuns?: zapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutTriggerInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
  }

  export type AvailableTriggersUpsertWithoutTriggersInput = {
    update: XOR<AvailableTriggersUpdateWithoutTriggersInput, AvailableTriggersUncheckedUpdateWithoutTriggersInput>
    create: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
    where?: AvailableTriggersWhereInput
  }

  export type AvailableTriggersUpdateToOneWithWhereWithoutTriggersInput = {
    where?: AvailableTriggersWhereInput
    data: XOR<AvailableTriggersUpdateWithoutTriggersInput, AvailableTriggersUncheckedUpdateWithoutTriggersInput>
  }

  export type AvailableTriggersUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggersUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUpsertWithoutTriggerInput = {
    update: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutTriggerInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type ZapUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: ActionUpdateManyWithoutZapNestedInput
    zapRuns?: zapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
    zapRuns?: zapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type AvailableActionsCreateWithoutActionsInput = {
    id?: string
    name: string
  }

  export type AvailableActionsUncheckedCreateWithoutActionsInput = {
    id?: string
    name: string
  }

  export type AvailableActionsCreateOrConnectWithoutActionsInput = {
    where: AvailableActionsWhereUniqueInput
    create: XOR<AvailableActionsCreateWithoutActionsInput, AvailableActionsUncheckedCreateWithoutActionsInput>
  }

  export type ZapCreateWithoutActionInput = {
    id?: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    zapRuns?: zapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutActionInput = {
    id?: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    zapRuns?: zapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutActionInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
  }

  export type AvailableActionsUpsertWithoutActionsInput = {
    update: XOR<AvailableActionsUpdateWithoutActionsInput, AvailableActionsUncheckedUpdateWithoutActionsInput>
    create: XOR<AvailableActionsCreateWithoutActionsInput, AvailableActionsUncheckedCreateWithoutActionsInput>
    where?: AvailableActionsWhereInput
  }

  export type AvailableActionsUpdateToOneWithWhereWithoutActionsInput = {
    where?: AvailableActionsWhereInput
    data: XOR<AvailableActionsUpdateWithoutActionsInput, AvailableActionsUncheckedUpdateWithoutActionsInput>
  }

  export type AvailableActionsUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionsUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUpsertWithoutActionInput = {
    update: XOR<ZapUpdateWithoutActionInput, ZapUncheckedUpdateWithoutActionInput>
    create: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutActionInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutActionInput, ZapUncheckedUpdateWithoutActionInput>
  }

  export type ZapUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    zapRuns?: zapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    zapRuns?: zapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ActionCreateWithoutTypeInput = {
    id?: string
    zap: ZapCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutTypeInput = {
    id?: string
    zapId: string
  }

  export type ActionCreateOrConnectWithoutTypeInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionCreateManyTypeInputEnvelope = {
    data: ActionCreateManyTypeInput | ActionCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ActionUpsertWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
  }

  export type ActionUpdateManyWithWhereWithoutTypeInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutTypeInput>
  }

  export type TriggerCreateWithoutTypeInput = {
    id?: string
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutTypeInput = {
    id?: string
    zapId: string
  }

  export type TriggerCreateOrConnectWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerCreateManyTypeInputEnvelope = {
    data: TriggerCreateManyTypeInput | TriggerCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
  }

  export type TriggerUpdateManyWithWhereWithoutTypeInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutTypeInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
  }

  export type ZapCreateWithoutZapRunsInput = {
    id?: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    action?: ActionCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutZapRunsInput = {
    id?: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutZapRunsInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
  }

  export type zapRunOutboxCreateWithoutZapRunInput = {
    id?: string
  }

  export type zapRunOutboxUncheckedCreateWithoutZapRunInput = {
    id?: string
  }

  export type zapRunOutboxCreateOrConnectWithoutZapRunInput = {
    where: zapRunOutboxWhereUniqueInput
    create: XOR<zapRunOutboxCreateWithoutZapRunInput, zapRunOutboxUncheckedCreateWithoutZapRunInput>
  }

  export type ZapUpsertWithoutZapRunsInput = {
    update: XOR<ZapUpdateWithoutZapRunsInput, ZapUncheckedUpdateWithoutZapRunsInput>
    create: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutZapRunsInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutZapRunsInput, ZapUncheckedUpdateWithoutZapRunsInput>
  }

  export type ZapUpdateWithoutZapRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    action?: ActionUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutZapRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
  }

  export type zapRunOutboxUpsertWithoutZapRunInput = {
    update: XOR<zapRunOutboxUpdateWithoutZapRunInput, zapRunOutboxUncheckedUpdateWithoutZapRunInput>
    create: XOR<zapRunOutboxCreateWithoutZapRunInput, zapRunOutboxUncheckedCreateWithoutZapRunInput>
    where?: zapRunOutboxWhereInput
  }

  export type zapRunOutboxUpdateToOneWithWhereWithoutZapRunInput = {
    where?: zapRunOutboxWhereInput
    data: XOR<zapRunOutboxUpdateWithoutZapRunInput, zapRunOutboxUncheckedUpdateWithoutZapRunInput>
  }

  export type zapRunOutboxUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type zapRunOutboxUncheckedUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type zapRunCreateWithoutZapRunOutboxInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZapRunsInput
  }

  export type zapRunUncheckedCreateWithoutZapRunOutboxInput = {
    id?: string
    zapId: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type zapRunCreateOrConnectWithoutZapRunOutboxInput = {
    where: zapRunWhereUniqueInput
    create: XOR<zapRunCreateWithoutZapRunOutboxInput, zapRunUncheckedCreateWithoutZapRunOutboxInput>
  }

  export type zapRunUpsertWithoutZapRunOutboxInput = {
    update: XOR<zapRunUpdateWithoutZapRunOutboxInput, zapRunUncheckedUpdateWithoutZapRunOutboxInput>
    create: XOR<zapRunCreateWithoutZapRunOutboxInput, zapRunUncheckedCreateWithoutZapRunOutboxInput>
    where?: zapRunWhereInput
  }

  export type zapRunUpdateToOneWithWhereWithoutZapRunOutboxInput = {
    where?: zapRunWhereInput
    data: XOR<zapRunUpdateWithoutZapRunOutboxInput, zapRunUncheckedUpdateWithoutZapRunOutboxInput>
  }

  export type zapRunUpdateWithoutZapRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput
  }

  export type zapRunUncheckedUpdateWithoutZapRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ActionCreateManyZapInput = {
    id?: string
    actionId: string
  }

  export type zapRunCreateManyZapInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableActionsUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type zapRunUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: zapRunOutboxUpdateOneWithoutZapRunNestedInput
  }

  export type zapRunUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: zapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput
  }

  export type zapRunUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ActionCreateManyTypeInput = {
    id?: string
    zapId: string
  }

  export type ActionUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zap?: ZapUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyTypeInput = {
    id?: string
    zapId: string
  }

  export type TriggerUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
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