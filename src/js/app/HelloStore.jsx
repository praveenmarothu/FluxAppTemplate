import AppDispatcher from './AppDispatcher.jsx';
import {EventEmitter} from 'events';

class HelloStore extends EventEmitter 
{
    constructor()
    {
        super();
        this.data={msg:"--NO-MESSAGE--"};
    }
    
    getData()
    {
        return this.data;
    }
    
    msgHello() 
    {
        this.data.msg="Hello from Store";
        this.emitChange();
    }
    msgGreet() 
    {
        this.data.msg="Greetings from Store";
        this.emitChange();
    }
    emitChange() 
    {
        this.emit('CHANGE');
    }

    addChangeListener(cb) 
    {
        this.on('CHANGE', cb);
    }

    removeChangeListener(cb) 
    {
        this.removeListener('CHANGE', cb);
    }
}


let _helloStore = new HelloStore();

export default _helloStore;

AppDispatcher.register((payload) => 
{
    let action = payload.action;
    
    console.log(action);
    
    switch(action.type) 
    {
        case "ACN_HELLO" : _helloStore.msgHello();break;
        case "ACN_GREET" : _helloStore.msgGreet();break;
        default: break;
    }
    
    
    return true;
});

