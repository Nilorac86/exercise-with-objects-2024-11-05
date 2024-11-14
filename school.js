export const nyvangsskolan = {
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
    
    
  
  };