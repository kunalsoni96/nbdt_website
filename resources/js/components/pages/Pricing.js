<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{url('/')}}/public/css/app.css">
        <!-- Bootstrap Min CSS -->
        <link rel="stylesheet" href="{{url('/')}}/assets/css/bootstrap.min.css">
        <!-- Animate CSS -->
        <link rel="stylesheet" href="{{url('/')}}/assets/css/animate.css">
        <!-- Meanmenu Min CSS -->
        <link rel="stylesheet" href="{{url('/')}}/assets/css/meanmenu.css">
        <!-- Magnific Popup Min CSS -->
        <link rel="stylesheet" href="{{url('/')}}/assets/css/magnific-popup.min.css">
        <!-- Owl Carousel Min CSS -->
        <link rel="stylesheet" href="{{url('/')}}/assets/css/owl.carousel.min.css">
        <!-- Odometer CSS -->
        <link rel="stylesheet" href="{{url('/')}}/assets/css/odometer.css">
        <!-- Slick CSS -->
        <link rel="stylesheet" href="{{url('/')}}/assets/css/slick.css">
        <!-- Style CSS -->
        <link rel="stylesheet" href="{{url('/')}}/assets/css/style.css">
        <!-- Responsive CSS -->
        <link rel="stylesheet" href="{{url('/')}}/assets/css/responsive.css">
    </head>
    <body>
        <div id="root"></div>
    </body>
    <script type="text/javascript" src="{{url('/')}}/public/js/app.js"></script>
     <script src="{{url('/')}}/assets/js/jquery.min.js"></script>
      <!-- Popper Min JS -->
      <script src="{{url('/')}}/assets/js/popper.min.js"></script>
      <!-- Bootstrap Min JS -->
      <script src="{{url('/')}}/assets/js/bootstrap.min.js"></script>
      <!-- Meanmenu Min JS -->
      <script src="{{url('/')}}/assets/js/jquery.meanmenu.min.js"></script>
      <!-- WOW Min JS -->
      <script src="{{url('/')}}/assets/js/wow.min.js"></script>
      <!-- Magnific Popup Min JS -->
      <script src="{{url('/')}}/assets/js/jquery.magnific-popup.min.js"></script>
      <!-- Appear Min JS -->
      <script src="{{url('/')}}/assets/js/jquery.appear.js"></script>
      <!-- Odometer Min JS -->
      <script src="{{url('/')}}/assets/js/odometer.min.js"></script>
      <!-- Slick Min JS -->
      <script src="{{url('/')}}/assets/js/slick.js"></script>
      <!-- Owl Carousel Min JS -->
      <script src="{{url('/')}}/assets/js/owl.carousel.min.js"></script>
      <!-- Feather Icon Min JS -->
      <script src="{{url('/')}}/assets/js/feather.min.js"></script>
      <!-- Form Validator Min JS -->
          <script src="{{url('/')}}/assets/js/form-validator.min.js"></script>
          <!-- Contact Form Min JS -->
          <script src="{{url('/')}}/assets/js/contact-form-script.js"></script>
          <!-- StartP Map JS FILE -->
          <script src="{{url('/')}}/assets/js/startp-map.js"></script>
          <!-- Main JS -->
      <script src="{{url('/')}}/assets/js/main.js"></script>
      
      <script>
        jQuery(document).on('ready', function() {
          $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
              var countNumber = $(this).attr("data-count");
              $(this).html(countNumber);
            });
          });
        });
      </script>
</html>
