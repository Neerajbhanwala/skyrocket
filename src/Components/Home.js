import React from 'react'
import Security from '../Security.jpg'
import Services from '../Components/Services'

function Home() {
  return (
    <React.Fragment>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Security} class="d-block w-100" alt="..." />
    </div>
  </div>
</div>
<br />
<Services />


    </React.Fragment>
  )
}

export default Home