import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
        this.state = {
            count : 0,
        }
        console.log(this.props.name + " Child Constructor");
    }

    componentDidMount(){
        console.log(this.props.name + " Child ComponentDidMount Called");
    }

    render(){
        const {count} = this.state;  // destructuring
        console.log(this.props.name + " Child Render");
        return(
            <div className="user-card">
                <h2>Name : {this.props.name}</h2>
                <h2>Count : {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Count Increase</button>
                <h3>Age : 23</h3>
                <h3>Location : Chennai</h3>
            </div>
        );
    }
    
}

export default UserClass;