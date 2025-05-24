import classes from  '../components/section1.module.css'

const Section1 = () =>{
    return(
        <div>
            <section>
        <div className={classes.section1}>
          <div className={classes.img1}>
            <img src="/1.png" alt="pics1" />
          </div>
          <div>
            <div className={classes.img2}>
              <img src="/2 (2).png" alt="pics2" />
            </div>
            <div className={classes.img34}>
              <div>
                <img src="/3 (2).png" alt="pics3" className={classes.img3} />
                <img src="/4 (2).png" alt="pics4" className={classes.img4} />
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Section1