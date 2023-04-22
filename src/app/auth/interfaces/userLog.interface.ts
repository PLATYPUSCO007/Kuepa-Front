export interface UserLog{
    usuario: string;
    password: string;
}

export interface UserRegister {
    nombre:       string;
    usuario:      string;
    password:     string;
    tipo_usuario: string;
}

export interface UserLogueado {
    _id:          string;
    nombre:       string;
    usuario:      string;
    password:     string;
    tipo_usuario: string;
    __v:          number;
}