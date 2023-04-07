class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Footer -->
        <footer class="footer">  
            <div class="footer-widgets">   
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">  
                            <div class="widget widget-text">
                                <img src="steamlogo.png" alt="image">
                                <ul>
                                    <li class="address">8072 Commonwealth Ave, Buena Park, CA 90621</li>
                                    <li class="phone"><a href="#">+ (562) 265-8355</a></li>
                                    <li class="email"><a href="#">info@blastingsteam.org</a></li>  
                                </ul> 
                            </div><!-- /.widget -->      
                        </div>

                        <div class="col-md-3">
                            <div class="widget widget_tweets clearfix">
                                <h5 class="widget-title">User Links</h5>
                                <ul class="link-left">
                                    <li>
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a href="register.html">Register</a>
                                    </li>

                                </ul>

                            </div><!-- /.widget-recent-tweets -->
                        </div><!-- /.col-md-2 -->


                        <div class="col-md-3">
                            <div class="widget widget-quick-contact">
                                <h5 class="widget-title">Quick Contact</h5>
                                <div class="row">
                                    <div class="col-md-12">
                                        <form class="flat-contact-form" id="contactform" method="post" action="./contact/contact-process.php">

                                            <input type="email" value="" tabindex="2" placeholder="Your Email" name="email" id="email-contact" required="">
                                           
                                            <textarea class="type-input" tabindex="3" placeholder="Message" name="message" id="message-contact" required=""></textarea> 
                                            
                                            <div class="submit-wrap">
                                            <button class="flat-button bg-orange"><i class="fa fa-long-arrow-right"></i></button>
                                            </div>
                                           
                                        </form><!-- /.comment-form -->     
                                    </div><!-- /.col-md-12 -->
                                </div>
                            </div><!-- /.widget .widget-instagram -->
                        </div>
                    </div><!-- /.row -->
                </div><!-- /.container -->
            </div><!-- /.footer-widgets -->
        </footer>

        <a class="go-top">
            <i class="fa fa-chevron-up"></i>
        </a>

        <!-- Bottom -->
        <div class="bottom">
            <script src="footer.js"></script>
        </div>
    </div><!-- /. boxed -->


        <!-- Javascript -->
    <script type="text/javascript" src="javascript/jquery.min.js"></script>
    <script type="text/javascript" src="javascript/bootstrap.min.js"></script>
    <script type="text/javascript" src="javascript/jquery.easing.js"></script> 
    <script type="text/javascript" src="javascript/owl.carousel.js"></script> 
    <script type="text/javascript" src="javascript/jquery-waypoints.js"></script>
    <script type="text/javascript" src="javascript/jquery-countTo.js"></script>    
    <script type="text/javascript" src="javascript/parallax.js"></script>
    <script type="text/javascript" src="javascript/jquery.cookie.js"></script>
    <script type="text/javascript" src="javascript/jquery-validate.js"></script>     
    <script type="text/javascript" src="javascript/main.js"></script>

    <!-- Revolution Slider -->
    <script type="text/javascript" src="revolution/js/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="revolution/js/jquery.themepunch.revolution.min.js"></script>
    <script type="text/javascript" src="revolution/js/slider.js"></script>

    <!-- SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) -->    
    <script type="text/javascript" src="revolution/js/extensions/revolution.extension.actions.min.js"></script>
    <script type="text/javascript" src="revolution/js/extensions/revolution.extension.carousel.min.js"></script>
    <script type="text/javascript" src="revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
    <script type="text/javascript" src="revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="revolution/js/extensions/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="revolution/js/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="revolution/js/extensions/revolution.extension.parallax.min.js"></script>
    <script type="text/javascript" src="revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="revolution/js/extensions/revolution.extension.video.min.js"></script>
        `
    }
}

customElements.define('my-footer', MyFooter)