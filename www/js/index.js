// $.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=151", function(data){
//   lista = $("#pokemons");
//   data.results.forEach(function(pokemon){
//     var li = $('<li></li>');
//     li.text(pokemon.name);
//       lista.append(li);
//       console.log(pokemon);
//   });
// });


// var pokemon;
// $.getJSON("https://pokeapi.co/api/v2/pokemon/1/", function(data) {
//   pokemon = data;
//   console.log(data);
// });

// pokemon.name, pokemon.abilities[0].ability.name, pokemon.height, pokemon.weight,
// pokemon.types[0].type.name, pokemon.stats[0](Status base, valor de atk e def)
// pokemon.sprites

var pokemon;
$.ajax({
	url: 'https://pokeapi.co/api/v2/pokemon/1',
	success: function(data) {
		console.log('Funciona');
    $('.sprite').attr('src', data.sprites.front_default);
    $('.id-pokemon').text(data.id);
    $('.name').text(data.name);
      data.types.forEach(function(type) {
        var tag = $("<span></span>").text(type.type.name+" ");   // Create with jQuery
        $('.type').append(tag);
      });
      $('.height').text(data.height);
      $('.weight').text(data.weight);
      pokemon = data;
      returnData(data.species.url);
	},
	error: function(err){
		console.log('nao funciona');
	}
});

// https://pokeapi.co/api/v2/pokemon-species/1/
// https://pokeapi.co/api/v1/pokemon/1/
function returnData(url_data) {
  $.ajax({
  	url: url_data,
  	success: function(data) {
      $('.description').text(data.flavor_text_entries[1].flavor_text)
      console.log(data.habitat.name)
  	},
  	error: function(err){
  		console.log('nao funciona');
  	}
  });
}

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
