import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Header: React.FC = () => {
  return(
     <div className='grid-header font-sans  bg-background-primary '>

    <div className='flex flex-wrap justify-end '>
    <div className=' mt-4 mr-6 w-[25px] h-[23px] text-red-300   '>
    <AnnouncementRoundedIcon sx={{ fontSize: 24 }}/> 
    
    </div>    
    
   <div className=' mt-4 mr-4 w-[25px] h-[23px] text-blue-500  '>
   <AccountCircleRoundedIcon sx={{ fontSize: 24 }}/>
   </div>
   </div>
  </div>


    );
}

export default Header; 