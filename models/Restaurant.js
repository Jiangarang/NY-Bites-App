'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
   borough: String,
   cuisine: String,
   grades: Mixed,
   name: String,
} );

module.exports = mongoose.model( 'Restaurant', courseSchema );
