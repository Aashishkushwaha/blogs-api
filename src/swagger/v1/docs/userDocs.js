/**
 * @swagger
 * /api/v1/users/register:
 *  post:
 *      tags: [User]
 *      summary: Registers a new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - username
 *                          - password
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: john.doe@work.com
 *                          username:
 *                              type: string
 *                              example: john_doe_777
 *                          password:
 *                              type: string
 *                              example: john@doe.777
 *      responses:
 *          201:
 *              description: User registered successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  example: 1234
 *                              email: 
 *                                  type: string
 *                                  example: john.doe@work.com
 *                              username:
 *                                  type: string
 *                                  example.com: john_doe_777
 *          400:
 *              description: Please provide all valid info
 */


/**
 * @swagger
 * /api/v1/users/login:
 *  post:
 *      tags: [User]
 *      summary: Login a  user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: john.doe@work.com
 *                          password:
 *                              type: string
 *                              example: password1
 *      responses:
 *          200:
 *              description: User logged in successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              token:
 *                                  type: string
 *                                  example: qwerty=1234qwerty
 *          400:
 *              description: Please provide all valid info
 */

/**
 * @swagger
 * /api/v1/user/deactivate:
 *  delete:
 *      tags: [User]
 *      summary: Deactivates a user account - soft delete
 *      security:
 *          bearerAuth: []
 *      responses:
 *          200:
 *              description: User account deactivated
 */