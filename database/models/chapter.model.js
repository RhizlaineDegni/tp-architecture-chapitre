const mongoose = require('mongoose');
const schema = mongoose.Schema;

const chapterSchema = schema({
  title: { 
    type: String,
    required: [true, 'On doit preciser un titre']
  },
  isbn: { type: Number },
  genre: { type: String },
  auteur: { type: String },
  nbrOfChapter: { type: Number, required: [true, 'preciser nb de Chapitres'] },
  index: Number,
  active: Boolean,
}, {
  timestamps: true
})

chapterSchema.pre('save', function(){
  return Chapters.countDocuments().exec().then( nbr => this.index = nbr + 1);
})

const Chapters = mongoose.model('chapters', chapterSchema);

module.exports = Chapters;