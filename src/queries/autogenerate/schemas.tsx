export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  Country?: Maybe<Array<Maybe<Country>>>
  Timezone?: Maybe<Array<Maybe<Timezone>>>
  Subregion?: Maybe<Array<Maybe<Subregion>>>
  Region?: Maybe<Array<Maybe<Region>>>
  Language?: Maybe<Array<Maybe<Language>>>
  Currency?: Maybe<Array<Maybe<Currency>>>
  RegionalBloc?: Maybe<Array<Maybe<RegionalBloc>>>
  Translation?: Maybe<Array<Maybe<Translation>>>
  Flag?: Maybe<Array<Maybe<Flag>>>
  DistanceToOtherCountry?: Maybe<Array<Maybe<DistanceToOtherCountry>>>
  TopLevelDomain?: Maybe<Array<Maybe<TopLevelDomain>>>
  CallingCode?: Maybe<Array<Maybe<CallingCode>>>
}

export type QueryCountryArgs = {
  _id?: Maybe<Scalars['String']>
  alpha2Code?: Maybe<Scalars['String']>
  alpha3Code?: Maybe<Scalars['String']>
  area?: Maybe<Scalars['Float']>
  capital?: Maybe<Scalars['String']>
  populationDensity?: Maybe<Scalars['Float']>
  demonym?: Maybe<Scalars['String']>
  gini?: Maybe<Scalars['Float']>
  location?: Maybe<_Neo4jPointInput>
  name?: Maybe<Scalars['String']>
  nameTranslation?: Maybe<Scalars['String']>
  nativeName?: Maybe<Scalars['String']>
  numericCode?: Maybe<Scalars['String']>
  population?: Maybe<Scalars['Float']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
  filter?: Maybe<_CountryFilter>
}

export type QueryTimezoneArgs = {
  _id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_TimezoneOrdering>>>
  filter?: Maybe<_TimezoneFilter>
}

export type QuerySubregionArgs = {
  _id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_SubregionOrdering>>>
  filter?: Maybe<_SubregionFilter>
}

export type QueryRegionArgs = {
  _id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_RegionOrdering>>>
  filter?: Maybe<_RegionFilter>
}

export type QueryLanguageArgs = {
  _id?: Maybe<Scalars['String']>
  iso639_1?: Maybe<Scalars['String']>
  iso639_2?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nativeName?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_LanguageOrdering>>>
  filter?: Maybe<_LanguageFilter>
}

export type QueryCurrencyArgs = {
  _id?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CurrencyOrdering>>>
  filter?: Maybe<_CurrencyFilter>
}

export type QueryRegionalBlocArgs = {
  _id?: Maybe<Scalars['String']>
  acronym?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_RegionalBlocOrdering>>>
  filter?: Maybe<_RegionalBlocFilter>
}

export type QueryTranslationArgs = {
  _id?: Maybe<Scalars['String']>
  languageCode?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_TranslationOrdering>>>
  filter?: Maybe<_TranslationFilter>
}

export type QueryFlagArgs = {
  _id?: Maybe<Scalars['String']>
  emoji?: Maybe<Scalars['String']>
  emojiUnicode?: Maybe<Scalars['String']>
  svgFile?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_FlagOrdering>>>
  filter?: Maybe<_FlagFilter>
}

export type QueryDistanceToOtherCountryArgs = {
  distanceInKm?: Maybe<Scalars['Float']>
  countryName?: Maybe<Scalars['String']>
  _id?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_DistanceToOtherCountryOrdering>>>
  filter?: Maybe<_DistanceToOtherCountryFilter>
}

export type QueryTopLevelDomainArgs = {
  _id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_TopLevelDomainOrdering>>>
  filter?: Maybe<_TopLevelDomainFilter>
}

export type QueryCallingCodeArgs = {
  _id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CallingCodeOrdering>>>
  filter?: Maybe<_CallingCodeFilter>
}

export type _Neo4jPointInput = {
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  z?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  crs?: Maybe<Scalars['String']>
  srid?: Maybe<Scalars['Int']>
}

export enum _CountryOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  Alpha2CodeAsc = 'alpha2Code_asc',
  Alpha2CodeDesc = 'alpha2Code_desc',
  Alpha3CodeAsc = 'alpha3Code_asc',
  Alpha3CodeDesc = 'alpha3Code_desc',
  AreaAsc = 'area_asc',
  AreaDesc = 'area_desc',
  CapitalAsc = 'capital_asc',
  CapitalDesc = 'capital_desc',
  PopulationDensityAsc = 'populationDensity_asc',
  PopulationDensityDesc = 'populationDensity_desc',
  DemonymAsc = 'demonym_asc',
  DemonymDesc = 'demonym_desc',
  GiniAsc = 'gini_asc',
  GiniDesc = 'gini_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  NameTranslationAsc = 'nameTranslation_asc',
  NameTranslationDesc = 'nameTranslation_desc',
  NativeNameAsc = 'nativeName_asc',
  NativeNameDesc = 'nativeName_desc',
  NumericCodeAsc = 'numericCode_asc',
  NumericCodeDesc = 'numericCode_desc',
  PopulationAsc = 'population_asc',
  PopulationDesc = 'population_desc',
}

