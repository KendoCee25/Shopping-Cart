import classes from '../components/section2.module.css'
const Section2 = () => {
    return(
        <div>
            

<section className={classes.section2}>
        <div className={classes.featured}>
          <p>Practice Advice</p>
          <h1>Featured <span>Products</span></h1>
        </div>
        <div className={classes['featured-card']}>
            <div className={classes.card}>
              <div><img src="/18.png" alt="" /></div>
              <div className={classes['feature-info']}>
                <div className={classes.google}><span>Google</span><span>Trending</span><span>New</span></div>
                <div>
                  <p>
                    Loudest à la Madison #1 <br />(L'integral)
                  </p>
                  <p>
                    We focus on ergonomics and meeting <br />
                    you where you work. It's only a <br />
                    keystroke away.
                  </p>
                  <div className={classes.time}>
                    <p><img src="/21.png" alt="" />22 Apirl 2021</p>
                    <p><img src="/22.png" alt="" />10 comments</p>
                  </div>
                  <div className={classes.learn}>Learn More <img src="/23.png" alt="" height='12px'  /></div>
                </div>
              </div>
              

            </div>
            <div className={classes.card}>
              <div><img src="/19.png" alt="" /></div>
              <div className={classes['feature-info']}>
                <div>
                  <div className={classes.google}><span>Google</span><span>Trending</span><span>New</span></div></div>
                  <div>
                    <p>
                      Loudest à la Madison #1 <br />(L'integral)
                    </p>
                    <p>
                      We focus on ergonomics and meeting <br />
                      you where you work. It's only a <br />
                      keystroke away.
                    </p>
                    <div className={classes.time}>
                      <p><img src="/21.png" alt="" />22 Apirl 2021</p>
                      <p><img src="/22.png" alt="" />10 comments</p>
                    </div>
                  <div className={classes.learn}>Learn More <img src="/23.png" alt="" height='12px' /></div>
                </div>
              </div>
              
            </div>
            <div className={classes.card}>
              <div><img src="/20.png" alt="" /></div>
              <div className={classes['feature-info']}>
                <div>
                  <div className={classes.google}><span>Google</span><span>Trending</span><span>New</span></div></div>
                  <div>
                    <p>
                      Loudest à la Madison #1 <br />(L'integral)
                    </p>
                    <p>
                      We focus on ergonomics and meeting <br />
                      you where you work. It's only a <br />
                      keystroke away.
                    </p>
                    <div className={classes.time}>
                      <p><img src="/21.png" alt="" />22 Apirl 2021</p>
                      <p><img src="/22.png" alt="" />10 comments</p>
                    </div>
                    <div className={classes.learn}>Learn More <img src="/23.png" alt="" height='12px' /></div>
                  </div>
            </div>
              </div>
              
        </div>
      </section>
        </div>
    )

}
export default Section2
