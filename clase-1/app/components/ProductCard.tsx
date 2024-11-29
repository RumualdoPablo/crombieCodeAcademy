interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}


export default function ProductCard({ image, title, price,}: ProductCardProps) {
    return(
        <div className='card rounded-[50px] bg-[#bfbfbf] p-12 w-[330px] h-[460px] m-10 '>
            <img src={image} alt={title} className='card-image w-[230px] h-[280px] object-fit object-center rounded-[25px] p-2'/>
            <div >
                <h2 className="title mt-[5px]">{title}</h2>
                <div  className="price mt-[15px]"><span>${price}</span></div>
            </div>
        </div>
    )
}