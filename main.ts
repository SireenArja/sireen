input.onGesture(Gesture.Shake, function () {
	
})
basic.showLeds(`
    # # . # #
    # # # # #
    . # # # .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    music.ringTone(165)
})
