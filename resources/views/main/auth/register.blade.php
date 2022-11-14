@extends('templates.auth')
@section('title', 'Register - IT CLUB')
@section('main')
<body>
    <div id="app">
      <section class="section-login" style="bottom: 0%;">
        <div class="row">
          <div class="bg-login col-sm-6 min-vh-100 background-walk-y position-relative overlay-gradient-bottom" data-background="/public_file/assets/img/unsplash/login-bg.jpg">
              {{-- <img src="{{asset('home_page/img/bg-login.png')}}" alt=""> --}}
          </div>
          <div class="form-login col-sm-6">
              <div class="form-isi w-50">
                  <div class="welcome">
                      <h2>Selamat Datang, <br><span class="line-kuning">di IT Club</span> !</h2>
                      <p class="mt-3">We Can Change The Future!</p>
                      <form class="mt-3 form-content" method="POST" action="#" class="needs-validation" novalidate="" id="register">
                          <div class="input-group mb-3 shadow-sm">
                              <span class="input-group-text p-2 border-0" id="basic-addon1"><i
                                      class="fas fa-user"></i></span>
                              <input id="first_name" type="text" name="name" tabindex="1" required autofocus autocomplete class="form-control border-0 p-2" placeholder="Masukan Username"
                                  aria-label="Belajar mewarnai" aria-describedby="basic-addon1">
                          </div>
                          <div class="input-group mb-3 shadow-sm">
                              <span class="input-group-text p-2 border-0" id="basic-addon1"><i
                                      class="fas fa-envelope"></i></span>
                              <input id="username" type="text" name="username" tabindex="1" required autofocus autocomplete class="form-control border-0 p-2" placeholder="Masukan Email"
                                  aria-label="Belajar mewarnai" aria-describedby="basic-addon1">
                          </div>
                          <div class="input-group mb-3 shadow-sm">
                              <span class="input-group-text p-2 border-0" id="basic-addon1"><i
                                      class="fas fa-lock"></i></span>
                              <input input id="password" type="password" name="password" tabindex="2" required required class="form-control border-0 p-2" placeholder="Masukan Kata Sandi"
                                  aria-label="Belajar mewarnai" aria-describedby="basic-addon1">
                          </div>
                          <div class="input-group mb-3 shadow-sm">
                              <span class="input-group-text p-2 border-0" id="basic-addon1"><i
                                      class="fas fa-lock"></i></span>
                              <input input id="password" type="password" name="password" tabindex="2" required required class="form-control border-0 p-2" placeholder="Konfirmasi Kata Sandi"
                                  aria-label="Belajar mewarnai" aria-describedby="basic-addon1">
                          </div>
                          <button type="submit" class="btn btn-primary w-100">Register</button>
                        </form>
                        <p class="text-center mt-3">Sudah punya akun ? <a href="/auth/login">Login</a></p>
                  </div>
              </div>
          </div>
      </div>
      </section>
</div>

    @endsection
