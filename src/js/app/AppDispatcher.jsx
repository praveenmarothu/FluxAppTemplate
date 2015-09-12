import {Dispatcher} from "flux";

class AppDispatcher extends Dispatcher
{
    handleAction( action )
    {    
        var event=
        {
            source : "VIEW_ACTION",
            action : action
        };
    
        this.dispatch(event);   
    }
}

let _dispatcher = new AppDispatcher();

export default _dispatcher;

