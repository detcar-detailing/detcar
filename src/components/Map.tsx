import {
  DET_CAR_GOOGLE_MAP_EMBED_SRC,
  DET_CAR_MAP_IFRAME_TITLE,
} from "@/constants/detCarGoogleMap";

const Map: React.FC = () => {
  return (
    <iframe
      src={DET_CAR_GOOGLE_MAP_EMBED_SRC}
      className="h-96 w-full border-0"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={DET_CAR_MAP_IFRAME_TITLE}
      aria-label={DET_CAR_MAP_IFRAME_TITLE}
    ></iframe>
  );
};

export default Map;
