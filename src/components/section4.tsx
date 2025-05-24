import classes from '../components/section4.module.css'

const Section4 = () =>{
    return(
        <div>
            <section className={classes['background-img']}>
                <div className={classes['back-img']}>
                    <img src="/36.png" alt="" />
                </div>
                <div className={classes.design}>
                    <h4>Designing Better Experience</h4>
                <h1>Problems trying to resolve <br /> <span>the conflict between</span> </h1>
                <p>Problems trying to resolve the conflict between the two major <span>realms of Classical physics:</span> </p>
                <h2>$16.48</h2>
                </div>
                
                <div className={classes.btn}>
                    <button>ADD YOUR CALL TO ACTION</button>
                </div>
                
                
            </section>
        </div>
    )
}

export default Section4