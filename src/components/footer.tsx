import classes from '../components/footer.module.css'

const Footer = () => {
    return(
        <div>
            <footer>
        <div className={classes['main-footer']}>
            <div>
            <h4>Company Info</h4>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
        </div>
        <div>
            <h4>Legal</h4>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
        </div>
        <div>
            <h4>Features</h4>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
        </div>
        <div>
            <h4>Resources</h4>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customer</p>
            <p>API</p>
        </div>
       <div>
            <h4>Get In Touch</h4>
            <div>
                <input type="text" placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
            <p>Lore imp sum dolor Amit</p>
       </div>
    </div>
        <div>
          <p className={classes.last}>Made with Love By Finland All Right Reserved</p>
        </div>
      </footer>
        </div>
    )
}

export default Footer