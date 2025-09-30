import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const PostLike = sequelize.define('post_likes', {
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