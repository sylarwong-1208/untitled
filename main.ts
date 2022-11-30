input.onButtonPressed(Button.A, function () {
    music.setTempo(124)
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(20)
})
music.playMelody("C D E F G E D C ", 120)
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(294, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
