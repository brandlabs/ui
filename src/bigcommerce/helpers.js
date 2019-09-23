const Helpers = {
    /**
     * parsing description and extracting tabs
     * @param {*} description
     * @returns array of parsed tabs or null
     */
    parseDescription(description) {
        const tabs = [];
        const el = document.createElement('div');
        el.innerHTML = description;
        const rows = el.querySelectorAll('div >  table > tbody > tr');
        if (!rows || rows.length === 0) {
            return null;
        }

        Array.from(rows).forEach(r => {
            const cells = r.querySelectorAll('td');
            if (cells.length < 2) {
                return null;
            }
            return tabs.push({
                key: cells[0].textContent,
                description: cells[1].innerHTML,
            });
        });
        return tabs;
    },
};
export default Helpers;
