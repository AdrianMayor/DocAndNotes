'use strict';

const usuarios = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Veeti',
      last: 'Oja',
    },
    location: {
      street: {
        number: 7395,
        name: 'Siilitie',
      },
      city: 'Loppi',
      state: 'Kainuu',
      country: 'Finland',
      postcode: 33237,
      coordinates: {
        latitude: '-8.1556',
        longitude: '-166.4712',
      },
      timezone: {
        offset: '-6:00',
        description: 'Central Time (US & Canada), Mexico City',
      },
    },
    email: 'veeti.oja@example.com',
    login: {
      uuid: 'ea3bc724-aa6a-430e-b1eb-3e96b49491b8',
      username: 'tinypanda307',
      password: 'airport',
      salt: 'QOzQmb50',
      md5: '0743047e89a550330cb47ab62a779b41',
      sha1: '6bd854effda3c391c0334ea1b5e67cc8cddbfff3',
      sha256:
        'ac0f5d7acb98825171c31526df9f30514c1147ce51aa6a5e64fdf2c2e66a98f6',
    },
    dob: {
      date: '1992-03-10T14:14:24.429Z',
      age: 30,
    },
    registered: {
      date: '2013-01-17T06:13:04.537Z',
      age: 9,
    },
    phone: '07-263-506',
    cell: '045-028-19-56',
    id: {
      name: 'HETU',
      value: 'NaNNA109undefined',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/43.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/43.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/43.jpg',
    },
    nat: 'FI',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Deann',
      last: 'Steeves ',
    },
    location: {
      street: {
        number: 7315,
        name: 'E Center St',
      },
      city: 'Joliet',
      state: 'Kansas',
      country: 'United States',
      postcode: 31906,
      coordinates: {
        latitude: '-87.7511',
        longitude: '-100.4787',
      },
      timezone: {
        offset: '+6:00',
        description: 'Almaty, Dhaka, Colombo',
      },
    },
    email: 'deann.steeves@example.com',
    login: {
      uuid: 'd1f9a10f-fa3d-41cb-a743-740598e97e1b',
      username: 'tinybutterfly757',
      password: 'jolene',
      salt: 'CqduJF5J',
      md5: '847451fa639758838863e0045ad7a98c',
      sha1: 'e2016c2802c20f808ca62196a4501d3299558d5e',
      sha256:
        'e3370b4354587901cf18dbe1cf25037f7e7406a850cb4e7734205ce7b7685518',
    },
    dob: {
      date: '1995-06-16T16:47:36.790Z',
      age: 27,
    },
    registered: {
      date: '2006-11-13T14:08:30.326Z',
      age: 16,
    },
    phone: '(028)-275-5276',
    cell: '(076)-321-0745',
    id: {
      name: 'SSN',
      value: '156-96-3638',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/83.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/83.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/83.jpg',
    },
    nat: 'US',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Evêncio',
      last: 'Nogueira',
    },
    location: {
      street: {
        number: 8977,
        name: 'Rua Belo Horizonte ',
      },
      city: 'Colombo',
      state: 'Bahia',
      country: 'Brazil',
      postcode: 75477,
      coordinates: {
        latitude: '79.0482',
        longitude: '-84.4328',
      },
      timezone: {
        offset: '+8:00',
        description: 'Beijing, Perth, Singapore, Hong Kong',
      },
    },
    email: 'evencio.nogueira@example.com',
    login: {
      uuid: 'd03e3b99-4ca0-4b94-820b-6919af9696e1',
      username: 'greenmouse307',
      password: 'rhiannon',
      salt: 'PfGUZwMc',
      md5: '521caf9b42ff2141640aa41d4137e50a',
      sha1: '425d5149a57ab5c93c4b87786acd3a86a4ce6697',
      sha256:
        'e9edb7dedd8a54feffab6d31660e19bebdf3ab40f0e5e632b1c251b497e12517',
    },
    dob: {
      date: '1998-09-10T05:20:32.261Z',
      age: 24,
    },
    registered: {
      date: '2009-08-10T20:12:29.783Z',
      age: 13,
    },
    phone: '(10) 8432-2513',
    cell: '(96) 5945-9558',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/74.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/74.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Chaiane',
      last: 'Ferreira',
    },
    location: {
      street: {
        number: 2548,
        name: 'Rua Dois',
      },
      city: 'Barueri',
      state: 'Ceará',
      country: 'Brazil',
      postcode: 28577,
      coordinates: {
        latitude: '-74.2236',
        longitude: '-46.2790',
      },
      timezone: {
        offset: '+9:00',
        description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
      },
    },
    email: 'chaiane.ferreira@example.com',
    login: {
      uuid: 'ade232ba-18bd-4590-86a3-f6b10d753391',
      username: 'purplefrog756',
      password: 'leelee',
      salt: 'BWQFImAl',
      md5: '5ec4e04bfc0a7e8f9f8607cd2d9fab86',
      sha1: '6eb199c43cac9179beb3edaefb1343aeb4300ee5',
      sha256:
        '4f0aea0a5f08fcc5f06cdf950e56d968605c524077944f0ee98cfda9c32640af',
    },
    dob: {
      date: '1970-07-25T07:29:32.533Z',
      age: 52,
    },
    registered: {
      date: '2011-12-21T01:24:20.692Z',
      age: 11,
    },
    phone: '(76) 9788-2211',
    cell: '(51) 1895-8733',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/53.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/53.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/53.jpg',
    },
    nat: 'BR',
  },
];

