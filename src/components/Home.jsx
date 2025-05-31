import ProductSection from './ProductSection';
import RestaurantSection from './RestaurantSection';

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-left">
          <p className="home-subtext">Hi, new friend!</p>
          <h1 className="main-heading">We do not cook, we create your emotions!</h1>
          <p className="home-text">
            Get Basotho made food and more
          </p>

          <div className="btn-group">
            <button className="btn btn-primary btn-icon">
              <img src="/assets/images/menu.svg" alt="menu icon" />
              Our menu
            </button>
            <button className="btn btn-secondary btn-icon">
              <img src="/assets/images/arrow.svg" alt="menu icon" />
              About us
            </button>
          </div>
        </div>

        <div className="home-right">
          <img src="/assets/images/food1.png" alt="food" className="food-img food-1" width="200" loading="lazy" />
          <img src="/assets/images/food2.png" alt="food" className="food-img food-2" width="200" loading="lazy" />
          <img src="/assets/images/food3.png" alt="food" className="food-img food-3" width="200" loading="lazy" />

          <img src="/assets/images/dialog-1.svg" alt="dialog" className="dialog dialog-1" width="230" />
          <img src="/assets/images/dialog-2.svg" alt="dialog" className="dialog dialog-2" width="230" />

          <img src="/assets/images/circle.svg" alt="circle" className="shape shape-1" width="25" />
          <img src="/assets/images/circle.svg" alt="circle" className="shape shape-2" width="15" />
          <img src="/assets/images/circle.svg" alt="circle" className="shape shape-3" width="30" />
          <img src="/assets/images/ring.svg" alt="ring" className="shape shape-4" width="60" />
          <img src="/assets/images/ring.svg" alt="ring" className="shape shape-5" width="40" />
        </div>
      </section>

      <RestaurantSection />

      <ProductSection />
    </>
  );
};

export default Home;
