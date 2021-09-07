import React from 'react'
import { Link, withRouter } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className="bg-green-100 min-h-screen p-12">
                <div className="container mx-auto" >
                    <Link style={{marginRight:'30px'}} to="/blogs">Blogs</Link>
                    <Link style={{marginRight:'30px'}} to="/about">About</Link>
                    <Link style={{marginRight:'30px'}} to="/contact">Contact</Link>
                    <Link style={{marginRight:'30px'}} to="/NoMeta">No Meta</Link>
                    <hr/>
                    <h2 className="text-5xl flex justify-center cursive">Blog Posts</h2>
                    <h3 className="text-lg text-gray-600 flex justify-center mb-12">
                        Welcome to my blog posts page!
        </h3>
                </div>
            </div>
            
        </div>
    );

}
export default withRouter(Home);