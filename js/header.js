const navigation = document.createElement('nav');
const navCont = document.createElement('div');
navCont.className = 'container';
const logoBox = document.createElement('div');
logoBox.className = 'logo';
const logoImg = document.createElement('img');
logoImg.src = '/img/md-logo.png';
logoBox.append(logoImg);
const heading4 = document.createElement('h4');
heading4.innerHTML = 'ОЮУН УХААНЫ<br>ХӨГЖЛИЙН АКАДЕМИ';
logoBox.append(heading4);
navCont.append(logoBox);
// logo click animation
logoBox.addEventListener('click', event => {
    const pages = document.querySelectorAll('main .content-container>div');
    if (pages.length > 1) {
        // change title
        document.querySelector('main .title h1').innerHTML = 'Жинхэн гишүүд';
        if (document.querySelector('main .title button') != undefined) document.querySelector('main .title button').remove();
        // show home page and remove others
        pages[0].style.display = null;
        for (let i = 1; i < pages.length; i++) pages[i].remove();
        // menu active class change
        document.querySelector('nav .menu .active').classList.remove('active');
        document.querySelector('nav .menu li:first-child').className = 'active';
    }
});
const menu = document.createElement('ul');
menu.className = 'menu';
const menuContents = ['Жинхэн гишүүд', 'Үйл ажиллагаа', 'Сургалт', 'Бидний тухай', 'Холбоо барих', 'EN'];
menuContents.forEach(item => {
    const list = document.createElement('li');
    list.textContent = item;
    menu.append(list);
    // menu click animation
    list.addEventListener('click', event => {
        document.body.scrollIntoView();
        if (event.target.textContent == menuContents[0]) {
            logoBox.click();
        } else if (event.target.textContent == menuContents[5]) {
            alert('it will jump to english page!');
        } else if (!event.target.classList.contains('active')) {
            // menu active class change
            document.querySelector('nav .menu .active').classList.remove('active');
            event.target.className = 'active';
            // hide home page and remove others
            const pages = document.querySelectorAll('main .content-container>div');
            pages[0].style.display = 'none';
            for (let i = 1; i < pages.length; i++) pages[i].remove();
            if (document.querySelector('main .title button') != undefined) document.querySelector('main .title button').remove();
            if (event.target.textContent == menuContents[1]) {
                // change title
                document.querySelector('main .title h1').innerHTML = 'Үйл ажиллагаа';
                // create service page
                const servicePg = document.createElement('div');
                document.querySelector('main .content-container').append(servicePg);
                servicePg.className = 'service-page';
                servicePg.innerHTML = `<img src="img/service-logo.png" class="service-logo"><p><strong style="text-transform: uppercase;">оюун ухааны хөгжлийн академи</strong> нь Монгол улсын хууль үндсэн хууль, Төрийн бус байгууллагын тухай хууль, Боловсрол шинжлэх ухааны тухай болон бусад хууль төгтоомжууды, Олон улсын холбогдох гэрээ, конвенц, эрх зүйн актууд, энэхүү үйл ажиллагааны удирдлага болгон Оюун ухааны хөгжлийн үндэсний бодлогыг боловсруулж, ашгийн төлөө бус, нийгэмд үйлчлэдэг Төрийн бус байгууллага мөн.</p><h3>бид дараах үйл ажиллагааг хэрэгжүүлж байна.</h3><div class="services"><div><div class="service-icon"><i class="fa-solid fa-network-wired"></i></div><p>Хамтын баталгаажуулалтын систем бүтээх</p></div><div><div class="service-icon"><i class="fa-solid fa-clipboard"></i></div><p>Оюун ухааны хөгжлийн үндэсний бодлогыг тодорхойлох</p></div><div><div class="service-icon"><i class="fa-solid fa-graduation-cap"></i></div><p>Сургалт явуулах</p></div><div><div class="service-icon"><i class="fa-solid fa-medal"></i></div><p>Өөрийн системээр олон улсад баталгаажсан цол зэрэг олгох</p></div><div><div class="service-icon"><i class="fa-solid fa-id-card"></i></div><p>Олон улсын хурал зохион байгуулах, төлөөллөө оролцуулах</p></div></div><h3>академийн үйл ажиллагааны чиглэл:</h3><ul><li>Оюун ухааны хөгжил бүхий хүн төрөлхтөн, шинэ Монгол улсын тусын тулд тодорхой амжилт гаргасан Монгол болон бусад орны иргэдийг Академийн гишүүнээр элсүүлж тэдний оюуны дамшлын генийг сэргээн цаашид судалгаа, шинжилгээ, бүтээн туурвих зэрэг ажлыг хийхэд нь туслана.</li><li>Монгол улсын оюун ухааны хөгжилд хувь нэмэр оруулсан буянт, оюунлаг хүмүүсийг үеийн үед (2005-3005 он) алдар гавъяаг нь мөнхжүүлэн алдаршуулж Оюуны оддыг төрүүлэх, улсаар шинэ Монгол улсыг удирдан жолоодоход чадвар бүхий иргэдийг төлөвшүүлэн хүмүүжүүлнэ.</li><li>Оюун ухааны хөгжил бүхий хүн төрөлхтөн, шинэ Монгол улсын тусын тулд тодорхой амжилт гаргасан Монгол болон бусад орны иргэдийг Академийн гишүүнээр элсүүлж тэдний оюуны дамшлын генийг сэргээн цаашид судалгаа, шинжилгээ, бүтээн туурвих зэрэг ажлыг хийхэд нь туслана.</li><li>Монгол улсын оюун ухааны хөгжилд хувь нэмэр оруулсан буянт, оюунлаг хүмүүсийг үеийн үед (2005-3005 он) алдар гавъяаг нь мөнхжүүлэн алдаршуулж Оюуны оддыг төрүүлэх, улсаар шинэ Монгол улсыг удирдан жолоодоход чадвар бүхий иргэдийг төлөвшүүлэн хүмүүжүүлнэ.</li><li>Оюун ухааны хөгжил бүхий хүн төрөлхтөн, шинэ Монгол улсын тусын тулд тодорхой амжилт гаргасан Монгол болон бусад орны иргэдийг Академийн гишүүнээр элсүүлж тэдний оюуны дамшлын генийг сэргээн цаашид судалгаа, шинжилгээ, бүтээн туурвих зэрэг ажлыг хийхэд нь туслана.</li><li>Монгол улсын оюун ухааны хөгжилд хувь нэмэр оруулсан буянт, оюунлаг хүмүүсийг үеийн үед (2005-3005 он) алдар гавъяаг нь мөнхжүүлэн алдаршуулж Оюуны оддыг төрүүлэх, улсаар шинэ Монгол улсыг удирдан жолоодоход чадвар бүхий иргэдийг төлөвшүүлэн хүмүүжүүлнэ.</li><li>Оюун ухааны хөгжил бүхий хүн төрөлхтөн, шинэ Монгол улсын тусын тулд тодорхой амжилт гаргасан Монгол болон бусад орны иргэдийг Академийн гишүүнээр элсүүлж тэдний оюуны дамшлын генийг сэргээн цаашид судалгаа, шинжилгээ, бүтээн туурвих зэрэг ажлыг хийхэд нь туслана.</li><li>Монгол улсын оюун ухааны хөгжилд хувь нэмэр оруулсан буянт, оюунлаг хүмүүсийг үеийн үед (2005-3005 он) алдар гавъяаг нь мөнхжүүлэн алдаршуулж Оюуны оддыг төрүүлэх, улсаар шинэ Монгол улсыг удирдан жолоодоход чадвар бүхий иргэдийг төлөвшүүлэн хүмүүжүүлнэ.</li><li>Оюун ухааны хөгжил бүхий хүн төрөлхтөн, шинэ Монгол улсын тусын тулд тодорхой амжилт гаргасан Монгол болон бусад орны иргэдийг Академийн гишүүнээр элсүүлж тэдний оюуны дамшлын генийг сэргээн цаашид судалгаа, шинжилгээ, бүтээн туурвих зэрэг ажлыг хийхэд нь туслана.</li><li>Монгол улсын оюун ухааны хөгжилд хувь нэмэр оруулсан буянт, оюунлаг хүмүүсийг үеийн үед (2005-3005 он) алдар гавъяаг нь мөнхжүүлэн алдаршуулж Оюуны оддыг төрүүлэх, улсаар шинэ Монгол улсыг удирдан жолоодоход чадвар бүхий иргэдийг төлөвшүүлэн хүмүүжүүлнэ.</li></ul>`;
            } else if (event.target.textContent == menuContents[2]) {
                // change title
                document.querySelector('main .title h1').innerHTML = 'Сургалтын хөтөлбөр';
                // create learn page
                const learnPg = document.createElement('div');
                document.querySelector('main .content-container').append(learnPg);
                learnPg.className = 'learn-page';
                fetch('json/video-list.json')
                    .then(res => res.json())
                    .then(data => {
                        // create video player
                        const div = document.createElement('div');
                        document.querySelector('.learn-page').append(div);
                        const video = document.createElement('video');
                        div.append(video);
                        video.setAttribute("controls", "");
                        // video.src = 'video/An1.mp4'
                        const videoContent = document.createElement('div');
                        div.append(videoContent);
                        videoContent.className = 'video-content';
                        const heading = document.createElement('h2');
                        videoContent.append(heading);
                        const videoChanger = document.createElement('div');
                        div.append(videoChanger);
                        videoChanger.className = 'video-changer';
                        videoChanger.innerHTML = `<button class="prev">«&nbsp&nbsp&nbsp&nbspӨмнөх</button><button class="next">Дараах&nbsp&nbsp&nbsp&nbsp»</button>`;
                        // create side-bar
                        const ul = document.createElement('ul');
                        document.querySelector('.learn-page').append(ul);
                        data.forEach(vid => {
                            const li = document.createElement('li');
                            ul.append(li);
                            li.innerHTML = `<i class="fa-solid fa-play"></i><img src="${vid.thumbnail}" alt="video-thumbnail"><p>${vid.name}</p>`;
                            li.addEventListener('click', event => {
                                if (!li.classList.contains('active')) {
                                    if (ul.querySelector('.active') != undefined) ul.querySelector('.active').classList.remove('active');
                                    li.className = 'active';
                                    video.src = vid.url;
                                    heading.textContent = vid.title;
                                    if (videoContent.querySelectorAll('p').length > 0) videoContent.querySelectorAll('p').forEach(p => p.remove());
                                    vid.pars.forEach(par => {
                                        const p = document.createElement('p');
                                        videoContent.append(p);
                                        p.textContent = par;
                                    });
                                }
                            });
                        });
                        ul.querySelector('li').click();
                    });
            } else if (event.target.textContent == menuContents[3]) {
                // change title
                document.querySelector('main .title h1').innerHTML = 'Бидний тухай';
                // create about page
                const aboutPg = document.createElement('div');
                document.querySelector('main .content-container').append(aboutPg);
                aboutPg.className = 'about-page';
                aboutPg.innerHTML = `<img src="img/about-logo.png" alt="about-logo"><p>Манай байгууллага нь далд ухамсараа хөгжүүлэгчдийг илрүүлэн бүртгэх судлах, хөгжүүлэх чиглэлээр ажилладаг хамтын баталгаажуулалтын систем бүхий "Оюун ухааны хөгжлийн академи" гэх нийгэмд үйлчилдэг ТББ юм.</p><ul><div class="vertical-line"><i class="fa-solid fa-play"></i></div><li><p>Оюун Ухааны Хөгжлийн академи нэртэйгээр ХУУЛЬ ЗҮЙ, ДОТООД ХЭРГИЙН сайдын тушаалаар улсын бүртгэлд бүртгэж гэрчилгээ олгов.</p></li><li><p>Амин чанар төв байгуулагдав.</p></li><li><p>Хасбуу хиймэр хүндэтгэлийн одонг бүртгүүлж патент авав.</p></li><li><p>Тэнгэрийн төр, Тэнгэрийн зарилаг номуудыг бүтээв.</p></li><li><p>Монголын төрт ёсны уламжлал сэдвээр 1000 хүүхдэд лекц уншлаа.</p></li><li><p>АНУ-н Сиэтл, БНСУ-н Сөүл, Бусан, БНХАУ-н Шилийн гол аймагт төлөөлөгчийн газрыг нээв.</p></li><li><p>Академийн жинхэн гишүүнээр Монгол, БНСУ, БНХАУ, Япон улсын 30 эрдэмтэн ажиллаж эхэллээ.</p></li><li><p>БНСУ-н Бусан хотод Ази, номхон далайн бүс нутаг хариуцсан төлөөлөгчийн газрыг байгуулав.</p></li><li><p>Дижитал шилжилтийг эхлүүлэв.</p></li></ul>`;
            } else if (event.target.textContent == menuContents[4]) {
                // change title
                document.querySelector('main .title h1').innerHTML = 'Холбоо барих';
                // create about page
                const contactPg = document.createElement('div');
                document.querySelector('main .content-container').append(contactPg);
                contactPg.className = 'contact-page';
                contactPg.innerHTML = `<ul class="contact-list"><li><div class="contact-icon"><i class="fa-solid fa-globe"></i></div><h3>minddevelopment.mn</h3></li><li><div class="contact-icon"><i class="fa-solid fa-envelope"></i></div><h3>info@minddevelopment.mn</h3></li><li><div class="contact-icon"><i class="fa-solid fa-phone"></i></div><h3>+976 7777 3377</h3></li><li><div class="contact-icon"><i class="fa-solid fa-headphones-simple"></i></div><h3>+976 9811 8814</h3></li></ul><div id="map"></div>`;
                initMap();
            };
        };
    });
});
navCont.append(menu);
navigation.append(navCont);
const headBgrd = document.createElement('div');
headBgrd.className = 'header-background';
document.body.prepend(headBgrd);
document.body.prepend(navigation);
document.querySelector('nav .menu li:first-child').className = 'active';
// Initialize and add the map
function initMap() {
    const location = { lat: 47.90941589848016, lng: 106.93042978011566 };
    // The map, centered at location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        center: location,
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}