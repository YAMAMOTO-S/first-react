import React from 'react';
import PropTypes from 'prop-types'

function App() {

  const profiles = [
    { name: "Taro", age: 23},
    {name: "hanako", age: 10},
    {name: "aaaa", age: 3}
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

//Userの受け付けるpropsの型を設定するよ
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
