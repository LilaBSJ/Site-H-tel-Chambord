$(document).ready(function () {
    var ownVideos = $("iframe");
    $.each(ownVideos, function (i, video) {                
        var frameContent = $(video).contents().find('body').html();
        if (frameContent) {
            $(video).contents().find('body').html(frameContent.replace("autoplay", ""));
        }
    });
});

function redirectToReservation() {
    window.location.href = "reservation.html";
  }


function submitReservation() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var roomType = document.getElementById('roomType').value;
    var date = document.getElementById('date').value;
    var guests = document.getElementById('guests').value;

    if (name && email && roomType && date && guests) {
       
        console.log("Nom :", name);
        console.log("Email :", email);
        console.log("Type de chambre :", roomType);
        console.log("Date :", date);
        console.log("Nombre de personnes :", guests);

        alert("Réservation soumise !");
    } else {
        alert("Veuillez remplir tous les champs.");
    };
};

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('mainNav').classList.add('fixed-top');
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('mainNav').classList.remove('fixed-top');
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

  document.addEventListener('DOMContentLoaded', function () {
    displayReviews();
});

/*AVIS*/
function displayReviews() {
    const generalReviews = [
        { serviceType: 'Hôtel en général', userReview: '"Un séjour exceptionnel à l\'Hôtel Cop ! Le personnel était incroyablement accueillant et les installations étaient impeccables. Nous reviendrons certainement."', userName: 'Alice N.' },
        { serviceType: 'Hôtel en général', userReview: '"L\'emplacement de l\'hôtel est idéal, à proximité des attractions principales. Les chambres sont confortables, et le service est de première classe. Hautement recommandé !"', userName: 'Bob K.' },
        { serviceType: 'Hôtel en général', userReview: '"Le service de l\'hôtel était exceptionnel. Nous avons apprécié chaque moment de notre séjour. Le personnel était attentif et professionnel. Une expérience inoubliable!"', userName: 'Charlie M.' },
    ];

    const roomReviews = [
        { serviceType: 'Chambres', userReview: '"La chambre était spacieuse et élégamment décorée. Le lit était confortable, et la propreté était impeccable. Nous avons passé des nuits paisibles ici."', userName: 'David K.' },
        { serviceType: 'Chambres', userReview: '"J\'ai adoré la vue depuis ma chambre ! Un endroit parfait pour se détendre après une journée bien remplie. Le service de nettoyage était également très bon."', userName: 'Eva L.' },
        { serviceType: 'Chambres', userReview: '"La qualité des chambres est exceptionnelle. Les équipements sont modernes et bien entretenus. Nous reviendrons certainement lors de notre prochain voyage."', userName: 'Frank B.' },
    ];

    const restaurantReviews = [
        { serviceType: 'Restaurant', userReview: '"Une expérience culinaire exceptionnelle ! Les plats étaient délicieux et le personnel du restaurant était attentif et sympathique. Je recommande vivement le restaurant de l\'Hôtel."', userName: 'Grace C.' },
        { serviceType: 'Restaurant', userReview: '"Le petit-déjeuner buffet était varié et délicieux. Des options fraîches et savoureuses pour tous les goûts. Un excellent moyen de commencer la journée !"', userName: 'Henry B.' },
        { serviceType: 'Restaurant', userReview: '"Les options végétariennes au restaurant sont excellentes. Le chef a su créer des plats délicieux et équilibrés. Nous avons apprécié chaque repas. Une expérience à renouveler."', userName: 'Ivy S.'},
    ];

    const spaReviews = [
        { serviceType: 'Soins', userReview: '"Les soins au spa étaient relaxants et apaisants. Le personnel du spa était professionnel et attentionné. C\'était une escapade bien-être parfaite."', userName: 'Jack D.' },
        { serviceType: 'Soins', userReview: '"Les installations du spa étaient excellentes. J\'ai apprécié chaque moment de mon massage. Une expérience revitalisante que je recommande à tous les visiteurs."', userName: 'Kate W.' },
        { serviceType: 'Soins', userReview: '"Les soins du spa ont dépassé nos attentes. L\'atmosphère était apaisante, et les thérapeutes étaient compétents. Une expérience à renouveler. "', userName: 'Liam N.' },
    ];

    displayReviewsInTab('generalReviews', generalReviews, 'generalReviewList');
    displayReviewsInTab('roomReviews', roomReviews, 'roomReviewList');
    displayReviewsInTab('restaurantReviews', restaurantReviews, 'restaurantReviewList');
    displayReviewsInTab('spaReviews', spaReviews, 'spaReviewList');
};

