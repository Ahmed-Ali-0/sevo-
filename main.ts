// Created by: Ahmed Ali
// Created Date:Oct 1, Thursday
// 
// This program used to  traffic light 
let strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
basic.showIcon(IconNames.Yes)
strip.show()
basic.pause(2000)
strip.clear()
strip = neopixel.create(DigitalPin.P16, 2, NeoPixelMode.RGB)
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
basic.showIcon(IconNames.Happy)
strip.show()
basic.pause(500)
strip.clear()
strip = neopixel.create(DigitalPin.P16, 2, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
basic.showIcon(IconNames.Heart)
strip.show()
basic.pause(5000)
strip.clear()
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.clear()
    strip.show()
    basic.clearScreen()
})
