customElements.define('component-tab-2', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content
    }

    content = /*html*/`
        <div class="row container">
            <div class="col-8">

                <table class="table table-hover">
                    <tbody>
                        <tr>
                            <td>1. น้ำหนัก HNS, HAS</td>
                            <td><input type="text" name="f2-1-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>
                            <td class="pl-3"><input disabled type="text" name="f2-1-2" style="width:3rem"/> <span class="ml-2">%</span></td>
                        </tr>
                        <tr>
                            <td>2. น้ำหนักยาง SBR</td>
                            <td><input disabled type="text" name="f2-2-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>
                            <td class="pl-3"><input disabled type="text" name="f2-2-2" style="width:3rem"/> <span class="ml-2">%</span></td>
                        </tr>
                        <tr>
                            <td>3. น้ำหนักสาร STEARIC acid</td>
                            <td><input type="text" name="f2-3-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>
                            <td class="pl-3"><input disabled type="text" name="f2-3-2" style="width:3rem"/> <span class="ml-2">%</span></td>
                        </tr>
                        <tr>
                            <td>4. น้ำหนักยาง Reprocess</td>
                            <td><input type="text" name="f2-4-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>
                            <td class="pl-3"><input disabled type="text" name="f2-4-2" style="width:3rem"/> <span class="ml-2">%</span></td>
                        </tr>
                        <tr>
                            <td>5. น้ำหนักยาง Rework</td>
                            <td><input disabled type="text" name="f2-5-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>
                            <td class="pl-3"><input disabled type="text" name="f2-5-2" style="width:3rem"/> <span class="ml-2">%</span></td>
                        </tr>
                        <tr>
                            <td>6. น้ำหนักอื่นๆ</td>
                            <td><input disabled type="text" name="f2-6-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>
                            <td class="pl-3"><input type="text" name="f2-6-2" style="width:3rem"/> <span class="ml-2">%</span></td>
                        </tr>
                        <tr>
                            <td>7. น้ำหนักยางค้างลัง(ก่อนหน้า)</td>
                            <td><input disabled type="text" name="f2-7-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>
                            <td class="pl-3"><span class="mr-2">( จำนวน </span><input disabled type="text" name="f2-7-2" style="width:3rem"/> <span class="ml-2">ก้อน)</span></td>
                        </tr>
                        <tr>
                            <td>8. น้ำหนักวัตถุดิบรวม</td>
                            <td><input disabled type="text" name="f2-8-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>                            
                            <td class="pl-3">(1+2+3+4+5+6+7)</td>
                        </tr>
                        <tr>
                            <td colspan="3">9. น้ำหนัก Biscuit = น้ำหนักผลผลิตรวม - น้ำหนักวัตถุดิบรวม(8) + Rework + ค้างลัง</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="text" name="f2-9-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>
                            <td class="pl-3"><input disabled type="text" name="f2-9-2" style="width:3rem"/> <span class="ml-2">%</span></td>
                        </tr>
                        <tr>
                            <td colspan="3">10. น้ำหนักป้อนเข้า = น้ำหนักผลผลิต - ค้างลังก่อน + ค้างลังผลิต + Rework (เกิด)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input disabled type="text" name="f2-10-1" style="width:8rem"/> <span class="ml-2">kg.</span></td>
                            <td class="pl-3"></td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div class="col-4">
                <div class="text-center">
                    Lot. สารเคมี
                </div>
                <div class="mt-3">
                    <input type="text" name="lot-chemical1"/>
                </div>
                <div class="mt-3">
                    <input type="text" name="lot-chemical2"/>
                </div>
                <div class="mt-3">
                    <input type="text" name="lot-chemical3"/>
                </div>
            </div>
        </div>

    `

})