function displayReviewsInTab(tabId, reviews, containerId) {
    const tabContent = document.getElementById(tabId);
    const container = document.getElementById(containerId);

    const row = document.createElement('div');
    row.classList.add('row');

    reviews.forEach(review => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-3'); 
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <div class="card-body">
                <p class="card-text">${review.userReview}</p>
                <p class="card-title">${review.userName}</p>
            </div>
        `;
        col.appendChild(cardElement);
        row.appendChild(col);
    });

    container.appendChild(row);
    tabContent.appendChild(container);
};
function redirectToActualites() {
    window.location.href = 'actualites.html';
}

/*CONTACT*/
document.getElementById('category').addEventListener('change', function () {
    var selectedCategory = this.value;
    var subCategories = document.querySelector('.sub-categories');

    Array.from(subCategories.children).forEach(function (optgroup) {
      optgroup.style.display = 'none';
    });

    if (selectedCategory) {
      document.querySelector('optgroup[label="' + selectedCategory + '"]').style.display = 'block';
    }
  });
  
    /*NAVBAR*/
    function afficherLangue(langue) {
        document.getElementById('langue' + langue).style.display = 'inline';
    }
    
    function cacherLangue(langue) {
        document.getElementById('langue' + langue).style.display = 'none';
    }

  /* RESERVATION*/
  document.getElementById('roomType').addEventListener('change', function () {
    var selectedRoomType = this.value;
    var subRoomTypes = document.querySelector('.sub-room-types');

    Array.from(subRoomTypes.children).forEach(function (optgroup) {
      optgroup.style.display = 'none';
    });

    if (selectedRoomType) {
      document.querySelector('optgroup[label="' + selectedRoomType + '"]').style.display = 'block';
    }
  });


function redirectToPanier() {
    var name = document.getElementById('name').value;
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dateArrivee = document.getElementById('date_arrive').value;
    var dateDepart = document.getElementById('date_leave').value;
    var roomType = document.getElementById('roomType').value;
    var subRoomType = document.getElementById('subRoomType').value;
    var guests = document.getElementById('guests').value;

    var reservation = {
        name: name,
        firstname: firstname,
        email: email,
        phone: phone,
        dateArrivee: dateArrivee,
        dateDepart: dateDepart,
        roomType: roomType,
        subRoomType: subRoomType,
        guests: guests
    };

    localStorage.setItem('panier', JSON.stringify(reservation));
    window.location.href = 'panier.html';
}


/*PANIER*/
document.addEventListener('DOMContentLoaded', function () {
    displayOrderDetails();
  });
  
  function displayOrderDetails() {
    var panierData = localStorage.getItem('panier');
  
    if (panierData) {
      var reservation = JSON.parse(panierData);
      var orderDetails = document.getElementById('orderDetails');
      var html = `
        <p>Type de chambre: ${reservation.roomType}</p>
        <p>Nombre de personnes: ${reservation.guests}</p>
        <p>Prix à payer: ${calculateTotalPrice(reservation.roomType, reservation.guests)} €</p>
      `;
      orderDetails.innerHTML = html;
    }
  }
  
  function calculateTotalPrice(roomType, guests, numberOfDays) {
    var pricePerPerson;

    switch (roomType) {
        case 'chambreClassique':
            pricePerPerson = 567;
            break;
        case 'chambreComfort':
            pricePerPerson = 839;
            break;
        case 'chambreDeluxe':
            pricePerPerson = 907;
            break;
        case 'suite':
            pricePerPerson = 1043;
            break;
        default:
            pricePerPerson = 0;
            break;
    }
    return pricePerPerson * guests * numberOfDays;
}

function displayOrderDetails() {
  var panierData = localStorage.getItem('panier');

  if (panierData) {
      var reservation = JSON.parse(panierData);
      var orderDetails = document.getElementById('orderDetails');
      var numberOfDays = calculateNumberOfDays(reservation.dateArrivee, reservation.dateDepart);

      var html = `
          <p>Type de chambre: ${reservation.roomType}</p>
          <p>Nombre de personnes: ${reservation.guests}</p>
          <p>Nombre de jours: ${numberOfDays}</p>
          <p>Prix à payer: ${calculateTotalPrice(reservation.roomType, reservation.guests, numberOfDays)} €</p>
      `;
      orderDetails.innerHTML = html;
  }
}

function calculateNumberOfDays(dateArrivee, dateDepart) {
  var arrivalDate = new Date(dateArrivee);
  var departureDate = new Date(dateDepart);
  var timeDiff = departureDate.getTime() - arrivalDate.getTime();
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
}

  
  function validerCommande() {
    var cgvCheckbox = document.getElementById('cgvCheckbox');

    if (cgvCheckbox.checked) {
        alert('Commande validée !');
    } else {
        alert('Veuillez accepter les Conditions Générales de Vente (CGV) pour valider la commande.');
    }
}

  




