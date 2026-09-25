import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { mountains } from "../data/mountains";
import MountainDetailModal from "./MountainDetailModal";

import type { Mountain } from "../data/mountains";

const mountainIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const regions = [
  "Tất cả",
  "Tây Bắc",
  "Đông Bắc",
  "Miền Trung",
  "Tây Nguyên",
  "Miền Nam",
  "Miền Tây",
];

const regionViews: Record<
  string,
  {
    center: [number, number];
    zoom: number;
  }
> = {
  "Tất cả": {
    center: [16.0, 107.5],
    zoom: 5,
  },

  "Tây Bắc": {
    center: [21.9, 103.8],
    zoom: 8,
  },

  "Đông Bắc": {
    center: [22.2, 106.3],
    zoom: 7,
  },

  "Miền Trung": {
    center: [16.0, 108.0],
    zoom: 7,
  },

  "Tây Nguyên": {
    center: [13.9, 108.2],
    zoom: 7,
  },

  "Miền Nam": {
    center: [11.0, 106.5],
    zoom: 7,
  },

  "Miền Tây": {
    center: [10.2, 105.8],
    zoom: 8,
  },
};

/*
  Điều khiển vị trí + zoom của bản đồ
*/
function MapController({
  selectedRegion,
}: {
  selectedRegion: string;
}) {
  const map = useMap();

  useEffect(() => {
    const view =
      regionViews[selectedRegion] ??
      regionViews["Tất cả"];

    map.flyTo(
      view.center,
      view.zoom,
      {
        duration: 1.5,
      }
    );
  }, [selectedRegion, map]);

  return null;
}

export default function InteractiveMountainMap() {
  const [selectedRegion, setSelectedRegion] =
    useState("Tất cả");

  const [selectedMountain, setSelectedMountain] =
    useState<Mountain | null>(null);

  /*
    Lọc núi theo khu vực
  */
  const filteredMountains = useMemo(() => {
    if (selectedRegion === "Tất cả") {
      return mountains;
    }

    return mountains.filter(
      (mountain) =>
        mountain.region === selectedRegion
    );
  }, [selectedRegion]);

  return (
    <>
      <section
        id="map"
        className="bg-black px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* ========================= */}
          {/* Heading */}
          {/* ========================= */}
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
              Explore by map
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Bản đồ núi Việt Nam
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 md:text-lg">
              Khám phá vị trí những ngọn núi nổi bật và
              các vùng núi trên khắp Việt Nam.
            </p>
          </div>

          {/* ========================= */}
          {/* Region Filter */}
          {/* ========================= */}
          <div className="mb-8 flex flex-wrap gap-2">
            {regions.map((region) => {
              const isActive =
                selectedRegion === region;

              return (
                <button
                  key={region}
                  type="button"
                  onClick={() =>
                    setSelectedRegion(region)
                  }
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>

          {/* ========================= */}
          {/* Result Count */}
          {/* ========================= */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-white/40">
              {filteredMountains.length} ngọn núi
            </p>

            {selectedRegion !== "Tất cả" && (
              <button
                type="button"
                onClick={() =>
                  setSelectedRegion("Tất cả")
                }
                className="text-sm text-white/40 transition hover:text-white"
              >
                Xóa bộ lọc
              </button>
            )}
          </div>

          {/* ========================= */}
          {/* Map */}
          {/* ========================= */}
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="h-[500px] w-full md:h-[650px]">

              <MapContainer
                center={[16.0, 107.5]}
                zoom={5}
                scrollWheelZoom={true}
                className="h-full w-full"
              >
                {/* OpenStreetMap */}
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Auto Zoom */}
                <MapController
                  selectedRegion={selectedRegion}
                />

                {/* Mountain Markers */}
                {filteredMountains.map((mountain) => {
                  const coordinates: [
                    number,
                    number
                  ] = [
                    mountain.latitude,
                    mountain.longitude,
                  ];

                  return (
                    <Marker
                      key={mountain.id}
                      position={coordinates}
                      icon={mountainIcon}
                    >
                      <Popup>
                        <div className="min-w-[210px]">

                          {/* Name */}
                          <h3 className="text-lg font-bold">
                            {mountain.name}
                          </h3>

                          {/* Location */}
                          <p className="mt-1 text-sm text-gray-600">
                            {mountain.province}
                          </p>

                          {/* Height */}
                          <p className="mt-1 text-sm">
                            Độ cao:{" "}
                            <strong>
                              {mountain.height.toLocaleString()} m
                            </strong>
                          </p>

                          {/* Region */}
                          <p className="mt-1 text-sm">
                            Khu vực:{" "}
                            <strong>
                              {mountain.region}
                            </strong>
                          </p>

                          {/* Detail Button */}
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedMountain(
                                mountain
                              )
                            }
                            className="mt-4 w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                          >
                            Xem chi tiết
                          </button>

                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>

            </div>
          </div>

          {/* ========================= */}
          {/* Empty State */}
          {/* ========================= */}
          {filteredMountains.length === 0 && (
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 text-center">
              <p className="text-sm text-white/60">
                Chưa có dữ liệu núi cho khu vực này.
              </p>

              <p className="mt-2 text-xs text-white/30">
                Dữ liệu sẽ được bổ sung trong các phiên bản tiếp theo.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ========================= */}
      {/* Mountain Detail Modal */}
      {/* ========================= */}
      <MountainDetailModal
        mountain={selectedMountain}
        onClose={() => setSelectedMountain(null)}
      />
    </>
  );
}