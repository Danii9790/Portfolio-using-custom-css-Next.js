import React from 'react'
import '../app/style/skills.css';

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        <div data-aos="zoom-in-up" className='skills-left'>
            <h2 className='skills-heading'>Technolgies I work with</h2>
            <p className='skills-text'>I have a solid foundation in front-end technologies like HTML, CSS, and JavaScript, along with expertise in TypeScript for stronger, scalable applications. My skill set extends to modern frameworks, including React and Next.js, allowing me to build dynamic, efficient web apps. Additionally, I’m experienced with Node.js for backend development, enabling me to create seamless full-stack solutions.</p>
        </div>
        {/* Second column:skills */}
        <div className='skills-right'>
            <div className='skills-icons-grid'>
                <div className='skills-space'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                <div className='skills-space'>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
