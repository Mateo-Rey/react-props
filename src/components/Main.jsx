import React from "react";
import StudentCard from "./StudentCard";

let student = {
     name: 'Mateo Rey',
     age: 15,
    id: 3123

}


function Main({ name }) {
  return (
    <>
      <main>
        <h1>
          <b>Hello {name} </b>
        </h1>
        {name && <StudentCard student ={student}/>}
      </main>
    </>
  );
}

export default Main;
