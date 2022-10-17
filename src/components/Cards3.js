let img3='https://www.pharmacyquality.com/wp-content/uploads/2020/12/achievements.jpg'

export default function Cards(){
    return(
        <div className='card'>
      <img src ={img3} alt =''/>
      <div className='card-content'>
        <h2 className='card_title'>Student's Achievements</h2>
        <p>Your experiences tell us who you are</p>
        <p className='card_description'>Been working as a good student and excellent Achievements for the last 12 years. I am so thrilled to introduce
        myself as an energetic and passionate student who is not afraid of anything and dare to confront the challenges. Some of the Achievements like 
        IELTS, SAT are just one of the examples of what I have done in my whole life up to date. I believe consistence and durability is the way 
        to express who I am and I am proud about it. 
        </p>
        
      </div>
    </div>
    )
}