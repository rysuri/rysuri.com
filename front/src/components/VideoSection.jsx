const videoClips = [
  {
    id: 1,
    label: "Cinematic Edit",
    src: new URL("../assets/videos/clip1.gif", import.meta.url).href,
  },
  {
    id: 2,
    label: "Montage Reel",
    src: new URL("../assets/videos/clip2.gif", import.meta.url).href,
  },
  {
    id: 3,
    label: "Event Recap",
    src: new URL("../assets/videos/clip3.gif", import.meta.url).href,
  },
  {
    id: 4,
    label: "Short-Form",
    src: new URL("../assets/videos/clip4.gif", import.meta.url).href,
  },
  {
    id: 5,
    label: "Gaming Clip",
    src: new URL("../assets/videos/clip5.gif", import.meta.url).href,
  },
  {
    id: 6,
    label: "Clip 6",
    src: new URL("../assets/videos/clip6.gif", import.meta.url).href,
  },
  {
    id: 7,
    label: "Clip 7",
    src: new URL("../assets/videos/clip7.gif", import.meta.url).href,
  },
  {
    id: 8,
    label: "Clip 8",
    src: new URL("../assets/videos/clip8.gif", import.meta.url).href,
  },
  {
    id: 9,
    label: "Clip 9",
    src: new URL("../assets/videos/clip9.gif", import.meta.url).href,
  },
];

function VideoSection() {
  return (
    <div className="w-full bg-neutral-900 py-28 overflow-hidden">
      <div className="max-w-[1092px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-0">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3">
            Oh, one more thing
          </p>
          <h2 className="text-2xl font-bold text-white">I also edit videos.</h2>
          <p className="text-sm text-neutral-400 mt-2">
            When I am not coding, I'm using the Adobe Suite to craft videos that
            have garnered me <strong>3,500+ followers</strong> and{" "}
            <strong>135K+ likes</strong>.
          </p>
        </div>
      </div>

      <div
        className="flex justify-center gap-5 px-8 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {videoClips.map((clip) => (
          <div
            key={clip.id}
            className="flex-shrink-0 w-80 rounded-xl overflow-hidden"
          >
            <img
              src={clip.src}
              alt={clip.label}
              className="w-full h-52 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://www.tiktok.com/@perkacs"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors border border-neutral-700 hover:border-neutral-500 px-5 py-2.5 rounded-full"
        >
          Follow me on TikTok ↗
        </a>
      </div>
    </div>
  );
}

export default VideoSection;
