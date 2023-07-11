// Core Module
// File System

const fs = require("fs");
// console.log(fs);

// Menuliskan string file secara (Synchronous)
// try {
//  fs.writeFileSync('data/test.txt', 'Hello World Swecara Synchronous');
// } catch(e) {
//     console.log(e);
// }

// Menuliskan string ke file (Asynchoronus)
// fs.writeFile('data/test.txt', 'Hello world secara asynchronous', (err) => {
//     console.log(err);
// });

// Membaca  Isi File (Synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data.toString());

// Membaca  Isi File ( Asynchoronous )
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


//! Membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
   fs.mkdirSync(dirPath);
}

//* Membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]','utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve,reject) => {
      rl.question(pertanyaan, (nama) => {
        resolve(nama);
    });
  });
};

// const pertanyaan2= () => {
//   return new Promise((resolve,reject) => {
//     rl.question('Masukkan email  anda :', (email) => {
//       resolve(email);
//    });
//  });
// };

const main = async () => {
  const nama = await pertanyaan('Masukkan nama anda : ');
  const email = await  pertanyaan('Masukkan email anda :');
  
  const contact = { nama, email };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);
  
  // contacts.push(contact)


  fs.writeFileSync("data/contacts.json", JSON.stringify(contact));
  console.log('Terima kasih telah memasukkan data.');
  rl.close();
};

main();

 




// rl.question("Masukkan nama anda : ", (nama) => {
//   rl.question("Masukkan No HP anda : ", (noHP) => {
//     const contact = { nama: nama, noHP: noHP };
//     const file = fs.readFileSync("data/contacts.json", "utf-8");
//     const contacts = JSON.parse(file);
//     console.log(contact);
//     console.log(contacts);

//     fs.writeFileSync("data/contacts.json", JSON.stringify(contact));
//     rl.close();
//   });
// });
