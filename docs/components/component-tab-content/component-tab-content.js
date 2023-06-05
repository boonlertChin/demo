class ComponentTabContent extends HTMLElement{
    constructor(){
        super()        
        this.tab = 0                 
        this.render()
    }

    static get observedAttributes (){ return ['attr-tabname'] }

    attributeChangedCallback(name, oldValue, newValue) {        
        if(name === 'attr-tabname'){                        
            this.tab = newValue
            this.showTab()            
        }
    }

    render(){
        this.innerHTML = /*html*/`
            <div class="tab-content" id="tab1">
                <component-tab-1></component-tab-1>
            </div>
            <div class="tab-content" id="tab2">
                <component-tab-2></component-tab-2>
            </div>
            <div class="tab-content" id="tab3">
                <component-tab-3></component-tab-3>
            </div>
            <div class="tab-content" id="tab4">
                <component-tab-4></component-tab-4>
            </div>
            <div class="tab-content" id="tab5">
                <component-tab-5></component-tab-5>
            </div>
            <div class="tab-content" id="tab6">
                <component-tab-6></component-tab-6>
            </div>
            <div class="tab-content" id="tab7">
                <component-tab-7></component-tab-7>
            </div>
            <div class="tab-content" id="tab8">
                <component-tab-8></component-tab-8>
            </div>
            <div class="tab-content" id="tab9">
                <component-tab-9></component-tab-9>
            </div>
            
        `

        this.showTab()        
    }

    showTab(){
        const tabIds = [
            '#tab1',
            '#tab2',
            '#tab3',
            '#tab4',
            '#tab5',
            '#tab6',
            '#tab7',
            '#tab8',
        ]

        //hide all tab
        tabIds.forEach( id => this.querySelector(id).classList.add('d-none'))

        //show current tab
        console.log(this.tab)
        this.querySelector(`#tab${Number(this.tab)+1}`).classList.remove('d-none')
    }   

    

}

customElements.define('component-tab-content', ComponentTabContent)