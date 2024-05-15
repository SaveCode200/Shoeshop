// Manual way of import

// import Hero from  "./Sections/Hero"
// import PopularProducts from  "./Sections/PopularProducts"
// import SuperQuality from  "./Sections/SuperQuality"
// import Services from  "./Sections/Services"
// import SpecialOffers from  "./Sections/SpecialOffers"
// import CustomerReviews from  "./Sections/CustomerReviews"
// import Subscribe from  "./Sections/Subscribe"
// import Footer from "./Sections/Footer"

// Above is the first way it can be done below is  another way 

import {
  Hero,
CustomerReviews,
PopularProducts,
Service,
SpecialOffer,
SuperQuality,
Subscribe,
Footer,
} from "./Sections"

import Nav from "./Component/Nav"


const App = () => {
  
return (
   
<main className="relative">
  <Nav />

  <section className="xl:padding-l wide:padding-r padding-b">

 <Hero />

  </section>

  <section className="padding">
 <PopularProducts />
  </section>

  <section className="padding">
 <SuperQuality />
  </section>

  <section className="padding-x py-10">
<Service />
  </section>

  
  <section className="padding">
 <SpecialOffer />
  </section>

  <section className="bg-pale-blue padding">
<CustomerReviews />
  </section>

  <section className="padding-x sm:py-32 py-16 w-full">
 
<Subscribe />
  </section>

  <section className="bg-black padding-x padding-t pb-8 text-white">
<Footer />
  </section> 


</main>
)
}

export default App
