
class userRepository{
    constructor(db){
        this.db = db;
    }

    async getAllUsers(){
        const rows = await this.db.query("SELECT * FROM personas");
        return rows;
    }
    async getUserById(id){
        const rows = await this.db.query("SELECT * FROM personas WHERE id = ?", [id]);
        return rows[0];
    }
    async createUser(user){
        const rows = await this.db.query("INSERT INTO personas (nombre, apellido, edad) VALUES (?, ?, ?)", [user.nombre, user.apellido, user.edad]);
        return rows.insertId;
    }
    async updateUser(id, user){
        const rows = await this.db.query("UPDATE personas SET nombre = ?, apellido = ?, edad = ? WHERE id = ?", [user.nombre, user.apellido, user.edad, id]);
        return rows.affectedRows;
    }
    async deleteUser(id){
        const rows = await this.db.query("DELETE FROM personas WHERE id = ?", [id]);
        return rows.affectedRows;
    }
}

export default userRepository;