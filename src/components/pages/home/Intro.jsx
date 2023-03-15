import React from 'react'

const Intro = ({data}) => {
  
  return (
    <section className='intro'>
        <div className="container">
            <div className="row">
                <div className="col-12">                  
                    <h2 className='intro__heading'>{data.heading}</h2>
                    <p className='paragraph'>{data.paragraph}</p>                          
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intro