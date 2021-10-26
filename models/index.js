const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//TODO: User - Post - one to many
User.hasMany(Blog, { foreignKey: 'user_id', onDelete: 'CASCADE' });

//TODO: Post - User - one to one
Blog.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

//TODO: User - Comment - one to many
User.hasMany(Comment, { foreignKey: 'user_id', onDelete: 'CASCADE' });

//TODO: Comment - User - one to one
Comment.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

//TODO: Post - Comment - one to many
Blog.hasMany(Comment, { foreignKey: 'post_id', onDelete: 'CASCADE' });

//TODO: Comment - Post - one to one
Comment.belongsTo(Blog, { foreignKey: 'post_id', onDelete: 'CASCADE' });

module.exports = { User, Blog, Comment };
