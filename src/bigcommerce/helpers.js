const Helpers = {
    /**
     * parsing description and extractiong tabs
     * @param {*} description
     * @returns array of parsed tabs
     */
    parseDescription(description) {
        const tabs = [];
        const el = document.createElement('div');
        el.innerHTML = description;
        const rows = el.querySelectorAll('div table tbody tr');
        if (!rows || rows.length === 0) {
            return null;
        }
        // eslint-disable-next-line consistent-return
        rows.forEach(r => {
            const cells = r.querySelectorAll('td');
            if (cells.length !== 2) {
                return null;
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
export default Helpers;
