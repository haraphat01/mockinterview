"use client"
import ProtectedRoute from '../components/ProtectedRoute';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';



export default function Dashboard ()  {
    
    return(
        <ProtectedRoute>
        <div>
            <p>Dashboard page</p>
        </div>
        </ProtectedRoute>
    )
};


