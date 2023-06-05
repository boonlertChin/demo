customElements.define('component-tab-5', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content
    }

    content = /*html*/`
        

        <div class="container">

            <div class="row mb-3">        
                    <span class="pl-5">Breakdown</span>
                    <span class="pl-5 pr-5">=</span>
                    <input type="text"  name="5-1-1"/>        
                    <span class="pl-5 pr-5">นาที</span>
            </div>

            <div class="row mb-3">        
                    <span class="pl-5">Downtime&nbsp; </span>
                    <span class="pl-5 pr-5">=</span>
                    <input type="text"  name="5-2-1"/>        
                    <span class="pl-5 pr-5">นาที</span>
            </div>

            <div class="row mb-3">        
                    <span class="pl-5">กำลังการผลิต (Capacity)</span>
                    <span class="pl-5 pr-5">=</span>
                    <input disabled type="text"  name="5-3-1"/>        
                    <span class="pl-5 pr-5">นาที</span>
            </div>

            <div class="row p-5">
                <table class="table table-bordered" id="form-f5">
                    <thead>
                        <tr>
                            <th>Before Dryer</th>
                            <th>In Dryer</th>
                            <th>After Dryper</th>
                            <th>In Pallet</th>
                            <th>Total</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>                            
                            <td><input type="text" name="5-4-1"/></td>
                            <td><input type="text" name="5-4-2"/></td>
                            <td><input type="text" name="5-4-3"/></td>
                            <td><input type="text" name="5-4-4"/></td>
                            <td><input disabled type="text" name="5-4-5"/></td>                            
                        </tr>
                        <tr>                            
                            <td><input type="text" name="5-5-1"/></td>
                            <td><input disabled type="text" name="5-5-2"/></td>
                            <td><input disabled type="text" name="5-5-3"/></td>
                            <td><input type="text" name="5-5-4"/></td>
                            <td><input disabled type="text" name="5-5-5"/></td>                            
                        </tr>
                    <tbody>
                </table>
            </div>

            <div class="row">
                <span class="pl-5 pr-5">นน.เฉลี่ยต่อเก๊ะ : </span>
                <input disabled type="text"  name="5-6-1" style="width:6rem;"/>        
                <span class="pl-3 pr-5"> kg.  </span>
                <span class="pl-3 pr-5">จำนวนเก๊ะที่ออกเตา : </span>
                <input disabled type="text"  name="5-6-2" style="width:6rem;"/>        
                <span class="pl-3 pr-5">เก๊ะ</span>
            </div>

        </div>
    `

})