const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer
        class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 p-5 mt-10 mx-auto max-w-7xl p-5">
        <div data-aos="fade-up" class="md:col-span-2 md:pr-16">
            <h2 class="md:text-4xl text-3xl text-zinc-800 font-semibold ">Andrew Haupt</h2>
            <p class="md:mt-5 mt-3 text-zinc-600">Your trusted partner for gardening and janitorial care — making your
                spaces shine, inside and out.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" class="second">
            <h2 class="text-2xl text-zinc-800 font-semibold">Quick Link</h2>
            <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/about.html">About us</a></li>
                <li><a href="/gallery.html">Gallery</a></li>
                <li><a href="/contact.html">Contact Us</a></li>
            </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" class="second">
            <h2 class="text-2xl text-zinc-800 font-semibold"> Others</h2>
            <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
                <li><a href="/privacy.html">Privacy Policy</a></li>
            </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" class="second">
            <h2 class="text-2xl text-zinc-800 font-semibold">Social Media</h2>
            <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
                <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://www.twitter.com/">Twitter</a></li>
            </ul>
        </div>
    </footer>

    <p class="text-center p-4 text-zinc-600 mt-5">
    Copyright © <span id="copyright"></span> Andrew Haupt. All rights reserved.
    </p>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year