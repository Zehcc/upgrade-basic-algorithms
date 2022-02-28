let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers.splice(0,1, "IRONMAN");
console.log(avengers);

avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length);

let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);

rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], ',' ,rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);




