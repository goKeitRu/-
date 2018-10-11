import FluentRevealEffect from "main";

// console.log(FluentRevealEffect)

FluentRevealEffect.applyEffect("header", {
	lightColor: "rgba(255,255,255,0.1)",
	gradientSize: 500
});

FluentRevealEffect.applyEffect("header", {
	clickEffect: true
});

FluentRevealEffect.applyEffect("header", {
	clickEffect: true,
	lightColor: "rgba(255,255,255,0.6)",
	gradientSize: 80,
	isContainer: true,
	children: {
		borderSelector: "header",
		elementSelector: "header",
		lightColor: "rgba(255,255,255,0.3)",
		gradientSize: 150
	}
});