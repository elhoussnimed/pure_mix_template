import "./SocialMedia.css";
import SocialMediaItem from "./SocialMediaItem";

function SocialMedia() {
  return (
    <div className="socialMedia">
      <SocialMediaItem icone={<i className="fa-brands fa-facebook"></i>}/>
      <SocialMediaItem icone={<i className="fa-brands fa-twitter"></i>}/>
      <SocialMediaItem icone={<i className="fa-brands fa-instagram"></i>}/>
      <SocialMediaItem icone={<i className="fa-brands fa-youtube"></i>}/>
      <SocialMediaItem icone={<i className="fa-brands fa-linkedin"></i>}/>
    </div>
  );
}

export default SocialMedia;
