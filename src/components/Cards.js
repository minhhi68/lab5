
let img1='https://www.damodarcollege.edu.in/web/wp-content/uploads/2021/08/Coursera-Certificate.jpg'

export default function Cards(){
    return(
        <div className='card'>
      <img src ={img1} alt =''/>
      <div className='card-content'>
        <h2 className='card_title'>Student's Certifications</h2>
        <p className='card_description'>Coursera</p>
        <p>The certifications might not have the best recognition, but the skills you gain can be of enormous advantage to your career—even recruiters will agree with that much. 
          If you're not sure how good Coursera courses are, here are some free Coursera courses you can try out. Many FPT University Students earned 
          their Coursera certifications and found good paid jobs after graduation. Students who study in FPT University have more than 5 certifications throughout 9 semesters.</p>
        
      </div>
    </div>
    )
}