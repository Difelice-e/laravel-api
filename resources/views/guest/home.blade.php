<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

<<<<<<< HEAD
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Styles -->
    <link href="{{ asset('css/front.css') }}" rel="stylesheet">

    <script>
        tailwind.config = {
          theme: {
            extend: {
                container: {
                    center: true,
                },
              colors: {
                clifford: '#da373d',
              }
            }
          }
        }
    </script>
</head>
<body>
    <div id='root'>qui dentro viene montato vue</div>

    <script src="{{ asset('js/front.js') }}"></script>
</body>
</html>
=======
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/front.css') }}" rel="stylesheet">
</head>
<body>
  <div id="root">Istanza di Vue - prova</div>

  <script src="{{ asset('js/front.js') }}"></script>
</body>
</html>
>>>>>>> 482b0535c1d047182c164bd751b194c3d3d17862
