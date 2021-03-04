import React, { useEffect, useState } from 'react';

function App() {

  const [myName, setMyName] = useState("Flavio");
  const [myAppointments, setMyAppointments] = useState([]);

  useEffect(() => {
    async function loadApt() {
      await fetch('./data.json')
      .then(async res => {
        const result = await res.json();
        console.log(result);
        const apts = result.map((item: object, i: number) => {
          return item;
        });
        setMyAppointments(apts);
        console.log(myAppointments);
      })
      .catch(error => {
        throw new Error(error)
      });
    }
    loadApt();
  },[]);

  return (
    <>
      <h1>My name is: {myName}</h1>
    </>
  );
}

export default App;
