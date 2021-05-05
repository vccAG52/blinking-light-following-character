input.onButtonPressed(Button.A, function () {
    Player_x += -1
})
input.onButtonPressed(Button.B, function () {
    Player_x += 1
})
let sprite: game.LedSprite = null
let Player_x = 2
let Player = game.createSprite(2, 4)
basic.forever(function () {
    Player.delete()
    Player = game.createSprite(Player_x, 4)
    basic.pause(100)
})
basic.forever(function () {
    sprite = game.createSprite(Player_x - 1, 4)
    basic.pause(500)
    sprite.delete()
    basic.pause(500)
})
