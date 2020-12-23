/* eslint-disable no-use-before-define */
import { Map, List } from 'immutable';
import * as schema from './schemas';
import API from '../api';

export interface ThunkExtraArguments {
  api?: API;
  schema: typeof schema;
  normalize: (...args: any) => any;
}

export interface IToken {
  role: string;
  email: string;
}

export enum EntityStatus {
  Initial = 'Initial',
  Finalized = 'Finalized',
  InReview = 'InReview',
  Approved = 'Approved',
}

export interface IEntity {
  id: string;
  inserted: string;
  lastUpdated: string;
}

export interface IClient extends IEntity {
  name: string;
  legalEntities: List<IImmutableLegalEntity>;
}

export interface ILegalEntity extends IEntity {
  name: string;
  vatNumber: string;
  status: EntityStatus;
}

export interface IImmutableClient extends Map<string, any> {
  toJS(): IClient;
  get<K extends keyof IClient>(key: K): IClient[K];
}

export interface IImmutableLegalEntity extends Map<string, any> {
  toJS(): ILegalEntity;
  get<K extends keyof ILegalEntity>(key: K): ILegalEntity[K];
}
