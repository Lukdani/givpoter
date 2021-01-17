import React, { useState } from 'react';
import { Column } from '../../Common/components/grid';
import { NavbarContainer } from './components/navbarContainer';
import { NavigationLink } from './components/navigationLink';

import { Button } from '../../Common/components/button';
import { Icon } from '../../Common/components/icon';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';



export interface NavBarProps {
    
}
 
const NavBar: React.SFC<NavBarProps> = () => {
    const [firstName, setFirstName] = useState<string | undefined>('')

    const handleClick = () => {
        Axios.post<{userId: string}>(`/api/MakeUser`, {
            firstName: 'Fred',
            lastName: 'Flintstone',
            email:'flintstone@example.com',
            password: 'Sommer123!'
          })
  .then((response) => {
    // handle success
    Axios.get<{
        firstName: string,
        lastName: string,
        lastLogin: string
    }>(`/api/UserDetails?userId=${response.data}`).then(response => {
setFirstName(response.data?.firstName)
      })
  })
  .catch((error) => {
    // handle error
    console.log(error); 
  })

    }
    return ( 
     <Column>
        <NavbarContainer>


            <NavigationLink to='/'>Home</NavigationLink>
<NavigationLink to='/reviews'>Anmeldelser</NavigationLink>
<NavigationLink to='/blog'>Blog</NavigationLink>
<NavigationLink to='/om'>Om</NavigationLink>
<NavLink to='/createreview'><Button>Anmeld produkt</Button></NavLink>
{firstName && <span style={{fontWeight: 'bold', fontSize: '20px'}}>{firstName}</span>}
<Button onClick={handleClick} backgroundColor='transparent'>
<Icon icon='user-circle' />
</Button>

        </NavbarContainer>
        </Column>
     );
}
 
export default NavBar;