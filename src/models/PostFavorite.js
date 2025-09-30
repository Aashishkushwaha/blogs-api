import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const PostFavorite = sequelize.define('post_favorites', {
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true
});