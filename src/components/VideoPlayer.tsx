import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  videoUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

// NOTE: Using a placeholder YouTube URL. Replace it with your actual VSL embed link when ready.
const VideoPlayer = ({ videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&modestbranding=1&rel=0", className, style }: VideoPlayerProps) => {
  return (
    <div
      className={cn(
        "relative w-full z-10",
        className
      )}
      style={style}
    >
      {/* AspectRatio ensures the video scales correctly on all screen sizes */}
      <AspectRatio ratio={16 / 9} className="glass rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)]">
        <iframe
          src={videoUrl}
          title="Video Sales Letter"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
