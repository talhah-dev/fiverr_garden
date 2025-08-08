
const navbar = document.getElementById("navbar");
navbar.innerHTML = `
    <nav class="absolute top-0 left-0 w-full z-40">
        <div class="md:max-w-[85%] mx-auto flex justify-between items-center w-full lg:p-5 p-3 lg:h-28 h-20">
            <div class="flex w-full items-center justify-between gap-5">
                <a data-aos="fade-right" href="/index.html"
                    class="flex items-center text-zinc-800 font-semibold italic text-2xl justify-center lg:justify-start">
                    <img src="/docs/assets/images/logo.png" class="lg:h-24 h-20" alt="logo">
                </a>
                <div class="flex items-center gap-10">
                    <div class="lg:flex items-center gap-10 hidden">
                        <ul id="navbarLinks" data-aos="fade-left"
                            class="lg:flex text-lg hidden items-center text-zinc-200 gap-10">
                            <li><a href="/docs/languages/eng/index.html"
                                    class="hover:opacity-60 tracking-wide  transition-all duration-500">Home</a>
                            </li>
                            <li><a href="/docs/languages/eng/about.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">About Us</a>
                            </li>
                            <li><a href="/docs/languages/eng/gallery.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">Gallery</a>
                            </li>
                            <li><a href="/docs/languages/eng/contact.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-left" class="lg:flex hidden gap-3">
                
                <div class="flex items-center justify-center gap-6 relative">
               
                        <div id="language" class="cursor-pointer text-white flex items-center gap-1">
                            <i class="fa-solid fa-globe text-2xl"></i>
                            <span class="font-medium uppercase">EN</span>
                        </div>

                        <div id="langDropdown"
                            class="absolute fadeIn top-14 w-20 -left-2 glass p-3 rounded-xl shadow-md hidden">
                            <ul class="space-y-3">
                                <li class="cursor-pointer hover:opacity-60 transition-all duration-500"><a
                                        href="/index.html" class="block w-full">DE</a></li>
                                <li class="cursor-pointer hover:opacity-60 transition-all duration-500"><a
                                        href="docs/languages/eng/index.html" class="block w-full">EN</a></li>
                            </ul>
                        </div>

                         <a href="/docs/languages/eng/contact.html" class="bg-[#1f9c3c] text-white px-10 py-3.5 rounded-lg font-medium">Get
                    Started</a>
                        
                    </div>

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
                <li><a href="/docs/languages/eng/index.html"
                        class="hover:opacity-60 text-nowrap tracking-wide  transition-all duration-500">Home</a>
                </li>
                <li><a href="/docs/languages/eng/about.html"
                        class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">About Us</a>
                </li>
                <li><a href="/docs/languages/eng/gallery.html"
                        class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">Gallery</a>
                </li>
                <li><a href="/docs/languages/eng/contact.html"
                        class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">Contact Us</a>
                </li>
            </ul>
            <div class="flex mt-5 items-center gap-3">
                <a href="/docs/languages/eng/index.html"
                    class=" block border border-black bg-black text-white p-2 text-center rounded-lg w-full">ENG</a>
                <a href="/index.html" class="block border border-zinc-600 p-2 text-center rounded-lg w-full">DE</a>
            </div>
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


const languageToggle = document.getElementById('language');
const dropdown = document.getElementById('langDropdown');

languageToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent event from bubbling to body
    dropdown.classList.toggle('hidden');
});

// Hide dropdown if clicked outside
document.body.addEventListener('click', () => {
    dropdown.classList.add('hidden');
});

// Optional: Stop propagation if clicking inside dropdown
dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});