import * as Types from './operations'

import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'

export const CountryNamesDocument = gql`
  query CountryNames {
    Country {
      _id
      name
      capital
      currencies {
        code
      }
    }
  }
`

/**
 * __useCountryNamesQuery__
 *
 * To run a query within a React component, call `useCountryNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountryNamesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.CountryNamesQuery,
    Types.CountryNamesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.CountryNamesQuery,
    Types.CountryNamesQueryVariables
  >(CountryNamesDocument, baseOptions)
}
export function useCountryNamesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.CountryNamesQuery,
    Types.CountryNamesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.CountryNamesQuery,
    Types.CountryNamesQueryVariables
  >(CountryNamesDocument, baseOptions)
}
export type CountryNamesQueryHookResult = ReturnType<
  typeof useCountryNamesQuery
>
export type CountryNamesLazyQueryHookResult = ReturnType<
  typeof useCountryNamesLazyQuery
>
export type CountryNamesQueryResult = ApolloReactCommon.QueryResult<
  Types.CountryNamesQuery,
  Types.CountryNamesQueryVariables
>
