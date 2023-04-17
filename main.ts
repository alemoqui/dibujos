input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . . .
            . # . . .
            . # . . .
            . # # # #
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            # # . . .
            . # . . #
            . # # # #
            . . . . .
            `)
        basic.pause(1000)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # . # .
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(1000)
    }
})
basic.forever(function () {
	
})
