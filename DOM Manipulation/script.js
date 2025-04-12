// manipulation node
// didalam manupulation node ada beberapa method yang bisa digunakan

// 1. document.createElement() -> ini digunakan untuk membuat elemnt baru didalam html
// 2. document.createTextNode() ->ini digunakan untuk menuliskan teks yang ada didalam element
// 3. node.appendchild() -> ini untuk menambahkan element dan teks yang sudah kita buat di akhir
// 4. node.insertBefore() -> fungsinya sama seperti appenchild tetapi ada hal berbeda yaitu dia kondisi dia menambahkan element atau teks setelah apa
// 5.parentNode.removeChild() ->
// 6. parentNode.replaceChilde() ->



// contoh membuat element baru
const pBaru = document.createElement('p');
const tBaru = document.createTextNode('Paragraf baru');
pBaru.appendChild(tBaru);

// simpan tulisan dan elemnent kedalam document

const sectA = document.getElementById('A');
sectA.appendChild(pBaru);


// menggunakan insert before
const liBaru = document.createElement('li');
const itemBaru = document.createTextNode('Item baru');
liBaru.appendChild(itemBaru);


// menampikan didalam doc html
const ulB = document.querySelector('section#B ul');
const liB = ulB.querySelector('li:nth-child(2)');

ulB.insertBefore(liBaru, liB);


// menghapus item dalam suatu parentv menggunkan removeChilde()
const link = sectA.querySelector('a');
sectA.removeChild(link);


// replace
const sectB = document.getElementById('B');

// mencari p
const p4 = sectB.querySelector('p');

// membuat elemen baru
const h2B = document.createElement('h2');
const th2 = document.createTextNode('ini adalah judul h2');
h2B.appendChild(th2);

sectB.replaceChild(h2B,p4);


