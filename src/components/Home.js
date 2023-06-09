import React from 'react'


function Home(props) {
    return (
        <div>

            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="iphone.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Add To Cart</button>

                    <button className='remove-btn'
                        onClick={
                            () => { props.removeToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Remove To Cart</button>

                </div>
          </div>
            
          <div className="cart-wrapper" style={{marginTop: '20px'}}>
                <div className="img-wrapper item">
                    <img src="camera.webp" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Camera
                    </span>
                    <span>
                        Price: $5000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Add To Cart</button>

                    <button className='remove-btn'
                        onClick={
                            () => { props.removeToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Remove To Cart</button>

                </div>
          </div>
          <div className="cart-wrapper" style={{marginTop: '20px'}}>
                <div className="img-wrapper item">
                    <img src="jwel.webp" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Ring
                    </span>
                    <span>
                        Price: $10000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Add To Cart</button>

                    <button className='remove-btn'
                        onClick={
                            () => { props.removeToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Remove To Cart</button>

                </div>
          </div>
        </div>
    )
}
export default Home
