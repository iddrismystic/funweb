<<<<<<< HEAD
import Head from "next/head"
const themes = [
    {
        name : "Company Theme",
        src : `https://fun-css.github.io/company`,
        downloadsrc : `https://github.com/fun-css/company/archive/refs/heads/main.zip`,
    },
    {
        name : "Portfolio Theme",
        src : `https://fun-css.github.io/portfolio`,
        downloadsrc : `https://github.com/fun-css/portfolio/archive/refs/heads/main.zip`,
    }
]
=======

>>>>>>> 19439f74c65240dd15410e058ab37f3103ed36a6
import Footer from '../components/Footer';
const Themes = () => {
    return (  
        <section>
<<<<<<< HEAD
<Head>
            <title>Css Themes - Funcss Framework</title>
          <meta name='description' content='
          Download and use free themes for your projects, save time
          and code faster with funcss framework.
       ' />
    <meta
    name="keywords"
    content="fun, css, card, slide, panel, slide panel"
    />
</Head>
            <div className="">
                <div className="container">
                <h1 className="header text-indigo text-center">HTML AND FUNCSS FREE SIMPLE THEMES DOWNLOAD</h1>
                <p className="h4 text-center">
                    Download and use funcss framework themes for free
                </p>
                </div>
            </div>
            
            <div className="container">
                {
                    themes.map(theme=>(
<div key={theme.name} className="section">
    <div className="screen">
        <div className="row">
            <div className="col sm-6 md-4 lg-4 padding">
                <div>
                    <span className="screen-dot red"></span>
                    <span className="screen-dot yellow"></span>
                    <span className="screen-dot green"></span>
                </div>
            </div>
            <div className="col sm-6 md-8 lg-8 padding">
                <input type="text" className="input borderless white width-100-p padding" disabled placeholder={theme.src}/>
            </div>
        </div>
        <div className="screen-content">
        <div className="iframe-container">
            <iframe src={theme.src} frameBorder="0" className="responsive-iframe"></iframe>
        </div>
        </div>
        <div className="section">
            <a href={theme.src}>
            <button className="button indigo text-white inline-block margin"> Preview <i className="fas fa-eye"></i></button>
            </a>
            <a href={theme.downloadsrc}>
            <button className="button blue text-white inline-block margin">Download <i className="fas fa-download"></i></button>
            </a>
        </div>
        <div>

        </div>
    </div>

</div>
                    ))
                }

=======
            <div className="padding">
                <h1 className="header h1 text-center">HTML AND FUNCSS FREE SIMPLE THEMES DOWNLOAD</h1>
                <p className="h4 text-center">
                    Download and use funcss framework themes for free
                </p>
            </div>
            
            <div className="container">
                <div className="iframe-container">
                <iframe className="responsive-iframe" src="https://fun-css.github.io/portfolio/"></iframe>
                </div>
                <div className="iframe-container">
                <iframe className="responsive-iframe" src="https://fun-css.github.io/company/"></iframe>
                <div className="absolute bottom-0 left-0">
                <a href='https://fun-css.github.io/company/'><button className='button indigo text-white card'>Preview <i className="fas fa-eye"></i></button></a>
                </div>
                </div>
>>>>>>> 19439f74c65240dd15410e058ab37f3103ed36a6
            </div>

            <Footer />

        </section>
    );
}
 
export default Themes;