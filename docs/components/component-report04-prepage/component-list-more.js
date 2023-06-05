customElements.define('component-list-more', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content        
    }

    content = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">วันที่</th>
                    <th scope="col">กะ</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="table-list">
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>A</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                <tr> <th scope="row">dd/mm/yyyy</th> <td>B</td> <td><a href="report04-form.html">แก้ไข</a></td> </tr>
                
            
            </tbody>
        </table>
        
    `
    

})