import Instagram from './social-media-icons/Instagram';
import Linkedin from './social-media-icons/Linkedin';
import Twitter from './social-media-icons/Twitter';
import GitHub from './social-media-icons/GitHub';

const SocialMedia = () => {
  return (
    <div className="flex flex-row space-x-6 items-center">
      <a
        href="https://www.linkedin.com/in/aref-akminasi-91412b207/"
        aria-label="linkedin"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a
        href="https://github.com/Aref-Akminasi"
        target="_blank"
        aria-label="github"
      >
        <GitHub />
      </a>
      <a
        href="https://www.instagram.com/aref_akminasi/"
        target="_blank"
        aria-label="instagram"
      >
        <Instagram />
      </a>
      <a
        href="https://twitter.com/aref_akminasi"
        target="_blank"
        aria-label="twitter"
      >
        <Twitter />
      </a>
    </div>
  );
};

export default SocialMedia;
