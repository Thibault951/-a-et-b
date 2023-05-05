enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (1 + 0))
    music.playMelody("B A G A G F A C5 ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (1 + 2))
    music.playMelody("E B C5 A B G A F ", 120)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (2 + 0))
    music.playMelody("G F G A - F E D ", 120)
})
