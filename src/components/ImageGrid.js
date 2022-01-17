import React, { useState, useEffect } from 'react'
import ImageCard from './ImageCard'

function ImageGrid({ term }) {

    const [cards,setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);    

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${term}&image_type=photo&pretty=true`)
        .then(response => response.json())
        .then(data => {
            setCards(data.hits);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [term])

    return (
        <div className="p-10 flex flex-wrap justify-center">

            {
                !isLoading && cards.length === 0 && <h1 className="text-3xl text-gray-400 justify-center items-center mt-5">No images Found ☹️</h1>
            }

            {   
                isLoading ? <h1>Loading........</h1> :  
                cards.map( card => (
                    <ImageCard
                        key={card.id} 
                        image={card}
                    />
                ))
            }
        </div>
    )
}

export default ImageGrid