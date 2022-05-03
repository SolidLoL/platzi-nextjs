import React from 'react'
import { useRouter } from 'next/router'
const AnimeWatch = () => {
    const { query:{slug} } = useRouter();
    
  return (
    <div>AnimeWatch</div>
  )
}

export default AnimeWatch