import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "src/components/button";

const Hero = styled.div`
  margin-top: 167px;
  text-align: center;
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Newsreader;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -1.28px;
  padding-bottom: 48px;
  span {
    color: #000;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Newsreader;
    font-size: 64px;
    font-style: italic;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -1.28px;
  }
`;

const Products = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 156px 0 156px 96px;
  margin: auto;
  width: min-content;

  .mix {
    img {
      margin-bottom: 16px;
    }
  }
`;

const OurValues = styled.div`
  display: grid;
  grid-template-columns: 181px 822px;
  grid-template-rows: auto;
  row-gap: 32px;
  padding: 0 96px;
  max-width: 1440px;
  margin: auto;
  h2 {
    color: #000;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 22.4px */
    letter-spacing: 0.56px;
    text-transform: uppercase;
  }
`;

const Home = () => {
  return (
    <>
      <Hero id="hero">
        <Title>
          We’re <span>farmers, purveyors</span>, and <span>eaters</span> of
          <br />
          organically grown food.
        </Title>
        <Link to="/produce">
          <Button>Browse our shop</Button>
        </Link>
      </Hero>

      <Products className="products">
        <img src="public/albaca.png" alt="albaca" />
        <div className="mix">
          <img src="public/mix.png" alt="mix" />
          <p>
            <strong>Central California</strong> — The person who grew these was
            located in Central California and, er, hopefully very
            well-compensated.
          </p>
        </div>
      </Products>

      <OurValues id="our-values">
        <h2>WHAT WE BELIEVE</h2>
        <p>
          We believe in produce. Tasty produce. Produce like: <br />
          <br />
          Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas.
          Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants.
          Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli.
          Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries.
          Raspberries. Cilantro. Parsley. Dill. <br />
          <br />
          What are we forgetting? <br />
          <br />
          Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
          Persian cucumbers, in addition to aforementioned “normal” cucumbers.
          Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call
          pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit.
          Fruit of the Loom. Fruits of our labor (this website). Sorrel.
          Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom
          tomatoes. Beets. Chives. Corn. EnOurValuese. Escarole, which, we
          swear, we’re vendors of organic produce, but if you asked us to
          describe what escaroles are...
        </p>
        <h2>WHAT WE BELIEVE</h2>
        <p>
          We believe in produce. Tasty produce. Produce like: <br />
          <br />
          Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas.
          Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants.
          Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli.
          Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries.
          Raspberries. Cilantro. Parsley. Dill. <br />
          <br />
          What are we forgetting? <br />
          <br />
          Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
          Persian cucumbers, in addition to aforementioned “normal” cucumbers.
          Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call
          pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit.
          Fruit of the Loom. Fruits of our labor (this website). Sorrel.
          Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom
          tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear,
          we’re vendors of organic produce, but if you asked us to describe what
          escaroles are...
        </p>
      </OurValues>
    </>
  );
};

export { Home };
