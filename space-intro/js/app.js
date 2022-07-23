// 3D Scroll

let zSpacing = -1000,
	lastPos = zSpacing / 5,
	$frames = document.getElementsByClassName('frame'),
	frames = Array.from($frames),
	zVals = []

// var div = $('.gallery'),
// 	div_sh = $(div)[0].scrollHeight,
// 	div_h = div.height();

// console.log(div_sh)
// console.log(div_h)

console.log(document.getElementsByClassName('frame')[0].clientHeight)

window.onscroll = function () {

	if ($(this).scrollTop() > 3430) {
		window.location.href = 'landing.html';
		window.scrollTo(0, 1)
	}

	let top = document.documentElement.scrollTop
	delta = lastPos - top

	console.log("top", top)
	console.log("lastPos", lastPos)

	lastPos = top

	frames.forEach(function (n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
			transform = `translateZ(${zVals[i]}px)`,
			opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0

		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})
}

window.scrollTo(0, 1)
// Audio

let soundButton = document.querySelector('.soundbutton'),
	audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
	audio.pause()
}
