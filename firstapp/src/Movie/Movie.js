import * as React from 'react';
import './style.css';

function Movie(){
    return(
    <div className="container">
        <div className="movie-card">
            <img src="https://pbs.twimg.com/media/DZH-Z6VX0AEiFsv.jpg" />
            <label>500.0k</label> <label className="lab">Rangasthalam</label>
            <div className="book">Book Tickets</div>
        </div>
        <div className="movie-card-one">
            <img src="https://www.telugu360.com/wp-content/uploads/2018/10/Aravinda-Sametha-4days-collections.jpg" />
            <label>400.0k</label> <label className="lab1">AravindaSametha</label>
            <div className="book1">Book Tickets</div>
        </div>
        <div className="movie-card-two">
            <img src="https://resizing.flixster.com/5n_1qGRxy02ghTUtXhqEQl_NFno=/206x305/v1.bTsxMzA3NDMzNjtwOzE4MTk2OzEyMDA7MzM5OzQ4Mg" />
            <label>350.0k</label> <label className="lab">Maharshi</label>
            <div className="book2">Book Tickets</div>
        </div>
        <div className="top-one">
        <div className="movie-card1">
            <img src="https://pbs.twimg.com/media/DZH-Z6VX0AEiFsv.jpg" />
            <label>500.0k</label> <label className="lab">Rangasthalam</label>
            <div className="book">Book Tickets</div>
        </div>
        </div>
    </div>  
    );
}
export default Movie;