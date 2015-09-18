import React        from "react";
import HelloActions from "./HelloActions.jsx";
import HelloStore   from "./HelloStore.jsx";
import HelloView    from "./HelloView.jsx";

class AppView extends React.Component
{
    render()
    {
        return ( 
            <HelloView author={{name:"Praveen"}} />
        );
    }
}

export default AppView;