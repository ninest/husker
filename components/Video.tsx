interface VideoProps {
  src: string;
  type: string;
}
export const Video = ({ src, type = "video/mp4" }: VideoProps) => {
  return (
    <video controls>
      <source src={"/notouchy/" + src} type="video/mp4" />
      Your browser does not support videos. Why're you stuck in the 90s?
    </video>
  );
};