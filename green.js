// ========== (30 items card akhane) ================
  const plants = [
    { id: 1, image: "https://i.ibb.co/cSQdg7tf/mango-min.jpg", name: "Mango Tree", description: "Fast-growing tropical tree with juicy mangoes.", category: "Fruit Tree", price: 500 },
    { id: 2, image: "https://i.ibb.co/WNbbx3rn/guava-min.jpg", name: "Guava Tree", description: "Hardy fruit tree, rich in Vitamin C.", category: "Fruit Tree", price: 350 },
    { id: 3, image: "https://i.ibb.co/xt98PwZq/jackfruit-min.jpg", name: "Jackfruit Tree", description: "Largest tropical fruit tree with sweet flesh.", category: "Fruit Tree", price: 800 },
    { id: 4, image: "https://i.ibb.co/1YzsVWjm/Gulmohar-min.jpg", name: "Gulmohar", description: "Flame of the Forest with vibrant red flowers.", category: "Flowering Tree", price: 400 },
    { id: 5, image: "https://i.ibb.co/qY8qS7YN/champa-min.jpg", name: "Champa", description: "Fragrant white blossoms for gardens.", category: "Flowering Tree", price: 300 },
    { id: 6, image: "https://i.ibb.co/MxPrt83c/Krishnachura-min.jpg", name: "Krishnachura", description: "Orange-red ornamental flowers.", category: "Flowering Tree", price: 450 },
    { id: 7, image: "https://i.ibb.co/FkH6MRhR/banyan-min.jpg", name: "Banyan Tree", description: "Majestic shade tree with aerial roots.", category: "Shade Tree", price: 1200 },
    { id: 8, image: "https://i.ibb.co/CKXhH7nP/neem-min.jpg", name: "Neem Tree", description: "Medicinal shade tree, insect-repelling.", category: "Shade Tree", price: 600 },
    { id: 9, image: "https://i.ibb.co/svQdDjS8/rain-min.jpg", name: "Rain Tree", description: "Fast-growing umbrella canopy.", category: "Shade Tree", price: 900 },
    { id: 10, image: "https://i.ibb.co/50K7Cgv/amla-min.jpg", name: "Amla Tree", description: "Vitamin C rich fruits.", category: "Medicinal Tree", price: 550 },
    { id: 11, image: "https://i.ibb.co/MxSDCxV4/arjun-min.jpg", name: "Arjun Tree", description: "Heart-strengthening herbal tree.", category: "Medicinal Tree", price: 700 },
    { id: 12, image: "https://i.ibb.co/pB68Sz1g/bael-min.jpg", name: "Bael Tree", description: "Pulp used as coolant and digestive aid.", category: "Medicinal Tree", price: 500 },
    { id: 13, image: "https://i.ibb.co/391CtLWD/teak-min.jpg", name: "Teak", description: "Durable hardwood for furniture.", category: "Timber Tree", price: 2000 },
    { id: 14, image: "https://i.ibb.co/QvGgW8Fb/mahogony-min.jpg", name: "Mahogany", description: "Premium wood for fine furniture.", category: "Timber Tree", price: 2500 },
    { id: 15, image: "https://i.ibb.co/Lz6BSq4Z/sal-min.jpg", name: "Sal Tree", description: "Strong hardwood for construction.", category: "Timber Tree", price: 1800 },
    { id: 16, image: "https://i.ibb.co/fdYphDNS/pine-min.jpg", name: "Pine", description: "Evergreen, needle-like leaves.", category: "Evergreen Tree", price: 1500 },
    { id: 17, image: "https://i.ibb.co/YTJjYcGX/cypress-min.jpg", name: "Cypress", description: "Tall evergreen, privacy screens.", category: "Evergreen Tree", price: 1300 },
    { id: 18, image: "https://i.ibb.co/xSL9M8tg/fir-min.jpg", name: "Fir", description: "Conical evergreen for gardens.", category: "Evergreen Tree", price: 1400 },
    { id: 19, image: "https://i.ibb.co/x8gt87ks/bonsai-min.jpg", name: "Bonsai", description: "Miniature tree, artfully grown.", category: "Ornamental Plant", price: 800 },
    { id: 20, image: "https://i.ibb.co/Y79mHSng/areca-palm-min.jpg", name: "Areca Palm", description: "Elegant indoor air-purifying palm.", category: "Ornamental Plant", price: 600 },
    { id: 21, image: "https://i.ibb.co/8gqbH5LC/fan-palm-min.jpg", name: "Fan Palm", description: "Decorative palm with fan leaves.", category: "Ornamental Plant", price: 900 },
    { id: 22, image: "https://i.ibb.co/xqFD0WyS/golden-bamboo-min.jpg", name: "Golden Bamboo", description: "Fast-growing golden bamboo.", category: "Bamboo", price: 700 },
    { id: 23, image: "https://i.ibb.co/BKZ52h3q/black-bamboo-min.jpg", name: "Black Bamboo", description: "Exotic black stems bamboo.", category: "Bamboo", price: 900 },
    { id: 24, image: "https://i.ibb.co/FL3c30KJ/giant-bamboo-min.jpg", name: "Giant Bamboo", description: "Tallest bamboo species.", category: "Bamboo", price: 1200 },
    { id: 25, image: "https://i.ibb.co/svtZJ7nw/money-plant-min.jpg", name: "Money Plant", description: "Indoor climber, brings prosperity.", category: "Climber", price: 350 },
    { id: 26, image: "https://i.ibb.co/Ngzp0tkJ/Bougainvillea-min.jpg", name: "Bougainvillea", description: "Vibrant climbing flowers.", category: "Climber", price: 400 },
    { id: 27, image: "https://i.ibb.co/4ZrDBFHC/passion-flower-min.jpg", name: "Passion Flower", description: "Ornamental and medicinal climber.", category: "Climber", price: 500 },
    { id: 28, image: "https://i.ibb.co/VWNQPDMR/water-lily-min.jpg", name: "Water Lily", description: "Floating aquatic plant.", category: "Aquatic Plant", price: 300 },
    { id: 29, image: "https://i.ibb.co/4g4J0Tkj/lotus-min.jpg", name: "Lotus", description: "Sacred aquatic plant.", category: "Aquatic Plant", price: 450 },
    { id: 30, image: "https://i.ibb.co/0jLycYdv/Water-Hyacinth-min.jpg", name: "Water Hyacinth", description: "Floating plant with violet flowers.", category: "Aquatic Plant", price: 250 }
  ];

 
  const categoryList = document.getElementById("category-list");
  const cardContainer = document.getElementById("card-container");
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotal = document.getElementById("cart-total");
  const spinner = document.getElementById("spinner");
  const modal = document.getElementById("detail-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImg = document.getElementById("modal-img");
  const modalDesc = document.getElementById("modal-desc");
  const modalCat = document.getElementById("modal-cat");
  const modalPrice = document.getElementById("modal-price");

  let cart = [];
  const categories = [...new Set(plants.map(p => p.category))];

  // ================ Functions ====

  function loadCategories() {
    // All Button
    const liAll = document.createElement("li");
    const btnAll = document.createElement("button");
    btnAll.textContent = "All Trees";
    btnAll.className = "w-full text-left px-2 py-1 bg-green-200 rounded";
    btnAll.addEventListener("click", () => { setActiveButton(btnAll); displayPlants(plants); });
    liAll.appendChild(btnAll);
    categoryList.appendChild(liAll);

    // Other Categories
    categories.forEach(cat => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = cat;
      btn.className = "w-full text-left px-2 py-1 bg-green-100 rounded hover:bg-green-200";
      btn.addEventListener("click", () => {
        setActiveButton(btn);
        const filtered = plants.filter(p => p.category === cat);
        displayPlants(filtered);
      });
      li.appendChild(btn);
      categoryList.appendChild(li);
    });
  }

  function setActiveButton(btn) {
    const buttons = categoryList.querySelectorAll("button");
    buttons.forEach(b => b.classList.remove("active-btn"));
    btn.classList.add("active-btn");
  }

  function displayPlants(list) {
    cardContainer.innerHTML = "";
    cardContainer.classList.add("hidden");
    spinner.style.display = "block";

    setTimeout(() => {
      spinner.style.display = "none";
      cardContainer.classList.remove("hidden");

      list.forEach(plant => {
        const card = document.createElement("div");
        card.className = "card h-100 bg-base-100 shadow-md";

        card.innerHTML = `
          <figure class="px-3 pt-3">
            <img src="${plant.image}" alt="${plant.name}" class="rounded h-40 w-full object-cover"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title cursor-pointer text-green-700 hover:underline">${plant.name}</h2>
            <p class="text-sm text-gray-600">${plant.description.slice(0,80)}...</p>
            <div class="flex justify-between items-center mt-2">
              <span class="badge badge-success">${plant.category}</span>
              <span class="font-bold">৳${plant.price}</span>
            </div>
            <div class="card-actions mt-4">
              <button class="btn btn-success w-full bg-green-700 rounded-full text-white">Add to Cart</button>
            </div>
          </div>
        `;

        card.querySelector(".card-title").addEventListener("click", () => showModal(plant));
        card.querySelector("button").addEventListener("click", () => addToCart(plant));
        cardContainer.appendChild(card);
      });
    }, 500);
  }

  function showModal(plant) {
    modalTitle.textContent = plant.name;
    modalImg.src = plant.image;
    modalDesc.textContent = plant.description;
    modalCat.textContent = plant.category;
    modalPrice.textContent = plant.price;
    modal.classList.remove("hidden");
  }

  closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));

  function addToCart(plant) {
    cart.push(plant);
    renderCart();
  }

  function removeFromCart(index) {
    cart.splice(index,1);
    renderCart();
  }

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      const div = document.createElement("div");
      div.className = "flex justify-between text-sm items-center";
      div.innerHTML = `<span>${item.name}</span> <span>৳${item.price} <button class="text-red-600 font-bold ml-2">❌</button></span>`;
      div.querySelector("button").addEventListener("click", () => removeFromCart(index));
      cartItemsContainer.appendChild(div);
    });
    cartTotal.textContent = `৳${total}`;
  }


  loadCategories();
  displayPlants(plants);