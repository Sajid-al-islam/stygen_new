<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{$meta["title"]??''}}</title>
    <meta property="og:title" content="{{$meta["title"]??''}}" />
    <meta property="og:site_name" content="{{$meta["title"]??''}}" />
    <meta property="og:description" content="{{$meta["title"]??''}}" />
    <meta property="og:image" content="{{$meta["meta_image"]??''}}" />
    <meta property="og:image:width" content="600" />
    <meta property="og:image:height" content="315" />

    <meta name="twitter:title" content="{{$meta["title"]??''}}">
    <meta name="twitter:description" content="{{$meta["title"]??''}}">
    <meta name="twitter:image" content="{{$meta["meta_image"]??''}}">
    <meta name="twitter:card" content="summary_large_image">

    {{-- <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/bootstrap.min.css"> --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/animate.css">
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/owl.carousel.min.css">
    {{-- <link rel="stylesheet" href="/js/pace-theme-default.min.css"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('assets/frontend') }}/style.css"> --}}
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/responsive.css">
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/style.css">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
    
    <link rel="stylesheet" href="{{ asset('assets/frontend/css/custom_style.css') }}">
    
    @livewireStyles

    <script src="/js/sweetalert.js"></script>
    <script src="/js/pace.min.js"></script>
    <script src="{{ asset('assets/frontend') }}/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="{{ asset('assets/frontend') }}/js/owl.carousel.min.js"></script>
    <script src="{{ asset('assets/frontend') }}/js/custom.js"></script>

    @livewireScripts
    <script src="/js/turbolink.min.js"></script>
    <script src="{{ asset('assets/frontend') }}/js/livewire_hook.js" defer></script>
    <script src="{{ asset('assets/frontend') }}/js/main.js" defer></script>

</head>

<body>
    <header>
        @livewire('frontend.components.header')
        {{-- @livewire('frontend.components.nav') --}}
    </header>
    <!-- <nav>
        <a href="/login">login</a>
        <a href="/register">register</a>
    </nav> -->
    <main>
        <div class="loader"></div>
        @yield('content')
    </main>

    {{-- @livewire('frontend.components.footer') --}}

</body>

</html>
