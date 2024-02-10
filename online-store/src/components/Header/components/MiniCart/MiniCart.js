import React, {useState} from 'react'

import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';


import './style.css'


const MiniCart = (ProductCart) => {
  console.log('ProductCart',ProductCart)
  const [state, setState] = useState(false);


  return (
    <div className="MiniCart">
        <Badge badgeContent={4} color="error">
          <LocalMallIcon className='IconMall' fontSize="small" />
        </Badge>
       <p className='Value'>R$00</p> 

    </div>
  );
}

export default MiniCart;
