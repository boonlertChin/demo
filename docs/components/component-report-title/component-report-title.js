class ComponentReportTitle extends HTMLElement{
    constructor(){
        super()        
        this.title = 'TITLE'     
    }

    static get observedAttributes (){ return ['attr-title'] }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'attr-title'){            
            this.title = newValue
        }
    }
    connectedCallback(){
        this.innerHTML = h3`${this.title}`
    }              
}
customElements.define('component-report-title', ComponentReportTitle)