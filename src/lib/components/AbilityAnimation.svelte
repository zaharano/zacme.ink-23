<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let replay: HTMLSpanElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		function sizeListText() {
			const graphWidth = document.getElementById('ability')?.clientWidth;
			if (!graphWidth) return;
			const newFontSize = graphWidth / 30;
			const updateEle = document.getElementById('ability-feed');
			if (updateEle) {
				updateEle.style.fontSize = `${newFontSize}px`;
			}
		}

		function addFig() {
			gsap.to('#ability-fig', {
				autoAlpha: 1,
				x: 0,
				duration: 1,
				ease: 'power1.out'
			});
		}

		const abilTL = gsap.timeline({
			onComplete: addFig
		});

		replay.onclick = () => {
			abilTL.restart();
		};

		// couldn't put the list in the svg because would have to position everything
		// so funky times resizing the text for container, percent moves, can't use svg masks
		// in the future, build as svg text w positions via JS loop
		window.onresize = sizeListText;

		ScrollTrigger.create({
			animation: abilTL,
			trigger: '#ability',
			start: 'top 60%'
		});

		sizeListText();
		gsap.set('#ability-box', {
			transformOrigin: '0% 100%'
		});
		gsap.set('#b-bracket', {
			transformOrigin: '0% 50%'
		});
		gsap.set('#d-bracket', {
			transformOrigin: '50% 100%'
		});
		gsap.set('#ability-fig', {
			opacity: 0,
			x: -30
		});

		abilTL
			.fromTo(
				'#ability-whole',
				{
					opacity: 0
				},
				{
					opacity: 1,
					duration: 2
				}
			)
			.from(
				'#ability-box',
				{
					y: -100,
					ease: 'bounce.out',
					duration: 2
				},
				'<'
			)
			.to('#ability-whole', {
				duration: 0.5
			});
		// last one is just a delay before the abilities start flying

		let abils = gsap.utils.toArray('#ability-feed > li').reverse();
		abils.forEach((ele) => {
			abilTL
				.to(ele, {
					delay: 0.1,
					duration: 1,
					ease: 'power1.inOut',
					x: '-=110%',
					autoAlpha: 0
				})
				// .set(ele, {
				//   display: "none",
				// })
				.to(
					'#ability-box',
					{
						scale: '+=.1',
						ease: 'elastic.out'
					},
					'-=.4'
				)
				.to(
					'#d-bracket',
					{
						scaleY: '+=.1'
					},
					'<'
				)
				.to(
					'#d-label',
					{
						y: '-=5'
					},
					'<'
				)
				.to(
					'#b-bracket',
					{
						scaleX: '+=.1'
					},
					'<'
				)
				.to(
					'#b-label',
					{
						x: '+=5'
					},
					'<'
				)
				.to(
					'#ability-feed > li',
					{
						y: '+=100%',
						ease: 'bounce.out',
						duration: 0.3
					},
					'-=.4'
				);
		});

		abilTL
			.to('#wholeg', {
				x: 100,
				duration: 2,
				delay: 1
			})
			.timeScale(1.6);
	});
</script>

