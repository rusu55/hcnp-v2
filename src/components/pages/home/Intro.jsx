import React from 'react'

const Intro = ({data}) => {
  const {paragraphs, heading} = data  
  return (
    <section className='intro'>
        <div className="container">
            <div className="row">
                <div className="col-12">                  
                    <h2 className='intro__heading'>{heading}</h2>
                    {paragraphs ? 
                        paragraphs.map((description, index) =>(
                            <p key ={index} className='paragraph'>{description}</p> 
                        ))
                    : ''}                                                           
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intro