// Métodos funcionales de arrays

// MAP -> Devuelve un array de igual longitud que el original

const mapUsuarios = usuarios.map((usuario, index) => {
  return {
    indiceArray: index,
    email: usuario.email,
    login: {
      username: usuario.login.username,
      pass: usuario.login.password,
    },
    foto: usuario.picture.large,
    nombre: usuario.name.first,
    genero: usuario.gender,
  };
});

console.log(mapUsuarios);

/////////////////////
// Map destructurado

const mapUsuarios2 = [];

for (let i = 0; i < usuarios.length; i++) {
  mapUsuarios2.push({
    indiceArray: i,
    email: usuarios[i].email,
    login: {
      username: usuarios[i].login.username,
      pass: usuarios[i].login.password,
    },
    foto: usuarios[i].picture.large,
    nombre: usuarios[i].name.first,
    genero: usuarios[i].gender,
  });
}

console.log(mapUsuarios2);

// FILTER
///// Filtra un array creando uno nuevo con los datos filtrados

// Del array mapUsuarios nos quedamos con los usuarios de genero "male"

const maleUsers = mapUsuarios.filter((item, index) => {
  if (item.genero === 'male') {
    return item;
  }
});

console.log(maleUsers.map((item) => item.nombre));

/////// Ejemplo pokemon
console.log('');
console.log('POKEMON');

const pokemons = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  },
  {
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
  },
  {
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/',
  },
  {
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/',
  },
  {
    name: 'wartortle',
    url: 'https://pokeapi.co/api/v2/pokemon/8/',
  },
  {
    name: 'blastoise',
    url: 'https://pokeapi.co/api/v2/pokemon/9/',
  },
  {
    name: 'caterpie',
    url: 'https://pokeapi.co/api/v2/pokemon/10/',
  },
  {
    name: 'metapod',
    url: 'https://pokeapi.co/api/v2/pokemon/11/',
  },
  {
    name: 'butterfree',
    url: 'https://pokeapi.co/api/v2/pokemon/12/',
  },
  {
    name: 'weedle',
    url: 'https://pokeapi.co/api/v2/pokemon/13/',
  },
  {
    name: 'kakuna',
    url: 'https://pokeapi.co/api/v2/pokemon/14/',
  },
];

// Segun lo que escriba un usuario en el buscador de la pokedex, devolvemos los pokemon
// que coincidan con la busqueda

let buscador = prompt('Indica el nombre del pokemon que quieras ver:');

const searchPoke = pokemons.filter((item) => {
  if (item.name === buscador) {
    return item;
  }
});

console.log(searchPoke);

// Del pokemon que busque, nos quedamos con la URL
const urlPoke = searchPoke.map((item) => item.url);

// Hacemos destructuring del array para sacar el valor de la url

const [url] = urlPoke;
console.log(url);

// Hacemos un fetch (llamada a la api) para recuperar los datos del pokemon que buscamos

async function getData(url) {
  const response = await fetch(url);

  const data = await response.json();

  return data;
}

async function printData(url) {
  const pokemon = await getData(url);

  const dataPoke = {
    nombre: pokemon.name,
    urlEspecie: pokemon.species.url,
    peso: pokemon.weight,
    experienciaBase: pokemon.base_experience,
  };

  // Reutilizamos la funcion de getData para acceder a la urlEspecie del pokemon
  // y recuperar el "flavour_text"

  const datosEspecie = await getData(dataPoke.urlEspecie);

  // Como es un objeto y lo que nos interesa el el array de "flavor_text_entries", destructuramos
  const { flavor_text_entries: textoEspecies } = datosEspecie;

  const textoEspeciesFilter = textoEspecies.filter((item) => {
    if (item.language.name === 'es' && item.version.name === 'x') {
      return item;
    }
  });

  dataPoke.textoEspecie = textoEspeciesFilter[0].flavor_text;

  console.log(dataPoke);
}

printData(url);
