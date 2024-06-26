        //se1
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
        document.querySelector('.se1_text').classList.add('visible');}, 200); 
        });


        //se2
        document.addEventListener("DOMContentLoaded", function() {
        var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 한 번 보이면 관찰 중지
            }
        });
    }, { threshold: 0.7 }); // 요소가 화면의 50% 이상 보일 때 실행

    var elements = document.querySelectorAll('.se2_text');
    elements.forEach(function(element) {
        observer.observe(element);
    });
});

//se3
document.addEventListener("DOMContentLoaded", function() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var texts = entry.target.querySelectorAll('p');
                texts.forEach(function(text, index) {
                    setTimeout(function() {
                        text.classList.add('visible');
                    }, index * 500); // 0.5초 간격으로 순차적으로 나타남
                });

                // 이미지가 텍스트가 다 나타난 후에 나타나게 함
                setTimeout(function() {
                    var img = entry.target.querySelector('img');
                    if (img) {
                        img.classList.add('visible');
                    }
                }, texts.length * 500);

                observer.unobserve(entry.target); // 한 번 보이면 관찰 중지
            }
        });
    }, { threshold: 0.5 }); // 요소가 화면의 50% 이상 보일 때 실행

    var elements = document.querySelectorAll('.se3_text');
    elements.forEach(function(element) {
        observer.observe(element);
    });
});


// se4 (Q&A)
document.addEventListener("DOMContentLoaded", function() {
    // IntersectionObserver 설정
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var target = entry.target;
                if (target.classList.contains('se4_text')) {
                    var text = target.querySelector('p');
                    var faqContainer = target.querySelector('.se4_text_p2');

                    // 텍스트가 나타남
                    text.classList.add('visible');

                    // 텍스트가 나타난 후 FAQ 컨테이너가 나타남
                    setTimeout(function() {
                        faqContainer.classList.add('visible');

                        // FAQ 항목들 순차적으로 나타나게 함
                        var faqItems = faqContainer.querySelectorAll('.faq-item');
                        faqItems.forEach(function(item, index) {
                            setTimeout(function() {
                                item.classList.add('visible');
                            }, index * 300); // 0.3초 간격으로 순차적으로 나타남
                        });
                    }, 500); // 텍스트가 나타난 후 0.5초 대기
                }

                observer.unobserve(target); // 한 번 보이면 관찰 중지
            }
        });
    }, { threshold: 0.5 }); // 요소가 화면의 50% 이상 보일 때 실행

    var elements = document.querySelectorAll('.se4_text');
    elements.forEach(function(element) {
        observer.observe(element);
    });

    // FAQ 항목 클릭 이벤트 설정
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        item.querySelector('.question').addEventListener('click', function() {
            // 다른 열린 항목을 닫음
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // 현재 항목을 토글
            item.classList.toggle('active');
        });
    });
});



        // // 터치 이벤트를 방지하여 확대/축소를 막는 방법
        // document.addEventListener('touchstart', function(event) {
        //     if (event.touches.length > 1) {
        //         event.preventDefault();
        //     }
        // }, { passive: false });

        // // 키보드 단축키를 사용한 확대/축소 방지
        // document.addEventListener('keydown', function(event) {
        //     if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
        //         event.preventDefault();
        //     }
        // });

        // // 마우스 휠을 사용한 확대/축소 방지
        // document.addEventListener('wheel', function(event) {
        //     if (event.ctrlKey) {
        //         event.preventDefault();
        //     }
        // }, { passive: false });



