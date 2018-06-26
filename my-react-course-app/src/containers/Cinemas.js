import React, { Component } from 'react';
import './LoginForm.css';
import Cinema from '../components/Cinema';
import './Cinemas.css';

class LoginForm extends Component {
  cinemas = [{
    picture: 'http://4.bp.blogspot.com/-SaPmhqFCjcc/VYWDx3I2VII/AAAAAAAABv0/jo4bxGJXhpg/s1600/GSC_Photo9.jpg',
    address: 'sofia',
    workTime: '9-5',
    program: ''
  },
    {
      picture: 'http://themall.bg/en/wp-content/themes/the-mall/img/background_cinema.jpg',
      address: 'Sofia 2',
      workTime: '3-4',
      program: ''
    },
    {
      picture: 'https://s3-eu-west-1.amazonaws.com/assets.odeoncinemasgroup.com/live/media/filer_public_thumbnails/filer_public/6f/f4/6ff40d41-fa6c-4c55-87d4-053b19762688/re-sized_image_4.jpg__630x300_q85_subsampling-2.jpg',
      address: 'Sofia 3',
      workTime: '8-12',
      program: ''
    },];

  render() {
    return (
      <div className="cinemas">
        {this.cinemas.map((cinema)=> {
          return <Cinema key={cinema.address} picture={cinema.picture} address={cinema.address} work={cinema.workTime} program={cinema.program}/>
        })
        }
      </div>
    );
  }
}

export default LoginForm;
