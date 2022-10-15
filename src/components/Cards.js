
let img1='https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-gallery-with-text/london_skyline_vb34141644.jpg'

export default function Cards(){
    return(
        <div className='card'>
      <img src ={img1} alt =''/>
      <div className='card-content'>
        <h2 className='card_title'>London</h2>
        <p className='card_description'>London, the capital of England and the United Kingdom,
         is a 21st-century city with history stretching back to Roman times. At its centre stand the
          imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. 
          Across the Thames River, 
        the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city. </p>
        
      </div>
    </div>
    )
}