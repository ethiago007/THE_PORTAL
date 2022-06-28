export default  class BlogService {  
    static getPhotos() {
      return fetch(`https://saurav.tech/NewsAPI/everything/cnn.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getBbc() {
      return fetch(`https://saurav.tech/NewsAPI/everything/bbc-news.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getGbNews() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/general/gb.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getUsNews() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/general/us.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getFrNews() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/general/au.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getUsBusiness() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getGbBusiness() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/gb.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getFrBusiness() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/au.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getUsSport() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/sports/us.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getGbSport() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/sports/gb.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getFrSport() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/sports/au.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getUsHealth() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/us.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getGbHealth() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/gb.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getFrHealth() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/au.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getUsTech() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getGbTech() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/technology/gb.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getFrTech() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/technology/au.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getUsEnt() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/entertainment/us.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getGbEnt() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/technology/gb.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getFrEnt() {
      return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/technology/au.json`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getDate1() {
      return fetch(`https://api.ipgeolocation.io/timezone?apiKey=${process.env.API_KEY2}&tz=Africa/Lagos`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getMars() {
      return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_KEY}`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getAPhoto() {
      return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${process.env.API_KEY}`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static pictureDay() {
      return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
    static getWeateher() {
      return fetch(`https://api.maas2.apollorion.com`)
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .catch(function(error) {
          return error;
        })
    }
   
  }
  