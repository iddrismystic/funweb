import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Head  from 'next/head';
import Script from 'next/script'
const Layout = ({children}) => {

    return (  
        <div>
      <Script src="https://fun-css.github.io/funcss/js/fun.js" />
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