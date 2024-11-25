let recipeUI;

class RecipeStore {
  constructor() {
    this.state = {
      recipes: [
        {
          id: 1,
          title: "Vegetarian Pasta Primavera",
          category: "pasta",
          time: "30 min",
          difficulty: "Easy",
          tags: ["vegetarian", "italian", "quick", "healthy"],
          image: "./assets/Vegan-Pasta-Primavera.jpg",
          servings: "4 servings",
          calories: "380 kcal",
          ingredients: [
            "1 lb mixed vegetables (carrots, broccoli, bell peppers)",
            "1 lb pasta",
            "4 cloves garlic, minced",
            "1/4 cup olive oil",
            "1/2 cup parmesan cheese",
            "Salt and pepper to taste",
          ],
          instructions: [
            "Boil pasta according to package instructions",
            "Sauté vegetables in olive oil until tender-crisp",
            "Add minced garlic and cook until fragrant",
            "Combine pasta with vegetables",
            "Top with parmesan cheese and serve",
          ],
        },
        {
          id: 2,
          title: "Grilled Chicken Caesar Salad",
          category: "salads",
          time: "25 min",
          difficulty: "Medium",
          tags: ["healthy", "protein", "lunch", "chicken"],
          image: "./assets/grilled-chicken-caesar-salad.jpg",
          servings: "4 servings",
          calories: "420 kcal",
          ingredients: [
            "2 chicken breasts",
            "2 heads romaine lettuce",
            "1 cup caesar dressing",
            "1 cup croutons",
            "1/2 cup parmesan cheese",
            "Salt and pepper to taste",
          ],
          instructions: [
            "Season and grill chicken until cooked through",
            "Chop romaine lettuce into bite-sized pieces",
            "Slice grilled chicken",
            "Toss lettuce with dressing",
            "Top with chicken, croutons, and parmesan",
          ],
        },
        {
          id: 3,
          title: "Triple Chocolate Cake",
          category: "desserts",
          time: "60 min",
          difficulty: "Medium",
          tags: ["baking", "sweet", "chocolate", "party"],
          image: "./assets/Triple-Chocolate-Cake.jpg",
          servings: "12 servings",
          calories: "450 kcal",
          ingredients: [
            "2 cups all-purpose flour",
            "2 cups sugar",
            "3/4 cup unsweetened cocoa powder",
            "2 eggs",
            "1 cup milk",
            "1/2 cup vegetable oil",
            "2 tsp vanilla extract",
            "1 cup boiling water",
          ],
          instructions: [
            "Preheat oven to 350°F (175°C)",
            "Mix all dry ingredients in a large bowl",
            "Add eggs, milk, oil, and vanilla",
            "Stir in boiling water",
            "Pour into greased cake pans",
            "Bake for 30-35 minutes",
            "Cool before frosting",
          ],
        },
        {
          id: 4,
          title: "Spicy Thai Green Curry",
          category: "asian",
          time: "45 min",
          difficulty: "Medium",
          tags: ["spicy", "thai", "dinner", "curry"],
          image: "./assets/green-curry-new.jpg",
          servings: "4 servings",
          calories: "380 kcal",
          ingredients: [
            "2 cans coconut milk",
            "4 tbsp green curry paste",
            "2 chicken breasts",
            "1 cup mixed vegetables",
            "Fish sauce to taste",
            "Thai basil leaves",
          ],
          instructions: [
            "Heat coconut milk in a large pot",
            "Add curry paste and stir until fragrant",
            "Add sliced chicken and cook through",
            "Add vegetables and simmer",
            "Season with fish sauce",
            "Garnish with Thai basil",
          ],
        },
        {
          id: 5,
          title: "Classic Beef Burger",
          category: "burgers",
          time: "20 min",
          difficulty: "Easy",
          tags: ["beef", "american", "quick", "grill"],
          image: "./assets/burger.jpg",
          servings: "4 servings",
          calories: "520 kcal",
          ingredients: [
            "1 lb ground beef",
            "4 burger buns",
            "4 cheese slices",
            "1 onion",
            "Lettuce and tomato",
            "Condiments of choice",
          ],
          instructions: [
            "Form beef into 4 patties",
            "Season with salt and pepper",
            "Grill for 4-5 minutes per side",
            "Add cheese to melt",
            "Toast the buns",
            "Assemble with toppings",
          ],
        },
        {
          id: 6,
          title: "Mediterranean Quinoa Bowl",
          category: "healthy",
          time: "35 min",
          difficulty: "Easy",
          tags: ["vegetarian", "mediterranean", "healthy", "lunch"],
          image: "./assets/Mediterranean-Bowl-Recipe.jpg",
          servings: "4 servings",
          calories: "350 kcal",
          ingredients: [
            "1 cup quinoa",
            "2 cups water",
            "1 cucumber",
            "Cherry tomatoes",
            "Feta cheese",
            "Olive oil and lemon dressing",
          ],
          instructions: [
            "Cook quinoa in water",
            "Chop vegetables",
            "Combine ingredients in bowls",
            "Top with feta cheese",
            "Drizzle with dressing",
            "Serve immediately",
          ],
        },
        {
          id: 7,
          title: "Carbonara Spaghetti",
          category: "pasta",
          time: "25 min",
          difficulty: "Medium",
          tags: ["italian", "pasta", "pork", "creamy"],
          image: "./assets/creamy-spaghetti.jpeg",
          servings: "4 servings",
          calories: "450 kcal",
          ingredients: [
            "1 lb spaghetti",
            "4 egg yolks",
            "1 cup pecorino cheese",
            "Guanciale or pancetta",
            "Black pepper",
            "Salt",
          ],
          instructions: [
            "Cook pasta al dente",
            "Crisp the guanciale",
            "Mix egg yolks and cheese",
            "Combine with hot pasta",
            "Add pasta water as needed",
            "Serve with extra cheese",
          ],
        },
        {
          id: 8,
          title: "Greek Salad",
          category: "salads",
          time: "15 min",
          difficulty: "Easy",
          tags: ["mediterranean", "healthy", "vegetarian", "quick"],
          image: "./assets/salad.jpg",
          servings: "4 servings",
          calories: "280 kcal",
          ingredients: [
            "Cucumber",
            "Tomatoes",
            "Red onion",
            "Kalamata olives",
            "Feta cheese",
            "Olive oil dressing",
          ],
          instructions: [
            "Chop vegetables",
            "Combine in a bowl",
            "Add olives and feta",
            "Dress with olive oil",
            "Season with oregano",
            "Serve fresh",
          ],
        },
        {
          id: 9,
          title: "Tiramisu",
          category: "desserts",
          time: "40 min",
          difficulty: "Hard",
          tags: ["italian", "coffee", "dessert", "no-bake"],
          image: "./assets/tiramisu.jpg",
          servings: "8 servings",
          calories: "400 kcal",
          ingredients: [
            "Ladyfinger cookies",
            "Mascarpone cheese",
            "Strong coffee",
            "Eggs",
            "Sugar",
            "Cocoa powder",
          ],
          instructions: [
            "Prepare coffee and let cool",
            "Mix mascarpone and eggs",
            "Dip cookies in coffee",
            "Layer in dish",
            "Chill for 4 hours",
            "Dust with cocoa",
          ],
        },
        {
          id: 10,
          title: "Sushi Roll Platter",
          category: "asian",
          time: "90 min",
          difficulty: "Hard",
          tags: ["japanese", "fish", "rice", "party"],
          image: "./assets/sushi.jpeg",
          servings: "6 servings",
          calories: "320 kcal",
          ingredients: [
            "Sushi rice",
            "Nori sheets",
            "Fresh fish",
            "Cucumber",
            "Avocado",
            "Soy sauce",
          ],
          instructions: [
            "Cook and season rice",
            "Prepare fillings",
            "Assemble rolls",
            "Cut into pieces",
            "Arrange on platter",
            "Serve with condiments",
          ],
        },
      ],
      categories: [
        { id: "all", name: "All Recipes" },
        { id: "pasta", name: "Pasta Dishes" },
        { id: "salads", name: "Fresh Salads" },
        { id: "desserts", name: "Desserts" },
        { id: "asian", name: "Asian Cuisine" },
        { id: "burgers", name: "Burgers & Sandwiches" },
        { id: "healthy", name: "Healthy Options" },
        { id: "quick", name: "Quick Meals" },
      ],
      activeCategory: "all",
    };
  }

