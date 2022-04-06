import React, { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard(props) { 
    return ( 
        <>  
            <Outlet />
        </>

    );
}

export default Dashboard;