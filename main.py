def background():
    pass

def on_gesture_logo_up():
    global character_direction
    character_direction = 2
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    global character_direction
    character_direction = -1
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    global character_direction
    character_direction = 1
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_logo_down():
    global character_direction
    character_direction = -2
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

character_direction = 0
Character = game.create_sprite(0, 4)
maze = game.create_sprite(1, 2)
maze = game.create_sprite(1, 1)
maze = game.create_sprite(1, 3)
maze = game.create_sprite(1, 4)
maze = game.create_sprite(3, 0)
maze = game.create_sprite(3, 1)
maze = game.create_sprite(3, 2)
maze = game.create_sprite(3, 3)

def on_forever():
    if character_direction == 1:
        Character.move(1)
    if character_direction == -1:
        Character.move(-1)
    if character_direction == 2:
        Character.change(LedSpriteProperty.Y, 1)
    if character_direction == -2:
        Character.change(LedSpriteProperty.Y, -1)
basic.forever(on_forever)

def on_forever2():
    if True:
        pass
basic.forever(on_forever2)

def on_forever3():
    pass
basic.forever(on_forever3)
