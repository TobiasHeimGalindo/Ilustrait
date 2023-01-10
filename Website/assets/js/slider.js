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
                    console.log("element", element)
                })
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

    // Create the h4 element
    const h4Element = document.createElement('h4');
    h4Element.innerHTML = `<b>${prompt}</b>`;
    profileDiv.appendChild(h4Element);
  
    return testimonialElement;
}

/*
<div class="swiper-slide">
<div class="testimonial-item">
  <div class="profile mt-auto">
    <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="" />
    <h4><b>A tank on a green Field</b></h4>
    <h4>Sara Willson</h4>
  </div>
</div>
</div>
<!-- End testimonial item -->
*/
