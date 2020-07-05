import React from 'react'

import { useCountryNamesQuery } from '../queries/autogenerate/hooks'

export default function Home() {
  const { loading, data, error } = useCountryNamesQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong.</p>

  return (
    <div>
      <h1>All countries in the world</h1>
      {data?.Country?.map((item, index) => {
        return (
          <div key={item?._id ?? index}>
            <h3>{item?.name}</h3>
            <p>{item?.capital}</p>
            <p>{item?.currencies?.map((e) => e?.code)}</p>
          </div>
        )
      })}
    </div>
  )
}
