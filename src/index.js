import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import logo from '../asset/img/Logo.png';
import logo1 from '../asset/img/download.jpg';
import logo2 from '../asset/img/mars.jpg';
import bike from '../asset/img/stock-bike.jpg';
import biycle3 from '../asset/img/photo-1497340525489-441e8427c980.webp';
import biycle4 from '../asset/img/photo-1589792332939-7a04ee18ed8b.webp';
import sad1 from '../asset/img/photo-1602528190586-757f42d99447.webp';

import Simon from './simon.js';
import DateService from './date-service.js'
import BikeService from './bike-service.js'
import MarsService from './mars-service.js'
import BlogService from './news-service.js';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SIMON CODE
let simon = new Simon;
//Press key to start
/* green = 0, red= 1, yellow =2, blue=3 */
$(document).on("keydown", function (e) {
  if (e.keyCode === 13) {
    simon.nextSequence();
  }
});

//This converts the clicks into numbers and pushes it to a new array.
$(".btn").click(function () {
  let userClicked = $(this).attr("id");
  switch (userClicked) {
    case "green":
      simon.sequenceUser.push(0);
      simon.showSequence(0);
      break;

    case "red":
      simon.sequenceUser.push(1);
      simon.showSequence(1);
      break;

    case "yellow":
      simon.sequenceUser.push(2);
      simon.showSequence(2);
      break;

    case "blue":
      simon.sequenceUser.push(3);
      simon.showSequence(3);
      break;
  }
  simon.checkSequence(simon.sequenceUser.length - 1);
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// To add img 
$(".mb-4").attr("src", logo);
$(".link").attr("href", logo);
$(".card-img1").attr("src", logo);
$(".card-img2").attr("src", logo1);
$(".card-img3").attr("src", logo2);
$(".marsimg").attr("src", logo2);
$(".bicyle1").attr("src", biycle3);
$(".bicyle2").attr("src", biycle4);
$(".sad1").attr("src", sad1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FOR DARK MODE
  $("button#dark").click(function () {
    $("body").addClass("bodyd");
    $("h1.d-block").addClass("lmao");
    $("div.hey").addClass("lmao");
    $("b.ohmars").addClass("marsme");
    $(".baby").addClass("darkcard");
    $(".soka").addClass("darkcard");
    $(".card").addClass("card-mode");
    $(".baby").removeClass("bg-light");
    $(".soka").removeClass("bg-light");
  });
  $("button#light").click(function () {
    $("body").removeClass("bodyd");
    $("h1.d-block").removeClass("lmao");
    $("div.hey").removeClass("lmao");
    $("b.ohmars").removeClass("marsme");
    $(".baby").removeClass("darkcard");
    $(".soka").removeClass("darkcard");
    $(".card").removeClass("card-mode");
    $(".baby").addClass("bg-light");
    $(".soka").addClass("bg-light");
  });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// Page loading animation
$(window).on('load', function () {
  $('#js-preloader').addClass('loaded');
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CODE FOR BIKE INDEX

function displayBikes(response) {
  console.log(response.bikes)
  if (response.bikes) {
    let output = buildBikeString(response);
    $('.show-bikes').html(output);
  } else {
    $(".show-errors").text(`There was an error processing your request: ${response}`);
  }
}

async function makeApiCall(location, color) {
  const response = await BikeService.getBikes(location, color);
  displayBikes(response);
}

function buildBikeString(response) {
  let htmlToDisplay = [];
  let manufactorers = [];
  for (let i=0; i < response.bikes.length; i++) {
    if (response.bikes[i].large_img !== null) {
      htmlToDisplay.push(`<img src= ${response.bikes[i].large_img}  class='bike-img'>`);
    } else {
      htmlToDisplay.push(`<img src= ${bike} class="bike-img">`);
    }
    htmlToDisplay.push(`<p>Stolen location: ${response.bikes[i].stolen_location}</p>`);
    htmlToDisplay.push(`<p>Colors: ${response.bikes[i].frame_colors}</p>`);
    if (response.bikes[i].description !== null && response.bikes[i].description !== "") {
      htmlToDisplay.push(`<p>Description: ${response.bikes[i].description}</p>`);
    }
    htmlToDisplay.push(`<p>Brand: ${response.bikes[i].manufacturer_name}</p>`);
    htmlToDisplay.push(`<p>Serial number: ${response.bikes[i].serial}</p>`);
    htmlToDisplay.push('<hr>');
    manufactorers.push(response.bikes[i].manufacturer_name);
  }
  manufactorers.sort();
  let map = {};
  let max = manufactorers[0];
  let maxCount = 1;
  for (let i = 0; i < manufactorers.length; i++) {
    let company = manufactorers[i];
    if(map[company] === undefined) {
      map[company] = 1;
    }
    else {
      map[company] += 1;
    }
    if (map[company] > maxCount) {
      max = company;
      maxCount = map[company];
    }
  }
  htmlToDisplay.unshift(`<p>The most commonly stolen from manufacturer is ${max} with ${maxCount} stolen bikes.</p><hr>`);
  return htmlToDisplay.join('');
}

$(document).ready(function() {
  $('#bike-location').click(function() {
    let location = $('#location').val();
    let color = $('#color').val();
    makeApiCall(location, color);
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// API CALLS AND PLACING


/////////////////////////////////////
//API NEWS
function getElements(response) {
  if (response) {
    $('.title').text(`${response.articles[0].title}`);
    $('.card-text1').text(`${response.articles[0].description}`);
    $('.card-textA').text(`${response.articles[0].author}`);
    $('.img1').html(`<img src =  ${response.articles[0].urlToImage} class="img-fluid rounded-start" style="height: 220px;">`);

  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

function getBbcNews(response) {
  if (response) {

    $('.title2').text(`${response.articles[0].title}`);
    $('.card-text2').text(`${response.articles[0].description}`);
    $('.card-textB').text(`${response.articles[0].author}`);
    $('.img2').html(`<img src = ${response.articles[0].urlToImage} class="img-fluid rounded-start" style="height: 220px;">`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getNewsFr(response) {
  if (response) {

    $('.news3').html(`${response.articles[2].title}`);
    $('.news3content').html(`${response.articles[2].description}`);
    $('.author3').html(`${response.articles[2].author}`);
    $('.wnews3').html(` ${response.articles[2].url}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getNewsUs(response) {
  if (response) {
    $('.news1').html(`${response.articles[0].title}`);
    $('.news1content').html(`${response.articles[0].description}`);
    $('.author').html(`${response.articles[0].author}`);
    $('.wnews1').html(` ${response.articles[0].url}`);

  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getNewsGb(response) {
  if (response) {
    $('.news2').html(`${response.articles[1].title}`);
    $('.news2content').html(`${response.articles[1].description}`);
    $('.author2').html(`${response.articles[1].author}`);
    $('.wnews2').html(` ${response.articles[1].url}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getUsFinance(response) {
  if (response) {
    $('.business1').html(`${response.articles[1].title}`);
    $('.business1content').html(`${response.articles[1].description}`);
    $('.authoruf').html(`${response.articles[1].author}`);
    $('.bnews1').html(` ${response.articles[1].url}`);
    $('.bnewsimg1').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getGbFinance(response) {
  if (response) {
    $('.business2').html(`${response.articles[1].title}`);
    $('.business2content').html(`${response.articles[1].description}`);
    $('.authorgf').html(`${response.articles[1].author}`);
    $('.bnews2').html(` ${response.articles[1].url}`);
    $('.bnewsimg2').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getFrFinance(response) {
  if (response) {
    $('.business3').html(`${response.articles[1].title}`);
    $('.business3content').html(`${response.articles[1].description}`);
    $('.authorff').html(`${response.articles[1].author}`);
    $('.bnews3').html(` ${response.articles[1].url}`);
    $('.bnewsimg3').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getSportUs(response) {
  if (response) {
    $('.sport1').html(`${response.articles[1].title}`);
    $('.sport1content').html(`${response.articles[1].description}`);
    $('.authorus').html(`${response.articles[1].author}`);
    $('.snews1').html(` ${response.articles[1].url}`);
    $('.snewsimg1').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getSportGb(response) {
  if (response) {
    $('.sport2').html(`${response.articles[1].title}`);
    $('.sport2content').html(`${response.articles[1].description}`);
    $('.authorgs').html(`${response.articles[1].author}`);
    $('.snews2').html(` ${response.articles[1].url}`);
    $('.snewsimg2').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getSportFr(response) {
  if (response) {
    $('.sport3').html(`${response.articles[1].title}`);
    $('.sport3content').html(`${response.articles[1].description}`);
    $('.authorfs').html(`${response.articles[1].author}`);
    $('.snews3').html(` ${response.articles[1].url}`);
    $('.snewsimg3').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getHealthUs(response) {
  if (response) {
    $('.health1').html(`${response.articles[1].title}`);
    $('.health1content').html(`${response.articles[1].description}`);
    $('.authoruh').html(`${response.articles[1].author}`);
    $('.hnews1').html(` ${response.articles[1].url}`);
    $('.hnewsimg1').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getHealthGb(response) {
  if (response) {
    $('.health2').html(`${response.articles[1].title}`);
    $('.health2content').html(`${response.articles[1].description}`);
    $('.authorgh').html(`${response.articles[1].author}`);
    $('.hnews2').html(` ${response.articles[1].url}`);
    $('.hnewsimg2').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getHealthFr(response) {
  if (response) {
    $('.health3').html(`${response.articles[1].title}`);
    $('.health3content').html(`${response.articles[1].description}`);
    $('.authorfh').html(`${response.articles[1].author}`);
    $('.hnews3').html(` ${response.articles[1].url}`);
    $('.hnewsimg3').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getTechUs(response) {
  if (response) {
    $('.tech1').html(`${response.articles[1].title}`);
    $('.tech1content').html(`${response.articles[1].description}`);
    $('.authorut').html(`${response.articles[1].author}`);
    $('.tnews1').html(` ${response.articles[1].url}`);
    $('.tnewsimg1').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getTechGb(response) {
  if (response) {
    $('.tech2').html(`${response.articles[1].title}`);
    $('.tech2content').html(`${response.articles[1].description}`);
    $('.authorgt').html(`${response.articles[1].author}`);
    $('.tnews2').html(` ${response.articles[1].url}`);
    $('.tnewsimg2').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getTechFr(response) {
  if (response) {
    $('.tech3').html(`${response.articles[1].title}`);
    $('.tech3content').html(`${response.articles[1].description}`);
    $('.authorft').html(`${response.articles[1].author}`);
    $('.tnews3').html(` ${response.articles[1].url}`);
    $('.tnewsimg3').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getEntUs(response) {
  if (response) {
    $('.ent1').html(`${response.articles[1].title}`);
    $('.ent1content').html(`${response.articles[1].description}`);
    $('.authorue').html(`${response.articles[1].author}`);
    $('.enews1').html(` ${response.articles[1].url}`);
    $('.enewsimg1').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getEntGb(response) {
  if (response) {
    $('.ent2').html(`${response.articles[1].title}`);
    $('.ent2content').html(`${response.articles[1].description}`);
    $('.authorge').html(`${response.articles[1].author}`);
    $('.enews2').html(` ${response.articles[1].url}`);
    $('.enewsimg2').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getEntFr(response) {
  if (response) {
    $('.ent3').html(`${response.articles[1].title}`);
    $('.ent3content').html(`${response.articles[1].description}`);
    $('.authorfe').html(`${response.articles[1].author}`);
    $('.enews3').html(` ${response.articles[1].url}`);
    $('.enewsimg3').html( ` <img src="${response.articles[1].urlToImage}" class="card-img-top" alt="...">` )
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

////////////////////////////////////////

//API DATE
function getDate2(response) {
  if (response) {
    $('.date').text(`${response.date}`);
    $('.time').text(`${response.time_12}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

////////////////////////////////////////

//API MARS
function getMeMar(response) {
  if (response.photos) {
    $('.imgM').html(`<img src = ${response.photos[0].img_src} style="height:500px; width:600px;">`);

  } else {
    $('.showErrors1').text(`There was an error: ${response.message}`);
  }
}
function getElement(response) {
  if (response.photos) {
    $('.imgMa').html(`<img src = ${response.photos[0].img_src} style="height:500px; width:600px;">`);

  } else {
    $('.showErrors1').text(`There was an error: ${response.message}`);
  }
}
function getPicture(response) {
  if (response) {
    $('.picture').html(` ${response.copyright} `);
    $('.date').html(` ${response.date} `);
    $('.explanation').html(` ${response.explanation} `);
    $('.day').html(`<img src = ${response.hdurl} style= align-items:center;">`);
  } else {
    $('.showErrors1').text(`There was an error: ${response.message}`);
  }
}
function getWeather(response) {
  if (response) {
    $('.min-temp').html(` <span> The minimum temperature is ${response.min_temp}k </span>`);
    $('.max-temp').html(`<span> The maximum temperature is ${response.max_temp}k </span> `);
    $('.pressure').html(`<span> The pressure is ${response.pressure}Pa </span>`);
    $('.condition').html(`<span> The weather right now is ${response.atmo_opacity} </span>`);
    $('.sunrise').html(`<span> The time for sunrise is ${response.sunrise}am </span>`);

    $('.sunset').html(`<span> The time for sunset is ${response.sunset} </span>`);

  } else {
    $('.showErrors1').text(`There was an error: ${response.message}`);
  }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// API CALL TO HTML
$(document).ready(function(){
  BlogService.getPhotos()
  .then(function (response) {
    getElements(response);
  });

BlogService.getBbc()
  .then(function (response) {
    getBbcNews(response);
  });

BlogService.getGbNews()
  .then(function (response) {
    getNewsGb(response);
  });
BlogService.getFrNews()
  .then(function (response) {
    getNewsFr(response);
  });
BlogService.getUsNews()
  .then(function (response) {
    getNewsUs(response);
  });
BlogService.getFrBusiness()
  .then(function (response) {
    getFrFinance(response);
  });
BlogService.getGbBusiness()
  .then(function (response) {
    getGbFinance(response);
  });
BlogService.getUsBusiness()
  .then(function (response) {
    getUsFinance(response);
  });
BlogService.getFrSport()
  .then(function (response) {
    getSportFr(response);
  });
BlogService.getGbSport()
  .then(function (response) {
    getSportGb(response);
  });
BlogService.getUsSport()
  .then(function (response) {
    getSportUs(response);
  });
BlogService.getFrHealth()
  .then(function (response) {
    getHealthFr(response);
  });
BlogService.getGbHealth()
  .then(function (response) {
    getHealthGb(response);
  });
BlogService.getUsHealth()
  .then(function (response) {
    getHealthUs(response);
  });
BlogService.getFrTech()
  .then(function (response) {
    getTechFr(response);
  });
BlogService.getGbTech()
  .then(function (response) {
    getTechGb(response);
  });
BlogService.getUsTech()
  .then(function (response) {
    getTechUs(response);
  });
BlogService.getFrEnt()
  .then(function (response) {
    getEntFr(response);
  });
BlogService.getGbEnt()
  .then(function (response) {
    getEntGb(response);
  });
BlogService.getUsEnt()
  .then(function (response) {
    getEntUs(response);
  });
DateService.getDate1()
  .then(function (response) {
    getDate2(response);
  });

  MarsService.getMars()
    .then(function (response) {
      getMeMar(response);
    });
  MarsService.getAPhoto()
    .then(function (response) {
      getElement(response);
    });
  MarsService.pictureDay()
    .then(function (response) {
      getPicture(response);
    });
  MarsService.getWeateher()
    .then(function (response) {
      getWeather(response);
    });
})

  