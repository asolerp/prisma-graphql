// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  coin: (where?: CoinWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  coin: (where: CoinWhereUniqueInput) => CoinNullablePromise;
  coins: (args?: {
    where?: CoinWhereInput;
    orderBy?: CoinOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Coin>;
  coinsConnection: (args?: {
    where?: CoinWhereInput;
    orderBy?: CoinOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CoinConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCoin: (data: CoinCreateInput) => CoinPromise;
  updateCoin: (args: {
    data: CoinUpdateInput;
    where: CoinWhereUniqueInput;
  }) => CoinPromise;
  updateManyCoins: (args: {
    data: CoinUpdateManyMutationInput;
    where?: CoinWhereInput;
  }) => BatchPayloadPromise;
  upsertCoin: (args: {
    where: CoinWhereUniqueInput;
    create: CoinCreateInput;
    update: CoinUpdateInput;
  }) => CoinPromise;
  deleteCoin: (where: CoinWhereUniqueInput) => CoinPromise;
  deleteManyCoins: (where?: CoinWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  coin: (
    where?: CoinSubscriptionWhereInput
  ) => CoinSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CoinOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "base_ASC"
  | "base_DESC"
  | "target_ASC"
  | "target_DESC"
  | "price_ASC"
  | "price_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type CoinWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CoinWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  base?: Maybe<String>;
  base_not?: Maybe<String>;
  base_in?: Maybe<String[] | String>;
  base_not_in?: Maybe<String[] | String>;
  base_lt?: Maybe<String>;
  base_lte?: Maybe<String>;
  base_gt?: Maybe<String>;
  base_gte?: Maybe<String>;
  base_contains?: Maybe<String>;
  base_not_contains?: Maybe<String>;
  base_starts_with?: Maybe<String>;
  base_not_starts_with?: Maybe<String>;
  base_ends_with?: Maybe<String>;
  base_not_ends_with?: Maybe<String>;
  target?: Maybe<String>;
  target_not?: Maybe<String>;
  target_in?: Maybe<String[] | String>;
  target_not_in?: Maybe<String[] | String>;
  target_lt?: Maybe<String>;
  target_lte?: Maybe<String>;
  target_gt?: Maybe<String>;
  target_gte?: Maybe<String>;
  target_contains?: Maybe<String>;
  target_not_contains?: Maybe<String>;
  target_starts_with?: Maybe<String>;
  target_not_starts_with?: Maybe<String>;
  target_ends_with?: Maybe<String>;
  target_not_ends_with?: Maybe<String>;
  price?: Maybe<String>;
  price_not?: Maybe<String>;
  price_in?: Maybe<String[] | String>;
  price_not_in?: Maybe<String[] | String>;
  price_lt?: Maybe<String>;
  price_lte?: Maybe<String>;
  price_gt?: Maybe<String>;
  price_gte?: Maybe<String>;
  price_contains?: Maybe<String>;
  price_not_contains?: Maybe<String>;
  price_starts_with?: Maybe<String>;
  price_not_starts_with?: Maybe<String>;
  price_ends_with?: Maybe<String>;
  price_not_ends_with?: Maybe<String>;
  AND?: Maybe<CoinWhereInput[] | CoinWhereInput>;
}

export interface CoinCreateInput {
  id?: Maybe<ID_Input>;
  base: String;
  target: String;
  price: String;
}

export interface CoinUpdateInput {
  base?: Maybe<String>;
  target?: Maybe<String>;
  price?: Maybe<String>;
}

export interface CoinUpdateManyMutationInput {
  base?: Maybe<String>;
  target?: Maybe<String>;
  price?: Maybe<String>;
}

export interface CoinSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CoinWhereInput>;
  AND?: Maybe<CoinSubscriptionWhereInput[] | CoinSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Coin {
  id: ID_Output;
  base: String;
  target: String;
  price: String;
}

export interface CoinPromise extends Promise<Coin>, Fragmentable {
  id: () => Promise<ID_Output>;
  base: () => Promise<String>;
  target: () => Promise<String>;
  price: () => Promise<String>;
}

export interface CoinSubscription
  extends Promise<AsyncIterator<Coin>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  base: () => Promise<AsyncIterator<String>>;
  target: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<String>>;
}

export interface CoinNullablePromise
  extends Promise<Coin | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  base: () => Promise<String>;
  target: () => Promise<String>;
  price: () => Promise<String>;
}

export interface CoinConnection {
  pageInfo: PageInfo;
  edges: CoinEdge[];
}

export interface CoinConnectionPromise
  extends Promise<CoinConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CoinEdge>>() => T;
  aggregate: <T = AggregateCoinPromise>() => T;
}

export interface CoinConnectionSubscription
  extends Promise<AsyncIterator<CoinConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CoinEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCoinSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CoinEdge {
  node: Coin;
  cursor: String;
}

export interface CoinEdgePromise extends Promise<CoinEdge>, Fragmentable {
  node: <T = CoinPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CoinEdgeSubscription
  extends Promise<AsyncIterator<CoinEdge>>,
    Fragmentable {
  node: <T = CoinSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCoin {
  count: Int;
}

export interface AggregateCoinPromise
  extends Promise<AggregateCoin>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCoinSubscription
  extends Promise<AsyncIterator<AggregateCoin>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CoinSubscriptionPayload {
  mutation: MutationType;
  node: Coin;
  updatedFields: String[];
  previousValues: CoinPreviousValues;
}

export interface CoinSubscriptionPayloadPromise
  extends Promise<CoinSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CoinPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CoinPreviousValuesPromise>() => T;
}

export interface CoinSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CoinSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CoinSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CoinPreviousValuesSubscription>() => T;
}

export interface CoinPreviousValues {
  id: ID_Output;
  base: String;
  target: String;
  price: String;
}

export interface CoinPreviousValuesPromise
  extends Promise<CoinPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  base: () => Promise<String>;
  target: () => Promise<String>;
  price: () => Promise<String>;
}

export interface CoinPreviousValuesSubscription
  extends Promise<AsyncIterator<CoinPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  base: () => Promise<AsyncIterator<String>>;
  target: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Coin",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;