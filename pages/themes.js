
import Footer from '../components/Footer';
const Themes = () => {
    return (  
        <section>
            <div className="padding">
                <div className="header h1 text-center">HTML AND FUNCSS FREE SIMPLE THEMES</div>
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
                <div>
                    <div className="row-flex">
                        <div><button>Preview <i className="fas fa-eye"></i></button></div>
                    </div>
                </div>
                </div>
            </div>

            <Footer />

        </section>
    );
}
 
export default Themes;