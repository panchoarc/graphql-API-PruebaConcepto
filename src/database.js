import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/mongodbgraphql", {
      useNewUrlParser: true,
    });

    console.log(">>> DB is connnected");
  } catch(e) {
    console.log("Something goes Wrong");
    console.log(e);
  }
}
