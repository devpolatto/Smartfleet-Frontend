import React from 'react';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DriveEtaRoundedIcon from '@mui/icons-material/DriveEtaRounded';
import LocalGasStationRoundedIcon from '@mui/icons-material/LocalGasStationRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';


const SideNav: React.FC = () => {
  return(
     <div className='grid-sidenav relative text-center  bg-gradient-to-b from-[#29238C] to-[#46429D]'>
      <div className=' flex flex-col items-center gap-2 absolute top-14'>

      <div className='flex flex-col items-center w-[68px] h-[62px]  text-white justify-center '>
       <DashboardRoundedIcon sx={{ fontSize: 24  }} />
       <p className=' leading-4 text-[10px]'> Dashboard </p>
       </div>    
      
      <div className='flex flex-col items-center w-[68px] h-[62px]   text-white justify-center'>
    <DriveEtaRoundedIcon sx={{ fontSize: 24 }} /> 
    <p className=' leading-4 text-[10px]'> Carros </p>
     </div>

     <div className='flex flex-col items-center w-[68px] h-[62px]   text-white justify-center'>
     <LocalGasStationRoundedIcon sx={{ fontSize: 24 }} /> 
     <p className=' leading-4 text-[10px]'> Combustível </p>
    </div>

    <div className='flex flex-col items-center w-[68px] h-[62px]   text-white justify-center'>
     <RateReviewRoundedIcon sx={{ fontSize: 24 }} />
     <p className=' leading-4 text-[10px]'> Multas</p>
     </div>

    <div className='flex flex-col items-center w-[68px] h-[62px]   text-white justify-center'>
   <AttachMoneyRoundedIcon sx={{ fontSize: 24 }}/> 
   <p className=' leading-4 text-[10px]'> Financeiro </p>
   </div>

   <div className='flex flex-col items-center w-[68px] h-[62px]  text-white justify-center'>
  <BadgeRoundedIcon sx={{ fontSize: 24 }} />
  <p className=' leading-4 text-[10px]'>  Motorista </p>
    </div>
    </div>

    <div className=' absolute bottom-0 flex flex-col gap-4 items-center'>
    <div className='flex flex-col items-center w-[68px] h-[62px] mt-12  text-white justify-center'>
    <AnnouncementRoundedIcon sx={{ fontSize: 24 }}/> 
    <p className=' text-[10px]'>  13 </p> 
    </div>

    <div className='w-[59px] border'></div>
    
    <div className='flex flex-col items-center w-[68px] h-[62px]  text-white justify-center'> 
      <SettingsRoundedIcon sx={{ fontSize: 24 }}/>
      <p className= 'text-[10px]'></p>
      </div> 

      </div>
    
    </div>

  )
}

export default SideNav;