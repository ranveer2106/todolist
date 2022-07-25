document.querySelector('#sinput').onclick = function () {


    if (document.querySelector('#input').value == '') {
        alert("please enter something");
    }
    else {
        document.querySelector('#tasklist').innerHTML +=
            `
        <div class="taskele">
            <div class="content">
            ${document.querySelector('#input').value}
            </div>
            <button class="complete">
            <i class="fa-solid fa-check fa-2x"></i>
            </button>
            <button class="delete">
                <i class="fa-solid fa-trash-can fa-2x"></i>
            </button>
        </div>
        `;


        let tasknow = document.querySelectorAll(".delete");
        for (let i = 0; i < tasknow.length; i++) {
            tasknow[i].onclick = function () {
                this.parentNode.remove();
            }

        }
        let complete = document.querySelectorAll(".taskele");
        for (let k = 0; k < complete.length; k++) {
            complete[k].onclick = function () {
                this.classList.toggle('completed');
            }

        }

        document.querySelector('#input').value = "";
    }
}


