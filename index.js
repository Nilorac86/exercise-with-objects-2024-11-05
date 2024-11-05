// #1. Börja med att skapa en skola som ett objekt. Objektet ska existera innuti en variabel 
// som ni namnger med skolans namn för att göra det simpel. Skolan ska innehålla 
// egenskaperna: name, address, zipcode, city, students med värdet av en tom array och 
// teachers som en tom array. Till exempel:

let medieinstitutet = {
    name: "medieinstitutet",
    address: "Topasvägen 40",
    zipcode: 24634,
    city: "Löddeköpinge",
    students: [],
    teachers: [],

  };

//   #2. Skapa tre stycken olika ämnen, varje ämne ska vara ett objekt med en variabel 
//   motsvarande namnet på ämnet. Egenskaperna ska vara name, students som en tom array 
//   och teacher som ett tomt objekt. Till Exempel:

let engelska = {
    name: "Engelska",
    students: [],
    teachers: {},
};

let matematik = {
  name: "Matematik",
    students: [],
    teachers: {},
};

let svenska = {

  name: "Svenska",
  students: [],
  teachers: {},
};


// #3. Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. 
// Egenskaperna ska vara name, age, gender och subjects som en tom array.

let CarolinEriksson = {
  name: [],
  age: [],
  gender: [],
  subjects: [],
};

let andreKarlsson = {
  name: [],
  age: [],
  gender: [],
  subjects: [],
};

let alexandraSkogsberg = {
  name: [],
  age: [],
  gender: [],
  subjects: [],
};

let emelieNilsson = {
  name: [],
  age: [],
  gender: [],
  subjects: [],
};

let håkanAndresson = {
  name: [],
  age: [],
  gender: [],
  subjects: [],
};


// #4. Skapa två stycken lärare med namnet som variabel och egenskaperna name 
// och subjects som en tom array.

let beaNilklint = {
  name: [],
  subjects: [],
};

let katarinaSandgren = {
  name: [],
  subjects: [],
};


// #5. Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() 
// eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen ut både läraren och 
// ämnet du valde i konsolen och inspektera dem. Resonera, hur kan man använda den datan 
// ur ett admins perspektiv på en skola, och tycker du den är komplett? Vad saknas?