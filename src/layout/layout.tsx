import React from 'react'
import BottomNav from "./components/BottomNav"
const Layout=(props: { children: any; })=> {
    //  console.log(props,'props===================')
    const  {children}=props;
    return (
        <div>
            {children}
            <BottomNav></BottomNav>
        </div>
    )
}
export default Layout
