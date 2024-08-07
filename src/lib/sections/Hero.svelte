<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/TextPlugin';
	import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

	let desWord: HTMLSpanElement;
	let animWord: HTMLSpanElement;
	let codeWord: HTMLSpanElement;

	onMount(() => {
		gsap.registerPlugin(TextPlugin, DrawSVGPlugin);

		//reset tl function
		const resetTL = function () {
			this.restart().pause();
		};

		//text animation TLs
		const desTL = gsap.timeline({
				onComplete: resetTL,
				repeat: 1,
				repeatDelay: 1,
				yoyo: true,
				paused: true
			}),
			animTL = gsap.timeline({ onComplete: resetTL, paused: true }),
			codeTL = gsap.timeline({ onComplete: resetTL, paused: true });

		//speech bubble TL
		const speechTL = gsap.timeline({ onComplete: () => {
			desTL.play().then(() => {
				animTL.play().then(() => {
					codeTL.play();
				});
			});
		},
		delay: 1 });

		const delay = 0.02,
			duration = 0.01,
			// define nudge size for 'designer'
			nudgeAmount = 7,
			nudges = { x: 0, y: 0 };

		// fade in bitz
		gsap.fromTo(
			'#bitz',
			{
				autoAlpha: 0
			},
			{
				autoAlpha: 1,
				duration: 5,
				ease: 'linear'
			}
		);

		// center the star origins, set up for open
		gsap.set('.sparkle,.moon', {
			transformOrigin: '50% 50%',
			autoAlpha: 0,
			scale: 0.05
		});

		speechTL
			.from('#speech', {
				opacity: 0,
				duration: 0.2
			})
			.from(
				'#speech',
				{
					transformOrigin: 'center bottom',
					scale: 0.3,
					duration: 0.8,
					ease: 'elastic.out(1, 0.3)'
				},
				'<'
			)
			.from(
				'#speech',
				{
					duration: 3,
					transformOrigin: 'center bottom',
					rotate: 40,
					ease: 'elastic.out(1, 0.12)'
				},
				'<'
			)
			.from(
				'#hi',
				{
					opacity: 0,
					duration: 0.5,
					scale: 0.2,
					ease: 'power4.out',
					transformOrigin: '50%, 50%'
				},
				'-=2.6'
			)
			.fromTo(
				'#bang',
				{
					opacity: 0,
					scale: 0.8,
					rotate: 45,
					transformOrigin: '50%, 50%'
				},
				{
					duration: 0.5,
					opacity: 1,
					rotate: 15,
					scale: 1.3,
					x: 10,
					y: 0,
					ease: 'power4.out',
					transformOrigin: '50%, 50%'
				},
				'-=2.2'
			)
			.fromTo(
				'#text',
				{
					opacity: 0,
					y: 20
				},
				{
					opacity: 1,
					y: 0,
					duration: 2,
					ease: 'power2.out'
				},
				'-=2'
			)
			.to(
				'.sparkle',
				{
					scale: 1,
					duration: 0.6,
					delay: 0.3,
					autoAlpha: 1,
					stagger: 0.2,
					ease: 'power2.out',
					onComplete: () => {
						gsap.utils.toArray('.sparkle').forEach((ele) => {
							randomMove(ele);
						});
					}
				},
				2
			)
			.to(
				'#moon',
				{
					scale: 2,
					duration: 0.6,
					delay: 0.3,
					autoAlpha: 1,
					ease: 'power2.out'
				},
				2
			)
			.to(
				'#moon',
				{
					rotate: -80,
					duration: 0.7,
					ease: 'easeOut'
				},
				'-=1.4'
			)
			.to(
				'#moon',
				{
					rotate: 0,
					duration: 2.5,
					ease: 'Elastic.easeOut'
				},
				'>0'
			)

		// infinite random yoyo verticle moves or blinkies for sparkles
		function randomMove(ele : HTMLElement) {
			if (Math.random() > 0.2) {
				gsap.to(ele, {
					y: `+=${gsap.utils.random(-20, 20)}`,
					duration: gsap.utils.random(2, 4),
					ease: 'power1.inOut',
					delay: gsap.utils.random(1, 3, 0.1),
					yoyo: true,
					repeat: 1,
					onComplete: randomMove,
					onCompleteParams: [ele]
				});
			} else {
				gsap.to(ele, {
					// opacity: 0,
					scaleY: 0,
					duration: 0.1,
					ease: 'ease',
					delay: gsap.utils.random(1, 3, 0.1),
					yoyo: true,
					repeat: 1,
					onComplete: randomMove,
					onCompleteParams: [ele]
				});
			}
		}

		// word 'designer' nudges up and left, guides show up, yoyo
		const desSel = '.designer';

		desWord.onmouseenter = () => {
			desTL.play();
		};

		// track nudge count by dimension
		const nudge = function (dim: 'x' | 'y') {
			nudges[dim]++;
			return '+=' + nudges[dim] * nudgeAmount;
		};

		desTL
			.set('.guide-y-ends', {
				autoAlpha: 0
			})
			.set('.guide-x-ends', {
				autoAlpha: 0
			})
			.to(desSel, {
				top: 0
			})
			.add(nudge('y'))
			.to(desSel, {
				duration,
				top: nudges.y * nudgeAmount * -1
			})
			.to('.guide-y-line', {
				duration,
				height: nudges.y * nudgeAmount
			})
			.to('.guide-y-ends', {
				autoAlpha: 1
			})
			.add(nudge('y'))
			.to(desSel, {
				delay,
				duration,
				top: nudges.y * nudgeAmount * -1
			})
			.to('.guide-y-line', {
				duration,
				height: nudges.y * nudgeAmount
			})
			.add(nudge('x'))
			.to(desSel, {
				delay,
				duration,
				left: nudges.x * nudgeAmount * -1
			})
			.to('.guide-x-line', {
				duration,
				width: nudges.x * nudgeAmount
			})
			.to('.guide-x-ends', {
				autoAlpha: 1
			})
			.add(nudge('x'))
			.to(desSel, {
				delay,
				duration,
				left: nudges.x * nudgeAmount * -1
			})
			.to('.guide-x-line', {
				duration,
				width: nudges.x * nudgeAmount
			})
			.add(nudge('x'))
			.to(desSel, {
				delay: 0.5,
				duration,
				left: nudges.x * nudgeAmount * -1
			})
			.to('.guide-x-line', {
				duration,
				width: nudges.x * nudgeAmount
			})
			.add(nudge('y'))
			.to(desSel, {
				delay: 0.5,
				duration,
				top: nudges.y * nudgeAmount * -1
			})
			.to('.guide-y-line', {
				duration,
				height: nudges.y * nudgeAmount
			})
			.timeScale(2.1);

		// word animator squishes vertically, horizontally, spins and restores size

		animWord.onmouseenter = () => {
			animTL.play();
		};

		animTL
			.to('.animator', {
				delay: 0.3,
				duration: 0.2,
				scaleY: 1.2,
				ease: 'ease-out'
			})
			.to('.animator', {
				delay: 0.1,
				duration: 1,
				scaleY: 0.5,
				ease: 'elastic.out(1, 0.3)'
			})
			.to('.animator', {
				delay: 0.1,
				duration: 0.2,
				scaleX: 1.2,
				ease: 'ease-out'
			})
			.to('.animator', {
				delay: 0.1,
				duration: 1,
				scaleX: 0.5,
				ease: 'elastic.out(1, 0.3)'
			})
			.to('.animator', {
				delay: 0.2,
				duration: 1,
				scale: 1,
				rotate: 360,
				ease: 'elastic.out(1, 0.3)'
			})
			.timeScale(1.7);

		// tags appear around front-end dev, type out i, delete, type out em, skew, delete tags, unskew
		codeWord.onmouseenter = () => {
			codeTL.play();
		};

		codeTL
			.set('.code-tag', {
				margin: '.4rem',
				autoAlpha: 1
			})
			.to('.code-open', {
				duration: 0.4,
				text: '&lt;i',
				ease: 'none'
			})
			.to(
				'.code-close',
				{
					duration: 0.5,
					text: '&lt;/i',
					ease: 'none'
				},
				'<'
			)
			.to('.code-open', {
				delay: 0.4,
				duration: 0.1,
				text: '&lt;',
				ease: 'none'
			})
			.to(
				'.code-close',
				{
					duration: 0.1,
					text: '&lt;/',
					ease: 'none'
				},
				'<'
			)
			.to('.code-open', {
				duration: 0.4,
				text: '&lt;em&gt;',
				ease: 'none'
			})
			.to(
				'.code-close',
				{
					duration: 0.4,
					text: '&lt;/em&gt;',
					ease: 'none'
				},
				'<'
			)
			.to('.code-em', {
				delay: 0.1,
				duration: 0.1,
				skewX: -20,
				ease: 'ease-out'
			})
			.to('.code-open', {
				delay: 1,
				duration: 0.4,
				text: '',
				ease: 'none'
			})
			.to(
				'.code-close',
				{
					duration: 0.4,
					text: '',
					ease: 'none'
				},
				'<'
			)
			.to('.code-em', {
				duration: 0.2,
				skewX: 0,
				ease: 'ease-out'
			})
			.set('.code-tag', {
				margin: '0',
				autoAlpha: 0
			})
			.timeScale(1.5);

	});