export type _CountryFilter = {
  AND?: Maybe<Array<_CountryFilter>>
  OR?: Maybe<Array<_CountryFilter>>
  alpha2Code?: Maybe<Scalars['String']>
  alpha2Code_not?: Maybe<Scalars['String']>
  alpha2Code_in?: Maybe<Array<Scalars['String']>>
  alpha2Code_not_in?: Maybe<Array<Scalars['String']>>
  alpha2Code_contains?: Maybe<Scalars['String']>
  alpha2Code_not_contains?: Maybe<Scalars['String']>
  alpha2Code_starts_with?: Maybe<Scalars['String']>
  alpha2Code_not_starts_with?: Maybe<Scalars['String']>
  alpha2Code_ends_with?: Maybe<Scalars['String']>
  alpha2Code_not_ends_with?: Maybe<Scalars['String']>
  alpha3Code?: Maybe<Scalars['String']>
  alpha3Code_not?: Maybe<Scalars['String']>
  alpha3Code_in?: Maybe<Array<Scalars['String']>>
  alpha3Code_not_in?: Maybe<Array<Scalars['String']>>
  alpha3Code_contains?: Maybe<Scalars['String']>
  alpha3Code_not_contains?: Maybe<Scalars['String']>
  alpha3Code_starts_with?: Maybe<Scalars['String']>
  alpha3Code_not_starts_with?: Maybe<Scalars['String']>
  alpha3Code_ends_with?: Maybe<Scalars['String']>
  alpha3Code_not_ends_with?: Maybe<Scalars['String']>
  area?: Maybe<Scalars['Float']>
  area_not?: Maybe<Scalars['Float']>
  area_in?: Maybe<Array<Scalars['Float']>>
  area_not_in?: Maybe<Array<Scalars['Float']>>
  area_lt?: Maybe<Scalars['Float']>
  area_lte?: Maybe<Scalars['Float']>
  area_gt?: Maybe<Scalars['Float']>
  area_gte?: Maybe<Scalars['Float']>
  capital?: Maybe<Scalars['String']>
  capital_not?: Maybe<Scalars['String']>
  capital_in?: Maybe<Array<Scalars['String']>>
  capital_not_in?: Maybe<Array<Scalars['String']>>
  capital_contains?: Maybe<Scalars['String']>
  capital_not_contains?: Maybe<Scalars['String']>
  capital_starts_with?: Maybe<Scalars['String']>
  capital_not_starts_with?: Maybe<Scalars['String']>
  capital_ends_with?: Maybe<Scalars['String']>
  capital_not_ends_with?: Maybe<Scalars['String']>
  demonym?: Maybe<Scalars['String']>
  demonym_not?: Maybe<Scalars['String']>
  demonym_in?: Maybe<Array<Scalars['String']>>
  demonym_not_in?: Maybe<Array<Scalars['String']>>
  demonym_contains?: Maybe<Scalars['String']>
  demonym_not_contains?: Maybe<Scalars['String']>
  demonym_starts_with?: Maybe<Scalars['String']>
  demonym_not_starts_with?: Maybe<Scalars['String']>
  demonym_ends_with?: Maybe<Scalars['String']>
  demonym_not_ends_with?: Maybe<Scalars['String']>
  gini?: Maybe<Scalars['Float']>
  gini_not?: Maybe<Scalars['Float']>
  gini_in?: Maybe<Array<Scalars['Float']>>
  gini_not_in?: Maybe<Array<Scalars['Float']>>
  gini_lt?: Maybe<Scalars['Float']>
  gini_lte?: Maybe<Scalars['Float']>
  gini_gt?: Maybe<Scalars['Float']>
  gini_gte?: Maybe<Scalars['Float']>
  location?: Maybe<_Neo4jPointInput>
  location_not?: Maybe<_Neo4jPointInput>
  location_distance?: Maybe<_Neo4jPointDistanceFilter>
  location_distance_lt?: Maybe<_Neo4jPointDistanceFilter>
  location_distance_lte?: Maybe<_Neo4jPointDistanceFilter>
  location_distance_gt?: Maybe<_Neo4jPointDistanceFilter>
  location_distance_gte?: Maybe<_Neo4jPointDistanceFilter>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  nameTranslations?: Maybe<_TranslationFilter>
  nameTranslations_not?: Maybe<_TranslationFilter>
  nameTranslations_in?: Maybe<Array<_TranslationFilter>>
  nameTranslations_not_in?: Maybe<Array<_TranslationFilter>>
  nameTranslations_some?: Maybe<_TranslationFilter>
  nameTranslations_none?: Maybe<_TranslationFilter>
  nameTranslations_single?: Maybe<_TranslationFilter>
  nameTranslations_every?: Maybe<_TranslationFilter>
  nativeName?: Maybe<Scalars['String']>
  nativeName_not?: Maybe<Scalars['String']>
  nativeName_in?: Maybe<Array<Scalars['String']>>
  nativeName_not_in?: Maybe<Array<Scalars['String']>>
  nativeName_contains?: Maybe<Scalars['String']>
  nativeName_not_contains?: Maybe<Scalars['String']>
  nativeName_starts_with?: Maybe<Scalars['String']>
  nativeName_not_starts_with?: Maybe<Scalars['String']>
  nativeName_ends_with?: Maybe<Scalars['String']>
  nativeName_not_ends_with?: Maybe<Scalars['String']>
  numericCode?: Maybe<Scalars['String']>
  numericCode_not?: Maybe<Scalars['String']>
  numericCode_in?: Maybe<Array<Scalars['String']>>
  numericCode_not_in?: Maybe<Array<Scalars['String']>>
  numericCode_contains?: Maybe<Scalars['String']>
  numericCode_not_contains?: Maybe<Scalars['String']>
  numericCode_starts_with?: Maybe<Scalars['String']>
  numericCode_not_starts_with?: Maybe<Scalars['String']>
  numericCode_ends_with?: Maybe<Scalars['String']>
  numericCode_not_ends_with?: Maybe<Scalars['String']>
  population?: Maybe<Scalars['Float']>
  population_not?: Maybe<Scalars['Float']>
  population_in?: Maybe<Array<Scalars['Float']>>
  population_not_in?: Maybe<Array<Scalars['Float']>>
  population_lt?: Maybe<Scalars['Float']>
  population_lte?: Maybe<Scalars['Float']>
  population_gt?: Maybe<Scalars['Float']>
  population_gte?: Maybe<Scalars['Float']>
  topLevelDomains?: Maybe<_TopLevelDomainFilter>
  topLevelDomains_not?: Maybe<_TopLevelDomainFilter>
  topLevelDomains_in?: Maybe<Array<_TopLevelDomainFilter>>
  topLevelDomains_not_in?: Maybe<Array<_TopLevelDomainFilter>>
  topLevelDomains_some?: Maybe<_TopLevelDomainFilter>
  topLevelDomains_none?: Maybe<_TopLevelDomainFilter>
  topLevelDomains_single?: Maybe<_TopLevelDomainFilter>
  topLevelDomains_every?: Maybe<_TopLevelDomainFilter>
  callingCodes?: Maybe<_CallingCodeFilter>
  callingCodes_not?: Maybe<_CallingCodeFilter>
  callingCodes_in?: Maybe<Array<_CallingCodeFilter>>
  callingCodes_not_in?: Maybe<Array<_CallingCodeFilter>>
  callingCodes_some?: Maybe<_CallingCodeFilter>
  callingCodes_none?: Maybe<_CallingCodeFilter>
  callingCodes_single?: Maybe<_CallingCodeFilter>
  callingCodes_every?: Maybe<_CallingCodeFilter>
  timezones?: Maybe<_TimezoneFilter>
  timezones_not?: Maybe<_TimezoneFilter>
  timezones_in?: Maybe<Array<_TimezoneFilter>>
  timezones_not_in?: Maybe<Array<_TimezoneFilter>>
  timezones_some?: Maybe<_TimezoneFilter>
  timezones_none?: Maybe<_TimezoneFilter>
  timezones_single?: Maybe<_TimezoneFilter>
  timezones_every?: Maybe<_TimezoneFilter>
  borders?: Maybe<_CountryFilter>
  borders_not?: Maybe<_CountryFilter>
  borders_in?: Maybe<Array<_CountryFilter>>
  borders_not_in?: Maybe<Array<_CountryFilter>>
  borders_some?: Maybe<_CountryFilter>
  borders_none?: Maybe<_CountryFilter>
  borders_single?: Maybe<_CountryFilter>
  borders_every?: Maybe<_CountryFilter>
  subregion?: Maybe<_SubregionFilter>
  subregion_not?: Maybe<_SubregionFilter>
  subregion_in?: Maybe<Array<_SubregionFilter>>
  subregion_not_in?: Maybe<Array<_SubregionFilter>>
  officialLanguages?: Maybe<_LanguageFilter>
  officialLanguages_not?: Maybe<_LanguageFilter>
  officialLanguages_in?: Maybe<Array<_LanguageFilter>>
  officialLanguages_not_in?: Maybe<Array<_LanguageFilter>>
  officialLanguages_some?: Maybe<_LanguageFilter>
  officialLanguages_none?: Maybe<_LanguageFilter>
  officialLanguages_single?: Maybe<_LanguageFilter>
  officialLanguages_every?: Maybe<_LanguageFilter>
  currencies?: Maybe<_CurrencyFilter>
  currencies_not?: Maybe<_CurrencyFilter>
  currencies_in?: Maybe<Array<_CurrencyFilter>>
  currencies_not_in?: Maybe<Array<_CurrencyFilter>>
  currencies_some?: Maybe<_CurrencyFilter>
  currencies_none?: Maybe<_CurrencyFilter>
  currencies_single?: Maybe<_CurrencyFilter>
  currencies_every?: Maybe<_CurrencyFilter>
  regionalBlocs?: Maybe<_RegionalBlocFilter>
  regionalBlocs_not?: Maybe<_RegionalBlocFilter>
  regionalBlocs_in?: Maybe<Array<_RegionalBlocFilter>>
  regionalBlocs_not_in?: Maybe<Array<_RegionalBlocFilter>>
  regionalBlocs_some?: Maybe<_RegionalBlocFilter>
  regionalBlocs_none?: Maybe<_RegionalBlocFilter>
  regionalBlocs_single?: Maybe<_RegionalBlocFilter>
  regionalBlocs_every?: Maybe<_RegionalBlocFilter>
  flag?: Maybe<_FlagFilter>
  flag_not?: Maybe<_FlagFilter>
  flag_in?: Maybe<Array<_FlagFilter>>
  flag_not_in?: Maybe<Array<_FlagFilter>>
  distanceToOtherCountries?: Maybe<_DistanceToOtherCountryFilter>
  distanceToOtherCountries_not?: Maybe<_DistanceToOtherCountryFilter>
  distanceToOtherCountries_in?: Maybe<Array<_DistanceToOtherCountryFilter>>
  distanceToOtherCountries_not_in?: Maybe<Array<_DistanceToOtherCountryFilter>>
  distanceToOtherCountries_some?: Maybe<_DistanceToOtherCountryFilter>
  distanceToOtherCountries_none?: Maybe<_DistanceToOtherCountryFilter>
  distanceToOtherCountries_single?: Maybe<_DistanceToOtherCountryFilter>
  distanceToOtherCountries_every?: Maybe<_DistanceToOtherCountryFilter>
  shortestPathToOtherCountry?: Maybe<_CountryFilter>
  shortestPathToOtherCountry_not?: Maybe<_CountryFilter>
  shortestPathToOtherCountry_in?: Maybe<Array<_CountryFilter>>
  shortestPathToOtherCountry_not_in?: Maybe<Array<_CountryFilter>>
  shortestPathToOtherCountry_some?: Maybe<_CountryFilter>
  shortestPathToOtherCountry_none?: Maybe<_CountryFilter>
  shortestPathToOtherCountry_single?: Maybe<_CountryFilter>
  shortestPathToOtherCountry_every?: Maybe<_CountryFilter>
}

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput
  distance: Scalars['Float']
}

