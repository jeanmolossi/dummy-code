export type RepositoryFunctionReturn<T> = {
  status: 'PENDING' | 'RESOLVE' | 'REJECT';
} & T;
