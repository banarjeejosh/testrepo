import InvestmentCard from "../cards/InvestmentCard";
import HomevestStatistic from "./HomevestStatistic";

const ApplicationBody = () => {
  return (
    <section className="investment__amount section__space__top bg__img">
      <div className="container">
        <div className="investment__amount__area">
          {/* invest cart here */}
          <InvestmentCard />
        </div>

        {/* Homevest Statistic */}
        <HomevestStatistic />
      </div>
    </section>
  );
};

export default ApplicationBody;
