let data = []
fetch('json/members.json')
    .then(res => res.json())
    .then(members => {
        data = members;
        callMems(data);
        return data;
    });
// pagination
let filterBy = 6;
let btnIndex = 0;
const pgi = () => {
    'use strict'
    const allActive = document.querySelectorAll('main .home-page .main-body .items .active');
    document.querySelector('main .home-page .main-body .pagination .index').innerHTML = '';
    if (allActive.length > filterBy) {
        document.querySelector('main .home-page .main-body .pagination').style.display = null;
        allActive.forEach(item => item.style.display = 'none');
        for (let i = btnIndex; i < btnIndex + filterBy; i++) { allActive[i].style.display = null }
        for (let i = 0; i < Math.ceil(allActive.length / filterBy); i++) {
            const btn = document.createElement('button');
            if (i == 0) {
                document.querySelector('main .home-page .main-body .pagination .index').append(btn);
                const p = document.createElement('p');
                p.textContent = '...';
                document.querySelector('main .home-page .main-body .pagination .index').append(p);
            } else if (i == Math.ceil(allActive.length / filterBy) - 1) {
                const p = document.createElement('p');
                p.textContent = '...';
                document.querySelector('main .home-page .main-body .pagination .index').append(p);
                document.querySelector('main .home-page .main-body .pagination .index').append(btn);
            } else {
                document.querySelector('main .home-page .main-body .pagination .index').append(btn);
            };
            btn.textContent = i + 1;
            document.querySelector('main .home-page .main-body .pagination .index button:first-child').classList.add('active');
            btn.addEventListener('click', event => {
                btnIndex = Number(event.target.textContent) - 1;
                document.querySelector('.pagination .active').classList.remove('active');
                event.target.classList.add('active');
                allActive.forEach(item => item.style.display = 'none');
                for (let i = btnIndex * filterBy; i < btnIndex * filterBy + filterBy; i++)
                    if (i < allActive.length) allActive[i].style.display = null;
                const btns = document.querySelectorAll('main .home-page .main-body .pagination .index button');
                btnCollapse();
            });
        };
        btnCollapse();
        document.querySelector('.left-arrow').addEventListener('click', event => pagiSlide('-'));
        document.querySelector('.right-arrow').addEventListener('click', event => pagiSlide('+'));
    } else {
        document.querySelector('main .home-page .main-body .pagination').style.display = 'none';
        allActive.forEach(item => item.style.display = null);
    };
};
// Button collapse
const btnCollapse = () => {
    const btns = document.querySelectorAll('main .home-page .main-body .pagination .index button');
    if (btns.length > 4) {
        btns.forEach(item => item.style.display = 'none')
        const pEl = document.querySelectorAll('.index p')
        pEl.forEach(p => p.style.display = 'none');
        if (btns[0].classList.contains('active')) {
            btns[1].style.display = null;
            pEl[1].style.display = null;
        } else if (btns[btns.length - 1].classList.contains('active')) {
            btns[btns.length - 2].style.display = null;
            pEl[0].style.display = null;
        } else {
            for (let i = 1; i < btns.length - 1; i++) {
                if (btns[i].classList.contains('active')) {
                    btns[i - 1].style.display = null;
                    btns[i].style.display = null;
                    btns[i + 1].style.display = null;
                    if (i < 3) {
                        pEl[0].style.display = 'none';
                    } else {
                        pEl[0].style.display = null;
                    }
                    if (i > btns.length - 4) {
                        pEl[1].style.display = 'none';
                    } else {
                        pEl[1].style.display = null;
                    };
                };
            };
        };
        btns[0].style.display = null;
        btns[btns.length - 1].style.display = null;
    } else {
        document.querySelectorAll('.index p').forEach(item => item.style.display = 'none');
    };
};
// arrow button animation
const pagiSlide = (op) => {
    const btns = document.querySelectorAll('main .home-page .main-body .pagination .index button');
    btnIndex = eval(btnIndex + op + 1);
    btnIndex < 0 ? btnIndex = 0 : btnIndex >= btns.length ? btnIndex = btns.length - 1 : btns[btnIndex].click();
};
// print Members
const callMems = (members) => {
    let allCategory = [];
    document.querySelector('main .home-page .items').innerHTML = '';
    members.forEach(member => {
        const item = document.createElement('div');
        document.querySelector('main .home-page .items').append(item);
        item.className = `item ${member.category} active`;
        item.innerHTML = `<img src="${member.img}" alt="portrait" class="portrait"><h3>${member.lastName} <strong style="text-transform: uppercase;">${member.firstName}</strong></h3><p>${member.category} (<span>${member.subCategory}</span>)</p><h6>${member.type}</h6><div class="icon"><div class="icon-con"><i class="fa-solid fa-brain"></i></div><span class="flag">🇲🇳</span></div>`;
        // show more Member info
        item.addEventListener('click', event => {
            document.body.scrollIntoView();
            // hide home page
            document.querySelector('main .home-page').style.display = 'none';
            // change title
            document.querySelector('main .title h1').innerHTML = `${member.lastName} <strong style="text-transform: uppercase">${member.firstName}</strong>`;
            // create back button
            if (document.querySelector('main .title button') != undefined) { document.querySelector('main .title button').style.display = 'none'; };
            const backBtn = document.createElement('button');
            backBtn.textContent = '⟵';
            document.querySelector('main .title').prepend(backBtn);
            // back button animation
            backBtn.addEventListener('click', event => {
                backBtn.remove();
                if (document.querySelector('main .title button') != undefined) { document.querySelector('main .title button').style.display = null; };
                document.querySelector('main .title h1').innerHTML = 'Жинхэн гишүүд';
                document.querySelector('main .home-page').style.display = null;
                profilePage.remove();
            });
            // create profile page
            const profilePage = document.createElement('div');
            document.querySelector('main .content-container').append(profilePage);
            profilePage.className = 'profile-page';
            profilePage.innerHTML = `<div class="side-bar"><div class="portrait"><img src="${member.img}" alt="portrait"><div class="icon"><div class="icon-con"><i class="fa-solid fa-brain"></i></div><span class="flag">🇲🇳</span></div></div><div class="name-card"><h3>${member.lastName} <strong style="text-transform: uppercase;">${member.firstName}</strong></h3><p>${member.category} (<span>${member.subCategory}</span>)</p><h6 style="text-transform: uppercase;">${member.type}</h6></div><h3>QR кодыг уншуулан гишүүнтэй холбогдоно уу.</h3><div class="qr-code"><img src="${member.qrCode}" alt="qr-code" width="100%"></div></div><div class="main"><div class="counter"><div><p>ҮЙЛЧЛҮҮЛЭГЧИЙН ТОО:</p><h1><strong>${member.customers}</strong></h1></div><div><p>ОРОЛЦООНЫ ҮНЭЛГЭЭ:</p><h1><strong>${member.partRate}%</strong></h1></div><div><p>БАЙГУУЛЛАГАД ХАРЪЯАЛАГДДАГ:</p><h1><strong>${member.concern}%</strong></h1></div></div><div class="presentation"><h1>${member.lastName} <span style="text-transform: uppercase">${member.firstName}</span></h1><p>${member.position}</p><div class="divider"></div><h1>ТАНИЛЦУУЛАГА</h1><p>${member.description}</p><div class="certificates"></div></div></div>`;
            if (member.certificate.length > 0) {
                member.certificate.forEach(item => {
                    const certificate = document.createElement('img');
                    document.querySelector('main .profile-page .presentation .certificates').append(certificate);
                    certificate.src = item;
                });
            };
        });
        // collect category
        if (!allCategory.includes(member.category)) allCategory.push(member.category);
    });
    // print Categories
    allCategory.sort();
    document.querySelector('main .home-page .sub-category').innerHTML = '';
    allCategory.forEach(item => {
        const l = document.createElement('li');
        document.querySelector('main .home-page .sub-category').append(l);
        l.textContent = item;
        l.className = 'active';
        l.addEventListener('click', event => {
            l.classList.toggle('active');
            l.classList.contains('active') ? document.querySelectorAll(`.${l.textContent}`).forEach(el => el.classList.add('active')) : document.querySelectorAll(`.${l.textContent}`).forEach(el => el.classList.remove('active'));
            if (document.querySelector('.sub-category').getElementsByClassName('active').length == allCategory.length) {
                document.querySelector('main .home-page .side-bar .category>li:first-child').classList.add('active');
                document.querySelector('main .home-page .side-bar .category>li:first-child').textContent = 'Бүгдийг арилгах';
            } else {
                document.querySelector('main .home-page .side-bar .category>li:first-child').classList.remove('active');
                document.querySelector('main .home-page .side-bar .category>li:first-child').textContent = 'Бүгдийг харах';
            }
            pgi();
        })
    });
    // click show all selection animantion. Select all categories or disselect all categories
    document.querySelector('.category>li:first-child').addEventListener('click', event => {
        event.target.classList.toggle('active');
        // show or hide all members, change textContent
        if (event.target.classList.contains('active')) {
            document.querySelectorAll('main .home-page .items .item').forEach(el => el.classList.add('active'));
            document.querySelectorAll('.sub-category li').forEach(item => item.classList.add('active'))
            event.target.textContent = 'Бүгдийг арилгах';
        } else {
            document.querySelectorAll('main .home-page .items .item').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.sub-category li').forEach(item => item.classList.remove('active'))
            event.target.textContent = 'Бүгдийг харах';
        };
        pgi();
    });
    pgi();
};
// Search
searchBtn.addEventListener('click', (event) => {
    if (searchBar.value != '') {
        const result = [];
        const sVal = searchBar.value.toLowerCase().split(' ');
        if (sVal.length > 0) {
            data.forEach(member => { sVal.forEach(word => { if (member.firstName.toLowerCase().indexOf(word) > -1) { result.push(member); }; }); });
            // run call members
            if (result.length > 0) {
                callMems(result);
                document.body.scrollIntoView();
                // change title
                document.querySelector('main .title h1').innerHTML = 'Хайлт';
                // create back button
                const backBtn = document.createElement('button');
                backBtn.textContent = '⟵';
                document.querySelector('main .title').prepend(backBtn);
                // back button animation
                backBtn.addEventListener('click', event => {
                    backBtn.remove();
                    document.querySelector('main .title h1').innerHTML = 'Жинхэн гишүүд';
                    callMems(data);
                    searchBar.value = '';
                });
            } else {
                const alrt = document.createElement('div')
                document.body.append(alrt)
                alrt.textContent = 'Илэрц олдсонгүй!'
                alrt.className = 'search-alert';
                setTimeout(event => { alrt.remove() }, 5000);
                searchBar.value = '';
            };
        };
    };
});
searchBar.addEventListener('keypress', event => { if (event.key == 'Enter') { searchBtn.click() }; });