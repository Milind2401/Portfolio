// About tabs

const tabs=document.querySelectorAll('[data-target]'),
tabContent=document.querySelectorAll('[data-content]');

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target);
        const targetId = tab.dataset.target;
        console.log(targetId);
        tabContent.forEach((tabContent)=>{
            tabContent.classList.remove('tab_active');
        });
        target.classList.add('tab_active');
        tabs.forEach((tab)=>{
            tab.classList.remove('tab_active');
        });
        tab.classList.add('tab_active');

        // image change
        var imgElement = document.getElementById("about_img");
imgElement.style.opacity = 0;

// After a short delay, change the image source
setTimeout(function() {
    if (targetId === '#skills') {
        imgElement.src = "assets/img/main_img3.jpeg";
        imgElement.alt = "Main image";
    } else if (targetId === '#education') {
        imgElement.src = "assets/img/education1.jpg";
        imgElement.alt = "Education Image";
    } else if (targetId === '#internships') {
        imgElement.src = "assets/img/internship.jpg";
        imgElement.alt = "Internships Image";
    } else if (targetId === '#hobbies') {
        imgElement.src = "assets/img/hobbie1.JPG";
        imgElement.alt = "Hobbies Image";
    }

    // Set the opacity back to 1 for a smooth fade in
    imgElement.style.opacity = 1;
}, 300); 
    });
});

// Contact Form
const contactForm= document.getElementById('contact-form'),
    contactName=document.getElementById('contact-name'),
    contactEmail=document.getElementById('contact-email'),
    contactSubject=document.getElementById('contact-subject'),
    contactMessage=document.getElementById('contact-message'),
    errorMessage=document.getElementById('error-message');

    const sendEmail=(e)=>{
        e.preventDefault();

        // check if the field has a value
        if(contactName.value==='' ||
           contactEmail.value==='' ||
           contactSubject.value==='' || 
           contactMessage.value===''){

            errorMessage.textContent="Write all the input fields";
        }
        else{
            // service id- templateID - #form -publickey
            emailjs.sendForm('service_3o7hr8i', 'template_gme2int', '#contact-form', 'tAbIOvAbuVpSOnm_T').then(() => {
                errorMessage.classList.add('color-primary');
                errorMessage.textContent='Message Sent ✅';
                // remove message after 5 sec
                setTimeout(()=>{
                    errorMessage.textContent='';
                },5000)
            },(error)=>{
                alert('OOPs! SOMETHING WENT WRONG...',error);
            });
            // clear input field
            contactName.value='';
            contactEmail.value='';
            contactSubject.value='';
            contactMessage.value='';
        }
    };

    contactForm.addEventListener('submit', sendEmail);

    function scrollHeader(){
        const header=document.getElementById('header');
        if(this.scrollY>=80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll',scrollHeader);