export const manifest = {
	appDir: "_app",
	assets: new Set(["a.png","fire.png","gym.png","meal.png","moon.png","robots.txt","settings.png"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain"},
		entry: {"file":"start-83b63226.js","js":["start-83b63226.js","chunks/vendor-0dd25146.js"],"css":["assets/vendor-a8531a1e.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				key: "calories",
				pattern: /^\/calories\/?$/,
				params: null,
				path: "/calories",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "meals",
				pattern: /^\/meals\/?$/,
				params: null,
				path: "/meals",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		]
	}
};
