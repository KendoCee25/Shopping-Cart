import classes from '../components/serviceSection.module.css'

const ServiceSection = () => {
    return(
        <div>
            <section className={classes['services-section']}>
        <div className={classes['section-content-wrapper']}>
          <h4 className={classes['section-titles']}>Featured Products</h4>
          <h2 className={classes['section-title']}>The Best Services</h2>
          <p className={classes['section-description']}>Problems trying to resolve <span>the conflict between</span></p>
          <div className={classes['services-grid']}>
            <div className={classes['service-item']}>
              <img src="/15.png" alt="easy" />
              <h3 className={classes['service-title']}>Easy Wins</h3>
              <p className={classes['service-description']}>Get your best looking smile now!</p>
            </div>
            <div className={classes['service-item']}>
              <img src="/16.png" alt="concrete" />
              <h3 className={classes['service-title']}>Concrete</h3>
              <p className={classes['service-description']}>Defalut is most focused in helping you discover your most beautiful smail</p>
            </div>
            <div className={classes['service-item']}>
              <img src="/17.png" alt="hack" />
              <h3 className={classes['service-title']}>Hack Growth</h3>
              <p className={classes['service-description']}>Overcome any hurdle or any other problem.</p>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default ServiceSection