$.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=151", function(data){
  lista = $("#pokemons");
  data.results.forEach(function(pokemon){
    var li = $('<li></li>');
    li.text(pokemon.name);
      lista.append(li);
      console.log(pokemon);
  });
});

var pokemon;
$.getJSON("https://pokeapi.co/api/v2/pokemon/1/", function(data) {
  pokemon = data;
  console.log(data);
});
// pokemon.name, pokemon.abilities[0].ability.name, pokemon.height, pokemon.weight,
// pokemon.types[0].type.name, pokemon.stats[0](Status base, valor de atk e def)
// pokemon.sprites


$.ajax({
	url: 'https://pokeapi.co/api/v2/pokemon/1',
	success: function(data) {
		console.log('Funciona');
		$('.name').text(data.name);
		$('.sprite').attr('src', data.sprites.front_default);
	},
	error: function(err){
		console.log('nao funciona');
	}

});

var detalhe;
$.getJSON(pokemon.species.url, function(data) {detalhe = data;});
// detalhe.flavor_text_entries[1].flavor_text, detalhe.habitat.name


var pe; // pokemoon_evolucao
$.getJSON('https://pokeapi.co/api/v2/evolution-chain/1/', function(data) {
	console.log(data);
	pe = data;
});

// pe.chain.evolves_to[0].species.name
// "ivysaur"
// pe.chain.evolves_to[0].evolves_to[0].species.name
// "venusaur"
// pe.chain.species.name

function getData(url){
  $.getJSON(url, )
}
