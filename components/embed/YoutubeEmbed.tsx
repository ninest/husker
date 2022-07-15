interface YoutubeEmbedProps {
  videoId: string;
}

export const YoutubeEmbed = ({ videoId }: YoutubeEmbedProps) => {
  return (
    <div>
      <iframe
        className="rounded-md w-full h-64 md:h-52 lg:h-96"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
