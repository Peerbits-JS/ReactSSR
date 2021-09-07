import React from 'react'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div>
            <div className="bg-green-100 min-h-screen p-12">
                <div className="container mx-auto">
                <Link to="/">Home</Link>
        <hr />
                    <h2 className="text-5xl flex justify-center cursive">Blog Posts</h2>
                    <h3 className="text-lg text-gray-600 flex justify-center mb-12">
                        Welcome to my About posts page!
        </h3>
                </div>
            </div>
            
        </div>
    );

}
export default About;