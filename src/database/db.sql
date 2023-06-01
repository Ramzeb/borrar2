DROP DATABASE IF EXISTS mechanicthree;
CREATE DATABASE IF NOT EXISTS mechanicthree;
USE mechanic;

    CREATE TABLE cliente(
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
        nombre VARCHAR(30) NOT NULL, 
        nif VARCHAR(15) NOT NULL, 
        ciudad VARCHAR(15) NOT NULL, 
        direccion VARCHAR(30) NOT NULL,
        telefono VARCHAR(20) NOT NULL
    );

    CREATE TABLE auto(
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
        matricula VARCHAR(10) NOT NULL,
        marca VARCHAR(10) NOT NULL, 
        modelo INT UNSIGNED NOT NULL,
        color VARCHAR(10), 
        id_cliente INT UNSIGNED NOT NULL,
        FOREIGN KEY (id_cliente) REFERENCES cliente(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

    CREATE TABLE revision(
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
        filtro BOOLEAN DEFAULT 0,
        freno BOOLEAN DEFAULT 0,
        aceite BOOLEAN DEFAULT 0,
        otros VARCHAR(100)
    );

    CREATE TABLE auto_revision(
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
        id_auto INT UNSIGNED NOT NULL,
        id_revision INT UNSIGNED NOT NULL,
        FOREIGN KEY (id_auto)  REFERENCES auto(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (id_revision) REFERENCES revision(id) ON UPDATE CASCADE ON DELETE CASCADE
    );


    INSERT INTO cliente(nombre, nif, ciudad, direccion, telefono) VALUES 
    ('Ramiro Molina Zeballos', '11111111', 'Cochabamba', 'Av. Bolivar', '11111111'),
    ('Ramzeb Molder Zaprierc', '22222222', 'Cochabamba', 'Av. Santa Cruz', '22222222'),
    ('Seydi Guzman Montaño', '33333333', 'Cochabamba', 'Av. Bolivar', '33333333');

    INSERT INTO revision(filtro, freno, aceite, otros) VALUES 
    (0,1,1,''),
    (1,1,1,''),
    (1,0,0,'Cambio 3 bujías de motor');

    INSERT INTO auto(matricula, marca, modelo, color, id_cliente) VALUES
    ('2142-KMN', 'TOYOTA', 2021, 'rojo',1),
    ('1281-OPY', 'NISSAN', 2012, 'azul marino',2),
    ('2360-NHG', 'BMW', 2023, 'negro mate',3);

    INSERT INTO auto_revision(id_auto, id_revision) VALUES
    (1, 1),
    (2, 2),
    (3, 3);