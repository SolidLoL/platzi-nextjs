import React from 'react'
import { useRouter } from 'next/router'

const Anime = () => {
  const { query } = useRouter()

  return (
    <section>
      <h1>id anime: {query.id}</h1>
    </section>
  )
}

export default Anime
