class ComponentReport04Prepage extends HTMLElement{
    constructor(){
        super()        
        this.tab = 0
        this.render_default()      
        this.addBehavior1()  
        this.yearSelected = null
        this.monthSelected = null
    }

    static get observedAttributes (){ return ['page'] }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'page' && newValue === 'more'){
            this.render_more()       
            this.addBehavior2()  
        }else{
            this.render_default()
            this.addBehavior1()  
        }
    }

    render_more(){
        this.innerHTML = /*html*/ `
            <div class="more-wrapper" style="padding:8rem;padding-top:2rem;">
                <div class="row">
                    <div class="col-8">
                        
                        <div style="margin-bottom:5rem;">
                            <a id="btn-list-default" class="btn btn-dark" href="#">กลับ</a>                                                
                            <component-report-title attr-title="รายงานผลผลิตประจำวัน"></<component-report-title>
                        </div>
                        
                        <div id="btn-new-wrapper">
                            <select id="select-year">
                                <option disabled selected>เลือกปี</option>
                                <option>2024</option>
                                <option>2023</option>
                                <option>2023</option>                                
                            </select>                            

                            <select id="select-month">
                                <option disabled selected>เลือกเดือน</option>
                                <option>มกราคม</option>
                                <option>กุมภาพันธ์</option>
                                <option>มีนาคม</option>                                
                                <option>เมษายน</option>                                
                                <option>พฤษภาคม</option>                                
                                <option>มิถุนายน</option>                                
                                <option>กรกฏาคม</option>                                
                                <option>สิงหาคม</option>                                
                                <option>กันยายน</option>                                
                                <option>ตุลาคม</option>                                
                                <option>พฤศจิกายน</option>                                
                                <option>ธันวาคม</option>                                
                            </select>                            
                        </div>


                        
                                                
                    </div>
                    <div class="col-4">
                        <div id="demo-list" class="d-none">
                            <h4>DEMO</h4>
                            <component-list-more></component-list-more>
                        </div>
                    </div>
                </div>        
            </div>
        `
    }

    render_default(){
        this.innerHTML = /*html*/`
        <div class="form-wrapper" style="padding:8rem;padding-top:2rem;">
            <div class="row">
                <div class="col-8">
                    
                    <div style="margin-bottom:5rem;">
                        <component-report-title attr-title="รายงานผลผลิตประจำวัน"></<component-report-title>
                    </div>
                    
                    <div id="btn-new-wrapper">
                        <button class="btn btn-primary" id="btn-new">เพิ่มรายงานประจำวัน</button>
                    </div>

                    <div id="content-body-wrapper" class="d-none">
                        <form id="frm-new-report">
                            <div class="form-group row">
                                <label for="date" class="col-sm-3 col-form-label text-right">วันที่</label>
                                <div class="col-sm-9">
                                    <input type="date" class="form-control" id="date" name="date" style="width:15rem;">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="date" class="col-sm-3 col-form-label text-right">กะ</label>
                                <div class="col-sm-9">
                                    <select class="form-control" name="shift" id="shift" style="width:15rem;">
                                        <option value="" selected>เลือกกะ</option>
                                        <option value="a">A</option>
                                        <option value="b">B</option>
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="shift-start" class="col-sm-3 col-form-label text-right">เวลาเริ่มต้น</label>
                                <div class="col-sm-9">
                                    <select class="form-control" name="shift-start" id="shift-start" style="width:15rem;">
                                        <option>00:00</option><option>01:00</option><option>02:00</option><option>03:00</option><option>04:00</option><option>05:00</option><option>06:00</option><option>07:00</option>
                                        <option selected>08:00</option><option>09:00</option><option>10:00</option><option>11:00</option><option>12:00</option><option>13:00</option><option>14:00</option><option>15:00</option>
                                        <option>16:00</option><option>17:00</option><option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option><option>22:00</option><option>23:00</option>                                        
                                    </select>                                    
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="shift-end" class="col-sm-3 col-form-label text-right">เวลาสิ้นสุด</label>
                                <div class="col-sm-9">
                                    <select class="form-control" name="shift-end" id="shift-end" style="width:15rem;">
                                        <option>00:00</option><option>01:00</option><option>02:00</option><option>03:00</option><option>04:00</option><option>05:00</option><option>06:00</option><option>07:00</option>
                                        <option selected>08:00</option><option>09:00</option><option>10:00</option><option>11:00</option><option>12:00</option><option>13:00</option><option>14:00</option><option>15:00</option>
                                        <option>16:00</option><option>17:00</option><option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option><option>22:00</option><option>23:00</option>                                        
                                    </select>                                    
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="record-by" class="col-sm-3 col-form-label text-right">ผู้บันทึก(ผนง.บันทึก/หัวหน้าชุดผลิต)</label>
                                <div class="col-sm-9">
                                    <input class="form-control" type="text" name="record-by" id="record-by" style="width:15rem;"> 
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="date" class="col-sm-3 col-form-label"></label>
                                <div class="col-sm-9">
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
    }

    addBehavior1(){

        const form = this.querySelector('form')

        this.querySelector('#btn-new').onclick = () => {
            this.querySelector('#btn-new-wrapper').classList.add('d-none')
            this.querySelector('#content-body-wrapper').classList.remove('d-none')
        }

        this.querySelector('#btn-cancel').onclick = (e) => {
            e.preventDefault()
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


    addBehavior2(){

        this.querySelector('#select-year').onchange = e => {
            this.yearSelected = e.target.value

            if(this.yearSelected !== null && this.monthSelected !== null){
                this.querySelector('#demo-list').classList.remove('d-none')
            }
        }

        this.querySelector('#select-month').onchange = e => {
            this.monthSelected = e.target.value
            if(this.yearSelected !== null && this.monthSelected !== null){
                this.querySelector('#demo-list').classList.remove('d-none')
            }
        }




        this.querySelector('#btn-list-default').onclick = e => {
            window.dispatchEvent( new CustomEvent('prepage-show',{
                detail: { page: "default" }                   
            }))
        }
    }

          
    tabChange(){        
        this.querySelector('component-tab-control').setAttribute('attr-tabname', this.tab)        
        this.querySelector('component-tab-content').setAttribute('attr-tabname', this.tab)        
        this.querySelector('component-map-control').setAttribute('attr-tabname', this.tab)        
    }
}

customElements.define('component-report04-prepage', ComponentReport04Prepage)