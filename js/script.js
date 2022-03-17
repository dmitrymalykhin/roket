$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    $("body").addClass("scroll-desktop-menu")
  } else {
    $("body").removeClass("scroll-desktop-menu")
  }
});

//burger
const btnBurger = document.getElementById('hamburger');

btnBurger.addEventListener('click', function() {
  if (document.body.classList.contains("hamburger-active")) {
    closeBurger ();
  } else {
    openBurger ();
  }
})

function closeBurger () {
  document.body.classList.remove('hamburger-active');
}

function openBurger () {
  document.body.classList.add('hamburger-active');
}
//End burger

$('.open-modal').click(function(){
  let modalEl = $(this).data('modal');
  $('div[data-modal="'+modalEl+'"]').addClass('active');
  $('div[data-modal="'+modalEl+'"]').find('.modal').addClass('active');
  document.body.classList.add('no-scroll');
});

$('.close-modal').click(function(){
  $(this).parents('.modal').removeClass('active');
  $(this).parents('.modal-overlay').removeClass('active');
  document.body.classList.remove('no-scroll');
});
$(document).click(function (e) {
  if ($(e.target).is('.modal-overlay')) {
    $(e.target).removeClass('active');
    $(e.target).find('.modal').removeClass('active');
  }
});

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена

  const smoothHeight = (itemSelector, buttonSelector, contentSelector) => { // объявляем основную функцию, которая принимает в качестве параметров селекторы элемента, кнопки внутри элемента и блока с контентом

    const items = document.querySelectorAll(itemSelector) // находим все элементы по переданному селектору в параметре itemSelector и записываем в константу items

    if (!items.length) return // если таких элементов нет, прекращаем выполнение функции

    items.forEach(el => { // для каждого элемента
      const button = el.querySelector(buttonSelector) // находим кнопку и записываем в константу button
      const content = el.querySelector(contentSelector) // находим блок с контентом и записываем в константу content

      button.addEventListener('click', () => { // при клике на кнопку
        if (el.dataset.open !== 'true') { // если значение data-атрибута open у элемента не равно 'true' и блок с контентом еще не отображен
          el.dataset.open = 'true' // тогда устанавливаем значение 'true'
          content.style.maxHeight = `${content.scrollHeight}px` // и блоку с контентом устанавливаем inline-свойсво max-height со вычисленным значением полной высоты этого блока
        } else { // если блок с контентом отображен и значение data-атрибута open у элемента равно 'true'
          el.dataset.open = 'false' // тогда устанавливаем значение 'false'
          content.style.maxHeight = '' // и сбрасываем ранее установленное inline-свойсво max-height
        }
      })

      const onResize = () => { // объявляем функцию onResize, которая будет корректировать значение inline-свойства max-height при изменении размеров окна браузера
        if (el.dataset.open === 'true') { // если значение data-атрибута open у элемента равно 'true' (коректировать высоту нужно только если блок контента отображен)
          if (parseInt(content.style.maxHeight) !== content.scrollHeight) { // если текущее значение inline-свойства max-height у блока контента не равно полной высоте
            content.style.maxHeight = `${content.scrollHeight}px` // только тогда блоку с контентом корректируем значение inline-свойсва max-height
          }
        }
      }

      window.addEventListener('resize', onResize) // вызываем функцию onResize при изменении размеров окна браузера
    })

}

  smoothHeight('.cases-item-tab', '.cases-btn', '.cases-content') // вызываем основную функцию smoothHeight и передаем в качестве параметров  необходимые селекторы

})


$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1200);
  e.preventDefault();
});

$('.navbar-list-item a').on('click', function(){ 
  if (document.body.classList.contains("hamburger-active")) {
    closeBurger ();
  } else {
    openBurger ();
  }
});