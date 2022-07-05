let max_count = 0
let counter = 0
let black = 0
let old_black = 0
basic.forever(function () {
    counter = 0
    basic.pause(1000)
    if (max_count < counter) {
        max_count = counter
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 300) {
        black = 1
    } else {
        black = 0
        old_black = 0
    }
    if (black == 1 && old_black == 0) {
        counter += 1
        old_black = 1
    }
})
basic.forever(function () {
    basic.pause(1000)
    basic.showNumber(max_count)
})
