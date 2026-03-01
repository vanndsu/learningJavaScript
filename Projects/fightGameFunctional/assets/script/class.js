function createPerson(name,lastName,age){

  return{
    name,
    lastName,
    age
  }
}

let p1 = createPerson('Vanderson','Ribeiro',25)

console.log(p1.age)