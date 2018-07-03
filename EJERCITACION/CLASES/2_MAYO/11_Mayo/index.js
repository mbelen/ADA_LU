let alumno = new Alumnx ("Lucía", "Wainfeld","13-04-1984","30978572","1303");
console.log(alumno)

let materia = new Materia ("Española II", "martes 13 a 15");
let otraMateria = new Materia ("Gramática", "martes 15 a 17");
alumno.addMateria(materia);
alumno.addMateria(otraMateria)
otraMateria.addNota(3);
otraMateria.addNota(10);
materia.addNota(9);
materia.addNota(8);
materia.addNota(5);
console.log(materia)
let profesor = new Profesor ("Martín", "Menéndez", "20-04-1960", "55555555","1000")
console.log(profesor);

let promedioMateria = materia.calcularPromedioMateria();
let promedioOtraMateria = otraMateria.calcularPromedioMateria();

let promedioGeneral = alumno.calcularPromedio();
console.log(promedioGeneral);
console.log(promedioMateria)
console.log(promedioOtraMateria)