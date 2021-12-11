import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Head  from 'next/head';
import Script from 'next/script'
const Layout = ({children}) => {

    return (  
        <div  lang="en">
      <Script src="https://fun-css.github.io/funcss/js/fun.js" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6351985525676458" crossorigin="anonymous" />
 
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