</script>

<section>
	<div id="speech-container">
		<img src="./assets/bitz.svg" alt="some bitz in the sky" id="bitz" />
		<img class="sparkle" id="s1" src="./assets/sparkle.svg" alt="a simple sparkle" />
		<img class="sparkle" id="s2" src="./assets/sparkle.svg" alt="a simple sparkle" />
		<img class="sparkle" id="s3" src="./assets/sparkle.svg" alt="a simple sparkle" />
		<img class="sparkle" id="s4" src="./assets/sparkle.svg" alt="a simple sparkle" />
		<img class="sparkle" id="s5" src="./assets/sparkle.svg" alt="a simple sparkle" />
		<img class="moon" id="moon" src="./assets/moon.svg" alt="a simple moon" />
		<div id="speech">
			<svg width="100%" viewBox="0 0 312 351" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					vector-effect="non-scaling-stroke"
					id="speech-inner"
					d="M37.6 8.8C22.3 6.3 8.5 18.1 8.5 33.5V241.8C8.5 254.7 18.3 265.5 31.1 266.7L112.5 274.4L142 330L161.6 279L276.1 290C290.8 291.4 303.5 279.9 303.5 265.1V73.8C303.5 61.6 294.6 51.1 282.6 49.1L37.6 8.8Z"
					fill="white"
					stroke-width="1"
				/>
				<g id="speech-exclaim">
					<text x="50" y="210" id="hi"> Hi </text>
					<text x="205" y="210" id="bang"> ! </text>
				</g>
			</svg>
		</div>
	</div>

	<h1 id="text">
		My name is Zach. <br />I’m an integrative
		<span class="designer-contain">
			<span class="word designer" bind:this={desWord}> designer, </span>
			<div class="guide-wrap" style="right: 70%;bottom: .3em;">
				<div class="guide-y-ends">
					<div class="guide-y-line" />
				</div>
			</div>
			<div class="guide-wrap" style="right: .1em;bottom: 80%;">
				<div class="guide-x-ends">
					<div class="guide-x-line" />
				</div>
			</div>
		</span>
		<span class="word animator" bind:this={animWord}> animator </span>
		and
		<span class="word code" bind:this={codeWord}>
			<span class="code-tag code-open" />
			<span class="code-em">front-end dev.</span>
			<span class="code-tag code-close" />
		</span>
	</h1>
