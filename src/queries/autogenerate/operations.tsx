import * as Types from './schemas'

export type CountryNamesQueryVariables = Types.Exact<{ [key: string]: never }>

export type CountryNamesQuery = { __typename?: 'Query' } & {
  Country?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: 'Country' } & Pick<
          Types.Country,
          '_id' | 'name' | 'capital'
        > & {
            currencies?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'Currency' } & Pick<Types.Currency, 'code'>
                >
              >
            >
          }
      >
    >
  >
}
