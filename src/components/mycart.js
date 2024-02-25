import { useEffect, useState } from "react";
export default function MyCart(props){
    let items = props.purchaseItem;
    const [amount,setAmount] = useState(0);
    useEffect(() => {
        let sum=0,i;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].price;
        }
        setAmount(sum);
    },[items]);
    const del = (i) => {
        props.deleteItem(i);
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-7">
                    {items.map((d,i) => {
                        return(
                            <>
                            <div className="card mt-3 ">
                                <img src={d.url} className="card-img-top m-auto" alt="Image" style={{height:"300px", width:"300px"}}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center">{d.title}</h5>
                                    <h5 className="card-title text-center">Price : {d.price}/-</h5>
                                    <button className="btn btn-danger" onClick={() => del(i)}>Delete</button>
                                    <p className="card-text text-justify mt-4">{d.description}</p>
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
                <div className="col-5 mt-5 ps-5">
                    <h1 style={{letterSpacing:"5px", fontVariant:"small-caps", marginLeft:"20px"}}>Your Order :-</h1>
                    <table className="table table-dark text-center">
                        <thead>
                            <tr><th>Product</th><th>SubTotal</th></tr>
                        </thead>
                        <tbody>
                            {items.map((d) => (
                                <tr><td>{d.title}</td><td>Rs.{d.price}/-</td></tr>
                            ))}
                            <tr><td><h4>Total</h4></td><td><h4>Rs.{amount}/-</h4></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}