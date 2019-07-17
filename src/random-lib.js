/* 

Filename: random-lib.js
Description: An open-source random generation library currently with support for both Javascript and PHP.
Author: Chase Carlson
Creation Date: 7/16/2019
Last Updated: 7/16/2019
GitHub: https://github.com/chasedig/random-lib




*/

const alphabet_array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randomString(length,character_array)
{

	let random_string = "";

	if (!character_array) 
	{
		character_array = alphabet_array;
	}


	for (i = 0;length > i; i++)
	{
		let randomInteger = getRandomInteger(0,character_array.length-1);
		random_string = random_string.concat(character_array[randomInteger]);
	}

	return random_string;

}

