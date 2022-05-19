import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const DBurl = "mongodb+srv://<user>:<password>@cluster0.7ewwn.mongodb.net/test";
const DBname = "test";
const DBCollection = "movies";

class MongoDB{

  constructor(DBurl, DBname, DBcollection){
      this.uri=DBurl;
      this.databaseName = DBname;
      this.MongoClient = new MongoClient(DBurl);
      this.DBcollection = DBcollection;
      this.DB;
      
  }
  async connectDB(){
    try {
      await this.MongoClient.connect();
      this.DB = this.MongoClient.db(this.databaseName); 
    } catch (error) {
      throw error;
    }
  }
  
  async disconnectDB(){
    try {
      await this.MongoClient.close();
    } catch (error) {
      throw error;
    }
  }
  async getmovies() {
    try {
      await this.connectDB();
      // await client.connect();
      // await this.connectDB();
      // const database = client.db("test");
      // const movies = database.collection("movies");
      // const cursor = await movies.find().toArray();
      const movies = this.DB.collection(this.DBcollection);
      const cursor = await movies.find().toArray();
      return cursor;
    }catch(error){
        throw error; 
    } finally {
      await this.disconnectDB();
    }
  }

  async getMovieById(idNumber){

    try {
      await this.connectDB();
      const movies = this.DB.collection(this.DBcollection);
      const cursor = await movies.find({ "id": idNumber }).toArray();
      return cursor;
    }catch(error){
      throw error; 
    } finally {
      await this.disconnectDB();
    }
  }

  async getMovieBy(elem) {
    try {
      await this.connectDB();
      // TODO solucionar tipaje let elementKey para pasarlo a la query
      let elementKey = Object.keys(elem)[0];
      console.log("------key-------"+elementKey);
      let elementValue = Object.values(elem)[0];
      if (Number.isInteger(elementValue)){
        console.log("------val-------"+elementValue);
      }
      let query = '{ "'+elementKey+'": { "$eq": '+elementValue+' } }';

      const movies = this.DB.collection(this.DBcollection);
      const cursor = await movies.find(JSON.parse(query)).toArray();
      console.log(cursor);
      return cursor;
    }catch(error){
      throw error; 
    } finally {
      await this.disconnectDB();
    }
  }

  async removeMovie(id) {
      console.log(`---> movies::removeMovie = ${id}`);
      try {
        await this.connectDB();
        const movies = this.DB.collection(this.DBcollection);
        const cursor = await movies.deleteOne({"id": { $eq: id}});
        return cursor;
      }catch(error){
          throw error; 
      } finally {
        await this.disconnectDB();
      }
  }

  async createMovie(req) {
    try {
      console.log('----mongoclient::createmovie');
      await this.connectDB();
      const movies = this.DB.collection(this.DBcollection);
      const cursor = await movies.insertOne(req);
      return cursor;
    }catch(error){
        throw error; 
    } finally {
      await this.disconnectDB();
    }
  }

  async addActor(element){
    try {
      await this.connectDB();
      let id = Object.values(element)[0];
      console.log('----addactorID---'+id);
      let actor = Object.values(element)[1];
      console.log('----addactor---'+actor);
      const movies = this.DB.collection(this.DBcollection);
      const cursor = await movies.updateOne(
        { "id":  id},
        {
            $push: {
                actors: actor
            }
        }
    );
      return cursor;
    }catch(error){
        throw error; 
    } finally {
      await this.disconnectDB();
    }
  }

}
export default new MongoDB(DBurl, DBname, DBCollection);


