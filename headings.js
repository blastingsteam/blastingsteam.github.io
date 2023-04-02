class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
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
                                    <li><a href="register.html">Register</a>
                                    </li>
                                    <li><a href="https://blastingsteam.org/spoons.mp4">No Plastic</a></li>
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