export type _TranslationFilter = {
  AND?: Maybe<Array<_TranslationFilter>>
  OR?: Maybe<Array<_TranslationFilter>>
  languageCode?: Maybe<Scalars['String']>
  languageCode_not?: Maybe<Scalars['String']>
  languageCode_in?: Maybe<Array<Scalars['String']>>
  languageCode_not_in?: Maybe<Array<Scalars['String']>>
  languageCode_contains?: Maybe<Scalars['String']>
  languageCode_not_contains?: Maybe<Scalars['String']>
  languageCode_starts_with?: Maybe<Scalars['String']>
  languageCode_not_starts_with?: Maybe<Scalars['String']>
  languageCode_ends_with?: Maybe<Scalars['String']>
  languageCode_not_ends_with?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  value_not?: Maybe<Scalars['String']>
  value_in?: Maybe<Array<Scalars['String']>>
  value_not_in?: Maybe<Array<Scalars['String']>>
  value_contains?: Maybe<Scalars['String']>
  value_not_contains?: Maybe<Scalars['String']>
  value_starts_with?: Maybe<Scalars['String']>
  value_not_starts_with?: Maybe<Scalars['String']>
  value_ends_with?: Maybe<Scalars['String']>
  value_not_ends_with?: Maybe<Scalars['String']>
}

