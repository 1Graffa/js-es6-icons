$(document).ready(function(){

  const icons = [
      {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      }
    ];
//creiamo l'array per aggingere i colori ad ogni categoria, blu per gli animali, orange per i vegetali e viola per gli utenti
  const colors = [
    "blue",
    "orange",
    "purple"
  ];
//creiamo un array con 3 elementi : animal, vegetable, user
//nb dobbiamo estrapolare una sola volta il type per elemento:
  const types = getTypes(icons);
  //console.log(types);
  //seguente risultato del console.log();:
  //  const types = [
  //  "animal",
  //  "vegetable",
  //  "user"
    //]

  //NB per fare ciò abbiamo creato un nuovo array TYPES nel quale attraverso una funzione cicliamo gli oggetti di ICONS con forEach per pusharci gli elementi che ci servono (usando includes per evitare ripetizioni)

//ORA mappiamo l'array in modo da aggiungere il colore (usiamo il metodo indexOf che mi va a prendere l'indice dell array di quel dato elemento ovvero nel nostro caso 0,1 e 2)
  const iconsColor = icons.map((element) => {
      const indexType = types.indexOf(element.type);
      console.log(indexType);
      // console.log(colors[indexType]);
      return {
        ...element,
        color: colors[indexType]
        }

  });
//
  console.log(iconsColor);

  const container = $(".icons");

  printIcons(iconsColor, container);

  const select = $("#filtro");
  printOptions(types,select);

  //utilizziamo .change per far funzionare il filtro
  select.change(function() {
    const selected = $(this).val();

    const filter = filterValue(iconsColor, selected);

    printIcons(filteredIcons,container);
  });

  function filterValue(array, type){
    const filteredIcons = array.filter((element) => {
      return element.type == type;
    });
    return filteredIcons;
  }

  //FUNZIONE PER select
  function printOptions(array,select){
    array.forEach((element) => {
      select.append(`
      <option value="animal">${element}</option>
      `
      )

    });

  }

  // FUNZIONE PER STAMPARE LE ICONE
  function printIcons(array,container){
    container.html(" ");
    array.forEach((element) => {

      //Destrutturiamo
      const {name, family, prefix, type, color} = element;
        container.append(
        `
        <div class="icons">
          <div class="box">
            <i class="${family} ${prefix}${name}" style="color:${element.color}"></i>
            <div class="title">${name}</div>
          </div>
        </div>
        `
        );

    });

  }
  // FUNZIONE GETTYPES
  function getTypes(array){
    const types = [];

    array.forEach((element) => {
      if(!types.includes(element.type)){
        types.push(element.type);
      }
    });
  // dopo che ha fatto tutti il foreach ci returna TYPES
  return types;
  }

// Stampare poi tutte le icone utilizzando il template literal.

// Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).

// Filtrare i risultati in base alla categoria (ricordate di svuotare il container).

// Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.

});