</section>

<style>
	section {
		min-height: 100vh;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		margin-top: inherit;
	}

	/* SPEECH BUBBLE */
	#speech {
		/* safari can't handle the clamps!!! */
		width: 30vw;
		min-width: 250px;
		max-width: 350px;
		width: clamp(250px, 30vw, 400px);
	}

	#speech-exclaim {
		color: var(--gray);
		font-size: 9rem;
		/* skew the word */
		transform: translate(0px, -50px) skew(0deg, 6deg) scaleY(1.2);
		width: 100%;
		fill: var(--gray);
		font-family: Shackleton, serif;
	}

	#speech-inner {
		stroke: var(--gray);
	}

	#speech-container {
		position: relative;
	}

	/* GRAPHICS AROUND SPEECH BUBBLE */
	.sparkle,
	.moon {
		position: absolute;
	}

	#bitz {
		width: 180%;
		position: absolute;
		top: -10%;
		left: -33%;
	}

	#s1 {
		bottom: 0;
		left: 0;
		transform: translate(-90px, -40px);
	}
	#s2 {
		bottom: 0;
		left: 0;
		width: 14%;
		transform: translate(-40px, -90px);
	}
	#s3 {
		top: 0;
		right: 0;
		width: 25%;
		transform: translate(110px, -40px);
	}
	#s4 {
		top: 0;
		right: 0;
		width: 15%;
		transform: translate(50px, 5px);
	}
	#s5 {
		bottom: 0;
		right: 0;
		transform: translate(95px, -100px);
	}
	#moon {
		top: 0;
		left: 0;
		transform: translate(-80px, -60px);
	}

	/* TEXT + TEXT ANIMATION STYLES */
	h1 {
		font-family: inherit;
		padding: 0 10px;
	}

	h1 span {
		position: relative;
		display: inline;
	}

	.word {
		cursor: pointer;
		display: inline-block;
	}

	.guide-wrap {
		position: absolute;
		--guides: 2px solid var(--acct);
	}

	.guide-x-ends {
		position: relative;
		border-left: var(--guides);
		border-right: var(--guides);
		height: 10px;
		opacity: 0;
	}

	.guide-y-ends {
		position: relative;
		border-top: var(--guides);
		border-bottom: var(--guides);
		width: 10px;
		right: 20px;
		opacity: 0;
	}

	.guide-x-line {
		border-top: var(--guides);
		width: 10px;
		position: relative;
		top: 4px;
	}
	.guide-y-line {
		border-left: var(--guides);
		height: 10px;
		position: relative;
		left: 4px;
	}

	/* .guide-text {
    color: white;
    font-size: 5px;
  } */

	.code {
		position: relative;
	}

	.code-em {
		display: inline-block;
	}

	.code-tag {
		font-family: 'Courier New', Courier, monospace;
		color: white;
		background-color: var(--acct);
		font-weight: 500;
		font-size: 45%;
		line-height: 1.5;
		vertical-align: 40%;
		border-radius: 15px;
		margin: 0;
		position: absolute;
		top: 10%;
		visibility: hidden;
	}

	.code-open {
		left: -23%;
	}

	.code-close {
		right: -25%;
	}

	svg {
		overflow: visible;
	}

	@media (max-width: 555px) {
		#bitz,
		#moon {
			display: none;
		}

		h1 {
			padding: 0;
		}
	}
</style>
