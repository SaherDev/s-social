import React from 'react';
import TopBar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import './Home.css'
const Home = () => {
    return (  
        <div className="home">
           <TopBar/>
           <div className="homeContainer">
           <Sidebar />
            <Feed/>
            <Rightbar/>

           </div>
        </div>
    );
}
 
export default Home;