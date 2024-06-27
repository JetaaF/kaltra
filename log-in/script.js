const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

// console.log(forms, pwShowHide,links)
// let passwordd = document.querySelector(".input")
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");

        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})
function number() {
    let rezultate = document.querySelector("#paragf"); //s----space me ta marr
    //d{2}-ti merr 2  digits
    let emailInput = document.getElementsByClassName("password").value;
    //?=.* ---a e ka perdor te pakten (dicka)
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,/;:`]).{8,}$/.test(emailInput)) {
        rezultate.textContent = "Password is valid";
        rezultate.style.color = 'green'
    }
    else {
        rezultate.textContent = "Password is Invalid";
        rezultate.style.color = 'red';

    }

}