# student-Statistics-MongoDB


# myNotes
* create schema like this simple way :import mongoose from 'mongoose';
const { Schema } = mongoose;

const Video = new Schema({
  title:  String, // String is shorthand for {type: String}
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }, 
  userName: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});
* we can make a link between two different schemas using two ways:
the first one:by add reference  to model like here:   userName: [{ type: Schema.Types.ObjectId, ref: 'User' }]
that will make a link between model Video and model User so every time we will create a new data to User model we will need to add VideoId as well and using $addtoset to add userId for userName Field on Video model as well
* second way by Create subdocs:How do you use subdocuments in Mongoose?
Image result for subdocuments mongoose
In Mongoose, subdocuments are documents that are nested in other documents. You can spot a subdocument when a schema is nested in another schema.
...
The easiest way to update subdocuments is:
Use findOne to find the document.
Get the array.
Change the array.
Run save.

* `populate('posts')` after add populate like this example: User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('posts')
      
here we will get user data with all data which has a refrence with another Schema too 

* `$pull` sometimes if we has a ref with another schema we will need to use $pull if we REMOVE refrenced data from the main schema wich has a ref using $pull 
* like this way `we need to remove this exact video from refrenced User Schema`:   Video.findOneAndRemove({ _id: req.params.videoId })
      .then((video) =>
        !video
          ? res.status(404).json({ message: 'No video with this id!' })
          : User.findOneAndUpdate(
              { videos: req.params.videoId },
              { $pull: { videos: req.params.videoId } },
              { new: true }
            )
      )
  here need to find exact video data that we want to remove it using Video.findone,after we found it we need to update UserSchema by remove ref Video from User it self,we will find the ref video's data by id and using `$pull` to pull videos data from User model 
  

# screen shoot for the results using POSTMan will shown down:
<img width="1440" alt="Screen Shot 2022-04-24 at 7 09 06 PM" src="https://user-images.githubusercontent.com/95061565/165002509-e76cfedb-5434-4cd3-b3d5-9c26fb18abd5.png">
<img width="1440" alt="Screen Shot 2022-04-24 at 7 02 31 PM" src="https://user-images.githubusercontent.com/95061565/165002522-f4ecfd9e-373e-4cf0-9a2d-59b1a4ea9837.png">
<img width="1440" alt="Screen Shot 2022-04-24 at 7 02 46 PM" src="https://user-images.githubusercontent.com/95061565/165002528-d82b2180-fad5-40fd-907c-a47b3b8fee9c.png">
<img width="1440" alt="Screen Shot 2022-04-24 at 7 05 25 PM" src="https://user-images.githubusercontent.com/95061565/165002532-457b88ea-bf17-4f1e-a892-6a46e762e59e.png">
<img width="1440" alt="Screen Shot 2022-04-24 at 7 06 00 PM" src="https://user-images.githubusercontent.com/95061565/165002534-86076556-8caf-4d5f-bcca-ee8dfaacd64f.png">


# contact me here for any question
(GmailAccount)[nameesmohammed12@gmail.com]
(gitHub)[https://github.com/namees-github]
