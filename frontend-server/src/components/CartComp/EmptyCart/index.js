import "./_empty-cart.scss";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="p-4 ec-main-div">
      <span className="my-5 ec-text">The Cart is Empty</span>
      <hr />
      <Link to="/">
        <div className="btn btn-warning my-3">
          <span>Continue shopping</span>
        </div>
      </Link>
      
    </div>
  )
}

export default EmptyCart;