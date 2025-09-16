import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useCallback, useRef } from "react";

interface Props {
  cssClasses?: string;
}

const libraries: "marker"[] = ["marker"];

const MapComponent = ({ cssClasses }: Props) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const onMapLoad = useCallback((map: google.maps.Map) => {
    try {
      mapRef.current = map;

      if (
        window.google &&
        window.google.maps &&
        window.google.maps.marker &&
        window.google.maps.marker.AdvancedMarkerElement
      ) {
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
          map: map,
          position: { lat: -34.053203855164085, lng: 23.372282499978226 },
          title: "La Luna Boutique",
        });
      }
    } catch (error) {
      console.error("Error loading map:", error);
    }
  }, []);

  const onUnmount = useCallback(() => {
    try {
      if (markerRef.current) {
        markerRef.current.map = null;
        markerRef.current = null;
      }
      mapRef.current = null;
    } catch (error) {
      console.error("Error unmounting map:", error);
    }
  }, []);

  if (loadError) {
    return (
      <div
        className={`bg-blush-pink grid place-items-center py-16 ${cssClasses}`}
      >
        <p className="text-heading font-thin">Error loading map</p>
      </div>
    );
  }

  if (!isLoaded || !window.google || !window.google.maps)
    return (
      <div
        className={`bg-blush-pink grid place-items-center py-16 ${cssClasses}`}
      >
        <p className="text-heading font-thin">Map loading...</p>
      </div>
    );

  return (
    <GoogleMap
      zoom={16}
      center={{ lat: -34.053203855164085, lng: 23.372282499978226 }}
      mapContainerClassName={cssClasses}
      onLoad={onMapLoad}
      onUnmount={onUnmount}
      options={{
        mapId: "la-luna-map",
      }}
    />
  );
};

export default MapComponent;
