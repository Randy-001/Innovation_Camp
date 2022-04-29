function f1(){
    // var p = document.createElement('input')
    // p.type = 'text'
    // document.body.appendChild(p)
    // var f = document.createElement('input')
    // f.type = 'file'
    // f.id="fid"
    // document.body.appendChild(f)
    var l = document.getElementById('link')
    l.type='text'
    var f = document.getElementById('file')
    f.type='text'
    f.addEventListener('change',()=>{
        console.log(this.value)
    })
    
    
}
document.getElementById('nbtn').addEventListener('click',f1);

// function value(){
//     document.getElementById('file').addEventListener('change',()=>{
//         console.log(this)
//     })
    

// }
