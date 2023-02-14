let text = document.getElementById('moonlight');
        let btn = document.getElementById('btn');
        let stars = document.getElementById('stars');
        let behind = document.getElementById('behind');
        let front = document.getElementById('front');
        let moon = document.getElementById('moon');
        // let text = document.getElementById('moonlight');
        let movable = function(){
            let value = window.scrollY;
            text.style.left = value * 0.3 +'px';
            btn.style.position = 'relative';
            btn.style.left = value * -0.3 +'px';
            stars.style.left = value * 0.5 + 'px';
            moon.style.top = value * 0.5 + 'px';
        }
        window.addEventListener('scroll', movable);