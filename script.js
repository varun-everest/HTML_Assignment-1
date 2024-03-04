function changeStyle(buttonId) {
    
    document.body.classList.remove('b1', 'b2', 'b3', 'b4'); //which removes all exixting styles for buttons
    document.body.classList.add(buttonId); //Adding styles to given buttonid
    document.body.classList.remove('active-button');
    
    const content = document.getElementById('content');
    const ele = document.getElementById(buttonId);
    
    ele.classList.add('active-button');
    

    switch (buttonId) {
        case 'b1':
            content.innerHTML = '<h1>Home</h1><p>We understand the excitement of receiving your new treasures. Benefit from our fast and reliable shipping services, ensuring your purchases arrive at your doorstep promptly.<br>It is a destination for creating the home you have always dreamed of. <br> Begin your journey to a more stylish and comfortable home today!</p><br><br><b>Discover an array of products to elevate your living spaces:</b><ul type=none><li><b>Furniture</b></li><li><b>Decor</b></li><li><b>Essentials</b></li></ul>';
            
            break;
        case 'b2':
            content.innerHTML = '<h1>About us</h1><p>We found V-store with one main goal in mind : providing high-quality, carefully developed products, Made for everyone. Our passion for excellence has driven us from in beginning and continue to propel us going forward. We know that every item counts and strive to make your entire shopping experience as rewarding as possible.</p>';
            break;
        case 'b3':
            content.innerHTML = '<h1>Services</h1><ul><li>Curated Collections: Explore thoughtfully curated collections that cater to various tastes and preferences. Whether you prefer modern minimalism, classic elegance, or eclectic vibes, we have something for everyone.</li><li>Quality Assurance: We prioritize quality to ensure your purchases stand the test of time. Each product is carefully selected, ensuring durability, functionality, and aesthetic appeal.</li><li>Seamless Shopping Experience: Our user-friendly website makes browsing, selecting, and purchasing your favorite items a breeze. Enjoy a hassle-free shopping experience from the comfort of your home.</li></ul></p>';
            break;
        case 'b4':
            content.innerHTML = '<h1>contact us</h1><input type="email" placeholder="email" /><br><br><input type="tel" placeholder="Mobile number" /><br><br><input type="submit" value="Send" />';
            break;
        default:
            break;
    }
    
}