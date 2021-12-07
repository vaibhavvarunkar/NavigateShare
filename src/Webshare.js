import React from 'react'

const Webshare = () => {
    const shareData = {
        title: 'MDN',
        text: 'Learn web development on MDN!',
        url: 'https://www.facebook.com'
    }
    var result = ""
    const handleClick = async () => {
        try {
            await navigator.share(shareData)
            result = 'MDN shared successfully'
        } catch (err) {
            result = 'Error: ' + err
        }
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={() => handleClick()}>Click</button>
            <p>{result ? result : <></>}</p>
        </div>
    )
}

export default Webshare