export type _TopLevelDomainFilter = {
  AND?: Maybe<Array<_TopLevelDomainFilter>>
  OR?: Maybe<Array<_TopLevelDomainFilter>>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  countries?: Maybe<_CountryFilter>
  countries_not?: Maybe<_CountryFilter>
  countries_in?: Maybe<Array<_CountryFilter>>
  countries_not_in?: Maybe<Array<_CountryFilter>>
  countries_some?: Maybe<_CountryFilter>
  countries_none?: Maybe<_CountryFilter>
  countries_single?: Maybe<_CountryFilter>
  countries_every?: Maybe<_CountryFilter>
}

export type _CallingCodeFilter = {
  AND?: Maybe<Array<_CallingCodeFilter>>
  OR?: Maybe<Array<_CallingCodeFilter>>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  countries?: Maybe<_CountryFilter>
  countries_not?: Maybe<_CountryFilter>
  countries_in?: Maybe<Array<_CountryFilter>>
  countries_not_in?: Maybe<Array<_CountryFilter>>
  countries_some?: Maybe<_CountryFilter>
  countries_none?: Maybe<_CountryFilter>
  countries_single?: Maybe<_CountryFilter>
  countries_every?: Maybe<_CountryFilter>
}

export type _TimezoneFilter = {
  AND?: Maybe<Array<_TimezoneFilter>>
  OR?: Maybe<Array<_TimezoneFilter>>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  countries?: Maybe<_CountryFilter>
  countries_not?: Maybe<_CountryFilter>
  countries_in?: Maybe<Array<_CountryFilter>>
  countries_not_in?: Maybe<Array<_CountryFilter>>
  countries_some?: Maybe<_CountryFilter>
  countries_none?: Maybe<_CountryFilter>
  countries_single?: Maybe<_CountryFilter>
  countries_every?: Maybe<_CountryFilter>
}

export type _SubregionFilter = {
  AND?: Maybe<Array<_SubregionFilter>>
  OR?: Maybe<Array<_SubregionFilter>>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  region?: Maybe<_RegionFilter>
  region_not?: Maybe<_RegionFilter>
  region_in?: Maybe<Array<_RegionFilter>>
  region_not_in?: Maybe<Array<_RegionFilter>>
  countries?: Maybe<_CountryFilter>
  countries_not?: Maybe<_CountryFilter>
  countries_in?: Maybe<Array<_CountryFilter>>
  countries_not_in?: Maybe<Array<_CountryFilter>>
  countries_some?: Maybe<_CountryFilter>
  countries_none?: Maybe<_CountryFilter>
  countries_single?: Maybe<_CountryFilter>
  countries_every?: Maybe<_CountryFilter>
}

export type _RegionFilter = {
  AND?: Maybe<Array<_RegionFilter>>
  OR?: Maybe<Array<_RegionFilter>>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  subregions?: Maybe<_SubregionFilter>
  subregions_not?: Maybe<_SubregionFilter>
  subregions_in?: Maybe<Array<_SubregionFilter>>
  subregions_not_in?: Maybe<Array<_SubregionFilter>>
  subregions_some?: Maybe<_SubregionFilter>
  subregions_none?: Maybe<_SubregionFilter>
  subregions_single?: Maybe<_SubregionFilter>
  subregions_every?: Maybe<_SubregionFilter>
}

export type _LanguageFilter = {
  AND?: Maybe<Array<_LanguageFilter>>
  OR?: Maybe<Array<_LanguageFilter>>
  iso639_1?: Maybe<Scalars['String']>
  iso639_1_not?: Maybe<Scalars['String']>
  iso639_1_in?: Maybe<Array<Scalars['String']>>
  iso639_1_not_in?: Maybe<Array<Scalars['String']>>
  iso639_1_contains?: Maybe<Scalars['String']>
  iso639_1_not_contains?: Maybe<Scalars['String']>
  iso639_1_starts_with?: Maybe<Scalars['String']>
  iso639_1_not_starts_with?: Maybe<Scalars['String']>
  iso639_1_ends_with?: Maybe<Scalars['String']>
  iso639_1_not_ends_with?: Maybe<Scalars['String']>
  iso639_2?: Maybe<Scalars['String']>
  iso639_2_not?: Maybe<Scalars['String']>
  iso639_2_in?: Maybe<Array<Scalars['String']>>
  iso639_2_not_in?: Maybe<Array<Scalars['String']>>
  iso639_2_contains?: Maybe<Scalars['String']>
  iso639_2_not_contains?: Maybe<Scalars['String']>
  iso639_2_starts_with?: Maybe<Scalars['String']>
  iso639_2_not_starts_with?: Maybe<Scalars['String']>
  iso639_2_ends_with?: Maybe<Scalars['String']>
  iso639_2_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  nativeName?: Maybe<Scalars['String']>
  nativeName_not?: Maybe<Scalars['String']>
  nativeName_in?: Maybe<Array<Scalars['String']>>
  nativeName_not_in?: Maybe<Array<Scalars['String']>>
  nativeName_contains?: Maybe<Scalars['String']>
  nativeName_not_contains?: Maybe<Scalars['String']>
  nativeName_starts_with?: Maybe<Scalars['String']>
  nativeName_not_starts_with?: Maybe<Scalars['String']>
  nativeName_ends_with?: Maybe<Scalars['String']>
  nativeName_not_ends_with?: Maybe<Scalars['String']>
  countries?: Maybe<_CountryFilter>
  countries_not?: Maybe<_CountryFilter>
  countries_in?: Maybe<Array<_CountryFilter>>
  countries_not_in?: Maybe<Array<_CountryFilter>>
  countries_some?: Maybe<_CountryFilter>
  countries_none?: Maybe<_CountryFilter>
  countries_single?: Maybe<_CountryFilter>
  countries_every?: Maybe<_CountryFilter>
}

export type _CurrencyFilter = {
  AND?: Maybe<Array<_CurrencyFilter>>
  OR?: Maybe<Array<_CurrencyFilter>>
  code?: Maybe<Scalars['String']>
  code_not?: Maybe<Scalars['String']>
  code_in?: Maybe<Array<Scalars['String']>>
  code_not_in?: Maybe<Array<Scalars['String']>>
  code_contains?: Maybe<Scalars['String']>
  code_not_contains?: Maybe<Scalars['String']>
  code_starts_with?: Maybe<Scalars['String']>
  code_not_starts_with?: Maybe<Scalars['String']>
  code_ends_with?: Maybe<Scalars['String']>
  code_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  symbol_not?: Maybe<Scalars['String']>
  symbol_in?: Maybe<Array<Scalars['String']>>
  symbol_not_in?: Maybe<Array<Scalars['String']>>
  symbol_contains?: Maybe<Scalars['String']>
  symbol_not_contains?: Maybe<Scalars['String']>
  symbol_starts_with?: Maybe<Scalars['String']>
  symbol_not_starts_with?: Maybe<Scalars['String']>
  symbol_ends_with?: Maybe<Scalars['String']>
  symbol_not_ends_with?: Maybe<Scalars['String']>
  countries?: Maybe<_CountryFilter>
  countries_not?: Maybe<_CountryFilter>
  countries_in?: Maybe<Array<_CountryFilter>>
  countries_not_in?: Maybe<Array<_CountryFilter>>
  countries_some?: Maybe<_CountryFilter>
  countries_none?: Maybe<_CountryFilter>
  countries_single?: Maybe<_CountryFilter>
  countries_every?: Maybe<_CountryFilter>
}

export type _RegionalBlocFilter = {
  AND?: Maybe<Array<_RegionalBlocFilter>>
  OR?: Maybe<Array<_RegionalBlocFilter>>
  acronym?: Maybe<Scalars['String']>
  acronym_not?: Maybe<Scalars['String']>
  acronym_in?: Maybe<Array<Scalars['String']>>
  acronym_not_in?: Maybe<Array<Scalars['String']>>
  acronym_contains?: Maybe<Scalars['String']>
  acronym_not_contains?: Maybe<Scalars['String']>
  acronym_starts_with?: Maybe<Scalars['String']>
  acronym_not_starts_with?: Maybe<Scalars['String']>
  acronym_ends_with?: Maybe<Scalars['String']>
  acronym_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  countries?: Maybe<_CountryFilter>
  countries_not?: Maybe<_CountryFilter>
  countries_in?: Maybe<Array<_CountryFilter>>
  countries_not_in?: Maybe<Array<_CountryFilter>>
  countries_some?: Maybe<_CountryFilter>
  countries_none?: Maybe<_CountryFilter>
  countries_single?: Maybe<_CountryFilter>
  countries_every?: Maybe<_CountryFilter>
}

