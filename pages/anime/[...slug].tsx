import React from 'react'
import fetch from 'isomorphic-unfetch'
import { GetServerSideProps } from 'next';
import { Episode } from '@mattplays/aniapi';
import Player from '@components/Player/Player';
import Hls from 'hls.js';


export const getServerSideProps: GetServerSideProps = async (context) => {
    const {params} = context;
    const anime = params?.slug; 
    const fetchInfo = anime ? `${anime[0]}/${anime[1]}` : `11/5`
    const response = await fetch(`http://localhost:3000/api/animamushi/episode/${fetchInfo}`);
    const {data: {documents}} = await response.json();
    const data = documents[0];
    
    console.log(context);

    //const hls = new Hls();
    console.log(Hls)
    /* hls.loadSource("https://yqwym.vizcloud2.online/simple/EqPFIPsQBAro1HhYl67rC5ou_lxbu__oTEN7rqk+wYMnU94US2El/br/list.m3u8"); */

      /* const myHeaders = new Headers();
      myHeaders.append("referer", "https://vidstream.pro/info/26J38K2GDPRD?domain=gogoanime.lol&skey=dcb0a59359d3f732f8b545fd2908e497");

      const requestOptions:object = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

      const responseVideo = await fetch("https://yqwym.vizcloud2.online/simple/EqPFIPsQBAro1HhYl67rC5ou_lxbu__oTEN7rqk+wYMnU94US2El/br/list.m3u8", requestOptions);
      const result = await responseVideo;
      
      console.log(result) */

    return{
        props:{
          data
        }
    }
}

const AnimeWatch = ({data}:{data:Episode}) => {
  /* const prop:object = {
    video: documents[0]
  };  */
  //const data:object = Object.entries(documents);
  //const {} = data
  //const {video, video_headers}= data;
  console.log("Animewhtch",data)
  return (
   <Player {...data} />
  )
}

export default AnimeWatch