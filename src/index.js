console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    // Challenge 1: Fetch Dog Images and Render to DOM
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById('dog-image-container');
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching dog images:', error));
  
    // Challenge 2: Fetch Dog Breeds and Render to <ul>
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById('dog-breeds');
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          dogBreedsList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching dog breeds:', error));
  
    // Challenge 3: Change Font Color on <li> Click
    dogBreedsList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change font color to blue on click
      }
    });
  
    // Challenge 4: Filter Breeds Based on Dropdown Selection
    const breedDropdown = document.getElementById('breed-dropdown');
  
    breedDropdown.addEventListener('change', function() {
      const selectedLetter = breedDropdown.value;
      const lis = dogBreedsList.getElementsByTagName('li');
  
      for (let i = 0; i < lis.length; i++) {
        const breedName = lis[i].textContent.toLowerCase();
        if (breedName.startsWith(selectedLetter)) {
          lis[i].style.display = 'list-item'; // Show matching breeds
        } else {
          lis[i].style.display = 'none'; // Hide non-matching breeds
        }
      }
    });
  
    // Additional functionality: Submitting comments (assuming form and list IDs are 'comment-form' and 'list')
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const commentText = commentInput.value;
      const commentElement = document.createElement('div');
      commentElement.textContent = commentText;
      commentList.appendChild(commentElement);
      commentInput.value = '';
    });
  
    // Additional functionality: Pause/resume functionality (assuming button ID is 'pause')
    const pauseBtn = document.getElementById('pause');
    let timer;
  
    pauseBtn.addEventListener('click', function() {
      if (pauseBtn.textContent === 'pause') {
        clearInterval(timer);
        pauseBtn.textContent = 'resume';
      } else {
        timer = setInterval(function() {
          incrementCounter(); // Assuming incrementCounter is defined elsewhere
        }, 1000);
        pauseBtn.textContent = 'pause';
      }
    });
  
    // Additional functionality: Increment counter (assuming button IDs are 'plus' and 'minus')
    let count = 0;
    const counter = document.getElementById('counter');
  
    function incrementCounter() {
      count++;
      counter.textContent = count;
    }
  
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
  
    plusBtn.addEventListener('click', incrementCounter);
    minusBtn.addEventListener('click', function() {
      count--;
      counter.textContent = count;
    });
  
  });