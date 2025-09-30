/**
 * @swagger
 * /api/v1/posts/{postId}/comments:
 *   get:
 *     summary: Get all comments for a post by ID
 *     tags:
 *       - Comments
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
 *         description: Comments retrieved successfully
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /api/v1/posts/{postId}/comments:
 *  post:
 *      tags:
 *          - Comments
 *      summary: Add comment on a post
 *      parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *           description: The postId of the post to retrieve
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          content:
 *                              type: string
 *                              example: Nice Post
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      example: 123
 *                                  content:
 *                                      type: string
 *                                      example: Nice Post
 *          400:
 *              description: Please provide valid info.
 */

/**
 * @swagger
 * /api/v1/posts/{postId}/comments/{commentId}:
 *  delete:
 *      tags:
 *          - Comments
 *      summary: soft deletes a comment for a user
 *      parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *           description: The postId of the post of which comment you want to delete
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: integer
 *           description: The ID of the comment to retrieve
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Success
 */