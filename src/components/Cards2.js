let img2 ='https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg'
export default function Cards2(){
    return(
        <div className='card card_dark'>
      <img src ={img2} alt =''/>
      <div className='card-content'>
        <h2 className='card_title'>Tokyo</h2>
        <p className='card_description'>
        Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, 
        from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for
         its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.
          The city's many museums offer exhibits
         ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum). 
        </p>
        
      </div>
    </div>
    )
}