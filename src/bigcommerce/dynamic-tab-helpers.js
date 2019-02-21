const helpers = {

    /**
     * parsing description and extractiong tabs
     * @param {*} description 
     * @returns array of parsed tabs
     */
    parseDescription(description){
        let tabs = [];
        let el = document.createElement( 'dynamicTabs' );
        el.innerHTML = description;
        let rows = el.querySelectorAll('dynamicTabs table tbody tr');
        rows.forEach((r)=>{
          let cells = r.querySelectorAll('td');
          cells[0].innerText
            tabs.push({
            key: cells[0].innerHTML,
            description: cells[1].innerHTML,
            visible: false
          });
        });
        console.log(tabs);
        return tabs;
    }
}
export default helpers;