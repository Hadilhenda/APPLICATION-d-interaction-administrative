if (typeof jQuery === 'undefined') {
  throw new Error('jQuery plugins need to be before this file')
}
$(function () {
  'use strict'

  // Stacked Area

  // Addmission by Division
  $(document).ready(function () {
    var jan = document.getElementById('jan').value
    var mai = document.getElementById('mai').value
    var fev = document.getElementById('fev').value
    var mars = document.getElementById('mars').value
    var avr = document.getElementById('avr').value
    var juin = document.getElementById('juin').value
    var juil = document.getElementById('juil').value
    var aout = document.getElementById('aout').value
    var sep = document.getElementById('sep').value
    var oct = document.getElementById('oct').value
    var nov = document.getElementById('nov').value
    var dec = document.getElementById('dec').value

    var jan_dc = document.getElementById('jan_dc').value
    var fev_dc = document.getElementById('fev_dc').value
    var mars_dc = document.getElementById('mars_dc').value
    var avr_dc = document.getElementById('avr_dc').value
    var mai_dc = document.getElementById('mai_dc').value
    var juin_dc = document.getElementById('juin_dc').value
    var juil_dc = document.getElementById('juil_dc').value
    var aout_dc = document.getElementById('aout_dc').value
    var sep_dc = document.getElementById('sep_dc').value
    var oct_dc = document.getElementById('oct_dc').value
    var nov_dc = document.getElementById('nov_dc').value
    var dec_dc = document.getElementById('dec_dc').value

    var jan_Covid = document.getElementById('jan_Covid').value
    var mai = document.getElementById('mai_Covid').value
    var fev = document.getElementById('fev_Covid').value
    var mars = document.getElementById('mars_Covid').value
    var avr = document.getElementById('avr_Covid').value
    var juin = document.getElementById('juin_Covid').value
    var juil = document.getElementById('juil_Covid').value
    var aout = document.getElementById('aout_Covid').value
    var sep = document.getElementById('sep_Covid').value
    var oct = document.getElementById('oct_Covid').value
    var nov = document.getElementById('nov_Covid').value
    var dec = document.getElementById('dec_Covid').value
    var options = {
      series: [
        {
          name: 'Naissances',
          data: [
            jan,
            fev,
            mars,
            avr,
            mai,
            juin,
            juil,
            aout,
            sep,
            oct,
            nov,
            dec,
          ],
        },
        {
          name: 'Déces',
          data: [
            jan_dc,
            fev_dc,
            mars_dc,
            avr_dc,
            mai_dc,
            juin_dc,
            juil_dc,
            aout_dc,
            sep_dc,
            oct_dc,
            nov_dc,
            dec_dc,
          ],
        },
        {
          name: 'Covid-19',
          data: [
            jan_Covid,
            fev_Covid,
            mars_Covid,
            avr_Covid,
            mai_Covid,
            juin_Covid,
            juil_Covid,
            aout_Covid,
            sep_Covid,
            oct_Covid,
            nov_Covid,
            dec_Covid,
          ],
        },
      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: [
        'var(--chart-color1)',
        'var(--chart-color2)',
        'var(--chart-color3)',
        'var(--chart-color4)',
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'March',
          'Apr',
          'May',
          'Jun',
          'July',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      legend: {
        position: 'top', // top, bottom
        horizontalAlign: 'right', // left, right
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
    }

    var chart = new ApexCharts(
      document.querySelector('#apex-stacked-area'),
      options
    )
    chart.render()
  })
})

$(document).ready(function () {
  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  var newDate = new Date()
  newDate.setDate(newDate.getDate())

  setInterval(function () {
    var hours = new Date().getHours()
    $('.hour').html((hours < 10 ? '0' : '') + hours)
    var seconds = new Date().getSeconds()
    $('.second').html((seconds < 10 ? '0' : '') + seconds)
    var minutes = new Date().getMinutes()
    $('.minute').html((minutes < 10 ? '0' : '') + minutes)

    $('.month span,.month2 span').text(monthNames[newDate.getMonth()])
    $('.date span,.date2 span').text(newDate.getDate())
    $('.day span,.day2 span').text(dayNames[newDate.getDay()])
    $('.year span').html(newDate.getFullYear())
  }, 1000)

  $('.outer').on({
    mousedown: function () {
      $('.dribbble').css('opacity', '1')
    },
    mouseup: function () {
      $('.dribbble').css('opacity', '0')
    },
  })
})

$(document).ready(function () {
  var time
  var day
  var month
  var year
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  var center

  // remove border if the selected date is today's date
  function todayEqualActive() {
    setTimeout(function () {
      if ($('.ui-datepicker-current-day').hasClass('ui-datepicker-today')) {
        $('.ui-datepicker-today')
          .children('.ui-state-default')
          .css('border-bottom', '0')
      } else {
        $('.ui-datepicker-today')
          .children('.ui-state-default')
          .css('border-bottom', '2px solid rgba(53,60,66,0.5)')
      }
    }, 20)
  }

  // call the above function on document ready
  todayEqualActive()

  $('#calendar').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    onChangeMonthYear: function () {
      todayEqualActive()
    },
    onSelect: function (dateText, inst) {
      var date = $(this).datepicker('getDate'),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear()

      // display day and month on submit button
      var monthName = months[month - 1]
      $('.request .day').text(monthName + ' ' + day)

      todayEqualActive()

      $('.request').removeClass('disabled')

      var index

      setTimeout(function () {
        $('.ui-datepicker-calendar tbody tr').each(function () {
          if ($(this).find('.ui-datepicker-current-day').length) {
            index = $(this).index() + 1
          }
        })

        // insert timepiker placeholder after selected row
        $("<tr class='timepicker-cf'></tr>").insertAfter(
          $('.ui-datepicker-calendar tr').eq(index)
        )

        if ($('.timepicker-cf')) {
          var top = $('.timepicker-cf')[0].offsetTop
          if ($('.timepicker').css('height') == '60px') {
            //console.log('in');
            $('.timepicker-cf').animate(
              {
                height: '0px',
                position: 'relative',
              },
              { duration: 200, queue: false }
            )
            $('.timepicker').animate(
              {
                top: top,
              },
              200
            )
            $('.timepicker-cf').animate(
              {
                height: '60px',
                position: 'relative',
              },
              200
            )
          } else {
            // console.log('out');
            $('.timepicker').css('top', top)
            $('.timepicker, .timepicker-cf').animate(
              {
                height: '60px',
              },
              200
            )
          }
        }
      }, 0)

      // display time on submit button
      time = $('.owl-stage .center').text()
      $('.request .time').text(time)

      $('.owl-item').removeClass('center-n')
      center = $('.owl-stage').find('.center')
      center.prev('div').addClass('center-n')
      center.next('div').addClass('center-n')
    },
  })

  // if the inputs arent empty force ":focus state"
  $('.form-name input').each(function () {
    $(this).keyup(function () {
      if (this.value) {
        $(this).siblings('label').css({
          'font-size': '0.8em',
          left: '.15rem',
          top: '0%',
        })
      }
      // remove force if they're empty
      else {
        $(this).siblings('label').removeAttr('style')
      }
    })
  })

  $('.timepicker').on('click', '.owl-next', function () {
    time = $('.owl-stage .center').text()
    $('.request .time').text(time)

    $('.owl-item').removeClass('center-n')
    center = $('.owl-stage').find('.center')
    center.prev('div').addClass('center-n')
    center.next('div').addClass('center-n')
  })

  $('.timepicker').on('click', '.owl-prev', function () {
    time = $('.owl-stage .center').text()
    $('.request .time').text(time)

    $('.owl-item').removeClass('center-n')
    center = $('.owl-stage').find('.center')
    center.prev('div').addClass('center-n')
    center.next('div').addClass('center-n')
  })

  $('.owl').owlCarousel({
    center: true,
    loop: true,
    items: 3,
    dots: false,
    nav: true,
    navText: ' ',
    mouseDrag: false,
    touchDrag: true,
    responsive: {
      0: {
        items: 3,
      },
      700: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  })

  $(document).on('click', '.ui-datepicker-next', function (e) {
    $('.timepicker-cf').hide(0)
    $('.timepicker').css({
      height: '0',
    })
    e.preventDefault()
    $('.ui-datepicker').animate(
      {
        '-webkit-transform': 'translate(100%,0)',
      },
      200
    )
  })

  $(document).on('click', '.ui-datepicker-prev', function () {
    $('.timepicker-cf').hide(0)
    $('.timepicker').css({
      height: '0',
    })
    $('.ui-datepicker').animate(
      {
        transform: 'translateX(-100%)',
      },
      200
    )
  })

  $(window).on('resize', function () {
    top = $('.timepicker-cf')[0].offsetTop
    //console.log($(".timepicker-cf")[0].offsetTop);
    $('.timepicker').css('top', $('.timepicker-cf')[0].offsetTop)
  })
})
