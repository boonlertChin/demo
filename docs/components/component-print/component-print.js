customElements.define('component-print', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content
        this.addBehavior()
    }

    content = /*html*/`
        <section class="sheet padding-0mm no-print" style="height:3rem;box-shadow:0 0 0 0;z-index:1;">
            <div class="no-print" style="position: fixed; ">
                <button id="btn-cancel" class="btn btn-dark" style="left:1rem;">ยกเลิก</button>            
                <button id="btn-print" class="btn btn-info" style="right:1rem;">Print</button>
            </div>            
        </section>
        

        <section class="sheet padding-0mm">
            <img src="assets/print_page1.png" style="width:100%;"/>            
        </section>
        <section class="sheet padding-0mm">
            <img src="assets/print_page2.png" style="width:100%;"/>            
        </section>
    `

    addBehavior(){
        this.querySelector('#btn-cancel').onclick = e => {        
            window.dispatchEvent( new CustomEvent('app-mode',{
                detail: {
                    mode: 'form'
                }                   
            }))        
        }

        this.querySelector('#btn-print').onclick = e => {        
            window.print()
        }


    }
})