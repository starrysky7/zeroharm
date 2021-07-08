function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

// window.addEventListener('scroll', (e) => { anim(e); animeNav(e);  })


const tl1 = anime.timeline({ autoplay: false })
const tl2 = anime.timeline({ autoplay: false })
const tl3 = anime.timeline({ autoplay: false })
const tl4 = anime.timeline({ autoplay: false })


tl1.add({
    targets: '#outer-circle',
    rotate: '360deg',
    easing: 'linear',
})
tl2.add({
    targets: '#center-circle',
    rotate: '-360deg',
    easing: 'linear',
})
tl3.add({
    targets: '#inner-circle',
    rotate: '360deg',
    easing: 'linear',
})

tl4.add({
    targets:'.section-2',
    'background-position-x':'20%',
    'background-position-y':'70%',
})

window.addEventListener('scroll', (e) => {
    anim(e)
    tl1.seek(tl1.duration * (getScrollPercent() * 0.01))
    tl2.seek(tl2.duration * (getScrollPercent() * 0.01))
    tl3.seek(tl3.duration * (getScrollPercent() * 0.01))
    tl4.seek(tl4.duration * (getScrollPercent() * 0.02))
})


function anim(e) {
    console.log(getScrollPercent())


    //s1
    // if (getScrollPercent() > 0 && getScrollPercent() < 0.1094472050456983) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-1')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 0.1094472050456983 && getScrollPercent() < 0.2188944100913966) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-2')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 0.2188944100913966 && getScrollPercent() < 0.3283416151370949) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-3')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 0.3283416151370949 && getScrollPercent() < 0.4377888201827932) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-4')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 0.4377888201827932 && getScrollPercent() < 0.5472360252284915) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-5')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 0.5472360252284915 && getScrollPercent() < 0.6566832302741897) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-6')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 0.6566832302741897 && getScrollPercent() < 0.766130435319888) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-7')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 0.766130435319888 && getScrollPercent() < 0.8755776403655863) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-8')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 0.8755776403655863 && getScrollPercent() < 0.9850248454112845) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-9')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 0.9850248454112845 && getScrollPercent() < 1.094472050456983) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-10')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 1.094472050456983 && getScrollPercent() < 1.2039192555026812) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-11')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 1.2039192555026812 && getScrollPercent() < 1.3133664605483795) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-12')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 1.3133664605483795 && getScrollPercent() < 1.4228136655940777) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-13')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 1.4228136655940777 && getScrollPercent() < 1.532260870639776) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-14')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 1.532260870639776 && getScrollPercent() < 1.6417080756854743) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-15')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 1.6417080756854743 && getScrollPercent() < 1.7511552807311725) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-16')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 1.7511552807311725 && getScrollPercent() < 1.8606024857768708) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-17')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 1.8606024857768708 && getScrollPercent() < 1.970049690822569) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-18')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 1.970049690822569 && getScrollPercent() < 2.0794968958682674) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-19')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 2.0794968958682674 && getScrollPercent() < 2.188944100913966) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-20')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 2.188944100913966 && getScrollPercent() < 2.2983913059596643) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-21')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 2.2983913059596643 && getScrollPercent() < 2.407838511005363) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-22')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 2.407838511005363 && getScrollPercent() < 2.5172857160510613) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-23')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 2.5172857160510613 && getScrollPercent() < 2.62673292109676) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-24')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 2.62673292109676 && getScrollPercent() < 2.7361801261424583) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-25')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 2.7361801261424583 && getScrollPercent() < 2.845627331188157) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-26')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 2.845627331188157 && getScrollPercent() < 2.9550745362338553) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-27')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 2.9550745362338553 && getScrollPercent() < 3.064521741279554) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-28')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 3.064521741279554 && getScrollPercent() < 3.1739689463252523) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-29')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 3.1739689463252523 && getScrollPercent() < 3.2834161513709508) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-30')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 3.2834161513709508 && getScrollPercent() < 3.3928633564166493) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-31')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 3.3928633564166493 && getScrollPercent() < 3.5023105614623478) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-32')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 3.5023105614623478 && getScrollPercent() < 3.6117577665080463) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-33')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 3.6117577665080463 && getScrollPercent() < 3.7212049715537447) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-34')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 3.7212049715537447 && getScrollPercent() < 3.8306521765994432) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-35')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 3.8306521765994432 && getScrollPercent() < 3.9400993816451417) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-36')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 3.9400993816451417 && getScrollPercent() < 4.04954658669084) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-37')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 4.04954658669084 && getScrollPercent() < 4.158993791736538) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-38')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 4.158993791736538 && getScrollPercent() < 4.268440996782236) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-39')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 4.268440996782236 && getScrollPercent() < 4.377888201827934) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-40')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 4.377888201827934 && getScrollPercent() < 4.487335406873632) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-41')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 4.487335406873632 && getScrollPercent() < 4.5967826119193305) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-42')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 4.5967826119193305 && getScrollPercent() < 4.7062298169650285) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-43')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 4.7062298169650285 && getScrollPercent() < 4.815677022010727) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-44')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 4.815677022010727 && getScrollPercent() < 4.925124227056425) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-45')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 4.925124227056425 && getScrollPercent() < 5.034571432102123) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-46')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 5.034571432102123 && getScrollPercent() < 5.144018637147821) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-47')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 5.144018637147821 && getScrollPercent() < 5.253465842193519) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-48')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 5.253465842193519 && getScrollPercent() < 5.362913047239217) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-49')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 5.362913047239217 && getScrollPercent() < 5.472360252284915) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-50')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 5.472360252284915 && getScrollPercent() < 5.581807457330613) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-51')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 5.581807457330613 && getScrollPercent() < 5.691254662376311) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-52')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 5.691254662376311 && getScrollPercent() < 5.800701867422009) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-53')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 5.800701867422009 && getScrollPercent() < 5.910149072467707) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-54')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 5.910149072467707 && getScrollPercent() < 6.019596277513405) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-55')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 6.019596277513405 && getScrollPercent() < 6.129043482559103) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-56')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 6.129043482559103 && getScrollPercent() < 6.238490687604801) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-57')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 6.238490687604801 && getScrollPercent() < 6.347937892650499) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-58')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 6.347937892650499 && getScrollPercent() < 6.457385097696197) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-59')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 6.457385097696197 && getScrollPercent() < 6.566832302741895) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-60')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 6.566832302741895 && getScrollPercent() < 6.676279507787593) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-61')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 6.676279507787593 && getScrollPercent() < 6.785726712833291) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-62')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 6.785726712833291 && getScrollPercent() < 6.8951739178789895) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-63')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 6.8951739178789895 && getScrollPercent() < 7.0046211229246875) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-64')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.0046211229246875 && getScrollPercent() < 7.114068327970386) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-65')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.114068327970386 && getScrollPercent() < 7.223515533016084) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-66')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.223515533016084 && getScrollPercent() < 7.332962738061782) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-67')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.332962738061782 && getScrollPercent() < 7.44240994310748) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-68')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.44240994310748 && getScrollPercent() < 7.551857148153178) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-69')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.551857148153178 && getScrollPercent() < 7.661304353198876) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-70')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.661304353198876 && getScrollPercent() < 7.770751558244574) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-71')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.770751558244574 && getScrollPercent() < 7.880198763290272) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-72')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.880198763290272 && getScrollPercent() < 7.98964596833597) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-73')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 7.98964596833597 && getScrollPercent() < 8.099093173381668) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-74')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 8.099093173381668 && getScrollPercent() < 8.208540378427367) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-75')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 8.208540378427367 && getScrollPercent() < 8.317987583473066) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-76')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 8.317987583473066 && getScrollPercent() < 8.427434788518765) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-77')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 8.427434788518765 && getScrollPercent() < 8.536881993564464) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-78')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 8.536881993564464 && getScrollPercent() < 8.646329198610163) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-79')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 8.646329198610163 && getScrollPercent() < 8.755776403655862) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-80')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 8.755776403655862 && getScrollPercent() < 8.86522360870156) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-81')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 8.86522360870156 && getScrollPercent() < 8.97467081374726) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-82')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 8.97467081374726 && getScrollPercent() < 9.084118018792958) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-83')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 9.084118018792958 && getScrollPercent() < 9.193565223838657) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-84')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 9.193565223838657 && getScrollPercent() < 9.303012428884356) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-85')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 9.303012428884356 && getScrollPercent() < 9.412459633930055) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-86')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 9.412459633930055 && getScrollPercent() < 9.521906838975754) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-87')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 9.521906838975754 && getScrollPercent() < 9.631354044021453) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-88')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 9.631354044021453 && getScrollPercent() < 9.740801249067152) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-89')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 9.740801249067152 && getScrollPercent() < 9.850248454112851) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-90')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 9.850248454112851 && getScrollPercent() < 9.95969565915855) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-91')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 9.95969565915855 && getScrollPercent() < 10.069142864204249) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-92')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 10.069142864204249 && getScrollPercent() < 10.178590069249948) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-93')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 10.178590069249948 && getScrollPercent() < 10.288037274295647) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-94')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 10.288037274295647 && getScrollPercent() < 10.397484479341346) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-95')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 10.397484479341346 && getScrollPercent() < 10.506931684387045) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-96')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 10.506931684387045 && getScrollPercent() < 10.616378889432744) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-97')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 10.616378889432744 && getScrollPercent() < 10.725826094478442) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-98')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 10.725826094478442 && getScrollPercent() < 10.835273299524141) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-99')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 10.835273299524141 && getScrollPercent() < 10.94472050456984) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-100')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 10.94472050456984 && getScrollPercent() < 11.05416770961554) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-101')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 11.05416770961554 && getScrollPercent() < 11.163614914661238) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-102')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 11.163614914661238 && getScrollPercent() < 11.273062119706937) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-103')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 11.273062119706937 && getScrollPercent() < 11.382509324752636) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-104')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 11.382509324752636 && getScrollPercent() < 11.491956529798335) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-105')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 11.491956529798335 && getScrollPercent() < 11.601403734844034) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-106')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 11.601403734844034 && getScrollPercent() < 11.710850939889733) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-107')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 11.710850939889733 && getScrollPercent() < 11.820298144935432) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-108')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 11.820298144935432 && getScrollPercent() < 11.92974534998113) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-109')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 11.92974534998113 && getScrollPercent() < 12.03919255502683) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-110')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 12.03919255502683 && getScrollPercent() < 12.148639760072529) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-111')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 12.148639760072529 && getScrollPercent() < 12.258086965118228) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-112')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 12.258086965118228 && getScrollPercent() < 12.367534170163927) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-113')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 12.367534170163927 && getScrollPercent() < 12.476981375209625) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-114')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 12.476981375209625 && getScrollPercent() < 12.586428580255324) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-115')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 12.586428580255324 && getScrollPercent() < 12.695875785301023) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-116')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 12.695875785301023 && getScrollPercent() < 12.805322990346722) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-117')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 12.805322990346722 && getScrollPercent() < 12.914770195392421) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-118')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 12.914770195392421 && getScrollPercent() < 13.02421740043812) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-119')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 13.02421740043812 && getScrollPercent() < 13.133664605483819) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-120')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 13.133664605483819 && getScrollPercent() < 13.243111810529518) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-121')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 13.243111810529518 && getScrollPercent() < 13.352559015575217) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-122')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 13.352559015575217 && getScrollPercent() < 13.462006220620916) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-123')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 13.462006220620916 && getScrollPercent() < 13.571453425666615) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-124')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 13.571453425666615 && getScrollPercent() < 13.680900630712314) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-125')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 13.680900630712314 && getScrollPercent() < 13.790347835758013) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-126')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 13.790347835758013 && getScrollPercent() < 13.899795040803712) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-127')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 13.899795040803712 && getScrollPercent() < 14.00924224584941) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-128')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.00924224584941 && getScrollPercent() < 14.11868945089511) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-129')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.11868945089511 && getScrollPercent() < 14.228136655940808) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-130')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.228136655940808 && getScrollPercent() < 14.337583860986507) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-131')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.337583860986507 && getScrollPercent() < 14.447031066032206) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-132')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.447031066032206 && getScrollPercent() < 14.556478271077905) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-133')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.556478271077905 && getScrollPercent() < 14.665925476123604) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-134')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.665925476123604 && getScrollPercent() < 14.775372681169303) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-135')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.775372681169303 && getScrollPercent() < 14.884819886215002) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-136')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.884819886215002 && getScrollPercent() < 14.994267091260701) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-137')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 14.994267091260701 && getScrollPercent() < 15.1037142963064) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-138')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 15.1037142963064 && getScrollPercent() < 15.213161501352099) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-139')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 15.213161501352099 && getScrollPercent() < 15.322608706397798) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-140')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 15.322608706397798 && getScrollPercent() < 15.432055911443497) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-141')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 15.432055911443497 && getScrollPercent() < 15.541503116489196) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-142')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 15.541503116489196 && getScrollPercent() < 15.650950321534895) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-143')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 15.650950321534895 && getScrollPercent() < 15.760397526580594) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-144')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 15.760397526580594 && getScrollPercent() < 15.869844731626292) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-145')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 15.869844731626292 && getScrollPercent() < 15.979291936671991) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-146')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 15.979291936671991 && getScrollPercent() < 16.08873914171769) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-147')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 16.08873914171769 && getScrollPercent() < 16.198186346763386) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-148')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 16.198186346763386 && getScrollPercent() < 16.307633551809083) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-149')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 16.307633551809083 && getScrollPercent() < 16.41708075685478) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-150')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 16.41708075685478 && getScrollPercent() < 16.526527961900477) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-151')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 16.526527961900477 && getScrollPercent() < 16.635975166946174) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-152')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 16.635975166946174 && getScrollPercent() < 16.74542237199187) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-153')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 16.74542237199187 && getScrollPercent() < 16.85486957703757) {
    //     for (var i = 1; i < 155; i++) {
    //         document.getElementsByClassName('section-2-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-2-img-154')[0].classList.add('show')
    // }




    // //s2
    // if (getScrollPercent() > 8.55881354013359 && getScrollPercent() < 8.750230563989245) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-1')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 8.750230563989245 && getScrollPercent() < 8.9416475878449) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-2')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 8.9416475878449 && getScrollPercent() < 9.133064611700554) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-3')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 9.133064611700554 && getScrollPercent() < 9.324481635556209) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-4')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 9.324481635556209 && getScrollPercent() < 9.515898659411864) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-5')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 9.515898659411864 && getScrollPercent() < 9.707315683267518) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-6')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 9.707315683267518 && getScrollPercent() < 9.898732707123173) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-7')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 9.898732707123173 && getScrollPercent() < 10.090149730978828) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-8')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 10.090149730978828 && getScrollPercent() < 10.281566754834483) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-9')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 10.281566754834483 && getScrollPercent() < 10.472983778690137) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-10')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 10.472983778690137 && getScrollPercent() < 10.664400802545792) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-11')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 10.664400802545792 && getScrollPercent() < 10.855817826401447) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-12')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 10.855817826401447 && getScrollPercent() < 11.047234850257102) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-13')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 11.047234850257102 && getScrollPercent() < 11.238651874112756) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-14')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 11.238651874112756 && getScrollPercent() < 11.430068897968411) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-15')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 11.430068897968411 && getScrollPercent() < 11.621485921824066) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-16')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 11.621485921824066 && getScrollPercent() < 11.81290294567972) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-17')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 11.81290294567972 && getScrollPercent() < 12.004319969535375) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-18')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 12.004319969535375 && getScrollPercent() < 12.19573699339103) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-19')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 12.19573699339103 && getScrollPercent() < 12.387154017246685) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-20')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 12.387154017246685 && getScrollPercent() < 12.57857104110234) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-21')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 12.57857104110234 && getScrollPercent() < 12.769988064957994) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-22')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 12.769988064957994 && getScrollPercent() < 12.961405088813649) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-23')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 12.961405088813649 && getScrollPercent() < 13.152822112669304) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-24')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 13.152822112669304 && getScrollPercent() < 13.344239136524958) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-25')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 13.344239136524958 && getScrollPercent() < 13.535656160380613) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-26')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 13.535656160380613 && getScrollPercent() < 13.727073184236268) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-27')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 13.727073184236268 && getScrollPercent() < 13.918490208091923) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-28')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 13.918490208091923 && getScrollPercent() < 14.109907231947577) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-29')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 14.109907231947577 && getScrollPercent() < 14.301324255803232) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-30')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 14.301324255803232 && getScrollPercent() < 14.492741279658887) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-31')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 14.492741279658887 && getScrollPercent() < 14.684158303514542) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-32')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 14.684158303514542 && getScrollPercent() < 14.875575327370196) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-33')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 14.875575327370196 && getScrollPercent() < 15.066992351225851) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-34')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 15.066992351225851 && getScrollPercent() < 15.258409375081506) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-35')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 15.258409375081506 && getScrollPercent() < 15.44982639893716) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-36')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 15.44982639893716 && getScrollPercent() < 15.641243422792815) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-37')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 15.641243422792815 && getScrollPercent() < 15.83266044664847) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-38')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 15.83266044664847 && getScrollPercent() < 16.024077470504125) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-39')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 16.024077470504125 && getScrollPercent() < 16.215494494359778) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-40')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 16.215494494359778 && getScrollPercent() < 16.40691151821543) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-41')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 16.40691151821543 && getScrollPercent() < 16.598328542071084) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-42')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 16.598328542071084 && getScrollPercent() < 16.789745565926737) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-43')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 16.789745565926737 && getScrollPercent() < 16.98116258978239) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-44')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 16.98116258978239 && getScrollPercent() < 17.172579613638042) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-45')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 17.172579613638042 && getScrollPercent() < 17.363996637493695) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-46')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 17.363996637493695 && getScrollPercent() < 17.55541366134935) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-47')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 17.55541366134935 && getScrollPercent() < 17.746830685205) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-48')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 17.746830685205 && getScrollPercent() < 17.938247709060654) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-49')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 17.938247709060654 && getScrollPercent() < 18.129664732916307) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-50')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 18.129664732916307 && getScrollPercent() < 18.32108175677196) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-51')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 18.32108175677196 && getScrollPercent() < 18.512498780627613) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-52')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 18.512498780627613 && getScrollPercent() < 18.703915804483266) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-53')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 18.703915804483266 && getScrollPercent() < 18.89533282833892) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-54')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 18.89533282833892 && getScrollPercent() < 19.086749852194572) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-55')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 19.086749852194572 && getScrollPercent() < 19.278166876050225) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-56')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 19.278166876050225 && getScrollPercent() < 19.469583899905878) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-57')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 19.469583899905878 && getScrollPercent() < 19.66100092376153) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-58')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 19.66100092376153 && getScrollPercent() < 19.852417947617184) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-59')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 19.852417947617184 && getScrollPercent() < 20.043834971472837) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-60')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 20.043834971472837 && getScrollPercent() < 20.23525199532849) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-61')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 20.23525199532849 && getScrollPercent() < 20.426669019184143) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-62')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 20.426669019184143 && getScrollPercent() < 20.618086043039796) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-63')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 20.618086043039796 && getScrollPercent() < 20.80950306689545) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-64')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 20.80950306689545 && getScrollPercent() < 21.0009200907511) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-65')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 21.0009200907511 && getScrollPercent() < 21.192337114606755) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-66')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 21.192337114606755 && getScrollPercent() < 21.383754138462407) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-67')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 21.383754138462407 && getScrollPercent() < 21.57517116231806) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-68')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 21.57517116231806 && getScrollPercent() < 21.766588186173713) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-69')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 21.766588186173713 && getScrollPercent() < 21.958005210029366) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-70')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 21.958005210029366 && getScrollPercent() < 22.14942223388502) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-71')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 22.14942223388502 && getScrollPercent() < 22.340839257740672) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-72')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 22.340839257740672 && getScrollPercent() < 22.532256281596325) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-73')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 22.532256281596325 && getScrollPercent() < 22.723673305451978) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-74')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 22.723673305451978 && getScrollPercent() < 22.91509032930763) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-75')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 22.91509032930763 && getScrollPercent() < 23.106507353163284) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-76')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 23.106507353163284 && getScrollPercent() < 23.297924377018937) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-77')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 23.297924377018937 && getScrollPercent() < 23.48934140087459) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-78')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 23.48934140087459 && getScrollPercent() < 23.680758424730243) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-79')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 23.680758424730243 && getScrollPercent() < 23.872175448585896) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-80')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 23.872175448585896 && getScrollPercent() < 24.06359247244155) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-81')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 24.06359247244155 && getScrollPercent() < 24.255009496297202) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-82')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 24.255009496297202 && getScrollPercent() < 24.446426520152855) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-83')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 24.446426520152855 && getScrollPercent() < 24.637843544008508) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-84')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 24.637843544008508 && getScrollPercent() < 24.82926056786416) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-85')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 24.82926056786416 && getScrollPercent() < 25.020677591719814) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-86')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 25.020677591719814 && getScrollPercent() < 25.212094615575467) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-87')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 25.212094615575467 && getScrollPercent() < 25.40351163943112) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-88')[0].classList.add('show')
    //     }

    //     if (getScrollPercent() > 25.40351163943112 && getScrollPercent() < 25.594928663286773) {
    //     for (var i = 1; i < 90; i++) {
    //     document.getElementsByClassName('section-3-img-'+i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-3-img-89')[0].classList.add('show')
    //     }


    //s4

    if (getScrollPercent() > 17.14479819329857 && getScrollPercent() < 17.38397807379308) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-1')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.38397807379308 && getScrollPercent() < 17.623157954287592) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-2')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.623157954287592 && getScrollPercent() < 17.862337834782103) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-3')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.862337834782103 && getScrollPercent() < 18.101517715276614) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-4')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.101517715276614 && getScrollPercent() < 18.340697595771125) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-5')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.340697595771125 && getScrollPercent() < 18.579877476265636) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-6')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.579877476265636 && getScrollPercent() < 18.819057356760148) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-7')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.819057356760148 && getScrollPercent() < 19.05823723725466) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-8')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.05823723725466 && getScrollPercent() < 19.29741711774917) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-9')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.29741711774917 && getScrollPercent() < 19.53659699824368) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-10')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.53659699824368 && getScrollPercent() < 19.775776878738192) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-11')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.775776878738192 && getScrollPercent() < 20.014956759232703) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-12')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.014956759232703 && getScrollPercent() < 20.254136639727214) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-13')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.254136639727214 && getScrollPercent() < 20.493316520221725) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-14')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.493316520221725 && getScrollPercent() < 20.732496400716236) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-15')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.732496400716236 && getScrollPercent() < 20.971676281210748) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-16')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.971676281210748 && getScrollPercent() < 21.21085616170526) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-17')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.21085616170526 && getScrollPercent() < 21.45003604219977) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-18')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.45003604219977 && getScrollPercent() < 21.68921592269428) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-19')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.68921592269428 && getScrollPercent() < 21.928395803188792) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-20')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.928395803188792 && getScrollPercent() < 22.167575683683303) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-21')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.167575683683303 && getScrollPercent() < 22.406755564177814) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-22')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.406755564177814 && getScrollPercent() < 22.645935444672325) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-23')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.645935444672325 && getScrollPercent() < 22.885115325166836) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-24')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.885115325166836 && getScrollPercent() < 23.124295205661348) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-25')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.124295205661348 && getScrollPercent() < 23.36347508615586) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-26')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.36347508615586 && getScrollPercent() < 23.60265496665037) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-27')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.60265496665037 && getScrollPercent() < 23.84183484714488) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-28')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.84183484714488 && getScrollPercent() < 24.081014727639392) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-29')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.081014727639392 && getScrollPercent() < 24.320194608133903) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-30')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.320194608133903 && getScrollPercent() < 24.559374488628414) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-31')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.559374488628414 && getScrollPercent() < 24.798554369122925) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-32')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.798554369122925 && getScrollPercent() < 25.037734249617436) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-33')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.037734249617436 && getScrollPercent() < 25.276914130111948) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-34')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.276914130111948 && getScrollPercent() < 25.51609401060646) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-35')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.51609401060646 && getScrollPercent() < 25.75527389110097) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-36')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.75527389110097 && getScrollPercent() < 25.99445377159548) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-37')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.99445377159548 && getScrollPercent() < 26.233633652089992) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-38')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.233633652089992 && getScrollPercent() < 26.472813532584503) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-39')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.472813532584503 && getScrollPercent() < 26.711993413079014) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-40')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.711993413079014 && getScrollPercent() < 26.951173293573525) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-41')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.951173293573525 && getScrollPercent() < 27.190353174068036) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-42')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.190353174068036 && getScrollPercent() < 27.429533054562548) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-43')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.429533054562548 && getScrollPercent() < 27.66871293505706) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-44')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.66871293505706 && getScrollPercent() < 27.90789281555157) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-45')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.90789281555157 && getScrollPercent() < 28.14707269604608) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-46')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.14707269604608 && getScrollPercent() < 28.386252576540592) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-47')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.386252576540592 && getScrollPercent() < 28.625432457035103) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-48')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.625432457035103 && getScrollPercent() < 28.864612337529614) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-49')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.864612337529614 && getScrollPercent() < 29.103792218024125) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-50')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.103792218024125 && getScrollPercent() < 29.342972098518636) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-51')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.342972098518636 && getScrollPercent() < 29.582151979013148) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-52')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.582151979013148 && getScrollPercent() < 29.82133185950766) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-53')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.82133185950766 && getScrollPercent() < 30.06051174000217) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-54')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.06051174000217 && getScrollPercent() < 30.29969162049668) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-55')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.29969162049668 && getScrollPercent() < 30.538871500991192) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-56')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.538871500991192 && getScrollPercent() < 30.778051381485703) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-57')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.778051381485703 && getScrollPercent() < 31.017231261980214) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-58')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.017231261980214 && getScrollPercent() < 31.256411142474725) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-59')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.256411142474725 && getScrollPercent() < 31.495591022969236) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-60')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.495591022969236 && getScrollPercent() < 31.734770903463748) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-61')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.734770903463748 && getScrollPercent() < 31.97395078395826) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-62')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.97395078395826 && getScrollPercent() < 32.21313066445277) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-63')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.21313066445277 && getScrollPercent() < 32.45231054494728) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-64')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.45231054494728 && getScrollPercent() < 32.69149042544179) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-65')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.69149042544179 && getScrollPercent() < 32.9306703059363) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-66')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.9306703059363 && getScrollPercent() < 33.169850186430814) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-67')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.169850186430814 && getScrollPercent() < 33.409030066925325) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-68')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.409030066925325 && getScrollPercent() < 33.648209947419836) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-69')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.648209947419836 && getScrollPercent() < 33.88738982791435) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-70')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.88738982791435 && getScrollPercent() < 34.12656970840886) {
        for (var i = 1; i < 72; i++) {
            document.getElementsByClassName('section-4-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-4-img-71')[0].classList.add('show')
    }


    //s7

    if (getScrollPercent() > 47.702933291704404 && getScrollPercent() < 47.83525879479861) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-1')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.83525879479861 && getScrollPercent() < 47.96758429789282) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-2')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.96758429789282 && getScrollPercent() < 48.09990980098703) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-3')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.09990980098703 && getScrollPercent() < 48.232235304081236) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-4')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.232235304081236 && getScrollPercent() < 48.364560807175444) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-5')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.364560807175444 && getScrollPercent() < 48.49688631026965) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-6')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.49688631026965 && getScrollPercent() < 48.62921181336386) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-7')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.62921181336386 && getScrollPercent() < 48.76153731645807) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-8')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.76153731645807 && getScrollPercent() < 48.893862819552275) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-9')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.893862819552275 && getScrollPercent() < 49.02618832264648) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-10')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.02618832264648 && getScrollPercent() < 49.15851382574069) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-11')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.15851382574069 && getScrollPercent() < 49.2908393288349) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-12')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.2908393288349 && getScrollPercent() < 49.42316483192911) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-13')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.42316483192911 && getScrollPercent() < 49.555490335023315) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-14')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.555490335023315 && getScrollPercent() < 49.68781583811752) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-15')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.68781583811752 && getScrollPercent() < 49.82014134121173) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-16')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.82014134121173 && getScrollPercent() < 49.95246684430594) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-17')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.95246684430594 && getScrollPercent() < 50.084792347400146) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-18')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.084792347400146 && getScrollPercent() < 50.217117850494354) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-19')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.217117850494354 && getScrollPercent() < 50.34944335358856) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-20')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.34944335358856 && getScrollPercent() < 50.48176885668277) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-21')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.48176885668277 && getScrollPercent() < 50.61409435977698) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-22')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.61409435977698 && getScrollPercent() < 50.746419862871186) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-23')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.746419862871186 && getScrollPercent() < 50.87874536596539) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-24')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.87874536596539 && getScrollPercent() < 51.0110708690596) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-25')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.0110708690596 && getScrollPercent() < 51.14339637215381) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-26')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.14339637215381 && getScrollPercent() < 51.27572187524802) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-27')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.27572187524802 && getScrollPercent() < 51.408047378342225) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-28')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.408047378342225 && getScrollPercent() < 51.54037288143643) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-29')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.54037288143643 && getScrollPercent() < 51.67269838453064) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-30')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.67269838453064 && getScrollPercent() < 51.80502388762485) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-31')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.80502388762485 && getScrollPercent() < 51.937349390719056) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-32')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.937349390719056 && getScrollPercent() < 52.069674893813264) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-33')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.069674893813264 && getScrollPercent() < 52.20200039690747) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-34')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.20200039690747 && getScrollPercent() < 52.33432590000168) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-35')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.33432590000168 && getScrollPercent() < 52.46665140309589) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-36')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.46665140309589 && getScrollPercent() < 52.598976906190096) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-37')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.598976906190096 && getScrollPercent() < 52.731302409284304) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-38')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.731302409284304 && getScrollPercent() < 52.86362791237851) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-39')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.86362791237851 && getScrollPercent() < 52.99595341547272) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-40')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.99595341547272 && getScrollPercent() < 53.12827891856693) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-41')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.12827891856693 && getScrollPercent() < 53.260604421661135) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-42')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.260604421661135 && getScrollPercent() < 53.39292992475534) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-43')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.39292992475534 && getScrollPercent() < 53.52525542784955) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-44')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.52525542784955 && getScrollPercent() < 53.65758093094376) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-45')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.65758093094376 && getScrollPercent() < 53.78990643403797) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-46')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.78990643403797 && getScrollPercent() < 53.922231937132175) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-47')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.922231937132175 && getScrollPercent() < 54.05455744022638) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-48')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.05455744022638 && getScrollPercent() < 54.18688294332059) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-49')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.18688294332059 && getScrollPercent() < 54.3192084464148) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-50')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.3192084464148 && getScrollPercent() < 54.451533949509006) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-51')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.451533949509006 && getScrollPercent() < 54.583859452603214) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-52')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.583859452603214 && getScrollPercent() < 54.71618495569742) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-53')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.71618495569742 && getScrollPercent() < 54.84851045879163) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-54')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.84851045879163 && getScrollPercent() < 54.98083596188584) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-55')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.98083596188584 && getScrollPercent() < 55.113161464980045) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-56')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.113161464980045 && getScrollPercent() < 55.24548696807425) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-57')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.24548696807425 && getScrollPercent() < 55.37781247116846) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-58')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.37781247116846 && getScrollPercent() < 55.51013797426267) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-59')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.51013797426267 && getScrollPercent() < 55.64246347735688) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-60')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.64246347735688 && getScrollPercent() < 55.774788980451085) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-61')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.774788980451085 && getScrollPercent() < 55.90711448354529) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-62')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.90711448354529 && getScrollPercent() < 56.0394399866395) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-63')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.0394399866395 && getScrollPercent() < 56.17176548973371) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-64')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.17176548973371 && getScrollPercent() < 56.304090992827916) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-65')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.304090992827916 && getScrollPercent() < 56.436416495922124) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-66')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.436416495922124 && getScrollPercent() < 56.56874199901633) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-67')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.56874199901633 && getScrollPercent() < 56.70106750211054) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-68')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.70106750211054 && getScrollPercent() < 56.83339300520475) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-69')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.83339300520475 && getScrollPercent() < 56.965718508298956) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-70')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.965718508298956 && getScrollPercent() < 57.09804401139316) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-71')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.09804401139316 && getScrollPercent() < 57.23036951448737) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-72')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.23036951448737 && getScrollPercent() < 57.36269501758158) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-73')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.36269501758158 && getScrollPercent() < 57.49502052067579) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-74')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.49502052067579 && getScrollPercent() < 57.627346023769995) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-75')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.627346023769995 && getScrollPercent() < 57.7596715268642) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-76')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.7596715268642 && getScrollPercent() < 57.89199702995841) {
        for (var i = 1; i < 78; i++) {
            document.getElementsByClassName('section-7-img-' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('section-7-img-77')[0].classList.add('show')
    }



    //s9

    // if (getScrollPercent() > 61.49666025133024 && getScrollPercent() < 61.57146982356412) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-1')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 61.57146982356412 && getScrollPercent() < 61.646279395798004) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-2')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 61.646279395798004 && getScrollPercent() < 61.721088968031886) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-3')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 61.721088968031886 && getScrollPercent() < 61.79589854026577) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-4')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 61.79589854026577 && getScrollPercent() < 61.87070811249965) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-5')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 61.87070811249965 && getScrollPercent() < 61.94551768473353) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-6')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 61.94551768473353 && getScrollPercent() < 62.02032725696741) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-7')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.02032725696741 && getScrollPercent() < 62.095136829201294) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-8')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.095136829201294 && getScrollPercent() < 62.169946401435176) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-9')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.169946401435176 && getScrollPercent() < 62.24475597366906) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-10')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.24475597366906 && getScrollPercent() < 62.31956554590294) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-11')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.31956554590294 && getScrollPercent() < 62.39437511813682) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-12')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.39437511813682 && getScrollPercent() < 62.4691846903707) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-13')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.4691846903707 && getScrollPercent() < 62.543994262604585) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-14')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.543994262604585 && getScrollPercent() < 62.61880383483847) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-15')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.61880383483847 && getScrollPercent() < 62.69361340707235) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-16')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.69361340707235 && getScrollPercent() < 62.76842297930623) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-17')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.76842297930623 && getScrollPercent() < 62.84323255154011) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-18')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.84323255154011 && getScrollPercent() < 62.91804212377399) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-19')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.91804212377399 && getScrollPercent() < 62.992851696007875) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-20')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 62.992851696007875 && getScrollPercent() < 63.06766126824176) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-21')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.06766126824176 && getScrollPercent() < 63.14247084047564) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-22')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.14247084047564 && getScrollPercent() < 63.21728041270952) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-23')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.21728041270952 && getScrollPercent() < 63.2920899849434) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-24')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.2920899849434 && getScrollPercent() < 63.366899557177284) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-25')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.366899557177284 && getScrollPercent() < 63.441709129411166) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-26')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.441709129411166 && getScrollPercent() < 63.51651870164505) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-27')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.51651870164505 && getScrollPercent() < 63.59132827387893) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-28')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.59132827387893 && getScrollPercent() < 63.66613784611281) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-29')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.66613784611281 && getScrollPercent() < 63.74094741834669) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-30')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.74094741834669 && getScrollPercent() < 63.815756990580574) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-31')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.815756990580574 && getScrollPercent() < 63.890566562814456) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-32')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.890566562814456 && getScrollPercent() < 63.96537613504834) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-33')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 63.96537613504834 && getScrollPercent() < 64.04018570728222) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-34')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.04018570728222 && getScrollPercent() < 64.1149952795161) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-35')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.1149952795161 && getScrollPercent() < 64.18980485174997) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-36')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.18980485174997 && getScrollPercent() < 64.26461442398384) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-37')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.26461442398384 && getScrollPercent() < 64.33942399621772) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-38')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.33942399621772 && getScrollPercent() < 64.41423356845159) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-39')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.41423356845159 && getScrollPercent() < 64.48904314068547) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-40')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.48904314068547 && getScrollPercent() < 64.56385271291934) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-41')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.56385271291934 && getScrollPercent() < 64.63866228515322) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-42')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.63866228515322 && getScrollPercent() < 64.71347185738709) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-43')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.71347185738709 && getScrollPercent() < 64.78828142962097) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-44')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.78828142962097 && getScrollPercent() < 64.86309100185484) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-45')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.86309100185484 && getScrollPercent() < 64.93790057408872) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-46')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 64.93790057408872 && getScrollPercent() < 65.01271014632259) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-47')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.01271014632259 && getScrollPercent() < 65.08751971855646) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-48')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.08751971855646 && getScrollPercent() < 65.16232929079034) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-49')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.16232929079034 && getScrollPercent() < 65.23713886302421) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-50')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.23713886302421 && getScrollPercent() < 65.31194843525809) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-51')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.31194843525809 && getScrollPercent() < 65.38675800749196) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-52')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.38675800749196 && getScrollPercent() < 65.46156757972584) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-53')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.46156757972584 && getScrollPercent() < 65.53637715195971) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-54')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.53637715195971 && getScrollPercent() < 65.61118672419359) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-55')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.61118672419359 && getScrollPercent() < 65.68599629642746) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-56')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.68599629642746 && getScrollPercent() < 65.76080586866134) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-57')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.76080586866134 && getScrollPercent() < 65.83561544089521) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-58')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.83561544089521 && getScrollPercent() < 65.91042501312909) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-59')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.91042501312909 && getScrollPercent() < 65.98523458536296) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-60')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 65.98523458536296 && getScrollPercent() < 66.06004415759683) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-61')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.06004415759683 && getScrollPercent() < 66.13485372983071) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-62')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.13485372983071 && getScrollPercent() < 66.20966330206458) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-63')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.20966330206458 && getScrollPercent() < 66.28447287429846) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-64')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.28447287429846 && getScrollPercent() < 66.35928244653233) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-65')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.35928244653233 && getScrollPercent() < 66.43409201876621) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-66')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.43409201876621 && getScrollPercent() < 66.50890159100008) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-67')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.50890159100008 && getScrollPercent() < 66.58371116323396) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-68')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.58371116323396 && getScrollPercent() < 66.65852073546783) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-69')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.65852073546783 && getScrollPercent() < 66.7333303077017) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-70')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.7333303077017 && getScrollPercent() < 66.80813987993558) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-71')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.80813987993558 && getScrollPercent() < 66.88294945216946) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-72')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.88294945216946 && getScrollPercent() < 66.95775902440333) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-73')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 66.95775902440333 && getScrollPercent() < 67.0325685966372) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-74')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.0325685966372 && getScrollPercent() < 67.10737816887108) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-75')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.10737816887108 && getScrollPercent() < 67.18218774110495) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-76')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.18218774110495 && getScrollPercent() < 67.25699731333883) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-77')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.25699731333883 && getScrollPercent() < 67.3318068855727) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-78')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.3318068855727 && getScrollPercent() < 67.40661645780658) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-79')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.40661645780658 && getScrollPercent() < 67.48142603004045) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-80')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.48142603004045 && getScrollPercent() < 67.55623560227433) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-81')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.55623560227433 && getScrollPercent() < 67.6310451745082) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-82')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.6310451745082 && getScrollPercent() < 67.70585474674208) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-83')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.70585474674208 && getScrollPercent() < 67.78066431897595) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-84')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.78066431897595 && getScrollPercent() < 67.85547389120983) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-85')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.85547389120983 && getScrollPercent() < 67.9302834634437) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-86')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 67.9302834634437 && getScrollPercent() < 68.00509303567758) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-87')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.00509303567758 && getScrollPercent() < 68.07990260791145) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-88')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.07990260791145 && getScrollPercent() < 68.15471218014532) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-89')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.15471218014532 && getScrollPercent() < 68.2295217523792) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-90')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.2295217523792 && getScrollPercent() < 68.30433132461307) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-91')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.30433132461307 && getScrollPercent() < 68.37914089684695) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-92')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.37914089684695 && getScrollPercent() < 68.45395046908082) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-93')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.45395046908082 && getScrollPercent() < 68.5287600413147) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-94')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.5287600413147 && getScrollPercent() < 68.60356961354857) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-95')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.60356961354857 && getScrollPercent() < 68.67837918578245) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-96')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.67837918578245 && getScrollPercent() < 68.75318875801632) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-97')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.75318875801632 && getScrollPercent() < 68.8279983302502) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-98')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.8279983302502 && getScrollPercent() < 68.90280790248407) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-99')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.90280790248407 && getScrollPercent() < 68.97761747471795) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-100')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 68.97761747471795 && getScrollPercent() < 69.05242704695182) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-101')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.05242704695182 && getScrollPercent() < 69.1272366191857) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-102')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.1272366191857 && getScrollPercent() < 69.20204619141957) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-103')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.20204619141957 && getScrollPercent() < 69.27685576365344) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-104')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.27685576365344 && getScrollPercent() < 69.35166533588732) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-105')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.35166533588732 && getScrollPercent() < 69.4264749081212) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-106')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.4264749081212 && getScrollPercent() < 69.50128448035507) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-107')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.50128448035507 && getScrollPercent() < 69.57609405258894) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-108')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.57609405258894 && getScrollPercent() < 69.65090362482282) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-109')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.65090362482282 && getScrollPercent() < 69.72571319705669) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-110')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.72571319705669 && getScrollPercent() < 69.80052276929057) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-111')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.80052276929057 && getScrollPercent() < 69.87533234152444) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-112')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.87533234152444 && getScrollPercent() < 69.95014191375832) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-113')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 69.95014191375832 && getScrollPercent() < 70.02495148599219) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-114')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.02495148599219 && getScrollPercent() < 70.09976105822606) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-115')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.09976105822606 && getScrollPercent() < 70.17457063045994) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-116')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.17457063045994 && getScrollPercent() < 70.24938020269381) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-117')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.24938020269381 && getScrollPercent() < 70.32418977492769) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-118')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.32418977492769 && getScrollPercent() < 70.39899934716156) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-119')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.39899934716156 && getScrollPercent() < 70.47380891939544) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-120')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.47380891939544 && getScrollPercent() < 70.54861849162931) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-121')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.54861849162931 && getScrollPercent() < 70.62342806386319) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-122')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.62342806386319 && getScrollPercent() < 70.69823763609706) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-123')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.69823763609706 && getScrollPercent() < 70.77304720833094) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-124')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.77304720833094 && getScrollPercent() < 70.84785678056481) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-125')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.84785678056481 && getScrollPercent() < 70.92266635279869) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-126')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.92266635279869 && getScrollPercent() < 70.99747592503256) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-127')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 70.99747592503256 && getScrollPercent() < 71.07228549726644) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-128')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.07228549726644 && getScrollPercent() < 71.14709506950031) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-129')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.14709506950031 && getScrollPercent() < 71.22190464173418) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-130')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.22190464173418 && getScrollPercent() < 71.29671421396806) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-131')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.29671421396806 && getScrollPercent() < 71.37152378620193) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-132')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.37152378620193 && getScrollPercent() < 71.44633335843581) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-133')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.44633335843581 && getScrollPercent() < 71.52114293066968) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-134')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.52114293066968 && getScrollPercent() < 71.59595250290356) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-135')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.59595250290356 && getScrollPercent() < 71.67076207513743) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-136')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.67076207513743 && getScrollPercent() < 71.7455716473713) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-137')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.7455716473713 && getScrollPercent() < 71.82038121960518) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-138')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.82038121960518 && getScrollPercent() < 71.89519079183906) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-139')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.89519079183906 && getScrollPercent() < 71.97000036407293) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-140')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 71.97000036407293 && getScrollPercent() < 72.0448099363068) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-141')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.0448099363068 && getScrollPercent() < 72.11961950854068) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-142')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.11961950854068 && getScrollPercent() < 72.19442908077455) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-143')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.19442908077455 && getScrollPercent() < 72.26923865300843) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-144')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.26923865300843 && getScrollPercent() < 72.3440482252423) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-145')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.3440482252423 && getScrollPercent() < 72.41885779747618) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-146')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.41885779747618 && getScrollPercent() < 72.49366736971005) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-147')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.49366736971005 && getScrollPercent() < 72.56847694194393) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-148')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.56847694194393 && getScrollPercent() < 72.6432865141778) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-149')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.6432865141778 && getScrollPercent() < 72.71809608641168) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-150')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.71809608641168 && getScrollPercent() < 72.79290565864555) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-151')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.79290565864555 && getScrollPercent() < 72.86771523087943) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-152')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.86771523087943 && getScrollPercent() < 72.9425248031133) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-153')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 72.9425248031133 && getScrollPercent() < 73.01733437534718) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-154')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.01733437534718 && getScrollPercent() < 73.09214394758105) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-155')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.09214394758105 && getScrollPercent() < 73.16695351981492) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-156')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.16695351981492 && getScrollPercent() < 73.2417630920488) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-157')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.2417630920488 && getScrollPercent() < 73.31657266428267) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-158')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.31657266428267 && getScrollPercent() < 73.39138223651655) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-159')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.39138223651655 && getScrollPercent() < 73.46619180875042) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-160')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.46619180875042 && getScrollPercent() < 73.5410013809843) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-161')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.5410013809843 && getScrollPercent() < 73.61581095321817) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-162')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.61581095321817 && getScrollPercent() < 73.69062052545205) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-163')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.69062052545205 && getScrollPercent() < 73.76543009768592) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-164')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.76543009768592 && getScrollPercent() < 73.8402396699198) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-165')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.8402396699198 && getScrollPercent() < 73.91504924215367) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-166')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.91504924215367 && getScrollPercent() < 73.98985881438755) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-167')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 73.98985881438755 && getScrollPercent() < 74.06466838662142) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-168')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.06466838662142 && getScrollPercent() < 74.1394779588553) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-169')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.1394779588553 && getScrollPercent() < 74.21428753108917) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-170')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.21428753108917 && getScrollPercent() < 74.28909710332304) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-171')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.28909710332304 && getScrollPercent() < 74.36390667555692) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-172')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.36390667555692 && getScrollPercent() < 74.4387162477908) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-173')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.4387162477908 && getScrollPercent() < 74.51352582002467) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-174')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.51352582002467 && getScrollPercent() < 74.58833539225854) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-175')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.58833539225854 && getScrollPercent() < 74.66314496449242) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-176')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.66314496449242 && getScrollPercent() < 74.73795453672629) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-177')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.73795453672629 && getScrollPercent() < 74.81276410896017) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-178')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.81276410896017 && getScrollPercent() < 74.88757368119404) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-179')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.88757368119404 && getScrollPercent() < 74.96238325342792) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-180')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 74.96238325342792 && getScrollPercent() < 75.03719282566179) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-181')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.03719282566179 && getScrollPercent() < 75.11200239789567) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-182')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.11200239789567 && getScrollPercent() < 75.18681197012954) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-183')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.18681197012954 && getScrollPercent() < 75.26162154236341) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-184')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.26162154236341 && getScrollPercent() < 75.33643111459729) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-185')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.33643111459729 && getScrollPercent() < 75.41124068683116) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-186')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.41124068683116 && getScrollPercent() < 75.48605025906504) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-187')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.48605025906504 && getScrollPercent() < 75.56085983129891) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-188')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.56085983129891 && getScrollPercent() < 75.63566940353279) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-189')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.63566940353279 && getScrollPercent() < 75.71047897576666) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-190')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.71047897576666 && getScrollPercent() < 75.78528854800054) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-191')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.78528854800054 && getScrollPercent() < 75.86009812023441) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-192')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.86009812023441 && getScrollPercent() < 75.93490769246829) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-193')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 75.93490769246829 && getScrollPercent() < 76.00971726470216) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-194')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.00971726470216 && getScrollPercent() < 76.08452683693604) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-195')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.08452683693604 && getScrollPercent() < 76.15933640916991) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-196')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.15933640916991 && getScrollPercent() < 76.23414598140378) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-197')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.23414598140378 && getScrollPercent() < 76.30895555363766) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-198')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.30895555363766 && getScrollPercent() < 76.38376512587153) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-199')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.38376512587153 && getScrollPercent() < 76.45857469810541) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-200')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.45857469810541 && getScrollPercent() < 76.53338427033928) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-201')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.53338427033928 && getScrollPercent() < 76.60819384257316) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-202')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.60819384257316 && getScrollPercent() < 76.68300341480703) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-203')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.68300341480703 && getScrollPercent() < 76.75781298704091) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-204')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.75781298704091 && getScrollPercent() < 76.83262255927478) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-205')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.83262255927478 && getScrollPercent() < 76.90743213150866) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-206')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.90743213150866 && getScrollPercent() < 76.98224170374253) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-207')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 76.98224170374253 && getScrollPercent() < 77.0570512759764) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-208')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.0570512759764 && getScrollPercent() < 77.13186084821028) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-209')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.13186084821028 && getScrollPercent() < 77.20667042044415) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-210')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.20667042044415 && getScrollPercent() < 77.28147999267803) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-211')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.28147999267803 && getScrollPercent() < 77.3562895649119) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-212')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.3562895649119 && getScrollPercent() < 77.43109913714578) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-213')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.43109913714578 && getScrollPercent() < 77.50590870937965) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-214')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.50590870937965 && getScrollPercent() < 77.58071828161353) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-215')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.58071828161353 && getScrollPercent() < 77.6555278538474) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-216')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.6555278538474 && getScrollPercent() < 77.73033742608128) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-217')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.73033742608128 && getScrollPercent() < 77.80514699831515) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-218')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.80514699831515 && getScrollPercent() < 77.87995657054903) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-219')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.87995657054903 && getScrollPercent() < 77.9547661427829) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-220')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 77.9547661427829 && getScrollPercent() < 78.02957571501678) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-221')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 78.02957571501678 && getScrollPercent() < 78.10438528725065) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-222')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 78.10438528725065 && getScrollPercent() < 78.17919485948453) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-223')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 78.17919485948453 && getScrollPercent() < 78.2540044317184) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-224')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 78.2540044317184 && getScrollPercent() < 78.32881400395227) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-225')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 78.32881400395227 && getScrollPercent() < 78.40362357618615) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-226')[0].classList.add('show')
    // }

    // if (getScrollPercent() > 78.40362357618615 && getScrollPercent() < 78.47843314842002) {
    //     for (var i = 1; i < 228; i++) {
    //         document.getElementsByClassName('section-9-img-' + i)[0].classList.remove('show')
    //     }
    //     document.getElementsByClassName('section-9-img-227')[0].classList.add('show')
    // }
}