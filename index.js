// #1. Börja med att skapa en skola som ett objekt. Objektet ska existera innuti en variabel 
// som ni namnger med skolans namn för att göra det simpel. Skolan ska innehålla 
// egenskaperna: name, address, zipcode, city, students med värdet av en tom array och 
// teachers som en tom array. Till exempel:

const nyvangsskolan = {
  name: "Nyvångsskolan",
  address: "Topasvägen 40",
  zipcode: 24634,
  city: "Löddeköpinge",
  students: [],
  teachers: [],
  addTeacher: function(teacher){

    this.teachers.push(teacher);
  },

  addStudents: function (student){

    this.students.push(student);
  },
  
//  fireTeacher: function (teacher){
//     const indexOfTeacher = this.teachers.indexOf(teacher);
  
//     if(indexOfTeacher >= 0 ){
    
//         this.teachers.splice(indexOfTeacher,-1);
//     }
//  },



fireTeacher: function (teacher) {

  const subjects = {
    svenska ,
    matematik,
    engelska,
  };

  // Check if the teacher exists in nyvangsskolan.teachers array
  if (nyvangsskolan.teachers.includes(teacher)) {
    // Remove the teacher from the main teachers list (assuming it's an array of teacher names or objects)
    const teacherIndex = nyvangsskolan.teachers.indexOf(teacher);
    if (teacherIndex >= 0) {
      nyvangsskolan.teachers.splice(teacherIndex, 1);  // Remove teacher from nyvangsskolan.teachers
    }
  }
},


 relegateStudent: function (student){
    const indexOfStudent = this.students.indexOf(student);
  
    if(indexOfStudent >= 0 ){
  
      this.students.splice(indexOfStudent,1);
  }
 },

};

//   #2. Skapa tre stycken olika ämnen, varje ämne ska vara ett objekt med en variabel 
//   motsvarande namnet på ämnet. Egenskaperna ska vara name, students som en tom array 
//   och teacher som ett tomt objekt. Till Exempel:

const engelska = {
  name: "Engelska",
  students: [],
  teachers: {},
  addTeacher: function(teacher){

    this.teachers[teacher.name] = teacher;
  },

  addStudents: function (student){

    this.students.push(student);
  },
  removeTeacher: function (teacher){

    delete this.teachers[teacher.name];

  }
};

const matematik = {
name: "Matematik",
  students: [],
  teachers: {},
  addTeacher: function(teacher){

    this.teachers[teacher.name] = teacher;
  },

  addStudents: function (student){

    this.students.push(student);
  },
  removeTeacher: function (teacher){

    delete this.teachers[teacher.name];
  },
}


const svenska = {

name: "Svenska",
students: [],
teachers: {},
addTeacher: function(teacher){

  this.teachers[teacher.name] = teacher;
},

addStudents: function (student){

  this.students.push(student);
},

removeTeacher: function (teacher){

  delete this.teachers[teacher.name];
}

};


// #3. Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. 
// Egenskaperna ska vara name, age, gender och subjects som en tom array.

const carolin = {
name: "carolin",
age: 38,
gender: "female",
subjects: [],
enlistToSubject: function (subject){
  this.subjects.push(subject);
},
quitSubject: function (subject){
  const indexOfSubject = this.subjects.indexOf(subject);

  if(indexOfSubject >= 0 ){
  
      this.subjects.splice(indexOfSubject,1);
  }
},
};


const andre = {
name: "Andre",
age: 41,
gender: "Male",
subjects: [],
enlistToSubject: function (subject){
  this.subjects.push(subject);
},

quitSubject: function (subject){
  const indexOfSubject = this.subjects.indexOf(subject);

  if(indexOfSubject >= 0 ){
  
      this.subjects.splice(indexOfSubject,1);
  }
},

};

const alexandra = {
name: "Alexandra",
age: 45,
gender: "female",
subjects: [],
enlistToSubject: function (subject){
  this.subjects.push(subject);
},

quitSubject: function (subject){
  const indexOfSubject = this.subjects.indexOf(subject);

  if(indexOfSubject >= 0 ){
  
      this.subjects.splice(indexOfSubject,1);
  }
},
};

