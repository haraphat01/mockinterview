"use client"
import ProtectedRoute from '../components/ProtectedRoute';
import Sidebar from "../components/Sidebar"



export default function Dashboard ()  {
    
    return(
        <ProtectedRoute>
        <div>
          
            <Sidebar/>
        </div>
        </ProtectedRoute>
    )
};


