import Head from "next/head";
import Footer from "../components/Footer";

const accordion = () => {
    return ( 
        <div>
        <div>
        <section>
<Head>
<title>Css Progressbars - Funcss Framework</title>
<meta name='description' content='
When creating websites you might want to show certain content based on the user
screen width.
' />
<meta
name="keywords"
content="fun, css, card, slide, panel, slide panel"
/>
</Head>
  <div className="content-wrapper">
<div className="sub-content padding">
 <div className="border padding ads content-middle light">
 <div id="container-8efab60a26b5c40a3a52aab9bdb98896">Ads</div>
 </div>
<div className="section">
<a href="#show-hide" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Show And Hide</div></a>
</div>
</div>
<div className="main-content">
<div className="container">
<h1 className="header h1  text-indigo">
Show And hide based on screen width - Funcss
</h1>
<div className="h4">
When creating websites you might want to show certain content based on the user
screen width. the show and hide classes are your answer.
</div>
<div className="section hr">

</div>
</div>
<div className="padding-top-30 container" id="show-hide">
<div className="topic h4">Hide And Show Based On Screen Width</div>
<div className="note">
When creating websites, you might want to hide certain contents of your website base on the screen size 
of the user. Our framework is perfect for that kind job. Learn how to show and hide certain contents of Your
website base on the users screen width.

</div>
<div>
    <div className="code">
<xmp></xmp>
    </div>
    <div className="preview">
    <div className="accordion">
        Section 1
        <div className="panel">
  <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non aut, quae reprehenderit saepe accusantium iure quasi quam ex deserunt ea amet necessitatibus porro architecto quia vero eveniet quo sint!
  </p>
</div>  
    </div>



    </div>
</div>
</div>
<Footer />

</div>
</div>
</section>
</div>
</div>
     );
}
 
export default accordion;