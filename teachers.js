export const stina = {
    name: "Stina",
    subjects: [],
    addSubject: sharedAddSubject,
    
  
  };
  
  export const katarina = {
    name: "Katarina",
    subjects: [],
    addSubject: sharedAddSubject,
  };
  
  
   function sharedAddSubject (subject){
    this.subjects.push(subject);
    subject.teacher = this;
  }