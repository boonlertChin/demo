customElements.define('component-tab-8', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content        
        this.renderRow()
    }

    content = /*html*/`
        <style>
            .f8-table{
                width:100%;
            }

            .f8-table , 
            .f8-table th, 
            .f8-table td {
                border: 1px solid black;
            }

            .f8-table td{
                text-align:center;
            }

            .f8-table td input{
                width:100%;
                border:0;
                height:3rem;
                text-align:center;
            }
        </style>

        <table class="f8-table">
            <thead>
                <tr>
                    <td rowspan="2">หมายเลข Process</td>
                    <td width="5%" rowspan="2">จน.ลังผลิตรวม</td>
                    <td rowspan="2">หมายเลข MIGO</td>
                    <td width="8%" rowspan="2">ชั่วโมงการผลิต (hr)</td>
                    <td width="12%" colspan="2">นน. สารเคมี</td>
                    <td width="12%" rowspan="2">Reprocess</td>
                    <td width="12%" rowspan="2">ผสมลงลัง</td>
                    <td width="12%" rowspan="2">Cy</td>
                </tr>
                <tr>
                    <td>HNS</td>
                    <td>SBR</td>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `

    renderRow(){
        const ROW = 10

        for(let i=0; i<ROW; i++){
            this.querySelector('tbody').innerHTML += /*html*/`
                <tr class="row${i+1}">
                    <td><input type="text" name="8-${i+1}-1"/></td>
                    <td><input type="text" name="8-${i+1}-2"/></td>
                    <td><input type="text" name="8-${i+1}-3"/></td>
                    <td><input type="text" name="8-${i+1}-4"/></td>
                    <td><input type="text" name="8-${i+1}-5"/></td>
                    <td><input type="text" name="8-${i+1}-6"/></td>
                    <td><input type="text" name="8-${i+1}-7"/></td>
                    <td><input type="text" name="8-${i+1}-8"/></td>
                    <td><input type="text" name="8-${i+1}-9"/></td>
                </tr>
            `
        }
    }
})