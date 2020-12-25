const DB_USER = 'Antfere';
const PASSWORD = encodeURIComponent('@4^7JAMaNt *'); 

module.exports = {
    mongoURI: `mongodb://${DB_USER}:${PASSWORD}@localhost:27017/music_list?authSource=admin`
}