export type _FlagFilter = {
  AND?: Maybe<Array<_FlagFilter>>
  OR?: Maybe<Array<_FlagFilter>>
  emoji?: Maybe<Scalars['String']>
  emoji_not?: Maybe<Scalars['String']>
  emoji_in?: Maybe<Array<Scalars['String']>>
  emoji_not_in?: Maybe<Array<Scalars['String']>>
  emoji_contains?: Maybe<Scalars['String']>
  emoji_not_contains?: Maybe<Scalars['String']>
  emoji_starts_with?: Maybe<Scalars['String']>
  emoji_not_starts_with?: Maybe<Scalars['String']>
  emoji_ends_with?: Maybe<Scalars['String']>
  emoji_not_ends_with?: Maybe<Scalars['String']>
  emojiUnicode?: Maybe<Scalars['String']>
  emojiUnicode_not?: Maybe<Scalars['String']>
  emojiUnicode_in?: Maybe<Array<Scalars['String']>>
  emojiUnicode_not_in?: Maybe<Array<Scalars['String']>>
  emojiUnicode_contains?: Maybe<Scalars['String']>
  emojiUnicode_not_contains?: Maybe<Scalars['String']>
  emojiUnicode_starts_with?: Maybe<Scalars['String']>
  emojiUnicode_not_starts_with?: Maybe<Scalars['String']>
  emojiUnicode_ends_with?: Maybe<Scalars['String']>
  emojiUnicode_not_ends_with?: Maybe<Scalars['String']>
  svgFile?: Maybe<Scalars['String']>
  svgFile_not?: Maybe<Scalars['String']>
  svgFile_in?: Maybe<Array<Scalars['String']>>
  svgFile_not_in?: Maybe<Array<Scalars['String']>>
  svgFile_contains?: Maybe<Scalars['String']>
  svgFile_not_contains?: Maybe<Scalars['String']>
  svgFile_starts_with?: Maybe<Scalars['String']>
  svgFile_not_starts_with?: Maybe<Scalars['String']>
  svgFile_ends_with?: Maybe<Scalars['String']>
  svgFile_not_ends_with?: Maybe<Scalars['String']>
  country?: Maybe<_CountryFilter>
  country_not?: Maybe<_CountryFilter>
  country_in?: Maybe<Array<_CountryFilter>>
  country_not_in?: Maybe<Array<_CountryFilter>>
}

export type _DistanceToOtherCountryFilter = {
  AND?: Maybe<Array<_DistanceToOtherCountryFilter>>
  OR?: Maybe<Array<_DistanceToOtherCountryFilter>>
  distanceInKm?: Maybe<Scalars['Float']>
  distanceInKm_not?: Maybe<Scalars['Float']>
  distanceInKm_in?: Maybe<Array<Scalars['Float']>>
  distanceInKm_not_in?: Maybe<Array<Scalars['Float']>>
  distanceInKm_lt?: Maybe<Scalars['Float']>
  distanceInKm_lte?: Maybe<Scalars['Float']>
  distanceInKm_gt?: Maybe<Scalars['Float']>
  distanceInKm_gte?: Maybe<Scalars['Float']>
  countryName?: Maybe<Scalars['String']>
  countryName_not?: Maybe<Scalars['String']>
  countryName_in?: Maybe<Array<Scalars['String']>>
  countryName_not_in?: Maybe<Array<Scalars['String']>>
  countryName_contains?: Maybe<Scalars['String']>
  countryName_not_contains?: Maybe<Scalars['String']>
  countryName_starts_with?: Maybe<Scalars['String']>
  countryName_not_starts_with?: Maybe<Scalars['String']>
  countryName_ends_with?: Maybe<Scalars['String']>
  countryName_not_ends_with?: Maybe<Scalars['String']>
}

export type Country = {
  __typename?: 'Country'
  _id?: Maybe<Scalars['String']>
  /** ISO 3166-1 alpha-2 codes are two-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO), to represent countries, dependent territories, and special areas of geographical interest. https://en.m.wikipedia.org/wiki/ISO_3166-1_alpha-2 */
  alpha2Code: Scalars['String']
  /** ISO 3166-1 alpha-3 codes are three-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO), to represent countries, dependent territories, and special areas of geographical interest. https://en.m.wikipedia.org/wiki/ISO_3166-1_alpha-3 */
  alpha3Code: Scalars['String']
  /** The area in square kilometer, you can convert the area unit and population density through the convertedArea property */
  area?: Maybe<Scalars['Float']>
  capital: Scalars['String']
  /** The population per square kilometer */
  populationDensity?: Maybe<Scalars['Float']>
  convertedArea?: Maybe<Area>
  /** identifies residents or natives of a particular place, usually derived from the name of the place or that of an ethnic group. https://en.m.wikipedia.org/wiki/Demonym */
  demonym: Scalars['String']
  /** In economics, the Gini coefficient, sometimes called the Gini index or Gini ratio, is a measure of statistical dispersion intended to represent the income or wealth distribution of a nation's residents, and is the most commonly used measurement of inequality. https://en.m.wikipedia.org/wiki/Gini_coefficient */
  gini?: Maybe<Scalars['Float']>
  location: _Neo4jPoint
  name: Scalars['String']
  nameTranslation?: Maybe<Scalars['String']>
  nameTranslations?: Maybe<Array<Maybe<Translation>>>
  nativeName: Scalars['String']
  numericCode?: Maybe<Scalars['String']>
  population: Scalars['Float']
  /** A country code top-level domain (ccTLD) is an Internet top-level domain generally used or reserved for a country, sovereign state, or dependent territory identified with a country code. https://en.m.wikipedia.org/wiki/Country_code_top-level_domain */
  topLevelDomains?: Maybe<Array<Maybe<TopLevelDomain>>>
  callingCodes?: Maybe<Array<Maybe<CallingCode>>>
  alternativeSpellings?: Maybe<Array<Maybe<AlternativeSpelling>>>
  timezones?: Maybe<Array<Maybe<Timezone>>>
  borders?: Maybe<Array<Maybe<Country>>>
  subregion?: Maybe<Subregion>
  officialLanguages?: Maybe<Array<Maybe<Language>>>
  currencies?: Maybe<Array<Maybe<Currency>>>
  regionalBlocs?: Maybe<Array<Maybe<RegionalBloc>>>
  flag?: Maybe<Flag>
  distanceToOtherCountries?: Maybe<Array<Maybe<DistanceToOtherCountry>>>
  /** Shortest path to go from one country to another with the least border crossing as possible */
  shortestPathToOtherCountry?: Maybe<Array<Maybe<Country>>>
}

