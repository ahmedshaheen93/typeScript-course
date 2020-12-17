"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootBaller_1 = require("./FootBaller");
var BasketBaller_1 = require("./BasketBaller");
var players = [];
var footballer = new FootBaller_1.FootBaller();
var basketballer = new BasketBaller_1.BasketBaller();
players.push(footballer);
players.push(basketballer);
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player = players_1[_i];
    console.log(player.play());
}
