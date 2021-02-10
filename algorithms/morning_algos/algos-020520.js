// On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions 
// (reset, moveBy, xLocation and yLocation) to track the travels of Claire, a wanderer. Calling reset() 
// moves Claire home to the origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, 
// in those directions. Finally, xLocation() and yLocation() return how far Claire is from home, in X and Y 
// directions respectively. After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling 
// xLocation() and yLocation() should return 4 and -1.

// x---+---+---+---+    x: (-2, 2) -> x: 2, y: 2
// |   |   |   |   |
// +---+---+---z---+    y: (2, -2) -> x: 2, y: 2
// |   |   |   |   |
// +---+---0---+---+    v: (-1, -1) -> x: 1, y: 1
// |   |   |   |   |
// +---v---+---+---+    z: (1, 1)   -> x: 1, y: 1
// |   |   |   |   |
// +---+---+---+---y

var clairePos = {
    x: 0,
    y: 0,
};

function reset() {
    clairePos.x = 0;
    clairePos.y = 0;
}
function moveBy(xOffset, yOffset) {
    clairePos.x += xOffset;
    clairePos.y += yOffset;
}
function xLocation() {
    return Math.abs(clairePos.x);
}
function yLocation() {
    return Math.abs(clairePos.y);
}
