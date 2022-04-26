const footer = document.createElement('footer');
document.body.append(footer);
footer.innerHTML = `<div class="container"><div class="about-section"><div><div class="logo"><img src="img/md-logo.png"><h4>ОЮУН УХААНЫ ХӨГЖЛИЙН АКАДЕМИ</h4><p>Хамтын баталгаажуулалтын платформ</p></div><div class="address"><h4>УЛААНБААТАР ХОТ, СҮХБААТАР ДҮҮРЭГ, 1-Р ХОРОО, НАРНЫ ЗАМ-62, ЮНЕ СКОГИЙН ГУДАМЖ, ЮНИОН БЮЛДИНГ</h4></div></div><div><ul class="links"><li>БИДНИЙ ТУХАЙ</li><li>ЖИНХЭН ГИШҮҮД ГЭЖ ХЭН БЭ?</li><li>МАНАЙ ҮЙЛ АЖИЛЛАГАА</li><li>СУРГАЛТ</li></ul></div><div class="contact"><h4>ХОЛБОО БАРИХ</h4><p>Цахим хаяг: minddevelopment.mn<br>Цахим шуудан: info@minddevelopment.mn<br>Утас: +976 7777 3377<br>Ажилттантай холбогдох: +976 9611 8814</p></div></div><div class="footer"><p>Тооцооны загварыг хамтран бүтээсэн MEDIATOR.MN</p><p>© Зохиогчийн эрхийн хуулиар хамгаалсан. 2022 он</p></div></div>`;
const footLinks = document.querySelectorAll('footer .links li');
const headBtns = document.querySelectorAll('nav .menu li');
footLinks[0].addEventListener('click', () => {
    if (!headBtns[3].classList.contains('active')) headBtns[3].click()
});
footLinks[1].addEventListener('click', event => {
    // mpve to top
    document.body.scrollIntoView();
    // change title
    document.querySelector('main .title h1').innerHTML = event.target.textContent;
    // hide home page and remove others
    const pages = document.querySelectorAll('main .content-container>div');
    pages[0].style.display = 'none';
    for (let i = 1; i < pages.length; i++) pages[i].remove();
    // home button active class add
    headBtns.forEach(b => b.classList.remove('active'));
    headBtns[0].classList.add('active');
    // create about member page
    const pg = document.createElement('div');
    document.querySelector('main .content-container').append(pg);
    pg.className = 'about-member';
    pg.innerHTML = `<div><ul class="table"><li><h3>Мэргэжил</h3><p>Оюун ухаан хөгжүүлэгч</p></li><li><h3>Элсэгч</h3><p>Нээлттэй</p></li><li><h3>Сургалтын хэлбэр</h3><p>Онлайн</p></li></ul><h3>Оюун Ухааны Хөгжлийн Академид суралцаж төгссөн сонсогч нь төрийн болон төрийн бус бүх байгууллагад ажиллах болон удирдах, хувийн бизнесээ хөгжүүлэх мэдлэг, чадвар, дадлага эзэмшсэн байхын зэрэгцээ дор дурдсан нийтлэг шаардлагыгхангасан байна:</h3><ul class="req"><li>Оюун ухааны хөгжүүлэгч дипломын боловсролтой байх,</li><li>Хүн төрөлхтөний гарал үүсэл, жам ёсны хөгжлийн мөн чанарыг судалж мэдсэн, Монгол ард түмний уламжлалт зан заншил, үндэсний бахархлыг хүндэтгэдэг, эх орноо хайрлах үзэл төлөвшсөн, өөрийгөө танин мэдэхэд боловсорсон бөгөөд хүнийоюун ухааны хөгжүүлэх, өөрийг нь танин мэдүүлэх чин сэтгэлээсээ эрмэлзэгч байх,</li><li>Албан болон хувийн үйл хэргээ жам ёсны болон хууль ёсны хүрээнд хөтлөх чадвартай байх,</li><li>Биеийн, оюуны, сэтгэлийн, сэтгэлгээний, харилцааны цогц боловсролын мөн чанар, харилцан хамаарал, шүтэлцээг жинхэн утгаар нь амьдралд бодитой хэрэгжүүлэх чадвартай байх,</li><li>Алба, хувийн үйлсэд үлгэрлэн манлайлах, чиглүүлэн удирдах чадвартай байх,</li><li>Улс төр, нийгмийн хувьсал өөрчлөлтийг түрүүлж мэдэрдэг, гарах эрсдлээс урьдчилан сэргийлдэг, гарсан үед нь зөв гарцыг оновчтой сонгодог чадвартай байхын зэрэгцээ энэ чадвараа бусдад эзэмшүүлэхийн төлөө эрмэлздэг байх.</li></ul></div><div><img src="img/name-card.png" alt="id-card"></div>`;
    // back button
    if (document.querySelector('main .title button') != undefined) document.querySelector('main .title button').remove();
    const btn = document.createElement('button');
    document.querySelector('main .title').prepend(btn);
    btn.textContent = '⟵';
    // back button animation
    btn.addEventListener('click', event => {
        btn.remove();
        document.querySelector('main .title h1').innerHTML = 'Жинхэн гишүүд';
        document.querySelector('main .home-page').style.display = null;
        pg.remove();
    });
});
footLinks[2].addEventListener('click', () => {
    if (!headBtns[1].classList.contains('active')) headBtns[1].click()
});
footLinks[3].addEventListener('click', () => {
    if (!headBtns[2].classList.contains('active')) headBtns[2].click()
});