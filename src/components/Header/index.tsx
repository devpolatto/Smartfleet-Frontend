import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const Header: React.FC = () => {
  return(
     <div className='grid-header font-sans bg-background-primary flex justify-between items-center border border-spacing-1 px-4'>
  

        <div>
          <div className='flex flex-wrap justify-end '>
          </div>  
        </div>

          <div className='flex flex-row h-full items-center gap-10'>
            <div className='text-red-300'>   
              <AnnouncementRoundedIcon sx={{ fontSize: 24 }}/> 
            </div>    
              
            <div className='text-blue-500  '>
              <AccountCircleRoundedIcon sx={{ fontSize: 24 }}/>
            </div>
       </div>
    </div>
    

    );
}
export default Header; 