const emelie = {
name: "Emelie",
age: 37,
gender: "female",
subjects: [],
enlistToSubject: function (subject){
  this.subjects.push(subject);
},
quitSubject: function (subject){
  const indexOfSubject = this.subjects.indexOf(subject);

  if(indexOfSubject >= 0 ){
  
      this.subjects.splice(indexOfSubject,1);
  }
},

};

const håkan = {
name: "Håkan",
age: 58,
gender: "Male",
subjects: [],
enlistToSubject: function (subject){
  this.subjects.push(subject);
},
quitSubject: function (subject){
  const indexOfSubject = this.subjects.indexOf(subject);

  if(indexOfSubject >= 0 ){
  
      this.subjects.splice(indexOfSubject,1);
  }
},

};


// #4. Skapa två stycken lärare med namnet som variabel och egenskaperna name 
// och subjects som en tom array.

const stina = {
name: "Stina",
subjects: [],
addSubject: function (subject){
  this.subjects.push(subject);
},

};

const katarina = {
name: "Katarina",
subjects: [],
addSubject: function (subject){
  this.subjects.push(subject);
}
};


// #5. Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() 
// eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen ut både läraren och 
// ämnet du valde i konsolen och inspektera dem. Resonera, hur kan man använda den datan 
// ur ett admins perspektiv på en skola, och tycker du den är kompconstt? Vad saknas?

stina.subjects.push(matematik);

console.log("#5. ", stina.name);
console.log ("#5. ", stina.subjects);

// push () lägger till i slutet av en array och unshift lägger till i början av en array.
// Den kan användas för att få en tydlig bild av vilka lärare som undervisar i vilket ämne.


// #6. Lägg till en student i ett ämnes studentarray. Skriv ut och inspektera i konsolen.

svenska.students.push(håkan);

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



 
// function addTeacherToSubject(subject, teacher) {

//   subject.teachers[teacher.name] = teacher;

//   teacher.subjects.push(subject);
// }

// addTeacherToSubject(engelska, beaNilklint);
// addTeacherToSubject(engelska, katarinaSandgren);


// console.log("#7. Engelska:", engelska.teachers); 
// console.log("#7. Lärare:", beaNilklint.subjects); 

function addSubjectToTeacher (subject, teacher){
if (!subject.teachers[teacher.name]){
    subject.teachers[teacher.name]= teacher;


} if (!teacher.subjects.includes(subject)){
  teacher.subjects.push(subject);
}
}

addSubjectToTeacher (engelska, katarina);
addSubjectToTeacher (svenska, katarina);
console.log(katarina);
console.log(engelska);

 

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

// #9. Skapa följande metoder (Någon eller ett par av metoderna kan förekomma flera 
// gånger fast på olika objekt med olika logik) och lägg in de i rätt typ av 
// objekt: addTeacher, enlistToSubject, addStudent, addSubject


carolin.enlistToSubject(engelska);
console.log("#9. ", carolin);

stina.addSubject(engelska);
console.log("#9. ", stina);

engelska.addStudents(carolin);

engelska.addTeacher(stina);
console.log("#9. ", engelska);


// #10. Prova att leka runt med alla de skapade metoderna i konsolen och försöka lägga till i 
// de olika objekten. Skriv ut objekten hela tiden och inspektera dem. Kan du tänka dig 
// någon likhet med ett riktigt adminprogram för en skola där en admin till exempel skriver
//  ut en lista på alla ämnen för att se vilka respektive lärare som är ansvariga för 
//  respektive kurs.

alexandra.enlistToSubject(matematik);
console.log("#10. ", alexandra);

carolin.enlistToSubject(matematik);
console.log("#10. ", carolin);

katarina.addSubject(matematik);
console.log("#10. ", katarina);

matematik.addStudents(carolin);

matematik.addTeacher(katarina);
console.log("#10. ", engelska);

nyvangsskolan.addTeacher(stina);
nyvangsskolan.addTeacher(katarina);

nyvangsskolan.addStudents(carolin);
nyvangsskolan.addStudents(andre);

