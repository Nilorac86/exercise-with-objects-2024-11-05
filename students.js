export const carolin = {
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
  
  
  export const andre = {
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
  
  export const alexandra = {
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
  
  export const emelie = {
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
  
  export const håkan = {
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