  getAllRecipes() {
    return this.state.recipes;
  }

  getRecipeById(id) {
    return this.state.recipes.find((recipe) => recipe.id === id);
  }

  getCategories() {
    return this.state.categories;
  }

  filterRecipes(searchTerm, category) {
    return this.state.recipes.filter((recipe) => {
      const matchesSearch = searchTerm
        ? recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : true;

      const matchesCategory =
        category && category !== "all" ? recipe.category === category : true;

      return matchesSearch && matchesCategory;
    });
  }
}

class RecipeUI {
  constructor() {
    this.store = new RecipeStore();
    this.init();
  }

  init() {
    this.renderCategories();
    this.renderRecipes(this.store.getAllRecipes());
    this.setupEventListeners();
  }

  setupEventListeners() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value;
      const activeCategory = document.querySelector(".category-item.active")
        ?.dataset.category;
      this.renderRecipes(this.store.filterRecipes(searchTerm, activeCategory));
    });

    document.getElementById("closeRecipeView").addEventListener("click", () => {
      document.getElementById("recipeViewOverlay").style.display = "none";
    });

    document
      .getElementById("recipeViewOverlay")
      .addEventListener("click", (e) => {
        if (e.target.id === "recipeViewOverlay") {
          document.getElementById("recipeViewOverlay").style.display = "none";
        }
      });
  }

  renderCategories() {
    const categoryList = document.getElementById("categoryList");
    categoryList.innerHTML = "";

    this.store.getCategories().forEach((category) => {
      const li = document.createElement("li");
      li.className = `category-item ${category.id === "all" ? "active" : ""}`;
      li.textContent = category.name;
      li.dataset.category = category.id;

      li.addEventListener("click", () => {
        document
          .querySelectorAll(".category-item")
          .forEach((item) => item.classList.remove("active"));
        li.classList.add("active");
        const searchTerm = document.getElementById("searchInput").value;
        this.renderRecipes(this.store.filterRecipes(searchTerm, category.id));
      });

      categoryList.appendChild(li);
    });
  }

  renderRecipes(recipes) {
    const recipeGrid = document.getElementById("recipeGrid");
    recipeGrid.innerHTML = "";

    recipes.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "recipe-card animate-in";
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-content">
          <h3 class="recipe-title">${recipe.title}</h3>
          <div class="recipe-meta">
            <span><i class="fas fa-clock"></i> ${recipe.time}</span>
            <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
          </div>
          <div class="recipe-tags">
            ${recipe.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
          </div>
          <button class="btn btn-primary view-recipe" data-recipe-id="${
            recipe.id
          }">
            <i class="fas fa-eye"></i> View Recipe
          </button>
        </div>
      `;

      const viewButton = card.querySelector(".view-recipe");
      viewButton.addEventListener("click", () => this.showRecipe(recipe.id));

      recipeGrid.appendChild(card);
    });
  }

  showRecipe(id) {
    const recipe = this.store.getRecipeById(id);
    const overlay = document.getElementById("recipeViewOverlay");

    document.getElementById("recipeViewImage").src = recipe.image;
    document.getElementById("recipeViewTitle").textContent = recipe.title;
    document.getElementById("recipeViewTime").textContent = recipe.time;
    document.getElementById("recipeViewServings").textContent = recipe.servings;
    document.getElementById("recipeViewCalories").textContent = recipe.calories;

    const ingredientsList = document.getElementById("recipeViewIngredients");
    ingredientsList.innerHTML = recipe.ingredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");

    const instructionsList = document.getElementById("recipeViewInstructions");
    instructionsList.innerHTML = recipe.instructions
      .map((instruction) => `<li>${instruction}</li>`)
      .join("");

    overlay.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  recipeUI = new RecipeUI();
});
