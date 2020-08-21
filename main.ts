/**
 * P= 2
 * 
 * S = 1
 * 
 * R = 0
 * 
 * P>R
 * 
 * R>S
 * 
 * S>P
 */
radio.onReceivedNumber(function (receivedNumber) {
    led.stopAnimation()
    basic.clearScreen()
    if (receivedNumber == image) {
        basic.showString("Tied")
    } else if (image == 2 && receivedNumber == 0) {
        basic.showString("Winner")
        Player1_Score += 1
    } else if (image == 0 && receivedNumber == 1) {
        basic.showString("Winner")
        Player1_Score += 1
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    image = randint(0, 2)
    if (image == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . .
            # . . . .
            `)
    } else if (image == 1) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . # . .
            # . . # .
            `)
    }
    radio.sendNumber(image)
})
let image = 0
radio.setGroup(1)
let Player1_Score = 0
let Player2_Score = 0
