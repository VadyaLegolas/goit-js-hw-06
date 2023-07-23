const refs = {
    ul: document.querySelector("#categories"),
    li: document.querySelectorAll('.item'),
}

console.log('Number of categories:', refs.ul.children.length);

refs.li.forEach(element => {
    console.log("");
    console.log('Category:', element.querySelector('h2').textContent);
    console.log('Elements:', element.querySelectorAll('li').length);
    
});
