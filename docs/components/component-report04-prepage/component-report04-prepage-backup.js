class ComponentReport04Prepage extends HTMLElement{
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
                <div class="col-8">
                    <!--
                    -->
                    <div style="margin-bottom:5rem;">
                        <component-report-title attr-title="รายงานผลผลิตประจำวัน"></<component-report-title>
                    </div>
                    
                    <div id="btn-new-wrapper">
                        <button class="btn btn-primary" id="btn-new">เพิ่มรายงานประจำวัน</button>
                    </div>

                    <div id="content-body-wrapper" class="d-none">
                        <form id="frm-new-report">
                            <div class="form-group row">
                                <label for="date" class="col-sm-2 col-form-label">วันที่</label>
                                <div class="col-sm-10">
                                    <input type="date" class="form-control" id="date" name="date" style="width:15rem;">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="date" class="col-sm-2 col-form-label">กะ</label>
                                <div class="col-sm-10">
                                    <select class="form-control" name="shift" id="shift" style="width:15rem;">
                                        <option value="" selected>เลือกกะ</option>
                                        <option value="a">A</option>
                                        <option value="b">B</option>
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="date" class="col-sm-2 col-form-label"></label>
                                <div class="col-sm-10">
                                    <button class="btn btn-secondary" id="btn-cancel">ยกเลิก</button>
                                    <button class="btn btn-success">เพิ่มรายงาน</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                                            
                </div>
                <div class="col-4">
                    <component-list></component-list>
                </div>
            </div>        
        </div>
        `

        this.addBehavior()
    }

    addBehavior(){

        const form = this.querySelector('form')

        this.querySelector('#btn-new').onclick = () => {
            this.querySelector('#btn-new-wrapper').classList.add('d-none')
            this.querySelector('#content-body-wrapper').classList.remove('d-none')
        }

        this.querySelector('#btn-cancel').onclick = () => {
            this.querySelector('#btn-new-wrapper').classList.remove('d-none')
            this.querySelector('#content-body-wrapper').classList.add('d-none')
            form.reset()
        }



        form.onsubmit = (e)=> {
            e.preventDefault()
            console.log('date', form.date.value )
            console.log('shift', form.shift.value )

            //demo link page
            window.location.replace("report04-form.html");
        }
    }

          
    tabChange(){        
        this.querySelector('component-tab-control').setAttribute('attr-tabname', this.tab)        
        this.querySelector('component-tab-content').setAttribute('attr-tabname', this.tab)        
        this.querySelector('component-map-control').setAttribute('attr-tabname', this.tab)        
    }
}

customElements.define('component-report04-prepage', ComponentReport04Prepage)