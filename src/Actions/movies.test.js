/* We want to test that the returned object is what we expect
 * based on the input parameters
*/
import * as actions from './';

describe('actions', () => {
  it('shoud have a type of ADD_MOVIES', () => {
    //setup 
    const movieInfo = [
        {
            "vote_count": 1554,
            "id": 335983,
            "video": false,
            "vote_average": 6.6,
            "title": "Venom",
            "popularity": 389.622,
            "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
            "original_language": "en",
            "original_title": "Venom",
            "genre_ids": [
                878,
                28,
                80,
                28,
                27
            ],
            "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
            "adult": false,
            "overview": "When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego \"Venom\" to save his life.",
            "release_date": "2018-10-03"
        }
    ];

    //Execution
    const result = actions.addMovies(movieInfo);
    const expectedResults = {"movies":[{
            "vote_count": 1554,
            "id": 335983,
            "video": false,
            "vote_average": 6.6,
            "title": "Venom",
            "popularity": 389.622,
            "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
            "original_language": "en",
            "original_title": "Venom",
            "genre_ids": [
                878,
                28,
                80,
                28,
                27
            ],
            "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
            "adult": false,
            "overview": "When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego \"Venom\" to save his life.",
            "release_date": "2018-10-03"
        }], type:'ADD_MOVIES' } 

    //Expectation
    expect(result).toEqual(expectedResults);


  });

});
