let img4 ='https://media.cntraveler.com/photos/611fc0aced1e8a109123ec48/master/w_3000,h_2001,c_limit/Broadway,-New-York_GettyImages-588653038.jpg'
export default function Cards2(){
    return(
        <div className='card card_dark'>
      <img src ={img4} alt =''/>
      <div classNam4='card-content'>
        <h2 className='card_title'>New York</h2>
        <p className='card_description'>
        New York City comprises 5 boroughs sitting where the Hudson River 
        meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, 
        financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.
         Broadway theater is staged in neon-lit Times Square. 
        </p>
        
      </div>
    </div>
    )
}