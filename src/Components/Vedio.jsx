import React from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from'@zegocloud/zego-uikit-prebuilt'
const Vedio = () => {
    const {id}  = useParams();
    console.log(id);
    const meeting = async(element)=>{
        const appID =350586286 ;
        const serverSecret = "54d4b0ea3ba99e1348c2dbb111f88a03";
        const kittoken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,id,"rehan","Rehan Paudel");
        const zc = ZegoUIKitPrebuilt.create(kittoken);
        zc.joinRoom({
            container: element,
            scenario : {
                mode : ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton : true, 
            sharedLinks : [
                {
                    name : "Copy link",
                    url : `https://localhost:3000/vedio/${id}`
                }
            ]
        })
    }
  return (
    <div>
        <div ref={meeting}/>
    </div>
  )
}

export default Vedio