export type CountryConvertedAreaArgs = {
  areaUnit?: Maybe<AreaUnit>
}

export type CountryNameTranslationArgs = {
  languageCode?: Maybe<LanguageCode>
}

export type CountryNameTranslationsArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_TranslationOrdering>>>
  filter?: Maybe<_TranslationFilter>
}

export type CountryTopLevelDomainsArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_TopLevelDomainOrdering>>>
  filter?: Maybe<_TopLevelDomainFilter>
}

export type CountryCallingCodesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CallingCodeOrdering>>>
  filter?: Maybe<_CallingCodeFilter>
}

export type CountryTimezonesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_TimezoneOrdering>>>
  filter?: Maybe<_TimezoneFilter>
}

export type CountryBordersArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
}

export type CountrySubregionArgs = {
  filter?: Maybe<_SubregionFilter>
}

export type CountryOfficialLanguagesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_LanguageOrdering>>>
  filter?: Maybe<_LanguageFilter>
}

export type CountryCurrenciesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CurrencyOrdering>>>
  filter?: Maybe<_CurrencyFilter>
}

export type CountryRegionalBlocsArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_RegionalBlocOrdering>>>
  filter?: Maybe<_RegionalBlocFilter>
}

export type CountryFlagArgs = {
  filter?: Maybe<_FlagFilter>
}

export type CountryDistanceToOtherCountriesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_DistanceToOtherCountryOrdering>>>
}

export type CountryShortestPathToOtherCountryArgs = {
  otherCountryAlpha2Code: Scalars['String']
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
}

export enum AreaUnit {
  SquareKilometers = 'SQUARE_KILOMETERS',
  SquareMeters = 'SQUARE_METERS',
  SquareMiles = 'SQUARE_MILES',
}

export type Area = {
  __typename?: 'Area'
  value?: Maybe<Scalars['Float']>
  unit?: Maybe<Scalars['String']>
  /** The population per square <your selected unit> */
  populationDensity?: Maybe<Scalars['Float']>
}

export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint'
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  z?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  crs?: Maybe<Scalars['String']>
  srid?: Maybe<Scalars['Int']>
}

export enum LanguageCode {
  Fa = 'fa',
  Hr = 'hr',
  Nl = 'nl',
  Pt = 'pt',
  Br = 'br',
  It = 'it',
  Ja = 'ja',
  Fr = 'fr',
  Es = 'es',
  De = 'de',
}

export enum _TranslationOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  LanguageCodeAsc = 'languageCode_asc',
  LanguageCodeDesc = 'languageCode_desc',
  ValueAsc = 'value_asc',
  ValueDesc = 'value_desc',
}

export type Translation = {
  __typename?: 'Translation'
  _id?: Maybe<Scalars['String']>
  languageCode: Scalars['String']
  value: Scalars['String']
}

export enum _TopLevelDomainOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
}

export type TopLevelDomain = {
  __typename?: 'TopLevelDomain'
  _id?: Maybe<Scalars['String']>
  name: Scalars['String']
  countries?: Maybe<Array<Maybe<Country>>>
}

export type TopLevelDomainCountriesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
  filter?: Maybe<_CountryFilter>
}

export enum _CallingCodeOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
}

export type CallingCode = {
  __typename?: 'CallingCode'
  _id?: Maybe<Scalars['String']>
  name: Scalars['String']
  countries?: Maybe<Array<Maybe<Country>>>
}

export type CallingCodeCountriesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
  filter?: Maybe<_CountryFilter>
}

export type AlternativeSpelling = {
  __typename?: 'AlternativeSpelling'
  _id: Scalars['String']
  name: Scalars['String']
  countries?: Maybe<Array<Maybe<Country>>>
}

export type AlternativeSpellingCountriesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
  filter?: Maybe<_CountryFilter>
}

export enum _TimezoneOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
}

export type Timezone = {
  __typename?: 'Timezone'
  _id?: Maybe<Scalars['String']>
  name: Scalars['String']
  countries?: Maybe<Array<Maybe<Country>>>
}

export type TimezoneCountriesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
  filter?: Maybe<_CountryFilter>
}

export type Subregion = {
  __typename?: 'Subregion'
  _id?: Maybe<Scalars['String']>
  name: Scalars['String']
  region?: Maybe<Region>
  countries?: Maybe<Array<Maybe<Country>>>
}

export type SubregionRegionArgs = {
  filter?: Maybe<_RegionFilter>
}

export type SubregionCountriesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
  filter?: Maybe<_CountryFilter>
}

export type Region = {
  __typename?: 'Region'
  _id?: Maybe<Scalars['String']>
  name: Scalars['String']
  subregions?: Maybe<Array<Maybe<Subregion>>>
}

export type RegionSubregionsArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_SubregionOrdering>>>
  filter?: Maybe<_SubregionFilter>
}

export enum _SubregionOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
}

