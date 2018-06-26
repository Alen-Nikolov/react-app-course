import React, {Component} from 'react';
import './LoginForm.css';
import Movie from '../components/Movie';


class Movies extends Component {

  films = [
    {
      name: 'movie1',
      freespaces: 3
    },
    {
      name: 'movie2',
      freespaces:12
    },
    {
      name: 'movie3',
      freespaces: 2
    },
    {
      name: 'movie4',
      freespaces: 53
    }

  ];

  constructor() {
    super();
    this.reserve = this.reserve.bind(this);
  }

  reserve(key) {
    let currentFilm = this.films.find((film)=> {
      return film.name === key;
    });
    if(currentFilm.freespaces!==0) {
      currentFilm.freespaces--;
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="movies">
        {this.films.map((film) => {
          return <Movie key={film.name} movie={film.name} spaces={film.freespaces} reserve={this.reserve} />
        })
        }
      </div>
    );
  }

}



export default Movies;
