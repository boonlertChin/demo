class ComponentReport04Layout extends HTMLElement{
    constructor(){
        super()        
        this.tab = 0
        this.render()        
    }

    static get observedAttributes (){ return ['attr-tabname'] }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'attr-tabname'){            
            // console.log('attr change callback ' + newValue)
            this.tab = newValue
            this.tabChange()
        }
    }

    render(){
        this.innerHTML = /*html*/`                        
        <div class="form-wrapper" style="padding:8rem;padding-top:2rem;">
            <div class="row">
                <div class="col-9">
                    <form>                
                        <component-tab-control attr-tabname="${this.tab}"></component-tab-control>                                
                        <div class="tab-content-wrapper">
                            <component-tab-content attr-tabname="${this.tab}"></component-tab-content>                                
                        </div>
                    </form>                     
                </div>
                <div class="col-3">
                    <div class="btn-wrapper">                    
                        <button id="btn-cancel" class="btn btn-secondary">ยกเลิก</button>
                        <button id="btn-save" class="btn btn-primary">Save</button>
                        <button id="btn-print" class="btn btn-success">Print</button>                
                    </div>
                    <component-map-control attr-tabname="${this.tab}"></component-map-control>                            
                </div>
            </div>


            
        </div>
        `

        this.addBehavior()
    }


    addBehavior(){
        const form = this.querySelector('form')
        form.onsubmit = (e)=> {
            e.preventDefault()
            console.log('form', form.testinput.value )
            console.log('form', form.testinput2.value )
        }

        this.querySelector('#btn-cancel').onclick = e => {
            location.href = 'report04-list.html'
        }

        this.querySelector('#btn-print').onclick = e => {        
            window.dispatchEvent( new CustomEvent('app-mode',{
                detail: {
                    mode: 'print'
                }                   
            }))        
        }
    }

          
    tabChange(){        
        this.querySelector('component-tab-control').setAttribute('attr-tabname', this.tab)        
        this.querySelector('component-tab-content').setAttribute('attr-tabname', this.tab)        
        this.querySelector('component-map-control').setAttribute('attr-tabname', this.tab)        
    }
}

customElements.define('component-report04-layout', ComponentReport04Layout)