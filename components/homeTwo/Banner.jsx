import Image from "next/image";
import Link from "next/link";
import heroTwoIllustration from "/public/images/hero/hero-two-illustration.png";

const Banner = () => {
  return (
    <section className="hero hero--two home__bg pos__rel over__hi bg__img">
      <div className="container">
        <div className="hero__area">
          <div className="row">
            <div className="col-lg-7 col-xxl-6">
              <div className="hero__content">
                <h5 className="neutral-top">Smart. Simple. Accessible.</h5>
                <h1>
                  Investing Made <span>Simple</span> &<span>Transparent</span>
                </h1>
                <p className="primary neutral-bottom">
                  Start growing your passive income today. Invest from as low as
                  100 USD in real estate opportunities.
                </p>
                <div className="hero__cta__group">
                  <Link href="/property" className="button button--effect">
                    Start Exploring
                  </Link>
                  <Link
                    href="/business-loan"
                    className="button button--secondary button--effect"
                  >
                    Buy Shares
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xxl-6">
              <div className="hero__illustration d-none d-lg-block">
                <Image src={heroTwoIllustration} alt="Hero Illustration"
                style={{
                  width: '600px',
                  height: 'auto',
                  position: 'relative',
                  top: '20px',
                  left: '-200px'
                }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
