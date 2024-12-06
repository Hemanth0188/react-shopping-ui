


import React from 'react'

const Womencollections = (props) => {

    const {title,image6,image7,image8,image9,image10} = props.ladiesFashion
     
  return (
    <div>
      <div className="femalecollectionSection">
        
            <h2>{title}</h2>

            <div className="ladiesIamges">
                <img src={image6} alt= {title}/>
                <img src={image7} alt= {title}/>
                <img src={image8} alt= {title}/>
                <img src={image9} alt= {title}/>
                <img src={image10} alt= {title}/>
            </div>
        </div>
    </div>
  )
}

export default Womencollections
