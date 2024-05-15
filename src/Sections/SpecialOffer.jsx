import Button from "../Component/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
 <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
  <div className="flex-1">
    <img src={offer} alt={733} height={687} 
    className="object-contain w-full" />
  </div>

  <div className="flex flex-1 flex-col ">

    
<h2 className=" font-palanquin text-4xl  capitalize font-bold lg:max-w-lg">

  <span className="text-coral-red "> Special </span> 
   Offer 
</h2>
<p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima unde magnam magni recusandae sequi cum, quae quos molestiae ratione hic quisquam rerum dolorum officia iure saepe facere, ad voluptatem accusamus!</p>
<p className="mt-6 lg:max-w-lg info-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo nostrum eum, consectetur eligendi laboriosam repellat accusantium doloremque cum animi aspernatur nesciunt omnis. Numquam officia perferendis voluptatum dignissimos dicta sapiente!</p>
<div className="mt-11 flex flex-row gap-4 w-[400px]">
 <Button label="Shop Now" iconURL={arrowRight}  />

 <Button label="Learn More "
 backgoundColor ="bg-white"
 borderColor ="border-slate-gray" 
 textColor="text-sm " />

</div>
</div>
 </section>
  )
}

export default SpecialOffer