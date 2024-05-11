import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//Class based Component
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount Called");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Based Component</h1>
        <h2>This is the about section</h2>
        <UserClass name={"Aravind"} />
        <UserClass name={"Dhoni"} />
      </div>
    );
  }
}

//Function based Component
// const About = () => {
//     return(
//         <div>
//             <h1>About Function Based Component</h1>
//             <h2>This is the about section</h2>
//             <User name={"Aravind from function"} />
//             <UserClass name={"Aravind from Class"} />
//         </div>
//     );
// }

export default About;