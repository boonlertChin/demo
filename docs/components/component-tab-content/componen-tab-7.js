customElements.define('component-tab-7', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content
    }

    content = /*html*/`
        <style>
            .f7-table-wrapper{
                width:30rem;
                margin:auto;                
            }

            .f7-table-wrapper table{
                width:100%;
            }

            .f7-table-wrapper table td{
                padding:0.6rem 0;
                
            }
        </style>

        <div class="f7-table-wrapper">
            
            <table> 
                <tr>
                    <th>% DRC </th>
                    <td><input type="text" name="7-1-1" class="form-control"/></td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>น้ำหนักยางร่วง </td>
                    <td><input type="text" name="7-2-1" class="form-control"/></td>
                    <td>kg.</td>
                </tr>
                <tr>
                    <td>น้ำหนักเฉลี่ยต่อก้อน</td>
                    <td><input type="text" name="7-3-1" disabled class="form-control"/></td>
                    <td>kg.</td>
                </tr>
                <tr>
                    <td>น้ำหนักเฉลี่ยต่อเก๊ะ</td>
                    <td><input type="text" name="7-4-1" class="form-control"/></td>
                    <td>kg.</td>
                </tr>
                <tr>
                    <td>จำนวนเก๊ะออกเตา </td>
                    <td><input type="text" name="7-5-1" class="form-control"/></td>
                    <td>เก๊ะ</td>
                </tr>
                <tr>
                    <td>จำนวนเก๊ะเข้าเตา</td>
                    <td><input type="text" name="7-6-1" class="form-control"/></td>
                    <td>เก๊ะ</td>
                </tr>
                <tr>
                    <td>จำนวนเก๊ะเดินไลน์ STR</td>
                    <td><input type="text" name="7-7-1" class="form-control"/></td>
                    <td>เก๊ะ</td>
                </tr>
                <tr>
                    <td>จำนวนเก๊ะ Rework</td>
                    <td><input type="text" name="7-8-1" class="form-control"/></td>
                    <td>เก๊ะ</td>
                </tr>
                <tr>
                    <td>Runtime ที่ใช้คำนวณ</td>
                    <td><input type="text" name="7-9-1" class="form-control"/></td>
                    <td>นาที</td>
                </tr>
                <tr>
                    <td>น้ำมันพืช / สารละลาย จน.ลิตร</td>
                    <td><input type="text" name="7-10-1" class="form-control"/></td>
                    <td>ml.</td>
                </tr>
                <tr>
                    <td>จำนวน ชม. SD-03</td>
                    <td><input type="text" name="7-11-1" class="form-control"/></td>
                    <td>ชม.</td>
                </tr>
            </table>
        </div>

    `

})