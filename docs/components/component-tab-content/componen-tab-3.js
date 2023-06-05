customElements.define('component-tab-3', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content
    }

    content = /*html*/`
        <div class="p-5">
            <table class="table">
                <thead>
                    <tr>
                        <th>ชนิดผลิตภัณฑ์</th>
                        <th>จำนวน ถัง</th>
                        <th>รวม นน. (กก.)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. STR</td>
                        <td><input type="text" name="3-1-2" style="width:8rem"/></td>
                        <td><input type="text" name="3-1-3" style="width:8rem"/></td>
                    </tr>
                    <tr>
                        <td>1. Mixture</td>
                        <td><input type="text" name="3-2-2" style="width:8rem"/></td>
                        <td><input type="text" name="3-2-3" style="width:8rem"/></td>
                    </tr>
                    <tr>
                        <td>3. STR__CV</td>
                        <td><input type="text" name="3-3-2" style="width:8rem"/></td>
                        <td><input type="text" name="3-3-3" style="width:8rem"/></td>
                    </tr>
                    <tr>
                        <td>4. อื่นๆ <input type="text" name="3-4-1" style="width:8rem;margin-left:2rem;"/></td>
                        <td><input type="text" name="3-4-2" style="width:8rem"/></td>
                        <td><input type="text" name="3-4-3" style="width:8rem"/></td>
                    </tr>
                    <tr>
                        <td>TOTAL</td>
                        <td><input disabled type="text" name="3-5-2" style="width:8rem"/></td>
                        <td><input disabled type="text" name="3-5-3" style="width:8rem"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `

})