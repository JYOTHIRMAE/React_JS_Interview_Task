import React from 'react'

function Filter() {
    function onFilterTextBoxChanged() {
        gridOptions.api.setQuickFilter(document.getElementById('filter-text-box').value);
    }
    return (
        <div>

            <input type="text" id="filter-text-box" placeholder="QuickFilter..." oninput={onFilterTextBoxChanged} />

        </div>
    )
}

export default Filter
