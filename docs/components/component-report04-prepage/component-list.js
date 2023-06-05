customElements.define('component-list', class extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = this.content
        this.activateEvent()
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
                <tr>
                    <th scope="row">10/5/2023</th>
                    <td>A</td>                    
                    <td><a href="report04-form.html">แก้ไข</a></td>
                </tr>
                <tr>
                    <th scope="row">11/5/2023</th>
                    <td>B</td>                    
                    <td><a href="report04-form.html">แก้ไข</a></td>
                </tr>
                <tr>
                    <th scope="row">12/5/2023</th>
                    <td>A</td>                    
                    <td><a href="report04-form.html">แก้ไข</a></td>
                </tr>
                <tr>
                    <th scope="row">13/5/2023</th>
                    <td>B</td>                    
                    <td><a href="report04-form.html">แก้ไข</a></td>
                </tr>
                <tr>
                    <th scope="row">14/5/2023</th>
                    <td>A</td>                    
                    <td><a href="report04-form.html">แก้ไข</a></td>
                </tr>
                <tr>
                    <th scope="row">15/5/2023</th>
                    <td>B</td>                    
                    <td><a href="report04-form.html">แก้ไข</a></td>
                </tr>
                <tr>
                    <th scope="row">16/5/2023</th>
                    <td>A</td>                    
                    <td><a href="report04-form.html">แก้ไข</a></td>
                </tr>
                <tr>
                    <th scope="row">17/5/2023</th>
                    <td>B</td>                    
                    <td><a href="report04-form.html">แก้ไข</a></td>
                </tr>
            
            </tbody>
        </table>

        <div class="text-center" style="margin-top:5rem;">
            <a id="btn-list-more" class="btn btn-info btn-block" href="#">เพิ่มเติม</a>
        </div>
    `


    activateEvent(){
        
        this.querySelector('#btn-list-more').onclick = e => {
            e.preventDefault()
            
            window.dispatchEvent( new CustomEvent('prepage-show',{
                detail: { page: "more" }                   
            }))
        }
    }

})