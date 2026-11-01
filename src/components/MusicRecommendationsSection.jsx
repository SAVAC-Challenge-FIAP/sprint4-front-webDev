import { useRef, useState } from 'react'
import Card from './Card'
import CardGrid from './CardGrid'
import MusicRecommendationCard from './MusicRecommendationCard'

const GENRES = [
  'indie pop',
  'lofi',
  'alternative rock',
  'electronic chill',
  'jazz',
  'acoustic',
]

const shuffle = (items) => {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
  }

  return shuffled
}

const MusicRecommendationsSection = () => {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const audioRefs = useRef([])

  const pauseOtherTracks = (playingAudio) => {
    audioRefs.current.forEach((audio) => {
      if (audio && audio !== playingAudio) audio.pause()
    })
  }

  const registerTrackAudio = (index, audio) => {
    audioRefs.current[index] = audio
  }

  const recommendTracks = async () => {
    setIsLoading(true)
    setError('')
    setTracks([])

    try {
      const genres = shuffle(GENRES).slice(0, 3)
      const resultGroups = await Promise.all(
        genres.map(async (genre) => {
          const params = new URLSearchParams({
            term: genre,
            entity: 'song',
            limit: '25',
            country: 'BR',
          })
          const response = await fetch(`https://itunes.apple.com/search?${params}`)

          if (!response.ok) {
            throw new Error(`A busca de músicas respondeu com o status ${response.status}.`)
          }

          const data = await response.json()

          if (!Array.isArray(data.results)) {
            throw new Error('A resposta da busca de músicas está em um formato inesperado.')
          }

          return data.results.filter(
            (track) => track.previewUrl && track.trackId && track.trackName && track.artistName,
          )
        }),
      )

      const uniqueTracks = [...new Map(
        resultGroups.flat().map((track) => [track.trackId, track]),
      ).values()]
      const recommendations = shuffle(uniqueTracks).slice(0, 3)

      if (recommendations.length < 3) {
        throw new Error('A busca não encontrou três músicas com prévia de áudio.')
      }

      setTracks(recommendations)
    } catch (requestError) {
      console.error('Não foi possível buscar recomendações musicais:', requestError)
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Não foi possível carregar as músicas. Tente novamente.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      className="mx-auto w-full max-w-[1180px] px-[3%] py-20 max-[640px]:px-[5%] max-[640px]:py-[55px]"
      id="musicas"
    >
      <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">
        EXPERIMENTE
      </p>
      <h1 className="mb-[15px] max-w-[600px] text-[clamp(26px,3vw,37px)]">
        Descubra sua próxima trilha
      </h1>
      <p className="mb-8 max-w-[650px] text-base text-muted">
        Explore três músicas aleatórias de diferentes estilos e ouça uma prévia
        sem sair da página.
      </p>

      <button
        className="mb-6 cursor-pointer rounded-[30px] bg-accent-dark px-6 py-3 font-bold text-copy hover:bg-accent-dark-hover disabled:cursor-wait disabled:opacity-60"
        disabled={isLoading}
        onClick={recommendTracks}
        type="button"
      >
        {isLoading ? 'Buscando músicas...' : 'Sortear 3 músicas'}
      </button>

      {error && (
        <p className="mb-6 text-sm text-red-400" role="alert">
          Não foi possível buscar as recomendações: {error}
        </p>
      )}

      {tracks.length > 0 ? (
        <CardGrid
          aria-live="polite"
          className="grid grid-cols-3 gap-5 max-[800px]:grid-cols-1"
          items={tracks}
          renderItem={(track, index) => (
            <MusicRecommendationCard
              index={index}
              onTrackPlay={pauseOtherTracks}
              onTrackRef={registerTrackAudio}
              track={track}
            />
          )}
        />
      ) : (
        !error && (
          <Card
            as="div"
            aria-live="polite"
            className="bg-section p-6 text-sm text-muted"
          >
            {isLoading
              ? 'Estamos procurando prévias musicais para você...'
              : 'As recomendações aparecerão aqui. As prévias são fornecidas pelo iTunes.'}
          </Card>
        )
      )}
    </section>
  )
}

export default MusicRecommendationsSection
