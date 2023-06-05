customElements.define('component-tab-9', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content        
        this.renderRow()
    }

    content = /*html*/`
        <style>
            .f9-table{
                width:100%;
            }

            .f9-table , 
            .f9-table th, 
            .f9-table td {
                border: 1px solid black;
            }

            .f9-table td{
                text-align:center;
            }

            .f9-table td input{
                width:100%;
                border:0;
                height:3rem;
                text-align:center;
            }
        </style>            
        <table class="f9-table">
            <thead>
                <tr>
                    <td rowspan="2">สูตร(CODE)<br/>จำนวนเก๊ะ</td>
                    <td colspan="6">สัดส่วนสูตรผลิต / รายละเอียดการใช้วัตถุดิบ</td>
                    <td rowspan="2">ประเภทวัตถุดิบ / (BK / CL / US / CC / CT)</td>
                    <td rowspan="2">จน.ลัง <br/> Pallet</td>
                    <td rowspan="2">หมายเหตุ</td>
                </tr>
                <tr>
                    <td><input type="text" name="9-1-1"/></td>
                    <td><input type="text" name="9-1-2"/></td>
                    <td><input type="text" name="9-1-3"/></td>
                    <td><input type="text" name="9-1-4"/></td>
                    <td><input type="text" name="9-1-5"/></td>
                    <td><input type="text" name="9-1-6"/></td>
                </tr>
          </thead>
            <tbody></tbody>
        </table>
    `

    renderRow(){
        const ROW = 7

        for(let i=1; i<=ROW; i++){
            this.querySelector('tbody').innerHTML += /*html*/`
                <tr class="row${i+1}">
                    <td><input type="text" name="9-${i+1}-1"/></td>
                    <td><input type="text" name="9-${i+1}-2"/></td>
                    <td><input type="text" name="9-${i+1}-3"/></td>
                    <td><input type="text" name="9-${i+1}-4"/></td>
                    <td><input type="text" name="9-${i+1}-5"/></td>
                    <td><input type="text" name="9-${i+1}-6"/></td>
                    <td><input type="text" name="9-${i+1}-7"/></td>
                    <td><input type="text" name="9-${i+1}-8"/></td>
                    <td><input type="text" name="9-${i+1}-9"/></td>
                    <td><input type="text" name="9-${i+1}-10"/></td>
                </tr>
            `
        }
    }
})