import mongoose from 'mongoose';

/* PlantSchema will correspond to a collection in your MongoDB database. */
const PlantSchema = new mongoose.Schema({
  plant_name: {
    /* The name of this plant */

    type: String,
  },
  plant_sex: {
    /* The name of this plant */

    type: String,
  },
  plant_type: {
    /* The name of this plant */

    type: String,
  },
  strain_name: {
    /* The strain of this plant */

    type: String,
  },
  plant_stage: {
    /* The stage of your plant */

    type: String,
  },
  plant_propagation_date: {
    /* The stage of your plant */

    type: Date,
  },
  plant_propagation_type: {
    type: String,
  },
  plant_image: {
    /* Url to plant image */

    type: String,
  },
});

export default mongoose.models.Plant || mongoose.model('Plant', PlantSchema);
