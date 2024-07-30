document.addEventListener('DOMContentLoaded', () => {   //----- Funcão de ADD  algo na lista
    const resourceForm = document.getElementById('resource-form');
    const resourceList = document.getElementById('resource-list');
    let resources = JSON.parse(localStorage.getItem('resources')) || [];
    let editingResourceIndex = null;

    if (resourceForm) {
        resourceForm.addEventListener('submit', (event) => {      
            event.preventDefault();
            const resourceName = document.getElementById('resource-name').value;
            const resourceType = document.getElementById('resource-type').value;

            if (editingResourceIndex !== null) {
                resources[editingResourceIndex] = { id: resources[editingResourceIndex].id, name: resourceName, type: resourceType };
                editingResourceIndex = null;
            } else {
                const resourceId = resources.length + 1;
                resources.push({ id: resourceId, name: resourceName, type: resourceType });
            }

            localStorage.setItem('resources', JSON.stringify(resources));
            resourceForm.reset();
            updateResourceList();
        });

        updateResourceList();
    }

    if (resourceList && !resourceForm) {
        updateResourceList();
    }

    function updateResourceList() {             //----- Função de Update
        resourceList.innerHTML = '';
        resources.forEach((resource, index) => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = resource.id;
            row.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = resource.name;
            row.appendChild(nameCell);

            const typeCell = document.createElement('td');
            typeCell.textContent = resource.type;
            row.appendChild(typeCell);

            if (resourceForm) {
                const actionsCell = document.createElement('td');

                const editButton = document.createElement('button');
                editButton.textContent = 'Editar';
                editButton.addEventListener('click', () => editResource(index));
                actionsCell.appendChild(editButton);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Excluir';
                deleteButton.addEventListener('click', () => deleteResource(index));
                actionsCell.appendChild(deleteButton);

                row.appendChild(actionsCell);
            }

            resourceList.appendChild(row);
        });
    }

    function editResource(index) {           //----- Função de Editar 
        const resource = resources[index];
        document.getElementById('resource-name').value = resource.name;
        document.getElementById('resource-type').value = resource.type;
        editingResourceIndex = index;
    }

    function deleteResource(index) {        //------ Função de Deletar
        resources.splice(index, 1);
        localStorage.setItem('resources', JSON.stringify(resources));
        updateResourceList();
    }
});