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

    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/animate.css">
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/owl.carousel.min.css">
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/font-awesome.min.css">
    {{-- <link rel="stylesheet" href="/js/pace-theme-default.min.css"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('assets/frontend') }}/style.css"> --}}
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/responsive.css">
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/style.css">
    @livewireStyles

    <script src="/js/sweetalert.js"></script>
    <script src="/js/pace.min.js"></script>
    <script src="{{ asset('assets/frontend') }}/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="{{ asset('assets/frontend') }}/js/bootstrap.min.js"></script>
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
