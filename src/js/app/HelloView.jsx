import React        from "react";
import HelloActions from "./HelloActions.jsx";
import HelloStore   from "./HelloStore.jsx";

class HelloView extends React.Component
{

    constructor()
    {
        super();
        this.state=HelloStore.data;
        this.changeListener=()=>{ this.updateState(); };
    }
    helloHandler()
    {
        HelloActions.sayHello();
    }
    
    greetHandler()
    {
        HelloActions.sayGreet();
    }
    
    componentDidMount() 
    {
        
        HelloStore.addChangeListener(this.changeListener);
    }    
    componentWillUnmount() 
    {
        HelloStore.removeChangeListener(this.changeListener);
    }
    
    updateState()
    {
        this.setState( HelloStore.data ); 
    }
    
    render()
    {
        return( 
          <div>
            <h1 onClick={this.helloHandler}> Hello </h1>
            <h1 onClick={this.greetHandler}> Greet </h1>
            <div>{this.props.author.name} : {HelloStore.data.msg}</div>
          </div>
        );
    }
}

export default HelloView;