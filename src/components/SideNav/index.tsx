import React from 'react';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DriveEtaRoundedIcon from '@mui/icons-material/DriveEtaRounded';
import LocalGasStationRoundedIcon from '@mui/icons-material/LocalGasStationRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import {Link} from 'react-router-dom'

const links = [
  {
    id: 1,
    path: '/',
    icon: <DashboardRoundedIcon sx={{ fontSize: 24  }}/>,
    text: 'Dashboard'
  },
  {
    id: 2,
    path: '/carros',
    icon: <DriveEtaRoundedIcon sx={{ fontSize: 24  }}/>,
    text: 'Carros'
  },
  {
    id: 3,
    path: '/gasolina',
    icon: <LocalGasStationRoundedIcon sx={{ fontSize: 24  }}/>,
    text: 'Gasolina'
  },
  {
    id: 4,
    path: '/multas',
    icon: <RateReviewRoundedIcon sx={{ fontSize: 24  }}/>,
    text: 'Multas'
  },
  {
    id: 5,
    path: '/financeiro',
    icon: <AttachMoneyRoundedIcon sx={{ fontSize: 24  }}/>,
    text: 'Financeiro'
  },
  {
    id: 6,
    path: '/motorista',
    icon: <BadgeRoundedIcon sx={{ fontSize: 24  }}/>,
    text: 'Motorista'
  },
]

const SideNav: React.FC = () => {
  return(
    <div className='grid-sidenav relative text-center  bg-gradient-to-b from-[#29238C] to-[#46429D]'>

      <div className=' flex flex-col items-center gap-2 absolute top-14'>
        {links.map((link, index) => {
          return (
            <Link to={link.path} key={index}>
              <div className='flex flex-col items-center w-[68px] h-[62px]  text-white justify-center '>
                {link.icon}
                <p className=' leading-4 text-[10px]'>{link.text}</p>
              </div>
            </Link>
          )
        })}
      </div>
      
    <div className=' absolute bottom-0 flex flex-col gap-1 items-center'>
    
      <div className='w-[59px] border'></div>
    
        <div className='flex flex-col items-center w-[68px] h-[62px] mb-1 text-white justify-center'> 
          <SettingsRoundedIcon sx={{ fontSize: 24 }}/>
          <p className= 'text-[10px]'></p>
        </div> 

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