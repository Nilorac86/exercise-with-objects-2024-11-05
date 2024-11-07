// #1. Börja med att skapa en skola som ett objekt. Objektet ska existera innuti en variabel 
// som ni namnger med skolans namn för att göra det simpel. Skolan ska innehålla 
// egenskaperna: name, address, zipcode, city, students med värdet av en tom array och 
// teachers som en tom array. Till exempel:

const medieinstitutet = {
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

const engelska = {
    name: "Engelska",
    students: [],
    teachers: {},
};

const matematik = {
  name: "Matematik",
    students: [],
    teachers: {},
};

const svenska = {

  name: "Svenska",
  students: [],
  teachers: {},
};


// #3. Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. 
// Egenskaperna ska vara name, age, gender och subjects som en tom array.

const CarolinEriksson = {
  name: "carolin Eriksson",
  age: 38,
  gender: "female",
  subjects: [],
};

const andreKarlsson = {
  name: "Andre Karlsson",
  age: 41,
  gender: "Male",
  subjects: [],
};

const alexandraSkogsberg = {
  name: "Alexandra Skogsberg",
  age: 45,
  gender: "female",
  subjects: [],
};

const emelieNilsson = {
  name: "Emelie Nilsson",
  age: 37,
  gender: "female",
  subjects: [],
};

const håkanAndersson = {
  name: "Håkan Andersson",
  age: 58,
  gender: "Male",
  subjects: [],
};


// #4. Skapa två stycken lärare med namnet som variabel och egenskaperna name 
// och subjects som en tom array.

const beaNilklint = {
  name: "Bea Nilklint",
  subjects: [],
};

const katarinaSandgren = {
  name: "Katarina Sandgren",
  subjects: [],
};


// #5. Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() 
// eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen ut både läraren och 
// ämnet du valde i konsolen och inspektera dem. Resonera, hur kan man använda den datan 
// ur ett admins perspektiv på en skola, och tycker du den är kompconstt? Vad saknas?

beaNilklint.subjects.push(matematik);

console.log("#5. ", beaNilklint.name);
console.log ("#5. ", beaNilklint.subjects);

// push () lägger till i slutet av en array och unshift lägger till i början av en array.
// Den kan användas för att få en tydlig bild av vilka lärare som undervisar i vilket ämne.


// #6. Lägg till en student i ett ämnes studentarray. Skriv ut och inspektera i konsolen.

svenska.students.push(håkanAndersson);

console.log ("#6. ", svenska.students);

//#7. För att lösa problematiken i de två senaste uppgifterna så bör man i sådana här 
// fall lägga till kopplingen i båda objekten. Alltså vi börjar med att lägga till ett 
// ämne i en lärarens ämnesarray, och sen byter vi ut det tomma lärarobjekten i ämnet mot 
//läraren. 
//Då har vi en referens på båda sidorna. Egentligen är detta något som kallas för en cirkulär 
// referens vilket vi helst vill undvika när vi programmerar, då kan orsaka krashar i vissa 
// fall, men i syftet för uppgiften så är det ingen fara. Skapa nu en funktion som heter 
// addSubjectToTeacher som tar emot ett ämne och en lärare, och parar ihop dessa. 
// Returnera sen läraren så du kan se förändringen i lärarens ämnesarray.



   
  function addTeacherToSubject(subject, teacher) {

    subject.teachers[teacher.name] = teacher;
  
    teacher.subjects.push(subject);
  }
  
  addTeacherToSubject(engelska, beaNilklint);
  addTeacherToSubject(engelska, katarinaSandgren);
  
  
  console.log("#7. Engelska:", engelska.teachers); 
  console.log("#7. Lärare:", beaNilklint.subjects); 


   

// #8. Varför ha en fristående funktion som lägger till ämne till en lärare? 
// Varför inte bara lägga till en funktion (alltså en metod eftersom funktionen 
  // då är kopplad till ett specifikt objekt) i lärarnas objekt som en egenskap? 
  // Till exempel:

  // Två sätt, antingen går du in i varje lärarobjekt och lägger till en egenskap:
const niklas = {
  name: "niklas",
  subjects: [],
  // //addSubject: function (subject) {
  //   this.subjects.unshift(subject);
  // },
};

//niklas.addSubject(svenska);

//console.log("#8.", niklas);

// Tänk på att "this" måste användas för att referera till det egna objektets egenskaper.

// Andra sättet är att helt enkelt lägga till en egenskap med hjälp av punktnotation:
niklas.addSubject = function (subject) {
  
  this.subjects.push(subject);
}

// Då kan vi ju sen kalla på denna metod via lärarobjektet.
niklas.addSubject(matematik);

console.log("#8. ",niklas);

// Prova det i konsolen!

// #9. 