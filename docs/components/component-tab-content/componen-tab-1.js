customElements.define('component-tab-1', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content
        this.addBehavior()
    }

    content = /*html*/`
        <section class="row" style="margin-bottom:5rem;">
            <div class="col-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check-str" name="check-str" value="">
                    <label class="form-check-label" for="check-str"> 
                        STR
                    </label>
                </div>
            </div>

            <div class="col-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check-mixture" name="check-mixture" value="">
                    <label class="form-check-label" for="check-mixture">
                        Mixture                                             
                    </label>
                </div>
            </div>

            <div class="col-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check-cv" name="check-cv" value="">
                    <label class="form-check-label" for="check-cv">
                        CV
                    </label>
                </div>
            </div>

            <div class="col-6">
                <div class="form-group">                    
                    <textarea class="form-control" id="remark" placeholder="remark" rows="2"></textarea>                    
                </div>
                <div class="row">                    
                    <div class="col">
                        <input disabled type="text" class="form-control" id="sum-bucket" placeholder="รวม (ลัง)">
                    </div>
                    <div class="col">
                        <input disabled type="text" class="form-control" id="sum-weight" placeholder="รวม (กก.)"> 
                    </div>
                    
                    
                </div>
            </div>            
        </section>


        <section>
            ${(function loop(){
                const tbl = 5
                const row = 3
                const shift = 5
                let html = ''
                for(let t=0;t<tbl;t++){

                    html += `
                        <section class="row">
                            <div class="col-4">
                                <div class="row">
                                    <div class="col text-right;">
                                        <label for="customer-packing"> Customer/Packaging</label>
                                    </div>
                                    <div class="col">
                                        <textarea class="form-control" id="customer-packing${t}" name="customer-packing${t}" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="row">
                                    <div class="col text-right">
                                        <label for="process-order"> Process Order</label>
                                    </div>
                                    <div class="col">
                                        <textarea class="form-control" id="process-order${t}" name="process-order${t}" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                
                                <div class="row">
                                    <div class="col" style="padding-left:4rem;"> 
                                        <div >รวม (ลัง) </div>
                                        <svg xmlns = "http://www.w3.org/2000/svg" width="150" height="80" style="display:inline-block;background:green;">
                                            <rect x="0" y="0" width="150" height="80" fill="#ffffff" stroke="#000000"/>
                                            <line x1="0" y1="80" x2="150" y2="0" style="stroke:rgb(0,0,0);stroke-width:1"/>                    
                                            <foreignObject x="0" y="0" width="150" height="80" >
                                                <body xmlns="http://www.w3.org/1999/xhtml">                                    
                                                    <div class="row">
                                                        <div class="col" style="padding-left:1.4rem;padding-top:0.2rem;"><input type="text" class="form-control" id="bucket${t}" name="bucket${t}" style="width:4rem;"></div>
                                                        <div class="col"></div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col"></div>
                                                        <div class="col" style="padding-right:1.5rem;padding-bottom:1rem;"><input type="text" class="form-control" id="weight${t}" name="weight${t}" style="width:4rem;"></div>
                                                    </div>                                                                                                    
                                                </body>
                                            </foreignObject>                            
                                        </svg>
                                    </div>          
                                    <div class="col">
                                        <div style="margin-top:4rem;">นน.กก. </div>
                                    </div>
                                
                                </div>
                            </div>
                        </section>                    
                    `

                    html += `
                        <table class="table table-bordered" style="border:2px solid black;margin-bottom:5rem;">
                            <thead style="background:#eee;">
                                <tr>
                                    <th scope="col">เวลาเริ่มต้น</th>
                                    <th scope="col">LOT NO.</th>
                                    <th scope="col">PALLET</th>
                                    <th scope="col">1</th>
                                    <th scope="col">2</th>
                                    <th scope="col">3</th>
                                    <th scope="col">4</th>
                                    <th scope="col">5</th>
                                </tr>
                            </thead>
                            <tbody>            
                    `

                    for(let r=0; r<row; r++){

                        html += `
                            <tr>
                                <td><input type="text" class="form-control" name="start${t}-${r}" id="start${t}-${r}"/></td>
                                <td><input type="text" class="form-control" name="lot-no${t}-${r}" id="lot-no${t}-${r}"/></td>
                                <td><input type="text" class="form-control" name="pallet${t}-${r}" id="pallet${t}-${r}"/></td>
                        `

                        for(let s=0; s<shift; s++){
                            html += `
                            <td>
                            <div class="row">
                                <div class="col-12">
                                    <select style="border:5px solid white;" class="select-shift" name="shift${t}-${r}-${s}" id="shift${t}-${r}-${s}"><option selected> </option><option value="a">A</option><option value="b">B</option></select>
                                </div>
                                <!--    
                                <div class="col-6">
                                    <select name="shift${t}-${r}-${s}" id="shift${t}-${r}-${s}"><option selected> </option><option value="a">A</option><option value="b">B</option></select>
                                </div>
                                <div class="col-4">
                                    <input type="checkbox" name="check${t}-${r}-${s}" id="check${t}-${r}-${s}"/>
                                </div>
                                -->
                            </td>
                            `

                        }

                        html += `
                            </tr>
                        `

                    }

                    html += `
                            </tbody>
                        </table>
                    `
                }
                return html
            })()

            }

        </section>

    `

    addBehavior(){        
        this.querySelectorAll('.select-shift').forEach( shiftBox => {
            shiftBox.onchange = e => {
                const val = e.target.value                                
                if(val === 'a' ){
                    e.target.style.borderColor = '#8aff93'
                    e.target.parentNode.style.background = '#8aff93'
                }else
                if(val === 'b' ){
                    e.target.style.borderColor = '#f7ff87'
                    e.target.parentNode.style.background = '#f7ff87'
                }else{
                    e.target.style.borderColor = '#ffffff'
                    e.target.parentNode.style.background = '#ffffff'
                }                
            }
        })
    }
})