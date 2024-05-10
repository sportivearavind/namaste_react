import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is the about section</h2>
            <User name={"Aravind from function"} />
            <UserClass name={"Aravind from Class"} />
        </div>
    );
}

export default About;