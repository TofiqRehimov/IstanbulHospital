import React from 'react';
import img from '../img/indir.png';

const Article = () => {
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-12 mt-4'>
                    <div className="card articles " data-aos="fade-up" data-aos-duration="1000"
                        data-aos-anchor-placement="top-center">
                        <img src={img} className="" alt="Sunset Over the Sea" />
                        <div className="card-body">
                            <h4>Meqale basligi</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;