const helpers = {
    /**
     * parsing description and extractiong tabs
     * @param {*} description
     * @returns array of parsed tabs
     */
    parseDescription(description) {
        const tabs = [];
        const el = document.createElement('body');
        el.innerHTML = description;
        const rows = el.querySelectorAll('body table tbody tr');
        if (!rows || rows.length === 0) {
            throw new Error("Invalid Table. Couldn't Parse Description Data");
        }
        rows.forEach(r => {
            const cells = r.querySelectorAll('td');
            if (cells.length !== 2) {
                throw new Error('Invalid Table. Invalid Number of Columns. Table Should Have 2 Columns');
            }
            tabs.push({
                key: cells[0].innerHTML,
                description: cells[1].innerHTML,
                visible: false,
            });
        });
        return tabs;
    },
};
export default helpers;
