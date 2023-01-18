function get_images_for_gallery() {
    //später die backend liste anbinden
    url = "https://dog.ceo/api/breeds/image/random"
    const amount = 15
    const container = document.getElementById("gallery_container")
    
    const img_url_list = []
    const prompt_list = []
    
    for (let i = 0; i < amount; i++){
        fetch(url)
            .then(response => response.json())
            .then(data => 
                {
                    const element = create_gallery_element(data["message"], data["status"])
                    container.appendChild(element)
                })
    }     
}

function get_pregenerated_images_for_gallery(){
        const container = document.getElementById("gallery_container")
        
        const prompt_list = [
            "Colorful graffiti street art featuring a robot", 
            "Elegant geometric patterns with a cat lounging", 
            "Fantasy forest landscape with a dragon and a castle",
            "Futuristic cyberpunk city with a walking robot",
            "Retro futuristic space exploration with a robot companion",
            "Sci-fi inspired robot design in front of a cityscape",
            "Tropical paradise beach scene with a robotic palm tree",
            "Vibrant sunset over a city skyline"
        ]

        const img_url_list = []

        prompt_list.forEach(element => {
            const folder = "assets/img/carousel_images/"
            var path = folder.concat(element, ".png")
            img_url_list.push(path)
        }); 

        for (let i = 0; i < prompt_list.length; i++){
            const element = create_gallery_element(img_url_list[i], prompt_list[i])
            container.appendChild(element)       
        }
}

function create_gallery_element(imageUrl, prompt) {

    // Create the outer div element
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('swiper-slide');

    // Create the inner div element
    const testimonialItemDiv = document.createElement('div');
    testimonialItemDiv.classList.add('testimonial-item');
    testimonialElement.appendChild(testimonialItemDiv);

    // Create the profile div element
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile', 'mt-auto');
    testimonialItemDiv.appendChild(profileDiv);

    // Create the image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('testimonial-img', 'img-fullscreen');
    img.alt = '';
    profileDiv.appendChild(img);

    // Create the h3 element
    const h3Element = document.createElement('h3');
    h3Element.innerHTML = `<b>${prompt}</b>`;
    profileDiv.appendChild(h3Element);
  
    return testimonialElement;
}

/*
<div class="swiper-slide">
<div class="testimonial-item">
  <div class="profile mt-auto">
    <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="" />
    <b>A tank on a green Field</b>
    Sara Willson
  </div>
</div>
</div>
<!-- End testimonial item -->
*/
