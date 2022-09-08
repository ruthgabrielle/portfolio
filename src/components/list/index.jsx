import "./index.css";
import Product from "../product";
import Github from "../../assets/img/GitHub.jpg";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          Some examples that I've made :) <br /> You can click on the image to
          see more.
        </p>
      </div>
      <div className="pl-list">
        <Product img={Github} link={"https://github.com/ruthgabrielle"} />
      </div>
    </div>
  );
};

export default ProductList;
