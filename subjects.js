export const engelska = {
    name: "Engelska",
    students: [],
    teachers: null,
    addTeacher: sharedAddTeacher,
    addStudent: sharedAddStudent,
    removeTeacher: sharedRemoveTeacher,
};

export const matematik = {
  name: "Matematik",
    students: [],
    teachers: null,
    addTeacher: sharedAddTeacher,
    addStudent: sharedAddStudent,
    removeTeacher: sharedRemoveTeacher,
};



export const svenska = {

  name: "Svenska",
  students: [],
  teachers: null,
  addTeacher: sharedAddTeacher,
  addStudent: sharedAddStudent,
  removeTeacher: sharedRemoveTeacher,
};

 function sharedAddTeacher (teacher){

    this.teachers[teacher.name] = teacher;
  }

function sharedAddStudent (student){

    this.students.push(student);
  }
  
  function sharedRemoveTeacher (teacher){
    this.teacher = null;
    teacher.subjects = teacher.subjects.filter((s) => s !== this);
}

