import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CzuSCwGj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINES = [
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
	"Venha, meu amor, sem temor."
];
function Garden() {
	const audioRef = (0, import_react.useRef)(null);
	const [phase, setPhase] = (0, import_react.useState)("start");
	const [shown, setShown] = (0, import_react.useState)("");
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [audioError, setAudioError] = (0, import_react.useState)(false);
	const stars = (0, import_react.useMemo)(() => Array.from({ length: 48 }, (_, i) => ({
		id: i,
		left: `${i * 37 % 100}%`,
		top: `${i * 17 % 62}%`,
		size: i % 5 === 0 ? 3 : 2,
		delay: `${i % 9 * .35}s`
	})), []);
	const hearts = (0, import_react.useMemo)(() => Array.from({ length: 8 }, (_, i) => ({
		id: i,
		left: `${8 + i * 13 % 84}%`,
		delay: `${i * 1.1}s`,
		duration: `${7 + i % 4}s`,
		size: 10 + i % 4 * 3
	})), []);
	(0, import_react.useEffect)(() => {
		const audio = new Audio("/amo-te.mp3");
		audio.loop = true;
		audio.preload = "auto";
		audio.volume = .55;
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
		audio.volume = .55;
		const attempt = audio.play();
		if (attempt) attempt.then(() => setAudioError(false)).catch(() => setAudioError(true));
	}
	function enter() {
		startMusic();
		setPhase("poem");
	}
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pixel relative min-h-dvh overflow-hidden text-[#ff9ecf]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_bottom,#1a0a2e_0%,#2d1b4e_42%,#0f0520_100%)]" }),
			stars.map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "star",
				style: {
					left: star.left,
					top: star.top,
					width: star.size,
					height: star.size,
					animationDelay: star.delay
				}
			}, star.id)),
			hearts.map((heart) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "heart-float",
				style: {
					left: heart.left,
					bottom: 0,
					fontSize: heart.size,
					animationDelay: heart.delay,
					animationDuration: heart.duration,
					animationIterationCount: "infinite"
				},
				children: "♥"
			}, heart.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 flex h-[42%] items-end justify-between px-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "azalea origin-bottom scale-110" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "azalea origin-bottom scale-90 max-sm:hidden" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "azalea origin-bottom scale-105 max-md:hidden" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "azalea origin-bottom scale-[1.2]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 flex min-h-dvh flex-col items-center justify-center px-5 text-center",
				children: [
					phase === "start" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mb-4 text-[clamp(14px,4vw,22px)] leading-[1.7] text-[#ffb6d9] [text-shadow:0_0_10px_#ff6bb5,2px_2px_0_#5a1a3a]",
							children: "Jardim das Azáleas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-10 text-[clamp(9px,2.5vw,12px)] leading-[1.9] text-[#c9a0d9]",
							children: "Um presente para Melissa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: enter,
							className: "border-4 border-[#ffb6d9] bg-[#ff6bb5] px-7 py-4 text-[clamp(10px,2.8vw,14px)] text-[#1a0a2e] uppercase shadow-[0_0_0_4px_#5a1a3a,4px_4px_0_#3d0a2a] active:translate-x-0.5 active:translate-y-0.5",
							children: "▶ Entrar no Jardim"
						})
					] }),
					phase === "poem" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-h-[70dvh] max-w-[720px] overflow-y-auto whitespace-pre-wrap text-left text-[clamp(9px,2.4vw,13px)] leading-[2.05] text-[#ffe0f0] [text-shadow:0_0_8px_rgba(255,150,200,0.4)]",
						children: [shown, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "caret" })]
					}),
					phase === "end" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 text-5xl text-[#ff6bb5]",
						style: { animation: "pulseHeart 1.5s ease-in-out infinite" },
						children: "♥"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[clamp(11px,3vw,16px)] leading-[1.9] text-[#ffb6d9] [text-shadow:0_0_10px_#ff6bb5]",
						children: [
							"Eu te espero neste jardim…",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"pra sempre.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.85em] text-[#ff9ecf]",
								children: "— Para Melissa"
							})
						]
					})] })
				]
			}),
			phase !== "start" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					const audio = audioRef.current;
					if (!audio) return;
					if (audio.paused) startMusic();
					else audio.pause();
				},
				className: "absolute right-3 bottom-3 z-20 border-2 border-[#ffb6d9] bg-[#1a0a2e]/80 px-3 py-2 text-[8px] text-[#ffb6d9]",
				children: playing ? "som on" : "som off"
			}),
			audioError && phase !== "start" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: startMusic,
				className: "absolute bottom-3 left-3 z-20 border-2 border-[#ffb6d9] bg-[#ff6bb5] px-3 py-2 text-[8px] text-[#1a0a2e]",
				children: "tocar música"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scanlines absolute inset-0 z-30" })
		]
	});
}
//#endregion
export { Garden as component };
