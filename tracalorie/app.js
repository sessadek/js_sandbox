// Storage Controller
const StorageCtrl = (function() {
    return {
        stroreItem: function(item) {
            let items;
            // Check if any items in LS
            if(localStorage.getItem('items') === null) {
                items = [];
                // Push new items
                items.push(item);

                // Set LS
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                // Get what is already in LS 
                items = JSON.parse(localStorage.getItem('items'));

                // Push new items
                items.push(item);

                // Re Set LS
                localStorage.setItem('items', JSON.stringify(items));

            }
        },
        updateItemStorage: function(updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index) {
                if(item.id === updatedItem.id) {
                    items.splice(index, 1, updatedItem);
                }
            });
            // Re Set LS
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function(id) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index) {
                if(item.id === id) {
                    items.splice(index, 1);
                }
            });
            // Re Set LS
            localStorage.setItem('items', JSON.stringify(items));
        },
        getItemsFromStorage: function() {
            let items;
            // Check if any items in LS
            if(localStorage.getItem('items') === null) {
                items = [];
            } else {
                // Get what is already in LS 
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        clearItemsFromStorage: function() {
            localStorage.removeItem('items');
        }
    }
    
})();

// ItemCtrl
const ItemCtrl = (function() {
    // Constructor Item
    const Item = function(id, name, calories) {
        this.id = id;
        this.name= name;
        this.calories = calories;
    }

    // Data Structure
    const data = {
        items : StorageCtrl.getItemsFromStorage(),
        currentItem : null,
        totalCalories : 0
    }

    // Public methods
    return {
        getItems: function() {
            return data.items;
        },
        addItem: function(name, calories) {
            // Create ID
            let ID;
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // Create new item
            newItem = new Item(ID, name, calories);

            // add to items Array
            data.items.push(newItem);

            return newItem;
        },
        getIemById: function(id) {
            let found = null;

            // Loop through items
            data.items.forEach(function(item) {
                if(item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        updateItem: function(name, calories) {
            // String Calories to number
            calories = parseInt(calories);

            let found = null;

            // Loop through items
            data.items.forEach(function(item) {
                if(item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: function(id) {
            // Get ids
            const ids = data.items.map(function(item) {
                return item.id;
            });

            // Get index
            const index = ids.indexOf(id);

            // Remove item
            data.items.splice(index, 1);

        },
        clearAllItems: function() {
            data.items = [];
        },
        setCurrentItem: function(currentItem) {
            data.currentItem = currentItem;
        },
        getCurrentItem: function() {
            return data.currentItem;
        },
        getTotalCalories: function() {
            let total = 0;
            // Loop through items and data cals 
            data.items.forEach(item => {
                total += item.calories;
            });
             
            // Set total cal in data structure
            data.totalCalories = total;

            // Return total
            return data.totalCalories;
        },
        initTotalCalories: function() {
            data.totalCalories = 0;
            return data.totalCalories;
        },
        logData: function() {
            return data;
        }
        
    };
})();

// UICtrl
const UICtrl = (function() {

    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }

    // Public methods
    return {
        populateItemList: function(items) {
            let html = '';
            items.forEach(item => {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>`
            });
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value,
            }
        },

        addListItem: function(item) {
            // Show the list
            UICtrl.showList();
            // Crete li item
            const li = document.createElement('li');
            // Add class
            li.className = 'collection-item';
            // Add id
            li.id = `item-${item.id}`;
            // Add HTML
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>`;
            // Insert Item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        updateListItem: function(item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);
            // Turn NodeList to Array
            listItems = Array.from(listItems);
            listItems.forEach(function(listItem) {
                const itemID = listItem.getAttribute('id');
                if(itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                      <i class="edit-item fa fa-pencil"></i>
                    </a>`;
                }
            });
        },
        deleteListItem: function(id) {
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        removeItems: function() {
            let listItems = document.querySelectorAll(UISelectors.listItems);
            // Turn NodeList to Array
            listItems = Array.from(listItems);
            listItems.forEach(function(listItem) {
                listItem.remove();
            });
        },
        clearInput: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function() {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        getSelectors: function() {
            return UISelectors;
        },
        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },

        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function() {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function() {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        showList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'block';
        }

        
    }
})();

// App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl) {
    // Load Event Listener
    const loadEventListeners = function() {
        // Get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable submit on enter
        document.addEventListener('keypress', function(e) {
            const keyCode = e.keyCode || e.which;
            if(keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

        // Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // Back button item event
        document.querySelector(UISelectors.backBtn).addEventListener('click', function(e) {
            UICtrl.clearEditState();
            e.preventDefault();
        });

        // Clear items event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);

    }

    // item add submit
    const itemAddSubmit = function(e) {

        // Get form input from UICtrl
        const input = UICtrl.getItemInput();

        // Check for name and calories
        if(input.name !== '' && input.calories !== '') {
            // add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            // Add item to UI list
            UICtrl.addListItem(newItem);

            // Get total Calories
            const totalCalories = ItemCtrl.getTotalCalories();

            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            // Store item in LS
            StorageCtrl.stroreItem(newItem);

            // Clear input
            UICtrl.clearInput();
        }

        
        e.preventDefault();
    }

    // Click edit item
    const itemEditClick = function(e) {
        if(e.target.classList.contains('edit-item')) {
            // Get list item id
            const id = parseInt((e.target.parentElement.parentElement.id).split('-')[1]);

            // Get item to edit
            const itemToEdit = ItemCtrl.getIemById(id);

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to Form
            UICtrl.addItemToForm();
        }
        e.preventDefault();
    }
    // item update submit
    const itemUpdateSubmit = function(e) {
        // Get item input
        const input = UICtrl.getItemInput();

        // Update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        // Update UI
        UICtrl.updateListItem(updatedItem);

        // Get total Calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        // Update local Storage
        StorageCtrl.updateItemStorage(updatedItem);

        // Clear Edit State
        UICtrl.clearEditState();

        e.preventDefault();
    }

    // item delete submit
    const itemDeleteSubmit = function(e) {

        // Get current item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);

        // Get total Calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        // Delete from local Storage
        StorageCtrl.deleteItemFromStorage(currentItem.id);

        // Clear Edit State
        UICtrl.clearEditState();

        e.preventDefault();
    }

    // Clear items event
    const clearAllItemsClick = function(e) {
        // Delete All items from data structure
        ItemCtrl.clearAllItems();

        // Delete All items from UI
        UICtrl.removeItems();

        // Get total Calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        // Clear Edit State
        UICtrl.clearEditState();
        
        // Clear all from local Storage
        StorageCtrl.clearItemsFromStorage();

        // HideUL List
        UICtrl.hideList();

        e.preventDefault();
    }
    // Public methods
    return {
        init: function() {
            // Clear edit state
            UICtrl.clearEditState();

            // Fetch Items from data structure 
            const items = ItemCtrl.getItems();

            // Check if any items
            if(items.length === 0) {
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            }

            // Get total Calories
            const totalCalories = ItemCtrl.getTotalCalories();

            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            

            // Load Event Listener
            loadEventListeners();

        }
    }
})(ItemCtrl, StorageCtrl, UICtrl);

// Initialize App

App.init();
