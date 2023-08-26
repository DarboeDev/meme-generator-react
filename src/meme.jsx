import { useState, useEffect } from 'react'
import React from 'react'



function Meme(){
    const [ allMemes, setAllMemes] = useState([])
    const [formData, setFormData] = useState(({
            topText: '',
            bottomText: '',
            randomImage:  "https://i.imgflip.com/1g8my4.jpg"
    }))

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(dataMeme => setAllMemes(dataMeme.data.memes))
    }, [])

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevData =>({
             ...prevData,
             [name]: value
        }))
    }
    function getMemeImage() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const randomImageUrl = memesArray[randomNumber].url
        setFormData( prevState=>{
            return{
                ...prevState,
                randomImage: randomImageUrl
            }
        })
      }
     
    
    return(
        <main>
            <div className="form">
                <div className="input-section">
                    <input type="text"
                    placeholder="Top text"
                    name='topText'
                    value={formData.topText}
                    onChange={handleChange}
                    />
                    <input type="text"
                    placeholder="Bottom text"
                    name='bottomText'
                    value={formData.bottomText}
                    onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage} className="btn" >Get a new meme image <img src="../images/picture.png" alt="" /></button>
            </div>
            <div className="meme">
            <img className='image' src={formData.randomImage} />
            <h2 className="meme--text top">{formData.topText}</h2>
            <h2 className="meme--text bottom">{formData.bottomText}</h2>
            </div>
        </main>
    )
}
export default Meme