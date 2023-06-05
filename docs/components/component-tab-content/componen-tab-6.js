customElements.define('component-tab-6', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content
    }

    content = /*html*/`
        <style>
            .form-control{
                width:8rem;
                height:2rem;
            }

        </style>
        <div class="pl-5 pr-5">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th> ประเภท Rework </th>
                        <th> ก่อนอัดแท่ง (kg.) </th>
                        <th> หลังอัดแท่ง (kg.) </th>
                        <th> หมายเหตุ </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>-โลหะ</td>
                        <td><input type="text" name="6-1-1" class="form-control"/></td>
                        <td><input type="text" name="6-1-2" class="form-control"/></td>
                        <td><input type="text" name="6-1-3" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td>-จุดขาว/ดิบ</td>
                        <td><input type="text" name="6-2-1" class="form-control"/></td>
                        <td><input type="text" name="6-2-2" class="form-control"/></td>
                        <td><input type="text" name="6-2-3" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td>-คราบปูนขาว</td>
                        <td><input type="text" name="6-3-1" class="form-control"/></td>
                        <td><input type="text" name="6-3-2" class="form-control"/></td>
                        <td><input type="text" name="6-3-3" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td>-แผ่นปูนขาว</td>
                        <td><input type="text" name="6-4-1" class="form-control"/></td>
                        <td><input type="text" name="6-4-2" class="form-control"/></td>
                        <td><input type="text" name="6-4-3" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td>-เสียรูปทรง</td>
                        <td><input type="text" name="6-5-1" class="form-control"/></td>
                        <td><input type="text" name="6-5-2" class="form-control"/></td>
                        <td><input type="text" name="6-5-3" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td>-ปนเปื้อนน้ำมัน</td>
                        <td><input type="text" name="6-6-1" class="form-control"/></td>
                        <td><input type="text" name="6-6-2" class="form-control"/></td>
                        <td><input type="text" name="6-6-3" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td>-ปนเปื้อนสิ่งแปลกปลอม</td>
                        <td><input type="text" name="6-7-1" class="form-control"/></td>
                        <td><input type="text" name="6-7-2" class="form-control"/></td>
                        <td><input type="text" name="6-7-3" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td>-อื่นๆ</td>
                        <td><input type="text" name="6-8-1" class="form-control"/></td>
                        <td><input type="text" name="6-8-2" class="form-control"/></td>
                        <td><input type="text" name="6-8-3" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td>Total Rework</td>
                        <td><input type="text" name="6-7-1" disabled class="form-control"/></td>
                        <td><input type="text" name="6-7-2" disabled class="form-control"/></td>
                        <td><input type="text" name="6-7-3" disabled class="form-control"/></td>
                    </tr>
                    <tr>
                        <td>% Rework</td>
                        <td><input type="text" name="6-8-1" disabled class="form-control"/></td>
                        <td><input type="text" name="6-8-2" disabled class="form-control"/></td>
                        <td><input type="text" name="6-8-3" disabled class="form-control"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `

})