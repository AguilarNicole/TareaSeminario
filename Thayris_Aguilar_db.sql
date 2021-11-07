create database Thayris_Aguilar_db;
use Thayris_Aguilar_db;

DELETE FROM empleado WHERE id_emp=1;

drop database Thayris_Aguilar_db;

create table empleado(
id_emp int primary key auto_increment,
nombre_empleado varchar(50),
telefono_empleado varchar(10),
correo_empleado varcharacter(50),
direccion_empleado varchar(50),
edad_empleado varchar(50),
id_dep int,
foreign key (id_dep) references departamentos(id_dep)
);

create table departamentos(
id_dep int primary key auto_increment,
nombre_departamento varchar(100),
descripcion_departamento varchar(100)
);