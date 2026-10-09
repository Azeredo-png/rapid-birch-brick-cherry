import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({ component: Garden });

const LINES = [
  "Paz me envolve ao caminhar contigo.",
  "As dríades dessa floresta se ajoelham",
  "em vossa presença.",
  "",
  "Minha amada infinita,",
  "deusa de meu coração,",
  "me mostre o que é o amor,",
  "todo o seu amor.",
  "",
  "Eu lhe banharei com minha paixão,",
  "te amarei com todo o meu coração.",
  "",
  "O gosto dos seus olhos",
  "é como lírios avermelhados.",
  "O cheiro do teu sorriso",
  "é como as azáleas rosas.",
  "O teu rosto me lembra o sol",
  "reluzindo durante as manhãs,",
  "me permitindo guiar",
  "por esta vasta escuridão.",
  "",
  "Cada pensamento em ti",
  "soa como melodia.",
  "Toda palavra de vossa boca",
  "é como uma canção.",
  "",
  "Me abraça com tua vasta bênção,",
  "deusa do jardim.",
  "Espero que esse nosso sonho",
  "não tenha um final.",
  "",
  "Você confia em mim?",
  "Pegue minha mão",
  "e viveremos juntos até o fim.",
  "",
  "Eu te amei antes de te ver,",
  "antes de lhe beijar.",
  "Eu lhe amei antes de você me amar",
  "e quero nos eternizar",
  "nessa linda vida.",
  "",
  "Se agarre a mim",
  "e viveremos um eterno amor.",
  "Venha, meu amor, sem temor.",
];

function Garden() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [phase, setPhase] = useState<"start" | "poem" | "end">("start");
  const [shown, setShown] = useState("");
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    const audio = new Audio("/amo-te.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.18;
    audioRef.current = audio;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = () => setAudioError(true);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);
    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
    };
  }, []);

  function startMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.18;
    const attempt = audio.play();
    if (attempt) {
      attempt
        .then(() => setAudioError(false))
        .catch(() => setAudioError(true));
    }
  }

  function enter() {
    startMusic();
    setPhase("poem");
  }

  useEffect(() => {
    if (phase !== "poem") return;
    let line = 0;
    let char = 0;
    let timer = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      if (line >= LINES.length) {
        timer = window.setTimeout(() => {
          if (!cancelled) setPhase("end");
        }, 1600);
        return;
      }
      const current = LINES[line];
      if (current === "") {
        setShown(LINES.slice(0, line + 1).join("\n"));
        line += 1;
        char = 0;
        timer = window.setTimeout(tick, 380);
        return;
      }
      if (char < current.length) {
        char += 1;
        const head = LINES.slice(0, line).join("\n");
        const piece = current.slice(0, char);
        setShown(head ? `${head}\n${piece}` : piece);
        timer = window.setTimeout(tick, 36);
        return;
      }
      line += 1;
      char = 0;
      timer = window.setTimeout(tick, 480);
    };

    timer = window.setTimeout(tick, 500);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [phase]);

  return (
    <main className="pixel relative min-h-dvh overflow-hidden text-[#ffe8f4]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/jardim.mp4"
        poster="/jardim.png"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,6,30,0.18),rgba(20,6,30,0.28)_45%,rgba(20,6,30,0.42))]" />

      <section className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-5 text-center">
        {phase === "start" && (
          <>
            <h1 className="mb-4 rounded-sm bg-[#1a0a2e]/55 px-4 py-3 text-[clamp(14px,4vw,22px)] leading-[1.7] text-[#ffd6ea] [text-shadow:0_2px_0_#3a1028]">
              Jardim das Azáleas
            </h1>
            <p className="mb-10 text-[clamp(9px,2.5vw,12px)] leading-[1.9] text-[#c9a0d9]">
              Um presente para Melissa
            </p>
            <button
              type="button"
              onClick={enter}
              className="border-4 border-[#ffb6d9] bg-[#ff6bb5] px-7 py-4 text-[clamp(10px,2.8vw,14px)] text-[#1a0a2e] uppercase shadow-[0_0_0_4px_#5a1a3a,4px_4px_0_#3d0a2a] active:translate-x-0.5 active:translate-y-0.5"
            >
              ▶ Entrar no Jardim
            </button>
          </>
        )}

        {phase === "poem" && (
          <p className="max-h-[70dvh] max-w-[720px] overflow-y-auto whitespace-pre-wrap bg-[#1a0a2e]/62 px-4 py-5 text-left text-[clamp(9px,2.4vw,13px)] leading-[2.05] text-[#ffe8f4]">
            {shown}
            <span className="caret" />
          </p>
        )}

        {phase === "end" && (
          <div className="bg-[#1a0a2e]/55 px-5 py-6">
            <div
              className="mb-6 text-5xl text-[#ff6bb5]"
              style={{ animation: "pulseHeart 1.5s ease-in-out infinite" }}
            >
              ♥
            </div>
            <p className="text-[clamp(11px,3vw,16px)] leading-[1.9] text-[#ffb6d9] [text-shadow:0_0_10px_#ff6bb5]">
              Eu te espero neste jardim…
              <br />
              pra sempre.
              <br />
              <br />
              <span className="text-[0.85em] text-[#ff9ecf]">— Para Melissa</span>
            </p>
          </div>
        )}
      </section>

      {phase !== "start" && (
        <button
          type="button"
          onClick={() => {
            const audio = audioRef.current;
            if (!audio) return;
            if (audio.paused) startMusic();
            else audio.pause();
          }}
          className="absolute right-3 bottom-3 z-20 border-2 border-[#ffb6d9] bg-[#1a0a2e]/80 px-3 py-2 text-[8px] text-[#ffb6d9]"
        >
          {playing ? "som on" : "som off"}
        </button>
      )}

      {audioError && phase !== "start" && (
        <button
          type="button"
          onClick={startMusic}
          className="absolute bottom-3 left-3 z-20 border-2 border-[#ffb6d9] bg-[#ff6bb5] px-3 py-2 text-[8px] text-[#1a0a2e]"
        >
          tocar música
        </button>
      )}

    </main>
  );
}
