import React, { useReducer } from 'react';

function App() {

  const profiles = [
    { name: "Taro", age: 23},
    {name: "hanako", age: 10},
    {age: 10}
  ]

  return (
    <div className="App">
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}

const User = (props) => {
return <div>Hi, I am {props.name}, age is {props.age}</div>
}

User.defaultProps = {
  age: 1,
  name: "名無し"
}

export default App;
