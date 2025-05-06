import React from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { Play } from 'lucide-react';
const Video = () => {
  React.useEffect(() => {
      console.clear();
    }, [])
    const [isOpen, setOpen] = React.useState(false);
    return (
      <section
        className="team section "
        style={{ position:"relative"}}
      >
       <div
       style={{
     display:"flex",
        justifyContent:"center"


       }}
        >
          <img
          src="/assets/img/slid-1.jpg"
       style={{
        width:"100%",
        height:"500px",
        objectFit:"cover",
        filter:"grayscale(100%)",
        opacity:"0.8"
       }}
          />
                <a
          className="vid valign2"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
          href="/assets/video/video.mp4"
        >
          <div className="vid-butn" >  
            <span className="icon"  >
              <Play  style={{
                color:"#FAF9F0",
                border:"1px solid #FAF9F0",
                backgroundColor:"GrayText",
                borderRadius:"50px",
                padding:"5px",
                width:"50px",
                height:"50px"
                
              }}/>
            </span>
          </div>
        </a>
        </div>
        {typeof window !== "undefined" && (
       <ModalVideo
       channel="custom"
       isOpen={isOpen}
       url="/assets/video/video.mp4"
       onClose={() => setOpen(false)}
     />
        )}
         

      </section>
    );
}

export default Video