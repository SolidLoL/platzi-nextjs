import React, {  useEffect, useRef, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { GetServerSideProps } from 'next'
import { Episode } from '@mattplays/aniapi'
//import Player from '@components/Player/Player'
import Hls  from 'hls.js'
//import dynamic, { DynamicOptions } from 'next/dynamic'
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context
  const anime = params?.slug
  const fetchInfo = anime ? `${anime[0]}/${anime[1]}` : `11/5`
  const response = await fetch(
    `http://localhost:3000/api/animamushi/episode/${fetchInfo}`
  )
  const {
    data: { documents },
  } = await response.json()
  const data = await documents[0]
  const H = () => { 
    if(Hls && Hls.isSupported()){
      const hls = new Hls();
      console.log(hls);
      hls.config.xhrSetup = (xhr: XMLHttpRequest, url: string) => {
        console.log(xhr)
        console.log(url)
         xhr.setRequestHeader("referer","https://vidstream.pro/info/26J38K2GDPRD?domain=gogoanime.lol&skey=dcb0a59359d3f732f8b545fd2908e497") 
      }
      hls?.on(Hls.Events.MEDIA_ATTACHED, () => {
      
        hls?.loadSource(
            'https://yqwym.vizcloud2.online/simple/EqPFIPsQBAro1HhYl67rC5ou_lxbu__oTEN7rqk+wYMnU94US2El/br/list.m3u8'
          )
        })
      hls?.on(Hls.Events.ERROR, function (event: any, data: any) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.log('fatal network error encountered, try to recover')
              hls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log('fatal media error encountered, try to recover')
              hls.recoverMediaError()
              break
            default:
              // cannot recover
              hls.destroy()
              break
          }
        }
      })
      console.log(Hls)
    }
   }
   H();
  //console.log(context);
  /* const hlsConfig ={
      xhrSetup:(xhr: XMLHttpRequest, initParams: any):void => {
          console.log(xhr);
          console.log(initParams)
      }
    }  */

  //console.log(Hls)
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

  return {
    props: { data },
  }
}

const AnimeWatch = ({ data }: { data: Episode}) => {
  //const config ={}
  /* const xhrSetup = (xhr: XMLHttpRequest, url: string) => {
    console.log('xhr', xhr)
    console.log('url', url)
  } */
  //const hls = ()=>{new Hls()};
  const videoRef = useRef(null)
  //console.log(window)
  //const hlsClass = useMemo(() => new Hls(), [Hls]);
   const [hls, setHls] = useState()
   useEffect(() => {
    /*  if (Hls.isSupported() && videoRef.current) {
       const hls = new Hls();
      hls?.attachMedia(videoRef?.current)
      
      hls.config.xhrSetup = (xhr: XMLHttpRequest, url: string) => {
        console.log(xhr)
        console.log(url)
         xhr.setRequestHeader("referer","https://vidstream.pro/info/26J38K2GDPRD?domain=gogoanime.lol&skey=dcb0a59359d3f732f8b545fd2908e497") 
      }
      hls?.on(Hls.Events.MEDIA_ATTACHED, () => {
      
        hls?.loadSource(
            'https://yqwym.vizcloud2.online/simple/EqPFIPsQBAro1HhYl67rC5ou_lxbu__oTEN7rqk+wYMnU94US2El/br/list.m3u8'
          )
        })
      hls?.on(Hls.Events.ERROR, function (event: any, data: any) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.log('fatal network error encountered, try to recover')
              hls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log('fatal media error encountered, try to recover')
              hls.recoverMediaError()
              break
            default:
              // cannot recover
              hls.destroy()
              break
          }
        }
      })
      console.log(Hls)
    } */
  }, [])
  
  return (
    <>
     {/*  <video ref={videoRef} controls /> */} 
    </>
  )
}

export default AnimeWatch
