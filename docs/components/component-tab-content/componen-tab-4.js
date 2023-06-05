customElements.define('component-tab-4', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content
    }

    content = /*html*/`
        <style>
            #form-f5 input{
                width:100%;
                /*
                border:0px;
                border-bottom:1px solid lightgrey;
                */
            }
        </style>
        <div class="p-5">
            <table class="table table-bordered" id="form-f5">
                <thead>
                    <tr>
                        <th width="20%">Dryer</th>
                        <th>DY-01</th>
                        <th>DY-02</th>
                        <th>DY-03</th>
                        <th>DY-04</th>
                        <th>DY-05</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>จำนวนเก๊ะ</td>
                        <td><input type="text" name="4-1-1"/></td>
                        <td><input type="text" name="4-1-2"/></td>
                        <td><input type="text" name="4-1-3"/></td>
                        <td><input type="text" name="4-1-4"/></td>
                        <td><input type="text" name="4-1-5"/></td>
                        <td><input disabled type="text" name="4-1-6"/></td>
                    </tr>

                    <tr>
                        <td>Runtime</td>
                        <td><input type="text" name="4-2-1"/></td>
                        <td><input type="text" name="4-2-2"/></td>
                        <td><input type="text" name="4-2-3"/></td>
                        <td><input type="text" name="4-2-4"/></td>
                        <td><input type="text" name="4-2-5"/></td>
                        <td><input disabled type="text" name="4-2-6"/></td>
                    </tr>

                    <tr>
                        <td>Delay</td>
                        <td><input type="text" name="4-3-1"/></td>
                        <td><input type="text" name="4-3-2"/></td>
                        <td><input type="text" name="4-3-3"/></td>
                        <td><input type="text" name="4-3-4"/></td>
                        <td><input type="text" name="4-3-5"/></td>
                        <td><input disabled type="text" name="4-3-6"/></td>
                    </tr>

                    <tr>
                        <td>Runtime ที่ใช้คำนวณ</td>
                        <td><input disabled type="text" name="4-4-1"/></td>
                        <td><input disabled type="text" name="4-4-2"/></td>
                        <td><input disabled type="text" name="4-4-3"/></td>
                        <td><input disabled type="text" name="4-4-4"/></td>
                        <td><input disabled type="text" name="4-4-5"/></td>
                        <td><input disabled type="text" name="4-4-6"/></td>
                    </tr>

                    <tr>
                        <td>ตัน/ชม.(แต่ละเตา)</td>
                        <td><input disabled type="text" name="4-5-1"/></td>
                        <td><input disabled type="text" name="4-5-2"/></td>
                        <td><input disabled type="text" name="4-5-3"/></td>
                        <td><input disabled type="text" name="4-5-4"/></td>
                        <td><input disabled type="text" name="4-5-5"/></td>
                        <td><input disabled type="text" name="4-5-6"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `

})