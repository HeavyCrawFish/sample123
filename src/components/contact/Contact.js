import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel red white-text center">
                <i className=" large material-icons">email</i>
                <h5>Where we At</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h5>Main Office</h5>
                </li>
                <li className="collection-item">
                  <i class="fas fa-map-marker-alt"></i> 123B secon
                  floor,Odisha,India
                </li>
                <li className="collection-item">
                  <i class="fas fa-phone"> 123-456-7890</i>
                </li>
                <li className="collection-item">
                  <i class="fas fa-envelope"></i> nigga@gmail.com
                </li>
              </ul>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Please fill out the form</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label for="name" className="red-text">
                      Name
                    </label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="email" className="validate" />
                    <label for="email" className="red-text">
                      E-mail
                    </label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" className="validate" />
                    <label for="phone" className="red-text">
                      Phone No.
                    </label>
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      id="message"
                      className="materialize-textarea"
                      data-length="120"
                    />
                    <label for="message" className="red-text">
                      Message
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="submit"
                    className="btn red waves-effect waves-light"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
