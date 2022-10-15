let img3='https://blog-www.pods.com/wp-content/uploads/2021/03/resized_FI_Getty_San-Francisco-CA-1.jpg'

export default function Cards(){
    return(
        <div className='card'>
      <img src ={img3} alt =''/>
      <div className='card-content'>
        <h2 className='card_title'>San Francisco</h2>
        <p className='card_description'>San Francisco, officially the 
        City and County of San Francisco, is the commercial, financial, and cultural center of Northern California.
         The city proper is the fourth most populous in California
         and 17th most populous in the United States, with 815,201 residents as of 2021.</p>
        
      </div>
    </div>
    )
}