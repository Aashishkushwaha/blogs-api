/**
 * @swagger
 * /api/v1/posts/all:
 *  get:
 *      tags:
 *          - Posts
 *      summary: Return all available posts
 *      responses:
 *          200:
 *              description: Returns all posts
 */

/**
 * @swagger
 * /api/v1/posts:
 *  get:
 *      tags:
 *          - Posts
 *      security:
 *          - bearerAuth: []
 *      summary: Return all available posts for current user
 *      responses:
 *          200:
 *              description: Returns all posts for current user
 */

/**
 * @swagger
 * /api/v1/posts/{postId}:
 *   get:
 *     summary: Get a post by ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The postId of the post to retrieve
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "My First Blog Post"
 *                 comment:
 *                   type: string
 *                   example: "This is the content of my blog post."
 *                 is_deleted:
 *                   type: boolean
 *                   example: false
 *                 Comments:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 10
 *                       user_id:
 *                         type: integer
 *                         example: 2
 *                       comment:
 *                         type: string
 *                         example: "Nice post!"
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /api/v1/posts/{postId}:
 *   patch:
 *     summary: Update a post by ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The postId of the post to retrieve
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: "My first updated blog post"
 *               content:
 *                 type: string
 *                 example: "This is my updated first blog content"
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "My first updated blog post"
 *                 comment:
 *                   type: string
 *                   example: "This is my updated first blog content"
 *       404:
 *         description: Post not found
 *       400:
 *         description: Please provide all valid info.
 */

/**
 * @swagger
 * /api/v1/posts/{postId}:
 *   delete:
 *     summary: Soft delete a post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The postId of the post to delete
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post soft deleted successfully
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /api/v1/posts/{postId}/like:
 *   post:
 *     summary: Like a post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The postId of the post you want to like
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post liked successfully
 *       404:
 *         description: Post not found
 *       400:
 *         description: Please provide all info.
 */

/**
 * @swagger
 * /api/v1/posts/{postId}/unlike:
 *   delete:
 *     summary: Unlike a post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The postId of the post you want to unlike
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post unliked successfully
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /api/v1/posts/{postId}/favorite:
 *   post:
 *     summary: Favorite a post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The postId of the post you want to favorite
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post favorited successfully
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /api/v1/posts:
 *   post:
 *     summary: Create a new post
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []   # 👈 auth only here
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: "My first blog post"
 *               content:
 *                 type: string
 *                 example: "This is my first blog content"
 *     responses:
 *       201:
 *         description: Post created successfully
 *       401:
 *         description: Unauthorized - missing or invalid token
 */
