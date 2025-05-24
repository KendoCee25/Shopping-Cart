import classes from '../components/section3.module.css'

const Section3 = () =>{
    return(
    <div>
        <section className={classes.section3}>
            <div>
                <div className={classes.about}>
                <h2>What they say about us</h2>
                <img src="/24.png" alt="" height='15%' width='12%'  />
                <div className={classes.img}>
                    <img src="/25.png" alt="" />
                    <img src="/25.png" alt="" />
                    <img src="/25.png" alt="" />
                    <img src="/25.png" alt="" />
                    <img src="/26.png" alt="" />
                </div>
                <p>Slate helps you see how many more days you need to work to 
                    <br /><span className={classes.span}>reach your financial goal.</span></p>
                    </div>
                    <div>
                        <h5 className={classes.rg}>Regina Miles</h5>
                <h5>Designer</h5>
            </div>
        </div>
            <div>
                <div className={classes['section3-grid']}>
                <div><img src="/27.png" alt="" /></div>
                <div><img src="/28.png" alt="" /></div>
                <div><img src="/29.png" alt="" /></div>
                <div><img src="/30.png" alt="" /></div>
                <div><img src="/31.png" alt="" /></div>
                <div><img src="/32.png" alt="" /></div>
                <div><img src="/33.png" alt="" /></div>
                <div><img src="/34.png" alt="" /></div>
                <div><img src="/35.png" alt="" /></div>
            </div>
            </div>
            
        </section>
    </div>
    )
}

export default Section3