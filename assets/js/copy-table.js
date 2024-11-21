// document.getElementById('copyTable').addEventListener('click', function () {
//     console.log("JavaScript loaded successfully!");
//     // Select the table
//     const rows = Array.from(document.querySelectorAll('table tr'));
//     const csv = rows.map(row => {
//         const cells = Array.from(row.querySelectorAll('th, td'));
//         return cells.map(cell => cell.textContent).join(',');
//     }).join('\n');

//     // Copy to clipboard
//     navigator.clipboard.writeText(csv).then(() => {
//         alert('Table copied as CSV!');
//     }).catch(err => {
//         console.error('Failed to copy:', err);
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    const tables = Array.from(document.querySelectorAll('table'));
    const buttons = Array.from(document.querySelectorAll('.copy-button'));

    if (tables.length !== buttons.length) {
        console.warn("Number of tables does not match the number of buttons.");
        return;
    }

    buttons.forEach((button, index) => {
        const table = tables[index];
        button.addEventListener('click', () => {
            const rows = Array.from(table.querySelectorAll('tr'));
            const csv = rows.map(row => {
                const cells = Array.from(row.querySelectorAll('th, td'));
                return cells.map(cell => cell.textContent).join(',');
            }).join('\n');

            navigator.clipboard.writeText(csv).then(() => {
                alert(`Table ${index + 1} copied as CSV!`);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    });
});
