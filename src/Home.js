// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//         <h1 className='home'>You are Successfully Login!...</h1> 
//     </div>
//   )
// }

// export default Home

import React from 'react';
import stat1 from './Images/stat1.jpeg'
import stat2 from './Images/stat2.jpeg'
import stat3 from './Images/stat3.jpeg'
import stat4 from './Images/stat4.jpeg'
import stat5 from './Images/stat5.jpeg'
import stat6 from './Images/stat6.jpeg'
import food1 from './Images/food1.jpeg'
import food2 from './Images/food2.jpeg'
import food3 from './Images/food3.jpeg'
import food4 from './Images/food4.jpeg'
import food5 from './Images/food5.jpeg'
import food6 from './Images/food6.jpeg'
import des1 from './Images/des1.jpeg'
import des2 from './Images/des2.jpeg'
import des3 from './Images/des3.jpeg'
import des4 from './Images/des4.jpeg'
import des5 from './Images/des5.jpeg'
import des6 from './Images/des6.jpeg'

const Home = () => {
  return (
    <div>
      <div className="main_text">
        <h1>XYZ RESTAURANT FOOD MENU</h1>
      </div>

      <nav>
        <a className="nav1" href="/">Logout</a>
        <a className="nav1" href="#dish3">Deserts</a>
        <a className="nav1" href="#dish2">Main course</a>
        <a className="nav1" href="#dish1">Starters</a>
      </nav>

      <section id="dish1">
        <h2 className="stat">Starters</h2>
        <div className="recipe1">
            <img src={stat1} alt="Chicken Kebas" width="290" height="200" />
            <div className="food">Chicken Kebas</div>
        </div>
        <div className="recipe1">
            <img src={stat2} alt="Chicken 65" width="290" height="200" />
            <div className="food">Chicken 65</div>
        </div>
        <div className="recipe1">
            <img src={stat3} alt="Chilli Chicken" width="290" height="200" />
            <div className="food">Chilli Chicken</div>
        </div>
        <div className="recipe1">
            <img src={stat4} alt="Chicken Lollipop" width="290" height="200" />
            <div className="food">Chicken Lollipop</div>
        </div>
        <div className="recipe1">
            <img src={stat5} alt="Prawns" width="290" height="200" />
            <div className="food">Prawns</div>
        </div>
        <div className="recipe1">
            <img src={stat6} alt="Fish" width="290" height="200" />
            <div className="food">Fish</div>
        </div>
      </section>

      <section id="dish2">
        <h2 className="main">Main Course</h2>
        <div className="recipe2">
            <img src={food1} alt="Chicken Dum Biriyani" width="290" height="200" />
            <div className="food">Chicken Dum Biriyani</div>
        </div>
        <div className="recipe2">
            <img src={food2} alt="Special Biriyani" width="290" height="200" />
            <div className="food">Special Biriyani</div>
        </div>
        <div className="recipe2">
            <img src={food3} alt="Fry Biriyani" width="290" height="200" />
            <div className="food">Fry Biriyani</div>
        </div>
        <div className="recipe2">
            <img src={food4} alt="Pot Biriyani" width="290" height="200" />
            <div className="food">Pot Biriyani</div>
        </div>
        <div className="recipe2">
            <img src={food5} alt="Chicken Mandi" width="290" height="200" />
            <div className="food">Chicken Mandi</div>
        </div>
        <div className="recipe2">
            <img src={food6} alt="Veg-Thali" width="290" height="200" />
            <div className="food">Veg-Thali</div>
        </div>
      </section>

      <section id="dish3">
        <h2 className="des">Deserts</h2>
        <div className="recipe3">
            <img src={des1} alt="Icecream Sandwich" width="290" height="200" />
          <div className="food">Icecream Sandwich</div>
        </div>
        <div className="recipe3">
            <img src={des2} alt="Chocolate Icecream" width="290" height="200" />
          <div className="food">Chocolate Icecream</div>
        </div>
        <div className="recipe3">
            <img src={des3} alt="Pumpkin Icecream Roll" width="290" height="200" />
          <div className="food">Pumpkin Icecream Roll</div>
        </div>
        <div className="recipe3">
            <img src={des4} alt="Blueberry Cheesecake" width="290" height="200" />
          <div className="food">Blueberry Cheesecake</div>
        </div>
        <div className="recipe3">
            <img src={des5} alt="Oatmeal Cookies" width="290" height="200" />
          <div className="food">Oatmeal Cookies</div>
        </div>
        <div className="recipe3">
            <img src={des6} alt="Mocktails & Fruitjuices" width="290" height="200" />
          <div className="food">Mocktails & Fruitjuices</div>
        </div>
      </section>
    </div>
  );
};

export default Home;