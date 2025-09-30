/**
 * @swagger
 * /api/health:
 *  get:
 *      tags:
 *          - System
 *      summary: Verify if the API server is running or not
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                                  example: OK
 */