import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bg1 from '../assets/bg1.png';
import hero1 from '../assets/hero3.png';
import about from '../assets/about.png';
import comit from '../assets/comiy.png';
import test from '../assets/logo.png'
import products from '../data/products';
import reviews from '../data/reviews'
import { LucideScissors, Ruler } from 'lucide-react';

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "500+", label: "Clergy Served" },
  { value: "100%", label: "Handcrafted" },
];

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="relative md:bg-cover md:bg-center md:py-80 py-80 px-5 min-h-screen"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="grid md:grid-cols-2 text-center absolute inset-0 bg-black/40 px-5">
        <div className='flex flex-col items-center mx-auto max-w-md md:pt-45 pt-40 mb-6'>
            <h3 className='p-1.5 text-[#fbc647] border border-amber-500 rounded-full w-fit px-4 py-1 mb-6 bg-[#fbc54752] md:text-sm text-center'>HANDCRAFTED EXCELLENCE SINCE 1990</h3>
          <h1 className="md:text-4xl text-2xl font-bold mb-5 text-[#ffffff] text-center">
            VESTMENT CRAFTED <br /> WITH DEVOTION
          </h1>
          <p className="md:text-2xl text-xl text-[#ffffff] mb-5">
            For over three decades, we have been creating exquisite liturgical{""}
           
            vestments for clergy across denomination.<br /> Each piece{" "}
            meticulosly handcrafted with reverence, precision, and
            unwavering commitment to sacred tradition.
          </p>
          <div className='flex justify-center gap-10'>
                      <button
            className="bg-[#fbc647] text-black rounded-xl p-3"
          >
            VIEW COLLECTION →
          </button>

          <button
            className="bg-transparent border border-[#fbc647]  text-white rounded-xl p-3"
          >
            CUSTOM ORDERS
          </button>
        </div>
          </div>
  
<div className='flex md:justify-center h-full overflow-hidden md:pt-25 rounded-2xl'>
    <img src={ hero1 } alt="" className='md:w-[75%] w-full h-[90%] rounded-2xl'/>  
