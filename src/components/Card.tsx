import Image from 'next/image';
import React from 'react'
import '../app/style/card.css';
interface propsType{
    title:string;
    desc:string;
    img:string;
    tags:string[];
}
const card:React.FC<propsType> = ({title,desc,img,tags}) => {
  return (
    <div className='border border-accent w[300px] sm:w-[350px] data-aos="zoom-in-up"'>
        <div>
         <Image className='w[300px] sm:w-[350px] h-auto'
         src={img}
         width={350}
         height={350}
         alt={title}
         />
        </div>
      <div className='card-container'>
        <div className='card-title'>{title}</div>
        <div>{desc}</div>
        <div>{tags.map((el)=>(
        <div className='card-tags' key={el}>
            {el}
        </div>
        ))}</div>
      </div>
    </div>
  )
}

export default card
