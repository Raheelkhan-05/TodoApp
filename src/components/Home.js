import Data from './LaptopData.json';
export default function Home (props){
    const addToCart = (index)=>{
        let curProduct = Data[index];
        alert(curProduct.title+" has been added to Cart.");
        props.purchaseItem(curProduct);
    }
    return(
        <>
            <div className='container'>
            <div className='row'>
            {Data.map((d, i)=>{
                return(
                <>
                    <div className='col-3 text-center mt-5 p-4' style={{borderRadius:"10px", boxShadow:"0px -5px 10px gray", backgroundColor:"white", margin:"0px 50px"}}>
                    <img src={d.url} alt='productImage' className='mb-2' style= {{height:"250px",width:"250px"}}/> <br/>
                    <b>{d.title}</b>
                    <br/> Rs.{d.price}/-
                    <br/><button className='btn btn-warning container-sm' onClick={()=>addToCart(i)}>Add To Cart</button>
                    </div>
                </>
                )
            })}
            </div>
            </div>
        </>
    )
}
