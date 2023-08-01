const fs = require("fs");
const fsPromises = require("fs/promises");

const path= "data.json";

class UserControllers{
    static register(req, res){
        fs.readFile(path,(err, data)=>{
            if(err){
                res.status(400).json({
                    errors:"Eroor membaca data",
                });
            }
            else
            {
                let existingData = JSON.parse(data);
                let {users} = existingData;
                let {name,role,password}= req.body;
                if(name === "" || role === "" || password ===""){
                    return res.status(400).json({errors: "data harus diisi!"});
                }
                let newUsers = {name, role, password, isLogin:false};
                users.push(newUsers);
                let newData = {...existingData,users};

                fs.writeFile(path, JSON.stringify(newData), (err)=>{
                    if(err){
                res.status(400).json({errors: "gagal mentyimpan data"});
                    }
                    else{
                        res.status(201).json({ "message": "Berhasil register" })
                    }
                });
            }
        });
    }

    static findAll(req,res){
        fs.readFile(path,(err,data)=>{
            if(err){
                res.status(400).json({errors:"error baca data"})
            }
            else{
                let realData = JSON.parse(data);
                res.status(200).json({
                    message:"Berhasil get karyawan",
                    data: realData.users,
                });
            }
        });
    }

    static login(req,res){
        fsPromises.readFile(path).
        then((data)=>{
            let employess = JSON.parse(data);
            let {users} = employess;
            let {name, password} = req.body;
            let indexEmp = users.findIndex((user) => user.name === name);
            // console.log(indexEmp);
            if(indexEmp === -1){
                res.status(404).json({message:"error baca data"});
            }
            else{
                let data = users[indexEmp];
                if(data.password == password){
                    data.isLogin = true;
                    users.splice(indexEmp, 1, data);
                    return fsPromises.writeFile(path, JSON.stringify(employess));
                }
                else{
                    res.status(404).json({message:"pasword false!"});
                } 
            }
        })
        .then(()=>{
            res.status(200).json({message:"login!"});
        })
        .catch((error)=>{
            console.log(err);
        });
    }

    static addSiswa(req,res){
        fs.readFile(path,'utf-8',(err,data)=>{
            if(err){
                res.status(400).json({
                    errors:"Error membaca data",
                });
            }
            else{
                let karyawan = JSON.parse(data);
                let isAdminLogin = true;
                // for(let i = 0; i< karyawan.length; i++ ){
                //     if(karyawan[i].role === 'admin' && karyawan[i].isLogin === true){
                //         isAdminLogin = true;
                //         break; 
                //     }
                // }
                if(!isAdminLogin){
                    res.status(401).json({message:"Admin belum login"});
                    return;
                }
                
                let trainerIndex;
                for(let i = 0; i< karyawan.length; i++ ){
                    if(karyawan[i].name === req.params.name && karyawan[i].role === 'trainer'){
                        trainerIndex = i;
                        break; 
                    }
                }

                if(trainerIndex === undefined){
                    res.status(404).json({message:"Trainer tidak ditemukan"});
                    return;
                }

                if (!karyawan[trainerIndex].hasOwnProperty('students')){
                    karyawan[trainerIndex].students = [];
                }

                karyawan[trainerIndex].students.push(req.body);

                fs.writeFile(path, JSON.stringify(karyawan), (err)=>{
                    if(err){
                        res.status(400).json({errors: "gagal mentyimpan data"});
                    }
                    else{
                        res.status(201).json({ "message": "Berhasil add Siswa" })
                    }
                });
            }
        });
    }
}

module.exports= UserControllers;