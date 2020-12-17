import {Playable} from './Playable';
import {FootBaller} from './FootBaller';
import {BasketBaller} from  './BasketBaller';


let players : Playable[]=[];

let footballer = new FootBaller();

let basketballer = new BasketBaller();

players.push(footballer);
players.push(basketballer);

for(let player of players){
	console.log(player.play());
}