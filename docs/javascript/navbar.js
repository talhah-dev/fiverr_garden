
const navbar = document.getElementById("navbar");
navbar.innerHTML = `
    <nav class="absolute top-0 left-0 w-full z-40">
        <div class="md:max-w-[85%] mx-auto flex justify-between items-center w-full lg:p-5 p-3 lg:h-28 h-20">
            <div class="flex w-full items-center justify-between gap-5">
                <a data-aos="fade-right" href="/index.html" class="flex items-center text-zinc-800 font-semibold italic text-2xl justify-center lg:justify-start">
                     <img src="/docs/assets/images/logo.png" class="lg:h-24 h-20" alt="logo">
                </a>
                <div class="flex items-center gap-10">
                    <div class="lg:flex items-center gap-10 hidden">
                        <ul id="navbarLinks" data-aos="fade-left"
                            class="lg:flex text-lg hidden items-center text-zinc-200 gap-10">
                            <li><a href="/index.html"
                                    class="hover:opacity-60 tracking-wide  transition-all duration-500">Home</a>
                            </li>
                            <li><a href="/about.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">About Us</a>
                            </li>
                            <li><a href="/gallery.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">Gallery</a>
                            </li>
                            <li><a href="/contact.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-left" class="lg:flex hidden">
                    <a href="/contact.html" class="bg-[#1f9c3c] text-white px-10 py-3.5 rounded-lg font-medium">Get Started</a>
                </div>
                <i data-aos="fade-left" id="mobileMenuBtn"
                    class="fa-solid text-zinc-100 fa-bars lg:!hidden text-2xl cursor-pointer mr-2"></i>
            </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-white w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-zinc-800 text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 text-[#1D2939] flex-col gap-7">
                <li><a href="/index.html"
                        class="hover:opacity-60 text-nowrap tracking-wide  transition-all duration-500">Home</a>
                </li>
                <li><a href="/about.html"
                        class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">About Us</a>
                </li>
                <li><a href="/gallery.html"
                        class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">Gallery</a>
                </li>
                <li><a href="/contact.html"
                        class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="lg:h-24 h-20"></div>
`

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});