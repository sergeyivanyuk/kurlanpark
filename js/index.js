

document.addEventListener('DOMContentLoaded', () => {

  // scroll
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {

      // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
      if (this.hash !== "") {
        // Запретить поведение щелчка якоря по умолчанию
        event.preventDefault();
  
        // Хранить хэш
        var hash = this.hash;
  
        // Использование метода animate() jQuery для добавления плавной прокрутки страницы
        // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
          window.location.hash = hash;
        });
      } // Конец, если
    });
    // Phone
    const headerPhone = document.querySelectorAll('.header__phone'),
          headerPhoneText = document.querySelector('span.header__phone-text');

        headerPhone.forEach(item => {
          item.addEventListener('mousemove', () => {
            item.innerHTML = `
            <span class="header__phone-arrow">&#8594;</span>
            <span class="header__phone-text" style="font-size: 15px;">+7 (927) 634 02 46</span>`;
            headerPhone.append(headerPhoneText)});

            item.addEventListener('mouseout', () => {
              item.innerHTML = `
              <span class="header__phone-arrow">&#8594;</span>
              <span  class="header__phone-text">Позвонить нам</span>`;
              headerPhone.append(headerPhoneText)
            });
        });

  // modals
  const Modalmenu = document.querySelector('.modal-menu'),
        ModalBanket = document.querySelector('.modal-menu-banket'),

       ModalParking = document.querySelector('.modal-parking'),
       ModalCafe = document.querySelector('.modal-cafe'),
       ModalLighting = document.querySelector('.modal-lighting'),
       ModalMusic = document.querySelector('.modal-music'),
       ModalLifts = document.querySelector('.modal-lifts'),
       ModalTubing = document.querySelector('.modal-tubing'),
       ModalFaq = document.querySelector('.modal-faq'),
       ModalKrl = document.querySelector('.modal-krl'),
       ModalSale = document.querySelector('.modal-sale'),
       ModalSales = document.querySelector('.modal-sales'),
       ModalQuadro = document.querySelector('.modal-quadro'),
       ModalDog = document.querySelector('.modal-dog'),

       ModalopenParking = document.querySelector('.modal-open-parking'),
       ModalopenCafe = document.querySelector('.modal-open-cafe'),
       ModalopenLighting = document.querySelector('.modal-open-lighting'),
       ModalopenMusic = document.querySelector('.modal-open-music'),
       ModalopenSnowsky = document.querySelector('.modal-open-snowsky'),
       ModalopenTubing = document.querySelector('.modal-open-tubing'),
       ModalopenFaq = document.querySelector('.open-modal-faq'),
       ModalopenKrl = document.querySelector('.open-modal-krl'),
       ModalopenSale = document.querySelector('.open-modal-sale'),
       ModalopenSales = document.querySelector('.open-modal-sales'),
       ModalopenQuadro = document.querySelector('.open-modal-quadro'),
       ModalopenDog = document.querySelector('.open-modal-dog'),

       ModalOpen = document.querySelectorAll('.open-modal-menu'),
       ModalOpenBanket = document.querySelectorAll('.open-modal-banket'),
       ModalClose = document.querySelectorAll('.modal-close'),
       social = document.querySelector('.social'),
       arrowTop = document.querySelector('.arrow-top');

       const modalOpenMenu = () => {
        ModalOpen.forEach(item => {
          item.addEventListener('click', (e) => {
            e.preventDefault();
            Modalmenu.classList.add('active');
            document.body.style.overflow = 'hidden';
          });
        })
       };
     const modalCloseMenu = () => {
      ModalClose.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          Modalmenu.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
     };
     modalOpenMenu();
     modalCloseMenu();

     const modalopenBanket = () => {
      ModalOpenBanket.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          ModalBanket.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      })
     };
   const modalCloseBanket = () => {
    ModalClose.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        ModalBanket.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
   };
   modalopenBanket();
   modalCloseBanket();
 const modalOpenParking = () => {
  ModalopenParking.addEventListener('click', (e) => {
      e.preventDefault();
      ModalParking.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
const modalCloseParking = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalParking.classList.remove('active');
    });
  });
};
modalOpenParking();
modalCloseParking();

const modalOpenCafe = () => {
  ModalopenCafe.addEventListener('click', (e) => {
      e.preventDefault();
      ModalCafe.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
const modalCloseCafe = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalCafe.classList.remove('active');
    });
  });
};
modalOpenCafe();
modalCloseCafe();

const ModalLightingOpen = () => {
  ModalopenLighting.addEventListener('click', (e) => {
      e.preventDefault();
      ModalLighting.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
const ModalLightingClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalLighting.classList.remove('active');
    });
  });
};
ModalLightingOpen();
ModalLightingClose();

