import Button from "../Component/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"


const SuperQuality = () => {
  return (
   <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

    <div className="flex flex-1 flex-col ">

    
  <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
  We Provide You
    <span className="text-coral-red "> Super</span> 
    <span className="text-coral-red "> Quality </span> 
     Shoes 
  </h2>
<p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima unde magnam magni recusandae sequi cum, quae quos molestiae ratione hic quisquam rerum dolorum officia iure saepe facere, ad voluptatem accusamus!</p>
<p className="mt-6 lg:max-w-lg info-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo nostrum eum, consectetur eligendi laboriosam repellat accusantium doloremque cum animi aspernatur nesciunt omnis. Numquam officia perferendis voluptatum dignissimos dicta sapiente!</p>

<div className="mt-11 w-[200px]">
   <Button label="Shop Now "  
   iconURL={arrowRight} />
   
</div>
 
    </div>

    <div className="flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe8" 
      height={522}
      width={570}  
      />
      </div>
   </section>
  )
}

export default SuperQuality