</div> 

        </div>
      </motion.div>

      <div>
      <section className="flex items-center md:px-10 px-5 py-10" id='about'
      style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #eddfc8 50%, #e8d4b8 100%)" }}
    >
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-16 justify-between">

          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h2 className="md:text-5xl text-3xl font-extrabold text-slate-900 mb-7 leading-tight tracking-tight">
              About Diocesans
            </h2>

            <div className="space-y-4 text-slate-700 text-[15px] leading-relaxed">
              <p>
                For over three decades,{" "}
                <strong className="text-slate-900">Diocesans Robe Makers</strong>{" "}
                has been the trusted name in liturgical vestment craftsmanship.
                Founded in 1990, we have dedicated ourselves to creating exquisite
                garments that honor the sacred traditions of the Church.
              </p>
              <p>
                Our workshop in Abuja, Nigeria, brings together master craftsmen
                who have honed their skills over generations. Each vestment is
                meticulously handcrafted using premium fabrics and materials
                sourced from around the world.
              </p>
              <p>
                We serve clergy across denominations throughout Nigeria and beyond,
                providing custom-tailored chasubles, stoles, albs, cassocks, and
                accessories. Our commitment to quality, attention to detail, and
                reverence for tradition has made us the preferred choice for
                dioceses, parishes, and individual clergy members.
              </p>
            </div>

            <div className="flex gap-12 mt-9">
              {stats.map(({ value, label }, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${0.4 + i * 0.15}s` }}
                >
                  <div className="md:text-4xl text-2xl font-extrabold text-amber-500 leading-none">
                    {value}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl w-full" style={{ height: "420px" }}>
              <img
                src={ about }
                alt="Craftsman working on vestments"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute bottom-0 left-0 translate-y-6 -translate-x-4 rounded-2xl p-5 shadow-lg max-w-xs"
              style={{ background: "linear-gradient(135deg, #f5a623 0%, #e8920f 100%)" }}
            >
              <p className="text-white font-semibold text-sm leading-relaxed">
                "Every vestment we create is a labor of love and devotion to the
                sacred ministry."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
      </div>

      <div className='bg-[#7b202e] px-5 py-10'>
        <section className='text-center'>
          <h1 className='text-4xl font-semibold text-white mb-3'>Our Commitment</h1>
          <p className='text-sm text-[#fef3bd]'>Every vestment we create is a testament to our dedication to<br/>quality, 
            tradition, and the sacred calling of those who wear them.</p>
        </section>

        <section className='grid md:grid-cols-3 gap-6 mt-5'>
           <div className='relative overflow-hidden rounded-2xl h-70'>
              <img src={comit} alt="" className='absolute object-cover w-full h-full' />

              <div className="relative flex flex-col justify-end p-6 h-full">
                <h3 className='text-2xl font-bold text-white'>Handcrafted Quality</h3>
                <p className='text-sm text-[#fef3bd] mt-3'>Every stitch made with precision and care by master craftsmen</p>
              </div>
            </div>

            <div className='rounded-2xl bg-white h-70 p-8'>
              <LucideScissors className='size-20 bg-[#fbc647] text-white fill-[#fbc647] p-5 justify-self-center rounded-full'/>
              <div className='text-center'>
                <h3 className='text-2xl text-black my-3'>Premium Materials</h3>
                <p className='text-sm text-[#4b5563]'>We source only the finest fabrics and materials from trusted suppliers worldwide, ensuring durability and elegance in every garment.</p>
              </div>
            </div>

            <div className='rounded-2xl bg-white h-70 p-8'>
              <Ruler className='size-20 bg-[#fbc647] text-white fill-[#fbc647] p-5 justify-self-center rounded-full'/>
              <div className='text-center'>
                <h3 className='text-2xl text-black my-3'>Custom Tailoring</h3>
                <p className='text-sm text-[#4b5563]'>Each vestment is tailored to your exact measurements and specifications, ensuring a perfect fit and personalized design that reflects your ministry.</p>
              </div>
            </div>
        </section>
      </div>

      <div className='px-5 py-10' 
      style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #eddfc8 50%, #e8d4b8 100%)" }}>
      <div className="md:flex gap-6">
  <section className="flex md:flex-col justify-between gap-6 mt-5 md:w-1/3 w-full">
    {products.slice(0, 2).map((product, index) => {
      return (
        <div
          key={index}
          className="relative flex flex-col p-3 overflow-hidden rounded-2xl bg-[#7b202e] md:h-auto h-full"
        >
          <h3 className="md:text-xl text-[16px] font-bold text-white">{product.title}</h3>
          <p className="md:text-sm text-[12px] text-[#fef3bd] my-2">{product.description}</p>
          <img
            src={product.image}
            alt=""
            className="overflow-hidden rounded-xl"
          />
        </div>
      );
    })}
  </section>

  <section className="grid md:grid-cols-3 gap-6 mt-5">
    {products.slice(2).map((product, index) => {
      return (
        <div
          key={index}
          className="relative flex flex-col p-3 h-full overflow-hidden rounded-2xl shadow-sm bg-white"
        >
          <img
            src={product.image}
            alt=""
            className="overflow-hidden rounded-xl"
          />
          <div>
          <h3 className="md:text-xl text-[16px] font-bold text-black mt-2">{product.title}</h3>
          <p className="md:text-sm text-[12px] text-[#4b5563]">{product.description}</p>            
          </div>


        </div>
      );
    })}
  </section>
      </div>
    <div className='mt-10'>
      <p className='p-1.5 text-[#fbc647] border border-amber-500 rounded-full px-4 py-1 mb-3 bg-[#fbc54752] md:w-fit md:text-sm md:text-start text-center'> CLIENT TESTIMONIAL</p>
      <h2 className='md:text-2xl text-xl font-semibold my-3'>
      Trusted by Clergy Across Denominations
      </h2>
      <div className="grid md:grid-cols-3 md:py-5 md:px-5 justify-between gap-10">
        {reviews.map((review, index) => {
          return (
          <article className="p-5 rounded-xl shadow-sm bg-white">
            <div className="flex items-center gap-2" key={index}>
              <img
                src={review.image}
                alt=""
                className="w-15 h-15 rounded-full object-cover mr-4"
              />
              <div>
                <h1>{review.name}</h1>
                <p className="text-sm text-gray-600">
                  {review.location}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {review.text}
            </p>
          </article>            
          )
        }
      )}


        </div>
    </div>      
      </div>

    </>
  );
}

export default Hero;
