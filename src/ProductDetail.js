import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams(); // get params
    const navigate = useNavigate();
    /* 
        Get all products and  filter product based on id
    */

    const goBack = () => {
        navigate("/products");
    }

    return (<>
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" alt="..." />

            <div className="card-header">
                Product id is {id}
            </div>

            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <p></p>
                <button className="btn btn-primary" onClick={goBack}>Go Back</button>
            </div>
        </div>
    </>);
}

export default ProductDetail;