import AppDispatcher from './AppDispatcher.jsx';


var HelloActions= 
{
    sayHello: () => 
    {
            AppDispatcher.handleAction
            ({
                type: "ACN_HELLO",
                data: "Hello from Action"
            });
    },
    sayGreet: () => 
    {
            AppDispatcher.handleAction
            ({
                type: "ACN_GREET",
                data: "Greetings from Action ....."
            });
    }    
}

export default HelloActions;