import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Head  from 'next/head';
import Script from 'next/script'
const Layout = ({children}) => {

    return (  
        <div  lang="en">
      <Script src="https://fun-css.github.io/funcss/js/fun.j" />
      <Script src="/js/ads.js" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6351985525676458" crossorigin="anonymous" />
 
            <Navbar />
        <div className="Page">
            <Sidebar />
            <div className="Content">
            <Script async="async" data-cfasync="false" src="//pl16828229.effectivegatetocontent.com/8efab60a26b5c40a3a52aab9bdb98896/invoke.js"></Script>
            <script async="async" data-cfasync="false" src="//pl16828229.effectivegatetocontent.com/8efab60a26b5c40a3a52aab9bdb98896/invoke.js"></script>

                {children}
            </div>
         
        </div>
        <Script type='text/javascript' src='//pl16828268.effectivegatetocontent.com/11/40/b4/1140b4a4bd5865ca0b728d3d1d62a9d6.js'></Script>
        </div>
    );
}
 
export default Layout;