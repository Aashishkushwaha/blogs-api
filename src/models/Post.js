import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Post = sequelize.define('post', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type : DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    timestamps: true
});