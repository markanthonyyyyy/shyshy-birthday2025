import React, { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const videoRef = useRef(null)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <main className="bg-background flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          {/* Video Container */}
          <div className="relative bg-black aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/video/bday.mp4" type="video/mp4" />
              {/*
                HOW TO REPLACE YOUR VIDEO:
                
                1. Place your video file in the "public" folder
                2. Change the src path above to match your file:
                   Examples:
                   - src="/my-video.mp4"
                   - src="/my-video.webm"
                   - src="/uploads/my-video.mov"
                
                3. Supported formats: MP4, WebM, Ogg, MOV
                
                Multiple sources (for browser compatibility):
                <source src="/my-video.mp4" type="video/mp4" />
                <source src="/my-video.webm" type="video/webm" />
              */}
              Your browser does not support the video tag.
            </video>

            {/* Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center gap-3">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="p-2 hover:bg-white/20 rounded transition"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
              </button>

              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-white/20 rounded transition"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
              </button>

              {/* Volume Slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white/30 rounded cursor-pointer accent-white"
                aria-label="Volume"
              />

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="ml-auto p-2 hover:bg-white/20 rounded transition"
                aria-label="Fullscreen"
              >
                <Maximize className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
