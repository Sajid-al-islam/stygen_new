<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @csrf
    {{-- @dd($meta["title"] &&  $meta["title"] != "") --}}
    <title>{{ $meta["title"] ? $meta["title"] : 'Best online Gift Shop in Bangladesh | Stygen' }}</title>
    <meta property="og:title" content="{{$meta["title"] ? $meta["title"] : 'Buy gifts online for your loved ones | Stygen.gift'}}" />
    <meta property="og:site_name" content="{{$meta["site_name"]??'Stygen'}}" />
    <meta property="og:description" content="{{$meta["description"] ? $meta["description"] : 'Order and send gifts online to your friends & family for any occasion. Gifts delivery in Bangladesh. Flower, cake, perfume, chocolate, books home delivery.'}}" />
    <meta property="og:image" content="{{ $meta["image"] ? $meta["image"] : asset('assets/frontend/img/logo/stygen_image.jpg')}}" />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="400" />


    <meta name="twitter:title" content="{{$meta["title"] ? $meta["title"] : 'Buy gifts online for your loved ones | Stygen.gift'}}">
    <meta name="twitter:description" content="{{$meta["title"] ? $meta["title"] : 'Buy gifts online for your loved ones | Stygen.gift'}}">
    <meta name="twitter:image" content="{{ $meta["image"] ? $meta["image"] : asset('assets/frontend/img/logo/stygen_image.jpg')}}">
    <meta name="twitter:card" content="summary_large_image">

    <meta name="google-site-verification" content="f2GHJdIMv4beEoFnjRaawAc2PabeM26ElyJsNKVOeRo" />
    <meta name="robots" content="index, follow" />

    {{-- <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/bootstrap.min.css"> --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/animate.css">
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/owl.carousel.min.css">
    {{-- <link rel="stylesheet" href="/js/pace-theme-default.min.css"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('assets/frontend') }}/style.css"> --}}
    <link rel="stylesheet" href="{{ asset('assets/frontend') }}/css/style.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />

    <link rel="stylesheet" href="{{ asset('assets/frontend/css/custom_style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/frontend/css/responsive.css') }}">

    @livewireStyles
    <style>
        .container-slider {
            background: #cc99ff;
        }

        #sub_category_product {
            background: #cc99ff;
        }

        .addtocart {
            background-color: #5e2e87;
            font-size: 12px;
        }

        .addtocart i {
            margin-right: 5px;
            padding-left: 1px;
        }

        .detailsbtn {
            background-color: #5e2e87;
            color: white;
            font-size: 12px;
        }
        .checkout-loader {
            display: none;
            left: 50%;
            top: 50%;
            z-index: 999;
            position: absolute;
            width: 50px;
            padding: 8px;
            aspect-ratio: 1;
            border-radius: 50%;
            background: #573276;
            --_m:
                conic-gradient(#0000 10%,#000),
                linear-gradient(#000 0 0) content-box;
            -webkit-mask: var(--_m);
                    mask: var(--_m);
            -webkit-mask-composite: source-out;
                    mask-composite: subtract;
            animation: l3 1s infinite linear;
        }
            @keyframes l3 {to{transform: rotate(1turn)}}

        img.lazy {
            background-image: url('{{ asset('assets/frontend/img_loader.gif') }}');
            background-repeat: no-repeat;
            background-position: 50% 50%;
        }

    </style>
    <script src="/js/pace.min.js"></script>
    <script src="{{ asset('assets/frontend') }}/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="{{ asset('assets/frontend') }}/js/sweetalert.js"></script>
    <script src="{{ asset('assets/frontend') }}/js/owl.carousel.min.js"></script>
    <script src="{{ asset('assets/frontend') }}/js/custom.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js"></script>
    <script>
        $(function() {
            // console.log('lazy loading initialization');
            $('.lazy').lazy();
        });
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        window.toggleSidebar = () => {
            document.getElementById('left_navbar_dashboard').classList.toggle('active');
        }



        window.s_alert = (title = "success", icon = 'success') => {
            Toast.fire({
                icon,
                title
            })
        };
        window.s_confirm = async (title = "Are you sure?", confirmButtonText = 'Yes, do it!', icon = 'warning') => {
            let result = await Swal.fire({
                title,
                text: "",
                icon,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText
            })
            return result.isConfirmed ? true : false;
        }

    </script>
    <script src="{{ asset('assets/frontend') }}/js/cart_management.js" defer></script>
    {{-- <script src="{{ asset('assets/frontend') }}/js/jquery.lazy.min.js" defer></script> --}}
    @livewireScripts
    {{-- <script src="/js/turbolink.min.js"></script> --}}
    <script src="{{ asset('assets/frontend') }}/js/livewire_hook.js" defer></script>
    <script src="{{ asset('assets/frontend') }}/js/main.js" defer></script>
    @stack('custom-js')
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
