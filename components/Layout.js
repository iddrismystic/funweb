import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({children}) => {

    return (  
        <div>
            <Navbar />
        <div className="Page">
            <Sidebar />
            <div className="Content">
                {children}
            </div>
         
        </div>
        </div>
    );
}
 
export default Layout;