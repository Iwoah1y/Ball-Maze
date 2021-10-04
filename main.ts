input.onGesture(Gesture.LogoUp, function () {
    character_direction = 2
})
input.onGesture(Gesture.TiltLeft, function () {
    character_direction = -1
})
input.onGesture(Gesture.TiltRight, function () {
    character_direction = 1
})
input.onGesture(Gesture.LogoDown, function () {
    character_direction = -2
})
let character_direction = 0
let Character = game.createSprite(0, 4)
let maze = game.createSprite(1, 2)
maze = game.createSprite(1, 1)
maze = game.createSprite(1, 3)
maze = game.createSprite(1, 4)
maze = game.createSprite(3, 0)
maze = game.createSprite(3, 1)
maze = game.createSprite(3, 2)
maze = game.createSprite(3, 3)
basic.forever(function () {
    if (Character.get(LedSpriteProperty.X) == 3) {
        if (Character.get(LedSpriteProperty.Y) == 0) {
            Character.change(LedSpriteProperty.X, -1)
        }
    }
    if (Character.get(LedSpriteProperty.X) == 4 && Character.get(LedSpriteProperty.Y) == 0) {
        music.setTempo(154)
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(311, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 1e+82; index++) {
            music.stopAllSounds()
        }
    }
})
basic.forever(function () {
    if (character_direction == 1) {
        Character.move(1)
    }
    if (character_direction == -1) {
        Character.move(-1)
    }
    if (character_direction == 2) {
        Character.change(LedSpriteProperty.Y, 1)
    }
    if (character_direction == -2) {
        Character.change(LedSpriteProperty.Y, -1)
    }
})
basic.forever(function () {
	
})
