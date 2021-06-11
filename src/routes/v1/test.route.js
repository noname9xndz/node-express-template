const express = require('express');
const validate = require('../../middlewares/validate');
const testController = require('../../controllers/test.controller');

const router = express.Router();

router.get('/todo1', validate(testController.todo1), testController.todo1);

router.post('/todo2', validate(testController.todo2), testController.todo2);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Test Nodejs
 */

/**
 * @swagger
 * /test/todo1:
 *   get:
 *     summary: get dat
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                 $ref: '#/components/schemas/Test'
 */

/**
 * @swagger
 * /test/todo2:
 *   post:
 *     summary: Post dat2222222
 *     tags: [Test]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 format: string
 *             example:
 *               userId: "234242423423"
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                 $ref: '#/components/schemas/Test'
 */
