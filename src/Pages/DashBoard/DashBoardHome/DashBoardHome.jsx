import React from 'react';
import useRole from '../../../Hooks/useRole';
import DashBoardRiderHome from './DashBoardRiderHome';
import DashBoardAdminHome from './DashBoardAdminHome';
import DashBoardUserHome from './DashBoardUserHome';

const DashBoardHome = () => {
    const {role,roleLoading} = useRole();
    if(roleLoading){
        return <p>Loading...</p>
    }
    if(role === 'rider'){
        return <DashBoardRiderHome></DashBoardRiderHome>
    }
   else if(role === 'admin'){
        return <DashBoardAdminHome></DashBoardAdminHome>
    }
    else{
        return <DashBoardUserHome></DashBoardUserHome>
    }
  
};

export default DashBoardHome;