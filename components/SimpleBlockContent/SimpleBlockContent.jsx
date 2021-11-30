import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import InstagramEmbed from "react-instagram-embed";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../lib/api";
import Link from "next/link";

const serializers = {
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = `/${slug.current === "/" ? "" : slug.current}`;
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      );
    },
    link: ({ mark, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    }
  },
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube opts={{ width: "100%" }} videoId={id} />;
    },
    instagramPost: ({ node: { url } }) => {
      return (
        <InstagramEmbed
          url={url}
          clientAccessToken="219903692828103|763dcd079a28a8f09adaabde8734ab72"
          maxWidth={320}
          containerTagName="div"
          injectScript
          onFailure={() => <h4>Instagram is here</h4>}
        />
      );
    },
    figure: ({ node: { asset, caption } }) => {
      const style = {
        float: "left",
        marginRight: "20px",
        marginBottom: "20px"
      };

      return (
        <div style={{ ...style }}>
          <img src={urlFor(asset).width(250).fit("max").url()} alt={caption} />
        </div>
      );
    }
  }
};

function SimpleBlockContent({ blocks }) {
  if (!blocks) {
    console.error("Missing blocks");
    return null;
  }

  return <BlockContent blocks={blocks} serializers={serializers} />;
}

export default SimpleBlockContent;
