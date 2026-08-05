module.komik = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sinopsis: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tahun_terbit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        penulis_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "komik",
        timestamps: true
    });

    Komik.associate = (models) => {
        Komik.belongsTo(models.penulis, {
            foreignKey: 'penulis_id',
            as: 'penulis'
        });
        Komik.belongsToMany(models.genre, {
            through: 'komik_genre',
            foreignKey: 'komik_id',
            otherKey: 'genre_id',
            as: 'genre'
        });
        
    };

    return Komik;
};