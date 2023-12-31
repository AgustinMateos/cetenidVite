import React from 'react'

const ModalCard = ({ id , img  }) => {
return (
    <div id= {`slide${ id }`} className="carousel-item relative w-full">
        <img src={ img } className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={ `#slide${ id - 1 }` } className="btn btn-circle">❮</a>
            <a href={`#slide${ id + 1 }`} className="btn btn-circle">❯</a>
        </div>
    </div>
)
}

export default ModalCard