console.log("10. Skolan:", nyvangsskolan);

// #11. Skapa fler metoder, quitSubject, removeTeacher, relegateStudent, fireTeacher. 
// I vilka objekt hör dessa metoder hemma? Och om vi till exempel sparkar en lärare, 
// så måste vi ju ta bort lärarens koppling med skolan, och ämnet/ämnerna som lärarenundervisar 
// i. Hur löser vi detta i våra metoder, nu får vi börja tänka oss för lite.

carolin.quitSubject(matematik);
console.log ("#11. ", carolin);

matematik.removeTeacher(katarina);
console.log("#11. ", matematik);

nyvangsskolan.fireTeacher(katarina);


nyvangsskolan.relegateStudent("#11. ", andre);
console.log("#11. skolan: ", nyvangsskolan);
console.log("#11. eng: ", engelska);



// #12. Lek runt med dessa metoder i konsolen. Lägg till lite här och ta bort lite där. 
// Rätt smidigt va?

//klart!


// #13. Ny bygger vi på det lite. För att undvika att behöva anropa massa metoder i 
// konsolen när vi startar om programmet (vilket händer vid varje redigering av 
  // script-filen) så kan vi längst ner i script-filen skapa (alltså den koden läses in 
    // sist hela tiden) logik för att koppla några studenter till skolan, några ämnen till 
    // studenterna och några lärare till ämnena och så vidare. Skapa sån logik nu.



// #14. Skapa en funktion (OBS, en fristående funktion) , displayAllStudents som loopar
//  igenom skolans alla studenter med hjälp av en for-loop. Tänk på att en vanlig for..of 
//  loop inte fungerar här (varför är det så?). Vi måste använda en for..IN loop, och
  // en for..in loop låter oss loopa igenom ett objekts egenskaper (även kallad nycklar, 
  // keys) och på så sätt kunna koppa åt alla egenskaperna värde. Syntax:
// 

function displayAllStudents(nyvangsskolan) {

  for (let index in nyvangsskolan.students) {
    const student = nyvangsskolan.students[index];  
    const subjects = student.subjects.join(", ");  
    
  
    console.log(`#14. ${student.name} läser följande ämnen: ${subjects}`);
  }
}

displayAllStudents( nyvangsskolan);

// }
// Länk, for-loops w3schools
// 
// Länk om for..in loops specifikt.







// #15. Skapa nu fler funktioner, displayAllSubjectsOfStudent(student), 
// displayAllStudentsEnlistedToSubject(subject), displayAllTeachers. 
// Varje funktion bör ha något returvärde.

function displayAllSubjectsOfStudent(student) {
  
  for (let index in student.subjects) {
    
    const subjects = student.subjects.join(", ");  
    

  
    console.log(`#15. ${student.name} läser följande ämnen: ${subjects}`);
  }
}

displayAllSubjectsOfStudent(carolin);


function displayAllStudentsEnlistedToSubject (subject){

  
 
    for (let index in subject.students) {

      const student = subject.students[index];
      const studentName = student.name;  
      
    
      console.log(`#15. I ${subject}: läser ${student.name}`);
    }
  }
  
  displayAllStudentsEnlistedToSubject(matematik);
  
  
  function displayAllTeachers (nyvangsskolan){

    for (let index in nyvangsskolan.teachers) {
      const teacher = nyvangsskolan.teachers[index];  
      //const subjects = student.subjects.join(", ");  
      
    
      console.log(`#15.  Lärarna på skolan: ${teacher.name} `)
    }
  }
  
  displayAllTeachers( nyvangsskolan);
  


// 
// #16. Bygg ut med ett ytterligare typ av objekt, lägg till objekt som handlar om betyg. 
// Vilka egenskaper ska dessa ha? Vilka metoder kan behövas i dessa betygsobjekt? Hur ska 
// relationen mellan de andra objekten vara? Vilka metoder bör finnas i de andra typerna 
// av objekt som behandlar betyg? Försöka lösa detta och inspektera och lek runt med det 
// i konsolen.


const grade {
  
}