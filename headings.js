class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5PPST6X07E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PPST6X07E');
</script>
    	<header id="header" class="header clearfix"> 
        	<div class="container">
                <div class="header-wrap clearfix">
                    <div id="logo" class="logo">
                        <a href="index.html" rel="home">
                            <img style="width: 1000px;" src="steamlogo.png" alt="image">
                        </a>
                    </div>           
                    <div class="nav-wrap">
                        <div class="btn-menu">
                            <span></span>
                        </div>
                        <nav id="mainnav" class="mainnav">
                            <ul class="menu"> 
                                <li><a href="index.html">Home</a>
                                <li><a href="about-us.html">About</a></li>
                                <li><a href="classes.html">Our Classes</a>
                                <li><a href="contact.html">Contact</a>
                                <li class="has-sub"><a href="courses-grid.html">Forms</a>
                                <ul class="submenu"> 
                                    <li><a href="register.html">Registration</a></li>
                                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfxZmnxVa2BKhatgOMYkXNvNN8uni66wUlw0TEude5XX4tKOQ/viewform" target="_blank">Volunteer to teach a class</a></li> 
                                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScGw5PqbpaDL-PBRWyAPsTJ6iMbXlTSiKrodH_7bRJ3LDIwcA/viewform" target="_blank">Interest to join form</a></li> 
                                </ul><!-- /.submenu -->
                                </li> 
                                <li><a href="news.html">News Scoops</a></li>
                            </ul>
                        </nav>   
                    </div>

                    <div id="s" class="show-search">
                        <a href="#"><i class="fa fa-search"></i></a>         
                    </div>
                    
                    <div class="submenu top-search">
                        <div class="widget widget_search">
                            <form class="search-form">
                                <input type="search" class="search-field" placeholder="Search …">
                                <input type="submit" class="search-submit">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `
    }
}
customElements.define('my-header', MyHeader)
