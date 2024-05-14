import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
        this.state = {
            userInfo: {
                name : "def",
                location: "default location",
                following: "10",
                avatar_url: "https://goodoing.com",
            }
        }
        // console.log(this.props.name + " Child Constructor");
    }

    async componentDidMount(){
        // console.log(this.props.name + " Child ComponentDidMount Called");
        const data = await fetch(
          "https://api.github.com/users/sportivearavind"
        );
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json
        });
    }

    render(){
        
        // console.log(this.props.name + " Child Render");
        const {name, location, following, avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h3>Following : {following}</h3>
            </div>
        );
    }
    
}

export default UserClass;