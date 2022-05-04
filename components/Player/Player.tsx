import ReactPlayer, { Config}  from 'react-player'
import { Episode } from '@mattplays/aniapi';
import Hls, { HlsUrlParameters } from 'hls.js';
import {  useEffect } from 'react';



const Player = ({video, video_headers}:Episode) => {
    //console.log(file)
    //console.log(ReactPlayer);
    const VideoProof =()=>{
        return (<video id="video"></video>)
    }
    const playerConfig:Config ={
        file:{
            hlsOptions:{
                xhrSetup: function (xhr:any, url:string) {
                    xhr.withCredentials = true;
                    console.log(xhr)
                    if (!xhr.readyState){
                    xhr.setRequestHeader('Content-Type', 'application/x-mpegURL');
                    xhr.setRequestHeader(video_headers);
                    }
                }
            },
            forceHLS: true,
        }
    } 
    //console.log(playerConfig);
    /* useEffect( () => {
      if(Hls.isSupported()){
        let hls = new Hls();
        const video = document.getElementById('video');
        // bind them together
        hls.attachMedia(video);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          console.log('video and hls.js are now bound together !');
          hls.loadSource('https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8');
          hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            console.log(
              'manifest loaded, found ' + data.levels.length + ' quality level'
            );
          });
        });
        hls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  // try to recover network error
                  console.log('fatal network error encountered, try to recover');
                  hls.startLoad();
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  console.log('fatal media error encountered, try to recover');
                  hls.recoverMediaError();
                  break;
                default:
                  // cannot recover
                  hls.destroy();
                  break;
              }
            }
          });
        console.log(Hls.Events.MEDIA_ATTACHED);
        async function playVideo (video){
            const event = await Hls.Events.MEDIA_ATTACHED;
            if(event){
                video?.play();
            }
        }
        playVideo(video);
      }
    }, []) */
    
    /* const requestMediaVideo = () => { 
        var myHeaders = new Headers();
        myHeaders.append("referer", "https://vidstream.pro/info/26J38K2GDPRD?domain=gogoanime.lol&skey=dcb0a59359d3f732f8b545fd2908e497");

        var requestOptions:object = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://yqwym.vizcloud2.online/simple/EqPFIPsQBAro1HhYl67rC5ou_lxbu__oTEN7rqk+wYMnU94US2El/br/list.m3u8", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
     }
     useEffect(() => {
        requestMediaVideo();
     }, []) */
     
  return ( 
      <>
      <ReactPlayer 
        url={video} 
        config={{
            file:{
            hlsOptions:{
                xhrSetup: function (xhr:any, url:string) {
                    console.log('url',url)
                    console.log('xhr',xhr)
                    //xhr.withCredentials = true;
                    xhr.setRequestHeader(video_headers)
                    xhr.setRequestHeader('Content-Type', 'application/vnd.apple.mpegurl');
                    },   
                    debug: true,
                    cmcd: {
                        useHeaders: video_headers
                    },
                },
                forceHLS: false,
                forceVideo: true,
            }
        }}
        /* config={{
            file:{
            hlsOptions:{
                licenseXhrSetup: function (xhr:any, url:string) {
                        xhr.withCredentials = true;
                        if (!xhr.readyState){
                            xhr.setRequestHeader('Content-Type', 'application/vnd.apple.mpegurl');
                            xhr.setRequestHeader(video_headers);
                            xhr.open('POST', url, true);
                            console.log(url)
                        }
                    }   
                },
            forceHLS: true,
            }
        }} */
        playing />
      </>
  )
}

export default Player