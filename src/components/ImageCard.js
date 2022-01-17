import React from 'react'

function ImageCard({ image }) {

    const numFormat = (num) => {
        if(num > 999 && num < 1000000){
            return (num/1000).toFixed(0) + 'K';
        }else if(num >= 1000000){
            return (num/1000000).toFixed(0) + 'M';
        }else if(num < 1000){
            return num;
        }
    }

    const tags = image.tags.split(',');

    return (
        <div className="w-64 rounded overflow-hidden shadow-lg flex-initial shadow-green-500/50 m-5">
            <img className="w-full h-48" src={image.webformatURL} alt="img" />
            <div className="px-5 py-4 flex flex-row">
                <p className="text-sm mr-2 font-mono font-medium">👁️‍🗨️{numFormat(image.views)}</p> {/* Views */}
                <p className="text-sm mr-2 font-mono font-medium">👍{numFormat(image.likes)}</p>  {/* Likes */}
                <p className="text-sm mr-2 font-mono font-medium">⬇️{numFormat(image.downloads)}</p>  {/* Downloads */}
                <p className="text-sm  font-mono font-medium">💬{numFormat(image.comments)}</p>  {/* Comments */}
            </div>
            <div className="px-6 pb-4">
                {
                    tags.map( (tag,index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 "># {tag}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageCard