'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Category Schema
 */
var CategorySchema = new Schema({
    // Category model fields
    // ... (we will add properties here soon...)
});

// add the model name and schema to the mongoose model.
mongoose.model('Category', CategorySchema);