<figure id="ability">
	<div id="ability-whole">
		<ul class="sc" id="ability-feed">
			<!-- double element so margin is included in the 100% move action as the items drop -->
			<li><span>data visualization</span></li>
			<li><span>graphql/rest</span></li>
			<li><span>headless cms/schema</span></li>
			<li><span>unity</span></li>
			<li><span>motion graphics</span></li>
			<li><span>video</span></li>
			<li><span>git/cli tools</span></li>
			<li><span>react/next/remix</span></li>
			<li><span>svelte</span></li>
			<li><span>gsap/d3</span></li>
			<li><span>svg/canvas</span></li>
			<li><span>html/css/js/ts</span></li>
			<li><span>c/rust/python</span></li>
			<li><span>ui design</span></li>
			<li><span>ux research</span></li>
			<li><span>illustration</span></li>
			<li><span>print production</span></li>
			<li><span>editorial design</span></li>
			<li><span>branding</span></li>
			<li><span>creative direction</span></li>
		</ul>
		<svg
			width="600"
			height="349"
			viewBox="0 0 600 349"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id="Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0" stop-color="black" />
					<stop offset=".1" stop-color="white" />
				</linearGradient>
				<mask id="listMask">
					<rect x="0" y="0" width="600" height="349" fill="url(#Gradient)" />
					<rect x="0" y="0" width="0" height="349" fill="#000" />
				</mask>
			</defs>

			<g id="wholeg">
				<path
					id="b-bracket"
					d="M128.7 315.2c-.7-3.2-.8-4.3-3.2-5.5a18.8 18.8 0 00-8.7-1.8c-2.6 0-6.1.6-10.5 1.8a38.7 38.7 0 01-12.2 2c-3.5-.1-5.8-1.4-7.6-2.7-1.8-1.3-3-5.5-3-8 0-1.4.3-3.1.8-5.2l-1.1-.3a27 27 0 00-1.2 7.4c0 4.2 1.1 7.4 3.4 9.7a12 12 0 009.2 3.5 28 28 0 005-.5 165 165 0 0013-2.8c2-.3 4.2-.5 6.3-.5 3.6 0 6 .7 7.5 2.2 1.3 1.5 2 4.2 2 8h1c0-3.8.8-6.5 2.4-8 1.4-1.5 4.2-2.2 8.1-2.2 2.3 0 4.7.2 7 .5l8.2 1.6 6 1.2c2 .3 3.8.5 5.2.5 4 0 7.1-1.1 9.3-3.4 2.3-2.3 3.4-5.6 3.4-9.8a27 27 0 00-1.2-7.4l-1.1.3c.5 2 .8 3.8.8 5.2 0 5-3.6 10.6-10.8 10.6a42.4 42.4 0 01-13-2c-5-1.1-8.9-1.7-11.6-1.7-3.6 0-5.6.5-8.6 1.8s-3.5 2.6-4.4 5.5h-.4z"
					fill="#454545"
				/>
				<path
					id="d-bracket"
					d="M31.3 219.2c3.2-.7 4.3-.8 5.5-3.2 1.3-2.4 1.8-5.4 1.8-8.7 0-2.6-.6-6.1-1.8-10.5l-1.4-6.4c-.3-2-.5-3.8-.5-5.7 0-3.6 1.3-6 2.6-7.7 1.3-1.8 5.5-3 8-3 1.4 0 3.1.3 5.2.8l.3-1.1a27 27 0 00-7.4-1.2c-4.2 0-7.4 1.1-9.7 3.4a12 12 0 00-3.5 9.2c0 1.5.2 3.1.5 5a162.8 162.8 0 002.8 13c.3 2 .5 4.2.5 6.3 0 3.6-.7 6-2.2 7.5-1.5 1.3-4.2 2-8 2v1c3.8 0 6.5.8 8 2.4 1.5 1.4 2.2 4.2 2.2 8.1 0 2.3-.2 4.7-.5 7l-1.6 8.2-1.2 6c-.3 2-.5 3.8-.5 5.2 0 4 1.1 7.1 3.4 9.3 2.3 2.3 5.6 3.4 9.8 3.4a27 27 0 007.4-1.2l-.3-1.1c-2 .5-3.8.8-5.2.8-5 0-10.6-3.6-10.6-10.8a42.3 42.3 0 012-13c1.1-5 1.7-8.9 1.7-11.6 0-3.6-.5-5.6-1.8-8.6s-2.6-3.5-5.5-4.4v-.4z"
					fill="#454545"
				/>
				<path
					id="axes"
					d="M78 2v272h272"
					stroke="#454545"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
					vector-effect="non-scaling-stroke"
				/>
				<g id="ability-box">
					<rect
						id="ab-box"
						x="82.5"
						y="170.5"
						width="99"
						height="99"
						rx="4.5"
						fill="#fff"
						stroke="#454545"
						vector-effect="non-scaling-stroke"
					/>
					<g id="ability" fill="#454545">
						<path
							d="M110.6 251.3c.2 0 .5.3.8.6a49.9 49.9 0 00-3.5 3.6 3 3 0 01-.7-.9c.3-.3.4-.5.4-.7v-.4l-.8-.4-1-.4c-1.7 1.7-3 3-3.8 4l.2.6.5.8c.3.3.7.2 1.2-.2l.9.7a38.2 38.2 0 00-2.6 2.6l-.7-.9.3-.9-.5-1.5-3.5-9.4.6-.7 9.6 3.3 1.7.5.9-.3zm-5.9 1l-3.1-1c-1-.4-1.6-.6-2-.9a9.3 9.3 0 01.7 2l1.2 3.1 3.2-3.1zM114.6 239.5c1-.9 2-1.4 2.8-1.5.9-.2 1.7 0 2.4.7.7.8 1 1.7.8 2.7-.2 1-1 2.2-2.1 3.4l-4.2 4.2-.6-.8.5-.8-.1-.7-.7-.9-4.5-4.4a3 3 0 00-.8-.7.8.8 0 00-.7 0c-.2 0-.5.2-.8.5l-.8-.7 1.6-1.5 1.2-1.3 1-1c1-1 2-1.7 2.9-2 .9-.3 1.6 0 2.3.6.5.5.8 1.1.7 2 0 .7-.3 1.4-.9 2.2zm-1-2.2c-1.1-1-2.3-.8-3.7.6a5 5 0 00-.6.7l2.9 3 .5-.6c.8-.8 1.3-1.5 1.4-2.1 0-.6-.1-1.1-.6-1.6zm3.9 7c1.4-1.4 1.7-2.6.7-3.6-1.2-1.2-2.8-.8-4.9 1.3l-.3.3 2 2c.5.5 1 .8 1.3.8.3 0 .7-.3 1.2-.8zM125.6 237.8l-.7-.9c.3-.3.5-.5.5-.8v-.6l-.7-.9-4.5-4.5-.9-.7a.8.8 0 00-.6 0c-.2 0-.5.2-.8.5l-.8-.7a87.8 87.8 0 003.7-3.8l.7.9c-.4.4-.5.8-.5 1 0 .4.2.8.7 1.2l4.6 4.6c.4.5.8.7 1.1.8.3 0 .7-.2 1.1-.6.3.1.5.4.9.7a94.1 94.1 0 00-3.8 3.8zM136.1 225.7c.5-.6 1-1 1.1-1.4l.3-1.3c0-.4-.2-1-.5-1.5a2 2 0 011.1-.4c.4.7.9 1.6 1.6 2.5l-3 3-3.9 4-.7-.9.5-.7v-.7l-.8-1-4.4-4.4a3 3 0 00-.9-.7.8.8 0 00-.6 0c-.2 0-.5.2-.8.5l-.8-.7a103.2 103.2 0 003.7-3.8l.7.9c-.4.4-.5.8-.5 1 0 .4.3.8.8 1.3l4.4 4.4c.3.3.6.6.9.7.2.1.5.1.8 0l1-.7v-.1zM143 220.4l-.7-.9c.3-.3.5-.6.5-.8v-.6l-.7-.9-4.5-4.5-.9-.7a.8.8 0 00-.6 0c-.2 0-.5.2-.8.5l-.8-.7a88.2 88.2 0 003.7-3.8l.7.9c-.4.4-.5.8-.5 1 0 .4.2.8.7 1.2l4.6 4.6c.5.5.8.7 1.2.8.3 0 .6-.2 1-.6.3.1.5.3.9.7a94.6 94.6 0 00-3.8 3.8zM149.2 197c.6.7 1.3 1.4 2.3 2.2a3 3 0 01-.7 1c-.5-.6-1-.8-1.6-.8-.5 0-1 .3-1.6.8l-.8.8 5.8 5.8 1 .7h.6l.9-.6c.2 0 .4.3.8.6a109.4 109.4 0 00-4.2 4.1 3 3 0 01-.6-.8l.6-.9v-.7a3 3 0 00-.6-.8l-5.8-5.9-.7.7c-.5.5-.8.9-.9 1.3v1c0 .3.3.7.6 1.2-.4.4-.7.6-1 .6-.6-.9-1.2-1.7-2-2.4a189 189 0 007.9-7.8zM159.2 187.2l1.2-1.4c.3.4.6.6.7.9-.2.3-.4.7-.4 1-.1.5 0 1 .1 1.6l2 6 .3.3 1 1h.8c.2 0 .6-.3 1-.6l.8.7a130.5 130.5 0 00-4.2 4.1l-.6-.8.7-1v-.7l-1-1-.4-.5-6.8-2h-1c-.3 0-.6.2-.8.4l-.9-.6a62.8 62.8 0 003.7-3.7l.7.8-.4.6.1.5a66.9 66.9 0 015.9 2 81.5 81.5 0 01-2-5.8.4.4 0 00-.5-.1 2 2 0 00-.7.4 4 4 0 01-.8-.7l1.5-1.4z"
						/>
					</g>
				</g>
				<g id="d-label" fill="#454545">
					<path
						d="M13 258.5c-.4 0-.8 0-1-.2l-.2-.9a.8.8 0 00-.6-.4l-1.1-.1H3.8a3 3 0 00-1 .1c-.3 0-.5.2-.6.4l-.2 1H1a87.9 87.9 0 000-4.3V253c0-2.4.4-4.3 1.2-5.8.8-1.5 2.3-2.2 4.5-2.2 2.5 0 4.2.8 5 2.5A12 12 0 0113 253v5.6zm-1-5.7c0-1.2-.2-2.1-.5-3-.2-.7-.7-1.3-1.5-1.8-.7-.5-1.7-.7-3-.7-1.8 0-3 .5-3.8 1.6a7.1 7.1 0 00-1.2 4.3l.1 1.5h8c.5 0 .9 0 1.1-.2.3 0 .5-.3.6-.5l.1-1.2zM9.6 230.7c0-.4.2-.7.5-1 .8.3 1.7.5 3 .6L13 235v5.5h-1l-.2-1a.8.8 0 00-.6-.4l-1.1-.1H3.8a3 3 0 00-1 .1c-.3.1-.5.2-.6.5l-.2.8-1 .1a136.4 136.4 0 000-9.6l3-.5.2 1c-.7.2-1.2.4-1.6 1-.4.4-.6 1.3-.6 2.5v1.9h4.4v-1.2c0-.9 0-1.5-.2-1.8-.2-.3-.6-.5-1.1-.5l-.2-1.1a29 29 0 004.1 0l-.1 1c-.5 0-.9.3-1 .6-.3.3-.4 1-.4 1.8v1.2H10c.6 0 1 0 1.2-.2.3 0 .5-.3.6-.5l.1-1.2v-.2c0-.9 0-1.6-.2-2.1s-.4-.9-.7-1.1a5 5 0 00-1.4-.8zM7.7 219.8c0-.8-.2-1.5-.6-2-.4-.6-1.1-.9-2-.9-1 0-1.7.3-2.2.9-.6.6-.8 1.4-.8 2.6l.1 1h7.7c.8 0 1.3-.1 1.6-.4.3-.3.4-.8.5-1.5l1-.1a78 78 0 000 5.8l-1-.1c0-.6-.2-1-.4-1.1-.3-.2-.7-.4-1.4-.4H3.8c-.5 0-.8 0-1 .2-.3 0-.5.2-.6.4l-.2.9-1 .1v-5.8c0-1.7.3-2.9 1-3.6.7-.8 1.6-1.2 2.6-1.2.8 0 1.5.2 2.1.6a4 4 0 011.6 1.6c.4.7.5 1.6.5 2.6a5 5 0 01-.1 1.5 4 4 0 01-.5 0h-.6l.1-1zM1 199.6c.8 0 1.9 0 3-.2l.3 1.2c-.8 0-1.3.2-1.7.6-.4.4-.6 1-.6 1.8v1h9.3c.3-.2.5-.3.5-.6l.2-1a3 3 0 011-.2 111.7 111.7 0 000 6 3 3 0 01-1-.2c0-.5 0-.8-.2-1a.9.9 0 00-.5-.6 3 3 0 00-1-.2H2v1c0 .7.1 1.2.3 1.5l.7.8 1.3.4c0 .5 0 .9-.2 1l-3.1-.3a188.4 188.4 0 000-11zM10.3 183.1c.7 0 1.1-.1 1.4-.3.2-.2.3-.6.3-1.1a3 3 0 011-.2 93.8 93.8 0 000 5.4 3 3 0 01-1-.2c0-.5-.1-.9-.3-1-.3-.3-.7-.4-1.4-.4h-3c0 3 0 5.2.2 6.2h2.8c.7 0 1.1 0 1.4-.3.2-.2.3-.6.3-1.1l1-.1a93.8 93.8 0 000 5.3 3 3 0 01-1-.1c0-.4 0-.7-.2-1a.8.8 0 00-.5-.3l-1-.2H3.7c-.5 0-.8 0-1 .2-.3 0-.5.2-.5.4l-.2.9H1a87.4 87.4 0 000-5.2h1c0 .6.1 1 .3 1.2.3.2.7.3 1.4.3h2.6v-6.2H3.7a3 3 0 00-1 .2c-.3 0-.5.2-.5.4l-.2.9H1a86.8 86.8 0 000-5.3c.4 0 .7 0 1 .2 0 .5.1 1 .3 1.1.3.2.7.3 1.4.3h6.6z"
					/>
				</g>
				<g id="b-label" fill="#454545">
					<path
						d="M80.8 342c1.3 0 2.3.4 3 .9.8.5 1.1 1.2 1.1 2.2a3 3 0 01-1.3 2.5c-.8.6-2.1.9-3.9.9h-5.9l.1-1 1-.2.4-.6.1-1.1v-6.3l-.1-1c-.1-.3-.3-.5-.5-.6l-.9-.2v-1H79c1.5 0 2.7.2 3.5.6.9.4 1.3 1.1 1.3 2 0 .8-.3 1.4-.9 2-.5.5-1.2.8-2.2.9zm.7-2.3c0-1.5-1-2.2-2.9-2.2a5 5 0 00-1 .1v4.1h.7c1.2 0 2-.2 2.5-.5.5-.4.7-.9.7-1.5zm-2.1 7.7c2 0 3-.7 3-2 0-1.7-1.4-2.5-4.3-2.5h-.5v2.8c0 .7.1 1.2.4 1.4.2.2.7.3 1.4.3zM99.6 345.7c.4.6.9 1 1.3 1.4.5.2 1 .4 1.7.4v1a30 30 0 00-3.5.2l-.7-1-1-1.8c-.6-1-1.4-1.8-2.4-2.4h-1.5v2.2c0 .5 0 .9.2 1.1 0 .3.2.5.3.6l1 .1v1a52.6 52.6 0 00-5.2 0v-1c.5 0 .8 0 1-.2.2 0 .3-.2.4-.5l.1-1v-6.5c0-.7 0-1.2-.3-1.4-.1-.2-.5-.4-1.1-.4l-.1-1H96c1.5 0 2.6.2 3.4.8.8.6 1.2 1.4 1.2 2.3 0 1-.3 1.7-.9 2.3-.6.6-1.4 1-2.5 1.2.4.2.8.5 1 .8l1.3 1.8zm-5.1-3.4c1.1 0 2-.2 2.8-.6.7-.4 1-1 1-1.8 0-1.6-1-2.4-3.3-2.4l-1.5.1v4.6l1 .1zM116.6 345c.4.2.7.3 1 .6-.3.8-.5 1.7-.6 3l-4.7-.1h-5.5v-1l1-.2c.2-.1.3-.3.4-.6l.1-1.1v-6.3l-.1-1c0-.3-.2-.5-.4-.6l-1-.2v-1a136.4 136.4 0 009.6 0l.5 3a2 2 0 01-1 .2c-.1-.7-.4-1.2-1-1.6-.4-.4-1.3-.6-2.5-.6h-1.9v4.4h1.2c.9 0 1.5 0 1.8-.2.3-.2.5-.6.5-1.1l1.1-.2a29 29 0 000 4.1l-1-.1c0-.5-.3-.9-.6-1-.3-.3-1-.4-1.8-.4h-1.2v2.5c0 .6 0 1 .2 1.2 0 .3.3.5.5.6l1.2.1h.2c1 0 1.6 0 2.1-.2s.9-.4 1.1-.7c.3-.3.5-.8.8-1.4zM134.3 347.5l.2 1a51.4 51.4 0 00-5 0v-1c.5 0 .7-.1.9-.2l.2-.4-.2-.8-.5-1-5.5.1-.2.6-.3.9c0 .4.4.7 1 .8l.2 1a38 38 0 00-3.7 0l.1-1c.4-.1.6-.2.8-.5l.8-1.4 4.1-9.1 1-.1 4.4 9.1c.3.8.6 1.3.9 1.5.2.3.5.4.8.5zm-4.9-3.4l-1.4-3-1-2a9.4 9.4 0 01-.7 1.9l-1.4 3.1h4.5zM138.6 348.5v-1l1-.2c.2-.1.3-.3.4-.6l.1-1.1v-6.3l-.1-1c0-.3-.2-.5-.4-.6l-1-.2v-1a87.9 87.9 0 004.3 0h1.3c2.3 0 4.2.4 5.7 1.2 1.5.8 2.2 2.3 2.2 4.5 0 2.5-.8 4.2-2.5 5a12 12 0 01-5.5 1.3h-5.5zm5.6-1c1.2 0 2.1-.2 3-.5.7-.2 1.4-.7 1.8-1.5.5-.7.7-1.7.7-3 0-1.8-.5-3-1.6-3.8a7.1 7.1 0 00-4.3-1.2l-1.4.1v9.1l.6.6 1.2.1zM167.1 336.5c0 .8 0 1.9.2 3a3 3 0 01-1.2.3c0-.8-.2-1.3-.6-1.7-.4-.4-1-.6-1.8-.6h-1v8.3l.1 1c.1.3.3.5.5.5l1 .2.2 1a111.7 111.7 0 00-5.9 0l.1-1c.5 0 .9 0 1.1-.2.3 0 .4-.2.5-.5l.2-1v-8.3h-1c-.6 0-1.1.1-1.5.3-.3.2-.6.4-.7.7a5 5 0 00-.4 1.3c-.6 0-1 0-1.2-.2.3-1.1.4-2.2.4-3.1a188.4 188.4 0 0011 0zM183.6 345.8c0 .7.1 1.1.3 1.4.2.2.6.3 1.2.3v1a93.8 93.8 0 00-5.2 0v-1c.6 0 1-.1 1.2-.3.2-.3.3-.7.3-1.4v-3c-3 0-5.1 0-6.2.2v2.8c0 .7 0 1.1.3 1.4.2.2.6.3 1.2.3v1a93.8 93.8 0 00-5.3 0l.1-1c.4 0 .7 0 1-.2.1 0 .3-.2.4-.5v-7.6-1c-.1-.3-.3-.5-.5-.5l-.9-.2v-1a87.4 87.4 0 005.3 0l-.1 1c-.6 0-1 .1-1.2.3-.2.3-.3.7-.3 1.4v2.6h6.2v-2.6l-.1-1c-.1-.3-.3-.5-.5-.5l-.9-.2v-1a86.8 86.8 0 005.3 0l-.1 1c-.6 0-1 .1-1.2.3-.2.3-.3.7-.3 1.4v6.6z"
					/>
				</g>
			</g>
		</svg>
	</div>

	<figcaption id="ability-fig">
		<span>
			<span class="sc">fig.1:</span> expanding the <span class="sc">depth</span>
			and <span class="sc">breadth</span> of <span class="sc">ability</span>
		</span>
		<button class="replay" aria-label="Replay" bind:this={replay} />
	</figcaption>
</figure>

<style>
	svg {
		height: auto;
		max-height: 80vh;
		width: 100%;
		margin-top: 3rem;
		position: relative;
		z-index: 0;
		overflow: visible;
	}

	#ability-feed {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		height: 100%;
		position: absolute;
		right: 0;
		bottom: 25%;
		font-size: calc(1vw + 4px);
		clip-path: inset(25% 0 0 -100%);
		-webkit-clip-path: inset(25% 0 0 -100%);
		margin-right: 1em;
	}

	#ability-feed > li > span {
		display: block;
		background-color: white;
		border: var(--border);
		border-radius: 3px;
		padding: 0 0.5em;
		margin-bottom: 3px;
	}
</style>
