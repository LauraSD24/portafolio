// elemento de interfaz, se va a ejecutar cuando cargue el elemento, la página html
document.addEventListener("DOMContentLoaded",()=>{

    
    const ocupaciones = document.querySelector(".ocupaciones");
    
    function slider() {
        setTimeout(()=>{
            
            ocupaciones.style.color="red";
            ocupaciones.textContent="Ingeniera";
            
        },0);

        setTimeout(()=>{
            ocupaciones.textContent="Programadora";
            ocupaciones.style.color="blue";
            
        },4000);

        setTimeout(()=>{
            ocupaciones.textContent="Diseñadora";
            ocupaciones.style.color="purple";
            
        },8000);
    }
    // slider();
    // setInterval(slider,12000);

    const listItemA = [...document.querySelectorAll(".list__a")];
    const listElementB = [...document.querySelectorAll(".element__before")];
    const input_menu = document.querySelector(".input_menu");

    listItemA.map((item)=>{
        item.addEventListener("click",(e)=>{
            listElementB.map(itemB=>{
                itemB.classList.remove("item_active");
            })

            listElementB[parseInt(item.dataset.id)].classList.add("item_active");
            if(input_menu.checked){
                input_menu.checked = false;
            }
        })
    })

    const list_section = [...document.querySelectorAll(".secciones")];
    let h = window.innerHeight/3*2;

    const item_active =()=> {
        // if(listItemA[0].getBoundingClientRect().top < h){
    
        //     listElementB[0].classList.add("item_active");
        // }
        list_section.map((item)=>{
            if(item.getBoundingClientRect().top < h){
                listElementB.map(span=>{
                    span.classList.remove("item_active");
                })
                listElementB[parseInt(item.dataset.id)].classList.add("item_active");
            }
        })
    }

    // Evento para activar el item de la seccion presente en la vista
    window.addEventListener("scroll",(e)=>{
        item_active();
    })
})



