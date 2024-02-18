
    //slide automatic picture //
    var categorySlideIndex = 1;

        function showCategorySlides(n) {
            var i;
            var categorySlides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
            var categoryNavButtons = document.getElementsByClassName("slider-nav")[0].getElementsByTagName("a");
            if (n > categorySlides.length) { categorySlideIndex = 1 }
            if (n < 1) { categorySlideIndex = categorySlides.length }
            for (i = 0; i < categorySlides.length; i++) {
                categorySlides[i].style.display = "none";
            }
            for (i = 0; i < categoryNavButtons.length; i++) {
                categoryNavButtons[i].className = categoryNavButtons[i].className.replace(" active", "");
            }
            categorySlides[categorySlideIndex - 1].style.display = "block";
            categoryNavButtons[categorySlideIndex - 1].className += " active";
        }

        function categorySlideAuto() {
            showCategorySlides(categorySlideIndex += 1);
            setTimeout(categorySlideAuto, 3000); // Change slide every 3 seconds
        }

        // Start automatic slideshow
        categorySlideAuto();

        // Handle navigation button clicks
        for (var i = 0; i < document.getElementsByClassName("slider-nav")[0].getElementsByTagName("a").length; i++) {
            document.getElementsByClassName("slider-nav")[0].getElementsByTagName("a")[i].onclick = function () {
                var clickedIndex = parseInt(this.getAttribute("href").substr(1));
                categorySlideIndex = clickedIndex;
                showCategorySlides(categorySlideIndex);
            };
        }
        //menu button kineme//
    var MenuItems = document.getElementById("MenuItems")

    MenuItems.style.maxHeight = "0px";

    function menutoggle(){
        if (MenuItems.style.maxHeight == "0px") {
            MenuItems.style.maxHeight = "200px";
        }
        else {
            MenuItems.style.maxHeight = "0px";
        }
    }
//upadte price
    function updatePrice() {
      var sizeSelector = document.getElementById("sizeSelector");
      var selectedSize = sizeSelector.options[sizeSelector.selectedIndex].value;
      var quantity = parseInt(document.getElementById("quantity").value);
      
      // Update price based on the selected size
      var totalPrice = selectedSize * quantity;
      
      // Display the updated price
      document.getElementById("price").textContent = "Total Price: ₱" + totalPrice.toFixed(2);
  }

 // about us kineme//
    function scrollToFooter() {
        window.scrollTo({
            top: document.getElementById('footer').offsetTop,
            behavior: 'smooth'
        });
    }

    document.getElementById('copy-gmail').addEventListener('click', function() {
        const gmailText = 'littleovenbyana@gmail.com'; 
        const tempInput = document.createElement('input');
        tempInput.value = gmailText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Gmail copied: ' + gmailText);
    });

    document.getElementById('play-video').addEventListener('click', function() {
        const videoUrl = 'rickroll.mp4'; // Replace with the actual path to your video

        const newWindow = window.open('', '_blank');
        newWindow.document.body.innerHTML = '<video id="autoplay-video" controls style="width: 100%;"></video>';

        const videoElement = newWindow.document.getElementById('autoplay-video');
        videoElement.src = videoUrl;

        // Play the video when the new window is fully loaded
        newWindow.onload = function() {
            videoElement.play();
        };
    });
   
    // footer kineme //
      document.getElementById('copy-number').addEventListener('click', function() {
                    const phoneNumber = '09753741892'; 
                    const tempInput = document.createElement('input');
                    tempInput.value = phoneNumber;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                    alert('Phone number copied: ' + phoneNumber);
                });
            
                document.getElementById('open-maps').addEventListener('click', function() {
                    const address = '314 Ibayo Silangan Naic Cavite'; 
                    const mapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=14.322469530874%2C120.76754719019' + encodeURIComponent(address);
                    window.open(mapsUrl, '_blank');
                });

    //chat display
    const chatSupport = document.querySelector('.chat-support');
    const messageSupport = document.querySelector('.message-support');
    const messageInput = messageSupport.querySelector('input[type="text"]');
    const messageSendButton = messageSupport.querySelector('button');
  
    chatSupport.addEventListener('click', () => {
      messageSupport.style.display = 'block';
      messageInput.focus();
    });
  
    messageSupport.addEventListener('click', (event) => {
      if (event.target === messageSupport || event.target.tagName === 'BUTTON') {
        messageSupport.style.display = 'none';
      }
    });
  
    document.addEventListener('click', (event) => {
      if (event.target !== chatSupport && event.target !== messageSupport && messageSupport.style.display === 'block') {
        messageSupport.style.display = 'none';
      }
    });
  
    messageInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        messageSendButton.click();
      }
    });
  
    const menuToggle = () => {
      const toggleButton = document.querySelector('#menu-toggle');
      const navItems = document.querySelector('#MenuItems');
  
      toggleButton.addEventListener('click', () => {
        navItems.style.maxHeight === '0px' ? navItems.style.maxHeight = '200px' : navItems.style.maxHeight = '0px';
      });
    };
  
    menuToggle();
    
    //login scrollingdown
    function showLoginForm() {
      var loginForm = document.getElementById('login-form');
      loginForm.style.display = 'block';
  }
  document.getElementById('cancel-button').addEventListener('click', function() {
    console.log('Cancel button clicked');
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = 'none'; // Hide the login form
});