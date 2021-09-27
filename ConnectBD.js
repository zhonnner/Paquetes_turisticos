//Grupo 3

const connection = require('express-myconnection');
const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'paquetes_turisticos2'
});
con.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('la base de datos esta conectada!')
    }
});

con.query("select * from cliente", (err,res,campos) =>{
    console.log(res);
});
con.query("UPDATE Compra set Estado = 1 WHERE Id_compra = 1;", (err,res,campos) =>{
    console.log(res);
});
con.query('UPDATE Paquete set Fecha_llegada = "2021-9-26" WHERE Id_paquete = 1;', (err,res,campos) =>{
    console.log(res);
});
con.query('UPDATE Paquete set Fecha_salida = "2021-9-30" WHERE Id_paquete = 1;', (err,res,campos) =>{
    console.log(res);
});
con.query("ALTER TABLE cliente MODIFY COLUMN Correo varchar(50);", (err,res,campos) =>{
    console.log(res);
});
con.query('DELETE FROM cliente where Rut = "19.533.610-5";', (err,res,campos) =>{
    console.log(res);
});
con.query('insert into viaje(Id_viaje, Fecha_viaje, Hora_viaje, Origen, Destino)VALUES	(10, 2021-09-01, "11:00", "Valpo", "Tokyo");', (err,res,campos) =>{
    console.log(res);
});
con.query('insert into cliente(Rut,Nombre_cliente,Correo,Direccion_cliente)VALUES	("11.111.119-9", "geraldine", "gera@gmail.com", "egaña 622"),("11.111.121-1", "arnold", "hi1@gmail.com", "oceano pacifico 1");', (err,res,campos) =>{
    console.log(res);
});
con.query('insert into estadia(Id_estadia, Direccion_estadia, Telefono_estadia, Capacidad_estadia, nombre_estadia)VALUES (10, "Calle 10 Berlin", "11111121", 30, "Hotel 10");', (err,res,campos) =>{
    console.log(res);
});
con.query('SELECT * FROM cliente;', (err,res,campos) =>{
    console.log(res);
});
con.query('select * from Estadia natural join Paquete_Estadia ;', (err,res,campos) =>{
    console.log(res);
});
con.query('SELECT * from Viaje natural join Compra_viaje;', (err,res,campos) =>{
    console.log(res);
});
con.query('DELETE FROM estadia where nombre_estadia = "hotel 11";', (err,res,campos) =>{
    console.log(res);
});
con.query('drop table borrar;', (err,res,campos) =>{
    console.log(res);
});

con.end;

    
