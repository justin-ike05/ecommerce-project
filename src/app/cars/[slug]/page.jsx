
import { carData } from "@/app/components/data";


const CarPage = ({ params }) => {
    const { slug } = params; 
    const car = carData.find((car) => car.slug === slug); 
  
    if (!car) {
      return <div>Car not found</div>;
    }
  
    return (
      <div className="container py-10 bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">{car.model}</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={car.image} alt={car.model} className="rounded-lg w-full h-auto object-cover" />
          </div>
          <div className="md:ml-8 mt-6 md:mt-0">
            <h2 className="text-xl font-semibold">Price: ${car.price}</h2>
            <p className="text-lg mt-4">{car.description}</p>
            <button className="mt-6 bg-orange-400 text-white py-2 px-6 rounded-md hover:bg-orange-500 transition duration-200">
              Order Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CarPage;