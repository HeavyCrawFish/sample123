import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const Photo =({ img, alt }) => {
    return(
        <div className="col s12 m3">
            <img className="responsive-img materialboxed" src={img} alt={alt} />
        </div>
    );
}



class PhotoGallery extends Component {

    state={
        photo: [
            {
                id: 1,
                img: "p1.jpg",
                alt: "l"
            },
            {
                id: 2,
                img: "p2.jpg",
                alt: "m"
            },
            {
                id: 3,
                img: "p3.jpg",
                alt: "n"
            },
            {
                id: 4,
                img: "p4.jpg",
                alt: "o"
            },
            {
                id: 5,
                img: "p5.jpg",
                alt: "p"
            },
            {
                id: 6,
                img: "p6.jpg",
                alt: "q"
            }

        ]
    }


    render() {
        return(
            <div className="row">
                {this.state.photo.map(gal => {
                    <Photo key={gal.id} img={gal.img} alt = {gal.alt} />
                })}
            </div>
        );
    }
}

export default class Gallery extends Component {
    render() {
        return (
            <section id="gallery" className="section section-gallery scrollspy">
                <div className="container">
                    <h4 className="center">
                        <span className="red-text text-darken-1">Photo</span>Gallery
                    </h4>
                    <PhotoGallery />
                </div>
            </section>
        )
    }
}