export enum _LanguageOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  Iso639_1Asc = 'iso639_1_asc',
  Iso639_1Desc = 'iso639_1_desc',
  Iso639_2Asc = 'iso639_2_asc',
  Iso639_2Desc = 'iso639_2_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  NativeNameAsc = 'nativeName_asc',
  NativeNameDesc = 'nativeName_desc',
}

export type Language = {
  __typename?: 'Language'
  _id?: Maybe<Scalars['String']>
  iso639_1: Scalars['String']
  iso639_2: Scalars['String']
  name: Scalars['String']
  nativeName: Scalars['String']
  countries?: Maybe<Array<Maybe<Country>>>
}

export type LanguageCountriesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
  filter?: Maybe<_CountryFilter>
}

export enum _CurrencyOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  CodeAsc = 'code_asc',
  CodeDesc = 'code_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  SymbolAsc = 'symbol_asc',
  SymbolDesc = 'symbol_desc',
}

export type Currency = {
  __typename?: 'Currency'
  _id?: Maybe<Scalars['String']>
  code: Scalars['String']
  name: Scalars['String']
  symbol: Scalars['String']
  countries?: Maybe<Array<Maybe<Country>>>
}

export type CurrencyCountriesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
  filter?: Maybe<_CountryFilter>
}

export enum _RegionalBlocOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AcronymAsc = 'acronym_asc',
  AcronymDesc = 'acronym_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
}

export type RegionalBloc = {
  __typename?: 'RegionalBloc'
  _id?: Maybe<Scalars['String']>
  acronym: Scalars['String']
  name: Scalars['String']
  otherAcronyms?: Maybe<Array<Maybe<OtherAcronym>>>
  otherNames?: Maybe<Array<Maybe<OtherName>>>
  countries?: Maybe<Array<Maybe<Country>>>
}

export type RegionalBlocCountriesArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>
  filter?: Maybe<_CountryFilter>
}

export type OtherAcronym = {
  __typename?: 'OtherAcronym'
  _id: Scalars['String']
  name: Scalars['String']
  regionalBlocs?: Maybe<Array<Maybe<RegionalBloc>>>
}

export type OtherAcronymRegionalBlocsArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_RegionalBlocOrdering>>>
  filter?: Maybe<_RegionalBlocFilter>
}

export type OtherName = {
  __typename?: 'OtherName'
  _id: Scalars['String']
  name: Scalars['String']
  regionalBlocs?: Maybe<Array<Maybe<RegionalBloc>>>
}

export type OtherNameRegionalBlocsArgs = {
  first?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<Maybe<_RegionalBlocOrdering>>>
  filter?: Maybe<_RegionalBlocFilter>
}

export type Flag = {
  __typename?: 'Flag'
  _id?: Maybe<Scalars['String']>
  emoji: Scalars['String']
  emojiUnicode: Scalars['String']
  svgFile: Scalars['String']
  country?: Maybe<Country>
}

export type FlagCountryArgs = {
  filter?: Maybe<_CountryFilter>
}

export enum _DistanceToOtherCountryOrdering {
  DistanceInKmAsc = 'distanceInKm_asc',
  DistanceInKmDesc = 'distanceInKm_desc',
  CountryNameAsc = 'countryName_asc',
  CountryNameDesc = 'countryName_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
}

export type DistanceToOtherCountry = {
  __typename?: 'DistanceToOtherCountry'
  distanceInKm?: Maybe<Scalars['Float']>
  /** Sorry can't return the full country type :/ */
  countryName?: Maybe<Scalars['String']>
  _id?: Maybe<Scalars['String']>
}

export enum _RegionOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
}

export enum _FlagOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  EmojiAsc = 'emoji_asc',
  EmojiDesc = 'emoji_desc',
  EmojiUnicodeAsc = 'emojiUnicode_asc',
  EmojiUnicodeDesc = 'emojiUnicode_desc',
  SvgFileAsc = 'svgFile_asc',
  SvgFileDesc = 'svgFile_desc',
}

export type _Neo4jTime = {
  __typename?: '_Neo4jTime'
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  timezone?: Maybe<Scalars['String']>
  formatted?: Maybe<Scalars['String']>
}

export type _Neo4jTimeInput = {
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  timezone?: Maybe<Scalars['String']>
  formatted?: Maybe<Scalars['String']>
}

export type _Neo4jDate = {
  __typename?: '_Neo4jDate'
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
  formatted?: Maybe<Scalars['String']>
}

export type _Neo4jDateInput = {
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
  formatted?: Maybe<Scalars['String']>
}

export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime'
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  timezone?: Maybe<Scalars['String']>
  formatted?: Maybe<Scalars['String']>
}

export type _Neo4jDateTimeInput = {
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  timezone?: Maybe<Scalars['String']>
  formatted?: Maybe<Scalars['String']>
}

export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime'
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  formatted?: Maybe<Scalars['String']>
}

export type _Neo4jLocalTimeInput = {
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  formatted?: Maybe<Scalars['String']>
}

export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime'
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  formatted?: Maybe<Scalars['String']>
}

export type _Neo4jLocalDateTimeInput = {
  year?: Maybe<Scalars['Int']>
  month?: Maybe<Scalars['Int']>
  day?: Maybe<Scalars['Int']>
  hour?: Maybe<Scalars['Int']>
  minute?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
  millisecond?: Maybe<Scalars['Int']>
  microsecond?: Maybe<Scalars['Int']>
  nanosecond?: Maybe<Scalars['Int']>
  formatted?: Maybe<Scalars['String']>
}

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT',
}
