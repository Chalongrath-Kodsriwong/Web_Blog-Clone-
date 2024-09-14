// $('.filter-item').click(function(){
//     const value = $(this).attr('data-filter');

//     // ลบคลาส active จากทุกตัวกรอง
//     $('.filter-item').removeClass('active-filter');
//     // เพิ่มคลาส active ให้กับตัวกรองที่ถูกคลิก
//     $(this).addClass('active-filter');

//     if (value == 'all') {
//         $('.post-box').show('1000');
//     }
//     else {
//         $('.post-box').not('.' + value).hide('1000');
//         $('.post-box').filter('.' + value).show('1000');
//     }
// });

// Filter Js (This Use jQuery)
// $(document).ready(function () {
//     $(".filter-item").click(function () {
//         const value = $(this).attr("data-filter");
//         if (value == "all") {
//             $(".post-box").show("1000");
//         }else {
//             $(".post-box")
//             .not("." + value)
//             .hide("1000");
//             $(".post-box")
//             .filter("." + value)
//             .show("1000");
//         }
//     });
//     // Add active to Button
//     $(".filter-item").click(function () {
//         $(this).addClass("active-filter").siblings().removeClass("active-filter");
//     });
// });

// // Header BackGround Change On Scroll 
// let header = document.querySelector('header');

// window.addEventListener("scroll", () => {
//     header.classList.toggle("shadow", window.scrollY > 0);
// });

//This Don't use jQuery
// Filter Js
document.addEventListener("DOMContentLoaded", function () {
    const filterItems = document.querySelectorAll(".filter-item");
    const postBoxes = document.querySelectorAll(".post-box");

    filterItems.forEach(item => {
        item.addEventListener("click", function () {
            const value = this.getAttribute("data-filter");

            if (value === "all") {
                postBoxes.forEach(box => box.style.display = "block");
                // Alternatively, use box.classList.remove('hidden');
            } else {
                postBoxes.forEach(box => {
                    if (box.classList.contains(value)) {
                        box.style.display = "block";
                        // Alternatively, use box.classList.remove('hidden');
                    } else {
                        box.style.display = "none";
                        // Alternatively, use box.classList.add('hidden');
                    }
                });
            }

            // Add active to Button
            filterItems.forEach(button => {
                button.classList.remove("active-filter");
            });
            this.classList.add("active-filter");
        });
    });
});

// Header Background Change On Scroll
const header = document.querySelector('header');

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("shadow");
    } else {
        header.classList.remove("shadow");
    }
});
