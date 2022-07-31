import React, {useEffect, useState} from 'react';
import './App.css';
import {useGetUsersQuery} from "./services/user";

function App() {
  const [person, setPerson] = useState();
  const [value, setValue] = useState("Random person");
  const [title, setTitle] = useState('name');
  const {data, isLoading, refetch} = useGetUsersQuery();

  useEffect(() => {
    if(data) {
      const randomPerson = data.result[0];
      const {phone, email} = randomPerson;
      const {large: image} = randomPerson.picture;
      const {password} = randomPerson.login;
      const {first, last} = randomPerson.name;
      const {dob: {age}} = randomPerson;
      const {street: {number, name}} = randomPerson.location;
      const newPerson = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`
      }
      setPerson(newPerson);
      setTitle("name");
      setValue(newPerson.name);
    }
  }, [data]);


  return (
    <main>
      <div className="block bcg-block">
        <div className="block">
          <div className="container">
            <img
              src={person && person.image}
              alt="random_user"
              className="user-img"
            />
            <p className="user-title">My {title}</p>
            <p className="user-value">{value}</p>
            <div className="values-list">
              <button data-labels="name" onMouseOver={handlevalue} className="i"
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
