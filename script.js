 const title = document.querySelector("h1")
// title.textContent = "=]"

const grocerListDiv = document.querySelector("div"); //selected div

const newItemForList = document.createElement("p"); //create element
newItemForList.innerText = "vegetables"; //add text
console.log("new ptag", newItemForList);

newItemForList.addEventListener("mouseover", (event) => {
  console.log(event.target.innerText);
});

grocerListDiv.append(newItemForList); //add it to

const newItemForList2 = document.querySelector("p");
newItemForList2.innerText = "vitavegaman";

grocerListDiv.append(newItemForList2);

const groceryFormForNewItem = document.querySelector("form")
groceryFormForNewItem.addEventListener("submit", (event)=>{
    console.log("submitting form", event.target["item-weight"].value)

    event.preventDefault()

    const newItemForList3 = document.createElement("p")
    newItemForList3.innerText = "cheese"
    // console.log("3", newItemForList3)
    grocerListDiv.append(newItemForList3)

    event.target.reset()
    // groceryFormForNewItem.reset()
})