const ModalMusicOpen = () => {
  ModalopenMusic.addEventListener('click', (e) => {
      e.preventDefault();
      ModalMusic.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
const ModalMusicClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalMusic.classList.remove('active');
    });
  });
};
ModalMusicOpen();
ModalMusicClose();

const ModalLiftsOpen = () => {
  ModalopenSnowsky.addEventListener('click', (e) => {
      e.preventDefault();
      ModalLifts.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
const ModalLiftsClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalLifts.classList.remove('active');
    });
  });
};
ModalLiftsOpen();
ModalLiftsClose();

const ModalTubingOpen = () => {
  ModalopenTubing.addEventListener('click', (e) => {
      e.preventDefault();
      ModalTubing.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
const ModalTubingClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalTubing.classList.remove('active');
    });
  });
};
ModalTubingOpen();
ModalTubingClose();

const ModalFaqOpen = () => {
  ModalopenFaq.addEventListener('click', (e) => {
      e.preventDefault();
      ModalFaq.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
const ModalFaqClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalFaq.classList.remove('active');
    });
  });
};
ModalFaqOpen();
ModalFaqClose();


const ModalKrlOpen = () => {
  ModalopenKrl.addEventListener('click', (e) => {
      e.preventDefault();
      ModalKrl.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
const ModalKrlClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalKrl.classList.remove('active');
    });
  });
};
ModalKrlOpen()
ModalKrlClose()

const ModalSaleOpen = () => {
  ModalopenSale.addEventListener('click', (e) => {
      e.preventDefault();
      ModalSale.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
ModalSaleOpen()
const ModalSaleClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalSale.classList.remove('active');
    });
  });
};
ModalSaleClose()
const ModalSalesOpen = () => {
  ModalopenSales.addEventListener('click', (e) => {
      e.preventDefault();
      ModalSales.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
ModalSalesOpen()
const ModalSalesClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalSales.classList.remove('active');
    });
  });
};
ModalSalesClose()
const ModalQuadroOpen = () => {
  ModalopenQuadro.addEventListener('click', (e) => {
      e.preventDefault();
      ModalQuadro.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
ModalQuadroOpen()
const ModalQuadroClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalQuadro.classList.remove('active');
    });
  });
};
ModalQuadroClose()

const ModalDogOpen = () => {
  ModalopenDog.addEventListener('click', (e) => {
      e.preventDefault();
      ModalDog.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
};
ModalDogOpen()
const ModalDogClose = () => {
  ModalClose.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      ModalDog.classList.remove('active');
    });
  });
};
ModalDogClose()
    // Animation

    AOS.init();
    
  const header = document.querySelector('.header');

	const headerFixed = () => {
		let scrollTop = window.scrollY;
    

		if (scrollTop >= header.offsetHeight) {
			header.classList.add('fixed')
		} else {
			header.classList.remove('fixed')
		}
  };
    window.addEventListener('scroll', () => {
      headerFixed();
      const Hero = document.getElementById('hero');
      let scrollTop = window.scrollY;
        
         if(scrollTop > Hero.offsetHeight) {
          social.classList.add('hidden');
          arrowTop.classList.add('hidden');
         } 
         if(scrollTop < Hero.offsetHeight) {
          social.classList.remove('hidden');
          arrowTop.classList.remove('hidden');
         }
  });

   // Slider
   let swiper1 = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clikable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  let swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
    },
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let swiper3 = new Swiper(".mySwiper3", {
    cssMode: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    mousewheel: true,
    keyboard: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let swiper4 = new Swiper(".mySwiper4", {
    cssMode: true,
    centeredSlides: true,
    autoplay: {
      delay: 3800,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });
  let swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,},
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // Menu
  const menu = document.querySelector('.menu__list'),
        menuOpenBtn = document.querySelector('.menu__btn-open'),
        menuCloseBtn = document.querySelector('.btn-close'),
        menuItems = document.querySelectorAll('.menu__item');

        const menuOpen = () => {
          menuOpenBtn.addEventListener('click', () => {
            menu.classList.add('active');
          });
        }
        const menuClose = () => {
          menuCloseBtn.addEventListener('click', () => {
            menu.classList.remove('active');
          });
        }
        menuItems.forEach(item => {
          item.addEventListener('click', () => {
            menu.classList.remove('active');
          });
        });
        menuClose();
        menuOpen();

        // Touches
        const menuOpenTouch = () => {
          menuOpenBtn.addEventListener('targetTouches', () => {
            menu.classList.add('active');
          });
        }
        const menuCloseTouch = () => {
          menuCloseBtn.addEventListener('targetTouches', () => {
            menu.classList.remove('active');
          });
        }
        menuItems.forEach(item => {
          item.addEventListener('targetTouches', () => {
            menu.classList.remove('active');
          });
        });
        menuCloseTouch();
        menuOpenTouch();

       
});
