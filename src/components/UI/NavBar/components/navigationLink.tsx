import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLink = 
styled(NavLink)
`
color: #fff;
text-decoration: none;
padding: 10px;
font-size: 18px;
&:hover {
    color: #53A548
}
`
;