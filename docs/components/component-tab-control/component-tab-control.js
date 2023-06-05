class ComponentTabControl extends HTMLElement{
    constructor(){
        super()        
        this.tab = 0                 
        this.render()
    }

    static get observedAttributes (){ return ['attr-tabname'] }

    attributeChangedCallback(name, oldValue, newValue) {        
        if(name === 'attr-tabname'){                        
            this.tab = newValue
            this.updateTabTitle()
            this.updateTabActive()
        }
    }

    render(){
        this.innerHTML = `
        
            <div class="row" style="margin-bottom:3rem;">
                <div class="col">
                    <component-report-title attr-title="รายงานผลผลิตประจำวัน"></<component-report-title>
                </div>
                <div class="col" id="tab-title-display">
                    ${tabName[this.tab].caption}
                </div>
                
            </div>

            <div class="row">
                <ul class="nav nav-tabs" ></ul>
            </div>
       
            
        `

        this.updateTabActive()
        
    }

    updateTabTitle(){        
        // console.log('updateTabTitle')
        this.querySelector('#tab-title-display').innerHTML = tabName[this.tab].caption
    }

    updateTabActive(){ // 0-7             
        // console.log('this this this ' , this.tab)
        this.querySelector('.nav-tabs').innerHTML = `
            ${tabName.map( (tab,index) => `
            <li class="nav-item">
                <a class="${this.tab==index ? 'nav-link active' : 'nav-link' }" href="#" data-tab='${index}'>${tab.tab}</a>
            </li>                
            `).join('')}
        `
        this.addTabBehavior()
    }

    addTabBehavior(){        
        this.querySelectorAll('.nav-link').forEach( tab => {
            tab.onclick = (e) => {                                
                //trigger global event
                window.dispatchEvent( new CustomEvent('update-tab',{
                    detail: {
                        name: "tab change: " + e.currentTarget.dataset.tab                ,
                        tab: e.currentTarget.dataset.tab                ,
                    }                   
                }))
            }
        })
    }

}

customElements.define('component-tab-control', ComponentTabControl)