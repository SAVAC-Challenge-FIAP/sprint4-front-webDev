import Card from './Card'

const MusicRecommendationCard = ({ track, index, onTrackPlay, onTrackRef }) => {
  return (
    <Card className="flex flex-col bg-card p-5">
      <div className="mb-4 flex items-center gap-4">
        <img
          alt=""
          className="h-16 w-16 rounded-lg object-cover"
          src={track.artworkUrl100}
        />
        <div className="min-w-0">
          <p className="mb-1 text-xs tracking-[2px] text-accent uppercase">
            Sugestão {index + 1}
          </p>
          <h3 className="mb-1 truncate text-base">{track.trackName}</h3>
          <p className="m-0 truncate text-sm text-muted">{track.artistName}</p>
        </div>
      </div>

      <audio
        className="mt-auto w-full"
        controls
        onPlay={(event) => onTrackPlay(event.currentTarget)}
        preload="none"
        ref={(element) => onTrackRef(index, element)}
        src={track.previewUrl}
      >
        Seu navegador não suporta reprodução de áudio.
      </audio>

      {track.trackViewUrl && (
        <a
          className="mt-3 text-sm text-accent underline underline-offset-4 hover:text-copy"
          href={track.trackViewUrl}
          rel="noreferrer"
          target="_blank"
        >
          Ver música no iTunes
        </a>
      )}
    </Card>
  )
}

export default MusicRecommendationCard
